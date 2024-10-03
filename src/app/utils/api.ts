import axios from 'axios';
console.log('NODE_ENV:', process.env);

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
const strapiToken = process.env.STRAPI_ARTICLES_READ_TOKEN;

console.log('STRAPI_URL:', strapiUrl);
console.log('STRAPI_TOKEN:', strapiToken);
console.log('NODE_ENV:', process.env);

export const getPosts = async () => {
  console.log('STRAPI_URL:', strapiUrl);
console.log('STRAPI_TOKEN:', strapiToken);
console.log('NODE_ENV:', process.env);
  try {
    const response = await axios.get(`${strapiUrl}/api/articles?populate=*`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching posts: ', error);
    return [];
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const response = await axios.get(`${strapiUrl}/api/articles?filters[slug][$eq]=${slug}&populate=*`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
    });
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching post: ', error);
    return null;
  }
};
