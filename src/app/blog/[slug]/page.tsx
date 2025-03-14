import Image from 'next/image';
import { notFound } from 'next/navigation';
import BlogContent from './BlogContent';
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
      <div className={`bg-white min-h-screen ${geologica.className}`}>
        <article className={commonStyles.mainContainer}>
          <header className="mb-8">
            <h1 className={`${commonStyles.sectionTitle} !text-left mb-2`}>{post.attributes.title}</h1>
            <div className={`flex items-center justify-between text-[#374151] ${afacad.className} text-lg sm:text-xl`}>
              <div className="flex items-center space-x-4">
                {post.attributes.author_headshot && post.attributes.author_headshot.data && (
                  <Image
                    src={getFullImageUrl(getImageUrl(post.attributes.author_headshot))}
                    alt={authorName}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  {authorName && (
                    <p className="font-medium">{authorName}</p>
                  )}
                  {authorRole && (
                    <p className="text-sm">{authorRole}</p>
                  )}
                </div>
              </div>
              <div className="text-md">
                <time dateTime={post.attributes.publishedAt}>{formattedDate}</time>
                <span className="mx-2">·</span>
                <span>{readingTime} min read</span>
              </div>
            </div>
          </header>

          {post.attributes.cover_image && post.attributes.cover_image.data && (
            <Image
              src={getFullImageUrl(getImageUrl(post.attributes.cover_image))}
              alt={post.attributes.title}
              width={1200}
              height={600}
              className="w-full aspect-video object-cover rounded-lg mb-8"
            />
          )}

          <div className={`prose prose-lg max-w-none text-[#374151] ${afacad.className} text-lg sm:text-xl`}>
            <BlogContent content={post.attributes.content} />
          </div>

          <footer className={`mt-12 pt-8 border-t border-gray-200 ${afacad.className} text-lg sm:text-xl`}>
            <div className="flex items-center space-x-4">
              {post.attributes.author_headshot && post.attributes.author_headshot.data && (
                <Image
                  src={getFullImageUrl(getImageUrl(post.attributes.author_headshot))}
                  alt={authorName}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              )}
              <div>
                {authorName && (
                  <p className="font-semibold text-lg text-[#374151]">{authorName}</p>
                )}
                {authorRole && (
                  <p className="text-[#374151]">{authorRole}</p>
                )}
              </div>
            </div>
          </footer>
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
}
