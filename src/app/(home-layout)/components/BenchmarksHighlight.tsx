'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { commonStyles, afacad, geologica } from '../../styles/common';
import BenchmarkTable from '@/components/BenchmarkTable';
import { vectorBenchmarkData, benchmarkHighlights } from '@/data/benchmarks';

const BenchmarksHighlight = () => {
  const [activeTab, setActiveTab] = useState<'vector' | 'fts'>('vector');

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className={`${commonStyles.mainContainer}`}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`${commonStyles.sectionTitle} mb-4 sm:mb-6`}>
            Industry-Leading Performance
          </h2>
          <p className={`${commonStyles.sectionSubtitle} max-w-3xl mx-auto`}>
            Cosdata outperforms the competition with blazing-fast query speeds and superior efficiency
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('vector')}
            className={`py-3 px-6 text-sm font-medium transition-colors ${
              activeTab === 'vector'
                ? 'text-[#3083FE] border-b-2 border-[#3083FE]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Vector Search
          </button>
          <button
            onClick={() => setActiveTab('fts')}
            className={`py-3 px-6 text-sm font-medium transition-colors ${
              activeTab === 'fts'
                ? 'text-[#3083FE] border-b-2 border-[#3083FE]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Full-Text Search
          </button>
        </div>

        {/* Vector Search Content */}
        {activeTab === 'vector' && (
          <>
            <div className="bg-white rounded-xl overflow-hidden p-1 sm:p-2 mb-8 sm:mb-12">
              <BenchmarkTable data={vectorBenchmarkData} />
              <div className="p-3 bg-gray-50 text-xs text-gray-600 italic">
                Dataset: {benchmarkHighlights.vector.dataset}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-10">
              <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center border border-gray-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3083FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center text-[#3083FE] ${geologica.className}`}>{benchmarkHighlights.vector.qpsAdvantage}</h3>
                <p className={`text-gray-600 text-center text-base sm:text-lg ${afacad.className}`}>
                  Industry-leading query performance with outstanding queries per second on a single node
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center border border-gray-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3083FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center text-[#3083FE] ${geologica.className}`}>{benchmarkHighlights.vector.precision}</h3>
                <p className={`text-gray-600 text-center text-base sm:text-lg ${afacad.className}`}>
                  High-quality results with improved recall and exceptional accuracy for complex queries
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center border border-gray-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3083FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center text-[#3083FE] ${geologica.className}`}>{benchmarkHighlights.vector.speedAdvantage}</h3>
                <p className={`text-gray-600 text-center text-base sm:text-lg ${afacad.className}`}>
                  Significantly faster than competing vector databases across both indexing and query operations
                </p>
              </div>
            </div>
          </>
        )}

        {/* Full-Text Search Content */}
        {activeTab === 'fts' && (
          <>
            <div className="bg-white rounded-xl p-6 mb-8 sm:mb-12">
              <h3 className={`text-xl font-bold mb-4 text-[#3083FE] text-center ${geologica.className}`}>Full-Text Search Performance</h3>
              <p className={`text-gray-700 mb-6 text-center max-w-3xl mx-auto ${afacad.className}`}>
                Cosdata outperforms ElasticSearch across multiple datasets, delivering exceptional full-text search speed and accuracy.
              </p>
              
              <div className="relative w-full h-[300px]">
                <Image
                  src="/images/fts-comparison-chart.png"
                  alt="FTS Comparison Chart"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-10">
              <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center border border-gray-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3083FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center text-[#3083FE] ${geologica.className}`}>{benchmarkHighlights.fts.averageQpsAdvantage}</h3>
                <p className={`text-gray-600 text-center text-base sm:text-lg ${afacad.className}`}>
                  On average, Cosdata delivers full-text search queries 16x faster than ElasticSearch
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center border border-gray-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3083FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center text-[#3083FE] ${geologica.className}`}>{benchmarkHighlights.fts.topQps}</h3>
                <p className={`text-gray-600 text-center text-base sm:text-lg ${afacad.className}`}>
                  Peak performance of over 41,000 queries per second on smaller datasets
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center border border-gray-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3083FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center text-[#3083FE] ${geologica.className}`}>{benchmarkHighlights.fts.memoryUsage}</h3>
                <p className={`text-gray-600 text-center text-base sm:text-lg ${afacad.className}`}>
                  Low memory footprint while maintaining high performance, enabling cost-effective deployments
                </p>
              </div>
            </div>
          </>
        )}

        <div className="text-center">
          <Link
            href="/resources/benchmarks"
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-[#3083FE] hover:bg-[#2060cc] transition-colors duration-300"
          >
            View Detailed Benchmarks
            <svg className="ml-1.5 sm:ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenchmarksHighlight; 