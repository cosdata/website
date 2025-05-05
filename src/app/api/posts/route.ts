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
        published_date: article.published_date,
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
      console.log(`[Posts API][${label}] Timestamp: ${new Date(timestamps[label]).toISOString()}`);
    },
    getDurations: () => {
      // Calculate total duration
      durations['total'] = timestamps[Object.keys(timestamps).slice(-1)[0]] - timestamps['start'];
      return durations;
    },
    logDurations: () => {
      const allDurations = durations;
      allDurations['total'] = timestamps[Object.keys(timestamps).slice(-1)[0]] - timestamps['start'];
      
      console.log('[Posts API] Performance breakdown:');
      Object.entries(allDurations).forEach(([stage, duration]) => {
        console.log(`[Posts API] ${stage}: ${duration}ms`);
      });
    }
  };
}

export async function GET(request: Request) {
  const perf = createPerformanceLogger();
  perf.mark('start');
  
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

  console.log(`[Posts API] Fetching posts, page: ${page}, pageSize: ${pageSize}`);
  console.log(`[Posts API] Strapi URL: ${strapiUrl}`);

  try {
    console.log(`[Posts API] Fetching from: ${strapiUrl}/api/articles`);
    perf.mark('fetch_start');
    
    const response = await axios.get(`${strapiUrl}/api/articles`, {
      params: {
        'pagination[page]': page,
        'pagination[pageSize]': pageSize,
        'populate': '*',
        'sort': 'published_date:desc',
      },
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
      timeout: 15000, // Increase timeout to 15 seconds
    });
    
    perf.mark('fetch_complete');
    console.log(`[Posts API] Response received, found ${response.data.data?.length || 0} posts`);
    console.log(`[Posts API] Response time: ${response.headers['x-response-time'] || 'unknown'}`);
    console.log(`[Posts API] Response data size: ${JSON.stringify(response.data).length} bytes`);
    
    // Transform the data to match expected structure
    perf.mark('transform_start');
    const transformedData = transformArticleData(response.data.data);
    perf.mark('transform_complete');
    
    // Log memory usage
    const memoryUsage = process.memoryUsage();
    console.log(`[Posts API] Memory usage: RSS: ${Math.round(memoryUsage.rss / 1024 / 1024)}MB, Heap: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}/${Math.round(memoryUsage.heapTotal / 1024 / 1024)}MB`);
    
    perf.mark('complete');
    perf.logDurations();
    
    return NextResponse.json({
      data: transformedData,
      pagination: response.data.meta.pagination,
    });
  } catch (error: any) {
    perf.mark('error');
    console.error('[Posts API] Error fetching posts: ', error);
    
    if (axios.isAxiosError(error)) {
      console.error(`[Posts API] Request URL: ${error.config?.url}`);
      console.error(`[Posts API] Request params: ${JSON.stringify(error.config?.params)}`);
      console.error(`[Posts API] Error message: ${error.message}`);
      console.error(`[Posts API] Error code: ${error.code}`);
      console.error(`[Posts API] Timeout setting: ${error.config?.timeout}ms`);
      
      if (error.response) {
        console.error(`[Posts API] Response status: ${error.response.status}`);
        console.error(`[Posts API] Response data: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        console.error('[Posts API] Request was made but no response was received');
        console.error(`[Posts API] Request details: ${JSON.stringify({
          method: error.config?.method,
          url: error.config?.url,
          headers: { ...error.config?.headers, Authorization: '*** REDACTED ***' },
          timeout: error.config?.timeout
        })}`);
      }
    }
    
    perf.logDurations();
    return NextResponse.json({ 
      data: [], 
      pagination: {},
      error: error.message 
    }, { status: 500 });
  }
}