import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, afacad } from '../styles/common';
import { getCoverImageUrl, getAuthorHeadshotUrl } from '../utils/imageUtils';

interface FeaturedPostProps {
  post: any;
  className?: string;
  isFeatured?: boolean;
}

const FeaturedPost = ({ post, className, isFeatured = false }: FeaturedPostProps) => {
  if (!post) return null;

  if (isFeatured) {
    return (
      <div className={`${className || ''} mb-8`}>
        <h2 className={`${commonStyles.sectionTitle} !mb-8`}>Featured Article</h2>
        
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Image on left with larger size */}
          <div className="md:w-1/2 lg:w-5/12">
            <Link href={`/blog/${post.attributes.slug}`} className="block overflow-hidden rounded-lg">
              <div className="relative aspect-[16/9]">
                <Image
                  src={getCoverImageUrl(post)}
                  alt={post.attributes.title}
                  fill
                  priority
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            </Link>
          </div>
          
          {/* Content on right */}
          <div className="md:w-1/2 lg:w-7/12">
            <Link href={`/blog/${post.attributes.slug}`} className="block">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0055c8] mb-3 hover:text-[#f23665] transition-colors duration-300">
                {post.attributes.title}
              </h3>
            </Link>
            
            <p className={`${commonStyles.paragraph} mb-5 text-base md:text-lg line-clamp-2 md:line-clamp-3`}>
              {post.attributes.preview}
            </p>
            
            {/* Author and meta info in a horizontal layout */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center">
                {post.attributes.author_headshot?.data ? (
                  <Image
                    src={getAuthorHeadshotUrl(post)}
                    alt={post.attributes.author || ''}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                )}
                <div className={afacad.className}>
                  <p className="font-medium text-[#374151]">{post.attributes.author}</p>
                  <div className="flex text-sm text-[#6b7280]">
                    <time dateTime={post.attributes.published_date || post.attributes.publishedAt}>
                      {(post.attributes.published_date
                        ? new Date(post.attributes.published_date)
                        : new Date(post.attributes.publishedAt)
                      ).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="mx-2">·</span>
                    <span>{post.attributes.read_time} min read</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              href={`/blog/${post.attributes.slug}`}
              className="inline-flex items-center px-5 py-2 text-base font-medium text-white bg-[#f23665] rounded-lg hover:bg-[#d92d5c] transition-colors duration-300"
            >
              Read Article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Regular post card layout
  return (
    <div className={`group relative ${className || ''}`}>
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={getCoverImageUrl(post)}
          alt={post.attributes.title}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>
      
      <div className="relative p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0055c8] mb-4 group-hover:text-[#f23665] transition-colors duration-300 line-clamp-2">
          {post.attributes.title}
        </h2>
        
        <p className={`${commonStyles.paragraph} mb-6 line-clamp-2`}>
          {post.attributes.preview}...
        </p>

        <div className="flex items-center justify-between">
          <div className={`flex items-center ${afacad.className}`}>
            {post.attributes.author_headshot?.data ? (
              <Image
                src={getAuthorHeadshotUrl(post)}
                alt={post.attributes.author || ''}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
            )}
            <div>
              <p className="text-base font-medium text-[#374151]">{post.attributes.author}</p>
              <p className="text-sm text-[#6b7280]">
                {new Date(post.attributes.published_date || post.attributes.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                <span className="mx-2">·</span>
                {post.attributes.read_time} min read
              </p>
            </div>
          </div>
          
          <Link 
            href={`/blog/${post.attributes.slug}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#f23665] rounded-lg hover:bg-[#d92d5c] transition-colors duration-300"
          >
            Read Article
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
