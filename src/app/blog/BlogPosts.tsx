'use client'

import Image from 'next/image';
import Link from 'next/link';

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
              <h2 className="text-xl font-bold mb-2 text-[#374151]">{post.attributes.title}</h2>
              <p className="text-[#374151] mb-4 text-lg sm:text-xl">{post.attributes.preview}...</p>
              <div className="flex items-center mb-4">
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
                <span className="text-lg sm:text-xl text-[#374151]">{post.attributes.read_time} min read</span>
                <Link 
                  href={`/blog/${post.attributes.slug}`}
                  className="text-lg sm:text-xl text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-[#374151] text-lg sm:text-xl">No posts available</p>
      )}
    </div>
  )
}

export default BlogPosts;
