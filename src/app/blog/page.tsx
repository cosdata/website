import BlogPosts from './BlogPosts';
import CoverImage from './CoverImage';
import FeaturedPost from './FeaturedPost';
import NewsletterSignup from './NewsletterSignup';
import BlogPagination from './BlogPagination';
import { commonStyles, noto_sans_mono } from '../styles/common';
import { getArticleCount, getArticles, getFeaturedPost } from '../../lib/strapi';

// Disable dynamic params - use only statically generated routes
export const dynamicParams = false;
export const dynamic = 'force-static';
export const revalidate = 3600; // 1 hour cache

// Generate static params for all blog pages at build time
export async function generateStaticParams() {
  const pageSize = 9; // Same as the pageSize used in fetchPosts

  try {
    console.log('[SSG] Fetching total article count for static page generation...');

    // First, get the total count of articles
    const data = await getArticleCount();
    const totalArticles = data.meta?.pagination?.total || 0;
    const totalPages = Math.ceil(totalArticles / pageSize);

    console.log(`[SSG] Found ${totalArticles} articles, generating ${totalPages} blog pages`);

    // Generate params for all pages
    const params = [];

    // Add the default page (no page param)
    params.push({});

    // Add pages 2, 3, 4, etc.
    for (let i = 2; i <= totalPages; i++) {
      params.push({ page: i.toString() });
    }

    console.log(`[SSG] Generated static params for ${params.length} blog pages:`, params);

    return params;
  } catch (error) {
    console.error('[SSG] Error fetching article count for static generation:', error);
    return [{}]; // Return default page as fallback
  }
}

function transformArticleData(articles: any[]) {
  return articles.map(article => {
    if (article.attributes) {
      const attributes = article.attributes;

      // Handle cover_image
      if (!attributes.cover_image && attributes.cover && attributes.cover.data) {
        attributes.cover_image = attributes.cover;
      }

      // Handle author data if it's not in the expected format
      if (attributes.author && typeof attributes.author !== 'string' && !attributes.author.data) {
        const authorName = attributes.author.name || attributes.author;
        attributes.author = authorName;
      }

      return {
        id: article.id,
        attributes: attributes
      };
    }

    return {
      id: article.id,
      attributes: {
        title: article.title,
        slug: article.slug,
        content: article.content,
        preview: article.preview,
        read_time: article.read_time,
        author: article.author && typeof article.author === 'object' ? article.author.name || 'Unknown Author' : article.author,
        author_role: article.author_role,
        publishedAt: article.publishedAt,
        createdAt: article.createdAt,
        updatedAt: article.updatedAt,
        published_date: article.published_date,
        cover_image: article.cover_image ? {
          data: {
            attributes: {
              url: article.cover_image.url || article.cover_image
            }
          }
        } : article.cover ? {
          data: {
            attributes: {
              url: article.cover.url || article.cover
            }
          }
        } : null,
        author_headshot: article.author_headshot ? {
          data: {
            attributes: {
              url: article.author_headshot.url || article.author_headshot
            }
          }
        } : null
      }
    };
  });
}

async function fetchFeaturedPost() {
  try {
    const data = await getFeaturedPost();
    const transformedData = transformArticleData(data.data);
    return transformedData[0] || null;
  } catch (error) {
    console.error('[SSG] Error fetching featured post:', error);
    return null;
  }
}

async function fetchPosts(page: number = 1, pageSize: number = 9) {
  try {
    const data = await getArticles(page, pageSize);
    const transformedData = transformArticleData(data.data);

    return {
      data: transformedData,
      pagination: data.meta.pagination
    };
  } catch (error) {
    console.error('[SSG] Error fetching posts:', error);
    return {
      data: [],
      pagination: { pageCount: 1, page: 1, total: 0 }
    };
  }
}

export default async function Blog({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = parseInt(searchParams?.page || '1', 10);

  console.log(`[SSG] Rendering blog page ${currentPage}`);

  // Fetch data in parallel
  const [featuredPost, postsData] = await Promise.all([
    fetchFeaturedPost(),
    fetchPosts(currentPage, 9)
  ]);

  const { data: posts, pagination } = postsData;

  console.log(`[SSG] Fetched ${posts.length} posts for page ${currentPage}`);

  return (
    <div className={`min-h-screen ${noto_sans_mono.className}`}>
      <CoverImage />

      {/* Main Content Section */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          {/* Featured Post Section */}
          {featuredPost && (
            <div className="mb-16">
              <FeaturedPost post={featuredPost} className="overflow-hidden" isFeatured={true} />
            </div>
          )}

          {/* Latest Posts Section */}
          <div className="mb-16">
            <h2 className={`${commonStyles.sectionTitle} !mb-8`}>Latest Articles</h2>
            <BlogPosts posts={posts} />
          </div>

          {/* Pagination */}
          <div className="mb-16">
            <BlogPagination
              currentPage={currentPage}
              totalPages={pagination.pageCount}
            />
          </div>

          {/* Newsletter Section */}
          <div className="mb-16">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
}
