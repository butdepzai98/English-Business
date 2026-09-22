# LESSON 13 — Staging & Testing

## 1. Overview

- **Target Level:** Level 2
- **Target WPM:** 145–160
- **Turn length:** 14–24 words
- **Turns:** 18–24
- **Characters:** 3
- **IT Context:** Staging / QA / Testing / Release Candidate
- **Meeting type:** QA sync / pre-release discussion

### Main Goal

Practice following a realistic development discussion before a feature moves toward production.

The focus is not just on the word **staging**, but on understanding how developers and QA discuss:

- what has been deployed
- what has been tested
- what is still failing
- whether the build is ready
- what needs to be fixed before release
- what QA needs from the developer

Core flow:

> **Deploy to Staging → Test → Find Issue → Reproduce → Fix → Retest → Release Decision**

---

## 2. Situation

The checkout changes from the previous lessons have been deployed to staging.

QA has started testing the release candidate.

Most of the checkout flow is working, but QA has found an issue with the discount code and another minor UI problem.

The team needs to decide whether the build is ready for production or whether they need another fix and retest cycle.

---

## 3. IT Context

### Environment flow

```text
Development
    ↓
Feature branch
    ↓
Staging
    ↓
QA testing
    ↓
Release candidate
    ↓
Production
```

### Typical staging discussion

The team may discuss:

- deployment status
- build/version
- QA test results
- passed/failed test cases
- regression testing
- reproducibility
- browser/device differences
- blocking vs non-blocking issues
- retesting
- release readiness

A useful distinction:

> **The feature is deployed** ≠ **The feature is ready for production**

Something can be successfully deployed to staging while still having bugs.

---

## 4. Learning Objectives

### Listening

By the end of this lesson, you should be able to:

- understand a QA update about staging
- identify passed and failed test cases
- understand whether a bug is blocking release
- follow reproduction steps
- understand requests for a fix and retest
- recognize language used to discuss release readiness

### Speaking

You should be able to:

- ask whether something has been deployed
- explain what has been fixed
- ask QA for reproduction steps
- distinguish blocking and non-blocking issues
- give an estimate for a fix
- ask QA to retest
- discuss whether a build is ready for release

---

## 5. Key Vocabulary

| Word / Phrase | Meaning |
|---|---|
| staging | môi trường staging |
| deploy | triển khai |
| build | bản build |
| release candidate | bản ứng viên để release |
| QA | kiểm thử / bộ phận QA |
| test case | trường hợp kiểm thử |
| regression test | kiểm thử hồi quy |
| reproduce | tái hiện lỗi |
| retest | kiểm thử lại |
| blocking issue | lỗi ngăn việc release |
| non-blocking issue | lỗi không ngăn release |
| test result | kết quả kiểm thử |
| pass | đạt |
| fail | không đạt |
| ready for release | sẵn sàng release |
| release | phát hành |
| environment | môi trường |
| deployment | quá trình triển khai |
| fix | bản sửa lỗi |
| verification | xác minh / kiểm tra lại |

---

## 6. Business Meeting Patterns

### Asking about staging

> **Has this been deployed to staging?**

> **Is the latest build on staging?**

> **Which version are you testing?**

> **Has QA started testing it yet?**

### Asking about test results

> **How's testing going so far?**

> **Did all the test cases pass?**

> **Did QA find anything?**

> **Are there any blocking issues?**

### Asking for reproduction

> **Can you reproduce it consistently?**

> **What are the steps to reproduce it?**

> **Does it happen every time?**

### Discussing release readiness

> **Are we still good for release?**

> **Is this blocking the release?**

> **Do we need another build?**

> **Can we release with this issue?**

> **Let's retest it before we make a decision.**

---

## 7. Staging vs Production

A common mistake is to treat staging and production as if they are the same environment.

### Staging

Used to:

- test new changes
- reproduce bugs
- verify integrations
- perform QA
- check release candidates

### Production

The live environment used by real customers.

Meeting examples:

> **It's working on staging, but we haven't tested it in production yet.**

> **Let's make sure QA signs off before we deploy to production.**

> **We shouldn't push this to production until the blocking issue is fixed.**

---

## 8. Blocking vs Non-blocking Issues

This distinction is very important in real meetings.

### Blocking

A problem that prevents the team from safely releasing.

Example:

> **The checkout is completely broken, so that's a blocking issue.**

### Non-blocking

A problem exists, but the team can potentially release without fixing it immediately.

Example:

> **The alignment is slightly off, but that's not blocking the release.**

Useful questions:

> **Is that blocking the release?**

> **Can we release with that issue?**

> **How serious is it?**

> **Do we need to fix this before production?**

---

## 9. Natural Meeting English

| More formal | Natural meeting English |
|---|---|
| Has the deployment to staging been completed? | Is the latest build on staging? |
| Please provide the reproduction steps. | How can I reproduce it? |
| Is the issue reproducible? | Can you reproduce it? |
| Is this preventing the release? | Is this blocking the release? |
| Testing has not finished yet. | QA's still testing it. |
| We need another deployment. | We'll need another build. |
| Please test it again after the fix. | Can you retest it after I push the fix? |
| We need to determine whether it is ready. | Are we good to release? |

---

## 10. Natural / Reduced Speech

### 1. Is the latest build on staging?

In natural speech, **is the** and **latest build on** may connect tightly.

Train yourself to hear the whole chunk:

> **latest build on staging**

rather than individual words.

### 2. QA's still testing it.

**QA is** becomes **QA's**.

> QA's still testing it.

### 3. Did you find anything?

This is a common short meeting question.

Do not wait for a long grammatical structure.

> **Did you find anything?**

usually means:

> “Có phát hiện gì không?”

### 4. Can you reproduce it?

A very common QA/developer phrase.

Learn it as one chunk:

> **reproduce it**

### 5. We'll need another build.

**We will** → **We'll**

The sentence is useful when a fix requires another deployment.

### 6. Are we good to release?

This does not literally mean “Are we good?”

In a project meeting:

> **Are we good to release?**

means:

> “Chúng ta đã sẵn sàng để release chưa?”

---

## 11. Realistic Conversation

### Characters

- **James** — Tech Lead
- **Emily** — QA
- **David** — Developer

### Conversation

**James:** Okay, how's testing going on the latest checkout build?

**Emily:** Pretty good overall. Most of the test cases have passed, but I found one issue with discount codes.

**David:** Okay. What happens?

**Emily:** The discount gets removed when I switch from standard shipping to express shipping.

**David:** Hmm, okay. Can you reproduce it consistently?

**Emily:** Yeah, every time so far. I've tested it on Chrome and Firefox.

**David:** Got it. What are the steps to reproduce it?

**Emily:** Apply a discount code, go to checkout, and then change the shipping method.

**David:** And the discount disappears after that?

**Emily:** Exactly.

**David:** Okay. I'll check the checkout totals and discount validation.

**James:** Is that blocking the release?

**Emily:** I don't think so. Customers can still complete the order, but the final total is wrong.

**James:** Right. I'd still consider that pretty serious because it affects pricing.

**David:** Yeah, I agree. I'll prioritize that one.

**Emily:** There's also a small UI issue on the mobile checkout.

**David:** What's wrong with it?

**Emily:** The shipping method buttons aren't aligned correctly on smaller screens.

**David:** Okay. Is that blocking?

**Emily:** No, it's just a layout issue.

**James:** Alright. Let's focus on the discount issue first.

**David:** Sure. I should have a fix ready in about an hour.

**James:** Once you push it to staging, Emily, can you retest the discount flow?

**Emily:** Yeah, I'll rerun the same test cases and do a quick regression check.

**David:** Sounds good. I'll let you know as soon as the new build is up.

**James:** Perfect. If that passes, we can make the final call on the release.

**Emily:** Got it. I'll keep you posted.

---

## 12. Transcript

```text
James: Okay, how's testing going on the latest checkout build?
Emily: Pretty good overall. Most of the test cases have passed, but I found one issue with discount codes.
David: Okay. What happens?
Emily: The discount gets removed when I switch from standard shipping to express shipping.
David: Hmm, okay. Can you reproduce it consistently?
Emily: Yeah, every time so far. I've tested it on Chrome and Firefox.
David: Got it. What are the steps to reproduce it?
Emily: Apply a discount code, go to checkout, and then change the shipping method.
David: And the discount disappears after that?
Emily: Exactly.
David: Okay. I'll check the checkout totals and discount validation.
James: Is that blocking the release?
Emily: I don't think so. Customers can still complete the order, but the final total is wrong.
James: Right. I'd still consider that pretty serious because it affects pricing.
David: Yeah, I agree. I'll prioritize that one.
Emily: There's also a small UI issue on the mobile checkout.
David: What's wrong with it?
Emily: The shipping method buttons aren't aligned correctly on smaller screens.
David: Okay. Is that blocking?
Emily: No, it's just a layout issue.
James: Alright. Let's focus on the discount issue first.
David: Sure. I should have a fix ready in about an hour.
James: Once you push it to staging, Emily, can you retest the discount flow?
Emily: Yeah, I'll rerun the same test cases and do a quick regression check.
David: Sounds good. I'll let you know as soon as the new build is up.
James: Perfect. If that passes, we can make the final call on the release.
Emily: Got it. I'll keep you posted.
```

---

## 13. Listening Tasks

### Task 1 — Overall test result

Have most test cases passed?

**Answer:** Yes.

---

### Task 2 — Main bug

What happens to the discount?

**Answer:** It gets removed when the customer changes from standard shipping to express shipping.

---

### Task 3 — Reproduction

Can Emily reproduce the bug consistently?

**Answer:** Yes.

---

### Task 4 — Browsers

Which browsers did Emily test?

**Answer:** Chrome and Firefox.

---

### Task 5 — Blocking status

Is the discount issue considered blocking?

**Answer:** Technically Emily says it isn't blocking because checkout still works, but James considers it serious because it affects pricing.

This is an important meeting skill: **different people may evaluate severity differently.**

---

### Task 6 — Second issue

What is wrong with the mobile checkout?

**Answer:** The shipping method buttons are not aligned correctly on smaller screens.

---

### Task 7 — Developer action

What will David do?

**Answer:** Investigate and fix the discount validation, then push a new build to staging.

---

### Task 8 — QA action

What will Emily do after the fix?

**Answer:** Retest the discount flow and run a quick regression check.

---

## 14. Speaking Patterns

### Ask about testing

> How's testing going?

> Did QA find anything?

> Have all the test cases passed?

### Ask about bugs

> Can you reproduce it?

> What are the steps to reproduce it?

> Does it happen every time?

### Discuss severity

> Is that blocking the release?

> How serious is the issue?

> I don't think that's blocking.

> I'd still consider that pretty serious.

### Discuss the next step

> I'll check the checkout logic.

> I'll prioritize that one.

> I'll push a new build to staging.

> Can you retest it after the fix?

### Release decision

> Are we good to release?

> If that passes, we can release.

> Let's make the final call after QA retests it.

---

## 15. Speaking Task

### Scenario

You are the **Developer**.

QA tells you:

> “The checkout works, but the order total is incorrect when the customer changes the shipping method.”

Respond naturally.

You should:

1. Ask whether QA can reproduce it.
2. Ask for the reproduction steps.
3. Clarify whether it affects all customers.
4. Explain what you will investigate.
5. Give a realistic estimate.
6. Tell QA when they can retest.

### Challenge

Do not immediately say:

> “I'll fix it.”

Instead, practice the full developer response:

> **Understand → Clarify → Investigate → Estimate → Fix → Retest**

---

## 16. AI Role-play Scenario

### Role

**You:** Developer  
**AI:** QA Engineer

The feature has been deployed to staging.

The AI should report several test results:

- most cases pass
- one functional issue fails
- one UI issue is minor
- the functional issue may affect the order total

You must:

- ask for reproduction steps
- determine severity
- ask whether the issue is consistent
- explain your investigation
- give an ETA
- tell QA when to retest
- decide whether another staging build is needed

The AI may challenge you:

> “Can we release with this issue?”

You should explain your reasoning rather than simply saying yes or no.

### Role-play success goal

Complete:

> **Testing Result → Bug → Reproduce → Severity → Fix → Retest → Release Decision**

---

## 17. Quizlet Content

### Vocabulary

```text
staging — môi trường staging
deploy — triển khai
build — bản build
release candidate — bản ứng viên để release
test case — trường hợp kiểm thử
regression test — kiểm thử hồi quy
reproduce — tái hiện lỗi
retest — kiểm thử lại
blocking issue — lỗi ngăn release
non-blocking issue — lỗi không ngăn release
test result — kết quả kiểm thử
pass — đạt
fail — không đạt
ready for release — sẵn sàng release
deployment — quá trình triển khai
verification — xác minh / kiểm tra lại
```

### Business Meeting Patterns

```text
Is the latest build on staging?

Has QA started testing it yet?

How's testing going so far?

Did QA find anything?

Are there any blocking issues?

Can you reproduce it consistently?

What are the steps to reproduce it?

Is that blocking the release?

Can we release with this issue?

Do we need another build?

Can you retest it after I push the fix?

Are we good to release?

Let's make the final call after QA retests it.
```

### IT Expressions

```text
Most of the test cases have passed.

The discount gets removed when I switch shipping methods.

I've tested it on Chrome and Firefox.

The final total is wrong.

I'll check the checkout totals and discount validation.

There's also a small UI issue.

I'll prioritize that one.

I'll push a new build to staging.

I'll rerun the same test cases.

I'll do a quick regression check.

The new build is up.

We can make the final call on the release.
```

---

## 18. Personal Discovery

Pay special attention to phrases that can sound very different from textbook English:

- **How's testing going?**
- **Did QA find anything?**
- **Can you reproduce it consistently?**
- **What are the steps to reproduce it?**
- **Is that blocking the release?**
- **I'd still consider that pretty serious.**
- **Let's focus on that one first.**
- **I should have a fix ready in about an hour.**
- **Once you push it to staging...**
- **I'll keep you posted.**

If any phrase is difficult to hear, add it to your Personal Quizlet.

Do not add every new word automatically. Add phrases that genuinely caused a listening problem or that you want to recognize faster in real meetings.

---

## 19. Completion Checklist

- [ ] I can understand a QA update about staging.
- [ ] I can identify passed and failed test cases.
- [ ] I can understand reproduction steps.
- [ ] I can distinguish blocking and non-blocking issues.
- [ ] I can ask QA for more details.
- [ ] I can explain what I will investigate.
- [ ] I can give a realistic fix estimate.
- [ ] I can ask QA to retest.
- [ ] I understand the difference between deployed and release-ready.
- [ ] I can discuss whether a build is ready for production.
- [ ] I can participate in a staging/QA discussion without translating every sentence.

---

## 20. Success Criteria

You successfully complete Lesson 13 when you can follow this conversation flow in real time:

```text
What was deployed?
        ↓
What has QA tested?
        ↓
What failed?
        ↓
Can we reproduce it?
        ↓
How serious is it?
        ↓
Does it block release?
        ↓
What needs to be fixed?
        ↓
When can QA retest?
        ↓
Are we ready to release?
```

### Core Skill

> **Don't confuse “deployed to staging” with “ready for production.”**

---

## 21. Audio Production

Each lesson has exactly **one MP3**.

For Lesson 13:

- **James** — male Tech Lead
- **Emily** — female QA
- **David** — male Developer

Audio requirements:

- Level 2
- 145–160 WPM
- 18–24 turns
- 3 speakers
- moderate connected speech
- natural contractions
- realistic QA/developer interaction
- clear distinction between blocking and non-blocking issues
- natural staging/retest/release vocabulary

If TTS generation requires multiple chunks, merge them into **one final MP3**.

---

## 22. `script_tts.txt`

```text
James: Okay, how's testing going on the latest checkout build?
Emily: Pretty good overall. Most of the test cases have passed, but I found one issue with discount codes.
David: Okay. What happens?
Emily: The discount gets removed when I switch from standard shipping to express shipping.
David: Hmm, okay. Can you reproduce it consistently?
Emily: Yeah, every time so far. I've tested it on Chrome and Firefox.
David: Got it. What are the steps to reproduce it?
Emily: Apply a discount code, go to checkout, and then change the shipping method.
David: And the discount disappears after that?
Emily: Exactly.
David: Okay. I'll check the checkout totals and discount validation.
James: Is that blocking the release?
Emily: I don't think so. Customers can still complete the order, but the final total is wrong.
James: Right. I'd still consider that pretty serious because it affects pricing.
David: Yeah, I agree. I'll prioritize that one.
Emily: There's also a small UI issue on the mobile checkout.
David: What's wrong with it?
Emily: The shipping method buttons aren't aligned correctly on smaller screens.
David: Okay. Is that blocking?
Emily: No, it's just a layout issue.
James: Alright. Let's focus on the discount issue first.
David: Sure. I should have a fix ready in about an hour.
James: Once you push it to staging, Emily, can you retest the discount flow?
Emily: Yeah, I'll rerun the same test cases and do a quick regression check.
David: Sounds good. I'll let you know as soon as the new build is up.
James: Perfect. If that passes, we can make the final call on the release.
Emily: Got it. I'll keep you posted.
```
