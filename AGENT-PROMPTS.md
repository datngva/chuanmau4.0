# Agent Prompts — chuanmau.com

> Copy-paste các prompt này vào Antigravity Agent Manager để giao việc

---

## Sprint 1: Navigation Fix (30 phút)

```
Đọc file .gemini/antigravity/brain/ia-structure.md và .agents/skills/ia-navigation/SKILL.md trước khi bắt đầu.

Nhiệm vụ:
1. Tìm file config navigation (có thể là src/components/Header.astro hoặc src/data/nav.ts)
2. Đổi cấu trúc menu thành 4 items: Dịch vụ | Bảng giá | Kiến thức | Liên hệ
3. Chuyển "DisplayCAL" từ dropdown "Download" vào dropdown "Kiến thức"
4. Xóa dropdown "Download" và "Lưu trữ" khỏi nav chính
5. "Liên hệ" styled as primary button (nổi bật hơn các item khác)
6. Chạy dev server và chụp screenshot để verify
```

---

## Sprint 2: Thêm Google Maps + Giờ mở cửa (20 phút)

```
Đọc file .gemini/antigravity/brain/ux-audit.md (Vấn đề 5) trước khi bắt đầu.

Nhiệm vụ — chỉnh sửa src/pages/lien-he.astro:
1. Thêm giờ mở cửa: "Thứ 2 – Thứ 7 · 8:00 – 18:00" vào phần thông tin liên hệ
2. Thêm Google Maps embed cho cơ sở 1:
   - Địa chỉ: Số 9 Duy Tân, Cầu Giấy, Hà Nội
   - Dùng iframe embed từ Google Maps
3. Thêm Google Maps embed cho cơ sở 2:
   - Địa chỉ: Toà A1 - CC IA20 Ciputra, Phú Thượng, Hà Nội
4. Layout: 2 cột trên desktop (thông tin liên hệ | bản đồ), 1 cột trên mobile
5. Chạy preview và verify trên mobile 375px
```

---

## Sprint 3: Fix CTA Bảng giá (15 phút)

```
Đọc file .agents/skills/cta-patterns/SKILL.md trước khi bắt đầu.

Nhiệm vụ — chỉnh sửa src/pages/bang-gia.astro:
1. Tìm tất cả nút "Đặt lịch" đang dùng href="tel:0879025858"
2. Thay mỗi nút đó bằng 2 nút:
   - Nút primary: "Đặt lịch qua Zalo" → href="https://zalo.me/0879025858"
   - Nút ghost/text: "hoặc gọi 0879.02.5858" → href="tel:0879025858"
3. Giữ nguyên style và layout, chỉ tách 1 nút thành 2
4. Verify trên mobile không bị overflow
```

---

## Sprint 4: Thêm Sticky Zalo Button (10 phút)

```
Đọc file .agents/skills/cta-patterns/SKILL.md (phần Sticky Chat Button) trước khi bắt đầu.

Nhiệm vụ:
1. Tìm layout file chính (src/layouts/BaseLayout.astro hoặc Layout.astro)
2. Thêm sticky Zalo button trước thẻ đóng </body>
3. Button: góc dưới phải, màu Zalo xanh #0068FF, có icon Zalo + text "Nhắn Zalo"
4. Nếu chưa có icon Zalo, dùng text emoji 💬 hoặc tải SVG từ Zalo brand assets
5. Ẩn trên màn hình rộng nếu đã có Zalo contact rõ ràng trong header
6. Verify button không che nội dung quan trọng trên mobile
```

---

## Sprint 5: Thêm Schema JSON-LD (20 phút)

```
Đọc file .gemini/antigravity/brain/seo-schema.md để lấy code JSON-LD đầy đủ.

Nhiệm vụ:
1. Mở src/layouts/BaseLayout.astro
2. Thêm LocalBusiness JSON-LD vào <head> (lấy từ seo-schema.md phần 1)
3. Mở src/pages/index.astro
4. Thêm FAQPage JSON-LD (phần 2) và Service JSON-LD (phần 3)
5. Mở src/pages/bang-gia.astro
6. Thêm FAQPage JSON-LD cho FAQ ở trang bảng giá
7. Validate bằng cách paste URL vào https://validator.schema.org sau khi deploy
```

---

## Sprint 6: Thêm Section USP (45 phút)

```
Đọc .gemini/antigravity/brain/ux-audit.md (Vấn đề 6) và .agents/skills/ux-guidelines/SKILL.md.

Nhiệm vụ — thêm section mới vào src/pages/index.astro:
1. Tạo component src/components/USPSection.astro
2. Section có 4 card USP:
   - Thiết bị X-Rite i1Display Pro — "Thiết bị đo màu chuyên nghiệp hàng đầu thế giới"
   - Chuẩn Delta-E < 2 — "Độ chính xác màu sắc theo chuẩn quốc tế"
   - Bảo hành 6 tháng — "Hỗ trợ kỹ thuật trọn đời, cân lại miễn phí trong 6 tháng"
   - [Điền số thực tế]+ màn hình — "Đã phục vụ hàng trăm khách hàng tại Hà Nội"
3. Đặt section này GIỮA hero section VÀ section dịch vụ
4. Style: 4 cột desktop, 2 cột tablet, 1 cột mobile
5. Mỗi card có icon đơn giản (SVG), heading, description ngắn
```

---

## Sprint 7: Thêm Section Testimonial (60 phút)

```
Đọc .agents/skills/ux-guidelines/SKILL.md trước khi bắt đầu.

Nhiệm vụ:
1. Tạo file src/data/testimonials.ts với data cấu trúc:
   { name, role, company?, content, rating, avatar? }
2. Tạo component src/components/TestimonialsSection.astro
3. Placeholder data (sẽ thay bằng review thật sau):
   - 6 testimonials từ Designer, Photographer, Video Editor
   - Mỗi card có: avatar (initials nếu không có ảnh), tên, nghề nghiệp, nội dung review, 5 sao
4. Layout: carousel trên mobile, grid 3 cột trên desktop
5. Đặt section sau "Quy trình" và trước "Blog" trên trang chủ
6. Heading: "Khách hàng nói gì về chúng tôi"
```

---

## Sprint 8: Nhúng Facebook Page (ảnh thực tế tự cập nhật) (15 phút)

```
Mục tiêu: Nhúng Facebook Page Plugin 1 lần duy nhất. Sau đó mỗi khi đăng ảnh
thực tế (trước/sau cân màu) lên fanpage, ảnh sẽ tự hiện trên website mà không
cần push code.

Fanpage: https://www.facebook.com/chuanmaucom

BƯỚC 1 — Thêm Facebook SDK vào layout chính
Mở src/layouts/BaseLayout.astro, thêm vào ngay sau thẻ mở <body>:

<div id="fb-root"></div>
<script async defer crossorigin="anonymous"
  src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0">
</script>

BƯỚC 2 — Tạo component FacebookFeed
Tạo file src/components/FacebookFeed.astro với nội dung:

---
// Không cần props, fanpage URL đã hardcode
---
<section class="facebook-feed py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl font-medium text-center mb-8">
      Ảnh thực tế từ khách hàng
    </h2>
    <p class="text-center text-gray-500 mb-10">
      Cập nhật liên tục từ
      <a href="https://www.facebook.com/chuanmaucom"
         target="_blank" rel="noopener"
         class="text-blue-600 hover:underline">
        fanpage Chuẩn Màu
      </a>
    </p>

    <!-- Facebook Page Plugin — hiển thị tab timeline với ảnh -->
    <div class="flex justify-center">
      <div
        class="fb-page"
        data-href="https://www.facebook.com/chuanmaucom"
        data-tabs="timeline"
        data-width="500"
        data-height="600"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false">
      </div>
    </div>

    <!-- Fallback nếu user block Facebook -->
    <noscript>
      <div class="text-center mt-4">
        <a href="https://www.facebook.com/chuanmaucom"
           target="_blank" rel="noopener"
           class="btn-primary">
          Xem ảnh thực tế trên Facebook →
        </a>
      </div>
    </noscript>
  </div>
</section>

BƯỚC 3 — Đặt component vào trang chủ
Mở src/pages/index.astro:
- Import: import FacebookFeed from '../components/FacebookFeed.astro';
- Đặt <FacebookFeed /> sau section Blog và TRƯỚC section FAQ

BƯỚC 4 — Xử lý performance (quan trọng)
Facebook SDK làm chậm trang. Để giảm ảnh hưởng:
- Đảm bảo thẻ <script> của SDK có attribute "async defer" (đã có ở Bước 1)
- Bọc phần fb-page trong IntersectionObserver để chỉ load khi user scroll đến:

<div id="fb-feed-wrapper" data-src="https://www.facebook.com/chuanmaucom">
  <!-- fb-page div ở đây -->
</div>

<script>
  const wrapper = document.getElementById('fb-feed-wrapper');
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // SDK đã load, trigger parse
      if (window.FB) window.FB.XFBML.parse(wrapper);
      observer.disconnect();
    }
  }, { rootMargin: '200px' });
  observer.observe(wrapper);
</script>

BƯỚC 5 — Verify
1. Chạy dev server
2. Kiểm tra feed hiển thị đúng trên desktop
3. Kiểm tra responsive trên mobile 375px (data-adapt-container-width="true" sẽ tự co lại)
4. Kiểm tra trang vẫn load nhanh — dùng Chrome DevTools > Network tab xem Facebook
   script không block render

LƯU Ý cho owner:
- Mỗi khi muốn ảnh thực tế hiện trên web, chỉ cần đăng bài trên fanpage như bình thường
- Bài đăng public mới hiện, bài chỉ followers không hiện
- Ảnh mới nhất tự lên đầu feed
```

## Sprint 9: Hero Slider (thay thế hero section hiện tại) (45 phút)

Mục tiêu: Thay thế hero section tĩnh hiện tại bằng slider 3 slide, mỗi slide
tương ứng 1 dịch vụ chính, có ảnh thực tế, text, và 2 CTA.

Đọc .agents/skills/cta-patterns/SKILL.md và .agents/skills/ux-guidelines/SKILL.md trước khi bắt đầu.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BƯỚC 1 — Tạo component HeroSlider.astro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tạo file src/components/HeroSlider.astro

Data 3 slides (hardcode, chỉnh ảnh sau khi có ảnh thật):

- Slide 1:
  tag: "Dịch vụ chuyên nghiệp · Hà Nội"
  title: "Cân màu <span>chính xác</span> cho mọi màn hình"
  desc: "Thiết bị X-Rite i1Display Pro — đạt chuẩn Delta-E <2. Phục vụ Designer, Photographer, Video Editor tại Hà Nội."
  cta1: { text: "Đặt lịch qua Zalo", href: "https://zalo.me/0879025858" }
  cta2: { text: "0879.02.5858", href: "tel:0879025858" }
  badge: { num: "500+", label: "Màn hình đã cân màu" }
  image: "/images/hero/hero-pc-laptop.jpg" ← placeholder, thay bằng ảnh thật

- Slide 2:
  tag: "Dịch vụ tận nơi · Toàn Hà Nội"
  title: "Kỹ thuật viên đến <span>tận nhà</span> bạn"
  desc: "Không cần mang màn hình đi đâu. Chúng tôi mang thiết bị đến, cân chỉnh tại chỗ — bảo hành 6 tháng."
  cta1: { text: "Đặt lịch tại nhà", href: "https://zalo.me/0879025858" }
  cta2: { text: "Xem bảng giá", href: "/bang-gia" }
  badge: { num: "200k", label: "Tại nhà / màn hình đầu" }
  image: "/images/hero/hero-tai-nha.jpg"

- Slide 3:
  tag: "Wacom · Huion · XP-Pen"
  title: "Cân màu <span>bảng vẽ</span> cho Creative"
  desc: "Màu sắc chính xác trên Wacom, Huion, XP-Pen. Xuất file ICC Profile — cài lại sau khi format không mất màu."
  cta1: { text: "Tư vấn miễn phí", href: "https://zalo.me/0879025858" }
  cta2: { text: "Gọi ngay", href: "tel:0879025858" }
  badge: { num: "6T", label: "Bảo hành miễn phí" }
  image: "/images/hero/hero-bang-ve.jpg"

Màu sắc thương hiệu:

- Accent: #FFC624 (vàng)
- Background overlay: linear-gradient(105deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.45) 55%, rgba(0,0,0,.15) 100%)
- Font heading: Syne (Google Fonts), font body: DM Sans

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BƯỚC 2 — Tính năng slider
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Implement đầy đủ các tính năng sau trong <script> của component:

1. Tự động chuyển slide sau 5 giây
2. Progress bar mỏng (2px) màu #FFC624 chạy theo thời gian ở bottom
3. Navigation dots (indicator tròn, dot active kéo dài thành pill)
4. Nút mũi tên prev/next
5. Swipe touch trên mobile (touchstart + touchend, threshold 40px)
6. Animation stagger khi slide vào: tag → title → desc → ctas → badge
   mỗi cái delay thêm ~120ms, dùng CSS transition + class 'active'
7. Accent line dọc bên trái (2px, màu #FFC624) fade in khi slide active
8. Badge thông tin góc phải slide in từ phải

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BƯỚC 3 — Placeholder ảnh
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Vì chưa có ảnh thật, dùng tạm Unsplash:

- Slide 1: https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1200&q=80
- Slide 2: https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=1200&q=80
- Slide 3: https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80

Khi owner có ảnh thật:

1. Copy ảnh vào public/images/hero/
2. Đổi src trong HeroSlider.astro — 3 dòng duy nhất cần sửa

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BƯỚC 4 — Tích hợp vào trang chủ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mở src/pages/index.astro:

1. Import: import HeroSlider from '../components/HeroSlider.astro';
2. XÓA hoàn toàn hero section hiện tại (thẻ <section> chứa hero image + heading)
3. Thay bằng: <HeroSlider />
4. Đảm bảo HeroSlider là element đầu tiên sau <Layout>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BƯỚC 5 — Google Fonts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mở src/layouts/BaseLayout.astro, thêm vào <head>:

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

Nếu đã có font system thì chỉ cần thêm Syne cho heading slider, giữ nguyên font body.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BƯỚC 6 — Verify
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Chạy dev server, kiểm tra slider hiển thị đúng trên desktop
2. Resize về 375px — kiểm tra text không overflow, 2 nút CTA không bị vỡ layout
3. Kiểm tra tự chuyển slide sau 5s và progress bar chạy đúng
4. Kiểm tra swipe tay trên mobile DevTools
5. Chạy Lighthouse — điểm Performance không được giảm quá 5 điểm so với trước
   (ảnh Unsplash có thể làm chậm — nếu vậy thêm loading="lazy" hoặc dùng ảnh local)

LƯU Ý cho owner:

- Khi có ảnh thật: copy vào public/images/hero/ và sửa 3 dòng src trong HeroSlider.astro
- Mỗi slide nên dùng ảnh ngang tỉ lệ 16:9 hoặc 3:2, tối thiểu 1200px chiều rộng
- Nên chụp: kỹ thuật viên đang cầm thiết bị X-Rite đo màn hình, màn hình trước/sau cân màu
