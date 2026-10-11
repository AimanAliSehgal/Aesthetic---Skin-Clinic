-- Run this in Supabase Dashboard > SQL Editor.
-- The public website can insert a lead. It cannot read, update, or delete one.

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  phone text not null check (char_length(phone) between 7 and 30),
  service text not null check (char_length(service) between 2 and 120),
  message text check (message is null or char_length(message) <= 1000),
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;
alter table public.leads force row level security;

-- Remove any broad/default permissions before explicitly granting only what is needed.
revoke all on table public.leads from anon, authenticated;
grant insert on table public.leads to anon;
grant select on table public.leads to authenticated;

drop policy if exists "Anonymous visitors can insert leads" on public.leads;
create policy "Anonymous visitors can insert leads"
on public.leads
for insert
to anon
with check (true);

-- The /admin.html screen requires a valid Supabase Auth session to read leads.
-- Do not enable public sign-ups; create admin users manually in Supabase Auth.
drop policy if exists "Authenticated users can read leads" on public.leads;
create policy "Authenticated users can read leads"
on public.leads
for select
to authenticated
using (true);