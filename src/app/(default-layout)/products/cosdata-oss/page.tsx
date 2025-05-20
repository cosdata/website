import Image from "next/image";
import Link from "next/link";
import { noto_sans_mono, afacad } from '../../../styles/common';
import type { Metadata } from 'next';

// Import components from the index file
import {
  HeroSection,
  FeaturesSection,
  BenchmarksSection,
  CTASection
} from './components';

export const metadata: Metadata = {
  title: 'Cosdata OSS - High-Performance Vector Search Database',
  description: 'Experience unmatched performance with our open source vector database implementation. Designed for high-throughput vector search applications.',
  openGraph: {
    title: 'Cosdata OSS - High-Performance Vector Search Database',
    description: 'Experience unmatched performance with our open source vector database implementation. Designed for high-throughput vector search applications.',
    url: 'https://cosdata.io/products/cosdata-oss',
    siteName: 'Cosdata',
    images: [
      {
        url: '/images/og-image-hnsw.png',
        width: 1200,
        height: 630,
        alt: 'Cosdata OSS Vector Database',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosdata OSS - High-Performance Vector Search Database',
    description: 'Experience unmatched performance with our open source vector database implementation. Designed for high-throughput vector search applications.',
    images: ['/images/og-image-hnsw.png'],
  },
};

export default function CosdataOSSPage() {
  return (
    <main className={`bg-transparent ${noto_sans_mono.className} ${afacad.className}`}>
      <HeroSection />
      <FeaturesSection />
      <BenchmarksSection />
      <CTASection />
    </main>
  );
} 