import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
const strapiToken = process.env.STRAPI_ARTICLES_READ_TOKEN;

// Function to transform the article data
function transformArticleData(article: any) {
  if (!article) return null;
  
  // Check if the article already has the expected structure
  if (article.attributes) {
    // If it already has the attributes structure, just ensure all required fields are present
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
}

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Log the request details
  console.log(`[Slug API] Fetching article with slug: ${slug}`);
  console.log(`[Slug API] Strapi URL: ${strapiUrl}`);
  
  try {
    // First, try to get all articles to verify connection
    console.log(`[Slug API] Testing connection by fetching all articles`);
    const testResponse = await axios.get(`${strapiUrl}/api/articles?pagination[pageSize]=1`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
      timeout: 5000,
    });
    console.log(`[Slug API] Connection test successful, found ${testResponse.data.data.length} articles`);
    
    // Now try to get the specific article
    console.log(`[Slug API] Now fetching article with slug: ${slug}`);
    const response = await axios.get(`${strapiUrl}/api/articles`, {
      params: {
        'filters[slug][$eq]': slug,
        'populate': '*',
      },
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
      timeout: 5000,
    });
    
    console.log(`[Slug API] Found ${response.data.data.length} articles for slug: ${slug}`);
    
    if (response.data.data.length === 0) {
      console.log(`[Slug API] No article found with slug: ${slug}`);
      return NextResponse.json(null, { status: 404 });
    }
    
    // Return the first matching article
    const transformedArticle = transformArticleData(response.data.data[0]);
    return NextResponse.json(transformedArticle);
  } catch (error) {
    console.error('[Slug API] Error fetching post: ', error);
    
    if (axios.isAxiosError(error)) {
      console.error(`[Slug API] Request URL: ${error.config?.url}`);
      console.error(`[Slug API] Request params: ${JSON.stringify(error.config?.params)}`);
      console.error(`[Slug API] Error message: ${error.message}`);
      console.error(`[Slug API] Error code: ${error.code}`);
      
      if (error.response) {
        console.error(`[Slug API] Response status: ${error.response.status}`);
        console.error(`[Slug API] Response data: ${JSON.stringify(error.response.data)}`);
      }
    }
    
    return NextResponse.json(null, { status: 500 });
  }
}