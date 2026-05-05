# Student User Guide

## Global page actions
Every page includes three actions in the top navigation:
- **Back** → returns to the previous browser page
- **Home** → returns to the landing page
- **Logout** → signs out and returns to the login page

## Logging in
1. Open `http://localhost:3000`.
2. Click **Open login** or go directly to `/login`.
3. Enter your Supabase email and password.
4. After login, if your profile role is `student`, you can use the student pages.

## Dashboard overview
The student dashboard shows:

### Trial / Sample Tests
- Two short **15-minute** tests.
- These are available immediately.
- They are intended as a low-pressure entry point.

### Released Full Tests
- These are the full-length tests currently released to the student.
- If a full test is released, the student can start it.

### Locked Full Tests
- These tests exist in the system but are not yet released.
- They appear locked and cannot be started.

## Starting a test
1. Click **Start Trial Test** or **Start Full Test**.
2. The test opens one question at a time.
3. The top of the screen shows:
   - timer
   - current question number
   - test type

## Answering questions
### Multiple choice
- click an option to select it

### Written
- type your answer into the response area

## Check Answer feature
### Rule
You must answer the question before **Check Answer** becomes active.

### After clicking Check Answer
- the answer becomes **locked**
- it cannot be changed anymore
- immediate feedback appears

### MCQ feedback
- your answer
- correct answer
- explanation

### Written feedback
- your response
- model answer
- rubric tags

## Navigation inside the test
- **Previous Question** → move backward through the test
- **Next Question** → move forward through the test
- **Submit Test** → ends the test and shows the summary

## End-of-test summary
After submission, the test page shows:
- MCQ score
- correct MCQ count
- number of written questions
- simple guidance on what went well and what to improve
