import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UseCasesSection from './components/UseCasesSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Cosdata Structured Search - Advanced Knowledge Graph Technology',
  description: 'Transform how you query and retrieve information from complex knowledge graphs with our advanced structured search technology.',
  openGraph: {
    title: 'Cosdata Structured Search - Advanced Knowledge Graph Technology',
    description: 'Transform how you query and retrieve information from complex knowledge graphs with our advanced structured search technology.',
    url: 'https://cosdata.io/products/structured-search',
    siteName: 'Cosdata',
    images: [
      {
        url: 'https://cosdata.io/og-image-structured-search.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosdata Structured Search',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function StructuredSearchPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <CTASection />
    </>
  );
} 