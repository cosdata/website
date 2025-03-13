import Image from "next/image";
import HeroSection from "./components/HeroSection";
import IntelligentQueriesSection from "./components/IntelligentQueriesSection";
import Marquee from "./components/Marquee";
import AdvancedSearchSection from "./components/AdvancedSearchSection";
import BlazingFastSection from "./components/BlazingFastSection";
import PrecisionPerformanceSection from "./components/PrecisionPerformanceSection";
import EnterpisePowerSection from "./components/EnterprisePowerSection";
import UseCases from './components/UseCases';
import { noto_sans_mono } from '../styles/common';

export default function Home() {
  return (
    <main className={`bg-transparent ${noto_sans_mono.className}`}>
      <HeroSection />
      <IntelligentQueriesSection />
      <Marquee />
      <AdvancedSearchSection />
      <BlazingFastSection />
      <PrecisionPerformanceSection />
      <EnterpisePowerSection />
      <UseCases />
    </main>
  );
} 