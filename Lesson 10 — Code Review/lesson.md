# LESSON 10 — Code Review

## 1. Overview

- **Target Level:** Level 2
- **Target WPM:** 140–150
- **Turn length:** 12–20 words
- **Turns:** 18–22
- **Characters:** 2–3
- **IT Context:** GitHub / Pull Request / Code Review
- **Meeting type:** Code review discussion

### Main Goal

Practice listening and speaking when a Developer and Tech Lead discuss a Pull Request (PR).

The goal is not simply to understand code-related vocabulary. You need to follow the reasoning behind a review comment, explain why you chose an implementation, accept or challenge a suggestion, and agree on the next action.

Core flow:

> **Review Comment → Clarify → Explain → Discuss Alternative → Agree → Action**

---

## 2. Situation

David has opened a Pull Request for a checkout validation feature.

James, the Tech Lead, is reviewing the PR and has several questions:

- Why is the validation handled in the backend?
- Could the logic be reused?
- What happens when the API returns an error?
- Should the validation be moved into a separate service/class?
- Does the current implementation affect the frontend?

David needs to explain his implementation clearly and discuss possible improvements.

The conversation should feel like a real code review, not a lecture about code.

---

## 3. IT Context

### Feature

The team is adding validation for a discount code during checkout.

Current implementation:

```text
Frontend
   ↓
Checkout request
   ↓
Backend validation
   ↓
Discount result
   ↓
Frontend displays message
```

James notices that some validation logic is inside the checkout controller.

He thinks the logic may be better separated so it can be reused elsewhere.

### Technical topics

- Pull Request
- GitHub
- controller
- service class
- validation
- API response
- error handling
- reusable logic
- frontend/backend responsibility
- code maintainability

The Developer should be able to explain not only **what** the code does, but **why** it was implemented that way.

---

## 4. Learning Objectives

### Listening

By the end of this lesson, you should be able to:

- understand common code review questions
- recognize suggestions and concerns from a Tech Lead
- understand questions about implementation decisions
- follow a technical explanation
- identify when someone agrees, disagrees, or proposes an alternative
- understand the final action agreed during a review

### Speaking

You should be able to:

- explain why you chose an implementation
- clarify a reviewer’s question
- explain technical trade-offs
- agree with a suggestion
- politely disagree
- propose an alternative
- confirm what you will change

---

## 5. Key Vocabulary

| Word / Phrase | Meaning |
|---|---|
| code review | kiểm tra / review code |
| Pull Request (PR) | yêu cầu đưa code vào branch khác |
| implementation | cách triển khai |
| approach | cách tiếp cận |
| logic | logic xử lý |
| validation | kiểm tra tính hợp lệ |
| controller | controller |
| service class | class xử lý nghiệp vụ / service |
| reusable | có thể tái sử dụng |
| maintainable | dễ bảo trì |
| refactor | tái cấu trúc code |
| error handling | xử lý lỗi |
| edge case | trường hợp đặc biệt |
| concern | điểm đáng lo ngại / vấn đề |
| suggestion | đề xuất |
| trade-off | sự đánh đổi |
| responsibility | trách nhiệm của một thành phần |
| review comment | nhận xét trong code review |
| move the logic | chuyển phần logic |
| extract | tách logic ra |

---

## 6. Business Meeting Patterns

### Asking about an implementation

> **Why did you go with this approach?**

Tại sao bạn chọn cách triển khai này?

> **What's the reason for handling it here?**

Lý do xử lý nó ở đây là gì?

> **Could you walk me through this part?**

Bạn có thể giải thích phần này cho tôi được không?

> **What happens if this API call fails?**

Điều gì xảy ra nếu API call này bị lỗi?

---

## 7. Making Suggestions

Tech Lead có thể nói:

> **Could we move this logic into a service?**

> **Would it make sense to extract this into a separate class?**

> **I think we could make this reusable.**

> **Maybe we should handle this differently.**

> **One concern I have is...**

Lưu ý:

> **Could we...?**

không nhất thiết là một câu hỏi đơn thuần.

Trong code review, nó thường mang nghĩa:

> “Có thể cân nhắc làm theo cách này không?”

---

## 8. Agreeing and Disagreeing

### Agreeing

> **Yeah, that makes sense.**

> **I agree.**

> **Good point.**

> **You're right.**

> **That would make it easier to reuse.**

### Polite disagreement

Không nên chỉ nói:

> No, that's wrong.

Tự nhiên hơn:

> **I see your point, but...**

> **I was thinking of keeping it here because...**

> **That could work, but we'd need to consider...**

> **I'm not sure that would be ideal because...**

---

## 9. Explaining Technical Decisions

Một Developer tốt trong code review không chỉ nói:

> “I did it this way.”

Mà nên giải thích:

```text
Decision
   ↓
Reason
   ↓
Trade-off
   ↓
Alternative
```

Ví dụ:

> **I kept the validation in the controller because this is currently only used by checkout.**

Sau đó có thể thêm:

> **But I agree that extracting it would make it easier to reuse later.**

Đây là kiểu communication rất quan trọng trong IT meetings.

---

## 10. Natural Meeting English

| Textbook English | Natural Meeting English |
|---|---|
| Please explain your implementation. | Can you walk me through this? |
| Why did you choose this implementation? | Why did you go with this approach? |
| I understand your concern. | I see your point. |
| I agree with your suggestion. | Yeah, that makes sense. |
| I disagree with this approach. | I'm not sure that would work here. |
| We should move this logic. | Could we move this logic? |
| Please separate this logic. | Could we extract this into a service? |
| I will make the changes. | Sure, I'll update it. |
| I will make the requested changes. | I'll make those changes. |

---

## 11. Natural / Reduced Speech

### 1. Why did you

> **Why did you go with this approach?**

In natural speech, **did you** may sound connected, closer to:

> **Why didja go with this approach?**

### 2. Could we

> **Could we move this logic into a service?**

The words may run together rather than sounding individually separated.

### 3. I was thinking of

> **I was thinking of keeping it here.**

This is a very useful natural phrase for explaining a technical decision without sounding overly direct.

### 4. That would

> **That would make it easier to reuse.**

In connected speech, **that would** may be compressed.

### 5. We'd need to

> **We'd need to update the tests too.**

Recognize **we'd need to** as one chunk.

### 6. I'm not sure

> **I'm not sure that would work here.**

This is a common soft disagreement pattern in meetings.

---

## 12. Realistic Conversation

### Characters

- **James** — Tech Lead
- **David** — Developer
- **Sarah** — Project Manager

### Conversation

**James:** Hey David, I went through your PR for the checkout validation.

**David:** Sure. Did you find anything that needs changing?

**James:** Yeah, I have a couple of questions. Why did you go with this approach for the validation?

**David:** I kept most of the logic in the checkout controller because it's only being used by checkout right now.

**James:** Okay, that makes sense. But could we move the validation into a service?

**David:** We could. Are you thinking we might reuse it somewhere else?

**James:** Yeah. We may need the same validation from the admin side later.

**David:** Got it. In that case, extracting it would make sense.

**James:** Exactly. One other thing I noticed is the error handling here.

**David:** What about it?

**James:** What happens if the validation API returns an error?

**David:** Right now, we return a generic error message to the frontend.

**James:** Okay. Could we return a more specific response?

**David:** I think so. We'd need to update the frontend handling as well.

**Sarah:** Would that affect the current ticket scope?

**David:** A little. The service extraction is small, but changing the API response would need some frontend work.

**James:** We don't necessarily need to change the response in this PR.

**David:** Yeah, that's probably better. We can extract the validation logic now and keep the error response as it is.

**James:** I agree. That keeps the PR focused.

**Sarah:** Sounds good. So David will extract the validation logic, and we'll keep the current error response for now.

**David:** Yep. I'll update the PR and add a couple of tests.

**James:** Perfect. Let me know when it's ready for another review.

---

## 13. Transcript

```text
James: Hey David, I went through your PR for the checkout validation.
David: Sure. Did you find anything that needs changing?
James: Yeah, I have a couple of questions. Why did you go with this approach for the validation?
David: I kept most of the logic in the checkout controller because it's only being used by checkout right now.
James: Okay, that makes sense. But could we move the validation into a service?
David: We could. Are you thinking we might reuse it somewhere else?
James: Yeah. We may need the same validation from the admin side later.
David: Got it. In that case, extracting it would make sense.
James: Exactly. One other thing I noticed is the error handling here.
David: What about it?
James: What happens if the validation API returns an error?
David: Right now, we return a generic error message to the frontend.
James: Okay. Could we return a more specific response?
David: I think so. We'd need to update the frontend handling as well.
Sarah: Would that affect the current ticket scope?
David: A little. The service extraction is small, but changing the API response would need some frontend work.
James: We don't necessarily need to change the response in this PR.
David: Yeah, that's probably better. We can extract the validation logic now and keep the error response as it is.
James: I agree. That keeps the PR focused.
Sarah: Sounds good. So David will extract the validation logic, and we'll keep the current error response for now.
David: Yep. I'll update the PR and add a couple of tests.
James: Perfect. Let me know when it's ready for another review.
```

---

## 14. Listening Tasks

### Task 1 — Identify the main review concern

What does James suggest?

A. Remove the checkout validation.
B. Move the validation logic into a service.
C. Rewrite the frontend.
D. Close the Pull Request.

**Answer: B**

---

### Task 2 — Why did David originally keep the logic in the controller?

**Answer:**

Because the validation was only being used by checkout at that time.

---

### Task 3 — Future reuse

Where might the validation be reused?

**Answer:**

From the admin side.

---

### Task 4 — Error handling

What currently happens when the validation API returns an error?

**Answer:**

The backend returns a generic error message to the frontend.

---

### Task 5 — Scope

Would changing the API response affect the current ticket?

**Answer:**

Yes. It would require some frontend work.

---

### Task 6 — Final decision

What will David change?

**Answer:**

He will extract the validation logic into a service and add a couple of tests.

The team will keep the current error response for now.

---

## 15. Speaking Patterns

### Explain your implementation

> I kept the logic here because...

> I went with this approach because...

> The main reason was...

### Ask for clarification

> What do you mean by...?

> Are you thinking we should...?

> Do you want me to...?

### Explain a trade-off

> We could do that, but we'd need to...

> That would work, but it would also affect...

### Agree

> Yeah, that makes sense.

> Good point.

> I agree.

### Disagree politely

> I see your point, but...

> I'm not sure that would work here because...

> That could work, but we'd need to consider...

### Confirm the action

> So I'll extract the logic and update the tests.

> I'll make that change and send the PR back for review.

---

## 16. Speaking Task

### Scenario

You are reviewing a PR with your Tech Lead.

The reviewer says:

> “Could we move this validation logic into a separate service?”

Your response should:

1. clarify why the reviewer suggests it
2. explain your current implementation
3. discuss reuse
4. discuss the impact
5. agree or politely disagree
6. confirm the action

### Suggested structure

```text
Why?
↓
Current approach
↓
Impact
↓
Alternative
↓
Decision
```

Example opening:

> “Sure. Are you thinking we might reuse this logic somewhere else?”

Do not memorize the entire answer. Practice responding naturally.

---

## 17. AI Role-play Scenario

### Role

**You:** Developer  
**AI:** Tech Lead

The AI has reviewed your Pull Request.

The AI should:

- ask why you chose a particular implementation
- question where the business logic lives
- ask about error handling
- suggest extracting reusable logic
- challenge one technical decision
- ask about test coverage
- occasionally ask follow-up questions

You should:

1. explain your implementation
2. explain why you chose it
3. listen to the Tech Lead's concern
4. ask clarifying questions
5. agree or disagree politely
6. discuss trade-offs
7. confirm the changes you will make

### Role-play success goal

Complete the flow:

> **Review Comment → Clarify → Explain → Trade-off → Decision → Action**

---

## 18. Quizlet Content

### Vocabulary

```text
code review — kiểm tra / review code
Pull Request (PR) — yêu cầu đưa code vào branch khác
implementation — cách triển khai
approach — cách tiếp cận
logic — logic xử lý
validation — kiểm tra tính hợp lệ
controller — controller
service class — service xử lý nghiệp vụ
reusable — có thể tái sử dụng
maintainable — dễ bảo trì
refactor — tái cấu trúc code
error handling — xử lý lỗi
edge case — trường hợp đặc biệt
concern — điểm đáng lo ngại / vấn đề
suggestion — đề xuất
trade-off — sự đánh đổi
responsibility — trách nhiệm
review comment — nhận xét trong code review
move the logic — chuyển logic
extract — tách logic ra
```

### Business Meeting Patterns

```text
Why did you go with this approach?

What's the reason for handling it here?

Could you walk me through this part?

What happens if this API call fails?

Could we move this logic into a service?

Would it make sense to extract this into a separate class?

One concern I have is...

I see your point, but...

That could work, but we'd need to consider...

Yeah, that makes sense.

Good point.

I'll update the PR.

Let me know when it's ready for another review.
```

### IT Expressions

```text
I kept most of the logic in the checkout controller.

We may need the same validation from the admin side later.

Extracting it would make sense.

The validation API returns an error.

We'd need to update the frontend handling.

That would affect the current ticket scope.

We can extract the validation logic now.

I'll add a couple of tests.
```

---

## 19. Personal Discovery

Use your Personal Quizlet for expressions that you personally fail to recognize during audio practice.

Pay special attention to:

- **go with this approach**
- **walk me through this**
- **move this logic into a service**
- **extract this into a separate class**
- **one concern I have is...**
- **I see your point, but...**
- **that would make it easier to reuse**
- **we'd need to update...**
- **keep the PR focused**
- **ready for another review**

The important question is not:

> “Do I know this phrase?”

but:

> “Can I recognize it immediately when a Tech Lead says it?”

---

## 20. Completion Checklist

- [ ] I understand common code review questions.
- [ ] I can explain why I chose an implementation.
- [ ] I can understand suggestions from a Tech Lead.
- [ ] I can ask for clarification during a code review.
- [ ] I can explain technical trade-offs.
- [ ] I can agree naturally.
- [ ] I can disagree politely.
- [ ] I can discuss reusable logic.
- [ ] I understand “extract the logic”.
- [ ] I can discuss error handling.
- [ ] I can confirm the changes I will make.
- [ ] I can participate in a code review without reading a prepared script.

---

## 21. Success Criteria

Lesson 10 is successful when you can participate in a real code review and follow this flow:

```text
Review Comment
      ↓
Understand the Concern
      ↓
Explain Your Decision
      ↓
Discuss Alternatives
      ↓
Evaluate Trade-offs
      ↓
Agree / Disagree
      ↓
Confirm Action
```

### Core Skill

> **Don't just defend your code. Explain your reasoning and discuss the trade-offs.**

---

## 22. Audio Production

Each lesson has exactly **one MP3**.

For Lesson 10:

- **James** — male Tech Lead
- **David** — male Developer
- **Sarah** — female Project Manager

Audio requirements:

- Level 2
- 140–150 WPM
- 18–22 turns
- 3 speakers
- natural contractions
- moderate connected speech
- realistic pauses
- occasional follow-up questions
- realistic code-review rhythm

If TTS generation needs multiple chunks, merge them into **one final MP3**.

---

## 23. `script_tts.txt`

```text
James: Hey David, I went through your PR for the checkout validation.
David: Sure. Did you find anything that needs changing?
James: Yeah, I have a couple of questions. Why did you go with this approach for the validation?
David: I kept most of the logic in the checkout controller because it's only being used by checkout right now.
James: Okay, that makes sense. But could we move the validation into a service?
David: We could. Are you thinking we might reuse it somewhere else?
James: Yeah. We may need the same validation from the admin side later.
David: Got it. In that case, extracting it would make sense.
James: Exactly. One other thing I noticed is the error handling here.
David: What about it?
James: What happens if the validation API returns an error?
David: Right now, we return a generic error message to the frontend.
James: Okay. Could we return a more specific response?
David: I think so. We'd need to update the frontend handling as well.
Sarah: Would that affect the current ticket scope?
David: A little. The service extraction is small, but changing the API response would need some frontend work.
James: We don't necessarily need to change the response in this PR.
David: Yeah, that's probably better. We can extract the validation logic now and keep the error response as it is.
James: I agree. That keeps the PR focused.
Sarah: Sounds good. So David will extract the validation logic, and we'll keep the current error response for now.
David: Yep. I'll update the PR and add a couple of tests.
James: Perfect. Let me know when it's ready for another review.
```
