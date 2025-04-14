'use client';

import React from 'react';
import { vectorBenchmarkData } from '@/data/benchmarks';
import BenchmarkTable from './BenchmarkTable';
import { commonStyles, geologica, afacad } from '@/app/styles/common';

export default function VectorBenchmarkSection() {
  // Find Cosdata's entry
  const cosdataData = vectorBenchmarkData.find(item => item.name === "Cosdata");
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

      {/* Performance highlights - MOVED ABOVE BENCHMARK DATA */}
      <h2 id="vector-performance-highlights" className={`text-2xl sm:text-3xl font-bold mb-4 text-[#0055c8] scroll-mt-24 ${geologica.className}`}>
        Performance Highlights
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className={`bg-white p-6 rounded-lg border border-gray-200 shadow-sm ${afacad.className}`}>
          <h3 className={`text-xl font-bold mb-3 text-[#3083FE] ${geologica.className}`}>
            Query Performance
          </h3>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Cosdata achieves industry-leading query throughput of <strong>{cosdataData?.qps}+ QPS</strong>, outperforming:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700 benchmark-list">
            {qpsAdvantages.map(item => (
              <li key={item.name}><strong>{item.name}</strong>: {item.advantagePercent}% faster</li>
            ))}
          </ul>
        </div>
        
        <div className={`bg-white p-6 rounded-lg border border-gray-200 shadow-sm ${afacad.className}`}>
          <h3 className={`text-xl font-bold mb-3 text-[#3083FE] ${geologica.className}`}>
            Indexing Efficiency
          </h3>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Cosdata maintains competitive indexing times while delivering superior query performance:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700 benchmark-list">
            <li>Significantly faster than Elastic Search ({Math.round((parseFloat(vectorBenchmarkData.find(item => item.name === "Elastic Search")?.indexingTime || "0") / parseFloat(cosdataData?.indexingTime || "1")) * 100) / 100}x faster indexing)</li>
            <li>Maintains high precision of {cosdataData?.precision} across queries</li>
            <li>Balanced performance profile optimized for production workloads</li>
          </ul>
        </div>
      </div>

      {/* Benchmark Data/Table - MOVED BELOW PERFORMANCE HIGHLIGHTS */}
      <h2 id="vector-benchmark-data" className={`text-2xl sm:text-3xl font-bold mb-4 text-[#0055c8] scroll-mt-24 ${geologica.className}`}>
        Benchmark Data
      </h2>
      
      <div className="mb-8">
        <BenchmarkTable data={vectorBenchmarkData} />
      </div>

      <h3 className={`text-xl font-bold mb-3 text-gray-800 ${geologica.className}`}>
        Engineering Insights
      </h3>
      <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 ${afacad.className}`}>
        Cosdata's vector search performance advantages come from several key optimizations:
      </p>
      <ul className={`list-disc pl-6 space-y-2 mb-8 text-base sm:text-lg text-gray-700 benchmark-list ${afacad.className}`}>
        <li><strong>Efficient HNSW implementation</strong> with optimized graph construction and traversal</li>
        <li><strong>SIMD-accelerated distance calculations</strong> for faster similarity comparisons</li>
        <li><strong>Optimized memory management</strong> reducing overhead and improving cache efficiency</li>
        <li><strong>Smart parallelization</strong> that scales effectively with available CPU cores</li>
      </ul>
    </div>
  );
} 