import type { Lang } from './ui';

/**
 * Structured, per-language content for the marketing components.
 *
 * Short UI labels live in ./ui.ts; this file holds the longer editorial copy
 * so the components stay presentational.
 */

export interface HeroSlide {
  tag: string;
  title: string;
  desc: string;
  cta1: { text: string; href: string };
  cta2: { text: string; href: string };
  badge: { num: string; label: string };
  alt: string;
}

const ZALO = 'https://zalo.me/0879025858';
const TEL = 'tel:0879025858';

export const heroSlides: Record<Lang, HeroSlide[]> = {
  vi: [
    {
      tag: 'Dịch vụ chuyên nghiệp · Hà Nội',
      title: 'Cân màu <span>chính xác</span> cho mọi màn hình',
      desc: 'Thiết bị X-Rite i1Display Pro — đạt chuẩn Delta-E <2. Phục vụ Designer, Photographer, Video Editor tại Hà Nội.',
      cta1: { text: 'Đặt lịch qua Zalo', href: ZALO },
      cta2: { text: '0879.02.5858', href: TEL },
      badge: { num: '500+', label: 'Màn hình đã cân màu' },
      alt: 'Kỹ thuật viên cân màu màn hình bằng thiết bị X-Rite i1Display Pro tại Hà Nội',
    },
    {
      tag: 'Dịch vụ tận nơi · Toàn Hà Nội',
      title: 'Kỹ thuật viên đến <span>tận nhà</span> bạn',
      desc: 'Không cần mang màn hình đi đâu. Chúng tôi mang thiết bị đến, cân chỉnh tại chỗ — bảo hành 6 tháng.',
      cta1: { text: 'Đặt lịch tại nhà', href: ZALO },
      cta2: { text: 'Xem bảng giá', href: '/bang-gia/' },
      badge: { num: '200.000đ', label: 'Tại nhà / màn hình đầu' },
      alt: 'Dịch vụ cân màu màn hình tận nơi tại Hà Nội — kỹ thuật viên đến tận nhà',
    },
    {
      tag: 'Wacom · Huion · XP-Pen',
      title: 'Cân màu <span>bảng vẽ</span> cho Creative',
      desc: 'Màu sắc chính xác trên Wacom, Huion, XP-Pen. Xuất file ICC Profile — cài lại sau khi format không mất màu.',
      cta1: { text: 'Tư vấn miễn phí', href: ZALO },
      cta2: { text: 'Gọi ngay', href: TEL },
      badge: { num: '6T', label: 'Bảo hành miễn phí' },
      alt: 'Cân màu bảng vẽ Wacom Huion XP-Pen — xuất ICC Profile chuyên nghiệp',
    },
  ],
  en: [
    {
      tag: 'Professional service · Hanoi',
      title: '<span>Accurate</span> color calibration for every display',
      desc: 'Calibrated with the X-Rite i1Display Pro to a Delta-E under 2. Trusted by designers, photographers and video editors in Hanoi.',
      cta1: { text: 'Book via Zalo', href: ZALO },
      cta2: { text: '+84 879 02 5858', href: TEL },
      badge: { num: '500+', label: 'Displays calibrated' },
      alt: 'Technician calibrating a monitor with an X-Rite i1Display Pro in Hanoi',
    },
    {
      tag: 'On-site service · Across Hanoi',
      title: 'A technician comes <span>to you</span>',
      desc: 'No need to carry your monitor anywhere. We bring the equipment and calibrate on site — backed by a 6-month warranty.',
      cta1: { text: 'Book an on-site visit', href: ZALO },
      cta2: { text: 'See pricing', href: '/en/pricing/' },
      badge: { num: '200,000₫', label: 'On-site / first display' },
      alt: 'On-site monitor calibration service in Hanoi — technician visiting a customer',
    },
    {
      tag: 'Wacom · Huion · XP-Pen',
      title: '<span>Pen display</span> calibration for creatives',
      desc: 'Accurate color on Wacom, Huion and XP-Pen tablets. We export your ICC profile so you can reinstall it after a system reset.',
      cta1: { text: 'Free consultation', href: ZALO },
      cta2: { text: 'Call now', href: TEL },
      badge: { num: '6M', label: 'Free warranty' },
      alt: 'Wacom, Huion and XP-Pen tablet calibration with professional ICC profile export',
    },
  ],
};

export interface Usp {
  title: string;
  description: string;
  icon: string;
}

export const usps: Record<Lang, Usp[]> = {
  vi: [
    {
      title: 'X-Rite i1Display Pro',
      description: 'Thiết bị đo màu chuyên nghiệp hàng đầu thế giới',
      icon: 'tabler:device-laptop',
    },
    { title: 'Chuẩn Delta-E < 2', description: 'Độ chính xác màu sắc theo chuẩn quốc tế', icon: 'tabler:target' },
    {
      title: 'Bảo hành 6 tháng',
      description: 'Hỗ trợ kỹ thuật trọn đời, tư vấn & kiểm tra miễn phí',
      icon: 'tabler:shield-check',
    },
    { title: '500+ màn hình', description: 'Đã phục vụ hàng trăm khách hàng tại Hà Nội', icon: 'tabler:users' },
  ],
  en: [
    {
      title: 'X-Rite i1Display Pro',
      description: 'One of the industry-leading colorimeters worldwide',
      icon: 'tabler:device-laptop',
    },
    { title: 'Delta-E under 2', description: 'Color accuracy held to international standards', icon: 'tabler:target' },
    {
      title: '6-month warranty',
      description: 'Lifetime technical support, free advice and re-checks',
      icon: 'tabler:shield-check',
    },
    { title: '500+ displays', description: 'Hundreds of customers served across Hanoi', icon: 'tabler:users' },
  ],
};

export const partnersLabel: Record<Lang, string> = {
  vi: 'Thiết bị & màn hình chúng tôi đã hỗ trợ',
  en: 'Hardware and displays we have worked with',
};

export const partnerDescriptions: Record<Lang, Record<string, string>> = {
  vi: {
    'X-Rite': 'Thiết bị đo màu',
    Wacom: 'Bảng vẽ điện tử',
    Huion: 'Bảng vẽ điện tử',
    'XP-Pen': 'Bảng vẽ điện tử',
    Datacolor: 'Thiết bị đo màu',
    Dell: 'Màn hình chuyên nghiệp',
    ASUS: 'Màn hình ProArt',
    LG: 'Màn hình IPS',
  },
  en: {
    'X-Rite': 'Colorimeters',
    Wacom: 'Pen displays',
    Huion: 'Pen displays',
    'XP-Pen': 'Pen displays',
    Datacolor: 'Colorimeters',
    Dell: 'Professional monitors',
    ASUS: 'ProArt monitors',
    LG: 'IPS monitors',
  },
};

export interface LocalizedTestimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
}

export const testimonialsByLang: Record<Lang, LocalizedTestimonial[]> = {
  vi: [
    {
      name: 'Nguyễn Văn Nam',
      role: 'Graphic Designer',
      content:
        'Dịch vụ cân màu màn hình của Chuẩn Màu thực sự chuyên nghiệp. Màu sắc sau khi cân chỉnh rất chính xác, giúp mình tự tin hơn trong việc in ấn thiết kế.',
      rating: 5,
    },
    {
      name: 'Trần Thị Thu Thảo',
      role: 'Photographer',
      content:
        'Mình đã thử nhiều nơi nhưng Chuẩn Màu là nơi mình ưng ý nhất. Màn hình laptop Dell của mình trước đây bị ám vàng nặng, sau khi cân xong thì màu rất trong và thật.',
      rating: 5,
    },
    {
      name: 'Lê Minh Thành',
      role: 'Video Editor',
      content:
        'Phòng dựng phim của mình có 3 màn hình khác nhau, Chuẩn Màu đã giúp đồng bộ màu sắc cả 3 màn hình để mình làm việc chuẩn xác hơn. Rất hài lòng.',
      rating: 5,
    },
    {
      name: 'Hoàng Anh Tuấn',
      role: 'UI/UX Designer',
      content:
        'Cảm ơn Chuẩn Màu đã hỗ trợ cân màu tận nơi rất nhiệt tình. Sau khi cân xong còn hướng dẫn mình cách cài đặt Profile màu chi tiết.',
      rating: 5,
    },
    {
      name: 'Phạm Thanh Hương',
      role: 'Digital Artist',
      content:
        'Bảng vẽ Wacom của mình hiển thị màu khá sai so với màn hình chính. Sau khi được Chuẩn Màu xử lý thì hai bên đã khớp 95%, vẽ sướng hơn hẳn.',
      rating: 5,
    },
    {
      name: 'Đặng Quốc Bảo',
      role: 'Motion Designer',
      content:
        'Dịch vụ nhanh gọn, chuyên nghiệp. Mình cân tại cửa hàng số 9 Duy Tân, kỹ thuật viên làm rất kỹ và giải đáp mọi thắc mắc của mình.',
      rating: 5,
    },
  ],
  en: [
    {
      name: 'Nguyễn Văn Nam',
      role: 'Graphic Designer',
      content:
        'Chuẩn Màu’s calibration service is genuinely professional. The colors after calibration are very accurate, which makes me far more confident when sending designs to print.',
      rating: 5,
    },
    {
      name: 'Trần Thị Thu Thảo',
      role: 'Photographer',
      content:
        'I had tried several places, but Chuẩn Màu is the one I am happiest with. My Dell laptop screen used to have a heavy yellow cast; after calibration the colors are clean and true.',
      rating: 5,
    },
    {
      name: 'Lê Minh Thành',
      role: 'Video Editor',
      content:
        'My editing suite runs three different monitors. Chuẩn Màu matched the color across all three so I can work far more accurately. Very satisfied.',
      rating: 5,
    },
    {
      name: 'Hoàng Anh Tuấn',
      role: 'UI/UX Designer',
      content:
        'Thanks to Chuẩn Màu for the on-site calibration — they were very helpful. Afterwards they walked me through installing the color profile step by step.',
      rating: 5,
    },
    {
      name: 'Phạm Thanh Hương',
      role: 'Digital Artist',
      content:
        'My Wacom tablet showed noticeably different colors from my main monitor. After Chuẩn Màu sorted it out the two match about 95% — drawing is much more enjoyable.',
      rating: 5,
    },
    {
      name: 'Đặng Quốc Bảo',
      role: 'Motion Designer',
      content:
        'Fast and professional. I had it done at the shop on 9 Duy Tân; the technician was thorough and answered every question I had.',
      rating: 5,
    },
  ],
};
