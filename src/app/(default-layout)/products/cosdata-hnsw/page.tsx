import Image from "next/image";
import Link from "next/link";
import { noto_sans_mono } from '../../../styles/common';

// Import components from the index file
import {
  HeroSection,
  FeaturesSection,
  BenchmarksSection,
  CTASection
} from './components';

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