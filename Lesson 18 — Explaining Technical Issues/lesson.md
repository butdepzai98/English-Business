# Lesson 18 — Explaining Technical Issues

## 01. Lesson Metadata

```yaml
lesson: 18
title: Explaining Technical Issues
module: 5
target_level: 3

audio:
  target_wpm: 160-170
  turn_length_words: 20-30
  turns: 22-28
  characters: 3

it_context:
  - Production issue
  - Bug
  - Root cause
  - Technical impact

meeting_type:
  - Incident / issue discussion

meeting_objective:
  - Explain what happened
  - Explain why it happened
  - Explain impact
  - Explain resolution

listening_objective:
  - Follow cause-and-effect explanations
  - Identify technical impact
  - Distinguish facts from assumptions

speaking_objective:
  - Explain a technical issue clearly
  - Describe root cause
  - Explain mitigation and next steps

grammar:
  - Passive voice
  - Conditionals
  - Reported language

reduced_speech: Frequent
context_noise: Medium
interruption_level: Occasional
```

## 02. Situation

Emily (QA) phát hiện một số khách hàng nhìn thấy giá sản phẩm sai trên production sau đợt deploy gần nhất — giá cũ vẫn hiển thị dù đã cập nhật trong admin. Michael (PM) triệu tập một buổi trao đổi nhanh để hiểu chuyện gì đã xảy ra. David (Developer) cần giải thích nguyên nhân gốc rễ (root cause), mức độ ảnh hưởng, và hướng xử lý — mà không được dùng thuật ngữ quá sâu khiến Michael khó theo dõi.

## 03. IT Context

- Varnish cache không được invalidate đúng lúc sau khi cập nhật giá
- Cache serving stale data cho một số category page
- Hotfix / cache flush như một biện pháp xử lý tạm thời
- Ảnh hưởng tới trải nghiệm khách hàng và độ tin cậy giá hiển thị

## 04. Learning Objectives

Sau lesson này, người học có thể:

1. Trình bày một sự cố kỹ thuật theo cấu trúc rõ ràng: What happened → Why → Impact → Next steps.
2. Dùng passive voice tự nhiên khi mô tả quá trình lỗi xảy ra ("was triggered by", "wasn't cleared").
3. Phân biệt được đâu là fact (đã xác nhận) và đâu là assumption (đang nghi ngờ) khi giải thích.
4. Trả lời câu hỏi "impact tới đâu" một cách trung thực, không phóng đại cũng không giảm nhẹ.

## 05. Key Vocabulary

| Từ / Cụm | Nghĩa |
|---|---|
| root cause | nguyên nhân gốc rễ |
| stale data | dữ liệu cũ/lỗi thời còn tồn đọng |
| cache invalidation | việc xóa/làm mới cache |
| hotfix | bản vá khẩn cấp |
| mitigation | biện pháp giảm thiểu tác động |
| affected users | người dùng bị ảnh hưởng |
| rollout | triển khai |
| monitor | theo dõi, giám sát |

## 06. Business Patterns

- Can you walk us through what happened?
- What's the impact so far?
- Is this something we're still seeing?
- What's being done about it right now?
- Do we know for sure, or is that an assumption?

## 07. IT Expressions

- The issue was triggered by...
- The cache wasn't invalidated when...
- We've confirmed that it's affecting...
- As a temporary fix, we've...
- The permanent fix will involve...

## 08. Natural / Reduced Speech

- Reduction: "kinda", "gonna", "we're gonna need to..."
- Linking: "what's've been affected" (informal spoken merge), "it's've been happening since..."
- Hedging: "as far as we know", "it looks like", "we believe"
- Filler khi tổ chức suy nghĩ: "So, basically...", "Okay, so here's what happened..."

## 09. Pre-listening

Trước khi nghe, hãy tự hỏi:

- Trong công việc thật, khi bạn phải báo cáo một sự cố production, bạn thường bắt đầu bằng câu gì?
- Bạn nghĩ David sẽ phân biệt "điều đã xác nhận" và "điều đang nghi ngờ" như thế nào trong lời giải thích?

Nghe lần đầu KHÔNG xem transcript — chỉ cố nắm: Sự cố là gì? Ai bị ảnh hưởng? Đã xử lý tạm thời chưa?

## 10. Realistic Conversation

```text
Michael: Okay, thanks for jumping on this quickly. Emily, can you start by telling us what you found?

Emily: Sure. I noticed that a few customers were seeing outdated prices on the site, even though we updated them in the admin panel yesterday.

Michael: Okay, so — David, do we know why that's happening?

David: Yeah, so basically, the issue was triggered by the cache not being invalidated after the price update went live.

Michael: Can you explain that a bit more simply? What does that actually mean for us?

David: Sure. So Varnish, our caching layer, is supposed to clear old pages whenever prices change. In this case, that step didn't happen for a specific set of category pages.

Emily: So the pages just kept showing the old cached version instead of pulling the new price?

David: Exactly. The server had the correct price, but the cached page being served to users still had the old one.

Michael: Okay, and do we know how many customers were actually affected by this?

David: As far as we know, it's limited to about a dozen category pages, but we're still confirming the exact number of affected sessions.

Michael: Is that confirmed, or is that still an assumption at this point?

David: That's still an assumption — we're working with the logs team to get a more accurate number.

Emily: What's being done about it right now, though?

David: As a temporary fix, we've manually flushed the cache for the affected pages, so the prices should be correct now.

Michael: Good. And what about a permanent fix, so this doesn't happen again?

David: The permanent fix will involve updating the cache-invalidation logic so it triggers automatically whenever a price change is saved.

Michael: Okay, how long do you think that'll take to implement?

David: I'd estimate a day or two, but I'll need to test it carefully before it goes to production.

Emily: Should I keep monitoring the affected pages in the meantime?

David: Yeah, that'd be really helpful — just to confirm the hotfix is holding until the real fix is deployed.

Michael: Alright, sounds like we have a plan. David, can you send a short summary after this call?

David: Sure, I'll write it up and share it with both of you by end of day.
```

## 11. Transcript

*(Bản transcript đầy đủ giống mục 10 — dùng để đối chiếu sau khi nghe ở Bước 3 của Listening Workflow, không xem trước khi nghe lần đầu.)*

## 12. Listening Tasks

1. Vấn đề Emily phát hiện là gì?
2. Nguyên nhân gốc rễ (root cause) của sự cố là gì?
3. David đã xử lý tạm thời (mitigation) bằng cách nào?
4. Điều gì vẫn còn là "assumption" chứ chưa được xác nhận?
5. David cam kết gửi gì, và khi nào?

**Đáp án gợi ý:**
1. Một số khách hàng nhìn thấy giá sản phẩm cũ dù giá đã được cập nhật.
2. Cache (Varnish) không được invalidate sau khi giá thay đổi, nên trang vẫn phục vụ bản cache cũ.
3. Manually flush cache cho các trang bị ảnh hưởng.
4. Số lượng chính xác session/khách hàng bị ảnh hưởng — vẫn đang xác nhận với logs team.
5. Một bản tóm tắt ngắn (summary), gửi trước cuối ngày.

## 13. Language Breakdown

- **"The issue was triggered by..."** — passive voice chuẩn để mô tả nguyên nhân mà không cần nói "who caused it", phù hợp khi giải thích sự cố kỹ thuật một cách khách quan.
- **"As far as we know..."** / **"That's still an assumption"** — cách phân biệt rõ ràng giữa fact và giả định, rất quan trọng khi báo cáo incident để tránh gây hiểu lầm.
- **"Can you explain that a bit more simply?"** — câu hữu ích khi PM (không chuyên kỹ thuật) cần developer diễn giải lại đơn giản hơn — học cách *yêu cầu* giải thích đơn giản, không chỉ cách *đưa ra* nó.
- **Reported/hedged language:** "I'd estimate a day or two" — ước lượng nhưng không cam kết cứng, tránh overpromise.
- **"That'd be really helpful"** — cách phản hồi tích cực nhẹ nhàng khi đồng ý với đề xuất của đồng nghiệp.

## 14. Shadowing

Chọn 3 câu sau để luyện shadowing:

1. "The issue was triggered by the cache not being invalidated after the price update went live."
2. "The server had the correct price, but the cached page being served to users still had the old one."
3. "As a temporary fix, we've manually flushed the cache for the affected pages, so the prices should be correct now."

Lặp lại mỗi câu 5-8 lần, chú ý ngữ điệu passive voice và cách nối "being served to".

## 15. Speaking Tasks

1. Chọn một sự cố kỹ thuật bất kỳ bạn từng gặp trong công việc thật, tự trình bày lại theo cấu trúc: What happened → Why it happened → Impact → What's being done.
2. Luyện câu phân biệt fact/assumption: "As far as we know, ... but that's still an assumption."
3. Tập nói câu ước lượng thời gian không cam kết cứng: "I'd estimate [X], but I'll need to confirm."

## 16. AI Role-play

```text
Bạn là Developer.
Tôi (AI) sẽ đóng vai Project Manager.

Tôi vừa nhận được báo cáo về một sự cố production.
Hãy giải thích cho tôi: chuyện gì đã xảy ra, nguyên nhân, mức độ ảnh hưởng,
và bạn đang làm gì để xử lý — theo đúng cấu trúc explain rõ ràng.

Tôi sẽ hỏi thêm ít nhất 1 câu bất ngờ (ví dụ: "Liệu vấn đề này có ảnh hưởng
tới phần khác không?") — hãy trả lời trung thực, phân biệt rõ điều bạn chắc
chắn và điều bạn còn đang giả định.
```

## 17. Quizlet Content

```text
Front: The issue was triggered by...
Back:
Meaning: Sự cố bị gây ra bởi...
Context: Giải thích nguyên nhân sự cố kỹ thuật
Response: The issue was triggered by a caching error.

Front: As far as we know...
Back:
Meaning: Theo những gì chúng tôi biết thì...
Context: Nói về điều đã xác nhận nhưng chưa chắc chắn 100%
Response: As far as we know, it only affects a few pages.

Front: That's still an assumption.
Back:
Meaning: Đó vẫn chỉ là giả định (chưa xác nhận).
Context: Phân biệt fact và assumption khi báo cáo
Response: We're still confirming that with the logs team.

Front: Can you explain that a bit more simply?
Back:
Meaning: Bạn có thể giải thích đơn giản hơn không?
Context: Yêu cầu giải thích dễ hiểu hơn
Response: Sure, basically what happened is...

Front: As a temporary fix, we've...
Back:
Meaning: Như một biện pháp tạm thời, chúng tôi đã...
Context: Mô tả mitigation đã thực hiện
Response: As a temporary fix, we've flushed the cache manually.

Front: I'd estimate a day or two.
Back:
Meaning: Tôi ước tính khoảng một hoặc hai ngày.
Context: Ước lượng thời gian không cam kết cứng
Response: I'll confirm once I've tested it further.
```
