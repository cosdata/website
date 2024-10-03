'use client'

import Image from 'next/image';
import Link from 'next/link';

function BlogPosts({ posts }: { posts: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <h2 className="text-xl font-bold mb-2">{post.attributes.title}</h2>
              <p className="text-gray-600 mb-4">{post.attributes.preview}...</p>
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
                  <p className="text-sm font-medium">{post.attributes.author}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(post.attributes.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.attributes.read_time} min read</span>
                <Link 
                  href={`/blog/${post.attributes.slug}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  )
}

export default BlogPosts;