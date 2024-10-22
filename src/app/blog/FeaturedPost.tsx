import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, afacad } from '../styles/common';

interface FeaturedPostProps {
  post: any;
  className?: string;
}

const FeaturedPost = ({ post, className }: FeaturedPostProps) => {
  if (!post) return null;

  return (
    <div className={`bg-white shadow-md rounded-lg mx-auto overflow-hidden ${className || ''}`}>
      {post.attributes.cover_image && (
        <div className="relative w-full h-64 sm:h-80">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.attributes.cover_image.data.attributes.url}`}
            alt={post.attributes.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4 sm:p-6">
        <h2 className={`${commonStyles.sectionTitle} !text-left !mb-5 break-words`}>{post.attributes.title}</h2>
        <p className={`${commonStyles.paragraph} mb-4`}>{post.attributes.preview}...</p>

        <div className={`flex items-center mb-4 ${afacad.className}`}>
          {post.attributes.author_headshot && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.attributes.author_headshot.data.attributes.url}`}
              alt={post.attributes.author || ''}
              width={40}
              height={40}
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
  )
}

export default FeaturedPost;
