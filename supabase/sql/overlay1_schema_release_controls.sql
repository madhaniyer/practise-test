-- Overlay 1: real database schema + release controls
-- Run this in the Supabase SQL editor.

-- Recommended extension for UUID generation
create extension if not exists pgcrypto;

-- -----------------------------------------------------
-- PROFILES
-- -----------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'student' check (role in ('student', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'first_name', ''),
    coalesce(new.raw_user_meta_data ->> 'role', 'student')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute procedure public.set_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

-- -----------------------------------------------------
-- TESTS
-- -----------------------------------------------------
create table if not exists public.tests (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subtitle text,
  kind text not null check (kind in ('trial', 'full')),
  status text not null default 'draft' check (status in ('draft', 'released', 'retired')),
  duration_sec integer not null,
  released_at timestamptz,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists tests_set_updated_at on public.tests;
create trigger tests_set_updated_at
before update on public.tests
for each row execute procedure public.set_updated_at();

create index if not exists idx_tests_status on public.tests(status);
create index if not exists idx_tests_kind on public.tests(kind);

-- -----------------------------------------------------
-- QUESTIONS
-- -----------------------------------------------------
create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  test_id uuid not null references public.tests(id) on delete cascade,
  question_number integer not null,
  section text not null,
  topic text,
  difficulty text,
  question_type text not null check (question_type in ('mcq', 'written')),
  prompt text not null,
  options jsonb,
  correct_index integer,
  model_answer text,
  rubric jsonb,
  explanation text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  unique(test_id, question_number)
);

create index if not exists idx_questions_test_id on public.questions(test_id);
create index if not exists idx_questions_test_number on public.questions(test_id, question_number);

-- -----------------------------------------------------
-- ATTEMPTS
-- -----------------------------------------------------
create table if not exists public.attempts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  test_id uuid not null references public.tests(id) on delete cascade,
  status text not null default 'in_progress' check (status in ('in_progress', 'submitted', 'abandoned')),
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  mcq_score numeric,
  correct_count integer,
  total_mcq integer,
  summary jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_attempts_student_id on public.attempts(student_id);
create index if not exists idx_attempts_test_id on public.attempts(test_id);
create index if not exists idx_attempts_status on public.attempts(status);
create index if not exists idx_attempts_submitted_at on public.attempts(submitted_at desc);

-- -----------------------------------------------------
-- ATTEMPT ANSWERS
-- -----------------------------------------------------
create table if not exists public.attempt_answers (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.attempts(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  answer_text text,
  answer_index integer,
  is_checked boolean not null default false,
  is_flagged boolean not null default false,
  checked_at timestamptz,
  ai_feedback jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(attempt_id, question_id)
);

drop trigger if exists attempt_answers_set_updated_at on public.attempt_answers;
create trigger attempt_answers_set_updated_at
before update on public.attempt_answers
for each row execute procedure public.set_updated_at();

create index if not exists idx_attempt_answers_attempt_id on public.attempt_answers(attempt_id);
create index if not exists idx_attempt_answers_question_id on public.attempt_answers(question_id);
create index if not exists idx_attempt_answers_flagged on public.attempt_answers(is_flagged) where is_flagged = true;

-- -----------------------------------------------------
-- RLS
-- -----------------------------------------------------
alter table public.profiles enable row level security;
alter table public.tests enable row level security;
alter table public.questions enable row level security;
alter table public.attempts enable row level security;
alter table public.attempt_answers enable row level security;

-- PROFILES policies
drop policy if exists "profiles_select_self_or_admin" on public.profiles;
create policy "profiles_select_self_or_admin"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = id or public.is_admin());

drop policy if exists "profiles_update_self_or_admin" on public.profiles;
create policy "profiles_update_self_or_admin"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = id or public.is_admin())
with check ((select auth.uid()) = id or public.is_admin());

-- TESTS policies
drop policy if exists "tests_select_released_or_admin" on public.tests;
create policy "tests_select_released_or_admin"
on public.tests
for select
to authenticated
using (status = 'released' or public.is_admin());

drop policy if exists "tests_insert_admin_only" on public.tests;
create policy "tests_insert_admin_only"
on public.tests
for insert
to authenticated
with check (public.is_admin());

drop policy if exists "tests_update_admin_only" on public.tests;
create policy "tests_update_admin_only"
on public.tests
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "tests_delete_admin_only" on public.tests;
create policy "tests_delete_admin_only"
on public.tests
for delete
to authenticated
using (public.is_admin());

-- QUESTIONS policies
drop policy if exists "questions_select_released_or_admin" on public.questions;
create policy "questions_select_released_or_admin"
on public.questions
for select
to authenticated
using (
  exists (
    select 1
    from public.tests t
    where t.id = questions.test_id
      and (t.status = 'released' or public.is_admin())
  )
);

drop policy if exists "questions_admin_manage" on public.questions;
create policy "questions_admin_manage"
on public.questions
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- ATTEMPTS policies
drop policy if exists "attempts_select_own_or_admin" on public.attempts;
create policy "attempts_select_own_or_admin"
on public.attempts
for select
to authenticated
using (student_id = (select auth.uid()) or public.is_admin());

drop policy if exists "attempts_insert_own_or_admin" on public.attempts;
create policy "attempts_insert_own_or_admin"
on public.attempts
for insert
to authenticated
with check (student_id = (select auth.uid()) or public.is_admin());

drop policy if exists "attempts_update_own_or_admin" on public.attempts;
create policy "attempts_update_own_or_admin"
on public.attempts
for update
to authenticated
using (student_id = (select auth.uid()) or public.is_admin())
with check (student_id = (select auth.uid()) or public.is_admin());

-- ATTEMPT ANSWERS policies
drop policy if exists "attempt_answers_select_own_or_admin" on public.attempt_answers;
create policy "attempt_answers_select_own_or_admin"
on public.attempt_answers
for select
to authenticated
using (
  exists (
    select 1
    from public.attempts a
    where a.id = attempt_answers.attempt_id
      and (a.student_id = (select auth.uid()) or public.is_admin())
  )
);

drop policy if exists "attempt_answers_insert_own_or_admin" on public.attempt_answers;
create policy "attempt_answers_insert_own_or_admin"
on public.attempt_answers
for insert
to authenticated
with check (
  exists (
    select 1
    from public.attempts a
    where a.id = attempt_answers.attempt_id
      and (a.student_id = (select auth.uid()) or public.is_admin())
  )
);

drop policy if exists "attempt_answers_update_own_or_admin" on public.attempt_answers;
create policy "attempt_answers_update_own_or_admin"
on public.attempt_answers
for update
to authenticated
using (
  exists (
    select 1
    from public.attempts a
    where a.id = attempt_answers.attempt_id
      and (a.student_id = (select auth.uid()) or public.is_admin())
  )
)
with check (
  exists (
    select 1
    from public.attempts a
    where a.id = attempt_answers.attempt_id
      and (a.student_id = (select auth.uid()) or public.is_admin())
  )
);

-- -----------------------------------------------------
-- OPTIONAL: make one existing profile an admin manually
-- update public.profiles set role = 'admin' where email = 'you@example.com';
-- -----------------------------------------------------
