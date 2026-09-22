# LESSON 14 — Deployment

## 1. Overview

- **Target Level:** Level 3
- **Target WPM:** 150–165
- **Turn length:** 18–28 words
- **Turns:** 20–26
- **Characters:** 3
- **IT Context:** Deployment / Production / Release / Rollback
- **Meeting type:** Release / deployment discussion

### Main Goal

Practice following a realistic deployment discussion where the team needs to decide whether a release can go to production, what needs to be checked first, and what the rollback plan is.

Core flow:

> **Release Scope → Pre-check → Deployment Plan → Production Monitoring → Issue → Rollback Decision → Verification**

This lesson deliberately moves from the simpler QA/staging discussions in Lesson 13 toward more spontaneous project communication.

---

## 2. Situation

The team has finished the checkout changes and QA has signed off the latest staging build.

The team is planning to deploy the release to production.

Before deployment, the Tech Lead wants to confirm:

- exactly what is included
- whether all migrations/configuration changes are ready
- whether the cache needs to be cleared
- who will monitor production
- what the rollback plan is
- what happens if checkout errors increase after deployment

During the discussion, a small concern appears around a configuration change. The team needs to decide whether it is safe to proceed or delay the deployment.

---

## 3. IT Context

Typical deployment flow:

```text
QA Sign-off
    ↓
Release Candidate
    ↓
Pre-deployment Check
    ↓
Production Deployment
    ↓
Cache / Index / Service Verification
    ↓
Smoke Test
    ↓
Monitor
    ↓
Release Complete
```

Possible Magento / Web Development deployment concerns:

- configuration changes
- database migration
- static content
- cache
- indexers
- Varnish
- Redis
- OpenSearch
- RabbitMQ consumers
- environment variables
- feature flags
- rollback package
- smoke testing

Important distinction:

> **Deployment completed** does not automatically mean **release verified**.

After deployment, the team still needs to check whether the application behaves correctly in production.

---

## 4. Learning Objectives

### Listening

You should be able to:

- follow a production deployment discussion
- understand pre-deployment checks
- identify deployment dependencies
- follow a rollback discussion
- understand monitoring and smoke-test instructions
- recognize when a speaker changes from planning to risk discussion
- follow interruptions and short follow-up questions

### Speaking

You should be able to:

- explain what is included in a release
- confirm deployment readiness
- mention technical risks
- explain a deployment step
- discuss rollback conditions
- give a deployment ETA
- respond to unexpected concerns
- confirm post-deployment verification

---

## 5. Key Vocabulary

| Word / Phrase | Meaning |
|---|---|
| deploy | triển khai |
| deployment | quá trình triển khai |
| production | môi trường production |
| release | bản release / phát hành |
| release window | khoảng thời gian release |
| rollback | quay lại phiên bản trước |
| migration | migration database |
| configuration change | thay đổi cấu hình |
| pre-check | kiểm tra trước deployment |
| smoke test | kiểm tra nhanh sau deployment |
| monitor | theo dõi |
| deployment plan | kế hoạch triển khai |
| release scope | phạm vi release |
| dependency | thành phần phụ thuộc |
| downtime | thời gian hệ thống gián đoạn |
| failure | lỗi / sự cố |
| restore | khôi phục |
| verify | xác minh |
| stable | ổn định |
| production issue | vấn đề trên production |

---

## 6. Business Meeting Patterns

### Confirming readiness

> **Are we still good to deploy?**

> **Has QA signed off on this build?**

> **Is everything ready on the production side?**

> **Are there any last-minute issues?**

### Discussing the deployment plan

> **What's the deployment plan?**

> **Who's handling the deployment?**

> **Do we need any database changes?**

> **Do we need to clear the cache afterward?**

> **How long do you expect the deployment to take?**

### Discussing risk

> **Is there anything we should watch out for?**

> **What's the rollback plan?**

> **What would trigger a rollback?**

> **Could this affect existing orders?**

### Post-deployment verification

> **Can we run a quick smoke test?**

> **Let's monitor the checkout flow for a few minutes.**

> **Can you verify the main customer flow?**

> **Let's make sure everything is stable before we close the release.**

---

## 7. Deployment vs Release

These terms are related but not identical.

### Deployment

Putting the new code/configuration onto an environment.

> **The deployment finished successfully.**

### Release

Making the functionality available as part of a production release.

> **We're ready to release the checkout changes.**

### Verification

Checking whether the deployed application actually works.

> **The deployment is done, but we still need to verify checkout.**

A natural meeting sequence:

> **Deploy → Verify → Monitor → Confirm release**

---

## 8. Rollback

Rollback means returning the application to a previous known-good version when the new release causes a serious problem.

Useful phrases:

> **What's our rollback plan?**

> **We can roll back if the error rate increases.**

> **What would trigger a rollback?**

> **Let's give it a few minutes and monitor the logs first.**

> **If the issue gets worse, we'll revert the deployment.**

Do not automatically suggest rollback for every bug.

In a real meeting, the team considers:

```text
Issue
↓
Severity
↓
Customer impact
↓
Can we fix forward?
↓
Can we safely monitor?
↓
Rollback?
```

---

## 9. Natural Meeting English

| Formal / textbook | Natural meeting English |
|---|---|
| Are we prepared to deploy? | Are we still good to deploy? |
| Has quality assurance approved this build? | Has QA signed off on this build? |
| Please explain the deployment procedure. | What's the deployment plan? |
| What problems should we monitor? | Anything we should watch out for? |
| What is the rollback procedure? | What's the rollback plan? |
| What condition requires rollback? | What would trigger a rollback? |
| We should perform a smoke test. | Can we run a quick smoke test? |
| We should observe the system. | Let's monitor it for a few minutes. |
| We can revert if necessary. | If it gets worse, we'll roll it back. |

---

## 10. Natural / Reduced Speech

### 1. Are we still good to deploy?

The phrase **still good to** is extremely common in meetings.

> Are we still good to deploy?

Meaning:

> “Mình vẫn ổn để deploy chứ?”

### 2. Has QA signed off on this?

**signed off on** is an important business/IT chunk.

It means QA has formally approved the build for the next step.

### 3. Anything we should watch out for?

The sentence begins without a formal subject/question structure.

This is normal in spoken meetings.

### 4. What'd trigger a rollback?

**What would** can sound compressed:

> What'd trigger a rollback?

Do not confuse **what'd** with **what did** only from sound. Context matters.

### 5. We'll keep an eye on it.

**We'll** + **keep an eye on** is a useful chunk meaning:

> tiếp tục theo dõi sát.

### 6. If it gets worse, we'll roll it back.

Listen for the connected chunk:

> **gets worse → we'll roll it back**

---

## 11. Realistic Conversation

### Characters

- **James** — Tech Lead
- **David** — Backend Developer
- **Sarah** — Project Manager

### Conversation

**James:** Alright, before we start, are we still good to deploy the checkout release tonight?

**Sarah:** As far as QA is concerned, yes. Emily signed off on the latest staging build this morning.

**David:** Okay. From the backend side, the code is ready. There's one configuration change that I want to double-check, though.

**James:** Which one?

**David:** The new checkout timeout value. It's currently set differently in staging and production.

**Sarah:** Is that expected, or do we need to change the production value?

**David:** It's intentional, but I want to make sure the production value is approved before we deploy.

**James:** Good catch. Can you confirm the expected value before the release window?

**David:** Yeah, I'll check the deployment config and confirm it with the client team.

**Sarah:** How long will that take?

**David:** Probably ten minutes. Everything else should be ready.

**James:** Okay. What's the deployment plan after that?

**David:** I'll deploy the code first, then run the database migration and clear the application cache.

**James:** Do we need to reindex anything?

**David:** No new indexer changes in this release, so we shouldn't need a full reindex.

**Sarah:** And who's doing the smoke test?

**James:** David can verify the backend health, and I'll run through the main checkout flow.

**David:** Sounds good. We should also check that the payment API is responding normally.

**Sarah:** Right. Anything else we should watch out for?

**David:** The first few minutes after deployment are the main risk. I'd like to monitor checkout errors and payment failures.

**James:** Agreed. What's the rollback plan if we see a spike?

**David:** If the error rate increases significantly, I'll revert the deployment to the previous version.

**Sarah:** Would we need to roll back the database migration too?

**David:** Not for this change. The migration is backward compatible, so we can revert the code without reverting the database.

**James:** Good. That makes the rollback safer.

**Sarah:** Okay. Let's say the deployment takes twenty minutes. Are we still on track for the release window?

**David:** Yeah, assuming the config check is fine, we should be done around eight-thirty.

**James:** Perfect. Just let us know if anything changes before you start.

**David:** Will do. I'll confirm the config first and post an update in the release channel.

**Sarah:** Great. Once the smoke test passes, we'll consider the release complete.

**James:** Sounds good. Let's keep an eye on it for the first fifteen minutes.

---

## 12. Transcript

```text
James: Alright, before we start, are we still good to deploy the checkout release tonight?
Sarah: As far as QA is concerned, yes. Emily signed off on the latest staging build this morning.
David: Okay. From the backend side, the code is ready. There's one configuration change that I want to double-check, though.
James: Which one?
David: The new checkout timeout value. It's currently set differently in staging and production.
Sarah: Is that expected, or do we need to change the production value?
David: It's intentional, but I want to make sure the production value is approved before we deploy.
James: Good catch. Can you confirm the expected value before the release window?
David: Yeah, I'll check the deployment config and confirm it with the client team.
Sarah: How long will that take?
David: Probably ten minutes. Everything else should be ready.
James: Okay. What's the deployment plan after that?
David: I'll deploy the code first, then run the database migration and clear the application cache.
James: Do we need to reindex anything?
David: No new indexer changes in this release, so we shouldn't need a full reindex.
Sarah: And who's doing the smoke test?
James: David can verify the backend health, and I'll run through the main checkout flow.
David: Sounds good. We should also check that the payment API is responding normally.
Sarah: Right. Anything else we should watch out for?
David: The first few minutes after deployment are the main risk. I'd like to monitor checkout errors and payment failures.
James: Agreed. What's the rollback plan if we see a spike?
David: If the error rate increases significantly, I'll revert the deployment to the previous version.
Sarah: Would we need to roll back the database migration too?
David: Not for this change. The migration is backward compatible, so we can revert the code without reverting the database.
James: Good. That makes the rollback safer.
Sarah: Okay. Let's say the deployment takes twenty minutes. Are we still on track for the release window?
David: Yeah, assuming the config check is fine, we should be done around eight-thirty.
James: Perfect. Just let us know if anything changes before you start.
David: Will do. I'll confirm the config first and post an update in the release channel.
Sarah: Great. Once the smoke test passes, we'll consider the release complete.
James: Sounds good. Let's keep an eye on it for the first fifteen minutes.
```

---

## 13. Listening Tasks

### Task 1 — QA status

Has QA signed off on the latest staging build?

**Answer:** Yes.

### Task 2 — Risk

What does David want to double-check?

**Answer:** The checkout timeout configuration because staging and production currently have different values.

### Task 3 — Deployment steps

What does David plan to do?

**Answer:** Deploy the code, run the database migration, and clear the application cache.

### Task 4 — Indexer

Does the team need a full reindex?

**Answer:** No.

### Task 5 — Smoke test

Who will check the main checkout flow?

**Answer:** James.

### Task 6 — Monitoring

What will the team monitor after deployment?

**Answer:** Checkout errors and payment failures.

### Task 7 — Rollback trigger

What would trigger a rollback?

**Answer:** A significant increase in the error rate.

### Task 8 — Database rollback

Does the database migration need to be rolled back?

**Answer:** No. The migration is backward compatible.

### Task 9 — Final release condition

When will the team consider the release complete?

**Answer:** After the smoke test passes.

---

## 14. Speaking Patterns

### Confirm deployment readiness

> Are we still good to deploy?

> Has QA signed off?

> Is everything ready on the production side?

### Explain deployment steps

> I'll deploy the code first.

> Then I'll run the migration.

> After that, I'll clear the cache.

### Discuss risk

> There's one thing I'd like to double-check.

> Anything we should watch out for?

> The main risk is...

> I'd like to monitor...

### Discuss rollback

> What's the rollback plan?

> What would trigger a rollback?

> We can revert the deployment if necessary.

> The migration is backward compatible.

### Post-deployment

> Can we run a quick smoke test?

> Let's monitor it for a few minutes.

> I'll keep an eye on the error rate.

> Once the smoke test passes, we're good.

---

## 15. Speaking Task

### Scenario

You are the **Developer responsible for deployment**.

Your team is preparing to deploy a new checkout release.

The release contains:

- checkout code changes
- a small database migration
- configuration changes
- no indexer changes

Before deployment, the PM asks:

> “Are we still good to deploy?”

Then:

> “What's the deployment plan?”

Then:

> “What would trigger a rollback?”

Then:

> “What are you going to check after deployment?”

Answer each question naturally.

### Challenge

Do not answer with isolated sentences.

Try to connect your answer:

> **Readiness → Deployment steps → Risk → Monitoring → Rollback → Verification**

---

## 16. AI Role-play Scenario

### Role

**You:** Developer responsible for production deployment  
**AI:** Tech Lead / Project Manager

The release has passed QA.

The AI should run a realistic deployment meeting and ask about:

- release scope
- deployment order
- database migration
- cache
- configuration
- dependencies
- smoke test
- monitoring
- rollback
- release timing

The AI should introduce one unexpected concern during the meeting, for example:

> “Wait, are we sure the production configuration has the same timeout value?”

You must respond naturally, investigate the concern, and decide whether the deployment should continue.

### Role-play success goal

Complete:

> **Ready → Plan → Risk → Deploy → Verify → Monitor → Rollback Decision → Release Complete**

---

## 17. Quizlet Content

### Vocabulary

```text
deploy — triển khai
deployment — quá trình triển khai
production — môi trường production
release — bản release / phát hành
release window — khoảng thời gian release
rollback — quay lại phiên bản trước
migration — migration database
configuration change — thay đổi cấu hình
pre-check — kiểm tra trước deployment
smoke test — kiểm tra nhanh sau deployment
monitor — theo dõi
release scope — phạm vi release
dependency — thành phần phụ thuộc
downtime — thời gian hệ thống gián đoạn
restore — khôi phục
verify — xác minh
stable — ổn định
production issue — vấn đề trên production
```

### Business Meeting Patterns

```text
Are we still good to deploy?

Has QA signed off on this build?

Are there any last-minute issues?

What's the deployment plan?

How long do you expect the deployment to take?

Anything we should watch out for?

What's the rollback plan?

What would trigger a rollback?

Can we run a quick smoke test?

Let's monitor it for a few minutes.

Can you verify the main customer flow?

Let's make sure everything is stable.

I'll let you know if anything changes.
```

### IT Expressions

```text
The code is ready from the backend side.

There's one configuration change I want to double-check.

I'll deploy the code first.

Then I'll run the database migration.

We shouldn't need a full reindex.

The payment API is responding normally.

I'd like to monitor checkout errors.

I'll revert the deployment to the previous version.

The migration is backward compatible.

We can revert the code without reverting the database.

The smoke test needs to pass.

We'll consider the release complete after verification.
```

---

## 18. Personal Discovery

Pay special attention to phrases that may be difficult to catch in natural speech:

- **Are we still good to deploy?**
- **As far as QA is concerned...**
- **There's one configuration change that I want to double-check, though.**
- **Good catch.**
- **What's the deployment plan?**
- **Anything we should watch out for?**
- **What would trigger a rollback?**
- **If we see a spike...**
- **assuming the config check is fine**
- **Will do.**
- **Let's keep an eye on it.**

These are good candidates for your Personal Quizlet if they cause listening difficulty.

---

## 19. Completion Checklist

- [ ] I can follow a production deployment discussion.
- [ ] I can understand a deployment plan.
- [ ] I can discuss configuration and migration dependencies.
- [ ] I can understand smoke-test instructions.
- [ ] I can discuss production monitoring.
- [ ] I can explain a rollback condition.
- [ ] I understand backward-compatible migration in this context.
- [ ] I can give a deployment ETA.
- [ ] I can respond to an unexpected deployment concern.
- [ ] I can discuss when a release is considered complete.

---

## 20. Success Criteria

You successfully complete Lesson 14 when you can follow:

```text
Release Scope
      ↓
Pre-check
      ↓
Deployment Plan
      ↓
Production Deployment
      ↓
Smoke Test
      ↓
Monitoring
      ↓
Risk / Issue
      ↓
Rollback or Continue
      ↓
Release Complete
```

### Core Skill

> **A deployment meeting is not only about deploying code. It's about controlling risk before, during, and after production deployment.**

---

## 21. Audio Production

Each lesson has exactly **one MP3**.

For Lesson 14:

- **James** — male Tech Lead
- **David** — male Backend Developer
- **Sarah** — female Project Manager

Audio requirements:

- **Level 3**
- **150–165 WPM**
- **20–26 turns**
- 3 speakers
- frequent natural contractions
- connected speech
- occasional hesitation / self-correction
- medium context noise
- occasional interruption
- deployment planning + risk discussion
- realistic production terminology

If TTS generation requires multiple chunks, merge them into **one final MP3**.

---

## 22. `script_tts.txt`

```text
James: Alright, before we start, are we still good to deploy the checkout release tonight?
Sarah: As far as QA is concerned, yes. Emily signed off on the latest staging build this morning.
David: Okay. From the backend side, the code is ready. There's one configuration change that I want to double-check, though.
James: Which one?
David: The new checkout timeout value. It's currently set differently in staging and production.
Sarah: Is that expected, or do we need to change the production value?
David: It's intentional, but I want to make sure the production value is approved before we deploy.
James: Good catch. Can you confirm the expected value before the release window?
David: Yeah, I'll check the deployment config and confirm it with the client team.
Sarah: How long will that take?
David: Probably ten minutes. Everything else should be ready.
James: Okay. What's the deployment plan after that?
David: I'll deploy the code first, then run the database migration and clear the application cache.
James: Do we need to reindex anything?
David: No new indexer changes in this release, so we shouldn't need a full reindex.
Sarah: And who's doing the smoke test?
James: David can verify the backend health, and I'll run through the main checkout flow.
David: Sounds good. We should also check that the payment API is responding normally.
Sarah: Right. Anything else we should watch out for?
David: The first few minutes after deployment are the main risk. I'd like to monitor checkout errors and payment failures.
James: Agreed. What's the rollback plan if we see a spike?
David: If the error rate increases significantly, I'll revert the deployment to the previous version.
Sarah: Would we need to roll back the database migration too?
David: Not for this change. The migration is backward compatible, so we can revert the code without reverting the database.
James: Good. That makes the rollback safer.
Sarah: Okay. Let's say the deployment takes twenty minutes. Are we still on track for the release window?
David: Yeah, assuming the config check is fine, we should be done around eight-thirty.
James: Perfect. Just let us know if anything changes before you start.
David: Will do. I'll confirm the config first and post an update in the release channel.
Sarah: Great. Once the smoke test passes, we'll consider the release complete.
James: Sounds good. Let's keep an eye on it for the first fifteen minutes.
```
