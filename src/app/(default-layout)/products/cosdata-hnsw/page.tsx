import Image from "next/image";
import Link from "next/link";
import { noto_sans_mono } from '../../../styles/common';
import type { Metadata } from 'next';

// Import components from the index file
import {
  HeroSection,
  FeaturesSection,
  BenchmarksSection,
  CTASection
} from './components';

export const metadata: Metadata = {
  title: 'Cosdata HNSW - High-Performance Vector Search Database',
  description: 'Experience unmatched performance with our optimized HNSW vector database implementation. Designed for high-throughput vector search applications.',
  openGraph: {
    title: 'Cosdata HNSW - High-Performance Vector Search Database',
    description: 'Experience unmatched performance with our optimized HNSW vector database implementation. Designed for high-throughput vector search applications.',
    url: 'https://cosdata.io/products/cosdata-hnsw',
    siteName: 'Cosdata',
    images: [
      {
        url: '/images/og-image-hnsw.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosdata HNSW Vector Database',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosdata HNSW - High-Performance Vector Search Database',
    description: 'Experience unmatched performance with our optimized HNSW vector database implementation. Designed for high-throughput vector search applications.',
    images: ['/images/og-image-hnsw.jpg'],
  },
};

export default function CosdataHNSWPage() {
  return (
    <main className={`bg-transparent ${noto_sans_mono.className}`}>
      <HeroSection />
      <FeaturesSection />
      <BenchmarksSection />
      <CTASection />
    </main>
  );
} 