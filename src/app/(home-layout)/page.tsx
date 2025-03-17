import Image from "next/image";
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

export default function Home() {
  return (
    <main className={`bg-transparent ${noto_sans_mono.className}`}>
      <HeroSection />
      <ProductsHighlight />
      <Marquee />
      <BenchmarksHighlight />
      <PrecisionPerformanceSection />
      <EnterpisePowerSection />
      <ResearchHighlight />
      <UseCases />
    </main>
  );
} 