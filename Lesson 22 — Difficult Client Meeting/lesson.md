# Lesson 22 — Difficult Client Meeting

## 01. Lesson Metadata

```yaml
lesson: 22
title: Difficult Client Meeting
module: 6
target_level: 4

audio:
  target_wpm: 170-185
  turn_length_words: 25-40
  turns: 25-35
  characters: 3-4

it_context:
  - Changing requirements
  - Deadline pressure
  - Technical limitations
  - Client expectations

meeting_type:
  - Difficult client meeting

meeting_objective:
  - Handle pressure
  - Clarify changing requirements
  - Push back professionally
  - Manage expectations

listening_objective:
  - Understand fast client speech
  - Detect implied requests
  - Track changing requirements
  - Handle interruptions

speaking_objective:
  - Respond under pressure
  - Clarify changing scope
  - Push back diplomatically
  - Negotiate timeline

grammar:
  - Complex multi-clause sentences
  - Conditionals
  - Passive voice
  - Reported language
  - Hedging

reduced_speech: Dense
context_noise: High
interruption_level: Frequent
topic_shift_level: Frequent
overlap: Possible
fillers: Frequent
```

## 02. Situation

Sarah (Client) đang chịu áp lực từ phía công ty mình vì launch date sắp tới, và bất ngờ muốn thêm 2 tính năng mới ("gift wrapping" và "loyalty points hiển thị real-time") vào ngay đợt release tuần sau — điều chưa từng được thống nhất trước đó. Cô nói nhanh, ngắt lời liên tục, và đôi lúc đổi yêu cầu ngay giữa câu. Michael (PM) cố gắng làm dịu tình hình, David (Developer) phải vừa nghe kịp vừa giải thích giới hạn kỹ thuật mà không làm căng thẳng leo thang.

## 03. IT Context

- Thêm tính năng ngoài phạm vi (scope) ban đầu ngay sát deadline
- Giới hạn kỹ thuật khi phải làm gấp (technical debt, testing bị rút ngắn)
- Rủi ro khi release vội mà chưa test kỹ
- Quản lý kỳ vọng của client dưới áp lực thời gian

## 04. Learning Objectives

Sau lesson này, người học có thể:

1. Nghe hiểu được lời nói nhanh, có ngắt lời, và đôi khi đổi ý ngay giữa câu của client.
2. Nhận ra yêu cầu ngầm ẩn (implied request) — client không luôn nói thẳng "tôi muốn X", đôi khi nói vòng qua áp lực họ đang chịu.
3. Phản hồi dưới áp lực mà vẫn giữ được sự chuyên nghiệp, không phản ứng phòng thủ.
4. Đàm phán lại timeline một cách chắc chắn nhưng không đối đầu.

## 05. Key Vocabulary

| Từ / Cụm | Nghĩa |
|---|---|
| scope creep | việc mở rộng phạm vi công việc ngoài dự kiến |
| under pressure | chịu áp lực |
| non-negotiable | không thể thương lượng/thay đổi |
| cut corners | làm ẩu/rút gọn quy trình để kịp tiến độ |
| manage expectations | quản lý kỳ vọng |
| push back | phản đối/từ chối một cách lịch sự |
| bare minimum | mức tối thiểu |
| buffer time | thời gian dự phòng |

## 06. Business Patterns

- I completely understand the pressure you're under, but...
- Here's the thing — if we add that now, it could put the whole release at risk.
- Let me be upfront about what's realistic here.
- I don't think that's something we can commit to without cutting corners somewhere else.
- What I can do is...
- Can we agree on a version that's doable by the deadline, and revisit the rest afterward?

## 07. IT Expressions

- That would mean reopening testing on the whole checkout flow.
- We'd be adding scope this close to the release date.
- If we rush this, there's a real risk of introducing new bugs.
- The safest path would be to ship what's stable now and follow up with a fast patch.

## 08. Natural / Reduced Speech

- Reduction dày đặc: "gonna", "gotta", "kinda", "I dunno", "we're not gonna make it if..."
- Linking nhanh: "what're we gonna do", "that'd've been fine"
- Filler tần suất cao: "look,", "I mean,", "honestly,", "at the end of the day,"
- Ngắt lời liên tục: "Wait, but—", "Sorry, can I just—", "No, hold on, what I meant was—"
- Overlap tiềm năng (2 người gần như nói cùng lúc): thể hiện qua câu bị cắt dở dang rồi người khác tiếp lời ngay.

## 09. Pre-listening

Trước khi nghe, hãy tự hỏi:

- Khi một client dưới áp lực deadline yêu cầu thêm việc ngoài phạm vi, bạn thường phản ứng thế nào trong thực tế — đồng ý ngay, từ chối thẳng, hay tìm phương án trung gian?
- Bạn nghĩ Sarah có thực sự cần CẢ HAI tính năng ngay lập tức, hay có một tính năng quan trọng hơn tính năng còn lại?

Nghe lần đầu KHÔNG xem transcript. Đừng cố nghe hiểu 100% — thử nắm được: Sarah muốn gì, David/Michael phản ứng ra sao, và cuối cùng đi đến quyết định gì.

## 10. Realistic Conversation

```text
Sarah: Okay so, I know we're close to launch, but my boss just told me this morning that we absolutely need gift wrapping in this release — like, non-negotiable, it has to be there.

Michael: I hear you, Sarah, and I completely understand the pressure you're under, but that wasn't part of the original scope for this release.

Sarah: I know, I know, but — look, can we just squeeze it in? It doesn't seem like it'd be that complicated, right?

David: Actually, it's more involved than it looks — adding gift wrapping means touching the checkout flow, the order summary, and the shipping logic, all of which are already locked for testing.

Sarah: Okay but what if we just did a simplified version, like just a checkbox that says "gift wrap this," nothing fancy?

David: Even a simplified version would mean reopening testing on the whole checkout flow, and honestly, that puts the entire release timeline at risk.

Sarah: Right, no, I get that, but — sorry, can I just add one more thing while we're at it? We also really need the loyalty points to show up in real time now, not just after checkout.

Michael: Wait, hold on — that's actually a separate, fairly significant piece of work on its own, Sarah.

Sarah: I know it's a lot, I know, but my boss is breathing down my neck here, and I just need something I can show him by Friday.

David: Here's the thing — if we try to add both of those now, there's a real risk of introducing new bugs right before launch, which could end up being worse for everyone.

Sarah: Okay, that's fair, I guess I hadn't thought about it that way, honestly.

Michael: Let me be upfront about what's realistic here — we can't commit to both without cutting corners somewhere else, and I don't think that's a risk worth taking this close to launch.

Sarah: Okay, so what CAN we do, then? I still need to bring something back to my boss.

David: What I can do is ship the gift-wrapping checkbox as a fast follow, maybe two or three days after launch, once the core release is stable.

Sarah: And the loyalty points thing?

Michael: That one's bigger — I'd suggest we scope it properly next sprint instead of rushing it in now.

Sarah: Hmm, okay. Can we agree on a version that's doable by the deadline, and revisit the rest afterward?

David: Yeah, that works for me — ship what's stable now, follow up with gift wrapping shortly after, and properly plan the loyalty points feature for next sprint.

Sarah: Alright, I can work with that. Honestly, thanks for being straight with me instead of just saying yes to everything.

Michael: Of course — we'd rather be upfront now than promise something we can't deliver later.

Sarah: Yeah, I appreciate that. Okay, let me go talk to my boss with this plan and I'll follow up if anything changes.
```

## 11. Transcript

*(Bản transcript đầy đủ giống mục 10 — dùng để đối chiếu sau khi nghe ở Bước 3 của Listening Workflow, không xem trước khi nghe lần đầu.)*

## 12. Listening Tasks

1. Sarah yêu cầu thêm 2 tính năng gì, và vì sao cô ấy cần gấp?
2. Vì sao thêm gift wrapping — dù chỉ là bản đơn giản — vẫn rủi ro?
3. David và Michael cuối cùng đề xuất phương án nào cho từng tính năng?
4. Câu nào cho thấy Sarah bắt đầu hiểu và chấp nhận giới hạn kỹ thuật?
5. Thái độ của Sarah ở cuối cuộc họp là gì?

**Đáp án gợi ý:**
1. Gift wrapping và hiển thị loyalty points real-time — vì sếp của cô yêu cầu và cần báo cáo lại trước thứ Sáu.
2. Vì đụng chạm đến checkout flow, order summary, shipping logic — những phần đã bị "khóa" để test, thêm vào sẽ phải mở lại toàn bộ testing.
3. Gift wrapping: fast follow 2-3 ngày sau launch; Loyalty points: scope kỹ và làm ở sprint sau.
4. "Okay, that's fair, I guess I hadn't thought about it that way, honestly."
5. Đánh giá cao sự thẳng thắn của team, chấp nhận phương án và sẽ báo lại nếu có gì thay đổi.

## 13. Language Breakdown

- **"I completely understand the pressure you're under, but..."** — công nhận cảm xúc/áp lực của đối phương trước khi push back, giảm căng thẳng ngay từ đầu câu.
- **"Here's the thing —"** — cách mở đầu rất tự nhiên trước khi đưa ra một sự thật khó nghe hoặc một giới hạn.
- **Multi-clause phức tạp:** "if we try to add both of those now, there's a real risk of introducing new bugs right before launch, which could end up being worse for everyone" — một câu chứa 3 mệnh đề liên tiếp (điều kiện + hệ quả + hệ quả của hệ quả), đặc trưng Level 4.
- **Ngắt lời chồng ý ("overlap"):** "Wait, hold on —" chen vào ngay khi Sarah vừa dứt câu, mô phỏng cảm giác 2 người gần như nói cùng lúc dù không phải audio chồng tiếng thật.
- **"We'd rather be upfront now than promise something we can't deliver later."** — câu kết thể hiện giá trị cốt lõi của giao tiếp chuyên nghiệp: trung thực hơn là làm hài lòng tạm thời.

## 14. Shadowing

Chọn 3 câu sau để luyện shadowing (đây là những câu dài, nói nhanh — thử thách thực sự của Level 4):

1. "I completely understand the pressure you're under, but that wasn't part of the original scope for this release."
2. "If we try to add both of those now, there's a real risk of introducing new bugs right before launch, which could end up being worse for everyone."
3. "We'd rather be upfront now than promise something we can't deliver later."

Lặp lại mỗi câu 6-10 lần — với câu 2, tách thành từng cụm nhỏ trước (if we try to add both / there's a real risk / which could end up being worse) rồi ghép lại.

## 15. Speaking Tasks

1. Luyện phản hồi khi client yêu cầu thêm việc ngoài phạm vi sát deadline, dùng "I completely understand..., but..." + "Here's the thing —".
2. Tập câu đưa ra phương án trung gian: "What I can do is... Can we agree on a version that's doable by the deadline?"
3. Luyện nói một câu multi-clause dài mô tả hệ quả của một quyết định rủi ro (VD: "If we rush this, there's a risk of X, which could lead to Y").

## 16. AI Role-play

```text
Bạn là Developer hoặc PM.
Tôi (AI) đóng vai Client đang chịu áp lực deadline, nói nhanh,
hay ngắt lời, và có thể đổi yêu cầu giữa chừng.

Tôi sẽ liên tục thêm yêu cầu mới hoặc gây áp lực về thời gian.
Hãy giữ bình tĩnh, công nhận áp lực của tôi trước, sau đó
push back một cách chuyên nghiệp và đề xuất phương án trung gian.

Đừng đồng ý với mọi yêu cầu chỉ để làm hài lòng tôi —
hãy thương lượng đến khi đạt được một kế hoạch thực tế.
```

## 17. Quizlet Content

```text
Front: I completely understand the pressure you're under, but...
Back:
Meaning: Tôi hoàn toàn hiểu áp lực bạn đang chịu, nhưng...
Context: Công nhận cảm xúc đối phương trước khi push back
Response: ...that's not something we can commit to right now.

Front: Here's the thing —
Back:
Meaning: Vấn đề là...
Context: Mở đầu trước khi nói một sự thật khó nghe
Response: [nêu giới hạn/rủi ro cụ thể]

Front: Let me be upfront about what's realistic here.
Back:
Meaning: Để tôi nói thẳng về điều gì là khả thi.
Context: Quản lý kỳ vọng của client
Response: [đưa ra giới hạn thực tế]

Front: What I can do is...
Back:
Meaning: Điều tôi có thể làm là...
Context: Đề xuất phương án thay thế thay vì từ chối hoàn toàn
Response: What I can do is ship it as a fast follow.

Front: Can we agree on a version that's doable by the deadline?
Back:
Meaning: Chúng ta có thể thống nhất một phiên bản khả thi trước deadline không?
Context: Đàm phán để đạt thỏa hiệp thực tế
Response: Yes, let's go with that for now.

Front: scope creep
Back:
Meaning: việc mở rộng phạm vi công việc ngoài dự kiến ban đầu
Context: Mô tả tình huống client thêm yêu cầu sát deadline
Response: We need to be careful about scope creep this close to launch.
```
