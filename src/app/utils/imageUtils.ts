/**
 * Safely extracts image URL from Strapi data structure
 */
export const getImageUrl = (imageField: any): string | null => {
  if (!imageField) return null;
  if (!imageField.data) return null;
  if (!imageField.data.attributes) return null;
  if (!imageField.data.attributes.url) return null;
  
  const url = imageField.data.attributes.url;
  if (url.startsWith('http')) return url;
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
};

/**
 * Extracts cover image URL from post data, falling back to alternatives
 */
export const getCoverImageUrl = (post: any): string => {
  // Try cover_image first
  const coverUrl = getImageUrl(post.attributes?.cover_image);
  if (coverUrl) return coverUrl;
  
  // Try the cover field if cover_image is not available
  const url = getImageUrl(post.attributes?.cover);
  if (url) return url;
  
  // Fall back to placeholder
  return '/placeholder-image.jpg';
};

/**
 * Gets author headshot image URL with fallback
 */
export const getAuthorHeadshotUrl = (post: any): string => {
  const url = getImageUrl(post.attributes?.author_headshot);
  return url || '/placeholder-avatar.jpg';
};

/**
 * Returns full image URL handling both relative and absolute paths
 */
export const getFullImageUrl = (url: string | null): string => {
  if (!url) return '/placeholder-image.jpg';
  if (url.startsWith('http')) return url;
  return `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${url}`;
};

/**
 * Process author information from post
 */
export const getAuthorInfo = (post: any) => {
  const authorName = typeof post.attributes.author === 'string' 
    ? post.attributes.author 
    : post.attributes.author?.name || 'Unknown Author';

  const authorRole = post.attributes.author_role || 
    (typeof post.attributes.author !== 'string' ? post.attributes.author?.role : null) || 
    'Contributor';

  return { authorName, authorRole };
}; 