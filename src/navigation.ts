import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';
import { getRoute, useTranslations } from './i18n/utils';
import type { Lang } from './i18n/utils';
import { defaultLang } from './i18n/ui';

const ZALO_URL = 'https://zalo.me/0879025858';
const DISPLAYCAL_URL = 'https://www.dropbox.com/sh/6squicub6nkpmkb/AADPjncb5xLrbOrAA5jFZIeaa?dl=0';

export const getHeaderData = (lang: Lang = defaultLang) => {
  const t = useTranslations(lang);

  // The blog is Vietnamese-only for now, so the English menu links to the
  // software download but not to the Vietnamese articles.
  const knowledgeLinks =
    lang === defaultLang
      ? [
          { text: t('nav.knowledge.blog'), href: getBlogPermalink() },
          { text: t('nav.knowledge.tutorials'), href: getPermalink('tutorials', 'category') },
          { text: t('nav.knowledge.displaycal'), href: DISPLAYCAL_URL, target: '_blank' },
        ]
      : [{ text: t('nav.knowledge.displaycal'), href: DISPLAYCAL_URL, target: '_blank' }];

  return {
    links: [
      {
        text: t('nav.services'),
        links: [
          { text: t('nav.services.calibration'), href: `${getRoute('home', lang)}#features`.replace('//#', '/#') },
          { text: t('nav.services.colorTest'), href: getRoute('colorTest', lang) },
        ],
      },
      {
        text: t('nav.pricing'),
        href: getRoute('pricing', lang),
      },
      {
        text: t('nav.knowledge'),
        links: knowledgeLinks,
      },
      {
        text: t('nav.contact'),
        href: getRoute('contact', lang),
      },
    ],
    actions: [{ text: 'Zalo: 0879.02.5858', href: ZALO_URL, variant: 'primary' as const, target: '_blank' }],
  };
};

export const getFooterData = (lang: Lang = defaultLang) => {
  const t = useTranslations(lang);

  const knowledgeSection =
    lang === defaultLang
      ? [
          {
            title: t('footer.knowledge'),
            links: [
              { text: t('footer.knowledge.blog'), href: getBlogPermalink() },
              { text: t('footer.knowledge.tutorials'), href: getPermalink('tutorials', 'category') },
            ],
          },
        ]
      : [];

  return {
    secondaryLinks: [],
    links: [
      {
        title: t('footer.services'),
        links: [
          { text: t('footer.services.calibration'), href: `${getRoute('home', lang)}#features`.replace('//#', '/#') },
          { text: t('footer.services.colorTest'), href: getRoute('colorTest', lang) },
          { text: t('footer.services.pricing'), href: getRoute('pricing', lang) },
        ],
      },
      ...knowledgeSection,
      {
        title: t('footer.contact'),
        links: [
          { text: t('footer.contact.page'), href: getRoute('contact', lang) },
          { text: 'Zalo: 0879.02.5858', href: ZALO_URL },
        ],
      },
      {
        title: t('footer.info'),
        links: [
          { text: t('footer.info.terms'), href: getRoute('terms', lang) },
          { text: t('footer.info.privacy'), href: getRoute('privacy', lang) },
        ],
      },
    ],
    socialLinks: [
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/chuanmaucom' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    ],
    footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://lh3.googleusercontent.com/pw/ABLVV86u2q3gFhS-8BMYQBGYW_DgdUol72pugf7SC1RGrT1h5Gh7YXSmMn_2kZczKGXFMejYQnC701qTxb4imtQe6iSpdJ9zg02MPXnaSAFRCvOdCOUGof7bAONf6sykzrUFsIOk1qRwv07eXKjxcu0tbAbsLw=w32-h32-s-no?authuser=0)]"></span>
    Made by <a class="text-primary hover:underline dark:text-gray-200" href="https://ngdat.com/"> Dat Nguyen</a> · All rights reserved.
  `,
  };
};
