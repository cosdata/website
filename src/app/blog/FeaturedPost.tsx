import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, afacad } from '../styles/common';

interface FeaturedPostProps {
  post: any;
  className?: string;
  isFeatured?: boolean;
}

const FeaturedPost = ({ post, className, isFeatured = false }: FeaturedPostProps) => {
  if (!post) return null;

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
    
    return '/placeholder-image.jpg';
  };
  
  // Get author headshot URL safely
  const getAuthorHeadshotUrl = () => {
    const url = getImageUrl(post.attributes.author_headshot);
    return url || '/placeholder-avatar.jpg';
  };

  if (isFeatured) {
    return (
      <div className={`group relative flex flex-col md:flex-row ${className || ''}`}>
        {/* Image Column */}
        <div className="md:w-1/2">
          {(post.attributes.cover_image?.data || post.attributes.cover?.data) ? (
            <div className="relative w-full h-[300px] md:h-full">
              <Image
                src={getCoverImageUrl()}
                alt={post.attributes.title}
                fill
                className="object-cover md:rounded-l-xl"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:rounded-l-xl"></div>
            </div>
          ) : (
            <div className="relative w-full h-[300px] md:h-full bg-gray-200 flex items-center justify-center md:rounded-l-xl">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>

        {/* Content Column */}
        <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055c8] mb-4 group-hover:text-[#f23665] transition-colors duration-300">
              {post.attributes.title}
            </h2>
            
            <p className={`${commonStyles.paragraph} mb-6`}>
              {post.attributes.preview}...
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <div className={`flex items-center ${afacad.className}`}>
              {post.attributes.author_headshot?.data ? (
                <Image
                  src={getAuthorHeadshotUrl()}
                  alt={post.attributes.author || ''}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              )}
              <div>
                <p className="text-lg font-medium text-[#374151]">{post.attributes.author}</p>
                <p className="text-base text-[#6b7280]">
                  {new Date(post.attributes.publishedAt).toLocaleDateString('en-US', {
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
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#f23665] rounded-lg hover:bg-[#d92d5c] transition-colors duration-300"
            >
              Read Article
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      {(post.attributes.cover_image?.data || post.attributes.cover?.data) ? (
        <div className="relative w-full h-[250px] sm:h-[300px]">
          <Image
            src={getCoverImageUrl()}
            alt={post.attributes.title}
            fill
            className="object-cover rounded-t-xl"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-t-xl"></div>
        </div>
      ) : (
        <div className="relative w-full h-[250px] sm:h-[300px] bg-gray-200 flex items-center justify-center rounded-t-xl">
          <span className="text-gray-500">No image available</span>
        </div>
      )}
      
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
                src={getAuthorHeadshotUrl()}
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
                {new Date(post.attributes.publishedAt).toLocaleDateString('en-US', {
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
