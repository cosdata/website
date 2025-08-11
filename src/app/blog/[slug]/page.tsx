import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import type { Metadata } from 'next';

import BlogContent from './BlogContent';
import TableOfContents from './TableOfContents';
import SocialShare from './SocialShare';
import CompactNewsletterCTA from '../CompactNewsletterCTA';
import { getFullImageUrl, getImageUrl } from '../../utils/imageUtils';
import { commonStyles, afacad, geologica } from '../../styles/common';
import { getArticleSlugs, getArticle } from '../../../lib/strapi';

export const dynamicParams = false;
export const dynamic = 'force-static';
export const revalidate = 3600; // 1 hour cache

/** Fetch *all* slugs at build time */
export async function generateStaticParams() {
  try {
    const { data } = await getArticleSlugs();
    return data.map((a: any) => ({ slug: a.attributes?.slug || a.slug }));
  } catch (error) {
    console.error('Error fetching article slugs:', error);
    return [];
  }
}

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.cosdata.io');

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await fetchArticle(params.slug);
  if (!article) return { title: 'Post not found', description: '' };

  const title = article.title;
  const description = article.preview || 'Read this blog post on Cosdata.';
  const image = article.cover
    ? getFullImageUrl(getImageUrl({ data: { attributes: { url: article.cover } } }))
    : `${BASE_URL}/images/og-image.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/blog/${params.slug}`,
      siteName: 'Cosdata',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const article = await fetchArticle(params.slug);
  if (!article) notFound();

  const formattedDate = article.published_date
    ? format(new Date(article.published_date), 'MMMM d, yyyy')
    : 'Date unavailable';

  const readingTime = article.read_time || 5;

  // Use original content without mid-content CTA
  const content = article.content || '';

  return (
    <div className="min-h-screen bg-[#f0f7ff]">
      <article className={`max-w-7xl mx-auto px-4 md:px-8 ${geologica.className}`}>
        {/* Hero */}
        <header className="mt-12 mb-12">
          <h1 className={`${commonStyles.sectionTitle} !text-left mb-6 text-4xl md:text-5xl lg:text-6xl text-[#0055c8]`}>
            {article.title}
          </h1>

          <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between text-[#374151] ${afacad.className} text-lg gap-4`}>
            <div className="flex items-center space-x-4">
              {article.author_headshot && (
                <Image
                  src={getFullImageUrl(article.author_headshot)}
                  alt={article.author}
                  width={48}
                  height={48}
                  className="rounded-full ring-2 ring-white shadow-md"
                />
              )}
              <div>
                <p className="font-medium">{article.author}</p>
                <p className="text-sm text-gray-600">{article.author_role}</p>
              </div>
            </div>

            <div className="text-md text-gray-600">
              <time dateTime={article.published_date}>{formattedDate}</time>
              <span className="mx-2">·</span>
              <span>{readingTime} min read</span>
            </div>
          </div>

          {article.cover && (
            <div className="w-full my-12">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={getFullImageUrl(article.cover)}
                    alt={article.title}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Body */}
        <div className="flex justify-between items-start relative gap-12">
          <div className="w-full lg:w-[calc(100%-20rem)]">
            <div
              className={`prose prose-lg max-w-none text-[#374151] ${afacad.className} text-lg sm:text-xl
                prose-headings:text-[#0055c8] prose-headings:font-semibold
                prose-a:text-[#0055c8] prose-a:no-underline hover:prose-a:text-[#003d8f]
                prose-blockquote:border-l-[#0055c8] prose-blockquote:bg-white/50
                prose-code:text-[#0055c8] prose-code:bg-white/50
                prose-pre:bg-gray-900 prose-pre:text-gray-100`}
            >
              <BlogContent content={content} />
            </div>

            {/* Newsletter CTA only at the end */}
            <CompactNewsletterCTA />
            <SocialShare title={article.title} />

            <footer className={`mb-12 p-8 bg-white/50 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm ${afacad.className} text-lg`}>
              <div className="flex items-center space-x-6">
                {article.author_headshot && (
                  <Image
                    src={getFullImageUrl(article.author_headshot)}
                    alt={article.author}
                    width={80}
                    height={80}
                    className="rounded-full ring-2 ring-white shadow-md"
                  />
                )}
                <div>
                  <p className="font-semibold text-xl text-[#0055c8] mb-2">{article.author}</p>
                  <p className="text-gray-600 mb-4">{article.author_role}</p>
                  <p className="text-gray-600">
                    Technical writer and developer advocate at Cosdata. Passionate about vector
                    databases and similarity search.
                  </p>
                </div>
              </div>
            </footer>
          </div>

          <TableOfContents />
        </div>
      </article>
    </div>
  );
}

async function fetchArticle(slug: string) {
  try {
    const { data } = await getArticle(slug);
    if (!data?.[0]) return null;

    const a = data[0].attributes || data[0];
    return {
      id: data[0].id,
      title: a.title,
      slug: a.slug,
      content: a.content || '',
      preview: a.preview,
      read_time: a.read_time,
      author: typeof a.author === 'string' ? a.author : a.author?.name || 'Unknown Author',
      author_role: a.author_role || 'Contributor',
      published_date: a.published_date || a.publishedAt,
      cover: a.cover_image?.data?.attributes?.url || a.cover?.url || null,
      author_headshot: a.author_headshot?.data?.attributes?.url || null,
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

