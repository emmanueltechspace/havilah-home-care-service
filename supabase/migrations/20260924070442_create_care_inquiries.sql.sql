/*
# Create care_inquiries table (single-tenant, no auth)

1. New Tables
- `care_inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — the person submitting the inquiry
  - `phone` (text, not null) — contact phone number
  - `email` (text) — contact email, optional but recommended
  - `preferred_contact` (text) — "Phone", "Email", or "Either"
  - `relationship` (text) — relationship to the person needing care (e.g. "Spouse", "Child", "Self")
  - `assistance_type` (text) — general category of assistance requested
  - `timeframe` (text) — preferred timeframe for care to begin
  - `message` (text) — additional message / free-text details
  - `status` (text, default 'new') — inquiry status for internal tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `care_inquiries`.
- Allow anon + authenticated INSERT only — this is a public form, so anyone can submit an inquiry.
- No SELECT/UPDATE/DELETE for anon or authenticated — inquiries are managed internally only.
*/

CREATE TABLE IF NOT EXISTS care_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  preferred_contact text NOT NULL DEFAULT 'Phone',
  relationship text,
  assistance_type text,
  timeframe text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE care_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_care_inquiries" ON care_inquiries;
CREATE POLICY "anon_insert_care_inquiries"
ON care_inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);
