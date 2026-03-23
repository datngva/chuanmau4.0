# UX Audit — chuanmau.com

> Cập nhật: 2026-03-16 | Nguồn: Phân tích chuyên sâu toàn bộ website

---

## Tổng điểm

| Hạng mục             | Điểm |
| -------------------- | ---- |
| IA / Navigation      | 6/10 |
| Trust & Social Proof | 4/10 |
| CTA / Conversion     | 5/10 |

---

## Vấn đề 1 — NGHIÊM TRỌNG: Không có social proof

- **Ảnh hưởng:** Trust & Conversion
- **Mô tả:** Không có review khách hàng, không có số lượng màn hình đã cân, không có case study. Khách hàng lần đầu không có lý do để tin tưởng đặt lịch.
- **Giải pháp:** Thêm section "Khách hàng nói gì" với 6–8 review thật, kèm ảnh + tên + nghề nghiệp. Đặt trước section FAQ trên trang chủ.
- **File cần sửa:** `src/pages/index.astro`

## Vấn đề 2 — NGHIÊM TRỌNG: Thiếu ảnh thực tế

- **Ảnh hưởng:** Trust
- **Mô tả:** Hero section dùng ảnh minh họa trông như stock photo/template. Không có ảnh thiết bị X-Rite thật, không gian cửa hàng, kỹ thuật viên đang làm việc.
- **Giải pháp:** Thay `hero.BSb7rENH.png` bằng ảnh thực tế chất lượng cao. Thêm ảnh vào các card dịch vụ.
- **File cần sửa:** `src/pages/index.astro`, `public/images/`

## Vấn đề 3 — TRUNG BÌNH: Menu navigation sai cấu trúc IA

- **Ảnh hưởng:** Navigation / IA
- **Mô tả:**
  - "Download" là dropdown chỉ có 1 item, dẫn ra Dropbox ngoài site — không cần ở nav chính
  - "Lưu trữ" là tên mơ hồ cho Blog + Hướng dẫn, user khó đoán nội dung
- **Giải pháp:** Đổi nav thành 4 items: `Dịch vụ | Bảng giá | Kiến thức | Liên hệ`. Chuyển Download vào group Kiến thức.
- **File cần sửa:** `src/components/Header.astro` hoặc file config navigation

## Vấn đề 4 — TRUNG BÌNH: CTA chỉ có 1 lựa chọn (gọi điện)

- **Ảnh hưởng:** CTA / Conversion
- **Mô tả:** Nút "Đặt lịch" dùng `tel:` — gọi ngay. Nhiều user (nhất là Gen Z tại VN) không muốn gọi điện, thích nhắn Zalo hoặc điền form. Mất khách tiềm năng.
- **Giải pháp:** Tách thành 2 nút: "Gọi ngay" + "Nhắn Zalo". Zalo deeplink: `https://zalo.me/0879025858`
- **File cần sửa:** `src/pages/bang-gia.astro`, `src/components/CTABlock.astro`

## Vấn đề 5 — TRUNG BÌNH: Trang liên hệ thiếu bản đồ và giờ mở cửa

- **Ảnh hưởng:** Location / UX
- **Mô tả:** Có 2 địa chỉ nhưng không có Google Maps embed, không có giờ làm việc. Khách đến lần đầu lúng túng.
- **Giải pháp:** Embed Google Maps iframe cho 2 cơ sở. Thêm giờ mở cửa: T2–T7 · 8:00–18:00
  - CS1: Số 9 Duy Tân, Cầu Giấy, Hà Nội
  - CS2: Toà A1 - CC IA20 Ciputra, Phú Thượng, Hà Nội
- **File cần sửa:** `src/pages/lien-he.astro`

## Vấn đề 6 — NHỎ: Thiếu section USP "Tại sao chọn Chuẩn Màu"

- **Ảnh hưởng:** Differentiation
- **Mô tả:** 6 dịch vụ liệt kê nhưng không có lý do khác biệt với đối thủ. Thiết bị gì? Chuẩn nào? Kinh nghiệm bao nhiêu năm?
- **Giải pháp:** Thêm section 4 USP giữa hero và section dịch vụ:
  1. Thiết bị X-Rite i1Display Pro
  2. Chuẩn Delta-E < 2
  3. Bảo hành 6 tháng
  4. Đã cân X+ màn hình (điền số thực tế)
- **File cần sửa:** `src/pages/index.astro`

## Vấn đề 7 — NHỎ: Thiếu Schema markup

- **Ảnh hưởng:** SEO
- **Mô tả:** Không có JSON-LD cho LocalBusiness, FAQPage, Service. Mất cơ hội rich snippet trên Google.
- **Giải pháp:** Thêm JSON-LD vào `<head>` (xem file `seo-schema.md` trong brain/)
- **File cần sửa:** `src/layouts/BaseLayout.astro`, `src/pages/index.astro`, `src/pages/bang-gia.astro`
