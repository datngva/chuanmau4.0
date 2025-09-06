import { getRssString } from '@astrojs/rss';

import { SITE, METADATA, APP_BLOG } from 'astrowind:config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink, getAsset } from '~/utils/permalinks';

// Lightweight type to safely access potential image src
type MaybeImage = { src?: string };

export const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || '',
    site: import.meta.env.SITE,
    items: posts.map((post) => {
      const link = getPermalink(post.permalink, 'post');
      const categories = Array.isArray(post.tags) ? post.tags.map((t) => t.title).filter(Boolean) : [];
      const author = post.author || undefined;
      const guid = link;
      const updated = post.updateDate ? new Date(post.updateDate) : undefined;
      // enclosure from post.image if present
      let enclosure = '';
      const toAbs = (path: string) => String(new URL(path, import.meta.env.SITE));
      const getMime = (url: string) => {
        const u = url.toLowerCase();
        if (u.endsWith('.jpg') || u.endsWith('.jpeg')) return 'image/jpeg';
        if (u.endsWith('.png')) return 'image/png';
        if (u.endsWith('.webp')) return 'image/webp';
        if (u.endsWith('.gif')) return 'image/gif';
        if (u.endsWith('.svg')) return 'image/svg+xml';
        return undefined;
      };
      if (post.image) {
        const imgUrl = typeof post.image === 'string' ? post.image : (post.image as MaybeImage).src;
        if (imgUrl) {
          const abs = toAbs(imgUrl);
          const mime = getMime(abs);
          enclosure = `
      <enclosure url="${abs}"${mime ? ` type="${mime}"` : ''} />`;
        }
      }
      return {
        link,
        title: post.title,
        description: post.excerpt,
        pubDate: post.publishDate,
        categories,
        author,
        customData: `
      <guid isPermaLink="true">${guid}</guid>${updated ? `
      <atom:updated>${updated.toUTCString()}</atom:updated>` : ''}${enclosure}`,
      };
    }),

    // Add recommended channel-level metadata
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    customData: (() => {
      const feedPath = '/rss.xml';
      const feedUrl = String(new URL(feedPath, import.meta.env.SITE));
      const now = new Date().toUTCString();
      const copyright = SITE.copyright ? SITE.copyright : `${new Date().getFullYear()} ${SITE.name}`;
      const language = SITE.language || 'vi';
      const channelImageUrl = String(new URL(getAsset('/assets/favicons/favicon.svg'), import.meta.env.SITE));
      const siteUrl = String(new URL('/', import.meta.env.SITE));
      return `
    <language>${language}</language>
    <lastBuildDate>${now}</lastBuildDate>
    <copyright>${copyright}</copyright>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <image>
      <url>${channelImageUrl}</url>
      <title>${SITE.name}</title>
      <link>${siteUrl}</link>
    </image>`;
    })(),
    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
