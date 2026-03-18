# Information Architecture — chuanmau.com
> Cập nhật: 2026-03-16

---

## IA Hiện tại (có vấn đề)

```
Trang chủ
├── Kiểm tra màu sắc
├── Bảng giá
├── Download ← DROPDOWN 1 ITEM, dẫn ra Dropbox ngoài site
│   └── DisplayCAL (dropbox.com)
├── Lưu trữ ← TÊN MƠ HỒ
│   ├── Blog
│   └── Hướng dẫn
└── Liên hệ (nút riêng)
```

**Vấn đề IA hiện tại:**
- "Download" không cần ở nav chính, không cần dropdown
- "Lưu trữ" là label mơ hồ — user không đoán được nội dung bên trong
- "Kiểm tra màu sắc" không rõ là tool hay bài viết
- Thiếu trang "Dịch vụ" riêng — dịch vụ chỉ là section trên trang chủ

---

## IA Đề xuất (đã tối ưu)

```
Trang chủ
├── Dịch vụ
│   ├── Cân màu PC / Laptop
│   ├── Cân màu bảng vẽ (Wacom, Huion, XP-Pen)
│   ├── Cài đặt ICC Profile
│   └── Tư vấn chọn màn hình
├── Bảng giá
│   ├── Tại cửa hàng (150k)
│   ├── Tại nhà (200k)
│   └── Doanh nghiệp / nhiều màn hình (tuỳ chỉnh)
├── Kiến thức
│   ├── Blog
│   ├── Hướng dẫn (tutorials)
│   ├── Kiểm tra màu sắc (tool)
│   └── Download DisplayCAL
└── Liên hệ
    ├── Form / Ticket
    ├── Zalo & Messenger
    ├── Địa chỉ + Google Maps (2 cơ sở)
    └── Giờ mở cửa
```

---

## Cấu trúc trang chủ (thứ tự scroll đề xuất)

| # | Section | Trạng thái | Mục đích |
|---|---------|-----------|---------|
| 1 | Hero + ảnh thực tế | Sửa ảnh | Awareness — giải thích dịch vụ |
| 2 | USP (4 điểm khác biệt) | **Thêm mới** | Differentiation |
| 3 | Dịch vụ (6 card) | Giữ nguyên | Inform |
| 4 | Quy trình (3 bước) | Giữ nguyên | Build confidence |
| 5 | Testimonial / Review | **Thêm mới** | Trust |
| 6 | Blog (4 bài mới nhất) | Giữ nguyên | SEO + Authority |
| 7 | FAQ | Giữ nguyên | Objection handling |
| 8 | CTA cuối trang | Cải thiện | Conversion |

---

## Navigation Rules

- **Số lượng nav items:** Tối đa 4 items ở nav chính — không hơn
- **Thứ tự:** Dịch vụ → Bảng giá → Kiến thức → Liên hệ
- **Nút CTA:** "Liên hệ" là nút nổi bật (primary button), không phải nav item thông thường
- **Mobile:** Hamburger menu, tất cả 4 items hiển thị dạng list
- **Active state:** Highlight item tương ứng với trang hiện tại

---

## URL Structure

```
/                     → Trang chủ
/dich-vu              → Trang dịch vụ (hoặc section anchor trên homepage)
/bang-gia             → Bảng giá
/kien-thuc            → Hub Kiến thức (mới — redirect từ /blog)
/blog                 → Danh sách blog
/category/tutorials   → Hướng dẫn
/kiem-tra-mau-sac     → Tool kiểm tra màu
/download             → Trang download
/lien-he              → Liên hệ
```
