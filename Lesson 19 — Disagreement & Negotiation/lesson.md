# Lesson 19 — Disagreement & Negotiation

## 01. Lesson Metadata

```yaml
lesson: 19
title: Disagreement & Negotiation
module: 5
target_level: 3

audio:
  target_wpm: 160-170
  turn_length_words: 20-30
  turns: 22-30
  characters: 3

it_context:
  - Feature scope
  - Technical approach
  - Timeline

meeting_type:
  - Client / technical negotiation

meeting_objective:
  - Disagree professionally
  - Explain concerns
  - Offer alternatives
  - Reach agreement

listening_objective:
  - Recognize indirect disagreement
  - Detect hedging
  - Understand implied concerns

speaking_objective:
  - Disagree politely
  - Explain technical concerns
  - Suggest alternatives
  - Negotiate

grammar:
  - Conditionals
  - Modal verbs
  - Hedging
  - Indirect language

reduced_speech: Frequent
context_noise: Medium to high
interruption_level: Occasional
topic_shift_level: Occasional
```

## 02. Situation

Sarah (Client) muốn tính năng "kiểm tra tồn kho real-time" được lấy dữ liệu trực tiếp (synchronous call) từ hệ thống kho mỗi khi khách xem sản phẩm, để đảm bảo số liệu luôn chính xác tuyệt đối. David (Developer) lo ngại cách này sẽ làm chậm trang sản phẩm nghiêm trọng khi lượng truy cập cao, đặc biệt vào mùa sale. Michael (PM) đứng giữa, cố gắng giúp hai bên đạt được thỏa hiệp hợp lý mà vẫn đáp ứng được mối quan tâm chính của Sarah.

## 03. IT Context

- Synchronous API call vs cached/async data
- Ảnh hưởng đến page load time khi traffic cao
- Trade-off giữa độ chính xác dữ liệu và hiệu năng hệ thống
- Giải pháp trung gian: cache ngắn hạn + refresh định kỳ

## 04. Learning Objectives

Sau lesson này, người học có thể:

1. Nhận diện các câu phản đối gián tiếp thay vì nói "No" thẳng thừng.
2. Nghe ra được mối lo ẩn (implied concern) đằng sau một yêu cầu của client.
3. Diễn đạt sự không đồng ý một cách chuyên nghiệp, không gây căng thẳng.
4. Đề xuất giải pháp thay thế và dẫn dắt cuộc thương lượng đến một thỏa hiệp.

## 05. Key Vocabulary

| Từ / Cụm | Nghĩa |
|---|---|
| real-time | thời gian thực |
| performance impact | ảnh hưởng đến hiệu năng |
| trade-off | sự đánh đổi |
| compromise | thỏa hiệp |
| peak traffic | thời điểm lượng truy cập cao nhất |
| latency | độ trễ |
| alternative approach | phương án thay thế |
| accuracy | độ chính xác |

## 06. Business Patterns

- I'm not sure that's the best approach.
- I see where you're coming from.
- The concern I have is...
- One thing we should consider is...
- Would it make sense to...?
- That could work, but...

## 07. IT Expressions

- If we go with a synchronous call, it could add noticeable latency.
- We could cache the data for a short window instead.
- That would reduce accuracy slightly, but improve performance significantly.
- A hybrid approach might give us both.

## 08. Natural / Reduced Speech

- Reduction: "gonna", "kinda", "I dunno if that'd work"
- Linking: "what're we", "that'd be"
- Hedging: "I think", "to be honest", "it might"
- Filler khi cân nhắc: "Hmm, let me think about that...", "Well, here's the thing..."

## 09. Pre-listening

Trước khi nghe, hãy tự hỏi:

- Khi client đưa ra một yêu cầu bạn thấy rủi ro về mặt kỹ thuật, bạn thường mở đầu câu phản đối như thế nào để không nghe quá thẳng?
- Bạn dự đoán cuộc thương lượng này sẽ kết thúc bằng phương án nào — giữ nguyên ý client, theo ý David, hay một phương án trung gian?

Nghe lần đầu KHÔNG xem transcript — chỉ cố nắm: David lo ngại điều gì? Cuối cùng 3 người thống nhất phương án nào?

## 10. Realistic Conversation

```text
Sarah: So, for the stock-checking feature, I really want it to pull live data every single time someone views a product page.

David: I hear you, but I'm not sure that's the best approach, especially during high-traffic periods like sales.

Sarah: What do you mean? Isn't accuracy the whole point of this feature?

David: It is, but if we call the inventory system synchronously on every page view, it could add real latency, maybe a full second or more.

Michael: Sarah, the concern David's raising is basically about page speed versus data freshness.

Sarah: Okay, I see where you're coming from, but a one-second delay doesn't sound too bad, does it?

David: On a normal day, maybe not, but during peak traffic, that delay could multiply and actually slow the whole site down.

Sarah: Hmm, I hadn't thought about it that way. So what would you suggest instead?

David: One thing we should consider is caching the stock data for a short window, like thirty seconds, instead of calling it live every time.

Sarah: Would that mean customers could see slightly outdated numbers?

David: Technically, yes, but only for a few seconds, and honestly, most customers wouldn't even notice that small a delay.

Sarah: That could work, but I'd still want it to be as close to real-time as possible for high-demand items.

Michael: What if we did a hybrid? Cache most products, but call live data specifically for items that are almost out of stock.

David: Actually, that's a solid idea — we'd get better accuracy exactly where it matters most, without the full performance hit.

Sarah: I like that. So low-stock items get real-time checks, and everything else uses the short cache?

David: Exactly, and if the cache window ever causes issues, we could always shorten it further later.

Sarah: Okay, that sounds like a reasonable compromise to me.

Michael: Great, so David, can you put together a quick technical outline for that hybrid approach?

David: Sure, I'll have something ready by tomorrow so we can review it together.

Sarah: Perfect. Thanks for walking me through the trade-offs — that actually makes a lot more sense now.

David: No problem, happy to explain anytime something like this comes up.
```

## 11. Transcript

*(Bản transcript đầy đủ giống mục 10 — dùng để đối chiếu sau khi nghe ở Bước 3 của Listening Workflow, không xem trước khi nghe lần đầu.)*

## 12. Listening Tasks

1. Yêu cầu ban đầu của Sarah là gì?
2. David lo ngại điều gì nếu làm theo yêu cầu đó?
3. Michael đề xuất giải pháp trung gian nào?
4. Cuối cùng 3 người thống nhất phương án gì?
5. David cam kết làm gì tiếp theo, và khi nào?

**Đáp án gợi ý:**
1. Muốn tính năng kiểm tra tồn kho lấy dữ liệu real-time mỗi lần xem trang sản phẩm.
2. Gọi API đồng bộ (synchronous) mỗi lần xem trang có thể gây trễ, đặc biệt lúc traffic cao.
3. Hybrid: cache ngắn hạn cho hầu hết sản phẩm, nhưng gọi real-time riêng cho sản phẩm sắp hết hàng.
4. Đồng ý theo phương án hybrid của Michael.
5. Chuẩn bị bản technical outline cho phương án hybrid, gửi trước ngày mai.

## 13. Language Breakdown

- **"I'm not sure that's the best approach"** — cách phản đối gián tiếp, không nói "that's wrong" mà giảm nhẹ bằng "I'm not sure".
- **"I see where you're coming from, but..."** — công nhận quan điểm đối phương trước khi đưa phản biện, kỹ thuật giao tiếp rất phổ biến trong đàm phán tiếng Anh công sở.
- **Conditional + hedging:** "if we call it synchronously, it could add real latency" — dùng conditional để trình bày rủi ro mà không khẳng định chắc chắn 100%.
- **"That could work, but..."** — chấp nhận một phần ý tưởng trong khi vẫn giữ mối quan tâm của mình, mở đường cho thỏa hiệp.
- **"What if we did a hybrid?"** — cách đưa ra đề xuất thay thế nhẹ nhàng dưới dạng câu hỏi thay vì khẳng định.

## 14. Shadowing

Chọn 3 câu sau để luyện shadowing:

1. "I hear you, but I'm not sure that's the best approach, especially during high-traffic periods."
2. "If we call the inventory system synchronously on every page view, it could add real latency."
3. "What if we did a hybrid? Cache most products, but call live data specifically for items that are almost out of stock."

Lặp lại mỗi câu 5-8 lần, chú ý ngữ điệu lên xuống khi hedging ("I'm not sure", "it could").

## 15. Speaking Tasks

1. Nghĩ về một tình huống thật bạn từng không đồng ý với client/PM — luyện nói lại bằng pattern "I'm not sure that's the best approach, because..."
2. Luyện đề xuất phương án thay thế bằng câu hỏi: "What if we did...?" / "Would it make sense to...?"
3. Tập câu chấp nhận có điều kiện: "That could work, but I'd still want to consider..."

## 16. AI Role-play

```text
Bạn là Developer.
Tôi (AI) đóng vai Client.

Tôi sẽ đưa ra một yêu cầu kỹ thuật mà bạn cảm thấy có rủi ro
(về hiệu năng, chi phí, hoặc thời gian).

Hãy phản đối một cách chuyên nghiệp — không nói "No" thẳng,
giải thích mối lo ngại, và đề xuất ít nhất một phương án thay thế.

Tôi có thể phản bác lại đề xuất của bạn ít nhất một lần —
hãy tiếp tục thương lượng đến khi đạt được một thỏa hiệp hợp lý.
```

## 17. Quizlet Content

```text
Front: I'm not sure that's the best approach.
Back:
Meaning: Tôi không chắc đó là cách tốt nhất.
Context: Phản đối gián tiếp một đề xuất
Response: Can you explain your concern?

Front: I see where you're coming from, but...
Back:
Meaning: Tôi hiểu ý bạn, nhưng...
Context: Công nhận quan điểm đối phương trước khi phản biện
Response: ...I'd still want to consider the trade-offs.

Front: The concern I have is...
Back:
Meaning: Điều tôi lo ngại là...
Context: Nêu rõ mối lo ngại kỹ thuật
Response: The concern I have is the impact on performance.

Front: Would it make sense to...?
Back:
Meaning: Liệu sẽ hợp lý nếu... không?
Context: Đề xuất phương án thay thế nhẹ nhàng
Response: Would it make sense to cache the data instead?

Front: That could work, but...
Back:
Meaning: Cách đó có thể được, nhưng...
Context: Chấp nhận có điều kiện, mở đường thỏa hiệp
Response: That could work, but let's test it first.

Front: a hybrid approach
Back:
Meaning: giải pháp kết hợp/trung gian
Context: Đề xuất phương án dung hòa hai bên
Response: A hybrid approach might give us both accuracy and speed.
```
