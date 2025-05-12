import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, companyName = '', jobTitle = '', studentForm = false } = body;

    // Check if email already exists
    const existingRecord = await sql`
      SELECT * FROM early_access_submissions WHERE email = ${email}
    `;

    if (existingRecord && existingRecord.rowCount && existingRecord.rowCount > 0) {
      // Update existing record
      await sql`
        UPDATE early_access_submissions 
        SET company_name = ${companyName}, job_title = ${jobTitle}, updated_at = NOW(), student_form = ${studentForm}
        WHERE email = ${email}
      `;
    } else {
      // Insert new record
      await sql`
        INSERT INTO early_access_submissions (email, company_name, job_title, student_form)
        VALUES (${email}, ${companyName}, ${jobTitle}, ${studentForm})
      `;
    }

    // Tag as student form in MailerLite custom field if possible
    try {
      const mailerLiteResponse = await createMailerLiteSubscriber(email, companyName, jobTitle, studentForm);
      if (!mailerLiteResponse.ok) {
        // Log the error but don't fail the submission
        const errorData = await mailerLiteResponse.json();
        console.error('MailerLite API error:', errorData);
      }
    } catch (mailerError) {
      // Log the error but don't fail the submission
      console.error('MailerLite API exception:', mailerError);
    }

    return NextResponse.json({ message: 'Student signup successful' }, { status: 200 });
  } catch (error) {
    console.error('Error processing student signup:', error);
    return NextResponse.json({ message: 'Error processing student signup' }, { status: 500 });
  }
}

async function createMailerLiteSubscriber(email: string, companyName: string, jobTitle: string, studentForm: boolean) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    throw new Error('MAILERLITE_API_KEY is not set');
  }

  const url = 'https://connect.mailerlite.com/api/subscribers';

  // Add a custom field for studentForm if supported by MailerLite
  const fields: Record<string, any> = {
    company: companyName,
    job_title: jobTitle,
  };
  if (studentForm) {
    fields.student_form = 'true'; // Use a string for MailerLite custom field
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      email: email,
      fields,
      groups: ["134010769999136177"] // Early access group
    })
  });

  return response;
} 