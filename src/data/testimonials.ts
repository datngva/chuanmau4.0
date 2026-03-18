export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Nguyễn Văn Nam',
    role: 'Graphic Designer',
    content: 'Dịch vụ cân màu màn hình của Chuẩn Màu thực sự chuyên nghiệp. Màu sắc sau khi cân chỉnh rất chính xác, giúp mình tự tin hơn trong việc in ấn thiết kế.',
    rating: 5,
  },
  {
    name: 'Trần Thị Thu Thảo',
    role: 'Photographer',
    content: 'Mình đã thử nhiều nơi nhưng Chuẩn Màu là nơi mình ưng ý nhất. Màn hình laptop Dell của mình trước đây bị ám vàng nặng, sau khi cân xong thì màu rất trong và thật.',
    rating: 5,
  },
  {
    name: 'Lê Minh Thành',
    role: 'Video Editor',
    content: 'Phòng dựng phim của mình có 3 màn hình khác nhau, Chuẩn Màu đã giúp đồng bộ màu sắc cả 3 màn hình để mình làm việc chuẩn xác hơn. Rất hài lòng.',
    rating: 5,
  },
  {
    name: 'Hoàng Anh Tuấn',
    role: 'UI/UX Designer',
    content: 'Cảm ơn Chuẩn Màu đã hỗ trợ cân màu tận nơi rất nhiệt tình. Sau khi cân xong còn hướng dẫn mình cách cài đặt Profile màu chi tiết.',
    rating: 5,
  },
  {
    name: 'Phạm Thanh Hương',
    role: 'Digital Artist',
    content: 'Bảng vẽ Wacom của mình hiển thị màu khá sai so với màn hình chính. Sau khi được Chuẩn Màu xử lý thì hai bên đã khớp 95%, vẽ sướng hơn hẳn.',
    rating: 5,
  },
  {
    name: 'Đặng Quốc Bảo',
    role: 'Motion Designer',
    content: 'Dịch vụ nhanh gọn, chuyên nghiệp. Mình cân tại cửa hàng số 9 Duy Tân, kỹ thuật viên làm rất kỹ và giải đáp mọi thắc mắc của mình.',
    rating: 5,
  },
];
