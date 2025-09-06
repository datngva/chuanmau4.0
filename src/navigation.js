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
          target: '_blank',
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
  actions: [{ text: 'Liên hệ', href: '/lien-he', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Dịch vụ',
      links: [
        { text: 'Kiểm tra màu sắc', href: '/kiem-tra-mau-sac' },
        { text: 'Bảng giá', href: '/bang-gia' },
        { text: 'Download', href: '/download' },
        { text: 'Blog', href: '/blog' },
      ],
    },

    {
      title: 'Thông tin',
      links: [
        { text: 'Điều khoản sử dụng', href: '/terms' },
        { text: 'Quyền riêng tư', href: '/privacy' },
      ],
    },
  ],
//   secondaryLinks: [
//     { text: 'Terms', href: getPermalink('/terms') },
//     { text: 'Privacy Policy', href: getPermalink('/privacy') },
//   ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/chuanmaucom' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://lh3.googleusercontent.com/pw/ABLVV86u2q3gFhS-8BMYQBGYW_DgdUol72pugf7SC1RGrT1h5Gh7YXSmMn_2kZczKGXFMejYQnC701qTxb4imtQe6iSpdJ9zg02MPXnaSAFRCvOdCOUGof7bAONf6sykzrUFsIOk1qRwv07eXKjxcu0tbAbsLw=w32-h32-s-no?authuser=0)]"></span>
    Made by <a class="text-primary hover:underline dark:text-gray-200" href="https://ngdat.com/"> Dat Nguyen</a> · All rights reserved.
  `,
};
