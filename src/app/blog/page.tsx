import BlogPosts from './BlogPosts';
import CoverImage from './CoverImage';
import FeaturedPost from './FeaturedPost';
import NewsletterSignup from './NewsletterSignup';
import BlogPagination from './BlogPagination';
import { commonStyles, noto_sans_mono } from '../styles/common';

export const revalidate = 3600;

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
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

  try {
    const params = new URLSearchParams({
      'pagination[page]': '1',
      'pagination[pageSize]': '1',
      'populate': '*',
      'sort': 'published_date:desc',
    });

    const response = await fetch(`${strapiUrl}/api/articles?${params}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_ARTICLES_READ_TOKEN}`,
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error(`Strapi fetch failed: ${response.status}`);
    }

    const data = await response.json();
    const transformedData = transformArticleData(data.data);

    return transformedData[0] || null;
  } catch (error) {
    console.error('Error fetching featured post:', error);
    return null;
  }
}

async function fetchPosts(page: number = 1, pageSize: number = 9) {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

  try {
    const params = new URLSearchParams({
      'pagination[page]': page.toString(),
      'pagination[pageSize]': pageSize.toString(),
      'populate': '*',
      'sort': 'published_date:desc',
    });

    const response = await fetch(`${strapiUrl}/api/articles?${params}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_ARTICLES_READ_TOKEN}`,
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error(`Strapi fetch failed: ${response.status}`);
    }

    const data = await response.json();
    const transformedData = transformArticleData(data.data);

    return {
      data: transformedData,
      pagination: data.meta.pagination
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      data: [],
      pagination: { pageCount: 1, page: 1, total: 0 }
    };
  }
}

export default async function Blog({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = parseInt(searchParams?.page || '1', 10);

  // Fetch data in parallel
  const [featuredPost, postsData] = await Promise.all([
    fetchFeaturedPost(),
    fetchPosts(currentPage, 9)
  ]);

  const { data: posts, pagination } = postsData;

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
