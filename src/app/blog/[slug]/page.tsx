import Image from 'next/image';
import { notFound } from 'next/navigation';
import BlogContent from './BlogContent';
import TableOfContents from './TableOfContents';
import SocialShare from './SocialShare';
import { format } from 'date-fns';
import axios from 'axios';
import { commonStyles, afacad, geologica } from '../../styles/common';

// Enable revalidation every hour with ISR
export const revalidate = 3600;

// Enable dynamic routes - don't require static generation
export const dynamicParams = true;

// Helper function to log timing
function logTiming(label: string, startTime: number) {
  const duration = Date.now() - startTime;
  console.log(`[BlogPost][${label}] Duration: ${duration}ms`);
  return Date.now();
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const startTime = Date.now();
  console.log(`[BlogPost][page] Starting to render post with slug: ${params.slug}`);
  
  // Use environment variable for server-side
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.cosdata.io');
  
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  console.log('[BlogPost][page] Base URL:', baseUrl);
  console.log('[BlogPost][page] Slug:', params.slug);

  try {
    // Try fetching directly from Strapi first to avoid unnecessary API routes
    const time = startTime;
    console.log(`[BlogPost][page] Starting direct Strapi fetch for slug: ${params.slug}`);
    const fetchStart = Date.now();
    
    const strapiFetchUrl = `${strapiUrl}/api/articles?filters[slug][$eq]=${params.slug}&populate=*`;
    const response = await fetch(strapiFetchUrl, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_ARTICLES_READ_TOKEN}`,
      },
      next: { revalidate: 3600 },
    });
    
    console.log(`[BlogPost][page] Strapi fetch took ${Date.now() - fetchStart}ms, status: ${response.status}`);
    
    if (!response.ok) {
      throw new Error(`Strapi fetch failed: ${response.status}`);
    }
    
    const jsonStart = Date.now();
    const data = await response.json();
    console.log(`[BlogPost][page] JSON parsing took ${Date.now() - jsonStart}ms`);
    
    if (!data.data || data.data.length === 0) {
      console.log(`[BlogPost][page] No article found with slug: ${params.slug}`);
      return notFound();
    }
    
    // Extract and transform the article data
    let article = data.data[0];
    
    // Check if post has the expected structure
    if (!article.attributes) {
      // If post is the direct data from Strapi without the expected structure,
      // we need to transform it
      article = {
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
    } else {
      // Ensure the post has the expected structure even if it already has attributes
      const attributes = article.attributes;
      
      // Handle cover_image
      if (!attributes.cover_image && attributes.cover && attributes.cover.data) {
        attributes.cover_image = attributes.cover;
      }
      
      // Handle author data if it's not in the expected format
      if (attributes.author && typeof attributes.author === 'object' && !attributes.author.data) {
        attributes.author = attributes.author.name || 'Unknown Author';
      }
    }

    const formattedDate = article.attributes.publishedAt
      ? format(new Date(article.attributes.publishedAt), 'MMMM d, yyyy')
      : 'Date unavailable';

    const readingTime = article.attributes.read_time || 5; // Default to 5 minutes if not set

    const getFullImageUrl = (url: string) => {
      if (!url) return '/placeholder-image.jpg';
      if (url.startsWith('http')) return url;
      return `${strapiUrl}${url}`;
    };

    // Helper function to safely access nested properties
    const getImageUrl = (imageField: any) => {
      if (!imageField) return null;
      if (!imageField.data) return null;
      if (!imageField.data.attributes) return null;
      return imageField.data.attributes.url;
    };

    // Get author information safely
    const authorName = typeof article.attributes.author === 'string' 
      ? article.attributes.author 
      : article.attributes.author?.name || 'Unknown Author';

    const authorRole = article.attributes.author_role || 
      (typeof article.attributes.author !== 'string' ? article.attributes.author?.role : null) || 
      'Contributor';

    return (
      <div className="min-h-screen bg-[#f0f7ff]">
        <article className={`max-w-7xl mx-auto px-4 md:px-8 ${geologica.className}`}>
          {/* Hero Section */}
          <header className="mt-12 mb-12">
            {/* Title and Author Info */}
            <div className="mb-12">
              <h1 className={`${commonStyles.sectionTitle} !text-left mb-6 text-4xl md:text-5xl lg:text-6xl text-[#0055c8]`}>
                {article.attributes.title}
              </h1>
              <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between text-[#374151] ${afacad.className} text-lg gap-4`}>
                <div className="flex items-center space-x-4">
                  {article.attributes.author_headshot && article.attributes.author_headshot.data && (
                    <Image
                      src={getFullImageUrl(getImageUrl(article.attributes.author_headshot))}
                      alt={authorName}
                      width={48}
                      height={48}
                      className="rounded-full ring-2 ring-white shadow-md"
                    />
                  )}
                  <div>
                    {authorName && (
                      <p className="font-medium">{authorName}</p>
                    )}
                    {authorRole && (
                      <p className="text-sm text-gray-600">{authorRole}</p>
                    )}
                  </div>
                </div>
                <div className="text-md text-gray-600">
                  <time dateTime={article.attributes.publishedAt}>{formattedDate}</time>
                  <span className="mx-2">·</span>
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            {article.attributes.cover_image && article.attributes.cover_image.data && (
              <div className="w-full mb-12">
                <div className="relative w-full bg-white rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src={getFullImageUrl(getImageUrl(article.attributes.cover_image))}
                    alt={article.attributes.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto"
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            )}
          </header>

          {/* Main Content with Table of Contents */}
          <div className="flex justify-between items-start relative gap-12">
            {/* Article Content */}
            <div className="w-full lg:w-[calc(100%-20rem)]">
              <div className={`prose prose-lg max-w-none text-[#374151] ${afacad.className} text-lg sm:text-xl
                prose-headings:text-[#0055c8] prose-headings:font-semibold
                prose-a:text-[#0055c8] prose-a:no-underline prose-a:font-medium hover:prose-a:text-[#003d8f]
                prose-blockquote:border-l-[#0055c8] prose-blockquote:bg-white/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                prose-code:text-[#0055c8] prose-code:bg-white/50
                prose-pre:bg-gray-900 prose-pre:text-gray-100
                [&>*]:bg-transparent
              `}>
                <BlogContent content={article.attributes.content} />
              </div>

              {/* Social Share Section */}
              <SocialShare title={article.attributes.title} />

              {/* Author Bio Section */}
              <footer className={`mb-12 p-8 bg-white/50 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm ${afacad.className} text-lg`}>
                <div className="flex items-center space-x-6">
                  {article.attributes.author_headshot && article.attributes.author_headshot.data && (
                    <Image
                      src={getFullImageUrl(getImageUrl(article.attributes.author_headshot))}
                      alt={authorName}
                      width={80}
                      height={80}
                      className="rounded-full ring-2 ring-white shadow-md"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-xl text-[#0055c8] mb-2">{authorName}</p>
                    <p className="text-gray-600 mb-4">{authorRole}</p>
                    <p className="text-gray-600">
                      Technical writer and developer advocate at Cosdata. Passionate about vector databases and similarity search.
                    </p>
                  </div>
                </div>
              </footer>
            </div>

            {/* Table of Contents */}
            <TableOfContents />
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
}
