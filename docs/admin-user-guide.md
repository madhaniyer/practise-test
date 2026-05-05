# Admin User Guide

## 1. Logging in
1. Open the app at `http://localhost:3000`.
2. Go to `/login`.
3. Enter your Supabase email and password.
4. Your Supabase profile row in `public.profiles` must have `role = 'admin'`.
5. If the role is correct, you can open `/admin/dashboard`.

## 2. Admin dashboard overview
The admin dashboard provides:
- a top summary of released tests and attempt counts
- quick access to **Test Management**
- quick access to the **Attempt Inspector**

## 3. Test Management
Go to `/admin/tests`.
This page is currently the management placeholder for:
- test catalogue
- release state
- future content editing workflows

### Current release logic
At the moment, release state is driven by the mock data layer:
- `released: true` → student can start the full test
- `released: false` → full test appears locked to the student

### Trial tests
Trial tests are separate from full tests using:
- `kind: "trial"`

In the current package:
- the two trial tests are always available
- the full tests can be released or locked in the mock data file

## 4. Attempt Inspector
Go to `/admin/attempts`.
This page lists student attempts and lets you open attempt detail pages.

### Current scope
The admin attempt pages are scaffolded and ready for the next persistence phase.
They are intended to become the place where you will inspect:
- section-level results
- question-level answers
- correct answers
- written model answers
- student trends over time

## 5. Managing student/admin roles in Supabase
The app uses the `public.profiles` table.

### Make a user admin
Run in Supabase SQL Editor:
```sql
update public.profiles
set role = 'admin'
where email = 'your-admin-email@example.com';
```

### Make a user student
Run:
```sql
update public.profiles
set role = 'student'
where email = 'student-email@example.com';
```

## 6. SQL bootstrap
Run the contents of:
```text
supabase/profiles.sql
```
This creates:
- `public.profiles`
- RLS policies
- trigger for new auth users
- optional backfill for older users

## 7. Important admin notes
- The student experience currently uses mock test data.
- Phase 3 introduces the working student test flow.
- The next major step is real DB-backed persistence for tests and attempts.
