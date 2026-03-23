# chuanmau-antigravity

> Nghiên cứu UX/IA và Agent prompts cho dự án chuanmau.com trên Google Antigravity

---

## Cách dùng

### Bước 1: Copy vào project

```bash
# Copy brain files vào project chuanmau của bạn
cp -r .gemini/ /path/to/chuanmau.com/
cp -r .agents/ /path/to/chuanmau.com/
cp AGENT-PROMPTS.md /path/to/chuanmau.com/
```

### Bước 2: Mở project trong Antigravity

Mở thư mục chuanmau.com trong Antigravity IDE.
Các file trong `.gemini/antigravity/brain/` sẽ được agent tự động đọc.
Các skill trong `.agents/skills/` sẽ được load khi request phù hợp.

### Bước 3: Giao việc cho Agent

Mở file `AGENT-PROMPTS.md`, copy prompt sprint muốn làm, paste vào Agent Manager.

---

## Cấu trúc file

```
.
├── AGENT-PROMPTS.md              ← Prompt sẵn sàng dùng, copy paste vào Agent Manager
│
├── .gemini/antigravity/brain/    ← Context dài hạn, agent đọc mỗi session
│   ├── ux-audit.md               ← 7 vấn đề UX + giải pháp + file cần sửa
│   ├── ia-structure.md           ← IA hiện tại vs đề xuất, URL slugs
│   └── seo-schema.md             ← JSON-LD schema code sẵn sàng copy
│
└── .agents/skills/               ← Quy tắc theo từng loại task
    ├── ux-guidelines/SKILL.md    ← Nguyên tắc Trust-First, màu sắc, spacing
    ├── ia-navigation/SKILL.md    ← Cấu trúc nav 4 items, quy tắc không vi phạm
    ├── cta-patterns/SKILL.md     ← CTA luôn 2 nút, Zalo deeplink, sticky button
    └── seo-schema/SKILL.md       ← Checklist SEO, title/description patterns
```

---

## Thứ tự ưu tiên Sprint

| Sprint | Task                     | Thời gian ước tính | Tác động                     |
| ------ | ------------------------ | ------------------ | ---------------------------- |
| 1      | Fix navigation menu      | 30 phút            | Cao — IA đúng ngay           |
| 2      | Google Maps + giờ mở cửa | 20 phút            | Cao — trust                  |
| 3      | Fix CTA bảng giá (2 nút) | 15 phút            | Cao — conversion             |
| 4      | Sticky Zalo button       | 10 phút            | Cao — friction thấp          |
| 5      | Schema JSON-LD           | 20 phút            | Trung bình — SEO             |
| 6      | Section USP              | 45 phút            | Trung bình — differentiation |
| 7      | Section Testimonial      | 60 phút            | Cao — nhưng cần data thật    |

**Tổng thời gian:** ~3.5 giờ dev cho tất cả 7 sprint
