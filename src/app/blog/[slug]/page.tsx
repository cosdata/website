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
          author: post.author,
          author_role: post.author_role,
          publishedAt: post.publishedAt,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
          cover_image: post.cover_image ? {
            data: {
              attributes: {
                url: post.cover_image.url
              }
            }
          } : null,
          author_headshot: post.author_headshot ? {
            data: {
              attributes: {
                url: post.author_headshot.url
              }
            }
          } : null
        }
      };
    }

    const formattedDate = post.attributes.publishedAt
      ? format(new Date(post.attributes.publishedAt), 'MMMM d, yyyy')
      : 'Date unavailable';

    const readingTime = post.attributes.read_time || 5; // Default to 5 minutes if not set

    const getFullImageUrl = (url: string) => {
      if (url.startsWith('http')) return url;
      return `${strapiUrl}${url}`;
    };

    return (
      <div className={`bg-white min-h-screen ${geologica.className}`}>
        <article className={commonStyles.mainContainer}>
          <header className="mb-8">
            <h1 className={`${commonStyles.sectionTitle} !text-left mb-2`}>{post.attributes.title}</h1>
            <div className={`flex items-center justify-between text-[#374151] ${afacad.className} text-lg sm:text-xl`}>
              <div className="flex items-center space-x-4">
                {post.attributes.author_headshot && (
                  <Image
                    src={getFullImageUrl(post.attributes.author_headshot.data.attributes.url)}
                    alt={post.attributes.author || ''}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  {post.attributes.author && (
                    <p className="font-medium">{post.attributes.author}</p>
                  )}
                  {post.attributes.author_role && (
                    <p className="text-sm">{post.attributes.author_role}</p>
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

          {post.attributes.cover_image && (
            <Image
              src={getFullImageUrl(post.attributes.cover_image.data.attributes.url)}
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
              {post.attributes.author_headshot && (
                <Image
                  src={getFullImageUrl(post.attributes.author_headshot.data.attributes.url)}
                  alt={post.attributes.author || ''}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              )}
              <div>
                {post.attributes.author && (
                  <p className="font-semibold text-lg text-[#374151]">{post.attributes.author}</p>
                )}
                {post.attributes.author_role && (
                  <p className="text-[#374151]">{post.attributes.author_role}</p>
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
