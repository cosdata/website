import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, companyName, jobTitle, message } = body;

    // Store in Postgres - remove the message field from SQL query
    await sql`
      INSERT INTO early_access_submissions (email, company_name, job_title)
      VALUES (${email}, ${companyName}, ${jobTitle})
    `;

    // Only create MailerLite subscriber for early access requests (no message field)
    if (!message) {
      const mailerLiteResponse = await createMailerLiteSubscriber(email, companyName, jobTitle);

      if (!mailerLiteResponse.ok) {
        const errorData = await mailerLiteResponse.json();
        console.error('MailerLite API error:', errorData);
        throw new Error('Failed to create MailerLite subscriber');
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