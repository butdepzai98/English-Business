# Business English for IT Meetings — Course Blueprint

## 1. Purpose

This document is the **master specification for the entire course**.

It defines:
- Course progression
- Module structure
- Lesson sequence
- Target difficulty
- Listening progression
- Speaking progression
- IT context
- Meeting objectives
- Lesson-level measurable constraints
- Audio constraints
- Quality-control requirements

Every lesson generated later should follow the corresponding specification in this file.

> **Do not generate lesson difficulty based on intuition. Use this blueprint as the contract.**

---

## 2. Course Mission

> **Don’t learn English for meetings. Train until you can actually function in an English meeting.**

The course trains a Web Developer who already has a reasonably good English foundation but struggles with real-time listening and speaking in Business / IT meetings.

Final capability:

```text
Hear → Recognize → Understand → Think → Respond → Participate
```

---

## 3. Course Structure

**24 Lessons / 6 Modules / 4 Difficulty Levels**

| Module | Lessons | Main Goal | Level |
|---|---:|---|---|
| Module 1 | 01–04 | Survive basic meetings | Level 1 |
| Module 2 | 05–08 | Understand and clarify requirements | Level 1 → 2 |
| Module 3 | 09–12 | Handle technical discussions | Level 2 |
| Module 4 | 13–16 | Discuss delivery and project status | Level 2 → 3 |
| Module 5 | 17–20 | Handle client/team communication | Level 3 → 4 |
| Module 6 | 21–24 | Function in realistic meetings | Level 3 → 4 |

---

## 4. Difficulty Framework

| Metric | Level 1 | Level 2 | Level 3 | Level 4 |
|---|---|---|---|---|
| **WPM** | 110–130 | 130–150 | 150–170 | 170–190 |
| **Words / turn** | 8–15 | 12–20 | 18–30 | 25–40+ |
| **Turns / lesson** | 12–16 | 16–22 | 20–28 | 25–35 |
| **Characters / lesson** | 2 | 2–3 | 3 | 3–4 |
| **Grammar** | Simple present/past | + Present perfect, modal verbs | + Conditionals, passive, reported speech | Complex multi-clause sentences |
| **Reduced / connected speech** | Light | Moderate | Frequent | Dense |
| **Context noise** | None | Low | Medium | High |
| **Interruptions** | None | Rare | Occasional | Frequent |
| **Topic shifts** | None | Rare | Occasional | Frequent |
| **Overlap** | None | None | Limited | Possible / frequent |

Difficulty must be measurable rather than based on subjective judgment.

---

## 5. Lesson-Level Contract

Every lesson must declare:

```yaml
lesson:
title:
module:
target_level:

audio:
  target_wpm:
  turn_length_words:
  turns:
  characters:

it_context:
meeting_type:
meeting_objective:

listening_objective:
speaking_objective:

grammar:
reduced_speech:
context_noise:
```

Optional:

```yaml
vocabulary_focus:
business_patterns:
technical_focus:
interruption_level:
topic_shift_level:
overlap:
role_play_goal:
```

---

# Module 1 — Surviving the Meeting

## Lesson 01 — Daily Stand-up

```yaml
lesson: 01
title: Daily Stand-up
module: 1
target_level: 1

audio:
  target_wpm: 110-130
  turn_length_words: 8-15
  turns: 12-16
  characters: 2

it_context:
  - Web Development
  - Daily task
  - Sprint work

meeting_type:
  - Daily Stand-up

meeting_objective:
  - Give a simple progress update
  - State completed work
  - State current work
  - Mention a blocker

listening_objective:
  - Recognize common stand-up questions
  - Understand basic work-status statements
  - Identify completed versus current work

speaking_objective:
  - Give a short daily update
  - State current work
  - State a simple blocker

grammar:
  - Simple Present
  - Simple Past

reduced_speech: Light
context_noise: None
```

Core patterns:
- What are you working on?
- What did you finish?
- I'm working on...
- I've finished...
- I'm still working on...
- I'm blocked by...

---

## Lesson 02 — Giving a Work Update

```yaml
lesson: 02
title: Giving a Work Update
module: 1
target_level: 1

audio:
  target_wpm: 110-130
  turn_length_words: 8-15
  turns: 12-16
  characters: 2

it_context:
  - Feature development
  - Task tracking
  - Web Development

meeting_type:
  - Project update

meeting_objective:
  - Ask for a task update
  - Explain current progress
  - State remaining work

listening_objective:
  - Recognize update-request patterns
  - Understand progress/status expressions
  - Identify completed versus remaining work

speaking_objective:
  - Give a concise task update
  - Explain what remains
  - State the next step

grammar:
  - Simple Present
  - Simple Past

reduced_speech: Light
context_noise: None
```

Core patterns:
- Can I get an update on this?
- Where are we on this?
- I've finished...
- I'm working on...
- I just need to...

---

## Lesson 03 — Asking for Clarification

```yaml
lesson: 03
title: Asking for Clarification
module: 1
target_level: 1

audio:
  target_wpm: 110-130
  turn_length_words: 8-15
  turns: 12-16
  characters: 2

it_context:
  - Requirements
  - Feature discussion
  - Web Development

meeting_type:
  - Requirement discussion

meeting_objective:
  - Ask for clarification
  - Confirm meaning
  - Avoid misunderstanding

listening_objective:
  - Recognize clarification requests
  - Understand simple explanations
  - Identify corrections and clarifications

speaking_objective:
  - Ask for clarification
  - Confirm understanding
  - Restate a simple requirement

grammar:
  - Simple Present
  - Basic question forms

reduced_speech: Light
context_noise: None
```

Core patterns:
- Could you clarify that?
- What do you mean by...?
- Do you mean...?
- Just to confirm...
- So, you want us to...?

---

## Lesson 04 — Talking About Blockers

```yaml
lesson: 04
title: Talking About Blockers
module: 1
target_level: 1

audio:
  target_wpm: 115-130
  turn_length_words: 8-15
  turns: 12-16
  characters: 2

it_context:
  - Development dependency
  - QA dependency
  - API dependency

meeting_type:
  - Daily project meeting

meeting_objective:
  - Identify blockers
  - Explain why work cannot proceed
  - Discuss the next step

listening_objective:
  - Recognize blocker-related questions
  - Understand dependency statements
  - Identify what prevents progress

speaking_objective:
  - Explain a blocker
  - State what is being waited on
  - Explain what needs to happen next

grammar:
  - Simple Present
  - Simple Past
  - Basic modal verbs

reduced_speech: Light
context_noise: None
```

Core patterns:
- Anything blocking you?
- I'm blocked by...
- I'm waiting for...
- I can't move forward until...
- There's an issue with...

---

# Module 2 — Working With Requirements

## Lesson 05 — Understanding Requirements

```yaml
lesson: 05
title: Understanding Requirements
module: 2
target_level: 1

audio:
  target_wpm: 120-135
  turn_length_words: 10-17
  turns: 14-18
  characters: 2

it_context:
  - Feature requirement
  - E-commerce
  - User flow

meeting_type:
  - Requirement discussion

meeting_objective:
  - Understand a new feature
  - Identify expected behavior
  - Ask basic follow-up questions

listening_objective:
  - Extract the main requirement
  - Identify expected behavior
  - Distinguish requirement from explanation

speaking_objective:
  - Explain what the developer understands
  - Ask a follow-up question
  - Confirm expected behavior

grammar:
  - Simple Present
  - Present Continuous

reduced_speech: Light to moderate
context_noise: Low
```

---

## Lesson 06 — Asking Requirement Questions

```yaml
lesson: 06
title: Asking Requirement Questions
module: 2
target_level: 2

audio:
  target_wpm: 130-145
  turn_length_words: 12-20
  turns: 16-20
  characters: 2

it_context:
  - E-commerce feature
  - Business rules
  - User permissions

meeting_type:
  - Requirement clarification

meeting_objective:
  - Identify missing requirements
  - Ask edge-case questions
  - Clarify expected behavior

listening_objective:
  - Understand conditional requirement questions
  - Follow short business-rule explanations
  - Recognize implied constraints

speaking_objective:
  - Ask requirement questions naturally
  - Raise edge cases
  - Confirm business rules

grammar:
  - Present Perfect
  - Modal verbs
  - Basic conditionals

reduced_speech: Moderate
context_noise: Low
```

---

## Lesson 07 — Discussing Scope & Changes

```yaml
lesson: 07
title: Discussing Scope & Changes
module: 2
target_level: 2

audio:
  target_wpm: 130-145
  turn_length_words: 12-20
  turns: 16-22
  characters: 2-3

it_context:
  - Feature scope
  - Change request
  - Sprint planning

meeting_type:
  - Scope discussion

meeting_objective:
  - Identify whether a request is in scope
  - Explain impact of a change
  - Discuss trade-offs

listening_objective:
  - Recognize scope-related language
  - Understand conditional statements
  - Identify impact on timeline/work

speaking_objective:
  - Explain whether something is in scope
  - Describe change impact
  - Offer an alternative

grammar:
  - Present Perfect
  - Modal verbs
  - Basic conditionals

reduced_speech: Moderate
context_noise: Low
```

---

## Lesson 08 — Confirming Understanding

```yaml
lesson: 08
title: Confirming Understanding
module: 2
target_level: 2

audio:
  target_wpm: 135-150
  turn_length_words: 12-20
  turns: 16-22
  characters: 3

it_context:
  - Client requirement
  - User flow
  - Business rule

meeting_type:
  - Client requirement meeting

meeting_objective:
  - Summarize understanding
  - Resolve ambiguity
  - Confirm next action

listening_objective:
  - Follow a multi-part explanation
  - Identify key requirements
  - Distinguish correction from confirmation

speaking_objective:
  - Summarize a requirement
  - Confirm assumptions
  - Ask for final confirmation

grammar:
  - Present Perfect
  - Modal verbs
  - Basic reported language

reduced_speech: Moderate
context_noise: Low
```

Core patterns:
- So, if I understand correctly...
- Just to make sure we're on the same page...
- What you're saying is...
- Let me confirm one thing...

---

# Module 3 — Technical Discussion

## Lesson 09 — Bugs & QA

```yaml
lesson: 09
title: Bugs & QA
module: 3
target_level: 2

audio:
  target_wpm: 135-150
  turn_length_words: 12-20
  turns: 16-22
  characters: 3

it_context:
  - Bug investigation
  - QA
  - Testing
  - Staging

meeting_type:
  - Bug review

meeting_objective:
  - Describe a bug
  - Explain expected versus actual behavior
  - Discuss a fix and retest

listening_objective:
  - Identify bug symptoms
  - Distinguish expected and actual behavior
  - Follow QA/developer discussion

speaking_objective:
  - Explain a bug
  - Explain a fix
  - Respond to QA questions

grammar:
  - Present Perfect
  - Modal verbs
  - Passive voice introduction

reduced_speech: Moderate
context_noise: Low
```

---

## Lesson 10 — Code Review

```yaml
lesson: 10
title: Code Review
module: 3
target_level: 2

audio:
  target_wpm: 140-150
  turn_length_words: 12-20
  turns: 18-22
  characters: 2-3

it_context:
  - GitHub
  - Pull Request
  - Code Review

meeting_type:
  - Technical discussion

meeting_objective:
  - Explain implementation choices
  - Ask why an approach was used
  - Suggest improvements

listening_objective:
  - Understand technical reasoning
  - Identify questions versus suggestions
  - Follow code-review discussion

speaking_objective:
  - Explain an implementation
  - Defend a technical choice
  - Respond politely to suggestions

grammar:
  - Present Perfect
  - Modal verbs
  - Comparatives

reduced_speech: Moderate
context_noise: Low
```

Core patterns:
- Can you walk me through this?
- Why did you go with this approach?
- I noticed that...
- Would it make sense to...?
- I'm not sure we need this here.

---

## Lesson 11 — Git / GitHub

```yaml
lesson: 11
title: Git / GitHub
module: 3
target_level: 2

audio:
  target_wpm: 140-155
  turn_length_words: 12-22
  turns: 18-22
  characters: 3

it_context:
  - Git
  - GitHub
  - Branches
  - Pull Requests
  - Merge conflicts

meeting_type:
  - Development coordination

meeting_objective:
  - Coordinate branch/PR work
  - Explain a merge conflict
  - Decide whether work can be merged

listening_objective:
  - Recognize Git-related actions
  - Follow technical action sequences
  - Understand integration blockers

speaking_objective:
  - Explain Git status
  - Describe a conflict
  - State the next technical action

grammar:
  - Present Perfect
  - Modal verbs
  - Passive voice

reduced_speech: Moderate
context_noise: Low
```

---

## Lesson 12 — Backend / Frontend Discussion

```yaml
lesson: 12
title: Backend / Frontend Discussion
module: 3
target_level: 2

audio:
  target_wpm: 145-160
  turn_length_words: 14-22
  turns: 18-24
  characters: 3

it_context:
  - Backend
  - Frontend
  - API
  - JSON response
  - Integration

meeting_type:
  - Technical integration meeting

meeting_objective:
  - Explain API behavior
  - Identify frontend/backend mismatch
  - Agree on an implementation change

listening_objective:
  - Follow technical explanations
  - Identify cause versus impact
  - Understand API/data-flow discussion

speaking_objective:
  - Explain an API issue
  - Describe technical impact
  - Suggest a solution

grammar:
  - Present Perfect
  - Passive voice
  - Modal verbs

reduced_speech: Moderate
context_noise: Low to medium
```

---

# Module 4 — Delivery & Project Progress

## Lesson 13 — Staging & Testing

```yaml
lesson: 13
title: Staging & Testing
module: 4
target_level: 2

audio:
  target_wpm: 145-160
  turn_length_words: 14-24
  turns: 18-24
  characters: 3

it_context:
  - Staging
  - QA
  - Testing
  - Release candidate

meeting_type:
  - Pre-release meeting

meeting_objective:
  - Confirm staging status
  - Discuss testing progress
  - Identify remaining issues

listening_objective:
  - Follow multiple status updates
  - Identify unresolved issues
  - Understand testing conclusions

speaking_objective:
  - Report staging status
  - Explain test results
  - Recommend whether to proceed

grammar:
  - Present Perfect
  - Passive voice
  - Modal verbs

reduced_speech: Moderate
context_noise: Medium
```

---

## Lesson 14 — Deployment

```yaml
lesson: 14
title: Deployment
module: 4
target_level: 3

audio:
  target_wpm: 150-165
  turn_length_words: 18-28
  turns: 20-26
  characters: 3

it_context:
  - Deployment
  - Production
  - Release
  - Rollback

meeting_type:
  - Deployment planning

meeting_objective:
  - Decide whether to deploy
  - Discuss release risks
  - Agree on deployment timing

listening_objective:
  - Follow a multi-person technical discussion
  - Identify risks and dependencies
  - Understand conditional statements

speaking_objective:
  - Explain deployment readiness
  - Raise a deployment risk
  - Recommend whether to proceed

grammar:
  - Conditionals
  - Passive voice
  - Modal verbs

reduced_speech: Frequent
context_noise: Medium
interruption_level: Occasional
```

---

## Lesson 15 — ETA / Timeline

```yaml
lesson: 15
title: ETA / Timeline
module: 4
target_level: 3

audio:
  target_wpm: 150-165
  turn_length_words: 18-28
  turns: 20-26
  characters: 3

it_context:
  - Task estimation
  - Sprint timeline
  - QA dependency
  - Delivery

meeting_type:
  - Project planning

meeting_objective:
  - Estimate delivery
  - Discuss schedule risk
  - Negotiate realistic timing

listening_objective:
  - Understand estimates and uncertainty
  - Recognize hedging language
  - Identify commitment versus possibility

speaking_objective:
  - Give an ETA
  - Explain uncertainty
  - Negotiate realistic timing

grammar:
  - Conditionals
  - Modal verbs
  - Future forms
  - Hedging

reduced_speech: Frequent
context_noise: Medium
```

Core patterns:
- What's the ETA?
- Are we still on track?
- We should be able to...
- We might need another day.
- Depending on QA...

---

## Lesson 16 — Project Status

```yaml
lesson: 16
title: Project Status
module: 4
target_level: 3

audio:
  target_wpm: 155-170
  turn_length_words: 18-30
  turns: 22-28
  characters: 3

it_context:
  - Project management
  - Feature delivery
  - QA
  - Deployment

meeting_type:
  - Weekly project status

meeting_objective:
  - Present overall project status
  - Discuss completed/current work
  - Identify risks
  - Confirm next steps

listening_objective:
  - Track multiple project topics
  - Identify status versus risk
  - Follow topic transitions

speaking_objective:
  - Give a structured project update
  - Explain a risk
  - State next steps

grammar:
  - Present Perfect
  - Conditionals
  - Passive voice
  - Reported language

reduced_speech: Frequent
context_noise: Medium
interruption_level: Occasional
topic_shift_level: Occasional
```

---

# Module 5 — Client & Team Communication

## Lesson 17 — Client Questions

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

---

## Lesson 18 — Explaining Technical Issues

```yaml
lesson: 18
title: Explaining Technical Issues
module: 5
target_level: 3

audio:
  target_wpm: 160-170
  turn_length_words: 20-30
  turns: 22-28
  characters: 3

it_context:
  - Production issue
  - Bug
  - Root cause
  - Technical impact

meeting_type:
  - Incident / issue discussion

meeting_objective:
  - Explain what happened
  - Explain why it happened
  - Explain impact
  - Explain resolution

listening_objective:
  - Follow cause-and-effect explanations
  - Identify technical impact
  - Distinguish facts from assumptions

speaking_objective:
  - Explain a technical issue clearly
  - Describe root cause
  - Explain mitigation and next steps

grammar:
  - Passive voice
  - Conditionals
  - Reported language

reduced_speech: Frequent
context_noise: Medium
interruption_level: Occasional
```

---

## Lesson 19 — Disagreement & Negotiation

```yaml
lesson: 19
title: Disagreement & Negotiation
module: 5
target_level: 3

audio:
  target_wpm: 160-170
  turn_length_words: 20-30
  turns: 22-30
  characters: 3

it_context:
  - Feature scope
  - Technical approach
  - Timeline

meeting_type:
  - Client / technical negotiation

meeting_objective:
  - Disagree professionally
  - Explain concerns
  - Offer alternatives
  - Reach agreement

listening_objective:
  - Recognize indirect disagreement
  - Detect hedging
  - Understand implied concerns

speaking_objective:
  - Disagree politely
  - Explain technical concerns
  - Suggest alternatives
  - Negotiate

grammar:
  - Conditionals
  - Modal verbs
  - Hedging
  - Indirect language

reduced_speech: Frequent
context_noise: Medium to high
interruption_level: Occasional
topic_shift_level: Occasional
```

Core patterns:
- I'm not sure that's the best approach.
- I see where you're coming from.
- The concern I have is...
- One thing we should consider is...
- Would it make sense to...?
- That could work, but...

---

## Lesson 20 — Handling Unexpected Questions

```yaml
lesson: 20
title: Handling Unexpected Questions
module: 5
target_level: 3 → 4

audio:
  target_wpm: 165-175
  turn_length_words: 22-32
  turns: 24-30
  characters: 3-4

it_context:
  - Client questions
  - Technical risk
  - Timeline
  - Production

meeting_type:
  - Unpredictable client meeting

meeting_objective:
  - Handle questions without preparation
  - Buy thinking time naturally
  - Avoid overpromising
  - Commit to follow-up when necessary

listening_objective:
  - Understand unexpected questions
  - Identify hidden assumptions
  - Follow rapid follow-up questions

speaking_objective:
  - Respond when unsure
  - Ask for clarification
  - State uncertainty professionally
  - Commit to investigate and follow up

grammar:
  - Conditionals
  - Modal verbs
  - Hedging
  - Indirect language

reduced_speech: Dense
context_noise: High
interruption_level: Frequent
topic_shift_level: Frequent
```

Core patterns:
- Let me think about that for a second.
- I'd need to check that first.
- I'm not sure off the top of my head.
- Let me look into it and get back to you.

---

# Module 6 — Real Meeting Simulation

## Lesson 21 — Multi-topic Meeting

```yaml
lesson: 21
title: Multi-topic Meeting
module: 6
target_level: 3

audio:
  target_wpm: 165-175
  turn_length_words: 20-32
  turns: 24-30
  characters: 3-4

it_context:
  - Bug
  - Requirement
  - Deployment
  - ETA

meeting_type:
  - Weekly project meeting

meeting_objective:
  - Move between multiple topics
  - Maintain context
  - Answer follow-up questions
  - Confirm action items

listening_objective:
  - Track topic changes
  - Identify which issue is being discussed
  - Maintain context across multiple speakers

speaking_objective:
  - Respond without losing context
  - Transition between topics
  - Give concise updates
  - Confirm actions

grammar:
  - Conditionals
  - Passive voice
  - Reported language
  - Hedging

reduced_speech: Dense
context_noise: High
interruption_level: Frequent
topic_shift_level: Frequent
overlap: Limited
```

---

## Lesson 22 — Difficult Client Meeting

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

---

## Lesson 23 — Technical + Business Meeting

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

---

## Lesson 24 — Full Project Meeting

```yaml
lesson: 24
title: Full Project Meeting
module: 6
target_level: 4

audio:
  target_wpm: 175-190
  turn_length_words: 25-40+
  turns: 25-35
  characters: 4

it_context:
  - Project status
  - Requirements
  - Bugs
  - QA
  - Git / GitHub
  - Deployment
  - Staging / Production
  - Timeline
  - Client communication

meeting_type:
  - Full project meeting

meeting_objective:
  - Conduct an end-to-end project discussion
  - Track multiple issues
  - Answer unexpected questions
  - Clarify requirements
  - Explain technical problems
  - Discuss timeline
  - Agree on next steps

listening_objective:
  - Function without predictable topic structure
  - Track multiple speakers and topic changes
  - Understand reduced speech at high speed
  - Interpret indirect and hedged language
  - Recover after interruptions or missed information

speaking_objective:
  - Participate spontaneously
  - Give updates
  - Clarify
  - Explain
  - Disagree politely
  - Negotiate
  - Handle unexpected questions
  - Confirm action items

grammar:
  - Complex multi-clause sentences
  - Conditionals
  - Passive voice
  - Reported language
  - Hedging
  - Indirect language

reduced_speech: Dense
context_noise: Very high
interruption_level: Frequent
topic_shift_level: Frequent
overlap: Frequent
fillers: Frequent
unexpected_questions: Yes
```

---

# 45. Module Skill Progression

## Module 1

```text
Understand questions
→ Give updates
→ Ask questions
→ Explain blockers
```

## Module 2

```text
Understand
→ Question
→ Challenge
→ Confirm
```

## Module 3

```text
Describe
→ Explain
→ Defend
→ Discuss
```

## Module 4

```text
Status
→ Risk
→ Estimate
→ Project-level communication
```

## Module 5

```text
Answer
→ Explain
→ Push back
→ Handle uncertainty
```

## Module 6

```text
Track
→ React
→ Participate
→ Function
```

---

# 46. Listening Progression

Difficulty increases along four dimensions:

```text
                 Listening Load
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
        Speed      Language     Context
                   complexity     noise
          │           │           │
          └───────────┴───────────┘
                      ↓
               Real-time processing
```

The final lessons should be substantially less predictable than the first lessons.

---

# 47. Speaking Progression

```text
L01–L04
Controlled response
        ↓
L05–L08
Guided response
        ↓
L09–L12
Technical explanation
        ↓
L13–L16
Project status communication
        ↓
L17–L20
Interactive communication
        ↓
L21–L24
Full meeting participation
```

---

# 48. Global Audio Rules

Every lesson produces exactly:

```text
1 lesson.md
1 script_tts.txt
1 MP3
```

The MP3 is one continuous realistic multi-speaker conversation.

Do not use isolated sentence recordings as the primary lesson audio.

Recurring characters should retain stable voices and identities.

---

# 49. TTS Script Rules

`script_tts.txt` is production-ready for ElevenLabs.

It should contain:

- Speaker names
- Spoken dialogue
- Natural contractions
- Sentence fragments
- Hesitation
- False starts
- Repetition
- Natural pauses
- Contextual audio tags when useful

Example:

```text
Sarah: Hey David, can I get a quick update on the sitemap issue?

David: Sure, give me a sec... Yeah, I've finished the config and pushed it to staging.

Sarah: Okay. Are we still good for tomorrow?

David: I think so. I— I just need to wrap up testing.
```

Audio tags such as `[pause]`, `[sighs]`, and `[laughs]` are optional and contextual.

Do not add them mechanically.

---

# 50. Production Chunking

If a lesson exceeds the practical input limit for a single ElevenLabs request:

```text
Full script
   ↓
Part 1
Part 2
Part 3
...
   ↓
Generate audio chunks
   ↓
Merge
   ↓
One final MP3
```

Chunking must preserve speaker order, character identity, dialogue sequence, pacing and continuity.

The final learner-facing output remains:

```text
Lesson-XX.mp3
```

---

# 51. Quality Control

Every lesson must pass three QC layers.

## Content QC

```text
[ ] Correct IT context
[ ] Correct meeting situation
[ ] Realistic dialogue
[ ] Useful Business English
[ ] Useful IT English
[ ] Listening objective achieved
[ ] Speaking objective achieved
```

## Difficulty QC

```text
[ ] Target Level correct
[ ] WPM within target
[ ] Turn length within target
[ ] Number of turns within target
[ ] Character count within target
[ ] Grammar appropriate
[ ] Reduced speech appropriate
[ ] Context noise appropriate
```

## Audio QC

```text
[ ] Correct character voices
[ ] Correct speaker order
[ ] No missing dialogue
[ ] Natural pacing
[ ] Natural transitions
[ ] MP3 generated successfully
[ ] Actual WPM measured
```

---

# 52. WPM Validation

After generating audio:

```text
Actual WPM =
Transcript word count
---------------------
Audio duration in minutes
```

Example:

```text
420 words / 3 minutes = 140 WPM
```

Compare the actual result against the lesson target.

If it falls outside the target range:

```text
ADJUST
```

Possible actions:

- Adjust voice speed.
- Adjust pacing.
- Modify script.
- Regenerate audio.

---

# 53. Quizlet Blueprint

One Quizlet folder contains the entire course:

```text
Business English for IT Meetings
│
├── Lesson 01
├── Lesson 02
├── ...
└── Lesson 24
```

Each lesson becomes one study set.

Prioritize:

- Meeting patterns
- Useful IT expressions
- Contextual vocabulary
- Common response patterns
- Difficult spoken forms

Example:

```text
Front:
Anything blocking you?

Back:
Meaning:
Có gì đang cản trở bạn không?

Context:
Daily project meeting

Possible response:
Not really. I'm just waiting for QA.
```

---

# 54. Personal Quizlet

One separate Personal Quizlet study set is maintained by the learner.

Possible entries:

```text
Unknown vocabulary
Unknown idiom
Unexpected phrase
Reduced speech
Abbreviation
Phrase heard in a real meeting
Pronunciation that was difficult to recognize
```

The learner decides what is personally difficult.

---

# 55. YouGlish

YouGlish is an optional validation layer.

Use it when asking:

```text
Is this phrase natural?
Is this how people actually say it?
How does this phrase sound in real speech?
```

Do not make YouGlish mandatory for every lesson.

---

# 56. AI Role-play

Every lesson should have a speaking scenario aligned with its objective.

Examples:

### L01

```text
You are the Developer.
I am the Project Manager.
Ask me for my daily update.
```

### L10

```text
You are reviewing my Pull Request.
Ask me why I chose this implementation.
```

### L19

```text
You are the client.
You want the feature delivered earlier.
I need to negotiate the timeline.
```

### L24

```text
You are the client / PM / QA / Tech Lead.
Run a realistic project meeting.
Do not make the conversation predictable.
Interrupt me occasionally.
Ask follow-up questions.
```

---

# 57. Complete Learning Loop

```text
                  COURSE BLUEPRINT
                         ↓
                      ChatGPT
                         ↓
                  lesson.md
                         ↓
                   Course Quizlet
                         ↓
                 script_tts.txt
                         ↓
                    ElevenLabs
                         ↓
                       MP3
                         ↓
                  Listen without text
                         ↓
                    Listen again
                         ↓
                  Check transcript
                         ↓
                     Shadowing
                         ↓
                      Speaking
                         ↓
                    AI Role-play
                         ↓
                Personal discoveries
                         ↓
                  Personal Quizlet
                         ↓
                       Review
                         ↓
                  Real IT Meetings
                         │
                         └────────→ New discoveries
```

---

# 58. Course Success Criteria

## Listening

The learner should increasingly be able to:

- Recognize common meeting patterns immediately.
- Understand natural reduced speech.
- Follow technical discussion.
- Follow topic changes.
- Understand non-textbook questions.
- Recover after missing part of a sentence.

## Speaking

The learner should increasingly be able to:

- Give updates.
- Explain blockers.
- Ask clarification questions.
- Discuss requirements.
- Explain technical issues.
- Discuss bugs and QA.
- Discuss deployment.
- Give an ETA.
- Explain risks.
- Disagree politely.
- Negotiate.
- Handle unexpected questions.
- Participate in multi-person project meetings.

## Final capability

```text
Hear
  ↓
Understand enough
  ↓
Respond
  ↓
Ask / clarify
  ↓
Explain
  ↓
Negotiate
  ↓
Participate
```

---

# 59. Master Blueprint

```text
24 LESSONS
6 MODULES
4 LEVELS

MODULE 1 — Survive the Meeting
L01–L04
Level 1

MODULE 2 — Requirements
L05–L08
Level 1 → 2

MODULE 3 — Technical Discussion
L09–L12
Level 2

MODULE 4 — Delivery & Status
L13–L16
Level 2 → 3

MODULE 5 — Client Communication
L17–L20
Level 3 → 4

MODULE 6 — Real Meeting Simulation
L21–L24
Level 3 → 4
```

The blueprint is the **master specification** for future lesson generation.

Future workflow:

```text
Course Blueprint
       ↓
Lesson Metadata
       ↓
lesson.md
       +
script_tts.txt
       ↓
ElevenLabs
       ↓
One MP3
       ↓
WPM / Difficulty QC
       ↓
Quizlet
       ↓
Listening
       ↓
Speaking
       ↓
Real Meeting
```

> **The course does not end when the learner knows the English. It succeeds when the learner can function with that English in a real IT meeting.**
