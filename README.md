# Business English for IT Meetings — Local Website

## Cấu trúc

```text
English Learning/
├── index.html
├── code/
│   ├── app.js
│   ├── style.css
│   └── course-data.js
└── README.md
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

Nên chạy bằng localhost, ví dụ VS Code Live Server hoặc:

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
