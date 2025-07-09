
import BlogPosts from './BlogPosts';
import CoverImage from './CoverImage';
import FeaturedPost from './FeaturedPost';
import Pagination from './Pagination';
import NewsletterSignup from './NewsletterSignup';
import ScrollRestoration from '../components/ScrollRestoration';
import { commonStyles, noto_sans_mono } from '../styles/common';
import { getCoverImageUrl } from '../utils/imageUtils';

// Enable ISR: revalidate every 1 hour
export const revalidate = 3600;

interface Post {
  id: number;
  attributes: any;
}

interface PaginationInfo {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface PostsResponse {
  data: Post[];
  meta: {
    pagination: PaginationInfo;
  };
}

function getStrapiUrl() {
  return process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
}

function getStrapiToken() {
  return process.env.STRAPI_ARTICLES_READ_TOKEN;
}

async function fetchPosts(page: number, pageSize: number): Promise<PostsResponse> {
  const strapiUrl = getStrapiUrl();
  const url = `${strapiUrl}/api/articles?sort=published_date:desc&page=${page}&pageSize=${pageSize}&populate=*`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${getStrapiToken()}`,
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }
  return res.json();
}

async function fetchFeaturedPost(): Promise<Post | null> {
  const strapiUrl = getStrapiUrl();
  const url = `${strapiUrl}/api/articles?sort=published_date:desc&page=1&pageSize=1&populate=*`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${getStrapiToken()}`,
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data.data && data.data.length > 0 ? data.data[0] : null;
}

import { Suspense } from 'react';

interface BlogPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Blog({ searchParams }: BlogPageProps) {
  // Pagination from query params (default to 1)
  const page = searchParams?.page ? Number(searchParams.page) : 1;
  const pageSize = 9;

  let featuredPost: Post | null = null;
  let posts: Post[] = [];
  let pagination: PaginationInfo = { page, pageSize, pageCount: 1, total: 0 };
  let fetchError = false;

  try {
    // Fetch featured post and posts in parallel
    const [featured, postsRes] = await Promise.all([
      fetchFeaturedPost(),
      fetchPosts(page, pageSize),
    ]);
    featuredPost = featured;
    posts = postsRes.data;
    pagination = postsRes.meta.pagination;
  } catch (e) {
    fetchError = true;
  }

  return (
    <div className={`min-h-screen ${noto_sans_mono.className}`}>
      <ScrollRestoration />
      <CoverImage />
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
            {fetchError ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-red-500">Failed to load posts.</div>
              </div>
            ) : posts.length === 0 ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-gray-500">No posts found.</div>
              </div>
            ) : (
              <BlogPosts posts={posts} />
            )}
          </div>
          {/* Pagination */}
          <div className="mb-16">
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.pageCount}
              onPageChange={() => { }} // handled by Link navigation
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
