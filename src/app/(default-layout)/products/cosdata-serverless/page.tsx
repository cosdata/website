import Image from "next/image";
import Link from "next/link";
import { noto_sans_mono } from '../../../styles/common';

// Import components from the index file
import {
  HeroSection,
  FeaturesSection,
  ComparisonSection,
  CTASection
} from './components';

export default function CosdataServerlessPage() {
  return (
    <main className={`bg-transparent ${noto_sans_mono.className}`}>
      <HeroSection />
      <FeaturesSection />
      <ComparisonSection />
      <CTASection />
    </main>
  );
} 