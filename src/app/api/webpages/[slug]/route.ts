import { NextResponse } from 'next/server';

interface WebpageAttributes {
  slug: string;
  title: string;
  content: string;
}

interface Webpage {
  id: number;
  attributes: WebpageAttributes;
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  const strapiToken = process.env.STRAPI_ARTICLES_READ_TOKEN;
  
  console.log('API Route Handler - Received request');
  console.log('Params:', params);
  console.log('Strapi URL:', strapiUrl);
  
  try {
    // First just try to get all webpages
    const testUrl = `${strapiUrl}/api/webpages?populate=*`;
    console.log('Testing Strapi connection with URL:', testUrl);
    
    const testResponse = await fetch(testUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${strapiToken}`,
      },
      cache: 'no-store'
    });

    console.log('Test response status:', testResponse.status);

    if (!testResponse.ok) {
      console.error('Test response error:', await testResponse.text());
      throw new Error(`HTTP error! status: ${testResponse.status}`);
    }

    const testData = await testResponse.json();
    console.log('All webpages from Strapi:', testData);

    // Now try to find the specific webpage
    const webpage = testData.data.find((page: Webpage) => page.attributes.slug === params.slug);
    console.log('Found webpage:', webpage);

    if (!webpage) {
      console.log('No webpage found for slug:', params.slug);
      return new NextResponse('Webpage not found', { status: 404 });
    }

    return NextResponse.json(webpage);
  } catch (error) {
    console.error('Error in API route:', error);
    return new NextResponse(`Error fetching webpage: ${error}`, { status: 500 });
  }
} 