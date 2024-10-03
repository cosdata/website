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
    NEXT_PUBLIC_STRAPI_URL: 'http://38.45.71.232:1337',
  },
  images: {
    domains: ['38.45.71.232','http://38.45.71.232:1337'], 
  },
}

export default nextConfig