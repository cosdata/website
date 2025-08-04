'use client';

import Image from "next/image";
import Link from "next/link";
import { noto_sans_mono, commonStyles, geologica, afacad } from '../../../styles/common';
import BenchmarkTable from '@/components/BenchmarkTable';
import FTSBenchmarkSection from '@/components/FTSBenchmarkSection';
import BenchmarksTOC from '@/components/BenchmarksTOC';
import VectorBenchmarkSection from '@/components/VectorBenchmarkSection';
import { vectorBenchmarkData } from '@/data/benchmarks';

export default function BenchmarksPage() {
  const cosdataConfigData = [
    {
      config: "ef_construction: 128, ef_search: 128, neighbors_count: 16, layer_0_neighbors_count: 32",
      indexingTime: "554.1",
      recall: "0.98",
      qps: "2274"
    },
    {
      config: "ef_construction: 64, ef_search: 128, neighbors_count: 16, layer_0_neighbors_count: 32",
      indexingTime: "518.2",
      recall: "0.98",
      qps: "2242"
    },
    {
      config: "ef_construction: 64, ef_search: 64, neighbors_count: 16, layer_0_neighbors_count: 32",
      indexingTime: "468.1",
      recall: "0.96",
      qps: "2621"
    },
    {
      config: "ef_construction: 32, ef_search: 32, neighbors_count: 16, layer_0_neighbors_count: 32",
      indexingTime: "422.8",
      recall: "0.95",
      qps: "2960"
    },
  ];

  return (
    <main className={`bg-transparent ${noto_sans_mono.className}`}>
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12`}>
        <div className="flex justify-between items-start relative gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-[calc(100%-20rem)]">
            {/* Mobile TOC - Only visible on mobile */}
            <div className="block lg:hidden mb-6">
              <BenchmarksTOC isMobile={true} />
            </div>

            {/* Introduction Section */}
            <h1 id="our-benchmarking-approach" className={`text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0055c8] mb-6 sm:mb-8 scroll-mt-24 ${geologica.className}`}>
              Our Benchmarking Approach
            </h1>

            <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 ${afacad.className}`}>
              Benchmarks should help clarify performance comparisons, but in vector databases, they often create more confusion than clarity.
              At Cosdata, we believe in a different approach focused on transparency, real-world relevance, and understandable results.
            </p>

            <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 ${afacad.className}`}>
              Our benchmarks are designed with three core principles:
            </p>

            <ul className={`list-disc pl-6 space-y-2 mb-6 text-base sm:text-lg text-gray-700 benchmark-list ${afacad.className}`}>
              <li>
                <strong>Understandable by Design</strong> - We provide context for each metric and explain their real-world implications, not just isolated numbers.
              </li>
              <li>
                <strong>Open and Transparent</strong> - Our methodology, configurations, and testing environment are fully documented to enable reproducible results.
              </li>
              <li>
                <strong>Real-World Relevance</strong> - We test both vector search and full-text search capabilities with scenarios that mirror actual production usage.
              </li>
            </ul>

            <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-10 ${afacad.className}`}>
              No benchmark can perfectly simulate every use case, but we strive to make performance trade-offs more transparent and easier to reason about. The benchmarks on this page represent our ongoing commitment to honest, meaningful performance reporting.
            </p>

            {/* Vector Search Benchmarks */}
            <VectorBenchmarkSection />

            {/* Cosdata HNSW Configuration */}
            <div className="mt-4 mb-8">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-gray-500">
                  <span className="font-medium">Cosdata HNSW Configuration:</span>
                </p>
                <button
                  onClick={() => {
                    const configText = `ef_construction=128,
ef_search=64,
neighbors_count=32,
level_0_neighbors_count=32`;
                    navigator.clipboard.writeText(configText);
                  }}
                  className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                  title="Copy configuration"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
              </div>
              <div className={`bg-gray-50 border rounded-md p-3 ${noto_sans_mono.className}`}>
                <code className="text-xs text-gray-700 block leading-relaxed">
                  ef_construction=128,<br />
                  ef_search=64,<br />
                  neighbors_count=32,<br />
                  level_0_neighbors_count=32
                </code>
              </div>
            </div>

            {/* Full-Text Search Benchmarks */}
            <FTSBenchmarkSection />

            <h1 id="try-cosdata" className={`text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0055c8] mb-6 sm:mb-8 scroll-mt-24 mt-12 ${geologica.className}`}>
              Try Cosdata
            </h1>
            <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 ${afacad.className}`}>
              Experience the performance benefits of Cosdata in your own applications. Our open-source implementation is available on GitHub.
            </p>
            <div className={`flex flex-wrap gap-3 sm:gap-4 ${afacad.className}`}>
              <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-300 text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.236 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                View on GitHub
              </a>
              <Link href="/products/cosdata-oss" className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-[#3083FE] hover:bg-[#2060cc] text-white rounded-lg transition-colors duration-300 text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </Link>
            </div>
          </div>

          {/* Desktop Table of Contents - Only visible on desktop */}
          <BenchmarksTOC />
        </div>
      </div>
    </main>
  );
} 