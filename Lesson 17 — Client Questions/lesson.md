# Lesson 17 — Client Questions

## 01. Lesson Metadata

```yaml
lesson: 17
title: Client Questions
module: 5
target_level: 3

audio:
  target_wpm: 155-170
  turn_length_words: 18-30
  turns: 22-28
  characters: 3

it_context:
  - Client review
  - Feature behavior
  - E-commerce

meeting_type:
  - Client review meeting

meeting_objective:
  - Understand client questions
  - Explain technical limitations
  - Clarify expectations

listening_objective:
  - Understand indirect client questions
  - Identify the concern behind a question
  - Follow follow-up questions

speaking_objective:
  - Answer client questions
  - Clarify assumptions
  - Explain limitations

grammar:
  - Conditionals
  - Passive voice
  - Reported language

reduced_speech: Frequent
context_noise: Medium
interruption_level: Occasional
```

## 02. Situation

Sarah (Client) đang review tính năng lọc sản phẩm (product filter) mới triển khai trên site e-commerce Magento. Cô nhận thấy hành vi của filter không như cô kỳ vọng khi kết hợp nhiều điều kiện lọc cùng lúc, và muốn hiểu tại sao hệ thống hoạt động như vậy, đồng thời hỏi liệu có thể thay đổi được không. Michael (PM) tham gia để điều phối, David (Developer) giải thích giới hạn kỹ thuật.

## 03. IT Context

- Product filter / layered navigation (Magento)
- Attribute-based filtering
- Cache behavior ảnh hưởng đến kết quả hiển thị
- Giới hạn kỹ thuật khi kết hợp nhiều điều kiện lọc

## 04. Learning Objectives

Sau lesson này, người học có thể:

1. Nhận diện câu hỏi gián tiếp của client (không hỏi thẳng "tại sao" mà hỏi vòng qua kỳ vọng).
2. Nghe hiểu và phân biệt được "câu hỏi bề mặt" và "mối lo thực sự" đằng sau.
3. Giải thích giới hạn kỹ thuật cho người không rành kỹ thuật mà không dùng thuật ngữ khó.
4. Trả lời client mà không hứa hẹn quá mức (overpromise).

## 05. Key Vocabulary

| Từ / Cụm | Nghĩa |
|---|---|
| filter combination | kết hợp nhiều điều kiện lọc |
| expected behavior | hành vi mong đợi |
| limitation | giới hạn (kỹ thuật) |
| trade-off | sự đánh đổi |
| configurable | có thể tùy chỉnh được |
| edge case | trường hợp biên/hiếm gặp |
| workaround | giải pháp tạm |
| assumption | giả định |

## 06. Business Patterns

- Why does it work this way?
- Would it be possible to...?
- What would happen if...?
- Is there a reason we can't...?
- Just so I understand correctly...
- That makes sense, but...

## 07. IT Expressions

- The filter is applied based on...
- That's actually expected behavior because...
- There's a technical limitation with...
- It would require a workaround to...
- We'd need to weigh the trade-off between... and...

## 08. Natural / Reduced Speech

Trong lesson này sẽ xuất hiện:

- Reduction: "kinda", "gonna", "I dunno if..."
- Linking: "what'd happen if" (what would happen if)
- Hedging: "I think", "sort of", "to some extent"
- Filler nhẹ khi suy nghĩ: "Hmm, so...", "Let's see..."

## 09. Pre-listening

Trước khi nghe, hãy tự hỏi:

- Trong công việc thực tế, client của bạn thường hỏi kiểu câu nào khi không hiểu vì sao tính năng hoạt động khác kỳ vọng?
- Bạn dự đoán David sẽ giải thích bằng cách nào để không làm Sarah cảm thấy bị từ chối thẳng thừng?

Nghe lần đầu KHÔNG xem transcript — chỉ cố nắm ý chính: Sarah đang lo gì? David có đồng ý thay đổi không?

## 10. Realistic Conversation

```text
Sarah: Hey, thanks for jumping on this. So I was testing the new filter yesterday, and something felt a little off.

Michael: Sure, what were you seeing exactly?

Sarah: Well, when I select two filters together, like brand and price range, some products just... disappear. Even ones that should match both.

David: Right, yeah — that's actually expected behavior, based on how the indexing works for combined attributes.

Sarah: Okay, but why would it work that way? From a user's point of view, that looks like a bug.

David: So, the filters are indexed separately, and when you combine them, the system only shows products where both attributes were indexed together in the same batch.

Sarah: Hmm, I don't fully follow, but— would it be possible to change that?

David: Technically, yes, but it would require rebuilding the indexer logic, and that could affect page load speed sitewide.

Michael: So it's really a trade-off between accuracy and performance, is that right, David?

David: Exactly. We could make it more accurate, but it'd be noticeably slower on category pages with a lot of products.

Sarah: I see. Is there a reason we can't just test it on a few categories first?

David: That's actually a reasonable approach. We could run it as a workaround on select categories and monitor performance.

Sarah: Okay, that sounds fair. What would happen if we just left it as is for now?

Michael: Honestly, most users probably won't notice, but it's worth keeping on the radar for the next sprint.

Sarah: Alright. Just so I understand correctly — for now, nothing changes, but you'll look into a limited rollout?

David: That's right. I'll put together a quick estimate and share it by Thursday.

Sarah: Perfect, that works for me. One more thing — is this something that could affect the checkout filters too?

David: Good question — I'd need to check that separately, but I don't think it's connected.

Michael: I'll add that as a follow-up item so we don't lose track of it.

Sarah: Sounds good. Thanks for explaining, David, that actually makes a lot more sense now.

David: No problem. I'll get back to you with the estimate soon.
```

## 11. Transcript

*(Bản transcript đầy đủ giống mục 10 — dùng để đối chiếu sau khi nghe ở Bước 3 của Listening Workflow, không xem trước khi nghe lần đầu.)*

## 12. Listening Tasks

1. Vấn đề Sarah gặp phải khi dùng filter là gì?
2. Tại sao filter lại hoạt động như vậy về mặt kỹ thuật?
3. David đề xuất giải pháp tạm nào?
4. Ai là người chịu trách nhiệm gửi estimate, và khi nào?
5. Câu hỏi cuối cùng Sarah đặt ra là gì, và David trả lời như thế nào?

**Đáp án gợi ý:**
1. Khi kết hợp 2 filter (brand + price), một số sản phẩm hợp lệ bị ẩn đi.
2. Vì các attribute được index riêng lẻ, chỉ hiển thị sản phẩm khi cả 2 attribute được index cùng batch.
3. Rollout có giới hạn trên một số category để theo dõi performance trước.
4. David, gửi trước thứ Năm.
5. Liệu vấn đề có ảnh hưởng đến checkout filter không — David nói cần kiểm tra riêng, nhưng nghĩ là không liên quan.

## 13. Language Breakdown

- **"That's actually expected behavior"** — cách nói giảm nhẹ để không khiến client nghĩ đây là lỗi, nhưng vẫn thẳng thắn.
- **"Is that right, David?"** — Michael dùng câu hỏi ngắn để xác nhận lại giải thích kỹ thuật, một kỹ năng PM cần có khi làm cầu nối.
- **"I don't fully follow, but—"** — cách client thừa nhận chưa hiểu hết mà không làm gián đoạn cuộc trò chuyện.
- **Passive voice:** "the filters are indexed separately" — dùng passive vì người nói tập trung vào *quá trình*, không phải ai làm.
- **Reported/hedged language:** "I think it's connected" / "I'd need to check" — thể hiện sự không chắc chắn một cách chuyên nghiệp, tránh cam kết sai.

## 14. Shadowing

Chọn 3 câu sau để luyện shadowing (nói theo ngay khi nghe, không nhìn transcript):

1. "That's actually expected behavior, based on how the indexing works."
2. "It would require rebuilding the indexer logic, and that could affect page load speed sitewide."
3. "Just so I understand correctly — for now, nothing changes, but you'll look into a limited rollout?"

Lặp lại mỗi câu 5-8 lần cho đến khi nói trôi chảy đúng ngữ điệu, không cần dịch trong đầu.

## 15. Speaking Tasks

1. Giả sử client hỏi bạn: *"Why does it work this way?"* — hãy tự trả lời bằng lời (nói to) giải thích một giới hạn kỹ thuật bất kỳ trong công việc thật của bạn, dùng cấu trúc "That's actually expected behavior because..."
2. Luyện nói câu đề xuất workaround: dùng pattern "Would it be possible to...?" cho một tình huống thật bạn từng gặp.
3. Tập nói câu trì hoãn cam kết chuyên nghiệp: "I'd need to check that separately, but..."

## 16. AI Role-play

```text
Bạn là Developer.
Tôi (AI) là Client (Sarah).

Tôi sẽ hỏi bạn về một tính năng đang hoạt động khác với kỳ vọng của tôi.
Hãy giải thích giới hạn kỹ thuật một cách dễ hiểu, không dùng thuật ngữ khó,
và đề xuất một hướng giải quyết hợp lý.

Tôi có thể hỏi thêm một câu bất ngờ liên quan đến phần khác của hệ thống —
hãy trả lời trung thực nếu bạn không chắc, đừng đoán bừa.
```

## 17. Quizlet Content

```text
Front: Why does it work this way?
Back:
Meaning: Tại sao nó lại hoạt động như vậy?
Context: Client thắc mắc về hành vi hệ thống
Response: That's actually expected behavior because...

Front: Would it be possible to...?
Back:
Meaning: Liệu có thể... được không?
Context: Client đề xuất thay đổi
Response: Technically, yes, but it would require...

Front: Is there a reason we can't...?
Back:
Meaning: Có lý do gì mà chúng ta không thể... không?
Context: Client thắc mắc về giới hạn
Response: The main constraint is...

Front: Just so I understand correctly...
Back:
Meaning: Để tôi hiểu đúng ý thì...
Context: Xác nhận lại thông tin
Response: That's right, / Not quite, actually...

Front: I'd need to check that separately.
Back:
Meaning: Tôi cần kiểm tra riêng việc đó.
Context: Trì hoãn cam kết một cách chuyên nghiệp
Response: I'll get back to you by [ngày cụ thể].

Front: a trade-off between X and Y
Back:
Meaning: sự đánh đổi giữa X và Y
Context: Giải thích lựa chọn kỹ thuật
Response: We could improve X, but it would affect Y.
```
