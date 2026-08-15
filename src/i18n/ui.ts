export const defaultLang = 'vi' as const;

export const languages = {
  vi: 'Tiếng Việt',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

/** BCP 47 tags used for <html lang>, og:locale and Intl formatting. */
export const localeTags: Record<Lang, string> = {
  vi: 'vi-VN',
  en: 'en-US',
};

export const ogLocales: Record<Lang, string> = {
  vi: 'vi_VN',
  en: 'en_US',
};

/**
 * Canonical route keys mapped to the real path in each language.
 *
 * Vietnamese paths MUST stay byte-identical to what the site already ships —
 * they are indexed. English paths live under /en/ with English slugs.
 */
export const routeMap = {
  home: { vi: '/', en: '/en/' },
  pricing: { vi: '/bang-gia/', en: '/en/pricing/' },
  contact: { vi: '/lien-he/', en: '/en/contact/' },
  colorTest: { vi: '/kiem-tra-mau-sac/', en: '/en/color-test/' },
  terms: { vi: '/terms/', en: '/en/terms/' },
  privacy: { vi: '/privacy/', en: '/en/privacy/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routeMap;

export const ui = {
  vi: {
    'nav.services': 'Dịch vụ',
    'nav.services.calibration': 'Cân màu màn hình',
    'nav.services.colorTest': 'Kiểm tra màu sắc',
    'nav.pricing': 'Bảng giá',
    'nav.knowledge': 'Kiến thức',
    'nav.knowledge.blog': 'Blog kiến thức',
    'nav.knowledge.tutorials': 'Tài liệu hướng dẫn',
    'nav.knowledge.displaycal': 'Phần mềm DisplayCAL',
    'nav.contact': 'Liên hệ',

    'footer.services': 'Dịch vụ',
    'footer.services.calibration': 'Cân chỉnh màu',
    'footer.services.colorTest': 'Kiểm tra màu sắc',
    'footer.services.pricing': 'Bảng giá dịch vụ',
    'footer.knowledge': 'Kiến thức',
    'footer.knowledge.blog': 'Blog chia sẻ',
    'footer.knowledge.tutorials': 'Hướng dẫn sử dụng',
    'footer.contact': 'Liên hệ',
    'footer.contact.page': 'Trang liên hệ',
    'footer.info': 'Thông tin',
    'footer.info.terms': 'Điều khoản sử dụng',
    'footer.info.privacy': 'Quyền riêng tư',

    'lang.switchLabel': 'Chuyển ngôn ngữ',
    'lang.vi': 'Tiếng Việt',
    'lang.en': 'English',

    'testimonials.title': 'Khách hàng nói gì về chúng tôi',
    'testimonials.subtitle':
      'Sự hài lòng của khách hàng là động lực để chúng tôi không ngừng cải thiện chất lượng dịch vụ.',

    'sticky.call': 'Gọi',
    'sticky.zalo': 'Chat Zalo ngay',

    'breadcrumb.home': 'Trang chủ',

    'business.description':
      'Dịch vụ cân màu màn hình PC, laptop, bảng vẽ chuyên nghiệp tại Hà Nội. Thiết bị X-Rite i1Display Pro — đạt chuẩn Delta-E <2. Phục vụ Designer, Photographer, Video Editor.',
    'business.alternateName': 'Dịch vụ cân màu màn hình Chuẩn Màu',
    'business.areaServed': 'Hà Nội',
    'business.catalogName': 'Dịch vụ cân màu màn hình',
  },
  en: {
    'nav.services': 'Services',
    'nav.services.calibration': 'Monitor calibration',
    'nav.services.colorTest': 'Color check',
    'nav.pricing': 'Pricing',
    'nav.knowledge': 'Resources',
    'nav.knowledge.blog': 'Blog',
    'nav.knowledge.tutorials': 'Guides',
    'nav.knowledge.displaycal': 'DisplayCAL software',
    'nav.contact': 'Contact',

    'footer.services': 'Services',
    'footer.services.calibration': 'Color calibration',
    'footer.services.colorTest': 'Color check',
    'footer.services.pricing': 'Service pricing',
    'footer.knowledge': 'Resources',
    'footer.knowledge.blog': 'Blog',
    'footer.knowledge.tutorials': 'Guides',
    'footer.contact': 'Contact',
    'footer.contact.page': 'Contact page',
    'footer.info': 'Information',
    'footer.info.terms': 'Terms of use',
    'footer.info.privacy': 'Privacy policy',

    'lang.switchLabel': 'Switch language',
    'lang.vi': 'Tiếng Việt',
    'lang.en': 'English',

    'testimonials.title': 'What our customers say',
    'testimonials.subtitle': 'Customer satisfaction is what drives us to keep improving the quality of our service.',

    'sticky.call': 'Call',
    'sticky.zalo': 'Chat on Zalo',

    'breadcrumb.home': 'Home',

    'business.description':
      'Professional color calibration for PC monitors, laptops and pen displays in Hanoi. Calibrated with an X-Rite i1Display Pro to a Delta-E under 2. Serving designers, photographers and video editors.',
    'business.alternateName': 'Chuẩn Màu monitor calibration service',
    'business.areaServed': 'Hanoi',
    'business.catalogName': 'Monitor calibration services',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
