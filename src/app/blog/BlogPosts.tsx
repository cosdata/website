'use client'

import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, afacad } from '../styles/common';

interface BlogPostsProps {
  posts: any[];
  className?: string;
}

function BlogPosts({ posts, className }: BlogPostsProps) {
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
  const getCoverImageUrl = (post: any) => {
    const coverUrl = getImageUrl(post.attributes.cover_image);
    if (coverUrl) return coverUrl;
    
    // Try the cover field if cover_image is not available
    const url = getImageUrl(post.attributes.cover);
    if (url) return url;
    
    return '/placeholder-image.jpg';
  };
  
  // Get author information safely
  const getAuthorInfo = (post: any) => {
    const authorName = typeof post.attributes.author === 'string' 
      ? post.attributes.author 
      : post.attributes.author?.name || 'Unknown Author';

    const authorRole = post.attributes.author_role || 
      (typeof post.attributes.author !== 'string' ? post.attributes.author?.role : null) || 
      'Contributor';

    return { authorName, authorRole };
  };
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className || ''}`}>
      {posts && posts.length > 0 ? (
        posts.map((post: any) => {
          const { authorName } = getAuthorInfo(post);
          
          return (
            <Link
              key={post.id}
              href={`/blog/${post.attributes.slug}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 sm:h-56">
                <Image
                  src={getCoverImageUrl(post)}
                  alt={post.attributes.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#0055c8] mb-3 group-hover:text-[#f23665] transition-colors duration-300 line-clamp-2">
                  {post.attributes.title}
                </h2>
                
                <p className={`${commonStyles.paragraph} mb-4 line-clamp-2`}>
                  {post.attributes.preview}
                </p>

                <div className={`flex items-center justify-between text-sm ${afacad.className}`}>
                  <div className="flex items-center space-x-2">
                    {post.attributes.author_headshot?.data ? (
                      <Image
                        src={getImageUrl(post.attributes.author_headshot) || '/placeholder-avatar.jpg'}
                        alt={authorName}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    )}
                    <span className="text-[#374151] font-medium">{authorName}</span>
                  </div>
                  
                  <div className="text-[#6b7280]">
                    {post.attributes.read_time} min read
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div className="col-span-full text-center">
          <p className={commonStyles.paragraph}>No posts available</p>
        </div>
      )}
    </div>
  );
}

export default BlogPosts;
