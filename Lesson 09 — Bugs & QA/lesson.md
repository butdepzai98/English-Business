# LESSON 09 — Bugs & QA

## 1. Overview

- **Target Level:** Level 2
- **Target WPM:** 135–150
- **Turn length:** 12–20 words
- **Turns:** 16–22
- **Characters:** 3
- **IT Context:** Bug investigation / QA / Testing / Staging
- **Meeting type:** Bug triage / QA discussion

### Main Goal

Practice listening and speaking when a Developer discusses a bug with QA and the Project Manager.

Core flow:

> **Bug → Reproduce → Expected vs Actual → Impact → Investigation → Fix → Retest**

---

## 2. Situation

QA has found a bug on the staging checkout page.

When a customer uses a discount code:

- The discount code is accepted.
- The discount is displayed correctly.
- The customer changes the shipping method.
- The discount is then removed.
- QA can reproduce the issue consistently.
- The Developer needs to investigate the cause, understand the impact, and estimate the fix.

The Developer should be able to:

- understand the bug description
- ask how to reproduce it
- confirm expected vs actual behavior
- ask about impact and severity
- explain the possible technical cause
- give an estimate
- ask QA to retest after the fix

---

## 3. IT Context

### Current behavior

```text
Customer
   ↓
Apply discount code
   ↓
Discount applied
   ↓
Change shipping method
   ↓
Discount disappears ❌
```

### Expected behavior

```text
Customer
   ↓
Apply discount code
   ↓
Discount applied
   ↓
Change shipping method
   ↓
Discount remains applied ✅
```

### Technical context

The issue may be related to:

- checkout state
- shipping method update
- discount validation
- quote/cart data
- frontend request
- backend recalculation

Important distinction:

**Expected behavior**

> What should happen?

**Actual behavior**

> What is actually happening?

---

## 4. Learning Objectives

### Listening

By the end of the lesson, you should be able to:

- understand a QA bug report
- recognize questions about reproduction steps
- distinguish expected behavior from actual behavior
- understand statements about impact and severity
- follow a conversation from bug discovery to retesting

### Speaking

You should be able to:

- ask QA how to reproduce a bug
- confirm the issue
- ask about expected behavior
- ask about impact
- explain a possible cause
- give a basic estimate
- explain the next action
- ask QA to retest

---

## 5. Key Vocabulary

| Word / Phrase | Meaning |
|---|---|
| bug | lỗi |
| issue | vấn đề / lỗi |
| reproduce | tái hiện lỗi |
| reproduce the issue | tái hiện vấn đề |
| expected behavior | hành vi mong đợi |
| actual behavior | hành vi thực tế |
| reproduction steps | các bước tái hiện lỗi |
| test case | trường hợp kiểm thử |
| regression | lỗi phát sinh lại / ảnh hưởng chức năng cũ |
| impact | ảnh hưởng |
| severity | mức độ nghiêm trọng |
| fix | sửa lỗi |
| workaround | cách xử lý tạm thời |
| retest | kiểm tra lại |
| verify | xác minh |
| investigate | điều tra / tìm nguyên nhân |
| root cause | nguyên nhân gốc |
| trigger | kích hoạt / làm phát sinh |
| validation | kiểm tra tính hợp lệ |
| staging | môi trường staging |

---

## 6. Business Meeting Patterns

### Asking about reproduction

**Can you reproduce the issue consistently?**

Bạn có thể tái hiện lỗi này một cách ổn định không?

**What are the steps to reproduce it?**

Các bước để tái hiện lỗi là gì?

**Does it happen every time?**

Nó có xảy ra mỗi lần không?

**Have you seen this on staging as well?**

Bạn cũng thấy lỗi này trên staging à?

### Asking about impact

**Does this affect all customers?**

Lỗi này có ảnh hưởng đến tất cả khách hàng không?

**Is this blocking checkout?**

Lỗi này có chặn checkout không?

**Does it affect all payment methods?**

Nó có ảnh hưởng đến tất cả phương thức thanh toán không?

**Is there a workaround for now?**

Hiện tại có cách xử lý tạm thời nào không?

---

## 7. Expected vs Actual Behavior

Đây là một distinction rất quan trọng khi thảo luận bug.

### Expected behavior

> **What should happen here?**

> **The discount should remain applied after the shipping method changes.**

### Actual behavior

> **What happens instead?**

> **The discount gets removed.**

Một cách nói tự nhiên:

> **It's supposed to stay applied, but it's getting removed.**

### Core pattern

```text
Expected:
The system should...

Actual:
Instead, the system...

Question:
What should happen instead?
```

---

## 8. Explaining the Cause

Khi chưa chắc chắn 100% về root cause, không nên lúc nào cũng nói:

> The root cause is...

Trong meeting thực tế, Developer thường dùng cách nói có mức độ chắc chắn phù hợp:

> **It looks like...**

> **It seems like...**

> **I think the issue is...**

> **From what I can see...**

Ví dụ:

> **It looks like the shipping update is triggering the discount validation again.**

> **It seems like the checkout state is being reset.**

> **From what I can see, the discount gets cleared during the shipping update.**

---

## 9. Natural Meeting English

| Textbook English | Natural Meeting English |
|---|---|
| Please explain how to reproduce the issue. | How can I reproduce it? |
| Does the issue happen every time? | Does it happen every time? |
| What is the expected behavior? | What should happen here? |
| What is the actual behavior? | What happens instead? |
| I will investigate the issue. | I'll take a look. |
| I have identified the issue. | I found the issue. |
| We need to test this again. | We need to retest it. |
| The issue affects checkout. | It's affecting checkout. |
| I will fix it today. | I'll fix it today. |
| Please provide the reproduction steps. | How do I reproduce it? |

---

## 10. Natural / Reduced Speech

### 1. Can you

> **Can you reproduce it?**

In natural speech, **can you** may be reduced and connected, so it may not sound like three clearly separated words.

### 2. Did you

> **Did you test it on staging?**

In fast speech, **did you** can sound closer to:

> **Didja test it on staging?**

### 3. Have you

> **Have you seen this before?**

The words can be strongly connected in natural speech.

### 4. It is → It's

> **It's happening after the shipping update.**

### 5. I will → I'll

> **I'll take a look.**

### 6. We need to

> **We need to retest it.**

In real meetings, **need to** is often spoken quickly and should be recognized as one natural chunk rather than as isolated words.

---

## 11. Realistic Conversation

### Characters

- **Sarah** — Project Manager
- **Emily** — QA
- **David** — Developer

### Conversation

**Sarah:** Hey David, Emily found an issue on the checkout page.

**David:** Okay. What's the issue?

**Emily:** The discount code gets removed when the customer changes the shipping method.

**David:** Okay. Does it happen every time?

**Emily:** Yeah, I can reproduce it consistently on staging.

**David:** Got it. What are the steps to reproduce it?

**Emily:** First, add a product to the cart and apply a valid discount code.

**David:** Okay.

**Emily:** Then go to checkout and change the shipping method. The discount disappears after that.

**David:** Right. What should happen instead?

**Emily:** The discount should stay applied unless it's no longer valid.

**David:** Got it. Does this happen with all discount codes?

**Emily:** So far, I've only tested percentage-based codes.

**David:** Okay. I'll take a look at the checkout logic and see what's happening.

**Sarah:** Is this blocking checkout?

**Emily:** No, customers can still place the order, but they lose the discount.

**Sarah:** Okay. So it's not blocking, but it can affect the order total.

**David:** Yeah. I'll investigate the discount validation first.

**Sarah:** When do you think you can have a fix?

**David:** I should know more after I check the code. I'll give you an update this afternoon.

**Sarah:** Sounds good. Once it's fixed, Emily, can you retest it?

**Emily:** Sure. I'll run the same steps and check a few different discount codes.

**David:** Perfect.

---

## 12. Transcript

```text
Sarah: Hey David, Emily found an issue on the checkout page.
David: Okay. What's the issue?
Emily: The discount code gets removed when the customer changes the shipping method.
David: Okay. Does it happen every time?
Emily: Yeah, I can reproduce it consistently on staging.
David: Got it. What are the steps to reproduce it?
Emily: First, add a product to the cart and apply a valid discount code.
David: Okay.
Emily: Then go to checkout and change the shipping method. The discount disappears after that.
David: Right. What should happen instead?
Emily: The discount should stay applied unless it's no longer valid.
David: Got it. Does this happen with all discount codes?
Emily: So far, I've only tested percentage-based codes.
David: Okay. I'll take a look at the checkout logic and see what's happening.
Sarah: Is this blocking checkout?
Emily: No, customers can still place the order, but they lose the discount.
Sarah: Okay. So it's not blocking, but it can affect the order total.
David: Yeah. I'll investigate the discount validation first.
Sarah: When do you think you can have a fix?
David: I should know more after I check the code. I'll give you an update this afternoon.
Sarah: Sounds good. Once it's fixed, Emily, can you retest it?
Emily: Sure. I'll run the same steps and check a few different discount codes.
David: Perfect.
```

---

## 13. Listening Tasks

### Task 1 — Identify the bug

What is the bug?

A. The discount code cannot be applied.  
B. The discount disappears after changing the shipping method.  
C. Checkout cannot be completed.  
D. Shipping methods are not available.

**Answer: B**

---

### Task 2 — Reproduction Steps

Put these steps in the correct order:

- Change the shipping method.
- Add a product to the cart.
- Apply a valid discount code.
- Go to checkout.

**Answer:**

1. Add a product to the cart.
2. Apply a valid discount code.
3. Go to checkout.
4. Change the shipping method.

---

### Task 3 — Expected Behavior

Complete the sentence:

> The discount should ______ unless it's no longer valid.

**Answer:** remain / stay applied

---

### Task 4 — Impact

Does the bug block checkout?

**Answer:** No.

What is the impact?

> Customers can still place the order, but they may lose the discount and the order total can be affected.

---

### Task 5 — Technical Investigation

What will David investigate first?

**Answer:**

> The discount validation / checkout logic.

---

## 14. Speaking Patterns

Use this sequence when discussing a bug.

### ① Understand the bug

> What's the issue?

> What exactly is happening?

### ② Reproduce

> How can I reproduce it?

> What are the steps to reproduce it?

> Does it happen every time?

### ③ Expected behavior

> What should happen here?

> What's the expected behavior?

### ④ Impact

> Does this affect all customers?

> Is this blocking checkout?

> Does it affect the order total?

### ⑤ Investigation

> I'll take a look.

> I'll investigate the checkout logic.

> It looks like the shipping update is resetting the discount.

### ⑥ Fix

> I think I can fix it today.

> I'll need some time to investigate it first.

> I'll give you an update this afternoon.

### ⑦ Retest

> Can you retest it once the fix is ready?

> I'll run the same test cases again.

---

## 15. Speaking Task

### Scenario

You are the **Developer**.

QA reports:

> Customers sometimes lose their selected payment method when they go back from the order review page.

You need to investigate the issue through questions.

### Step 1 — Understand

Ask:

> What's happening exactly?

### Step 2 — Reproduce

Ask:

> How can I reproduce it?

### Step 3 — Expected behavior

Ask:

> What should happen instead?

### Step 4 — Impact

Ask:

> Does it happen every time?

> Does it affect all payment methods?

### Step 5 — Action

Say:

> I'll take a look at the checkout flow and investigate the issue.

### Speaking challenge

Do not immediately say:

> “Okay, I'll fix it.”

Instead, collect enough information before deciding what to fix.

---

## 16. AI Role-play Scenario

### Role

**You:** Developer  
**AI:** QA / Project Manager

The AI starts with:

> “Hey, we found an issue on staging with the checkout flow.”

The AI should not provide all the information immediately.

You must ask questions to discover:

- what is happening
- how to reproduce it
- expected behavior
- actual behavior
- frequency
- affected users
- impact
- environment
- possible severity

Then you should:

1. summarize the issue
2. explain what you will investigate
3. give an estimate when appropriate
4. explain the next step
5. ask QA to retest after the fix

### Role-play success goal

Complete the flow:

> **Bug → Reproduce → Expected/Actual → Impact → Investigation → Fix → Retest**

---

## 17. Quizlet Content

### Vocabulary

```text
bug — lỗi
issue — vấn đề / lỗi
reproduce — tái hiện lỗi
reproduce the issue — tái hiện vấn đề
expected behavior — hành vi mong đợi
actual behavior — hành vi thực tế
reproduction steps — các bước tái hiện lỗi
test case — trường hợp kiểm thử
regression — lỗi phát sinh lại / ảnh hưởng chức năng cũ
impact — ảnh hưởng
severity — mức độ nghiêm trọng
fix — sửa lỗi
workaround — cách xử lý tạm thời
retest — kiểm tra lại
verify — xác minh
investigate — điều tra / tìm nguyên nhân
root cause — nguyên nhân gốc
trigger — kích hoạt / làm phát sinh
validation — kiểm tra tính hợp lệ
staging — môi trường staging
```

### Business Meeting Patterns

```text
Can you reproduce the issue?

Does it happen every time?

What are the steps to reproduce it?

What should happen instead?

Does this affect all customers?

Is this blocking checkout?

How serious is the issue?

Is there a workaround for now?

I'll take a look.

I'll investigate the issue.

It looks like...

It seems like...

I'll give you an update this afternoon.

Can you retest it once the fix is ready?
```

### IT Expressions

```text
The discount code gets removed.

I can reproduce it consistently on staging.

The discount should stay applied.

The shipping update is triggering the validation again.

It can affect the order total.

I'll investigate the checkout logic.

We need to retest it.

I'll run the same steps again.
```

---

## 18. Personal Discovery

This section is for your **Personal Quizlet**.

During the listening practice, record only things that genuinely cause difficulty, such as:

- words you cannot recognize from audio
- phrases that sound different from how you expected
- abbreviations
- reduced speech
- unexpected meeting expressions
- phrases that you understand only after seeing the transcript

For example:

> **What are the steps to reproduce it?**

You may initially hear only:

> “...steps...reproduce...”

Or:

> **I'll take a look at the checkout logic.**

You may recognize the meaning only after reading the transcript.

These are exactly the types of discoveries that should go into your Personal Quizlet.

---

## 19. Completion Checklist

- [ ] I can understand a QA bug report.
- [ ] I can distinguish expected and actual behavior.
- [ ] I understand “reproduce the issue”.
- [ ] I can ask for reproduction steps.
- [ ] I can ask about impact.
- [ ] I can ask whether an issue blocks a feature.
- [ ] I can say “I'll take a look.”
- [ ] I understand how to use “It looks like...”
- [ ] I can explain a basic technical cause.
- [ ] I can give a basic estimate.
- [ ] I can ask QA to retest.
- [ ] I can participate in a bug discussion without relying completely on a script.

---

## 20. Success Criteria

Lesson 09 is successful when you can listen to a bug/QA conversation and quickly identify:

```text
What is the bug?
       ↓
How can we reproduce it?
       ↓
What should happen?
       ↓
What actually happens?
       ↓
What's the impact?
       ↓
What are we going to do?
       ↓
How do we verify the fix?
```

### Core Skill

> **Bug → Reproduce → Expected vs Actual → Impact → Fix → Retest**

---

## 21. Audio Production

Each lesson has exactly **one MP3**.

The MP3 should be a single continuous realistic conversation with:

- Sarah — female PM voice
- Emily — female QA voice
- David — male Developer voice

Recommended speech characteristics:

- Level 2 natural meeting speech
- 135–150 WPM
- moderate connected speech
- natural contractions
- realistic pauses
- no artificial sentence-by-sentence delivery

If the TTS provider requires multiple generation chunks, merge them into one final MP3.

---

## 22. `script_tts.txt`

```text
Sarah: Hey David, Emily found an issue on the checkout page.
David: Okay. What's the issue?
Emily: The discount code gets removed when the customer changes the shipping method.
David: Okay. Does it happen every time?
Emily: Yeah, I can reproduce it consistently on staging.
David: Got it. What are the steps to reproduce it?
Emily: First, add a product to the cart and apply a valid discount code.
David: Okay.
Emily: Then go to checkout and change the shipping method. The discount disappears after that.
David: Right. What should happen instead?
Emily: The discount should stay applied unless it's no longer valid.
David: Got it. Does this happen with all discount codes?
Emily: So far, I've only tested percentage-based codes.
David: Okay. I'll take a look at the checkout logic and see what's happening.
Sarah: Is this blocking checkout?
Emily: No, customers can still place the order, but they lose the discount.
Sarah: Okay. So it's not blocking, but it can affect the order total.
David: Yeah. I'll investigate the discount validation first.
Sarah: When do you think you can have a fix?
David: I should know more after I check the code. I'll give you an update this afternoon.
Sarah: Sounds good. Once it's fixed, Emily, can you retest it?
Emily: Sure. I'll run the same steps and check a few different discount codes.
David: Perfect.
```
