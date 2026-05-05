# JMSS Practice Suite — Comprehensive Phase 1 + Phase 2 Package

This package combines:
- **Phase 1**: corrected Next.js App Router scaffold
- **Phase 2**: Supabase Auth + middleware route protection

It also includes a **legacy compatibility component** named `src/components/JMSSPracticeSuite.tsx` because earlier prototypes referenced that file directly.

## What is included
- Next.js App Router + TypeScript + Tailwind
- Correct `/student/*` and `/admin/*` routes
- Supabase browser/server/middleware auth clients
- Login form wired to Supabase email/password sign-in
- Logout route
- Role-aware server-side route guards
- Mock tests and mock attempts
- Student dashboard starter
- Admin dashboard starter
- API placeholders for tests, attempts, and AI feedback
- `supabase/profiles.sql` for profiles + roles bootstrap

## Setup
1. Unzip this package into a fresh folder.
2. Run:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and fill in the Supabase values.
4. In Supabase SQL Editor, run:
   ```sql
   supabase/profiles.sql
   ```
5. Promote your admin user if needed:
   ```sql
   update public.profiles set role = 'admin' where email = 'your-admin-email@example.com';
   ```
6. Start the app:
   ```bash
   npm run dev
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

## Important
This package is intended to be a **stable base** before Phase 3.
What is still placeholder-only:
- real test persistence
- real attempt persistence
- full test runner UX
- premium answer comparison UX
- AI feedback integration
