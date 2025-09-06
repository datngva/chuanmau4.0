import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

// Load config from YAML file
const configPath = path.join(process.cwd(), 'src', 'config.yaml');
const configFile = fs.readFileSync(configPath, 'utf8');
const rawConfig = yaml.load(configFile) as any;

// Site configuration
export const SITE = {
  name: rawConfig.site?.name || 'Chuẩn Màu',
  site: rawConfig.site?.site || 'https://chuanmau.com',
  base: rawConfig.site?.base || '/',
  trailingSlash: rawConfig.site?.trailingSlash || false,
  copyright: rawConfig.site?.copyright || '© 2024 Chuẩn Màu. All rights reserved.',
  language: rawConfig.site?.language || 'vi',
  googleSiteVerificationId: rawConfig.site?.googleSiteVerificationId || '',
};

// Metadata configuration
export const METADATA = {
  title: {
    default: rawConfig.metadata?.title?.default || SITE.name,
    template: rawConfig.metadata?.title?.template || '%s — ' + SITE.name,
  },
  description: rawConfig.metadata?.description || 'Website về chuẩn màu và hiệu chuẩn màn hình',
  robots: rawConfig.metadata?.robots || {
    index: true,
    follow: true,
  },
  openGraph: rawConfig.metadata?.openGraph || {
    site_name: SITE.name,
    images: [
      {
        url: '/assets/images/default.jpg',
        width: 1200,
        height: 628,
      },
    ],
    type: 'website',
  },
  twitter: rawConfig.metadata?.twitter || {
    handle: '@chuanmau',
    site: '@chuanmau',
    cardType: 'summary_large_image',
  },
};

// Blog configuration
export const APP_BLOG = {
  isEnabled: rawConfig.apps?.blog?.isEnabled || true,
  postsPerPage: rawConfig.apps?.blog?.postsPerPage || 6,
  isRelatedPostsEnabled: rawConfig.apps?.blog?.isRelatedPostsEnabled || false,
  relatedPostsCount: rawConfig.apps?.blog?.relatedPostsCount || 4,
  post: {
    isEnabled: rawConfig.apps?.blog?.post?.isEnabled || true,
    permalink: rawConfig.apps?.blog?.post?.permalink || '/blog/%slug%',
    robots: rawConfig.apps?.blog?.post?.robots || {
      index: true,
      follow: true,
    },
  },
  list: {
    isEnabled: rawConfig.apps?.blog?.list?.isEnabled || true,
    pathname: rawConfig.apps?.blog?.list?.pathname || 'blog',
    robots: rawConfig.apps?.blog?.list?.robots || {
      index: true,
      follow: true,
    },
  },
  category: {
    isEnabled: rawConfig.apps?.blog?.category?.isEnabled || true,
    pathname: rawConfig.apps?.blog?.category?.pathname || 'category',
    robots: rawConfig.apps?.blog?.category?.robots || {
      index: true,
      follow: true,
    },
  },
  tag: {
    isEnabled: rawConfig.apps?.blog?.tag?.isEnabled || true,
    pathname: rawConfig.apps?.blog?.tag?.pathname || 'tag',
    robots: rawConfig.apps?.blog?.tag?.robots || {
      index: false,
      follow: true,
    },
  },
};

// UI configuration
export const UI = {
  theme: rawConfig.ui?.theme || 'system',
};

// Analytics configuration
export const ANALYTICS = {
  vendors: {
    googleAnalytics: {
      id: rawConfig.analytics?.vendors?.googleAnalytics?.id || 'G-RTJ2270PK0',
      partytown: rawConfig.analytics?.vendors?.googleAnalytics?.partytown || true,
    },
  },
};

// I18N configuration
export const I18N = {
  language: rawConfig.i18n?.language || 'vi',
  textDirection: rawConfig.i18n?.textDirection || 'ltr',
};
