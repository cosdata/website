"use client";
import Link from 'next/link';
import { commonStyles, afacad, geologica } from '../../../../styles/common';
import { vectorBenchmarkData, ftsBenchmarkData } from '@/data/benchmarks';

export default function BenchmarksSection() {
  // Calculate speedups for vector database comparisons
  const getVectorSpeedup = (competitor: string, metric: 'qps') => {
    const cosdata = vectorBenchmarkData.find(item => item.name === "Cosdata");
    const comp = vectorBenchmarkData.find(item => item.name === competitor);
    
    if (!cosdata || !comp) return '0';
    
    if (metric === 'qps') {
      return Math.round((parseInt(cosdata.qps) / parseInt(comp.qps) - 1) * 100);
    }
    return '0';
  };

  // Calculate speedups for FTS comparisons
  const calculateFTSSpeedup = (dataset: string, metric: 'qps' | 'insertionTime') => {
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
    <section className={`py-16 bg-gradient-to-r from-gray-50 to-white ${afacad.className} text-lg`}>
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto`}>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0055c8] mb-6 sm:mb-10 ${geologica.className}`}>
          Industry-Leading Performance
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className={`text-base sm:text-lg text-gray-700 mb-6 ${commonStyles.paragraph}`}>
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
                <li><strong className="text-[#3083FE]">{getVectorSpeedup('Qdrant', 'qps')}% faster</strong> than Qdrant and {getVectorSpeedup('Weaviate', 'qps')}% faster than Weaviate</li>
                <li>Up to <strong className="text-[#3083FE]">{getVectorSpeedup('Elastic Search', 'qps')}% faster</strong> than ElasticSearch while maintaining high precision</li>
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
                Compared to ElasticSearch across multiple datasets, Cosdata&apos;s custom BM25 implementation delivers:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mb-4 text-base sm:text-lg text-gray-700 benchmark-list">
                <li>Up to <strong className="text-[#3083FE]">16x higher QPS</strong> than ElasticSearch on comparable datasets</li>
                <li><strong className="text-[#3083FE]">Significantly faster indexing</strong>, up to 12x faster on large datasets</li>
                <li><strong className="text-[#3083FE]">Lower latency</strong> at both p50 and p95 percentiles across all tested datasets</li>
                <li>Maintains similar recall and NDCG scores while <strong className="text-[#3083FE]">delivering superior performance</strong></li>
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
} 