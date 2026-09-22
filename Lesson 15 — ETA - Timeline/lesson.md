# LESSON 15 — ETA / Timeline

## 1. Overview

- **Target Level:** Level 3
- **Target WPM:** 150–165
- **Turn length:** 18–28 words
- **Turns:** 20–26
- **Characters:** 3
- **IT Context:** Estimates / Sprint / Timeline / QA Dependency
- **Meeting type:** Planning / delivery discussion

### Main Goal

Practice listening and speaking when a PM or client asks a developer about ETA, delivery risk, dependencies, and whether a task can still meet the planned timeline.

The goal is to avoid giving unrealistic promises. In real meetings, developers often need to estimate with incomplete information, explain dependencies, and communicate uncertainty clearly.

Core flow:

> **Current Status → Remaining Work → Dependency → Estimate → Risk → Options → Commitment**

---

## 2. Situation

The team is working on a new checkout feature.

The original plan was to finish development today and start QA tomorrow.

During development, the backend integration took longer than expected because the payment provider API requires additional validation.

Sarah, the PM, wants to know whether the team is still on track.

David, the Developer, needs to give an ETA without overpromising.

James, the Tech Lead, helps evaluate the technical risk and possible options.

---

## 3. IT Context

Typical delivery chain:

```text
Development
    ↓
Backend integration
    ↓
Frontend integration
    ↓
Testing
    ↓
QA
    ↓
Bug fixing
    ↓
Release
```

A developer's ETA should consider:

- work already completed
- remaining implementation
- dependencies
- testing
- review
- possible bugs
- external APIs
- client feedback
- deployment requirements

Instead of:

> “I'll finish today.”

A more realistic answer may be:

> “I should have the development work done by this afternoon, assuming the payment API doesn't cause any more issues.”

This communicates both **estimate** and **condition**.

---

## 4. Learning Objectives

### Listening

You should be able to:

- understand different ways people ask for ETA
- identify completed vs remaining work
- recognize uncertainty and conditions
- understand dependency-related delays
- follow discussion about timeline risk
- identify proposed options when a deadline is at risk

### Speaking

You should be able to:

- give a realistic ETA
- explain why an estimate may change
- mention dependencies
- use conditional language
- communicate risk without sounding uncertain or unprepared
- suggest alternatives when the timeline is tight
- confirm a revised delivery plan

---

## 5. Key Vocabulary

| Word / Phrase | Meaning |
|---|---|
| ETA | estimated time of arrival / thời gian dự kiến hoàn thành |
| estimate | ước tính |
| timeline | tiến độ / mốc thời gian |
| deadline | hạn chót |
| on track | đúng tiến độ |
| behind schedule | chậm tiến độ |
| ahead of schedule | sớm hơn tiến độ |
| remaining work | phần việc còn lại |
| dependency | phần phụ thuộc |
| external dependency | phụ thuộc bên ngoài |
| delay | sự trì hoãn |
| risk | rủi ro |
| buffer | khoảng thời gian dự phòng |
| workload | khối lượng công việc |
| priority | mức độ ưu tiên |
| push back | dời lại |
| slip | bị trễ |
| deliver | hoàn thành / bàn giao |
| target date | ngày mục tiêu |
| assumption | giả định |

---

## 6. Business Meeting Patterns

### Asking for ETA

> **What's the ETA on this?**

> **When do you think you'll have it done?**

> **Are we still on track for tomorrow?**

> **How much work is left?**

> **Do you still think you can finish today?**

### Giving an estimate

> **I should have it done by this afternoon.**

> **I'm expecting to finish it tomorrow morning.**

> **It'll probably take another couple of hours.**

> **I'd say we're looking at about a day of work.**

### Communicating uncertainty

> **Assuming everything goes smoothly...**

> **If we don't hit any more issues...**

> **I can't give you an exact ETA yet.**

> **I should have a more accurate estimate after I check the API.**

### Discussing risk

> **The main risk is the payment integration.**

> **That could push the timeline back.**

> **We're still on track, but there's not much buffer.**

> **If this takes longer than expected, we may need to move QA.**

---

## 7. ETA vs Deadline

These are not the same.

### ETA

Your current best estimate.

> **My ETA is tomorrow afternoon.**

It can change when new information appears.

### Deadline

A required target date/time.

> **The client deadline is Friday.**

A good developer should not automatically say:

> “Yes, we'll definitely finish.”

Instead, explain the relationship between your estimate and the deadline.

Example:

> **I think we can hit Friday, but there's not much room for another delay.**

---

## 8. Communicating Estimates with Conditions

A strong meeting answer often has this structure:

```text
Estimate
+
Condition
+
Risk
+
Next update
```

Example:

> **I should have the backend work done by tomorrow afternoon, assuming the payment API is stable. The main risk is the validation issue, and I'll give you a more accurate update after I test it.**

This is much more useful than:

> “Tomorrow.”

---

## 9. Natural Meeting English

| Formal / textbook | Natural meeting English |
|---|---|
| What is your estimated completion time? | What's the ETA on this? |
| Can you complete it today? | Do you think you'll have it done today? |
| We are currently following the planned schedule. | We're still on track. |
| There is little remaining time. | There's not much buffer. |
| This may cause a delay. | That could push the timeline back. |
| I cannot provide an exact estimate yet. | I can't give you an exact ETA yet. |
| We should know more after testing. | I should have a better idea after testing. |
| We may need to move the QA date. | We may need to push QA back. |
| We need to consider another option. | We might need a backup plan. |

---

## 10. Natural / Reduced Speech

### 1. What's the ETA on this?

Learn **ETA on this** as one meeting chunk.

### 2. Do you think you'll have it done?

**you'll** can be easy to miss in fast speech.

Listen for the overall pattern:

> **think you'll have it done**

### 3. There's not much buffer.

**There is** → **There's**

This phrase is especially useful when a project is technically on track but has little room for delay.

### 4. We may need to push QA back.

**push QA back** means move QA to a later time/date.

### 5. Assuming everything goes smoothly

This is an important uncertainty marker.

The speaker is not making an unconditional promise.

### 6. I'll give you a better idea later.

In real meetings, people often use less formal language such as:

> **I'll give you a better idea after I check it.**

Meaning:

> “Sau khi kiểm tra thêm tôi sẽ có estimate chính xác hơn.”

---

## 11. Realistic Conversation

### Characters

- **Sarah** — Project Manager
- **David** — Developer
- **James** — Tech Lead

### Conversation

**Sarah:** Hey David, what's the ETA on the checkout integration? Are we still on track for QA tomorrow?

**David:** We're mostly on track. The frontend is almost done, but the payment API is taking a little longer than expected.

**Sarah:** Okay. How much work is left on the backend side?

**David:** I'd say about three or four hours, assuming I don't hit another issue with the validation.

**James:** What exactly is causing the delay?

**David:** The payment provider returns a different response for some failed transactions, so I need to handle that case separately.

**James:** Got it. Is that something we can work around, or do we need the provider to change anything?

**David:** We can handle it on our side. I just need to update the response mapping and add a few tests.

**Sarah:** Okay. So do you still think the development work will be done today?

**David:** Probably, yeah. I should have the backend changes done this afternoon, but I don't want to promise a specific time until I've finished testing.

**Sarah:** That's fair. If development slips into tomorrow, what happens to QA?

**David:** We'd probably need to push QA back by a few hours, unless James can get someone to review the PR quickly.

**James:** I can take the review as soon as the PR is ready.

**Sarah:** Okay, that gives us a bit of room. Do we have any other dependencies?

**David:** The only external dependency is the payment API. Everything else is already available on staging.

**Sarah:** And is the staging environment stable?

**David:** Yeah, as far as I know. I haven't seen any issues there today.

**James:** What's the main risk from your side?

**David:** The main risk is that the payment provider has more response variations than we've seen so far.

**Sarah:** Could that push the timeline into tomorrow afternoon?

**David:** It could, if we find another case that needs a code change. If the current response mapping covers everything, we should still finish today.

**Sarah:** Okay. So we're still on track, but there's not much buffer.

**David:** Exactly.

**James:** What if we move the lower-priority frontend task out of this sprint? That would give David more time if the API needs extra work.

**Sarah:** I'd rather keep the current scope if we can. Let's wait for David's next update first.

**David:** Sounds good. I'll finish the response mapping and run the tests, then I'll give you a more accurate ETA.

**Sarah:** When should we expect that update?

**David:** In about two hours.

**James:** Perfect. If you're still on track then, I'll review the PR immediately.

**Sarah:** Great. Let's keep QA tomorrow as the target for now, but flag it if anything changes.

**David:** Will do.

---

## 12. Transcript

```text
Sarah: Hey David, what's the ETA on the checkout integration? Are we still on track for QA tomorrow?
David: We're mostly on track. The frontend is almost done, but the payment API is taking a little longer than expected.
Sarah: Okay. How much work is left on the backend side?
David: I'd say about three or four hours, assuming I don't hit another issue with the validation.
James: What exactly is causing the delay?
David: The payment provider returns a different response for some failed transactions, so I need to handle that case separately.
James: Got it. Is that something we can work around, or do we need the provider to change anything?
David: We can handle it on our side. I just need to update the response mapping and add a few tests.
Sarah: Okay. So do you still think the development work will be done today?
David: Probably, yeah. I should have the backend changes done this afternoon, but I don't want to promise a specific time until I've finished testing.
Sarah: That's fair. If development slips into tomorrow, what happens to QA?
David: We'd probably need to push QA back by a few hours, unless James can get someone to review the PR quickly.
James: I can take the review as soon as the PR is ready.
Sarah: Okay, that gives us a bit of room. Do we have any other dependencies?
David: The only external dependency is the payment API. Everything else is already available on staging.
Sarah: And is the staging environment stable?
David: Yeah, as far as I know. I haven't seen any issues there today.
James: What's the main risk from your side?
David: The main risk is that the payment provider has more response variations than we've seen so far.
Sarah: Could that push the timeline into tomorrow afternoon?
David: It could, if we find another case that needs a code change. If the current response mapping covers everything, we should still finish today.
Sarah: Okay. So we're still on track, but there's not much buffer.
David: Exactly.
James: What if we move the lower-priority frontend task out of this sprint? That would give David more time if the API needs extra work.
Sarah: I'd rather keep the current scope if we can. Let's wait for David's next update first.
David: Sounds good. I'll finish the response mapping and run the tests, then I'll give you a more accurate ETA.
Sarah: When should we expect that update?
David: In about two hours.
James: Perfect. If you're still on track then, I'll review the PR immediately.
Sarah: Great. Let's keep QA tomorrow as the target for now, but flag it if anything changes.
David: Will do.
```

---

## 13. Listening Tasks

### Task 1 — Overall status

Is the project completely behind schedule?

**Answer:** No. It is mostly on track.

### Task 2 — Main delay

What is taking longer than expected?

**Answer:** The payment API integration.

### Task 3 — Remaining work

How much backend work is left?

**Answer:** About three or four hours.

### Task 4 — External dependency

What is the external dependency?

**Answer:** The payment API / payment provider.

### Task 5 — Main risk

What is the main risk?

**Answer:** The payment provider may have more response variations that require additional code changes.

### Task 6 — QA impact

What happens if development slips into tomorrow?

**Answer:** QA may need to be pushed back by a few hours.

### Task 7 — Buffer

Does the team have a lot of buffer?

**Answer:** No. They are still on track, but there is not much buffer.

### Task 8 — Alternative

What alternative does James suggest?

**Answer:** Move a lower-priority frontend task out of the sprint to give David more time.

### Task 9 — Next update

When will David provide a more accurate ETA?

**Answer:** In about two hours.

---

## 14. Speaking Patterns

### Give an ETA

> I should have it done by this afternoon.

> It should take another three or four hours.

> I'm expecting to finish it tomorrow morning.

### Add a condition

> Assuming everything goes smoothly...

> If we don't hit any more issues...

> Assuming the API is stable...

### Explain uncertainty

> I don't want to give you an exact time yet.

> I should have a better idea after I test it.

> I'll give you a more accurate update later.

### Explain risk

> The main risk is...

> That could push the timeline back.

> There's not much buffer.

### Discuss options

> We could move that task to the next sprint.

> We might need to push QA back.

> We could prioritize this part first.

### Confirm the plan

> We're still on track for tomorrow.

> Let's keep tomorrow as the target for now.

> I'll flag it if anything changes.

---

## 15. Speaking Task

### Scenario

You are the Developer.

The PM asks:

> “What's the ETA on the payment integration?”

Current situation:

- most backend code is complete
- frontend integration is almost complete
- one external API issue remains
- you estimate 3–4 more hours
- QA is planned for tomorrow morning
- there is very little buffer

Give a realistic answer.

Your response should include:

1. current status
2. ETA
3. condition
4. main risk
5. next update

Example structure:

> **We're mostly on track. I should have... assuming... The main risk is... I'll give you a more accurate update...**

Do not simply say:

> “Three hours.”

---

## 16. AI Role-play Scenario

### Role

**You:** Developer  
**AI:** Project Manager / Tech Lead

The feature is approaching its planned delivery date.

The AI should ask:

- What's the ETA?
- Are we still on track?
- What's left?
- What's causing the delay?
- Are there dependencies?
- What's the main risk?
- Can QA still start tomorrow?
- What can we move if the timeline slips?

The AI should occasionally challenge your estimate:

> “You said three hours yesterday. Why is it still three hours today?”

You should explain the change professionally without becoming defensive.

### Role-play success goal

Complete:

> **Status → Estimate → Reason → Dependency → Risk → Option → Commitment**

---

## 17. Quizlet Content

### Vocabulary

```text
ETA — thời gian dự kiến hoàn thành
estimate — ước tính
timeline — tiến độ / mốc thời gian
deadline — hạn chót
on track — đúng tiến độ
behind schedule — chậm tiến độ
ahead of schedule — sớm hơn tiến độ
remaining work — phần việc còn lại
dependency — phần phụ thuộc
external dependency — phụ thuộc bên ngoài
delay — trì hoãn
risk — rủi ro
buffer — khoảng thời gian dự phòng
workload — khối lượng công việc
priority — mức độ ưu tiên
push back — dời lại
slip — bị trễ
deliver — hoàn thành / bàn giao
target date — ngày mục tiêu
assumption — giả định
```

### Business Meeting Patterns

```text
What's the ETA on this?

Are we still on track for tomorrow?

How much work is left?

Do you still think you can finish today?

I should have it done by this afternoon.

It'll probably take another couple of hours.

Assuming everything goes smoothly...

If we don't hit any more issues...

I can't give you an exact ETA yet.

I should have a more accurate estimate after I check it.

The main risk is...

That could push the timeline back.

We're still on track, but there's not much buffer.

We may need to push QA back.

Let's keep tomorrow as the target for now.

I'll flag it if anything changes.
```

### IT Expressions

```text
The payment API is taking a little longer than expected.

The payment provider returns a different response for some failed transactions.

I need to handle that case separately.

I'll update the response mapping and add a few tests.

The only external dependency is the payment API.

Everything else is already available on staging.

The main risk is the additional response variations.

We might need to move a lower-priority task.

I'll give you a more accurate ETA after testing.

I'll review the PR as soon as it's ready.
```

---

## 18. Personal Discovery

Pay special attention to these phrases because they carry **attitude and uncertainty**, not just technical meaning:

- **We're mostly on track.**
- **I'd say about three or four hours.**
- **assuming I don't hit another issue**
- **That's fair.**
- **We'd probably need to...**
- **That gives us a bit of room.**
- **as far as I know**
- **There's not much buffer.**
- **It could, if...**
- **I'd rather keep the current scope.**
- **Let's wait for...**
- **for now**
- **flag it if anything changes**

If one of these phrases is difficult to hear or interpret, add the whole phrase to your Personal Quizlet instead of only adding individual vocabulary.

---

## 19. Completion Checklist

- [ ] I can understand different ways of asking for ETA.
- [ ] I can distinguish an estimate from a deadline.
- [ ] I can explain remaining work.
- [ ] I can mention a dependency.
- [ ] I can communicate uncertainty professionally.
- [ ] I can explain timeline risk.
- [ ] I can discuss buffer.
- [ ] I can suggest an alternative when a deadline is at risk.
- [ ] I can give a conditional estimate.
- [ ] I can promise the next update without overpromising delivery.

---

## 20. Success Criteria

You successfully complete Lesson 15 when you can respond to:

> **“What's the ETA?”**

with more than a number.

Your response should naturally communicate:

```text
Current Status
      ↓
Remaining Work
      ↓
Estimate
      ↓
Condition
      ↓
Risk
      ↓
Next Update
```

### Core Skill

> **A good developer doesn't just give an ETA. A good developer explains the confidence, conditions, and risks behind the ETA.**

---

## 21. Audio Production

Each lesson has exactly **one MP3**.

For Lesson 15:

- **Sarah** — female Project Manager
- **David** — male Developer
- **James** — male Tech Lead

Audio requirements:

- **Level 3**
- **150–165 WPM**
- **20–26 turns**
- 3 speakers
- frequent contractions
- natural connected speech
- hedging and conditional language
- moderate interruptions / follow-up questions
- realistic delivery pressure
- discussion of external dependencies and timeline risk

If TTS generation requires multiple chunks, merge them into **one final MP3**.

---

## 22. `script_tts.txt`

```text
Sarah: Hey David, what's the ETA on the checkout integration? Are we still on track for QA tomorrow?
David: We're mostly on track. The frontend is almost done, but the payment API is taking a little longer than expected.
Sarah: Okay. How much work is left on the backend side?
David: I'd say about three or four hours, assuming I don't hit another issue with the validation.
James: What exactly is causing the delay?
David: The payment provider returns a different response for some failed transactions, so I need to handle that case separately.
James: Got it. Is that something we can work around, or do we need the provider to change anything?
David: We can handle it on our side. I just need to update the response mapping and add a few tests.
Sarah: Okay. So do you still think the development work will be done today?
David: Probably, yeah. I should have the backend changes done this afternoon, but I don't want to promise a specific time until I've finished testing.
Sarah: That's fair. If development slips into tomorrow, what happens to QA?
David: We'd probably need to push QA back by a few hours, unless James can get someone to review the PR quickly.
James: I can take the review as soon as the PR is ready.
Sarah: Okay, that gives us a bit of room. Do we have any other dependencies?
David: The only external dependency is the payment API. Everything else is already available on staging.
Sarah: And is the staging environment stable?
David: Yeah, as far as I know. I haven't seen any issues there today.
James: What's the main risk from your side?
David: The main risk is that the payment provider has more response variations than we've seen so far.
Sarah: Could that push the timeline into tomorrow afternoon?
David: It could, if we find another case that needs a code change. If the current response mapping covers everything, we should still finish today.
Sarah: Okay. So we're still on track, but there's not much buffer.
David: Exactly.
James: What if we move the lower-priority frontend task out of this sprint? That would give David more time if the API needs extra work.
Sarah: I'd rather keep the current scope if we can. Let's wait for David's next update first.
David: Sounds good. I'll finish the response mapping and run the tests, then I'll give you a more accurate ETA.
Sarah: When should we expect that update?
David: In about two hours.
James: Perfect. If you're still on track then, I'll review the PR immediately.
Sarah: Great. Let's keep QA tomorrow as the target for now, but flag it if anything changes.
David: Will do.
```
