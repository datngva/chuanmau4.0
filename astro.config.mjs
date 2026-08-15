import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import icon from 'astro-icon';
import tasks from './src/utils/tasks';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';

import { ANALYTICS, SITE } from './src/utils/config.ts';
import { localeTags, routeMap } from './src/i18n/ui.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Absolute URL -> hreflang alternates, derived from the i18n route map.
 *
 * @astrojs/sitemap's own `i18n` option infers pairs from the URL structure, so
 * it only matches when both locales share a slug (/privacy/ <-> /en/privacy/).
 * Our English slugs are translated (/bang-gia/ <-> /en/pricing/), so we build
 * the alternates ourselves and hand them to `serialize`.
 */
const sitemapAlternates = new Map();
for (const paths of Object.values(routeMap)) {
  const links = Object.entries(paths).map(([lang, p]) => ({
    lang: localeTags[lang],
    url: new URL(p, SITE.site).href,
  }));
  for (const p of Object.values(paths)) {
    sitemapAlternates.set(new URL(p, SITE.site).href, links);
  }
}

const whenExternalScripts = (items = []) =>
  ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'static',
  image: {
    domains: ['ui-avatars.com'],
  },

  // Vietnamese is the primary language and stays unprefixed at the site root
  // (/, /bang-gia, ...). English lives under /en/ via src/pages/en/*.
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      serialize(item) {
        const links = sitemapAlternates.get(item.url);
        return links ? { ...item, links } : item;
      },
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    tasks(),

    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
      Logger: 1,
    }),
  ],

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
