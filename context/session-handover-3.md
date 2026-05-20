# Session Handover — JMSS Practice Suite
## Date: Current session end

---

## CURRENT GIT STATE
- **main branch**: stable, all previous work committed
- **feature/student-performance-dashboard**: active feature branch with student dashboard work
- Last commit on feature branch: `e7318ca` — "Add student performance tracking: searchable student list + per-student dashboard with score trends"

---

## WHAT WAS COMPLETED THIS SESSION

### 1. Student Performance Dashboard (feature branch)
- `/admin/students` — searchable student list with avg score, best score, trend, attempt count
- `/admin/students/[studentId]` — per-student dashboard with:
  - Score history bar chart
  - Performance band (Excellent/Strong/Developing/Needs Work)
  - Consistent strengths and areas to improve (aggregated across all attempts)
  - Full attempt history table with links to attempt detail
- Admin dashboard updated with Students section and live stats
- 5 mock students + 16 mock attempts added to `mock-data.ts`
- All on `feature/student-performance-dashboard` branch — main is untouched

### 2. AI Model Answer at Runtime
- New API route: `/api/ai/model-answer` — generates top-band model answer via GPT-4o-mini
- Test runner detects fallback AR questions (those with placeholder text) and fetches real model answer from AI when student hits "Check Answer"
- Shows "Generating top-band model answer..." while loading
- Committed to main: `beb6802`

### 3. MCQ Bank + Test Files (main branch)
- 560 Y9-10 level MCQs in `jmss-master-bank.ts`
- 147 IC model answers (all complete)
- 75 AR model answers (complete) + 72 AR with AI runtime fallback
- 14 test files regenerated (7 short × 23q, 7 full × 80q)
- TypeScript clean

---

## NEXT STEP AGREED WITH USER

**Replace mock student data with real Supabase data**

The user agreed this is the right next step. Here's exactly what needs to be done:

### Step 1 — Create Supabase `attempts` table
Run this SQL in Supabase SQL Editor:

```sql
create table public.attempts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references public.profiles(id) on delete cascade,
  test_id text not null,
  score integer not null,
  correct_count integer not null,
  total_mcq integer not null,
  started_at timestamptz not null,
  submitted_at timestamptz not null default now(),
  duration_seconds integer not null,
  strengths text[] default '{}',
  improvements text[] default '{}',
  answers jsonb default '{}',
  created_at timestamptz default now()
);

-- RLS policies
alter table public.attempts enable row level security;

-- Students can only see their own attempts
create policy "Students see own attempts"
  on public.attempts for select
  using (student_id = auth.uid());

-- Students can insert their own attempts
create policy "Students insert own attempts"
  on public.attempts for insert
  with check (student_id = auth.uid());

-- Admins can see all attempts
create policy "Admins see all attempts"
  on public.attempts for select
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );
```

### Step 2 — Wire test runner to save attempts on submit
In `src/components/jmss/student/test-runner.tsx`:
- When student clicks "Submit Test", call Supabase to insert a row into `attempts`
- Use the Supabase browser client from `src/lib/auth/browser.ts`
- Calculate score, correctCount, strengths/improvements from answers state

### Step 3 — Replace mock data in admin student list
In `src/components/jmss/admin/student-list.tsx`:
- Replace `mockStudents` with Supabase query: `select * from profiles where role = 'student'`
- Replace `mockAttempts` with Supabase query: `select * from attempts`
- Make the component a server component (remove "use client", use async/await)

### Step 4 — Replace mock data in per-student dashboard
In `src/components/jmss/admin/student-profile.tsx`:
- Replace `mockStudents.find(...)` with Supabase query for the specific student profile
- Replace `mockAttempts.filter(...)` with Supabase query: `select * from attempts where student_id = $studentId`

### Step 5 — Test and merge
- Test on feature branch
- If working, merge `feature/student-performance-dashboard` into `main` via PR on GitHub

---

## RESUME PROMPT

> "Pick up from context/session-handover-3.md. We are on branch feature/student-performance-dashboard. The next step is to replace mock student data with real Supabase data. We need to: 1) Create the attempts table in Supabase (SQL in handover notes), 2) Wire the test runner submit button to save attempts to Supabase, 3) Replace mockStudents and mockAttempts in the admin student list and per-student dashboard with real Supabase queries."

---

## KEY FILES

```
src/components/jmss/admin/student-list.tsx      ← uses mockStudents + mockAttempts → replace with Supabase
src/components/jmss/admin/student-profile.tsx   ← uses mockStudents + mockAttempts → replace with Supabase
src/components/jmss/student/test-runner.tsx     ← needs submit → Supabase insert
src/lib/auth/browser.ts                         ← Supabase browser client (already exists)
src/lib/auth/server.ts                          ← Supabase server client (already exists)
src/lib/tests/mock-data.ts                      ← mockStudents and mockAttempts (to be replaced)
supabase/profiles.sql                           ← existing profiles table schema for reference
```

## BRANCH STRATEGY
- Work continues on: `feature/student-performance-dashboard`
- Do NOT commit to main until Supabase integration is tested
- Merge via GitHub PR when ready
