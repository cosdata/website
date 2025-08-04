const STRAPI = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const TOKEN = process.env.STRAPI_ARTICLES_READ_TOKEN;

const fetchOptions = {
  headers: { Authorization: `Bearer ${TOKEN}` },
  cache: 'force-cache' as const, // Cache until redeployed
};

export async function getArticles(page = 1, pageSize = 9) {
  const url = new URL('/api/articles', STRAPI);
  url.searchParams.set('pagination[page]', String(page));
  url.searchParams.set('pagination[pageSize]', String(pageSize));
  url.searchParams.set('populate', '*');
  url.searchParams.set('sort', 'published_date:desc');

  const res = await fetch(url.toString(), fetchOptions);
  if (!res.ok) throw new Error(`Strapi fetch failed: ${res.status}`);
  return res.json();
}

export async function getArticle(slug: string) {
  const url = new URL('/api/articles', STRAPI);
  url.searchParams.set('filters[slug][$eq]', slug);
  url.searchParams.set('populate', '*');

  const res = await fetch(url.toString(), fetchOptions);
  if (!res.ok) throw new Error(`Strapi fetch failed: ${res.status}`);
  return res.json();
}

export async function getArticleSlugs() {
  const url = new URL('/api/articles', STRAPI);
  url.searchParams.set('fields[0]', 'slug');

  const res = await fetch(url.toString(), fetchOptions);
  if (!res.ok) throw new Error(`Strapi fetch failed: ${res.status}`);
  return res.json();
}

export async function getFeaturedPost() {
  const url = new URL('/api/articles', STRAPI);
  url.searchParams.set('pagination[page]', '1');
  url.searchParams.set('pagination[pageSize]', '1');
  url.searchParams.set('populate', '*');
  url.searchParams.set('sort', 'published_date:desc');

  const res = await fetch(url.toString(), fetchOptions);
  if (!res.ok) throw new Error(`Strapi fetch failed: ${res.status}`);
  return res.json();
}

export async function getArticleCount() {
  const url = new URL('/api/articles', STRAPI);
  url.searchParams.set('pagination[page]', '1');
  url.searchParams.set('pagination[pageSize]', '1');

  const res = await fetch(url.toString(), fetchOptions);
  if (!res.ok) throw new Error(`Strapi fetch failed: ${res.status}`);
  return res.json();
}
