# Skill: SEO Schema — chuanmau.com

## Khi nào dùng skill này

Khi tạo trang mới, chỉnh sửa layout, hoặc thêm nội dung FAQ/dịch vụ.
Tham khảo file `brain/seo-schema.md` để lấy JSON-LD đầy đủ.

---

## Checklist SEO mỗi trang

### Tất cả trang

- [ ] `<title>` unique, dưới 60 ký tự, có tên thương hiệu
- [ ] `<meta name="description">` 120–155 ký tự
- [ ] `<link rel="canonical">` trỏ đúng URL
- [ ] LocalBusiness JSON-LD (lấy từ brain/seo-schema.md)

### Trang chủ (index.astro)

- [ ] LocalBusiness schema
- [ ] FAQPage schema (copy từ brain/seo-schema.md)
- [ ] Service schema
- [ ] OG tags: og:title, og:description, og:image

### Trang bảng giá (bang-gia.astro)

- [ ] FAQPage schema cho FAQ trên trang này
- [ ] Offer schema với lowPrice/highPrice

### Trang blog/hướng dẫn

- [ ] Article schema với datePublished, author
- [ ] Breadcrumb schema

---

## Title & Description Patterns

### Trang chủ

```
Title: Cân màu màn hình chuyên nghiệp tại Hà Nội — Chuẩn Màu
Description: Dịch vụ cân màu màn hình PC, laptop, bảng vẽ với thiết bị X-Rite. Từ 150.000đ. Phục vụ Designer, Photographer tại Hà Nội. Bảo hành 6 tháng.
```

### Bảng giá

```
Title: Bảng giá cân màu màn hình — Từ 150.000đ | Chuẩn Màu
Description: Xem bảng giá cân chỉnh màu màn hình tại Hà Nội. Tại cửa hàng từ 150k, tại nhà từ 200k. Tính phí ngay cho nhiều màn hình.
```

### Liên hệ

```
Title: Liên hệ đặt lịch cân màu màn hình | Chuẩn Màu Hà Nội
Description: Liên hệ Chuẩn Màu qua Zalo 0879.02.5858 hoặc đến cửa hàng tại Cầu Giấy, Ciputra Hà Nội. T2–T7 · 8:00–18:00.
```

---

## Từ khóa SEO mục tiêu

- "cân màu màn hình hà nội"
- "cân màu màn hình"
- "hiệu chỉnh màu màn hình"
- "icc profile màn hình"
- "cân màu laptop hà nội"
- "cân màu bảng vẽ wacom"
- "color calibration hà nội"
