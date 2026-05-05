# JMSS Practice Suite — Complete Package (Phase 1 + 2 + 3)

This package combines:
- **Phase 1**: stable Next.js App Router scaffold
- **Phase 2**: Supabase Auth + middleware route protection
- **Phase 3**: student trial tests, released full tests, in-test answer checking, and answer locking

## Included in this package
- Correct `/student/*` and `/admin/*` routes
- Supabase browser/server/middleware auth clients
- Login form wired to Supabase email/password sign-in
- Logout route
- Role-aware server-side route guards
- Two **trial tests** (15 minutes each)
- Released full tests and locked full tests
- Student test runner with:
  - timer
  - answer submission
  - `Check Answer`
  - answer locking after check
  - immediate reveal of correct answer / model answer
- Student and admin dashboards
- API placeholders for tests, attempts, and AI feedback
- `supabase/profiles.sql` for profiles + roles bootstrap
- Student User Guide and Admin User Guide under `docs/`
- Legacy compatibility component: `src/components/JMSSPracticeSuite.tsx`

## Setup
1. Unzip this package into a fresh folder.
2. Run:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and fill in the Supabase values.
4. In Supabase SQL Editor, run the contents of:
   ```text
   supabase/profiles.sql
   ```
5. If needed, promote your admin user:
   ```sql
   update public.profiles set role = 'admin' where email = 'your-admin-email@example.com';
   ```
6. Start the app:
   ```bash
   npm run dev
   ```
7. Open:
   ```text
   http://localhost:3000
   ```

## URLs
- `/login`
- `/student/dashboard`
- `/student/tests/[testId]`
- `/student/attempts/[attemptId]`
- `/admin/dashboard`
- `/admin/tests`
- `/admin/attempts`
- `/admin/attempts/[attemptId]`

## Current scope
This is a stable package for the scaffold + auth + rich student test flow.
What is still placeholder-only:
- real database-backed tests
- real database-backed attempts
- persistent answer lock state
- AI-generated summaries and writing evaluation
