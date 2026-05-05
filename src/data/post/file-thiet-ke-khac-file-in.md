---
publishDate: 2026-05-05T00:00:00Z
title: 'File thiết kế khác bản in: 3 nguyên nhân kỹ thuật'
excerpt: 'File thiết kế khác bản in offset do gamut, ICC profile xưởng hay màn lệch — 3 nguyên nhân kỹ thuật và cách kiểm tra bằng soft proofing trước khi giao file.'
image: ~/assets/images/file-thiet-ke-khac-file-in/file-thiet-ke-khac-file-in-hero.jpg
category: Tutorials
tags:
  - Tutorials
  - in offset
  - soft proofing
  - icc profile
metadata:
  description: 'File thiết kế khác bản in offset do gamut, ICC profile xưởng hay màn lệch — 3 nguyên nhân kỹ thuật và cách kiểm tra bằng soft proofing trước khi giao file.'
  canonical: https://chuanmau.com/file-thiet-ke-khac-file-in
---

# File thiết kế khác bản in: 3 nguyên nhân kỹ thuật

Bộ nhận diện duyệt với khách trên màn ổn — logo đỏ tươi, nền be sạch. Bản in offset đem về thấy logo nhạt một tone, nền ngả vàng nhẹ. **File thiết kế khác bản in** không phải lỗi xưởng cẩu thả — thường là một trong ba nguyên nhân kỹ thuật dưới đây.

![Bàn designer với màn hiển thị logo brand identity và bản in offset trên giấy art paper](~/assets/images/file-thiet-ke-khac-file-in/file-thiet-ke-khac-file-in-hero.jpg)

## Gamut file rộng hơn gamut xưởng in

File thiết kế thường ở Adobe RGB hoặc Display P3, trong khi in offset chỉ tái tạo khoảng 70% sRGB. Những màu rực ngoài gamut in sẽ bị xưởng ép vào dải màu họ chạy được — thành nhạt hơn, kém bão hòa. Đỏ tươi `#FF0000` trên RGB không tồn tại trong CMYK xưởng.

Cách kiểm tra: trong Photoshop bật View → Gamut Warning với ICC profile xưởng dùng. Vùng xám hiện ra là phần file đang nằm ngoài gamut in. Đọc thêm về [độ phủ màu sRGB, Adobe RGB và DCI-P3](https://chuanmau.com/do-bao-phu-mau-chuan-mau-srgb-adobe-rgb-va-dci-p3/) nếu cần đào sâu hơn.

![Photoshop hiển thị Gamut Warning với vùng xám phủ lên các màu rực ngoài gamut in offset](~/assets/images/file-thiet-ke-khac-file-in/file-thiet-ke-khac-file-in-body-1.jpg)

## Sai ICC profile xưởng dùng

Mỗi xưởng và mỗi loại giấy có ICC profile riêng. Giấy couche bóng thường dùng FOGRA39 hoặc GRACoL2013, giấy fort không tráng dùng FOGRA47 hoặc PSO Uncoated. Dùng nhầm GRACoL cho in trên fort là sai từ gốc — màu bị nhợt một tone đều khắp file.

Hỏi xưởng đúng profile họ chạy cho loại giấy của job, embed vào file CMYK trước khi gửi. Đừng để mặc định "Adobe RGB → US Web Coated" của Photoshop. Khi cần ôn lại [ICC profile là gì](https://chuanmau.com/icc-profile-la-gi/), bài giải thích cơ bản đã có sẵn.

## Màn thiết kế đang lệch

Đây là phần khó debug nhất vì designer không biết mình đang nhìn sai. Một con BenQ SW271 chạy 2 năm thường tụt gamma kênh đỏ khoảng 0.05–0.1. Designer quen mắt sẽ chỉnh logo "trông đỏ vừa" trên màn lệch — file thật ra đỏ đậm hơn, in ra càng đậm.

Kiểm tra nhanh: mở cùng file trên iPad Pro hoặc một máy vừa cân màu. Lệch rõ giữa hai thiết bị nghĩa là màn thiết kế cần đo lại bằng probe — Spyder X hoặc i1Display Pro — để xác định gamma và white point thực tế.

![Probe i1Display Pro gắn trên màn BenQ SW271 đo gamma kênh đỏ với test pattern màu đỏ thuần](~/assets/images/file-thiet-ke-khac-file-in/file-thiet-ke-khac-file-in-body-2.jpg)

## Soft proofing trước khi giao file

Trong Photoshop: View → Proof Setup → Custom → chọn ICC profile xưởng. Rendering Intent dùng "Relative Colorimetric" cho thiết kế nét và logo, "Perceptual" cho ảnh có gradient da hoặc nền chuyển. Bật `Ctrl+Y` để preview file sẽ in ra sao.

Đây không phải dự đoán — Photoshop áp dụng đúng phép chuyển màu mà xưởng sẽ làm. **File thiết kế khác bản in** thường được phát hiện ngay ở bước này, trước khi tốn 1.000 bản in lệch.

Hai nguyên nhân đầu sửa được trong 10 phút bằng đúng profile và soft proofing. Nguyên nhân thứ ba — màn lệch — cần [cân lại để đo về chuẩn 6500K, gamma 2.2](https://chuanmau.com/bang-gia/).
