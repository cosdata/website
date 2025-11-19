# Troubleshooting Early Access Form

## ✅ Completed Steps

1. ✅ Created `.env.local` with Postgres connection variables
2. ✅ Fixed API route to handle missing MailerLite API key gracefully
3. ✅ Added detailed error logging

## ⚠️ Critical Steps to Complete

### Step 1: Create Database Tables

**You MUST create the database tables in Neon dashboard:**

1. Go to https://console.neon.tech
2. Open your database project
3. Click on **SQL Editor**
4. Copy and paste this SQL:

```sql
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_early_access_email ON early_access_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
```

5. Click **Run** or press Ctrl+Enter
6. Verify tables were created (you should see success message)

### Step 2: Restart Dev Server

**IMPORTANT:** Next.js only reads `.env.local` on startup. You MUST restart:

```bash
# Stop the current dev server (Ctrl+C)

npm run dev
# or
pnpm dev
```

### Step 3: Check Server Logs

After restarting, when you submit the form, check the terminal where `npm run dev` is running. You should see:

- `Received submission: { email: '...', companyName: '...', ... }`
- `Existing record check: 0` (or 1 if email exists)
- `Inserted new record` or `Updated existing record`
- `Submission processed successfully`

If you see database errors, the tables weren't created properly.

## Common Issues

### Error: "relation 'early_access_submissions' does not exist"
**Solution:** You haven't created the database tables yet. Follow Step 1 above.

### Error: "connection refused" or "timeout"
**Solution:** Check that `.env.local` has the correct `POSTGRES_URL` from Neon dashboard.

### Error: "MAILERLITE_API_KEY is not set"
**Solution:** This is now handled gracefully - the form will still work, just won't add to MailerLite.

## Testing

1. Open http://localhost:3000
2. Open the early access modal
3. Fill in the form and submit
4. Check the browser console (F12) for any errors
5. Check the terminal running `npm run dev` for detailed logs
6. If successful, you should see "Thank you for your interest!" message

