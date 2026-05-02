# chuanmau4.0

> Website dịch vụ cân màu màn hình chuyên nghiệp tại Hà Nội — chuanmau.com

**Stack:** Astro v5 · Tailwind CSS · TypeScript · nginx (Docker)

---

## Cấu trúc file

```
src/
├── pages/
│   ├── index.astro           ← Trang chủ
│   ├── bang-gia.astro        ← Bảng giá dịch vụ
│   ├── lien-he.astro         ← Liên hệ (cần thêm Google Maps)
│   ├── services.astro        ← Trang dịch vụ
│   ├── kiem-tra-mau-sac.astro
│   └── [...blog]/            ← Blog
│
├── components/
│   ├── HeroSlider.astro      ← Hero slider 3 slides (desktop/mobile)
│   ├── USPSection.astro      ← 4 điểm nổi bật
│   └── TestimonialsSection.astro
│
└── assets/images/hero/       ← banner1-6.jpg (banner4-6 chưa dùng)

.brain/
├── brain.json                ← Kiến thức tĩnh về project
└── session.json              ← Tiến độ làm việc (gitignored)

nginx/nginx.conf              ← Production server config (security hardened)
Dockerfile                    ← Multi-stage build + non-root user
```

---

## Chạy local

```bash
npm install
npm run dev          # http://localhost:4321
npm run check        # Type check + lint
```

## Build & Deploy

```bash
# Docker
docker build -t chuanmau .
docker run -p 8080:8080 chuanmau

# Netlify / Vercel
git push  # auto-deploy
```

---

## Việc cần làm

- [ ] Fix navigation menu — 4 items: Dịch vụ | Bảng giá | Kiến thức | Liên hệ
- [ ] Google Maps + giờ mở cửa vào trang Liên hệ
- [ ] Nâng cấp Astro v5 → v6 (XSS moderate fix)
