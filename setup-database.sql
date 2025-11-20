-- Database setup script for Cosdata website
-- Run this using: psql "$POSTGRES_URL" -f setup-database.sql
-- Or connect to your database and run these commands

-- Table for early access submissions
CREATE TABLE IF NOT EXISTS early_access_submissions (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  company_name TEXT,
  job_title TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table for contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  subject TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_early_access_email ON early_access_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);

-- Verify tables were created
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('early_access_submissions', 'contact_submissions');

