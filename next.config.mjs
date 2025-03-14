import { createPool } from '@vercel/postgres';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@vercel/postgres'],
  },
  env: {
    KV_URL: process.env.KV_URL,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN,
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    domains: [
      '38.45.67.216',
      'http://38.45.67.216:1337',
      'heroic-song-72b61c9d01.media.strapiapp.com',
      'localhost',
      '127.0.0.1',
    ], 
  },
  async redirects() {
    return [
      {
        source: '/tech/mavann-paper',
        destination: '/tech/mavann-metadata-filtering',
        permanent: true,
      },
    ];
  },
}

export default nextConfig