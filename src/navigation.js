import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export let headerData;
headerData = {
  links: [
    {
      text: 'Kiểm tra màu sắc',
      href: '/kiem-tra-mau-sac',
    },
    {
      text: 'Bảng giá',
      href: '/bang-gia',
    },
    {
      text: 'Download',
      links: [
        {
          text: 'DisplayCAL',
          href: 'https://www.dropbox.com/sh/6squicub6nkpmkb/AADPjncb5xLrbOrAA5jFZIeaa?dl=0',
          target: '_blank'
        },
      ],
    },
    {
      text: 'Lưu trữ',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Hướng dẫn',
          href: getPermalink('tutorials', 'category'),
        },
      ],
    },
  ],
  actions: [{text: 'Liên hệ', href: '/lien-he', target: '_blank'}],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/chuanmaucom' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://lh3.googleusercontent.com/pw/ABLVV86u2q3gFhS-8BMYQBGYW_DgdUol72pugf7SC1RGrT1h5Gh7YXSmMn_2kZczKGXFMejYQnC701qTxb4imtQe6iSpdJ9zg02MPXnaSAFRCvOdCOUGof7bAONf6sykzrUFsIOk1qRwv07eXKjxcu0tbAbsLw=w32-h32-s-no?authuser=0)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://dat-nguyen.com/"> Dat Nguyen</a> · All rights reserved.
  `,
};
