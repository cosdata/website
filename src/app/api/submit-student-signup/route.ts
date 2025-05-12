import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, companyName = '', jobTitle = '' } = body;

    // Check if email already exists
    const existingRecord = await sql`
      SELECT * FROM early_access_submissions WHERE email = ${email}
    `;

    if (existingRecord && existingRecord.rowCount && existingRecord.rowCount > 0) {
      // Update existing record
      await sql`
        UPDATE early_access_submissions 
        SET company_name = ${companyName}, job_title = ${jobTitle}, updated_at = NOW()
        WHERE email = ${email}
      `;
    } else {
      // Insert new record
      await sql`
        INSERT INTO early_access_submissions (email, company_name, job_title)
        VALUES (${email}, ${companyName}, ${jobTitle})
      `;
    }

    // Add to MailerLite "Student_Form" group
    try {
      const mailerLiteResponse = await createMailerLiteSubscriber(email, companyName, jobTitle);
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

async function createMailerLiteSubscriber(email: string, companyName: string, jobTitle: string) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    throw new Error('MAILERLITE_API_KEY is not set');
  }

  const url = 'https://connect.mailerlite.com/api/subscribers';

  const fields: Record<string, any> = {
    company: companyName,
    job_title: jobTitle,
  };

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
      groups: ["154223260516484668"]
    })
  });

  return response;
} 