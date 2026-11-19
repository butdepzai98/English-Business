# Business English for IT Meetings — Local Website

## Mục tiêu của giao diện

Tự trao đổi trực tiếp với khách hàng bằng tiếng Anh, không qua PM:
`Nghe → Nhận ra → Nghĩ → Nói trong ≤ 2 giây`.

Website không còn là nơi đọc tài liệu. Mỗi lesson là một quy trình luyện:

| Bước | Làm gì | Vì sao |
|---|---|---|
| 1 Nghe mù | Nghe 3 lần, transcript bị ẩn, chỉnh được tốc độ | Luyện tai, không dựa vào chữ |
| 2 Kiểm tra | Mở transcript (English), bấm ✋ vào câu nghe không ra | Câu khó vào “Cụm khó” trên trang Hôm nay |
| 3 Nói theo | Nghe từng câu rồi nói lại, hoặc nói đồng thời | Luyện miệng và nhịp |
| 4 Reflex drill | Audio hỏi → bạn nói ngay; app đo thời gian bắt đầu nói bằng micro | Đo đúng thứ cần cải thiện: phản xạ |

Trang **Hôm nay** (nút trên đầu sidebar) hiện kế hoạch của ngày (T2–T6: 25 phút từ 22:00,
T7: mock client call, CN: kiểm tra tuần), chuỗi ngày học, biểu đồ thời gian phản xạ
(mục tiêu ≤ 2.0s) và danh sách Cụm khó. Tiến độ lưu trong `localStorage`; bản ghi giọng chỉ nằm trong
bộ nhớ trình duyệt, không gửi đi đâu. Nên dùng tai nghe khi làm Reflex drill.

## Nhịp học

**1 lesson mới mỗi tối, 1 module tối đa 4 ngày** (6 module = 6 tuần cho vòng 1).

| Ngày | Việc |
|---|---|
| T2–T5 | 1 lesson mới, 25 phút: nghe mù 5′, kiểm tra 3′, nói theo 7′, Reflex drill 10′ |
| T6 | Ôn: drill lại 1–2 bài yếu nhất + Cụm khó |
| T7 | Mock client call với Claude (xem `Mock-Client-Call-Prompt.md`) + 1 lần nói chuyện với người thật mỗi tuần |
| CN | Kiểm tra tuần: drill bài chưa đạt + ghi âm 1 phút |

Bài mới không bị khóa. Thay vào đó, bài nào **chưa đạt ngưỡng** sẽ vào mục “Cần ôn” (trang Hôm nay) và được dùng cho T6/CN.
Một bài đạt khi lần drill gần nhất có thời gian phản xạ trung bình ≤ ngưỡng của module **và** ≥ 80% câu kịp ≤ 3s
(không có mic thì chỉ xét tỷ lệ tự đánh giá “kịp”). Bài đạt có dấu ✔ ở sidebar.

| Module | Ngưỡng trung bình |
|---|---|
| 1–2 | ≤ 3,0s |
| 3–4 | ≤ 2,5s |
| 5–6 | ≤ 2,0s |

Sau vòng 1, các vòng 2–3 chỉ drill lại bài chưa đạt. Ngưỡng và số lesson mỗi module chỉnh trong
`code/course-data.js` (`targetMsByModule`, `lessonsPerModule`).
Một đêm cho một bài là ít; nếu sau 2 tuần phản xạ không cải thiện, hãy nới thành 5–6 ngày mỗi module.

## Học trên điện thoại

Giao diện tự chuyển sang dạng điện thoại khi màn hình ≤ 900px: thanh trên cùng có ☰ (mở danh sách lesson) và 🏠 (trang Hôm nay),
nút bấm đủ lớn cho ngón tay, khu trả lời của Reflex drill tự cuộn vào tầm nhìn, và màn hình được giữ sáng khi đang drill.

**1. Mở từ điện thoại (cùng Wi‑Fi với máy tính)**

```bash
python3 -m http.server 8000 --bind 0.0.0.0
hostname -I    # lấy IP của máy, rồi mở http://<IP>:8000 trên điện thoại
```

Cách này đủ để nghe, nói theo và drill ở chế độ **tự đánh giá**. Trình duyệt điện thoại **chặn micro trên trang HTTP**,
nên chưa đo được thời gian phản xạ.

**2. Muốn đo phản xạ bằng micro: cần HTTPS**

| Cách | Ghi chú |
|---|---|
| Tailscale (khuyến nghị) | Cài trên máy tính và điện thoại, chạy `tailscale serve --bg 8000` (cú pháp có thể khác theo phiên bản, xem `tailscale serve --help`). Chỉ thiết bị trong tailnet của bạn truy cập được. |
| Server riêng (Nginx + HTTPS + basic auth) | Phù hợp nếu muốn học ở bất kỳ đâu. MP3 là nội dung riêng của bạn, nên đặt mật khẩu. |
| Chỉ để thử trên Android Chrome | `chrome://flags/#unsafely-treat-insecure-origin-as-secure`, thêm `http://<IP>:8000`. Không có cách này trên iPhone. |

**3. Thêm vào màn hình chính**: Android Chrome ⋮ → *Add to Home screen*; iPhone Safari Share → *Add to Home Screen*.
Trang mở toàn màn hình như một app (có `manifest.json` và `icon.svg`; iPhone sẽ dùng ảnh mặc định vì chưa có PNG icon).

**Lưu ý**
- Tiến độ lưu trong trình duyệt của **từng thiết bị**, nên điện thoại và máy tính không đồng bộ với nhau.
- Dùng tai nghe khi drill để micro không thu lại tiếng audio.
- Chưa thử trên iPhone thật; đã thử bằng khung 375×812 và 768×1024 trong trình duyệt.

## turns.json (cắt audio theo từng lượt nói)

Reflex drill và nút nghe từng câu cần biết mỗi lượt nói nằm ở giây nào trong MP3. File
`turns.json` trong mỗi thư mục lesson được tạo bằng:

```bash
python3 tools/make_turns.py        # tất cả lesson
python3 tools/make_turns.py 02 16  # chỉ một số lesson
```

Script dò khoảng lặng bằng ffmpeg rồi căn theo độ dài lời thoại trong `script_tts.txt`. Chạy lại mỗi khi
sinh lại MP3 hoặc sửa script. Bài nào căn không đủ tin cậy (`"confidence": "low"`, hiện là Lesson 01)
sẽ dùng giọng đọc của trình duyệt cho các câu hỏi. Micro chỉ dùng được trên `localhost`/HTTPS.

## Cấu trúc

```text
English Learning/
├── index.html
├── code/
│   ├── app.js          # sidebar, tabs, notes (lesson.md)
│   ├── train.js        # Hôm nay + 4 bước luyện + Reflex drill
│   ├── style.css
│   └── course-data.js
├── manifest.json, icon.svg   # để thêm vào màn hình chính
├── tools/make_turns.py
└── Lesson XX — Tên lesson/ (lesson.md, script_tts.txt, MP3, turns.json)
```

## Điểm quan trọng

- Sidebar luôn hiển thị đủ **24 lesson / 6 module** ngay khi mở website.
- Danh sách lesson nằm cố định trong `code/course-data.js`.
- Trạng thái hoàn thành được đánh dấu ngay trên giao diện và lưu riêng trong `localStorage` của trình duyệt.
- Website **không cần chọn thư mục English để hiện Sidebar**.
- Nội dung lesson được đọc **trực tiếp bằng đường dẫn tương đối** từ các thư mục `Lesson XX - Tên lesson` nằm cạnh `index.html`; không cần bấm kết nối/chọn thư mục.
- Website tự tìm `lesson.md`, `script_tts.txt` và MP3 trong từng thư mục lesson.
- Lesson chưa có file vẫn xuất hiện và có nhãn `(chưa tạo)`.
- Không sử dụng Directory Handle/File System Access API cho việc đọc lesson.

## Chạy

Nên chạy bằng localhost, ví dụ VS Code Live Server hoặc truy cập thẳng https://butdepzai98.github.io/English-Business/:

```bash
python -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## Nguồn danh sách khóa học và tiến độ

`course-data.js` là nguồn dữ liệu tĩnh cho Sidebar. Tiến độ học được lưu theo trình duyệt bằng `localStorage`; xóa dữ liệu trình duyệt sẽ xóa tiến độ đã đánh dấu.

## Lưu ý khi chạy

Website cần được mở qua **HTTP localhost** (ví dụ VS Code Live Server hoặc `python -m http.server 8000`).
Không mở bằng `file://` vì trình duyệt chặn JavaScript `fetch()` đọc các file Markdown và MP3 kế bên.

Cấu trúc nội dung được hỗ trợ:

```text
English Learning/
├── index.html
├── code/
│   ├── app.js
│   ├── style.css
│   └── course-data.js
├── Lesson 01 - Daily Stand-up/
│   ├── lesson.md
│   ├── script_tts.txt
│   └── Lesson-01.mp3
├── Lesson 02 - Giving a Work Update/
│   └── ...
└── ...
```
