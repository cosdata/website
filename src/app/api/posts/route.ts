import { NextResponse } from 'next/server';
import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
const strapiToken = process.env.STRAPI_ARTICLES_READ_TOKEN;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

  try {
    const response = await axios.get(`${strapiUrl}/api/articles`, {
      params: {
        'pagination[page]': page,
        'pagination[pageSize]': pageSize,
        'populate': '*',
        'sort': 'publishedAt:desc',
      },
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
    });
    
    return NextResponse.json({
      data: response.data.data,
      pagination: response.data.meta.pagination,
    });
  } catch (error) {
    console.error('Error fetching posts: ', error);
    return NextResponse.json({ data: [], pagination: {} }, { status: 500 });
  }
}