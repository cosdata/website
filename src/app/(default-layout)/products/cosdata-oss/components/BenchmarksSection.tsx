"use client";
import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, afacad, geologica } from '../../../../styles/common';
import BenchmarkTable from '@/components/BenchmarkTable';
import { vectorBenchmarkData } from '@/data/benchmarks';

export default function BenchmarksSection() {
  return (
    <section className={`py-16 bg-gradient-to-r from-gray-50 to-white ${afacad.className} text-lg`}>
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto`}>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0055c8] mb-6 sm:mb-10 ${geologica.className}`}>
          Industry-Leading Performance
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
          <p className={`text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 ${commonStyles.paragraph}`}>
            Cosdata&apos;s open-source vector database outperforms industry leaders across multiple key metrics.
            These results are from indexing DbPedia&apos;s 1M record, 1536-dimension dataset, using the same methodology as 
            <a href="https://qdrant.tech/benchmarks/" target="_blank" rel="noopener noreferrer" className="text-[#3083FE] hover:text-[#2060cc] font-medium"> Qdrant&apos;s benchmarks</a>.
          </p>
        </div>

        <div className="overflow-hidden shadow-lg mb-8 sm:mb-12 border border-gray-200 rounded-lg">
          <BenchmarkTable data={vectorBenchmarkData} />
        </div>

        {/* Full-text search highlight */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8 sm:mb-12 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 text-[#3083FE] ${geologica.className}`}>
                Full-Text Search Capabilities
              </h3>
              <p className={`text-gray-700 mb-4 text-base ${commonStyles.paragraph}`}>
                Beyond vector search, Cosdata also provides lightning-fast full-text search that outperforms ElasticSearch by up to 16x in queries per second while maintaining similar recall and precision.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-white px-3 py-1.5 rounded-full border border-blue-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm">Up to 41,000+ QPS</span>
                </div>
                <div className="flex items-center bg-white px-3 py-1.5 rounded-full border border-blue-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm">Comparable recall to ElasticSearch</span>
                </div>
                <div className="flex items-center bg-white px-3 py-1.5 rounded-full border border-blue-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm">Efficient memory usage</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Link 
                href="/resources/benchmarks?tab=fts" 
                className="inline-flex items-center px-4 py-2 bg-[#3083FE] hover:bg-[#2060cc] text-white rounded-lg transition-colors duration-300 text-sm"
              >
                View FTS Benchmarks
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mb-10 sm:mb-16">
          <Link 
            href="/resources/benchmarks" 
            className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-300 border border-gray-300 text-sm sm:text-base"
          >
            View detailed benchmarks
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="mb-8 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px]">
                <Image 
                  src="/svgs/results.svg" 
                  alt="Performance Comparison Chart" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#0055c8] ${geologica.className}`}>Why We&apos;re Faster</h3>
              <p className={`text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base ${commonStyles.paragraph}`}>
                Our implementation achieves superior performance through:
              </p>
              <ul className={`space-y-2 sm:space-y-4 text-gray-700 ${afacad.className}`}>
                <li className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">Optimized graph construction</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">Efficient memory management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">SIMD-accelerated distance calculations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">Parallel processing for multi-core utilization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">Optimized data structures for minimal overhead</span>
                </li>
              </ul>
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-gray-200">
                <p className={`text-xs sm:text-sm text-gray-600 italic ${commonStyles.paragraph}`}>
                  Benchmarks conducted using the same methodology as <a href="https://qdrant.tech/benchmarks/" target="_blank" rel="noopener noreferrer" className="text-[#3083FE] hover:text-[#2060cc]">Qdrant&apos;s benchmarks</a>, 
                  on identical hardware with 8 vCPUs and 32GB RAM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 