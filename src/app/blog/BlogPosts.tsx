'use client'

import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, afacad } from '../styles/common';

interface BlogPostsProps {
  posts: any[];
  className?: string;
}

function BlogPosts({ posts, className }: BlogPostsProps) {
  console.log('Posts received in BlogPosts component:', posts);
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className || ''}`}>
      {posts && posts.length > 0 ? (
        posts.map((post: any) => {
          console.log('Processing post:', post.attributes.title);
          console.log('Cover image data:', post.attributes.cover_image);
          
          // Helper function to safely access nested properties
          const getImageUrl = (imageField: any) => {
            if (!imageField) return null;
            if (!imageField.data) return null;
            if (!imageField.data.attributes) return null;
            if (!imageField.data.attributes.url) return null;
            
            const url = imageField.data.attributes.url;
            if (url.startsWith('http')) return url;
            return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
          };
          
          // Get cover image URL safely
          const getCoverImageUrl = () => {
            const coverUrl = getImageUrl(post.attributes.cover_image);
            if (coverUrl) return coverUrl;
            
            // Try the cover field if cover_image is not available
            const url = getImageUrl(post.attributes.cover);
            if (url) return url;
            
            return '/placeholder-image.jpg'; // Provide a default placeholder image
          };
          
          // Get author information safely
          const authorName = typeof post.attributes.author === 'string' 
            ? post.attributes.author 
            : post.attributes.author?.name || 'Unknown Author';

          const authorRole = post.attributes.author_role || 
            (typeof post.attributes.author !== 'string' ? post.attributes.author?.role : null) || 
            'Contributor';
          
          return (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg"
            >
              {(post.attributes.cover_image?.data || post.attributes.cover?.data) ? (
                <Image
                  src={getCoverImageUrl()}
                  alt={post.attributes.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
              <div className="p-4">
                <h2 className={`${commonStyles.featureTitle} mb-2`}>{post.attributes.title}</h2>
                <p className={`${commonStyles.paragraph} mb-4`}>
                  {post.attributes.preview ? `${post.attributes.preview}...` : 'No preview available'}
                </p>
                <div className={`flex items-center mb-4 ${afacad.className}`}>
                  {post.attributes.author_headshot?.data ? (
                    <Image
                      src={getImageUrl(post.attributes.author_headshot) || '/placeholder-avatar.jpg'}
                      alt={authorName}
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                  )}
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-[#374151]">
                      {authorName}
                    </p>
                    <p className="text-base sm:text-lg text-[#374151]">
                      {post.attributes.publishedAt ? 
                        new Date(post.attributes.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        }) : 'Date unavailable'}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className={commonStyles.paragraph}>{post.attributes.read_time || '5'} min read</span>
                  <Link 
                    href={`/blog/${post.attributes.slug}`}
                    className={commonStyles.link}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className={commonStyles.paragraph}>No posts available</p>
      )}
    </div>
  );
}

export default BlogPosts;
