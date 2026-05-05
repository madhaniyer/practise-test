# Student User Guide

## 1. Logging in
1. Open the app at `http://localhost:3000`.
2. Click **Open login** or go directly to `/login`.
3. Enter your Supabase email and password.
4. After login, you will be taken to the student dashboard if your profile role is `student`.

## 2. Dashboard overview
The student dashboard shows three sections:

### Trial / Sample Tests
- These are short **15-minute** tests.
- They are designed as a low-pressure trial experience.
- In the current package there are **two trial tests**.

### Released Full Tests
- These are the full practice tests currently available.
- Only released full tests can be started.

### Locked Full Tests
- These tests exist but are not yet released by the admin.
- They appear locked and cannot be opened.

## 3. Starting a test
1. Click **Start Trial Test** or **Start Full Test**.
2. The test page opens with a visible timer.
3. Answer each question at your own pace.

## 4. How answering works
### Multiple choice questions
- Click the option you want.
- Your selected option will be highlighted.

### Written questions
- Type your response into the text area.

## 5. Check Answer feature
This is a key learning feature.

### Rules
- You must answer the question first.
- The **Check Answer** button stays disabled until you answer.
- Once you click **Check Answer**:
  - the answer becomes **locked**
  - you **cannot change it anymore**
  - feedback is shown immediately

### What you see after checking
#### For MCQ
- your chosen answer
- the correct answer
- the explanation

#### For written questions
- your response
- the model answer
- rubric tags

## 6. Submitting the test
- Once you finish the test, click **Submit Test**.
- If the timer runs out, the test also ends.
- A summary panel appears showing:
  - MCQ score
  - correct MCQ count
  - written-question count
  - simple guidance on what went well and what to improve

## 7. Important student notes
- After checking an answer, it is locked.
- Locked answers cannot be edited.
- Trial tests are ideal for short, focused practice.
- Full tests are intended to simulate a longer exam experience.
