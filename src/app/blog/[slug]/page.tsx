import Image from 'next/image';
import { notFound } from 'next/navigation';
import BlogContent from './BlogContent';
import TableOfContents from './TableOfContents';
import SocialShare from './SocialShare';
import CompactNewsletterCTA from '../CompactNewsletterCTA';
import { format } from 'date-fns';
import { commonStyles, afacad, geologica } from '../../styles/common';
import { getImageUrl, getFullImageUrl } from '../../utils/imageUtils';
import type { Metadata } from 'next';

// Disable dynamic params - use only statically generated routes
export const dynamicParams = false;

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

  try {
    console.log('[SSG] Fetching all article slugs for static generation...');

    const response = await fetch(`${strapiUrl}/api/articles?fields[0]=slug`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_ARTICLES_READ_TOKEN}`,
      },
    });

    if (!response.ok) {
      console.error('[SSG] Failed to fetch articles:', response.status);
      return [];
    }

    const data = await response.json();

    if (!data.data || !Array.isArray(data.data)) {
      console.warn('[SSG] No articles found or invalid response structure');
      return [];
    }

    const slugs = data.data
      .map((article: any) => {
        // Handle both Strapi v4 format and direct format
        const slug = article.attributes?.slug || article.slug;
        return slug ? { slug } : null;
      })
      .filter(Boolean);

    console.log(`[SSG] Found ${slugs.length} article slugs for static generation:`, slugs.map((s: { slug: string }) => s.slug));

    return slugs;
  } catch (error) {
    console.error('[SSG] Error fetching article slugs:', error);
    return [];
  }
}

// Metadata generation function
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Use environment variables for the base URLs
  const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.cosdata.io');

  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

  try {
    // Fetch the article data
    const strapiFetchUrl = `${strapiUrl}/api/articles?filters[slug][$eq]=${params.slug}&populate=*`;
    const response = await fetch(strapiFetchUrl, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_ARTICLES_READ_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Strapi fetch failed: ${response.status}`);
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

    // Extract article data
    let article = data.data[0];

    // Handle article structure
    if (!article.attributes) {
      article = {
        id: article.id,
        attributes: {
          title: article.title,
          preview: article.preview,
          slug: article.slug,
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
        }
      };
    } else {
      // Handle cover_image
      if (!article.attributes.cover_image && article.attributes.cover && article.attributes.cover.data) {
        article.attributes.cover_image = article.attributes.cover;
      }
    }

    // Extract needed metadata
    const title = article.attributes.title;
    const description = article.attributes.preview || 'Read this blog post on Cosdata.';

    // Get the cover image URL if available
    let imageUrl = '/images/og-image.jpg'; // Default fallback image
    if (article.attributes.cover_image && article.attributes.cover_image.data) {
      imageUrl = getFullImageUrl(getImageUrl(article.attributes.cover_image));
    }

    // Return the metadata object
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${baseUrl}/blog/${params.slug}`,
        siteName: 'Cosdata',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        locale: 'en_US',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [imageUrl],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post',
      description: 'Read our latest blog post on Cosdata.',
    };
  }
}

// Helper function to log timing for SSG
function logTiming(label: string, startTime: number) {
  const duration = Date.now() - startTime;
  console.log(`[SSG][BlogPost][${label}] Duration: ${duration}ms`);
  return Date.now();
}

// Function to insert a CTA into Markdown content after a specific heading
function insertCTAIntoMarkdown(content: string, headingPosition: number = 3): string {
  if (typeof content !== 'string') {
    console.warn('Content is not a string, cannot insert CTA');
    return content;
  }

  // Regular expression to match h1-h6 Markdown headings
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let headingCount = 0;
  let lastIndex = 0;
  let match;

  // Clone the content string
  let result = content;

  // Find the position after the specified heading
  while ((match = headingRegex.exec(content)) !== null) {
    headingCount++;

    // After finding the target heading, insert the CTA
    if (headingCount === headingPosition) {
      lastIndex = match.index + match[0].length;

      // Insert CTA placeholder - we'll replace this with the actual component in BlogContent
      const ctaPlaceholder = '\n\n<!-- NEWSLETTER_CTA_PLACEHOLDER -->\n\n';
      result = content.substring(0, lastIndex) + ctaPlaceholder + content.substring(lastIndex);
      break;
    }
  }

  console.log(`[SSG] Found ${headingCount} headings in content, inserted CTA after heading ${headingPosition}`);
  return result;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const startTime = Date.now();
  console.log(`[SSG][BlogPost] Starting to render post with slug: ${params.slug}`);

  // Use environment variable for server-side
  const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.cosdata.io');

  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  console.log('[SSG][BlogPost] Base URL:', baseUrl);
  console.log('[SSG][BlogPost] Slug:', params.slug);

  try {
    // Fetch directly from Strapi for static generation
    const time = startTime;
    console.log(`[SSG][BlogPost] Starting direct Strapi fetch for slug: ${params.slug}`);
    const fetchStart = Date.now();

    const strapiFetchUrl = `${strapiUrl}/api/articles?filters[slug][$eq]=${params.slug}&populate=*`;
    const response = await fetch(strapiFetchUrl, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_ARTICLES_READ_TOKEN}`,
      },
    });

    console.log(`[SSG][BlogPost] Strapi fetch took ${Date.now() - fetchStart}ms, status: ${response.status}`);

    if (!response.ok) {
      throw new Error(`Strapi fetch failed: ${response.status}`);
    }

    const jsonStart = Date.now();
    const data = await response.json();
    console.log(`[SSG][BlogPost] JSON parsing took ${Date.now() - jsonStart}ms`);

    if (!data.data || data.data.length === 0) {
      console.log(`[SSG][BlogPost] No article found with slug: ${params.slug}`);
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
    // Process the content to insert the CTA at the server level during static generation
    if (typeof article.attributes.content === 'string') {
      article.attributes.content = insertCTAIntoMarkdown(article.attributes.content, 3);
      console.log('[SSG] CTA placeholder inserted into content');
    }

    const formattedDate = article.attributes.published_date
      ? format(new Date(article.attributes.published_date), 'MMMM d, yyyy')
      : 'Date unavailable';

    const readingTime = article.attributes.read_time || 5; // Default to 5 minutes if not set

    // Helper function to safely access nested properties
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
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={getFullImageUrl(getImageUrl(article.attributes.cover_image))}
                      alt={article.attributes.title}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
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
                <BlogContent
                  content={article.attributes.content}
                />
              </div>

              {/* Newsletter CTA - Main */}
              <div className="my-16 newsletter-main">
                <CompactNewsletterCTA />
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
