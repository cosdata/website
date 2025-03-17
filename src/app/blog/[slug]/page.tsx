import Image from 'next/image';
import { notFound } from 'next/navigation';
import BlogContent from './BlogContent';
import TableOfContents from './TableOfContents';
import SocialShare from './SocialShare';
import { format } from 'date-fns';
import axios from 'axios';
import { commonStyles, afacad, geologica } from '../../styles/common';

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  try {
    const response = await fetch(`${baseUrl}/api/posts`, { 
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data: posts } = await response.json();
    return posts.map((post: any) => ({
      slug: post.attributes.slug,
    }));
  } catch (error) {
    console.error('Error fetching posts for static params:', error);
    return []; // Return an empty array if there's an error
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Use window.location.origin for client-side or environment variable for server-side
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.cosdata.io');
  
  console.log('Base URL:', baseUrl);
  console.log('Slug:', params.slug);
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  console.log('Strapi URL:', strapiUrl);

  try {
    const apiUrl = `${baseUrl}/api/posts/${params.slug}`;
    console.log('API URL:', apiUrl);
    
    // Add a direct fetch from Strapi as a fallback
    let post;
    try {
      const response = await fetch(apiUrl, {
        next: { revalidate: 3600 },
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      post = await response.json();
    } catch (apiError) {
      console.log("API route failed, trying direct Strapi fetch");
      // Try direct fetch from Strapi
      const directResponse = await fetch(`${strapiUrl}/api/articles?filters[slug][$eq]=${params.slug}&populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_ARTICLES_READ_TOKEN}`,
        },
        next: { revalidate: 3600 },
      });
      
      if (!directResponse.ok) {
        throw new Error(`Direct Strapi fetch failed: ${directResponse.status}`);
      }
      
      const data = await directResponse.json();
      if (!data.data || data.data.length === 0) {
        throw new Error("No article found with this slug");
      }
      
      post = data.data[0];
    }

    if (!post) {
      notFound();
    }

    // Log the post structure to debug
    console.log('Post structure:', JSON.stringify(post, null, 2));

    // Check if post has the expected structure
    if (!post.attributes) {
      console.error('Post is missing attributes property:', post);
      // If post is the direct data from Strapi without the expected structure,
      // we need to transform it
      post = {
        id: post.id,
        attributes: {
          title: post.title,
          slug: post.slug,
          content: post.content,
          preview: post.preview,
          read_time: post.read_time,
          author: post.author && typeof post.author === 'object' ? post.author.name || 'Unknown Author' : post.author,
          author_role: post.author_role,
          publishedAt: post.publishedAt,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
          cover_image: post.cover_image ? {
            data: {
              attributes: {
                url: post.cover_image.url || post.cover_image
              }
            }
          } : post.cover ? {
            data: {
              attributes: {
                url: post.cover.url || post.cover
              }
            }
          } : null,
          author_headshot: post.author_headshot ? {
            data: {
              attributes: {
                url: post.author_headshot.url || post.author_headshot
              }
            }
          } : null
        }
      };
    } else {
      // Ensure the post has the expected structure even if it already has attributes
      const attributes = post.attributes;
      
      // Handle cover_image
      if (!attributes.cover_image && attributes.cover && attributes.cover.data) {
        attributes.cover_image = attributes.cover;
      }
      
      // Handle author data if it's not in the expected format
      if (attributes.author && typeof attributes.author === 'object' && !attributes.author.data) {
        attributes.author = attributes.author.name || 'Unknown Author';
      }
    }

    const formattedDate = post.attributes.publishedAt
      ? format(new Date(post.attributes.publishedAt), 'MMMM d, yyyy')
      : 'Date unavailable';

    const readingTime = post.attributes.read_time || 5; // Default to 5 minutes if not set

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
    const authorName = typeof post.attributes.author === 'string' 
      ? post.attributes.author 
      : post.attributes.author?.name || 'Unknown Author';

    const authorRole = post.attributes.author_role || 
      (typeof post.attributes.author !== 'string' ? post.attributes.author?.role : null) || 
      'Contributor';

    return (
      <div className="min-h-screen bg-[#f0f7ff]">
        <article className={`max-w-7xl mx-auto px-4 md:px-8 ${geologica.className}`}>
          {/* Hero Section */}
          <header className="mt-12 mb-12">
            {/* Title and Author Info */}
            <div className="mb-12">
              <h1 className={`${commonStyles.sectionTitle} !text-left mb-6 text-4xl md:text-5xl lg:text-6xl text-[#0055c8]`}>
                {post.attributes.title}
              </h1>
              <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between text-[#374151] ${afacad.className} text-lg gap-4`}>
                <div className="flex items-center space-x-4">
                  {post.attributes.author_headshot && post.attributes.author_headshot.data && (
                    <Image
                      src={getFullImageUrl(getImageUrl(post.attributes.author_headshot))}
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
                  <time dateTime={post.attributes.publishedAt}>{formattedDate}</time>
                  <span className="mx-2">·</span>
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            {post.attributes.cover_image && post.attributes.cover_image.data && (
              <div className="w-full mb-12">
                <div className="relative w-full bg-white rounded-xl shadow-xl overflow-hidden">
                  <Image
                    src={getFullImageUrl(getImageUrl(post.attributes.cover_image))}
                    alt={post.attributes.title}
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
                <BlogContent content={post.attributes.content} />
              </div>

              {/* Social Share Section */}
              <SocialShare title={post.attributes.title} />

              {/* Author Bio Section */}
              <footer className={`mb-12 p-8 bg-white/50 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm ${afacad.className} text-lg`}>
                <div className="flex items-center space-x-6">
                  {post.attributes.author_headshot && post.attributes.author_headshot.data && (
                    <Image
                      src={getFullImageUrl(getImageUrl(post.attributes.author_headshot))}
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
