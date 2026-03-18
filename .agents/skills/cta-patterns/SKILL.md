# Skill: CTA Patterns — chuanmau.com

## Khi nào dùng skill này
Khi thêm nút call-to-action, form liên hệ, hoặc bất kỳ conversion element nào.

---

## Quy tắc CTA bắt buộc

### LUÔN có 2 lựa chọn liên hệ
Không bao giờ chỉ có 1 nút duy nhất. User có sở thích khác nhau:
- Một số thích gọi điện ngay
- Nhiều người (nhất là Gen Z tại VN) thích nhắn Zalo

### Cặp CTA chuẩn
```html
<!-- Primary: Zalo (nhiều user VN dùng hơn) -->
<a href="https://zalo.me/0879025858" target="_blank" class="btn-primary">
  Nhắn Zalo
</a>

<!-- Secondary: Gọi điện -->
<a href="tel:0879025858" class="btn-secondary">
  Gọi ngay
</a>
```

### CTA trên bảng giá (mỗi gói)
```html
<a href="https://zalo.me/0879025858" class="btn-primary">Đặt lịch qua Zalo</a>
<a href="tel:0879025858" class="btn-ghost">hoặc gọi 0879.02.5858</a>
```

---

## Sticky Chat Button (toàn site)
Đặt ở góc dưới phải, hiển thị trên tất cả trang:
```html
<!-- Zalo sticky button -->
<a href="https://zalo.me/0879025858"
   target="_blank"
   class="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#0068FF] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#0057d9] transition-colors"
   aria-label="Liên hệ qua Zalo">
  <img src="/icons/zalo.svg" alt="Zalo" width="20" height="20" />
  <span class="font-medium">Nhắn Zalo</span>
</a>
```

---

## Hero CTA (trang chủ)
```html
<div class="flex gap-4 flex-wrap">
  <a href="https://zalo.me/0879025858" class="btn-primary btn-lg">
    Đặt lịch ngay
  </a>
  <a href="#features" class="btn-outline btn-lg">
    Xem dịch vụ
  </a>
</div>
```

---

## Vị trí đặt CTA trên trang chủ
1. Hero section — sau tagline
2. Sau section Quy trình (3 bước)
3. Sau section Testimonial
4. Cuối trang — CTA block riêng với headline + 2 nút

---

## Ngôn ngữ CTA
- Dùng: "Đặt lịch ngay", "Nhắn Zalo", "Gọi ngay", "Liên hệ tư vấn miễn phí"
- Tránh: "Click here", "Submit", "Gửi", "OK"
- Luôn kèm thông tin giảm friction: "Tư vấn miễn phí · Phản hồi trong 4h"

---

## Thông tin liên hệ
- Điện thoại / Zalo: `0879.02.5858`
- Zalo deeplink: `https://zalo.me/0879025858`
- Facebook Messenger: `https://m.me/chuanmaucom`
- Tel link: `tel:0879025858`
