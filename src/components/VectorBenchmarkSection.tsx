'use client';

import React from 'react';
import { vectorBenchmarkData } from '@/data/benchmarks';
import BenchmarkTable from './BenchmarkTable';
import { commonStyles, geologica, afacad } from '@/app/styles/common';

export default function VectorBenchmarkSection() {
  // Find Cosdata's entry
  const cosdataData = vectorBenchmarkData.find(item => item.name === "Cosdata");
  // Format precision to two decimal places
  const formattedPrecision = cosdataData ? parseFloat(cosdataData.precision).toFixed(2) : "0.00";
  // Calculate performance advantages
  const qpsAdvantages = vectorBenchmarkData
    .filter(item => item.name !== "Cosdata")
    .map(item => {
      const cosdataQps = parseFloat(cosdataData?.qps || "0");
      const itemQps = parseFloat(item.qps);
      const advantagePercent = ((cosdataQps - itemQps) / itemQps * 100).toFixed(0);
      return {
        name: item.name,
        advantagePercent
      };
    });
    
  // Calculate indexing time advantage factors
  const indexingTimeAdvantageFactor = cosdataData ? 
    Math.round((parseFloat(vectorBenchmarkData.find(item => item.name === "Elastic Search")?.indexingTime || "0") / 
    parseFloat(cosdataData.indexingTime || "1")) * 100) / 100 : 0;
    
  // Calculate QPS advantage factor (average)
  const qpsAdvantageFactor = qpsAdvantages.length > 0 ? 
    (qpsAdvantages.reduce((sum, item) => sum + parseFloat(item.advantagePercent), 0) / 
    qpsAdvantages.length / 100 + 1).toFixed(1) : "0";

  return (
    <div className="mb-16">
      <h1 id="dense-vector-search-benchmarks" className={`text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0055c8] mb-6 sm:mb-8 scroll-mt-24 ${geologica.className}`}>
        Dense Vector Search Benchmarks
      </h1>
      
      <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-6 ${afacad.className}`}>
        We benchmarked Cosdata against leading vector databases to evaluate performance across key metrics, including indexing time, query throughput, precision, and latency.
      </p>

      {/* Methodology */}
      <h2 id="vector-benchmark-methodology" className={`text-2xl sm:text-3xl font-bold mb-4 text-[#0055c8] scroll-mt-24 ${geologica.className}`}>
        Benchmark Methodology
      </h2>
      <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 ${afacad.className}`}>
        We conducted dense vector search benchmarks using a standardized approach to ensure fair and meaningful comparisons between different vector database solutions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className={`text-lg font-semibold mb-2 text-gray-800 ${geologica.className}`}>Dataset</h3>
          <ul className={`list-disc pl-6 space-y-1 mb-4 text-base sm:text-lg text-gray-700 benchmark-list ${afacad.className}`}>
            <li><strong>Source:</strong> DbPedia dataset</li>
            <li><strong>Size:</strong> 1 million records</li>
            <li><strong>Dimensions:</strong> 1536-dimensional vectors</li>
            <li><strong>Format:</strong> Embedding vectors generated from titles and descriptions</li>
          </ul>
        </div>
        
        <div>
          <h3 className={`text-lg font-semibold mb-2 text-gray-800 ${geologica.className}`}>Metrics</h3>
          <ul className={`list-disc pl-6 space-y-1 mb-4 text-base sm:text-lg text-gray-700 benchmark-list ${afacad.className}`}>
            <li><strong>Indexing Time:</strong> Time to build the index (minutes)</li>
            <li><strong>QPS:</strong> Queries per second (higher is better)</li>
            <li><strong>Precision:</strong> Accuracy of results compared to ground truth</li>
            <li><strong>Latency:</strong> Response time at p50 (median) and p95 percentiles</li>
          </ul>
        </div>
      </div>

      <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200 ${afacad.className}`}>
        <strong>Note:</strong> All benchmarks were conducted on identical hardware (8 vCPUs, 32GB RAM) with default configurations optimized for each database system. Each test was run 5 times and averaged to ensure consistency.
      </p>

      {/* Performance highlights */}
      <h2 id="vector-performance-highlights" className={`text-2xl sm:text-3xl font-bold mb-4 text-[#0055c8] scroll-mt-24 ${geologica.className}`}>
        Performance Highlights
      </h2>
      
      <div className="mb-8">
        <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 ${afacad.className}`}>
          Cosdata demonstrates industry-leading performance across all key metrics:
        </p>
        <ul className={`list-disc pl-6 space-y-2 mb-6 text-base sm:text-lg text-gray-700 benchmark-list ${afacad.className}`}>
          <li>Industry-leading <strong className="text-[#3083FE]">{cosdataData?.qps}+ QPS</strong> on 1M record datasets with 1536-dimensional vectors</li>
          {qpsAdvantages.map(item => (
            <li key={item.name}><strong className="text-[#3083FE]">{item.advantagePercent}% faster</strong> than {item.name}</li>
          ))}
          <li>Consistent <strong className="text-[#3083FE]">{parseFloat(formattedPrecision) * 100}%</strong> precision across challenging search tasks</li>
          <li>Significantly <strong className="text-[#3083FE]">faster indexing</strong> than Elastic Search while maintaining superior query performance</li>
        </ul>
      </div>
      
      {/* Benchmark Data table */}
      <h2 id="vector-benchmark-data" className={`text-2xl sm:text-3xl font-bold mb-6 text-[#0055c8] scroll-mt-24 ${geologica.className}`}>
        Benchmark Data
      </h2>
      
      <BenchmarkTable data={vectorBenchmarkData} />
    </div>
  );
} 