# Lesson 23 — Technical + Business Meeting

## 01. Lesson Metadata

```yaml
lesson: 23
title: Technical + Business Meeting
module: 6
target_level: 4

audio:
  target_wpm: 175-190
  turn_length_words: 25-40
  turns: 25-35
  characters: 4

it_context:
  - Backend
  - Frontend
  - QA
  - Deployment
  - Client requirements
  - Project management

meeting_type:
  - Cross-functional project meeting

meeting_objective:
  - Connect technical and business concerns
  - Resolve a technical issue
  - Discuss risk and timeline
  - Reach a decision

listening_objective:
  - Track several speakers
  - Distinguish technical and business concerns
  - Interpret indirect language
  - Recover after interruptions

speaking_objective:
  - Explain technical issues to non-technical people
  - Respond to technical questions
  - Negotiate trade-offs
  - Participate spontaneously

grammar:
  - Complex multi-clause sentences
  - Conditionals
  - Passive voice
  - Reported language
  - Hedging
  - Indirect language

reduced_speech: Dense
context_noise: High
interruption_level: Frequent
topic_shift_level: Frequent
overlap: Frequent
fillers: Frequent
```

## 02. Situation

Emily (QA) phát hiện một lỗi nghiêm trọng ở bước thanh toán — đôi khi payment gateway trả về lỗi timeout, nhưng đơn hàng vẫn được tạo, khiến khách hàng nghĩ đã thanh toán thất bại trong khi thực ra tiền đã bị trừ. James (Tech Lead) và David (Developer) chưa thống nhất được nguyên nhân — một người nghi backend, một người nghi do frontend không xử lý đúng response. Michael (PM) cần cả team đưa ra quyết định về việc có nên trì hoãn release sắp tới hay không, trong khi mọi người vẫn đang tranh luận về nguyên nhân kỹ thuật.

## 03. IT Context

- Payment gateway timeout gây double-charge tiềm ẩn
- Bất đồng giữa 2 giả thuyết: backend retry logic vs frontend response handling
- Quyết định business: có nên hoãn release để fix triệt để hay không
- Rủi ro tài chính/uy tín nếu khách hàng bị trừ tiền nhầm

## 04. Learning Objectives

Sau lesson này, người học có thể:

1. Theo dõi được hội thoại có 4 người nói, mỗi người mang một góc nhìn khác nhau (QA, Dev, Tech Lead, PM).
2. Phân biệt được khi nào một câu nói đang bàn về mặt kỹ thuật (technical concern) và khi nào đang bàn về mặt kinh doanh/rủi ro (business concern).
3. Giải thích một vấn đề kỹ thuật phức tạp cho người không rành kỹ thuật (PM) một cách dễ hiểu.
4. Phục hồi mạch nghe sau khi bị ngắt lời hoặc khi 2 người nói gần như cùng lúc.

## 05. Key Vocabulary

| Từ / Cụm | Nghĩa |
|---|---|
| double charge | bị trừ tiền hai lần |
| root cause | nguyên nhân gốc rễ |
| retry logic | logic thử lại (khi request thất bại) |
| response handling | cách xử lý phản hồi từ hệ thống khác |
| financial risk | rủi ro tài chính |
| hold the release | trì hoãn việc release |
| best guess | phỏng đoán hợp lý nhất hiện có |
| reputational risk | rủi ro về uy tín |

## 06. Business Patterns

- Just to bring everyone up to speed...
- From a technical standpoint... but from a business standpoint...
- I don't think we can rule that out yet.
- Let's not jump to conclusions before we know more.
- At the end of the day, the real question is...
- Where does that leave us in terms of the release?

## 07. IT Expressions

- It looks like the gateway is timing out, but the order's still being created on our end.
- That could be a retry-logic issue on the backend, or it could be how the frontend's handling the response.
- We don't have a confirmed root cause yet, just theories.
- If we ship without fixing this, there's a real chance of double-charging customers.

## 08. Natural / Reduced Speech

- Reduction dày đặc: "gonna", "kinda", "I dunno", "we'd've caught it if..."
- Filler tần suất cao: "I mean,", "look,", "honestly,", "at the end of the day,", "so, yeah,"
- Overlap tần suất cao: câu bị cắt ngang giữa chừng rồi người khác nói tiếp gần như ngay lập tức.
- Indirect language: "I'm not 100% sure, but..." , "it might be worth considering..."

## 09. Pre-listening

Trước khi nghe, hãy tự hỏi:

- Khi 2 đồng nghiệp kỹ thuật bất đồng về nguyên nhân một lỗi ngay trong cuộc họp, bạn nghĩ PM nên xử lý tình huống đó thế nào?
- Với 4 người nói, bạn dự đoán mình sẽ khó theo dõi nhất ở đoạn nào — lúc tranh luận kỹ thuật, hay lúc quyết định business?

Nghe lần đầu KHÔNG xem transcript. Chỉ cần nắm: Vấn đề là gì, 2 giả thuyết là gì, và quyết định cuối cùng về release là gì.

## 10. Realistic Conversation

```text
Michael: Okay, so — just to bring everyone up to speed, Emily found something concerning with the payment flow yesterday. Emily, can you walk us through it?

Emily: Yeah, so basically, in a handful of test cases, the gateway returns a timeout error, but the order still gets created on our end, which means the customer might actually be charged.

James: Right, and my best guess is that's a retry-logic issue — we might be resubmitting the payment request without properly checking if the first one already went through.

David: I mean, that's possible, but honestly, I think it might be on the frontend side — if we're not handling the timeout response correctly, we could be triggering a second submission ourselves.

James: Sure, that's fair, but — sorry, can I just — the backend logs show the duplicate request coming in almost immediately after the timeout, which points more toward a retry issue to me.

David: Right, but that timing would also make sense if the frontend auto-retries on timeout without waiting for a proper response, which is honestly what I suspect is happening.

Michael: Okay, okay — from a technical standpoint, I hear there are two theories, but from a business standpoint, the real question is: how risky is this for customers right now?

Emily: Honestly, pretty risky — if this happens even occasionally in production, we're talking about actual double-charges, which is a financial and reputational risk.

Michael: Right, that's what I was afraid of. So, where does that leave us in terms of the release next week?

James: I don't think we can rule out either cause yet, so my instinct is we should hold the release until we've confirmed the root cause.

David: I'd lean that way too — shipping this without knowing which side is actually broken feels risky, especially with real money involved.

Michael: Let's not jump to conclusions before we know more, but — yeah, I agree, holding the release sounds like the safer call here.

Emily: I can help narrow it down faster if David and James want to pair on reproducing it together this afternoon.

James: That'd actually be really helpful, yeah — two sets of eyes on the logs might get us to a root cause quicker.

David: Agreed, let's do that right after this call.

Michael: Perfect. So, at the end of the day, we're holding the release, David and James are pairing on root cause this afternoon, and Emily's keeping an eye on any other related cases.

Emily: Sounds good to me.

James: Works for me too.

David: Yep, I'll update everyone once we've narrowed it down, hopefully by end of day.

Michael: Great, thanks everyone — this is exactly the kind of thing worth slowing down for.
```

## 11. Transcript

*(Bản transcript đầy đủ giống mục 10 — dùng để đối chiếu sau khi nghe ở Bước 3 của Listening Workflow, không xem trước khi nghe lần đầu.)*

## 12. Listening Tasks

1. Emily phát hiện vấn đề gì trong payment flow?
2. James nghi ngờ nguyên nhân là gì? Còn David nghi ngờ điều gì?
3. Michael đặt câu hỏi "business standpoint" nào để chuyển từ tranh luận kỹ thuật sang quyết định?
4. Quyết định cuối cùng về release là gì?
5. Ai sẽ làm gì tiếp theo để tìm ra root cause?

**Đáp án gợi ý:**
1. Gateway trả về lỗi timeout nhưng đơn hàng vẫn được tạo — khách hàng có thể bị trừ tiền dù hệ thống báo lỗi.
2. James nghi backend retry logic gửi lại request trùng; David nghi frontend xử lý sai response timeout, tự động gửi lại request.
3. "How risky is this for customers right now?" — chuyển từ "ai đúng về mặt kỹ thuật" sang "rủi ro thực tế cho khách hàng".
4. Hoãn release cho đến khi xác định được root cause.
5. David và James sẽ pair lại với nhau để reproduce lỗi và tìm root cause ngay buổi chiều; Emily theo dõi thêm các case liên quan.

## 13. Language Breakdown

- **"Just to bring everyone up to speed..."** — câu mở đầu chuẩn khi có người chưa nắm thông tin, giúp đồng bộ ngữ cảnh cho cả 4 người trước khi vào chi tiết.
- **"From a technical standpoint... but from a business standpoint..."** — cấu trúc rất hữu ích để chuyển góc nhìn giữa kỹ thuật và kinh doanh trong cùng một câu, đặc trưng của cross-functional meeting.
- **Overlap giả lập:** "Sure, that's fair, but — sorry, can I just —" rồi James tiếp tục ngay — mô phỏng 2 người gần như nói chồng nhau dù không phải audio thật chồng tiếng.
- **Indirect/hedged disagreement:** "that's possible, but honestly, I think it might be..." — David không bác bỏ thẳng ý James mà đưa giả thuyết khác một cách mềm mỏng.
- **"At the end of the day..."** — filler rất phổ biến khi tổng kết lại sau một đoạn tranh luận dài, báo hiệu sắp chuyển sang quyết định/action item.

## 14. Shadowing

Chọn 3 câu sau để luyện shadowing (câu dài, có overlap — thử thách cao nhất trong course):

1. "From a technical standpoint, I hear there are two theories, but from a business standpoint, the real question is: how risky is this for customers right now?"
2. "That's possible, but honestly, I think it might be on the frontend side — if we're not handling the timeout response correctly, we could be triggering a second submission ourselves."
3. "At the end of the day, we're holding the release, David and James are pairing on root cause this afternoon, and Emily's keeping an eye on any other related cases."

Lặp lại mỗi câu 6-10 lần. Với câu có 2 mệnh đề song song ("from a technical standpoint... but from a business standpoint..."), luyện tách nhịp rõ ràng giữa 2 vế trước khi ghép lại tốc độ thật.

## 15. Speaking Tasks

1. Luyện giải thích một vấn đề kỹ thuật có 2 giả thuyết khác nhau cho một người không rành kỹ thuật, dùng cấu trúc "My best guess is X, but it could also be Y."
2. Tập câu chuyển góc nhìn: "From a technical standpoint..., but from a business standpoint...".
3. Luyện tổng kết quyết định cuối cuộc họp bằng "At the end of the day, we're [quyết định], [tên] is [việc], and [tên] is [việc]."

## 16. AI Role-play

```text
Bạn là Developer hoặc Tech Lead.
Tôi (AI) sẽ đóng nhiều vai trong cùng cuộc hội thoại — lúc là PM
hỏi về rủi ro business, lúc là đồng nghiệp kỹ thuật đưa ra giả thuyết
khác với bạn.

Tôi sẽ ngắt lời bạn, đưa ra ý kiến trái chiều, và đôi khi hỏi dồn dập.
Hãy giữ mạch giải thích rõ ràng, không mất bình tĩnh khi bị ngắt lời,
và giúp cuộc họp đi đến một quyết định cụ thể ở cuối.
```

## 17. Quizlet Content

```text
Front: Just to bring everyone up to speed...
Back:
Meaning: Để mọi người cùng nắm được tình hình...
Context: Mở đầu khi có người chưa biết thông tin
Response: [tóm tắt ngắn gọn vấn đề]

Front: From a technical standpoint... but from a business standpoint...
Back:
Meaning: Về mặt kỹ thuật thì... nhưng về mặt kinh doanh thì...
Context: Chuyển góc nhìn giữa kỹ thuật và kinh doanh
Response: [nêu rủi ro hoặc quyết định thực tế]

Front: I don't think we can rule that out yet.
Back:
Meaning: Tôi nghĩ chưa thể loại trừ khả năng đó.
Context: Giữ thái độ mở khi chưa có kết luận chắc chắn
Response: Let's keep investigating before deciding.

Front: Let's not jump to conclusions before we know more.
Back:
Meaning: Đừng vội kết luận khi chưa biết rõ hơn.
Context: Làm chậm lại một cuộc tranh luận đang vội vàng
Response: Agreed, let's gather more information first.

Front: At the end of the day, the real question is...
Back:
Meaning: Suy cho cùng, câu hỏi thực sự là...
Context: Tổng kết lại trọng tâm sau một đoạn tranh luận
Response: [nêu câu hỏi cốt lõi cần trả lời]

Front: Where does that leave us in terms of the release?
Back:
Meaning: Vậy điều đó ảnh hưởng thế nào đến việc release?
Context: Chuyển từ thảo luận kỹ thuật sang quyết định business
Response: I think we should hold the release for now.
```
