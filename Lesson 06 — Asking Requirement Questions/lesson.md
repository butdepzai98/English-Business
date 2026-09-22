# LESSON 06 — Asking Requirement Questions

## 1. Overview

**Target Level:** Level 2  
**Target WPM:** 130–145  
**Target Turn Length:** 12–20 words  
**Target Turns:** 16–20  
**Characters:** 2  
**IT Context:** E-commerce / business rules / user permissions  
**Meeting Type:** Requirement discussion  
**Listening Objective:** Understand questions about business rules, permissions, edge cases, and conditions.  
**Speaking Objective:** Ask clear requirement questions before starting development.  
**Grammar Focus:** Present perfect, modal verbs, basic conditionals  
**Reduced Speech:** Moderate  
**Context Noise:** Low

---

## 2. Situation

Sarah is explaining a new e-commerce feature to David.

The basic requirement is already understood, but several business rules are still unclear.

David needs to ask questions before development starts:

- Who can use the feature?
- What happens if the user does not have permission?
- Has the client already decided how the feature should behave?
- What should happen in different conditions?
- Can the feature be used by guest users?

The goal is not simply to understand the requirement.

David needs to **actively question the requirement** so there are no misunderstandings later.

---

## 3. IT Context

The team is working on a **customer discount feature** for an e-commerce website.

Basic requirement:

- Logged-in customers can use a discount code.
- Guest users should not be able to use the discount code.
- Some customers may have special permissions.
- The system needs to validate the customer's eligibility.

The developer needs to clarify the exact business rules before implementation.

---

## 4. Learning Objectives

By the end of this lesson, you should be able to:

1. Understand requirement questions spoken at a natural meeting speed.
2. Recognize questions about permissions and business rules.
3. Ask whether a requirement has already been decided.
4. Ask what should happen under specific conditions.
5. Use **Can / Should / Could / Do we need to...** naturally.
6. Use conditional questions such as:
   - “What should happen if...?”
   - “If the customer already has a discount, should we...?”
7. Confirm the answer before moving forward.

---

# 5. Key Vocabulary

| Term | Meaning |
|---|---|
| requirement | yêu cầu |
| business rule | quy tắc nghiệp vụ |
| permission | quyền |
| eligible | đủ điều kiện |
| logged-in user | người dùng đã đăng nhập |
| guest user | người dùng chưa đăng nhập |
| discount code | mã giảm giá |
| validate | kiểm tra tính hợp lệ |
| apply | áp dụng |
| existing | hiện có |
| behavior | hành vi / cách hệ thống hoạt động |
| condition | điều kiện |
| restrict | hạn chế |
| access | quyền truy cập / truy cập |
| clarify | làm rõ |

---

# 6. Business Meeting Patterns

## 6.1 Asking About an Existing Decision

### “Has the client decided...?”

Useful when you want to know whether something is already confirmed.

Examples:

> Has the client decided how this should work?

> Has the client decided which users can access it?

> Has the behavior been confirmed?

### Listening Note

In natural speech, don't try to process every word separately.

Recognize the whole chunk:

> **Has the client decided... ?**

This is much faster than translating:

> Has → the → client → decided

---

## 6.2 Asking About System Behavior

### “What should happen if...?”

This is one of the most useful patterns for developers.

Examples:

> What should happen if the user isn't logged in?

> What should happen if the code is invalid?

> What should happen if the customer already has a discount?

The important structure is:

> **What should happen if + condition?**

Think:

```text
Condition
    ↓
Expected behavior
```

---

## 6.3 Asking About Permission

Useful patterns:

> Who should be able to use this?

> Should guest users have access to this?

> Can all customers use the feature?

> Do we need to restrict this to logged-in users?

These questions are extremely common when discussing:

- Admin features
- Customer accounts
- User roles
- E-commerce permissions
- API access
- Backend authorization

---

## 6.4 Asking About Validation

Examples:

> Do we need to validate the customer's permission first?

> Should the system check the code before applying the discount?

> What should we do if validation fails?

---

# 7. Natural Meeting English

Developers often need to ask questions without sounding overly formal.

### Formal / textbook

> Please clarify the behavior when the customer has already used a discount.

### More natural

> What should happen if they've already used a discount?

---

### Formal

> I would like to know whether guest users are permitted to access this feature.

### Natural

> Can guest users use this?

---

### Formal

> Has the client already made a decision regarding this behavior?

### Natural

> Has the client decided how this should work?

---

# 8. Natural / Reduced Speech

At Level 2, start listening for **connected chunks** rather than individual words.

## “Do we need to...?”

Natural speech may sound closer to:

> “D'we need to...?”

Example:

> D'we need to restrict this to logged-in users?

Don't panic if **do we** doesn't sound clear.

The important chunk is:

> **need to restrict**

---

## “What should happen if...?”

The words can run together:

> What should happen if...?

Train yourself to recognize this as one meeting pattern.

---

## “Have they already...?”

Example:

> Have they already decided?

The first words may be relatively weak.

The important information is often:

> **already decided**

---

## “Can they use it?”

Don't expect every word to have equal stress.

Focus on:

> **guest users → use → it**

This helps you understand the meaning even when some small words are difficult to hear.

---

# 9. Realistic Conversation

## Scenario

Sarah explains a new discount-code requirement.

David asks questions about:

- permissions
- business rules
- conditions
- validation
- system behavior

### Conversation

Sarah: Hey David, I want to go over the discount code requirement before we start development.

David: Sure. Do we already know which customers should be able to use the code?

Sarah: Yes. Logged-in customers can use it, but guest users shouldn't have access.

David: Okay. Has the client decided what happens if a guest tries to apply the code?

Sarah: Yeah, they should see a message asking them to log in first.

David: Got it. Do we need to restrict the code to certain customer groups?

Sarah: For now, no. Any logged-in customer should be able to use it.

David: Okay. What should happen if the customer has already used another discount?

Sarah: They shouldn't be able to combine the discounts.

David: Makes sense. Should the system show an error message in that case?

Sarah: Yes, and it should explain that only one discount can be used.

David: Okay. Have we confirmed whether the code needs to be validated before checkout?

Sarah: Yes, the client wants it validated as soon as the customer applies it.

David: Got it. And if the code is expired, should we remove it automatically?

Sarah: Yes. The discount should be removed and the customer should see a message.

David: Alright. I think that covers the main cases.

Sarah: Great. I'll add these rules to the ticket so we're on the same page.

---

# 10. Listening Tasks

## Task 1 — Identify the Questions

Listen to the conversation and identify each question David asks.

Pay special attention to:

- “Do we already know...?”
- “Has the client decided...?”
- “Do we need to...?”
- “What should happen if...?”
- “Should the system...?”
- “Have we confirmed whether...?”

Do not try to translate every word.

---

## Task 2 — Requirement Details

After listening, answer:

1. Who can use the discount code?
2. Can guest users use it?
3. What happens if a guest tries to apply it?
4. Can customers combine two discounts?
5. When should the system validate the code?
6. What happens if the code is expired?

---

## Task 3 — Condition Recognition

Listen specifically for the conditions.

Complete the patterns:

1. What should happen **if** __________?
2. **If** the code is expired, __________.
3. **If** a guest tries to apply it, __________.

The goal is to recognize:

> **condition → system behavior**

---

## Task 4 — Listen Without the Transcript

First listen without reading.

Try to identify only:

- Who is allowed to use the feature?
- What restrictions exist?
- What special conditions exist?
- What should the system do?

Then check the transcript.

---

# 11. Speaking Patterns

Use these patterns actively.

## Asking About Users

> Who should be able to use this?

> Can guest users use this?

> Should this be available to all customers?

---

## Asking About Conditions

> What should happen if the user isn't logged in?

> What should happen if the code is invalid?

> If the customer already has a discount, what should we do?

---

## Asking About Decisions

> Has the client decided how this should work?

> Have we confirmed this behavior?

> Has this been confirmed with the client?

---

## Asking About Technical Behavior

> Do we need to validate this before checkout?

> Should the system remove it automatically?

> Do we need to restrict this to certain users?

---

# 12. Speaking Task

Imagine you are the developer.

The client says:

> “We want customers to receive a special discount after they place five orders.”

Do **not** immediately start designing the feature.

Ask requirement questions first.

Try to ask about:

1. Logged-in vs guest users
2. Existing customers
3. What counts as an order
4. Cancelled orders
5. When the discount becomes available
6. Whether the discount can be combined with another discount

Example:

> Do guest users count toward the five orders?

Then continue with your own questions.

---

# 13. AI Role-play Scenario

## Role

**You:** Developer  
**AI:** Client / Project Manager

## Situation

The client wants to add a discount feature to an e-commerce website.

The AI should explain the basic requirement but leave several business rules unclear.

Your job is **not** to accept the requirement immediately.

You should ask questions such as:

> Who should be able to use this?

> What should happen if...?

> Has the client decided...?

> Do we need to...?

> Should the system...?

The AI should answer your questions and introduce follow-up cases.

## Success Condition

You should be able to clarify:

- user permissions
- business rules
- conditions
- validation
- system behavior
- edge cases

before saying:

> Okay, I understand the requirement.

---

# 14. Quizlet Content

## Core Vocabulary

```text
requirement — yêu cầu
business rule — quy tắc nghiệp vụ
permission — quyền
eligible — đủ điều kiện
logged-in user — người dùng đã đăng nhập
guest user — người dùng chưa đăng nhập
discount code — mã giảm giá
validate — kiểm tra tính hợp lệ
apply — áp dụng
restrict — hạn chế
condition — điều kiện
behavior — hành vi / cách hệ thống hoạt động
clarify — làm rõ
```

## Business Patterns

```text
Has the client decided how this should work?
Do we already know which users can access this?
What should happen if the user isn't logged in?
Do we need to restrict this to certain users?
Should the system show an error message?
Have we confirmed this behavior?
If the code is expired, what should happen?
```

## IT Expressions

```text
validate the code
apply the discount
restrict access
logged-in customers
guest users
customer permissions
business rules
error message
expired code
customer group
```

---

# 15. Personal Discovery

During this lesson, add an item to your personal Quizlet set when:

- You heard a phrase but couldn't recognize it immediately.
- A shortened phrase sounded different from the written form.
- A business expression was new to you.
- A technical phrase was familiar in writing but difficult to understand in speech.
- You discovered a phrase that people actually use in meetings.

**Do not add everything.**

Only record things that were genuinely difficult or useful for you.

---

# 16. Completion Checklist

Before finishing this lesson:

- [ ] I can understand the main requirement without reading the transcript.
- [ ] I can identify who can and cannot use a feature.
- [ ] I recognize “What should happen if...?”
- [ ] I recognize “Has the client decided...?”
- [ ] I can ask about permissions.
- [ ] I can ask about business rules.
- [ ] I can ask about edge cases.
- [ ] I can ask what the system should do under a condition.
- [ ] I can summarize the clarified requirement.
- [ ] I can perform the AI role-play without reading every prepared sentence.

---

# 17. Success Criteria

You have completed Lesson 06 successfully when you can listen to a requirement discussion and naturally move from:

> “I understand the feature.”

to:

> “I understand the feature, but I need to clarify the rules before I implement it.”

The key skill is:

**Requirement → Question → Condition → Expected Behavior → Confirmation**