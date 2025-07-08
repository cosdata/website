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
      'truthful-boot-0a4d1915e9.strapiapp.com:1337',
      'localhost',
      '127.0.0.1',
    ], 
  },
  webpack(config) {
    // Support loading SVGs as components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/tech/mavann-paper',
        destination: '/tech/mavann-metadata-filtering',
        permanent: true,
      },
      {
        source: '/tech/channi-paper',
        destination: '/blog/channi-paper',
        permanent: true,
      },
      {
        source: '/tech/mavann-metadata-filtering',
        destination: '/blog/mavann-metadata-filtering',
        permanent: true,
      },
    ];
  },
}

export default nextConfig