# SEO Schema — chuanmau.com

> Thêm vào `<head>` của BaseLayout.astro

---

## 1. LocalBusiness Schema

Thêm vào `src/layouts/BaseLayout.astro` trong `<head>`:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chuẩn Màu",
    "description": "Dịch vụ cân màu màn hình chuyên nghiệp tại Hà Nội. Phục vụ Designer, Photographer, Video Editor.",
    "url": "https://chuanmau.com",
    "telephone": "+84879025858",
    "priceRange": "150.000đ – 200.000đ",
    "openingHours": "Mo-Sa 08:00-18:00",
    "image": "https://chuanmau.com/_astro/hero.BSb7rENH.png",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Số 9 Duy Tân",
        "addressLocality": "Cầu Giấy",
        "addressRegion": "Hà Nội",
        "addressCountry": "VN"
      }
    ],
    "sameAs": ["https://www.facebook.com/chuanmaucom", "https://zalo.me/0879025858"]
  }
</script>
```

---

## 2. FAQPage Schema

Thêm vào `src/pages/index.astro` và `src/pages/bang-gia.astro`:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Tại sao cần cân màu màn hình?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cân màu màn hình giúp đảm bảo màu sắc hiển thị chính xác, đặc biệt quan trọng cho Designer, Photographer, Video Editor. Màn hình không được cân màu có thể hiển thị màu sắc sai lệch, ảnh hưởng đến chất lượng công việc."
        }
      },
      {
        "@type": "Question",
        "name": "Dịch vụ cân màu mất bao lâu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Thời gian cân màu cho mỗi màn hình thường mất khoảng 30-45 phút."
        }
      },
      {
        "@type": "Question",
        "name": "Giá dịch vụ cân màu màn hình là bao nhiêu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tại cửa hàng: 150.000đ/màn hình đầu. Tại nhà: 200.000đ/màn hình đầu. Từ màn hình thứ 2 trở đi chỉ 100.000đ."
        }
      },
      {
        "@type": "Question",
        "name": "Dịch vụ có bảo hành không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Có, Chuẩn Màu cung cấp bảo hành 6 tháng. Nếu có vấn đề trong thời gian bảo hành, chúng tôi hỗ trợ kiểm tra và cân chỉnh lại miễn phí."
        }
      },
      {
        "@type": "Question",
        "name": "Có dịch vụ tận nơi không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Có, Chuẩn Màu cung cấp dịch vụ tận nơi tại Hà Nội với phí 200.000đ/màn hình đầu tiên."
        }
      }
    ]
  }
</script>
```

---

## 3. Service Schema

Thêm vào `src/pages/index.astro`:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cân màu màn hình",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chuẩn Màu"
    },
    "areaServed": {
      "@type": "City",
      "name": "Hà Nội"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "150000",
      "highPrice": "200000",
      "priceCurrency": "VND"
    }
  }
</script>
```
