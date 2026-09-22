# LESSON 11 — Git / GitHub

## 1. Overview

- **Target Level:** Level 2
- **Target WPM:** 140–155
- **Turn length:** 12–22 words
- **Turns:** 18–22
- **Characters:** 3
- **IT Context:** Git / GitHub / Branches / Pull Requests / Merge Conflicts
- **Meeting type:** Development sync / Git discussion

### Main Goal

Practice listening and speaking when Developers discuss branches, Pull Requests, merge conflicts, commits, and code integration.

The goal is not simply to know Git commands. You need to understand what teammates mean when they discuss the state of a branch, ask someone to rebase, explain a conflict, or decide whether a PR is ready to merge.

Core flow:

> **Branch Status → Problem → Clarify → Technical Action → Verification → Merge**

---

## 2. Situation

David is working on a checkout feature in his own branch.

The feature is almost ready, but the branch is behind `develop`.

Another developer has changed some of the same checkout files, so David expects a merge conflict when he updates his branch.

James, the Tech Lead, wants David to:

- update the branch
- resolve any conflicts
- run the relevant tests
- push the changes
- update the Pull Request
- let the team know when it is ready for review

Sarah, the Project Manager, also wants to know whether this will affect the timeline.

The Developer needs to communicate clearly instead of simply saying:

> “There is a conflict.”

He should explain what is affected, what he will do, and when the PR should be ready.

---

## 3. IT Context

### Current Git situation

```text
develop
   │
   ├── New checkout changes
   │
   └── Other developer changes
            ↓
      Same files changed
            ↓
       Merge conflict
```

David's branch:

```text
feature/checkout-validation
```

Target branch:

```text
develop
```

Possible workflow:

```text
Update branch
    ↓
Rebase / Merge develop
    ↓
Resolve conflicts
    ↓
Run tests
    ↓
Push changes
    ↓
Update PR
    ↓
Review
    ↓
Merge
```

### Technical topics

- branch
- commit
- push
- pull
- rebase
- merge
- merge conflict
- resolve conflicts
- remote branch
- Pull Request
- review
- up to date
- behind / ahead
- force push
- test after conflict resolution

---

## 4. Learning Objectives

### Listening

By the end of this lesson, you should be able to:

- understand common Git/GitHub discussion in meetings
- recognize whether a branch is ahead or behind
- understand when someone mentions a merge conflict
- follow a discussion about rebase vs merge
- understand what action a Developer needs to take
- identify when a PR is ready for review or merge

### Speaking

You should be able to:

- explain the current state of your branch
- say that your branch is behind `develop`
- explain a merge conflict
- ask which Git approach the team prefers
- explain what you will do next
- communicate whether the PR is ready
- give a timeline for resolving a Git issue

---

## 5. Key Vocabulary

| Word / Phrase | Meaning |
|---|---|
| branch | nhánh Git |
| commit | commit / thay đổi được lưu vào Git |
| push | đẩy code lên remote |
| pull | lấy thay đổi từ remote |
| rebase | đưa commit của branch lên trên base mới |
| merge | hợp nhất branch |
| merge conflict | xung đột khi merge |
| resolve a conflict | xử lý xung đột |
| remote branch | branch trên remote repository |
| Pull Request / PR | yêu cầu review và merge code |
| ahead | đi trước |
| behind | đi sau |
| up to date | đã cập nhật mới nhất |
| local branch | branch local |
| force push | push ghi đè lịch sử remote |
| cherry-pick | lấy một commit cụ thể sang branch khác |
| stale branch | branch đã cũ / chưa cập nhật |
| sync | đồng bộ |
| base branch | branch đích của PR |
| source branch | branch chứa code của PR |

---

## 6. Business Meeting Patterns

### Describing branch status

> **My branch is behind develop.**

Branch của tôi đang chậm hơn `develop`.

> **I'm a few commits behind develop.**

Tôi đang chậm hơn develop vài commit.

> **My branch is up to date now.**

Branch của tôi đã được cập nhật.

> **I've pushed the latest changes.**

Tôi đã push những thay đổi mới nhất.

### Talking about conflicts

> **I'm getting a merge conflict in the checkout files.**

> **There are conflicts in two files.**

> **I've resolved the conflicts locally.**

> **I need to update my branch first.**

---

## 7. Rebase vs Merge

In real development meetings, teammates may discuss whether to **rebase** or **merge**.

### Rebase

> **I'll rebase my branch onto develop.**

### Merge

> **I can merge develop into my branch.**

### Asking for the team's preference

> **Do you want me to rebase or merge develop?**

> **Which approach do we normally use here?**

> **Is it okay if I rebase the branch?**

Do not assume the answer is always the same. Team workflow and repository rules matter.

---

## 8. Explaining a Merge Conflict

A useful structure:

```text
Where?
↓
What changed?
↓
Why is there a conflict?
↓
What will I do?
↓
How will I verify it?
```

Example:

> **The conflict is in the checkout controller because both branches changed the same section.**

Then:

> **I'll resolve it locally and run the checkout tests before pushing.**

This is much more useful in a meeting than simply saying:

> “I have a conflict.”

---

## 9. Natural Meeting English

| Textbook English | Natural Meeting English |
|---|---|
| My branch is not synchronized with develop. | My branch is behind develop. |
| I will synchronize my branch. | I'll update my branch. |
| There is a merge conflict. | I'm getting a conflict. |
| I will resolve the conflict. | I'll sort out the conflict. |
| Please tell me whether I should rebase. | Do you want me to rebase? |
| The Pull Request is ready for review. | The PR is ready for review. |
| I have uploaded the latest code. | I've pushed the latest changes. |
| I will check the code after merging. | I'll run the tests after I merge. |
| I need to update my local branch. | I need to pull the latest changes. |

---

## 10. Natural / Reduced Speech

### 1. I'm getting

> **I'm getting a merge conflict.**

Recognize **I'm getting** as one connected chunk.

### 2. I've pushed

> **I've pushed the latest changes.**

The contraction **I've** may be easy to miss in fast speech.

### 3. Do you want me to

> **Do you want me to rebase the branch?**

In natural speech, this can sound like one continuous phrase rather than clearly separated words.

### 4. We need to

> **We need to update the branch first.**

Listen for the whole chunk **need to**, not each word separately.

### 5. I'm not sure if

> **I'm not sure if the conflict will affect the tests.**

This is useful when communicating uncertainty.

### 6. Let me

> **Let me check the branch first.**

In meetings, **let me** is commonly reduced and connected.

---

## 11. Realistic Conversation

### Characters

- **James** — Tech Lead
- **David** — Developer
- **Sarah** — Project Manager

### Conversation

**James:** Hey David, how's the checkout PR coming along?

**David:** Pretty good. The feature is done, but my branch is behind develop.

**James:** How far behind are you?

**David:** About six commits. I also noticed that two of the checkout files have changed on develop.

**James:** Okay. Do you expect any conflicts?

**David:** Yeah, probably. Both branches changed the checkout controller.

**James:** Got it. Do you want to rebase the branch onto develop?

**David:** Yeah, I think that's the better option here. Is that okay with you?

**James:** Yep. Just make sure you run the tests after resolving the conflicts.

**David:** Sure. I'll rebase first, resolve the conflicts locally, and run the checkout tests.

**Sarah:** How much time do you think that will take?

**David:** Probably an hour or so, assuming there aren't any unexpected conflicts.

**Sarah:** Okay. Does that put the PR at risk for today's review?

**David:** I don't think so. I should be able to update the PR this afternoon.

**James:** Sounds good. One thing to watch out for is the frontend changes in the same flow.

**David:** Right. I'll check those after I resolve the backend conflict.

**James:** Perfect. And don't force-push unless you're sure the branch is only yours.

**David:** Got it. It's my feature branch, so that should be fine.

**Sarah:** Okay. Let us know once it's ready for review.

**David:** Sure. I'll post an update in the PR when the tests pass.

**James:** Great.

---

## 12. Transcript

```text
James: Hey David, how's the checkout PR coming along?
David: Pretty good. The feature is done, but my branch is behind develop.
James: How far behind are you?
David: About six commits. I also noticed that two of the checkout files have changed on develop.
James: Okay. Do you expect any conflicts?
David: Yeah, probably. Both branches changed the checkout controller.
James: Got it. Do you want to rebase the branch onto develop?
David: Yeah, I think that's the better option here. Is that okay with you?
James: Yep. Just make sure you run the tests after resolving the conflicts.
David: Sure. I'll rebase first, resolve the conflicts locally, and run the checkout tests.
Sarah: How much time do you think that will take?
David: Probably an hour or so, assuming there aren't any unexpected conflicts.
Sarah: Okay. Does that put the PR at risk for today's review?
David: I don't think so. I should be able to update the PR this afternoon.
James: Sounds good. One thing to watch out for is the frontend changes in the same flow.
David: Right. I'll check those after I resolve the backend conflict.
James: Perfect. And don't force-push unless you're sure the branch is only yours.
David: Got it. It's my feature branch, so that should be fine.
Sarah: Okay. Let us know once it's ready for review.
David: Sure. I'll post an update in the PR when the tests pass.
James: Great.
```

---

## 13. Listening Tasks

### Task 1 — Branch Status

How is David's branch?

A. Ahead of develop  
B. Up to date  
C. Behind develop  
D. Deleted

**Answer: C**

---

### Task 2 — How far behind?

How many commits behind is David?

**Answer:** About six commits.

---

### Task 3 — Why is there likely to be a conflict?

**Answer:**

Both branches changed the checkout controller.

---

### Task 4 — What Git action will David take?

**Answer:**

He will rebase his branch onto `develop`.

---

### Task 5 — What should David do after resolving the conflicts?

**Answer:**

Run the checkout tests.

---

### Task 6 — Timeline

When does David expect to update the PR?

**Answer:**

This afternoon.

---

### Task 7 — Important Git warning

What does James say about force-pushing?

**Answer:**

Don't force-push unless you're sure the branch is only yours.

---

## 14. Speaking Patterns

### Describe branch status

> My branch is behind develop.

> I'm about six commits behind.

> I've already pulled the latest changes.

> My branch is up to date now.

### Explain a conflict

> I'm getting a conflict in the checkout controller.

> Both branches changed the same section.

> There are conflicts in two files.

### Explain your action

> I'll rebase onto develop.

> I'll resolve the conflicts locally.

> I'll run the tests before pushing.

### Ask for confirmation

> Do you want me to rebase?

> Is it okay if I rebase the branch?

> Which approach do we normally use here?

### Give an estimate

> It should take about an hour.

> I should have it ready this afternoon.

> Assuming there aren't any unexpected conflicts, I should be done today.

### Confirm completion

> I've pushed the latest changes.

> The tests are passing.

> The PR is ready for review.

---

## 15. Speaking Task

### Scenario

You are the Developer.

Your feature branch is **eight commits behind `develop`**.

After updating the branch, you find conflicts in:

- `Checkout.php`
- `DiscountValidator.php`

Your task is to explain the situation to your Tech Lead.

You should communicate:

1. branch status
2. affected files
3. why there is a conflict
4. whether you will rebase or merge
5. what you will do after resolving it
6. estimated completion time

### Suggested structure

```text
Branch status
↓
Conflict
↓
Cause
↓
Git action
↓
Testing
↓
Estimate
```

---

## 16. AI Role-play Scenario

### Role

**You:** Developer  
**AI:** Tech Lead

The AI has noticed that your Pull Request is behind the base branch.

The AI should ask questions such as:

- How far behind is your branch?
- Which files have conflicts?
- Why do you think the conflict happened?
- Do you want to rebase or merge?
- Have you resolved the conflict?
- Did you run the tests?
- Is the PR ready for review?
- Will this affect the timeline?

The AI may also challenge your choice:

> “Why do you want to rebase instead of merging?”

You should explain your reasoning instead of giving a one-word answer.

### Role-play success goal

Complete the flow:

> **Branch Status → Conflict → Explanation → Git Action → Testing → PR Update**

---

## 17. Quizlet Content

### Vocabulary

```text
branch — nhánh Git
commit — commit / thay đổi được lưu vào Git
push — đẩy code lên remote
pull — lấy thay đổi từ remote
rebase — đưa commit của branch lên trên base mới
merge — hợp nhất branch
merge conflict — xung đột khi merge
resolve a conflict — xử lý xung đột
remote branch — branch trên remote repository
Pull Request / PR — yêu cầu review và merge code
ahead — đi trước
behind — đi sau
up to date — đã cập nhật mới nhất
local branch — branch local
force push — push ghi đè lịch sử remote
cherry-pick — lấy một commit cụ thể sang branch khác
stale branch — branch đã cũ / chưa cập nhật
sync — đồng bộ
base branch — branch đích của PR
source branch — branch chứa code của PR
```

### Business Meeting Patterns

```text
My branch is behind develop.

I'm a few commits behind develop.

My branch is up to date now.

I've pushed the latest changes.

I'm getting a merge conflict.

There are conflicts in two files.

I've resolved the conflicts locally.

I need to update my branch first.

Do you want me to rebase or merge develop?

Which approach do we normally use here?

Is it okay if I rebase the branch?

I'll resolve the conflicts locally and run the tests.

The PR is ready for review.

I'll post an update in the PR.
```

### IT Expressions

```text
Both branches changed the checkout controller.

I'll rebase my branch onto develop.

I'll resolve the conflicts locally.

I'll run the checkout tests before pushing.

I'm about six commits behind.

There aren't any unexpected conflicts.

Don't force-push unless you're sure the branch is only yours.

The tests are passing.

I've pushed the latest changes.
```

---

## 18. Personal Discovery

Use your Personal Quizlet for Git expressions that you cannot recognize immediately in audio.

Pay special attention to:

- **how's the PR coming along?**
- **my branch is behind develop**
- **how far behind are you?**
- **do you expect any conflicts?**
- **rebase the branch onto develop**
- **resolve the conflicts locally**
- **put the PR at risk**
- **one thing to watch out for**
- **force-push**
- **ready for review**

Also record any Git phrase where the spoken form feels much faster or more compressed than the written form.

The goal is:

> **Hear Git/meeting English → recognize the situation immediately → know what response is expected.**

---

## 19. Completion Checklist

- [ ] I understand common Git discussions in meetings.
- [ ] I can describe whether my branch is ahead or behind.
- [ ] I understand “up to date”.
- [ ] I can explain a merge conflict.
- [ ] I can ask about rebase vs merge.
- [ ] I can explain why I chose a Git approach.
- [ ] I can talk about resolving conflicts.
- [ ] I can explain what I will test after a conflict.
- [ ] I can give an estimate for resolving a Git issue.
- [ ] I can say when a PR is ready for review.
- [ ] I understand the warning about force-push.
- [ ] I can participate in a Git discussion without relying completely on a script.

---

## 20. Success Criteria

Lesson 11 is successful when you can hear a Git/GitHub discussion and quickly understand:

```text
What is the branch status?
        ↓
What changed?
        ↓
Where is the conflict?
        ↓
Why did it happen?
        ↓
What Git action will we take?
        ↓
How will we verify it?
        ↓
When is the PR ready?
```

### Core Skill

> **Don't just say “there's a conflict.” Explain the branch state, the impact, the action, and the next step.**

---

## 21. Audio Production

Each lesson has exactly **one MP3**.

For Lesson 11:

- **James** — male Tech Lead
- **David** — male Developer
- **Sarah** — female Project Manager

Audio requirements:

- Level 2
- 140–155 WPM
- 18–22 turns
- 3 speakers
- natural contractions
- moderate connected speech
- realistic pauses
- Git terminology spoken naturally
- realistic follow-up questions

If TTS generation needs multiple chunks, merge them into **one final MP3**.

---

## 22. `script_tts.txt`

```text
James: Hey David, how's the checkout PR coming along?
David: Pretty good. The feature is done, but my branch is behind develop.
James: How far behind are you?
David: About six commits. I also noticed that two of the checkout files have changed on develop.
James: Okay. Do you expect any conflicts?
David: Yeah, probably. Both branches changed the checkout controller.
James: Got it. Do you want to rebase the branch onto develop?
David: Yeah, I think that's the better option here. Is that okay with you?
James: Yep. Just make sure you run the tests after resolving the conflicts.
David: Sure. I'll rebase first, resolve the conflicts locally, and run the checkout tests.
Sarah: How much time do you think that will take?
David: Probably an hour or so, assuming there aren't any unexpected conflicts.
Sarah: Okay. Does that put the PR at risk for today's review?
David: I don't think so. I should be able to update the PR this afternoon.
James: Sounds good. One thing to watch out for is the frontend changes in the same flow.
David: Right. I'll check those after I resolve the backend conflict.
James: Perfect. And don't force-push unless you're sure the branch is only yours.
David: Got it. It's my feature branch, so that should be fine.
Sarah: Okay. Let us know once it's ready for review.
David: Sure. I'll post an update in the PR when the tests pass.
James: Great.
```
