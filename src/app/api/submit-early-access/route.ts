import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, companyName, jobTitle, message } = body;

    // Check if email already exists
    const existingRecord = await sql`
      SELECT * FROM early_access_submissions WHERE email = ${email}
    `;

    if (existingRecord && existingRecord.rowCount && existingRecord.rowCount > 0) {
      // Update existing record
      await sql`
        UPDATE early_access_submissions 
        SET company_name = ${companyName}, job_title = ${jobTitle}
        WHERE email = ${email}
      `;
    } else {
      // Insert new record
      await sql`
        INSERT INTO early_access_submissions (email, company_name, job_title)
        VALUES (${email}, ${companyName}, ${jobTitle})
      `;
    }

    // Send to Google Apps Script Webhook (Google Sheets + Email)
    try {
      await fetch('https://script.google.com/macros/s/AKfycbxcFYDirgPLL59jsLTIUDpniwiVMDZm8b0OUfY41XOZcljx9Kgk9TSg8_POVr4ZNUdHFQ/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          companyName,
          jobTitle
        })
      });
    } catch (gsError) {
      console.error('Error sending to Google Apps Script webhook:', gsError);
    }

    // Only create MailerLite subscriber for early access requests (no message field)
    if (!message) {
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
    }

    return NextResponse.json({ message: 'Submission successful' }, { status: 200 });
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json({ message: 'Error processing submission' }, { status: 500 });
  }
}

async function createMailerLiteSubscriber(email: string, companyName: string, jobTitle: string) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    throw new Error('MAILERLITE_API_KEY is not set');
  }

  const url = 'https://connect.mailerlite.com/api/subscribers';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      email: email,
      fields: {
        company: companyName,
        job_title: jobTitle
      },
      groups: ["134010769999136177"] // Early access group
    })
  });

  return response;
}