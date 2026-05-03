---
publishDate: 2026-05-02T00:00:00Z
title: 'ICC profile là gì? Giải thích đủ để dùng được'
excerpt: 'ICC profile là gì, nó mô tả gì về màn hình, khi nào nên cài file .icc và khi nào không nên đắp profile máy khác lên máy mình. Giải thích thực dụng cho dân nghề.'
image: ~/assets/images/icc-profile-la-gi/icc-profile-la-gi-1.png
category: Tutorials
tags:
  - Tutorials
  - icc profile
  - color profile
  - canmaumanhinh
metadata:
  description: 'ICC profile là gì, nó mô tả gì về màn hình, khi nào nên cài file .icc và khi nào không nên đắp profile máy khác lên máy mình. Giải thích thực dụng cho dân nghề.'
canonical: https://chuanmau.com/icc-profile-la-gi
---

# ICC profile là gì? Giải thích đủ để dùng được

Một con Dell U2723QE mới mở hộp, hãng kèm file `.icc` trong USB — đây là color profile factory của dòng máy đó. Không ai giải thích nó để làm gì, cài kiểu nào, hay khi nào không nên cài. Bài này trả lời ICC profile là gì, mô tả những gì, và khi nào tuyệt đối không nên dùng.

![ICC Profile là gì](~/assets/images/icc-profile-la-gi/icc-profile-la-gi-1.png)

## ICC profile là gì

ICC profile là một file mô tả đặc điểm hiển thị màu của một thiết bị cụ thể tại một thời điểm cụ thể. Nó được sinh ra qua thiết bị đo (Spyder X, i1Display Pro hoặc tương tự) trong quá trình cân màu, ghi lại cách thiết bị đang phản ứng với tín hiệu màu chuẩn. Nói gọn: profile là chứng minh thư màu của riêng một con màn ở một thời điểm.

Hệ điều hành đọc profile để biết cách điều chỉnh tín hiệu trước khi đẩy ra màn — bù lại phần thiết bị đang lệch. Không có profile, OS gửi tín hiệu thẳng và màn hiển thị bằng đặc tính factory, có thể đúng có thể sai.

![Cách ICC Profile hoạt động](~/assets/images/icc-profile-la-gi/icc-profile-la-gi-2.png)

## Profile mô tả những gì

Một file ICC profile chứa ba nhóm thông số chính. **Gamma** quyết định độ tối/sáng vùng trung gian — chuẩn web là 2.2. **White point** là nhiệt độ trắng tham chiếu, thường 6500K (D65) cho thiết kế và in.

**Gamut** là phạm vi màu thiết bị tái tạo được — sRGB, Adobe RGB hay DCI-P3.

Ngoài ba nhóm trên, profile còn ghi delta-E của các điểm đo — độ chênh giữa màu hiển thị thực và màu chuẩn. Phần gamut được giải thích kỹ hơn ở bài [độ bao phủ màu sRGB, AdobeRGB và DCI-P3](https://chuanmau.com/do-bao-phu-mau-chuan-mau-srgb-adobe-rgb-va-dci-p3/) nếu bạn cần đào sâu.

## Khi nào nên dùng

Khi bạn vừa cân màu xong, profile sinh ra phải được nạp vào hệ điều hành để có hiệu lực. Đây là bước bắt buộc, không phải tùy chọn — không nạp thì coi như chưa cân. Hướng dẫn cụ thể có ở bài [cài ICC profile trên Windows 10](https://chuanmau.com/cai-dat-icc-profile-tren-window-10/) và bài [hướng dẫn cài ICC profile trên macOS](https://chuanmau.com/huong-dan-cai-dat-icc-profile-tren-macos/).

File `.icc` hãng kèm theo cũng nên cài — đây là profile factory, đo từ mẫu chuẩn của dòng máy. Tốt hơn không có gì, nhưng không thay thế được profile cân riêng cho con máy của bạn.

![Tại sao nên dùng ICC Profile chuẩn](~/assets/images/icc-profile-la-gi/icc-profile-la-gi-3.png)

## Khi nào KHÔNG nên dùng

Đừng tải profile từ một máy khác về dùng. Hai con BenQ SW271 cùng dòng, sản xuất cùng đợt, sau 6 tháng đã phản ứng màu khác nhau vì panel xuống không đều. Profile máy A đắp lên máy B sẽ làm B sai theo cách khó debug hơn cả khi không có profile nào.

Đừng dùng profile cũ hơn 6 tháng nếu bạn làm in offset hoặc retouch ảnh thương mại. Panel LED trôi gamma và white point theo thời gian — profile cũ tức là đang bù sai số đã thay đổi.

Đừng cài nhiều profile cùng lúc rồi để OS tự chọn. Một thiết bị, một profile active tại một thời điểm — đó là quy tắc.

Hiểu ICC profile là gì rồi thì bước tiếp theo là cài đúng. Đọc [hướng dẫn cài trên Windows](https://chuanmau.com/cai-dat-icc-profile-tren-window-10/) hoặc [trên macOS](https://chuanmau.com/huong-dan-cai-dat-icc-profile-tren-macos/) để áp dụng ngay.
