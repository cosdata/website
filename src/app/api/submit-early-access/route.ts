import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Here you would typically save the data to a database
  // For this example, we'll just log it
  console.log('Early Access Submission:', body);

  // You can integrate with a database or external service here
  // For example, you might use Vercel KV or another database solution

  return NextResponse.json({ message: 'Submission received' }, { status: 200 });
}