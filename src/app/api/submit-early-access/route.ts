import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    console.log('Received form data:', body);

    // Insert the data into the Postgres database
    const { email, companyName, jobTitle } = body;
    const result = await sql`
      INSERT INTO early_access_submissions (email, company_name, job_title)
      VALUES (${email}, ${companyName}, ${jobTitle})
      RETURNING id;
    `;

    console.log('Inserted data with ID:', result.rows[0].id);

    return NextResponse.json({ message: 'Submission received', id: result.rows[0].id }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error processing submission' }, { status: 500 });
  }
}