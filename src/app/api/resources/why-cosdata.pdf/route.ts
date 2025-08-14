import { createReadStream, statSync } from 'fs';
import { join } from 'path';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const filePath = join(process.cwd(), 'public', 'pdfs', 'why-cosdata.pdf');
  try {
    const stat = statSync(filePath);
    const stream = createReadStream(filePath);
    return new Response(stream as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="why-cosdata.pdf"',
        'Content-Length': stat.size.toString(),
      },
    });
  } catch (err) {
    return new Response('File not found', { status: 404 });
  }
}
