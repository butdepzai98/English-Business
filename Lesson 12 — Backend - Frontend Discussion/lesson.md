# LESSON 12 — Backend / Frontend Discussion

## 1. Overview

- **Target Level:** Level 2
- **Target WPM:** 145–160
- **Turn length:** 14–22 words
- **Turns:** 18–24
- **Characters:** 3
- **IT Context:** Backend / Frontend / API / JSON / Integration
- **Meeting type:** Technical discussion / implementation planning

### Main Goal

Practice listening and speaking when Backend and Frontend Developers discuss how an API should work and how the frontend should consume it.

The goal is not simply to understand technical vocabulary. You need to follow the conversation when developers discuss responsibilities, API responses, data structures, edge cases, loading states, and error handling.

Core flow:

> **Requirement → API Contract → Backend Responsibility → Frontend Handling → Edge Cases → Agreement**

---

## 2. Situation

The team is working on a new product recommendation section for an e-commerce website.

The frontend needs recommendation data from a backend API.

The developers need to agree on:

- what endpoint the frontend will call
- what data the API returns
- which fields are required
- how empty results should be handled
- what happens when the API fails
- which validation belongs to the backend
- when the frontend can start integration

The Backend Developer has a proposed API response, but the Frontend Developer wants to clarify a few details before starting the integration.

---

## 3. IT Context

### Proposed flow

```text
Frontend
   ↓
GET /recommendations
   ↓
Backend
   ↓
Load recommendation data
   ↓
Return JSON response
   ↓
Frontend renders products
```

### Example response

```json
{
  "items": [
    {
      "id": 101,
      "name": "Product A",
      "price": 49.99
    }
  ]
}
```

### Important discussion points

- API endpoint
- request parameters
- JSON response
- required fields
- nullable fields
- empty result
- HTTP error
- loading state
- validation
- backend responsibility
- frontend responsibility
- backward compatibility

The developers should avoid vague statements such as:

> “The API will return the data.”

Instead, they should clarify exactly **what data**, **when**, and **what happens when something goes wrong**.

---

## 4. Learning Objectives

### Listening

By the end of this lesson, you should be able to:

- follow a Backend/Frontend technical discussion
- understand API contract questions
- recognize questions about JSON fields and data types
- understand frontend handling of empty or failed API responses
- identify which side owns a particular responsibility
- follow technical decisions and action items

### Speaking

You should be able to:

- explain what an API returns
- ask about missing or optional fields
- clarify backend/frontend responsibility
- discuss error handling
- discuss edge cases
- explain implementation constraints
- suggest an alternative
- confirm an API contract before development

---

## 5. Key Vocabulary

| Word / Phrase | Meaning |
|---|---|
| endpoint | endpoint / URL API |
| API contract | quy ước giữa frontend và backend |
| request | request / yêu cầu |
| response | response / phản hồi |
| payload | dữ liệu gửi hoặc nhận |
| JSON | định dạng dữ liệu JSON |
| field | trường dữ liệu |
| required field | trường bắt buộc |
| optional field | trường không bắt buộc |
| nullable | có thể nhận giá trị null |
| data type | kiểu dữ liệu |
| empty result | kết quả rỗng |
| error response | response lỗi |
| validation | kiểm tra tính hợp lệ |
| fallback | phương án xử lý thay thế |
| loading state | trạng thái đang tải |
| integration | tích hợp |
| dependency | phụ thuộc |
| backward compatible | tương thích ngược |
| contract | quy ước / giao diện dữ liệu |

---

## 6. Business Meeting Patterns

### Clarifying the API contract

> **What exactly does the API return?**

> **Which fields are required?**

> **Is this field always available?**

> **Can this be null?**

> **What happens if there are no results?**

> **What should the frontend display if the API fails?**

### Clarifying responsibility

> **Should the backend handle that validation?**

> **Is the frontend expected to filter this?**

> **Who should handle this case?**

> **Would you rather handle that on the backend?**

---

## 7. Talking About API Responses

A useful structure:

```text
Endpoint
↓
Request
↓
Response
↓
Fields
↓
Edge cases
```

Example:

> **The frontend will call the recommendations endpoint, and the API will return a list of products.**

Then clarify:

> **The product ID, name, and price are required.**

And:

> **If there are no recommendations, the API will return an empty array.**

This is much clearer than:

> “It returns some product data.”

---

## 8. Discussing Backend vs Frontend Responsibility

One common source of misunderstanding in development teams is unclear ownership.

### Backend

Typically responsible for:

- business rules
- data validation
- authorization
- data retrieval
- API response structure

### Frontend

Typically responsible for:

- displaying data
- UI state
- loading state
- user interaction
- presentation-level validation

However, these responsibilities depend on the project architecture.

Useful meeting phrases:

> **I'd rather keep that validation on the backend.**

> **The frontend can handle the display logic.**

> **The backend should return the final validated data.**

> **We don't need to duplicate that logic on the frontend.**

---

## 9. Discussing Edge Cases

Technical meetings often focus on:

> “What happens if...?”

Useful patterns:

> **What happens if the API returns an empty array?**

> **What if the product is no longer available?**

> **What happens if the request times out?**

> **What should we do if this field is missing?**

> **Do we need a fallback in that case?**

These questions are important because they turn an implementation discussion into an actual API contract.

---

## 10. Natural Meeting English

| Textbook English | Natural Meeting English |
|---|---|
| Please describe the API response. | What does the API return? |
| Which fields are mandatory? | Which fields are required? |
| Is the field allowed to contain null? | Can this be null? |
| What should happen when there are no results? | What happens if there are no results? |
| The backend should perform the validation. | I'd keep that validation on the backend. |
| The frontend should handle the loading state. | The frontend can handle the loading state. |
| We need to discuss the error response. | What do we want to do when the API fails? |
| We need to confirm the API contract. | Let's make sure we're aligned on the API contract. |

---

## 11. Natural / Reduced Speech

### 1. What does the

> **What does the API return?**

In natural speech, **what does the** can become a tightly connected sound group.

### 2. Can this be

> **Can this be null?**

Listen for the complete phrase rather than expecting every word to be pronounced separately.

### 3. What happens if

> **What happens if the API fails?**

This is a common meeting chunk and should become automatic.

### 4. I'd rather

> **I'd rather keep that validation on the backend.**

The contraction **I'd** can be easy to miss.

### 5. We don't need to

> **We don't need to duplicate that logic on the frontend.**

Recognize **don't need to** as a single useful chunk.

### 6. Let's make sure

> **Let's make sure we're aligned on the API contract.**

This is a very common meeting phrase for confirming agreement.

---

## 12. Realistic Conversation

### Characters

- **James** — Tech Lead
- **David** — Backend Developer
- **Emily** — Frontend Developer

### Conversation

**James:** Okay, let's go over the API for the recommendation section before we start integration.

**Emily:** Sure. David, what does the API return exactly?

**David:** It'll return a list of recommended products with the product ID, name, and price.

**Emily:** Okay. Are those fields always available?

**David:** Yes, those three are required. The image URL is optional.

**Emily:** Got it. Can the image URL be null?

**David:** Yeah, it can. If there's no image, the field will be null.

**Emily:** Okay. What happens if there are no recommendations?

**David:** The API will return an empty array.

**Emily:** Perfect. And what happens if the API request fails?

**David:** We'll return a standard error response with the status code and an error message.

**Emily:** Do I need to handle the error code on the frontend?

**David:** Yeah, the frontend should display the fallback state when the request fails.

**Emily:** Okay. What about product availability? Should the frontend filter out unavailable products?

**David:** I'd rather handle that on the backend. The API should only return products that are currently available.

**Emily:** That makes sense. I just wanted to make sure we weren't duplicating the logic.

**James:** Right. Let's keep the business logic on the backend and the display logic on the frontend.

**Emily:** Sounds good. One more thing: do I need to send any parameters with the request?

**David:** Yeah, there's an optional customer ID. If it's not provided, the API will return the default recommendations.

**Emily:** Okay. Is the response structure going to stay the same for both cases?

**David:** Yes. The structure stays the same. Only the items will be different.

**James:** Great. That should make the integration pretty straightforward.

**Emily:** Perfect. I'll start the frontend integration once the endpoint is available on staging.

**David:** I'll push the API changes to staging this afternoon.

**James:** Good. Let's make sure we test both the normal response and the empty result.

**Emily:** Yep, I'll cover those cases on the frontend.

---

## 13. Transcript

```text
James: Okay, let's go over the API for the recommendation section before we start integration.
Emily: Sure. David, what does the API return exactly?
David: It'll return a list of recommended products with the product ID, name, and price.
Emily: Okay. Are those fields always available?
David: Yes, those three are required. The image URL is optional.
Emily: Got it. Can the image URL be null?
David: Yeah, it can. If there's no image, the field will be null.
Emily: Okay. What happens if there are no recommendations?
David: The API will return an empty array.
Emily: Perfect. And what happens if the API request fails?
David: We'll return a standard error response with the status code and an error message.
Emily: Do I need to handle the error code on the frontend?
David: Yeah, the frontend should display the fallback state when the request fails.
Emily: Okay. What about product availability? Should the frontend filter out unavailable products?
David: I'd rather handle that on the backend. The API should only return products that are currently available.
Emily: That makes sense. I just wanted to make sure we weren't duplicating the logic.
James: Right. Let's keep the business logic on the backend and the display logic on the frontend.
Emily: Sounds good. One more thing: do I need to send any parameters with the request?
David: Yeah, there's an optional customer ID. If it's not provided, the API will return the default recommendations.
Emily: Okay. Is the response structure going to stay the same for both cases?
David: Yes. The structure stays the same. Only the items will be different.
James: Great. That should make the integration pretty straightforward.
Emily: Perfect. I'll start the frontend integration once the endpoint is available on staging.
David: I'll push the API changes to staging this afternoon.
James: Good. Let's make sure we test both the normal response and the empty result.
Emily: Yep, I'll cover those cases on the frontend.
```

---

## 14. Listening Tasks

### Task 1 — What does the API return?

A. Only product names  
B. Product ID, name, and price  
C. Product images only  
D. Customer information

**Answer: B**

---

### Task 2 — Optional field

Which field is optional?

**Answer:** The image URL.

---

### Task 3 — Null value

Can the image URL be null?

**Answer:** Yes.

---

### Task 4 — Empty result

What does the API return if there are no recommendations?

**Answer:** An empty array.

---

### Task 5 — API failure

What should the frontend do when the API request fails?

**Answer:** Display the fallback state.

---

### Task 6 — Product availability

Where should unavailable products be filtered?

**Answer:** On the backend.

---

### Task 7 — Request parameter

What optional parameter can the frontend send?

**Answer:** Customer ID.

---

### Task 8 — Final action

What will David do?

**Answer:** Push the API changes to staging that afternoon.

What will Emily do?

**Answer:** Start frontend integration and cover the normal and empty-result cases.

---

## 15. Speaking Patterns

### Ask about API data

> What does the API return?

> Which fields are required?

> Can this be null?

> Is this field always available?

### Ask about edge cases

> What happens if there are no results?

> What happens if the request fails?

> What if this field is missing?

### Discuss responsibility

> I'd rather handle that on the backend.

> The frontend can handle the display logic.

> We don't need to duplicate that logic.

### Confirm the contract

> So the response structure stays the same, right?

> Just to confirm, the image URL can be null?

> So the backend handles availability, and the frontend handles the display?

### Confirm action

> I'll start the integration once the endpoint is available.

> I'll push the API changes to staging this afternoon.

> I'll cover the empty-result case.

---

## 16. Speaking Task

### Scenario

You are the **Backend Developer**.

The Frontend Developer asks you about a new API for a product listing.

The API should:

- return product ID, name, price, and stock status
- allow an optional category parameter
- return an empty array when there are no products
- return an error response if the request fails
- only return active products

The Frontend Developer asks:

> “What happens if there are no products?”

Then:

> “Should I filter out inactive products on the frontend?”

Then:

> “Is the category parameter required?”

You should answer naturally and clarify the API contract.

### Speaking challenge

Do not answer each question with only:

> “Yes.”

or:

> “No.”

Give enough context for the other developer to implement the integration correctly.

---

## 17. AI Role-play Scenario

### Role

**You:** Backend Developer  
**AI:** Frontend Developer

You are discussing a new API before implementation starts.

The AI should ask questions about:

- endpoint
- request parameters
- JSON fields
- required vs optional fields
- null values
- empty results
- API errors
- product availability
- frontend/backend responsibility
- staging availability

The AI may challenge your design:

> “Why don't we just filter the products on the frontend?”

You should explain the technical reason and discuss the trade-off.

### Role-play success goal

Complete the flow:

> **Requirement → API Contract → Responsibility → Edge Cases → Agreement → Integration**

---

## 18. Quizlet Content

### Vocabulary

```text
endpoint — endpoint / URL API
API contract — quy ước giữa frontend và backend
request — request / yêu cầu
response — response / phản hồi
payload — dữ liệu gửi hoặc nhận
JSON — định dạng dữ liệu JSON
field — trường dữ liệu
required field — trường bắt buộc
optional field — trường không bắt buộc
nullable — có thể nhận giá trị null
data type — kiểu dữ liệu
empty result — kết quả rỗng
error response — response lỗi
validation — kiểm tra tính hợp lệ
fallback — phương án xử lý thay thế
loading state — trạng thái đang tải
integration — tích hợp
dependency — phụ thuộc
backward compatible — tương thích ngược
contract — quy ước / giao diện dữ liệu
```

### Business Meeting Patterns

```text
What does the API return exactly?

Which fields are required?

Is this field always available?

Can this be null?

What happens if there are no results?

What happens if the API request fails?

Should the backend handle that validation?

Is the frontend expected to filter this?

Who should handle this case?

I'd rather handle that on the backend.

Let's keep the business logic on the backend.

The frontend can handle the display logic.

Let's make sure we're aligned on the API contract.

Just to confirm, ...
```

### IT Expressions

```text
The API will return a list of recommended products.

The image URL is optional.

The field can be null.

The API will return an empty array.

We'll return a standard error response.

The frontend should display the fallback state.

The API should only return products that are currently available.

There's an optional customer ID.

The response structure stays the same.

I'll push the API changes to staging.
```

---

## 19. Personal Discovery

Use your Personal Quizlet for phrases that are difficult to recognize in audio.

Pay special attention to:

- **what does the API return exactly?**
- **are those fields always available?**
- **can this be null?**
- **what happens if there are no recommendations?**
- **I'd rather handle that on the backend**
- **we weren't duplicating the logic**
- **let's keep the business logic on the backend**
- **if it's not provided**
- **the response structure stays the same**
- **pretty straightforward**

The key question is:

> Can I recognize the technical meaning immediately when a developer says it naturally?

---

## 20. Completion Checklist

- [ ] I can follow a Backend/Frontend technical discussion.
- [ ] I understand basic API contract discussions.
- [ ] I can ask which fields are required.
- [ ] I understand optional and nullable fields.
- [ ] I can discuss empty API responses.
- [ ] I can discuss API errors.
- [ ] I can discuss frontend/backend responsibility.
- [ ] I can ask about edge cases.
- [ ] I can explain what an API returns.
- [ ] I can confirm an API contract.
- [ ] I can discuss staging integration.
- [ ] I can participate in a technical discussion without relying completely on a script.

---

## 21. Success Criteria

Lesson 12 is successful when you can participate in a Backend/Frontend discussion and quickly understand:

```text
What does the API do?
        ↓
What does it receive?
        ↓
What does it return?
        ↓
Which fields are required?
        ↓
What happens in edge cases?
        ↓
Who owns each responsibility?
        ↓
How will frontend integration work?
```

### Core Skill

> **Don't just discuss the API. Make sure both sides have the same understanding of the contract.**

---

## 22. Audio Production

Each lesson has exactly **one MP3**.

For Lesson 12:

- **James** — male Tech Lead
- **David** — male Backend Developer
- **Emily** — female Frontend Developer

Audio requirements:

- Level 2
- 145–160 WPM
- 18–24 turns
- 3 speakers
- natural contractions
- moderate connected speech
- realistic technical follow-up questions
- natural discussion of API behavior and edge cases

If TTS generation needs multiple chunks, merge them into **one final MP3**.

---

## 23. `script_tts.txt`

```text
James: Okay, let's go over the API for the recommendation section before we start integration.
Emily: Sure. David, what does the API return exactly?
David: It'll return a list of recommended products with the product ID, name, and price.
Emily: Okay. Are those fields always available?
David: Yes, those three are required. The image URL is optional.
Emily: Got it. Can the image URL be null?
David: Yeah, it can. If there's no image, the field will be null.
Emily: Okay. What happens if there are no recommendations?
David: The API will return an empty array.
Emily: Perfect. And what happens if the API request fails?
David: We'll return a standard error response with the status code and an error message.
Emily: Do I need to handle the error code on the frontend?
David: Yeah, the frontend should display the fallback state when the request fails.
Emily: Okay. What about product availability? Should the frontend filter out unavailable products?
David: I'd rather handle that on the backend. The API should only return products that are currently available.
Emily: That makes sense. I just wanted to make sure we weren't duplicating the logic.
James: Right. Let's keep the business logic on the backend and the display logic on the frontend.
Emily: Sounds good. One more thing: do I need to send any parameters with the request?
David: Yeah, there's an optional customer ID. If it's not provided, the API will return the default recommendations.
Emily: Okay. Is the response structure going to stay the same for both cases?
David: Yes. The structure stays the same. Only the items will be different.
James: Great. That should make the integration pretty straightforward.
Emily: Perfect. I'll start the frontend integration once the endpoint is available on staging.
David: I'll push the API changes to staging this afternoon.
James: Good. Let's make sure we test both the normal response and the empty result.
Emily: Yep, I'll cover those cases on the frontend.
```
