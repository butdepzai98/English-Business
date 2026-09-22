# Business English for IT Meetings — Architecture & Workflow

## 1. Course Mission

> **Don’t learn English for meetings. Train until you can actually function in an English meeting.**

The course is designed for Web Developers who already have a fairly good English foundation, especially grammar and vocabulary, but struggle with **real-time listening and speaking in Business / IT meetings**.

The focus is not beginner English or textbook English.

The focus is:

- Understanding natural spoken English in real time.
- Recognizing common Business / IT meeting patterns immediately.
- Handling connected and reduced speech.
- Understanding shortened / informal workplace expressions.
- Responding naturally in meetings.
- Building confidence through realistic Web Development meeting scenarios.

---

## 2. Target Learner

The learner:

- Has a good foundation in English grammar.
- Knows a reasonable amount of vocabulary.
- Can understand written English better than spoken English.
- Has difficulty understanding English when people speak naturally in meetings.
- May need subtitles/transcripts to fully understand spoken English.
- Needs English specifically for **IT / Web Development business meetings**.

The course therefore trains:

```text
Sound
  ↓
Word recognition
  ↓
Phrase / pattern recognition
  ↓
Context understanding
  ↓
Meaning
  ↓
Response
```

The target is not:

> “I know this sentence.”

The target is:

> “When they say this in a meeting, I recognize it immediately and know how to respond.”

---

## 3. IT Scope

The course should stay closely connected to real Web Development work.

Core topics include:

- Backend
- Frontend
- Git / GitHub
- Bug / QA / Testing
- Requirements
- Code Review
- Deployment
- Staging / Production
- Project Management
- Client Communication
- Magento / E-commerce

Magento / E-commerce is an important recurring context because it reflects a realistic Web Development environment.

Possible Magento contexts:

- Configuration
- Indexer
- Cache
- Varnish
- Redis
- OpenSearch
- RabbitMQ
- Modules
- Plugins
- Observers
- Deployment
- Staging / Production
- Client requirements
- Bug investigation

---

## 4. Core Tool Architecture

The course uses different tools for different responsibilities.

```text
ChatGPT
   │
   │ creates lesson
   ↓
Quizlet
   │
   │ course knowledge / review
   ↓
Lesson dialogue
   │
   ↓
script_tts.txt
   │
   ↓
ElevenLabs
   │
   │ multi-speaker audio generation
   ↓
One MP3 per lesson
   │
   ↓
Listening practice
   │
   ↓
Speaking / Role-play
   │
   ↓
Personal discoveries
   │
   ↓
Personal Quizlet
```

### Tool responsibilities

#### ChatGPT

Role:

> **Course Creator / Teacher**

ChatGPT creates:

- Lesson content
- Business patterns
- IT vocabulary
- IT expressions
- Realistic meeting dialogues
- Transcripts
- Listening tasks
- Speaking tasks
- Role-play scenarios
- Quizlet content
- TTS-ready dialogue scripts

#### Quizlet

Role:

> **Course Knowledge Storage / Review**

Structure:

```text
Business English for IT Meetings
│
├── Lesson 01
├── Lesson 02
├── Lesson 03
├── Lesson 04
├── ...
└── Lesson XX
```

Each lesson is a separate Quizlet study set.

The entire course is stored in one Quizlet folder.

#### Personal Quizlet

Role:

> **Personal Discovery / Difficult Items**

The learner manually records things that are difficult or unexpected, such as:

- Unknown vocabulary
- Idioms
- Abbreviations
- Shortened phrases
- Reduced speech
- Unexpected meeting expressions
- Expressions discovered in real meetings
- Phrases the learner personally failed to understand

This is intentionally personal.

#### ElevenLabs

Role:

> **Audio Production**

ElevenLabs converts the TTS-ready dialogue script into the lesson's realistic audio.

The course should use multi-speaker dialogue with recurring characters.

#### YouGlish

Role:

> **Real-world Expression Validation**

YouGlish is not mandatory for every lesson.

Use it when the learner or course creator asks:

> “Does this phrase actually sound natural in real-world English?”

It is a validation tool, not a required step in every lesson.

---

## 5. One Lesson = One Realistic Conversation = One MP3

A fundamental course rule:

> **Each lesson has exactly one MP3 file.**

The MP3 should be:

- One continuous realistic conversation.
- Multi-speaker.
- Based on a realistic IT / Business meeting.
- Not a collection of isolated sentence recordings.

The learner should feel like they are listening to a real project meeting.

---

## 6. Recurring Characters

Characters should recur across the course.

Example cast:

| Character | Role | Voice |
|---|---|---|
| Sarah | Client | Female |
| Michael | Project Manager | Male |
| David | Developer | Male |
| Emily | QA | Female |
| James | Tech Lead | Male |

The exact cast can be changed during Course Blueprint design.

The important principle is:

> **A character keeps the same identity and voice across lessons.**

---

## 7. characters.md

Character configuration should be stored separately.

Example:

```text
# Characters

## Sarah
Role: Client
Gender: Female
Voice ID: <elevenlabs_voice_id>
Speaking style: Calm, professional
Personality: Direct but friendly

## David
Role: Developer
Gender: Male
Voice ID: <elevenlabs_voice_id>
Speaking style: Calm, slightly informal
Personality: Technical, concise
```

The Voice ID should remain stable unless the character is intentionally recast.

---

## 8. Lesson Difficulty Progression

Difficulty must be **measurable**, not based on subjective judgment.

The course uses four levels.

| Metric | Level 1 | Level 2 | Level 3 | Level 4 |
|---|---|---|---|---|
| **WPM** | 110–130 | 130–150 | 150–170 | 170–190 |
| **Words / turn** | 8–15 | 12–20 | 18–30 | 25–40+ |
| **Turns / lesson** | 12–16 | 16–22 | 20–28 | 25–35 |
| **Characters / lesson** | 2 | 2–3 | 3 | 3–4 |
| **Grammar** | Simple present/past, simple sentences | + Present perfect, modal verbs | + Conditional, passive voice, reported speech | Complex multi-clause sentences |
| **Reduced / connected speech** | ~1 occurrence / turn | 2–3 / turn | Frequent + linking | Dense + interruptions + fillers |
| **Context noise** | None | Low | Interruption / topic changes | Multiple speakers, overlap, interruptions |

### Level 1

Build confidence with realistic but relatively clear meeting English.

### Level 2

Move from controlled meeting English toward natural workplace speech.

Add:

- Present perfect
- Modal verbs
- More natural contractions
- More connected speech
- Slightly longer turns
- Occasional off-topic remarks

### Level 3

Handle genuinely natural IT meeting conversations.

Add:

- Conditional sentences
- Passive voice
- Reported speech
- Frequent reduced speech
- Linking
- Interruptions
- Topic changes
- Follow-up questions

### Level 4

Function in difficult, fast, unpredictable real meetings.

Add:

- Complex multi-clause sentences
- Indirect language
- Hedging
- Implicit meaning
- Frequent interruptions
- Fillers
- Overlapping speakers
- Topic shifts
- Fast natural speech

Examples:

- “I was wondering if...”
- “Not to be picky, but...”
- “I’m not sure we necessarily need to...”
- “Would it make sense to...?”

---

## 9. Suggested Level Progression

A suggested course progression:

```text
Lesson 01 ── Level 1
Lesson 02 ── Level 1
Lesson 03 ── Level 1
Lesson 04 ── Level 1
Lesson 05 ── Level 1 / transition
       ↓
Lesson 06+ ─ Level 2
       ↓
Middle course ─ Level 2 → Level 3
       ↓
Lesson 20+ ─ Level 3 → Level 4
       ↓
Final lessons ─ Level 4
```

The exact lesson count and transition points will be finalized in the Course Blueprint.

---

## 10. Target Level Metadata

Every lesson must explicitly declare its target level.

Example:

```yaml
Lesson: 01
Target Level: 1

Target WPM: 110-130
Turn Length: 8-15 words
Turns: 12-16
Characters: 2

Grammar:
  - Simple Present
  - Simple Past

Reduced Speech:
  - Light

Context Noise:
  - None

IT Context:
  - Git / GitHub

Meeting Situation:
  - Daily project update
```

This metadata becomes a **difficulty contract** for ChatGPT.

---

## 11. Objective WPM Quality Control

WPM should be checked after the MP3 has been generated.

Formula:

```text
Actual WPM =
Number of transcript words
--------------------------
Audio duration in minutes
```

Example:

```text
Transcript: 420 words
Audio: 3.0 minutes

Actual WPM = 420 / 3
           = 140 WPM
```

If the target is Level 2:

```text
Target: 130–150 WPM
Actual: 140 WPM

→ PASS
```

If:

```text
Target: 130–150 WPM
Actual: 165 WPM

→ ADJUST
```

Possible adjustments:

- Change voice speed settings.
- Add pacing guidance.
- Modify dialogue structure.
- Regenerate the audio.

WPM is therefore a **quality-control metric**.

---

## 12. Lesson Content vs Audio Production Script

A critical architectural rule:

> The full lesson document and the audio production script are separate artifacts.

Do not send the complete `lesson.md` directly to ElevenLabs.

The lesson produces two outputs:

```text
lesson.md
script_tts.txt
```

---

## 13. lesson.md

`lesson.md` is the complete human-readable lesson.

It may contain:

```text
LESSON XX

Target Level
Situation
IT Context
Learning Objectives

Key Vocabulary
Business Patterns
IT Expressions
Natural / Reduced Speech

Realistic Conversation
Transcript

Listening Tasks
Speaking Tasks
AI Role-play Scenario

Quizlet Content
```

It is optimized for:

> **Learning and review.**

---

## 14. script_tts.txt

`script_tts.txt` is a production-ready dialogue script specifically prepared for ElevenLabs multi-speaker generation.

It should contain only what is needed for audio production.

Example:

```text
Sarah: Hey David, can I get a quick update on the sitemap issue?

David: Sure, give me a sec... [pause] Yeah, I've finished the config and pushed it to staging.

Sarah: Okay. Are we still good for tomorrow?

David: I think so. I— I just need to wrap up testing.

Sarah: Got it. Anything blocking you right now?

David: Not really. QA found one small issue, but I'm looking into it.
```

---

## 15. TTS Script Writing Rules

The TTS script should be optimized for spoken English rather than written English.

Use:

- Contractions
- Sentence fragments
- Natural hesitation
- Repetition
- False starts
- Informal workplace expressions
- Natural pauses
- Spoken rhythm

Examples:

```text
I— I think we're good.

Yeah, give me a sec...

Well, actually...

Right, so...

I mean, we could...
```

Avoid unnecessarily polished written English.

---

## 16. ElevenLabs Audio Tags

ElevenLabs-supported expressive audio tags may be used when they improve realism.

Examples:

```text
[pause]
[sighs]
[laughs]
```

However:

> **Audio tags are contextual, not mandatory.**

Do not add tags mechanically to every dialogue turn.

The goal is:

> Natural workplace conversation.

Not:

> Artificially dramatic acting.

---

## 17. Dialogue Realism

The dialogue should simulate actual IT meetings.

Include naturally when appropriate:

- Short responses
- Clarification
- Follow-up questions
- Hesitation
- Corrections
- Interruptions
- Repetition
- Confirmations
- Disagreement
- Uncertainty
- Requests for updates
- Requests for ETA
- Blockers
- Requirement clarification
- Technical explanations
- Client questions

Useful patterns include:

```text
Can I get an update on this?

Where are we on this one?

Anything blocking you?

Are we still on track?

What's the ETA?

Can you walk me through that?

Could you clarify what you mean?

Are we good to deploy?

Is this ready for staging?

Can we push this to production?
```

---

## 18. Script Length and ElevenLabs Request Limits

A lesson may contain more dialogue than a single ElevenLabs request can safely process.

Therefore:

```text
Full lesson dialogue
        ↓
Split into production blocks
        ↓
ElevenLabs generation
        ↓
Audio chunks
        ↓
Merge in correct order
        ↓
ONE final MP3
```

The learner should still receive:

> **One MP3 per lesson.**

ChatGPT can prepare production blocks such as:

```text
Part 1/3
Part 2/3
Part 3/3
```

Each part must preserve:

- Speaker order
- Character identity
- Dialogue continuity
- Natural pacing
- Correct sequence

The exact chunk size should follow the current ElevenLabs/API constraints at the time of production.

---

## 19. Audio Production Workflow

```text
ChatGPT
   ↓
Generate lesson.md
   ↓
Generate script_tts.txt
   ↓
Check character / voice assignments
   ↓
ElevenLabs
   ↓
Generate audio
   ↓
Merge chunks if necessary
   ↓
One MP3
   ↓
Measure actual WPM
   ↓
Quality check
```

If the result fails the target constraints:

```text
MP3
 ↓
QC failure
 ↓
Adjust pacing / script / voice settings
 ↓
Regenerate
 ↓
QC again
```

Only after passing QC should the MP3 become the official lesson audio.

---

## 20. Listening Training Workflow

The listening process should not be:

```text
Play MP3 → read transcript → finish
```

Instead:

```text
1. Listen without transcript
        ↓
2. Identify what you understand
        ↓
3. Listen again
        ↓
4. Check transcript
        ↓
5. Identify missed phrases
        ↓
6. Listen again
        ↓
7. Shadow / repeat
        ↓
8. Speak independently
```

The goal is to train real-time processing.

---

## 21. Speaking Architecture

Listening is the primary foundation, but every lesson must eventually move toward speaking.

Suggested progression:

```text
Listen
  ↓
Understand
  ↓
Repeat
  ↓
Shadow
  ↓
Controlled response
  ↓
Free response
  ↓
Meeting role-play
```

ChatGPT Voice / AI role-play can simulate:

- Client
- Project Manager
- Developer
- QA
- Tech Lead

The learner should be placed in realistic situations rather than simply asked to read sentences.

---

## 22. Personal Discovery Loop

The learner's real meetings are another source of learning.

```text
Real meeting
     ↓
Learner hears unfamiliar phrase
     ↓
Learner investigates / understands it
     ↓
Add to Personal Quizlet
     ↓
Review later
     ↓
Recognize it next time
```

This creates a closed loop between:

> Course English ↔ Real-world English.

---

## 23. Course Knowledge vs Personal Knowledge

Two types of knowledge must remain conceptually separate.

### Course Knowledge

Created intentionally by ChatGPT.

Examples:

- Lesson vocabulary
- Business patterns
- IT expressions
- Designed dialogue
- Listening exercises

Stored in:

> Course Quizlet folder.

### Personal Discovery

Discovered by the learner.

Examples:

- “I didn't know this phrase.”
- “I heard this shortened expression in a real meeting.”
- “I couldn't recognize this pronunciation.”
- “This phrase confused me.”

Stored in:

> Personal Quizlet study set.

---

## 24. YouGlish Workflow

YouGlish is used only when expression naturalness needs validation.

Example:

```text
ChatGPT:
"Can I have DTN update?"

Learner:
"Is this actually natural English?"

        ↓

YouGlish
        ↓

Check real-world usage
        ↓

Confirm / revise expression
```

It is not necessary to search YouGlish for every vocabulary item.

---

## 25. Closed Learning Loop

The complete learning system is:

```text
                ┌──────────────────┐
                │     ChatGPT      │
                │  Course Creator  │
                └────────┬─────────┘
                         ↓
                    Lesson.md
                         ↓
                    Quizlet Course
                         ↓
                   script_tts.txt
                         ↓
                    ElevenLabs
                         ↓
                       MP3
                         ↓
                    Listening
                         ↓
                    Transcript
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
                 Real-world meeting
                         │
                         └────────────→ New discoveries
```

---

## 26. Suggested Lesson Architecture

Each lesson should follow a consistent structure.

```text
LESSON XX
│
├── Target Level
├── Situation
├── IT Context
├── Learning Objectives
│
├── Key Vocabulary
├── Business Patterns
├── IT Expressions
├── Natural / Reduced Speech
│
├── Realistic Conversation
├── Transcript
│
├── Listening Tasks
├── Speaking Tasks
├── AI Role-play Scenario
│
└── Quizlet Content
```

The realistic conversation is the source for:

```text
Realistic Conversation
        ↓
script_tts.txt
        ↓
One MP3
```

---

## 27. Recommended File Architecture

```text
Business-English-IT-Meetings/
│
├── README.md
│
├── Architecture/
│   └── Business-English-Workflow.md
│
├── Characters/
│   └── characters.md
│
├── Lessons/
│   ├── Lesson-01/
│   │   ├── lesson.md
│   │   └── script_tts.txt
│   │
│   ├── Lesson-02/
│   │   ├── lesson.md
│   │   └── script_tts.txt
│   │
│   └── ...
│
└── Audio/
    ├── Lesson-01.mp3
    ├── Lesson-02.mp3
    └── ...
```

Quizlet remains the external learning/review system.

---

## 28. Course Design Principles

1. **No textbook English** — reflect real workplace communication.
2. **IT first** — teach English through Web Development situations.
3. **Listening before speaking** — recognize natural speech before producing it.
4. **Patterns over isolated vocabulary** — teach reusable meeting patterns.
5. **One lesson, one realistic conversation, one MP3** — keep the learning experience coherent.
6. **Personal knowledge matters** — learner discoveries become part of the system.
7. **Train real-time processing** — Hear → Recognize → Understand → Respond.
8. **Difficulty must be measurable** — Level progression uses explicit metrics.
9. **Audio must be production-ready** — TTS script is intentionally written for speech.
10. **Character identity must be persistent** — stable voices, roles, and personalities.
11. **Every MP3 must pass quality control** — check WPM and target-level constraints.

---

## 29. Final Architecture

```text
                         COURSE BLUEPRINT
                               │
                               ↓
                 Target Level + IT Situation
                               │
                               ↓
                    ┌─────────────────────┐
                    │       ChatGPT       │
                    │    Lesson Creator   │
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    ↓                     ↓
               lesson.md            script_tts.txt
                    │                     │
                    │                     ↓
                    │                ElevenLabs
                    │                     │
                    │                     ↓
                    │                    MP3
                    │                     │
                    │                     ↓
                    │                WPM Check
                    │                     │
                    └──────────┬──────────┘
                               ↓
                         Quality Control
                               │
                         ┌─────┴─────┐
                         ↓           ↓
                       PASS        ADJUST
                         │           │
                         ↓           └──→ Regenerate
                    Course Quizlet
                         │
                         ↓
                     Listening
                         ↓
                     Shadowing
                         ↓
                     Speaking
                         ↓
                    AI Role-play
                         ↓
                 Personal Discovery
                         ↓
                 Personal Quizlet
                         ↓
                    Real Meetings
                         │
                         └────────→ New discoveries
```

---

## 30. Mission Statement

> **Don’t learn English for meetings. Train until you can actually function in an English meeting.**

The system is designed to transform:

```text
"I know English."
```

into:

```text
"I can actually understand and participate in an English IT meeting."
```
