import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
const strapiToken = process.env.STRAPI_ARTICLES_READ_TOKEN;

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  try {
    const response = await axios.get(`${strapiUrl}/api/articles?filters[slug][$eq]=${slug}&populate=*`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
    });
    return NextResponse.json(response.data.data[0]);
  } catch (error) {
    console.error('Error fetching post: ', error);
    return NextResponse.json(null, { status: 500 });
  }
}