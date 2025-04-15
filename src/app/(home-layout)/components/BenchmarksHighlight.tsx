'use client';

import Link from 'next/link';
import { commonStyles, afacad, geologica } from '../../styles/common';
import { benchmarkHighlights, vectorBenchmarkData, ftsBenchmarkData } from '@/data/benchmarks';

const BenchmarksHighlight = () => {
  // Calculate actual speedups based on benchmark data
  const calculateSpeedup = (dataset: string, metric: 'qps' | 'insertionTime') => {
    const cosdata = ftsBenchmarkData.cosdata.find(d => d.dataset === dataset);
    const elasticsearch = ftsBenchmarkData.elasticsearch.find(d => d.dataset === dataset);
    
    if (!cosdata || !elasticsearch) return '?x';
    
    if (metric === 'qps') {
      const cosdataValue = parseFloat(cosdata.qps);
      const elasticsearchValue = parseFloat(elasticsearch.qps);
      return (cosdataValue / elasticsearchValue).toFixed(1) + 'x';
    } else {
      const cosdataValue = parseFloat(cosdata.insertionTime);
      const elasticsearchValue = parseFloat(elasticsearch.insertionTime);
      return (elasticsearchValue / cosdataValue).toFixed(1) + 'x';
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className={`${commonStyles.mainContainer}`}>
        <div className="text-center mb-10 sm:mb-14">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#0055c8] ${geologica.className}`}>
            Industry-Leading Performance
          </h2>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-700 ${afacad.className}`}>
            Cosdata consistently outperforms competing solutions across both vector and full-text search benchmarks
          </p>
        </div>
        
        {/* Two-column layout for benchmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Column 1: Vector Search */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 text-[#0055c8] ${geologica.className}`}>
              Dense Vector Search Benchmark Highlights
            </h3>
            <div className={`prose prose-lg max-w-none ${afacad.className} mb-8`}>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Our HNSW implementation delivers exceptional performance across all key metrics:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mb-4 text-base sm:text-lg text-gray-700 benchmark-list">
                <li>Industry-leading <strong className="text-[#3083FE]">{vectorBenchmarkData[0].qps}+ QPS</strong> on 1M record datasets with 1536-dimensional vectors</li>
                <li><strong className="text-[#3083FE]">{Math.round((parseInt(vectorBenchmarkData[0].qps) / parseInt(vectorBenchmarkData[1].qps) - 1) * 100)}% faster</strong> than Qdrant and {Math.round((parseInt(vectorBenchmarkData[0].qps) / parseInt(vectorBenchmarkData[2].qps) - 1) * 100)}% faster than Weaviate</li>
                <li>Up to <strong className="text-[#3083FE]">{Math.round((parseInt(vectorBenchmarkData[0].qps) / parseInt(vectorBenchmarkData[3].qps) - 1) * 100)}% faster</strong> than ElasticSearch while maintaining high precision</li>
                <li>Consistent <strong className="text-[#3083FE]">{parseFloat(vectorBenchmarkData[0].precision) * 100}%</strong> precision across challenging search tasks</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Full-Text Search */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 text-[#0055c8] ${geologica.className}`}>
              Full-Text Search Benchmark Highlights
            </h3>
            <div className={`prose prose-lg max-w-none ${afacad.className} mb-8`}>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Compared to ElasticSearch across multiple datasets, Cosdata delivers:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mb-4 text-base sm:text-lg text-gray-700 benchmark-list">
                <li>Up to <strong className="text-[#3083FE]">16x higher QPS</strong> than ElasticSearch on comparable datasets</li>
                <li><strong className="text-[#3083FE]">Significantly faster indexing</strong>, up to 12x faster on large datasets</li>
                <li><strong className="text-[#3083FE]">Lower latency</strong> at both p50 and p95 percentiles across all tested datasets</li>
                <li>Similar recall and NDCG scores while delivering <strong className="text-[#3083FE]">superior performance</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/resources/benchmarks"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-[#3083FE] hover:bg-[#2060cc] transition-colors duration-300 shadow-sm"
          >
            View Detailed Benchmarks
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenchmarksHighlight; 