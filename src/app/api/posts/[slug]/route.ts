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

// Helper function to measure and log performance
function createPerformanceLogger() {
  const timestamps: Record<string, number> = {
    start: Date.now(),
  };
  
  const durations: Record<string, number> = {};
  
  return {
    mark: (label: string) => {
      timestamps[label] = Date.now();
      if (label !== 'start') {
        const previousMark = Object.keys(timestamps).slice(-2)[0];
        durations[`${previousMark} to ${label}`] = timestamps[label] - timestamps[previousMark];
      }
      console.log(`[Slug API][${label}] Timestamp: ${new Date(timestamps[label]).toISOString()}`);
    },
    getDurations: () => {
      // Calculate total duration
      durations['total'] = timestamps[Object.keys(timestamps).slice(-1)[0]] - timestamps['start'];
      return durations;
    },
    logDurations: () => {
      const allDurations = durations;
      allDurations['total'] = timestamps[Object.keys(timestamps).slice(-1)[0]] - timestamps['start'];
      
      console.log('[Slug API] Performance breakdown:');
      Object.entries(allDurations).forEach(([stage, duration]) => {
        console.log(`[Slug API] ${stage}: ${duration}ms`);
      });
    }
  };
}

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const perf = createPerformanceLogger();
  
  perf.mark('start');
  
  // Log the request details
  console.log(`[Slug API] Fetching article with slug: ${slug}`);
  console.log(`[Slug API] Strapi URL: ${strapiUrl}`);
  console.log(`[Slug API] Request headers: ${JSON.stringify({
    ...Object.fromEntries(request.headers.entries()),
    Authorization: '*** REDACTED ***'
  })}`);
  
  try {
    // First, try to get all articles to verify connection
    console.log(`[Slug API] Testing connection by fetching all articles`);
    perf.mark('connection_test_start');
    
    const testResponse = await axios.get(`${strapiUrl}/api/articles?pagination[pageSize]=1`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
      timeout: 10000, // Increase timeout to 10 seconds
    });
    
    perf.mark('connection_test_end');
    console.log(`[Slug API] Connection test successful, found ${testResponse.data.data.length} articles`);
    console.log(`[Slug API] Connection test response time: ${testResponse.headers['x-response-time'] || 'unknown'}`);
    
    // Now try to get the specific article
    console.log(`[Slug API] Now fetching article with slug: ${slug}`);
    perf.mark('article_fetch_start');
    
    const response = await axios.get(`${strapiUrl}/api/articles`, {
      params: {
        'filters[slug][$eq]': slug,
        'populate': '*',
      },
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
      timeout: 15000, // Increase timeout to 15 seconds
    });
    
    perf.mark('article_fetch_end');
    
    console.log(`[Slug API] Found ${response.data.data.length} articles for slug: ${slug}`);
    console.log(`[Slug API] Actual API response time: ${response.headers['x-response-time'] || 'unknown'}`);
    console.log(`[Slug API] Response data size: ${JSON.stringify(response.data).length} bytes`);
    
    if (response.data.data.length === 0) {
      console.log(`[Slug API] No article found with slug: ${slug}`);
      perf.mark('not_found');
      perf.logDurations();
      return NextResponse.json(null, { status: 404 });
    }
    
    // Return the first matching article
    perf.mark('transform_start');
    const transformedArticle = transformArticleData(response.data.data[0]);
    perf.mark('transform_end');
    
    // Log memory usage
    const memoryUsage = process.memoryUsage();
    console.log(`[Slug API] Memory usage: RSS: ${Math.round(memoryUsage.rss / 1024 / 1024)}MB, Heap: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}/${Math.round(memoryUsage.heapTotal / 1024 / 1024)}MB`);
    
    perf.mark('complete');
    perf.logDurations();
    
    return NextResponse.json(transformedArticle);
    
  } catch (error: any) {
    perf.mark('error');
    console.error('[Slug API] Error fetching post: ', error);
    
    if (axios.isAxiosError(error)) {
      console.error(`[Slug API] Request URL: ${error.config?.url}`);
      console.error(`[Slug API] Request params: ${JSON.stringify(error.config?.params)}`);
      console.error(`[Slug API] Error message: ${error.message}`);
      console.error(`[Slug API] Error code: ${error.code}`);
      console.error(`[Slug API] Timeout setting: ${error.config?.timeout}ms`);
      
      if (error.response) {
        console.error(`[Slug API] Response status: ${error.response.status}`);
        console.error(`[Slug API] Response data: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        console.error('[Slug API] Request was made but no response was received');
        console.error(`[Slug API] Request details: ${JSON.stringify({
          method: error.config?.method,
          url: error.config?.url,
          headers: { ...error.config?.headers, Authorization: '*** REDACTED ***' },
          timeout: error.config?.timeout
        })}`);
      }
    }
    
    perf.logDurations();
    return NextResponse.json({ error: 'Failed to fetch article', details: error.message }, { status: 500 });
  }
}