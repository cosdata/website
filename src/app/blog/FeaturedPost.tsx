import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, afacad } from '../styles/common';

interface FeaturedPostProps {
  post: any;
  className?: string;
}

const FeaturedPost = ({ post, className }: FeaturedPostProps) => {
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
    
    return '/placeholder-image.jpg'; // Provide a default placeholder image
  };
  
  // Get author headshot URL safely
  const getAuthorHeadshotUrl = () => {
    const url = getImageUrl(post.attributes.author_headshot);
    if (url) return url;
    return '/placeholder-avatar.jpg';
  };

  return (
    <div className={`bg-white shadow-md rounded-lg mx-auto overflow-hidden ${className || ''}`}>
      {(post.attributes.cover_image?.data || post.attributes.cover?.data) ? (
        <div className="relative w-full h-64 sm:h-80">
          <Image
            src={getCoverImageUrl()}
            alt={post.attributes.title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="relative w-full h-64 sm:h-80 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No image available</span>
        </div>
      )}
      <div className="p-4 sm:p-6">
        <h2 className={`${commonStyles.sectionTitle} !text-left !mb-5 break-words`}>{post.attributes.title}</h2>
        <p className={`${commonStyles.paragraph} mb-4`}>{post.attributes.preview}...</p>

        <div className={`flex items-center mb-4 ${afacad.className}`}>
          {post.attributes.author_headshot?.data ? (
            <Image
              src={getAuthorHeadshotUrl()}
              alt={post.attributes.author || ''}
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-2"></div>
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
