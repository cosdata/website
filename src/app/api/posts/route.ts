import { NextResponse } from 'next/server';
import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
const strapiToken = process.env.STRAPI_ARTICLES_READ_TOKEN;

// Function to transform the data structure
function transformArticleData(articles: any[]) {
  return articles.map(article => {
    // Create the expected structure
    return {
      id: article.id,
      attributes: {
        title: article.title,
        slug: article.slug,
        content: article.content,
        preview: article.preview,
        read_time: article.read_time,
        author: article.author,
        author_role: article.author_role,
        publishedAt: article.publishedAt,
        createdAt: article.createdAt,
        updatedAt: article.updatedAt,
        cover_image: article.cover_image ? {
          data: {
            attributes: {
              url: article.cover_image.url
            }
          }
        } : null,
        author_headshot: article.author_headshot ? {
          data: {
            attributes: {
              url: article.author_headshot.url
            }
          }
        } : null
      }
    };
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

  try {
    console.log(`Fetching from: ${strapiUrl}/api/articles`);
    
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
    
    // Log the complete response structure
    console.log('Complete API response:', JSON.stringify(response.data, null, 2));
    
    // Also log the first article if available
    if (response.data.data && response.data.data.length > 0) {
      console.log('First article structure:', JSON.stringify(response.data.data[0], null, 2));
    }
    
    // Transform the data to match expected structure
    const transformedData = transformArticleData(response.data.data);
    
    return NextResponse.json({
      data: transformedData,
      pagination: response.data.meta.pagination,
    });
  } catch (error) {
    console.error('Error fetching posts: ', error);
    return NextResponse.json({ data: [], pagination: {} }, { status: 500 });
  }
}