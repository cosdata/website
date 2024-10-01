import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ImageSection from "./components/ImageSection";
import FeaturesSection from "./components/FeatureSection";
import ScopioX100 from "./components/Scropix";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
//import { fetchClaim } from "./utils/api";
import BlazingFastSection from "./components/BlazingFastSection";
import PrecisionPerformanceSection from "./components/PrecisionPerformanceSection"
import EnterpisePowerSection from "./components/EnterprisePowerSection"
import AdvancedSearchSection from "./components/AdvancedSearchSection"
import IntelligentQueriesSection from "./components/IntelligentQueriesSection"
import Marquee from "./components/Marquee";
import UseCases from './components/UseCases';

// Make the Home component async to support server-side data fetching
export default async function Home() {
  // Fetch the data directly in the component
 // const claim = await fetchClaim();


  return (
    <main className="bg-transparent">

      <HeroSection />
      {/* <ImageSection promotionalClaim={claim[0]?.attributes.PromotionalClaim} /> */}
      {/* <FeaturesSection claimsData={claim} /> */}
      <IntelligentQueriesSection />
      <Marquee />
      <AdvancedSearchSection />
      <BlazingFastSection /*claimsData={claim}*/ />
      <PrecisionPerformanceSection />
      <div className="max-w-6xl mx-auto my-4 md:my-8">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
      <EnterpisePowerSection />
      <div className="max-w-6xl mx-auto my-4 md:my-8">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
      <UseCases />
      <Footer />
      {/* <ScopioX100 />
      <VideoSection />
      <Footer /> */}
    </main>
  );
}
