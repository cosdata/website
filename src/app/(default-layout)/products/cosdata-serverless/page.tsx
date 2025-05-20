import Image from "next/image";
import Link from "next/link";
import { noto_sans_mono } from '../../../styles/common';
import type { Metadata } from 'next';

// Import components from the index file
import {
  HeroSection,
  FeaturesSection,
  ComparisonSection,
  CTASection
} from './components';

export const metadata: Metadata = {
  title: 'Cosdata Serverless - Infinitely Scalable Vector Search',
  description: 'Harness the power of CHANNI architecture for unlimited scale and pay-per-use pricing with our serverless vector database solution.',
  openGraph: {
    title: 'Cosdata Serverless - Infinitely Scalable Vector Search',
    description: 'Harness the power of CHANNI architecture for unlimited scale and pay-per-use pricing with our serverless vector database solution.',
    url: 'https://cosdata.io/products/cosdata-serverless',
    siteName: 'Cosdata',
    images: [
      {
        url: '/images/og-image-serverless.png',
        width: 1200,
        height: 630,
        alt: 'Cosdata Serverless Vector Database',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosdata Serverless - Infinitely Scalable Vector Search',
    description: 'Harness the power of CHANNI architecture for unlimited scale and pay-per-use pricing with our serverless vector database solution.',
    images: ['/images/og-image-serverless.png'],
  },
};

export default function CosdataServerlessPage() {
  return (
    <main className="relative">
      <HeroSection />
      <FeaturesSection />
      <ComparisonSection />
      <CTASection />
    </main>
  );
} 