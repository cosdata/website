'use client'

import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, afacad } from '../styles/common';

interface BlogPostsProps {
  posts: any[];
  className?: string;
}

function BlogPosts({ posts, className }: BlogPostsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className || ''}`}>
      {posts.length > 0 ? (
        posts.map((post: any) => (
          <div 
            key={post.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg"
          >
            {post.attributes.cover_image && post.attributes.cover_image.data ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.attributes.cover_image.data.attributes.url}`}
                alt={post.attributes.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">No image available</div>
            )}
            <div className="p-4">
              <h2 className={`${commonStyles.featureTitle} mb-2`}>{post.attributes.title}</h2>
              <p className={`${commonStyles.paragraph} mb-4`}>{post.attributes.preview}...</p>
              <div className={`flex items-center mb-4 ${afacad.className}`}>
                {post.attributes.author_headshot && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.attributes.author_headshot.data.attributes.url}`}
                    alt={post.attributes.author || ''}
                    width={32}
                    height={32}
                    className="rounded-full mr-2"
                  />
                )}
                <div>
                  <p className="text-lg sm:text-xl font-medium text-[#374151]">{post.attributes.author}</p>
                  <p className="text-base sm:text-lg text-[#374151]">
                    {new Date(post.attributes.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className={commonStyles.paragraph}>{post.attributes.read_time} min read</span>
                <Link 
                  href={`/blog/${post.attributes.slug}`}
                  className={commonStyles.link}
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className={commonStyles.paragraph}>No posts available</p>
      )}
    </div>
  )
}

export default BlogPosts;
