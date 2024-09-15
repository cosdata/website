import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ImageSection from "./components/ImageSection";
import FeaturesSection from "./components/FeatureSection";
import ScopioX100 from "./components/Scropix";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import { fetchClaim } from "./utils/api";
import BenefitSection from "./components/BenefitSection";

// Make the Home component async to support server-side data fetching
export default async function Home() {
  // Fetch the data directly in the component
  const claim = await fetchClaim();
  

  return (
    <main className="bg-transparent">
      
      <HeroSection />
      {/* <ImageSection promotionalClaim={claim[0]?.attributes.PromotionalClaim} /> */}
      {/* <FeaturesSection claimsData={claim} /> */}
      <BenefitSection claimsData={claim} />
      <ScopioX100 />
      <VideoSection />
      <Footer />
    </main>
  );
}
