import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ImageSection from "./components/ImageSection";
import FeaturesSection from "./components/FeatureSection";
import ScopioX100 from "./components/Scropix";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import { fetchPromotionalClaim } from "./utils/api";

// Make the Home component async to support server-side data fetching
export default async function Home() {
  // Fetch the data directly in the component
  const promotionalClaim = await fetchPromotionalClaim();

  return (
    <main className="bg-white">
      
      <HeroSection />
      <ImageSection promotionalClaim={promotionalClaim?.PromotionalClaim} /> {/* Pass the prop */}
      <FeaturesSection featureClaim={promotionalClaim?.ChannelVariants} />
      <ScopioX100 />
      <VideoSection />
      <Footer />
    </main>
  );
}
