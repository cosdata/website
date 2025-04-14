import Image from "next/image";
import type { Metadata } from 'next';
import HeroSection from "./components/HeroSection";
import ProductsHighlight from "./components/ProductsHighlight";
import IntelligentQueriesSection from "./components/IntelligentQueriesSection";
import Marquee from "./components/Marquee";
import BenchmarksHighlight from "./components/BenchmarksHighlight";
import AdvancedSearchSection from "./components/AdvancedSearchSection";
import BlazingFastSection from "./components/BlazingFastSection";
import PrecisionPerformanceSection from "./components/PrecisionPerformanceSection";
import EnterpisePowerSection from "./components/EnterprisePowerSection";
import ResearchHighlight from "./components/ResearchHighlight";
import UseCases from './components/UseCases';
import { noto_sans_mono } from '../styles/common';

export const metadata: Metadata = {
  title: 'Cosdata - Next Generation Vector Search Technology',
  description: 'Cosdata delivers high-performance vector search solutions, including OSS and Serverless options, designed for enterprise-scale AI applications.',
  openGraph: {
    title: 'Cosdata - Next Generation Vector Search Technology',
    description: 'Cosdata delivers high-performance vector search solutions, including OSS and Serverless options, designed for enterprise-scale AI applications.',
    url: 'https://cosdata.io/',
    siteName: 'Cosdata',
    images: [
      {
        url: '/images/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosdata - Next Generation Vector Search',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosdata - Next Generation Vector Search Technology',
    description: 'Cosdata delivers high-performance vector search solutions, including OSS and Serverless options, designed for enterprise-scale AI applications.',
    images: ['/images/og-image-home.jpg'],
  },
};

export default function Home() {
  return (
    <main className={`bg-transparent ${noto_sans_mono.className}`}>
      <HeroSection />
      <ProductsHighlight />
      <BenchmarksHighlight />
      <PrecisionPerformanceSection />
      <EnterpisePowerSection />
      <ResearchHighlight />
      <UseCases />
    </main>
  );
} 