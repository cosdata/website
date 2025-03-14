import { NextResponse } from 'next/server';
import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
const strapiToken = process.env.STRAPI_ARTICLES_READ_TOKEN;

// Function to transform the data structure
function transformArticleData(articles: any[]) {
  return articles.map(article => {
    // Check if the article already has the expected structure with attributes
    if (article.attributes) {
      const attributes = article.attributes;
      
      // Handle cover_image
      if (!attributes.cover_image && attributes.cover && attributes.cover.data) {
        attributes.cover_image = attributes.cover;
      }
      
      // Handle author data if it's not in the expected format
      if (attributes.author && typeof attributes.author !== 'string' && !attributes.author.data) {
        const authorName = attributes.author.name || attributes.author;
        attributes.author = authorName;
      }
      
      // Return the article with its existing structure
      return {
        id: article.id,
        attributes: attributes
      };
    }
    
    // If the article doesn't have the expected structure, transform it
    return {
      id: article.id,
      attributes: {
        title: article.title,
        slug: article.slug,
        content: article.content,
        preview: article.preview,
        read_time: article.read_time,
        author: article.author && typeof article.author === 'object' ? article.author.name || 'Unknown Author' : article.author,
        author_role: article.author_role,
        publishedAt: article.publishedAt,
        createdAt: article.createdAt,
        updatedAt: article.updatedAt,
        cover_image: article.cover_image ? {
          data: {
            attributes: {
              url: article.cover_image.url || article.cover_image
            }
          }
        } : article.cover ? {
          data: {
            attributes: {
              url: article.cover.url || article.cover
            }
          }
        } : null,
        author_headshot: article.author_headshot ? {
          data: {
            attributes: {
              url: article.author_headshot.url || article.author_headshot
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