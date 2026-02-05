import type { Metadata } from 'next';
import { noto_sans_mono, afacad } from '../../styles/common';
import HeroSection from './components/HeroSection';
import WhyJoinSection from './components/WhyJoinSection';
import FeaturedMembersSection from './components/FeaturedMembersSection';
import DiscordSection from './components/DiscordSection';
import OpenSourceSection from './components/OpenSourceSection';
import TestimonialsSection from './components/TestimonialsSection';
import FooterCTA from './components/FooterCTA';

export const metadata: Metadata = {
  title: 'Cosdata Community – Join Developers Building the Future of AI',
  description: 'Be part of the Cosdata community. Build AI projects, join hackathons, contribute to open source, and grow with developers worldwide.',
  openGraph: {
    title: 'Cosdata Community – Join Developers Building the Future of AI',
    description: 'Be part of the Cosdata community. Build AI projects, join hackathons, contribute to open source, and grow with developers worldwide.',
    url: 'https://cosdata.io/community',
    siteName: 'Cosdata',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosdata Community – Join Developers Building the Future of AI',
    description: 'Be part of the Cosdata community. Build AI projects, join hackathons, contribute to open source, and grow with developers worldwide.',
  },
};

export default function CommunityPage() {
  return (
    <main className={`bg-transparent ${noto_sans_mono.className} ${afacad.className}`}>
      <HeroSection />
      <WhyJoinSection />
      <FeaturedMembersSection />
      <DiscordSection />
      <OpenSourceSection />
      <TestimonialsSection />
      <FooterCTA />
    </main>
  );
}

