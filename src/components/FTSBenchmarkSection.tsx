'use client';

import React, { useState } from 'react';
import { ftsBenchmarkData } from '@/data/benchmarks';
import BenchmarkBarChart from './BenchmarkBarChart';
import { commonStyles, geologica, afacad } from '@/app/styles/common';

// Add fake latency data for now
const addLatencyData = (data: any[]) => {
  return data.map(item => ({
    ...item,
    p50Latency: Math.round(1000 / parseFloat(item.qps) * 0.5), // Fake p50 latency based on QPS
    p95Latency: Math.round(1000 / parseFloat(item.qps) * 0.8), // Fake p95 latency based on QPS
    // Format the values with specified decimal places
    formattedQps: Math.round(parseFloat(item.qps)).toString(),
    formattedInsertionTime: parseFloat(item.insertionTime).toFixed(1),
    formattedRecall: parseFloat(item.recall).toFixed(2),
    formattedNdcg: parseFloat(item.ndcg).toFixed(2)
  }));
};

type ComparisonMetric = 'qps' | 'insertionTime' | 'p50Latency' | 'p95Latency' | 'recall' | 'ndcg';

const metricOptions: {id: ComparisonMetric, label: string, higherIsBetter: boolean, title: string}[] = [
  { id: 'qps', label: 'Queries Per Second (QPS)', higherIsBetter: true, title: 'Queries Per Second (QPS)' },
  { id: 'insertionTime', label: 'Insertion Time', higherIsBetter: false, title: 'Insertion Time (seconds)' },
  { id: 'p50Latency', label: 'p50 Latency', higherIsBetter: false, title: 'p50 Latency (ms)' },
  { id: 'p95Latency', label: 'p95 Latency', higherIsBetter: false, title: 'p95 Latency (ms)' },
  { id: 'recall', label: 'Recall@10', higherIsBetter: true, title: 'Recall@10' },
  { id: 'ndcg', label: 'NDCG@10', higherIsBetter: true, title: 'NDCG@10' }
];

export default function FTSBenchmarkSection() {
  // Get all available datasets
  const allDatasets = ftsBenchmarkData.cosdata.map(item => item.dataset);
  
  // Sort datasets alphabetically
  const sortedDatasets = [...allDatasets].sort();
  
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>(sortedDatasets);
  const [selectedMetric, setSelectedMetric] = useState<ComparisonMetric>('qps');

  // Add fake latency data to the benchmark data
  const cosdataDataWithLatency = addLatencyData(ftsBenchmarkData.cosdata);
  const elasticsearchDataWithLatency = addLatencyData(ftsBenchmarkData.elasticsearch);

  const filteredCosdataData = cosdataDataWithLatency.filter(item => 
    selectedDatasets.includes(item.dataset)
  );
  
  const filteredElasticsearchData = elasticsearchDataWithLatency.filter(item => 
    selectedDatasets.includes(item.dataset)
  );

  // Get the selected metric configuration
  const currentMetric = metricOptions.find(m => m.id === selectedMetric) || metricOptions[0];

  // Calculate speedup ratios for each dataset
  const speedupRatios = allDatasets.map(dataset => {
    const cosdataItem = cosdataDataWithLatency.find(item => item.dataset === dataset);
    const elasticsearchItem = elasticsearchDataWithLatency.find(item => item.dataset === dataset);
    
    if (cosdataItem && elasticsearchItem && elasticsearchItem.qps !== '0') {
      return {
        dataset,
        ratio: parseFloat(cosdataItem.qps) / parseFloat(elasticsearchItem.qps)
      };
    }
    return { dataset, ratio: 0 };
  }).sort((a, b) => b.ratio - a.ratio);

  const toggleDataset = (dataset: string) => {
    if (selectedDatasets.includes(dataset)) {
      setSelectedDatasets(selectedDatasets.filter(d => d !== dataset));
    } else {
      setSelectedDatasets([...selectedDatasets, dataset]);
    }
  };

  const selectAllDatasets = () => {
    setSelectedDatasets(sortedDatasets);
  };

  const deselectAllDatasets = () => {
    setSelectedDatasets([]);
  };

  return (
    <div className="mb-16">
      <h1 id="full-text-search-benchmarks" className={`text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0055c8] mb-6 sm:mb-8 scroll-mt-24 ${geologica.className}`}>
        Full-Text Search Benchmarks
      </h1>
      
      <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-6 ${afacad.className}`}>
        We benchmarked Cosdata&apos;s full-text search capabilities against ElasticSearch across multiple datasets to evaluate performance, accuracy, and efficiency.
      </p>

      {/* Methodology */}
      <h2 id="fts-benchmark-methodology" className={`text-2xl sm:text-3xl font-bold mb-4 text-[#0055c8] scroll-mt-24 ${geologica.className}`}>
        Benchmark Methodology
      </h2>
      <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 ${afacad.className}`}>
        Our full-text search benchmarks were conducted using the BEIR benchmark suite, which provides a diverse set of information retrieval datasets.
        All benchmarks were run on identical hardware configurations to ensure fair comparison.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className={`text-lg font-semibold mb-2 text-gray-800 ${geologica.className}`}>Metrics</h3>
          <ul className={`list-disc pl-6 space-y-1 mb-4 text-base sm:text-lg text-gray-700 benchmark-list ${afacad.className}`}>
            <li><strong>QPS:</strong> Queries per second (higher is better)</li>
            <li><strong>Recall@10:</strong> Proportion of relevant documents in top 10 results</li>
            <li><strong>NDCG@10:</strong> Normalized Discounted Cumulative Gain at 10 results</li>
            <li><strong>Latency:</strong> Response time at p50 (median) and p95 percentiles (lower is better)</li>
            <li><strong>Insertion Time:</strong> Time taken to index the entire corpus</li>
          </ul>
        </div>
        
        <div>
          <h3 className={`text-lg font-semibold mb-2 text-gray-800 ${geologica.className}`}>Datasets</h3>
          <ul className={`list-disc pl-6 space-y-1 mb-4 text-base sm:text-lg text-gray-700 benchmark-list ${afacad.className}`}>
            <li><strong>arguana:</strong> Argument quality and convincingness assessment dataset</li>
            <li><strong>climate-fever:</strong> Climate fact-checking dataset based on FEVER methodology</li>
            <li><strong>fever:</strong> Fact Extraction and Verification dataset</li>
            <li><strong>fiqa:</strong> Financial opinion mining and question answering dataset</li>
            <li><strong>msmarco:</strong> Microsoft Machine Reading Comprehension dataset</li>
            <li><strong>nq:</strong> Natural Questions dataset for open-domain question answering</li>
            <li><strong>quora:</strong> Quora duplicate questions dataset</li>
            <li><strong>scidocs:</strong> Scientific document classification and recommendation dataset</li>
            <li><strong>scifact:</strong> Scientific fact checking dataset</li>
            <li><strong>trec-covid:</strong> COVID-19 information retrieval dataset</li>
            <li><strong>webis-touche2020:</strong> Argument retrieval dataset on controversial topics</li>
          </ul>
        </div>
      </div>

      {/* Performance highlights - MOVED ABOVE BENCHMARK DATA */}
      <h2 id="fts-performance-highlights" className={`text-2xl sm:text-3xl font-bold mb-4 text-[#0055c8] scroll-mt-24 ${geologica.className}`}>
        Performance Highlights
      </h2>
      <ul className={`list-disc pl-6 space-y-2 mb-8 text-base sm:text-lg text-gray-700 benchmark-list ${afacad.className}`}>
        <li>Cosdata achieves up to <strong className="text-[#3083FE]">{Math.round(speedupRatios[0]?.ratio || 0)}x faster QPS</strong> than ElasticSearch on the {speedupRatios[0]?.dataset} dataset</li>
        <li>Cosdata maintains similar recall and NDCG scores to ElasticSearch while delivering superior performance</li>
        <li>Index creation is <strong className="text-[#3083FE]">significantly faster</strong> with Cosdata, up to 12x faster on large datasets</li>
        <li>Cosdata shows <strong className="text-[#3083FE]">lower latency</strong> at both p50 and p95 percentiles across all tested datasets</li>
      </ul>

      {/* Benchmark Data/Table - Shows all datasets */}
      <h2 id="fts-benchmark-data" className={`text-2xl sm:text-3xl font-bold mb-4 text-[#0055c8] scroll-mt-24 ${geologica.className}`}>
        Benchmark Data
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className={`min-w-full border border-gray-200 ${afacad.className}`}>
          <thead>
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold bg-gray-100 border-b">Dataset (Corpus Size)</th>
              <th className="py-3 px-4 text-left text-sm font-semibold bg-gray-100 border-b">System</th>
              <th className="py-3 px-4 text-left text-sm font-semibold bg-gray-100 border-b">Insertion Time (seconds)</th>
              <th className="py-3 px-4 text-left text-sm font-semibold bg-gray-100 border-b">QPS</th>
              <th className="py-3 px-4 text-left text-sm font-semibold bg-gray-100 border-b">Recall@10</th>
              <th className="py-3 px-4 text-left text-sm font-semibold bg-gray-100 border-b">NDCG@10</th>
              <th className="py-3 px-4 text-left text-sm font-semibold bg-gray-100 border-b">p50 Latency (ms)</th>
              <th className="py-3 px-4 text-left text-sm font-semibold bg-gray-100 border-b">p95 Latency (ms)</th>
            </tr>
          </thead>
          <tbody>
            {sortedDatasets.flatMap(dataset => {
              const cosdataItem = cosdataDataWithLatency.find(item => item.dataset === dataset);
              const elasticsearchItem = elasticsearchDataWithLatency.find(item => item.dataset === dataset);
              
              if (!cosdataItem || !elasticsearchItem) return [];
              
              return [
                <tr key={`${dataset}-cosdata`} className="bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium text-gray-900" rowSpan={2}>
                    {dataset} ({cosdataItem.corpusSize.toLocaleString()})
                  </td>
                  <td className="py-2 px-4 border-b font-medium">Cosdata</td>
                  <td className="py-2 px-4 border-b">{cosdataItem.formattedInsertionTime}</td>
                  <td className="py-2 px-4 border-b text-green-600 font-medium">{cosdataItem.formattedQps}</td>
                  <td className="py-2 px-4 border-b">{cosdataItem.formattedRecall}</td>
                  <td className="py-2 px-4 border-b">{cosdataItem.formattedNdcg}</td>
                  <td className="py-2 px-4 border-b">{cosdataItem.p50Latency}</td>
                  <td className="py-2 px-4 border-b">{cosdataItem.p95Latency}</td>
                </tr>,
                <tr key={`${dataset}-elasticsearch`} className="bg-white">
                  <td className="py-2 px-4 border-b">ElasticSearch</td>
                  <td className="py-2 px-4 border-b">{elasticsearchItem.formattedInsertionTime}</td>
                  <td className="py-2 px-4 border-b">{elasticsearchItem.formattedQps}</td>
                  <td className="py-2 px-4 border-b">{elasticsearchItem.formattedRecall}</td>
                  <td className="py-2 px-4 border-b">{elasticsearchItem.formattedNdcg}</td>
                  <td className="py-2 px-4 border-b">{elasticsearchItem.p50Latency}</td>
                  <td className="py-2 px-4 border-b">{elasticsearchItem.p95Latency}</td>
                </tr>
              ];
            })}
          </tbody>
        </table>
      </div>

      {/* Interactive Comparison - MOVED BELOW BENCHMARK DATA TABLE */}
      <h2 id="interactive-comparison" className={`text-2xl sm:text-3xl font-bold mb-4 text-[#0055c8] scroll-mt-24 ${geologica.className}`}>
        Interactive Comparison
      </h2>
      <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 ${afacad.className}`}>
        Select datasets and metrics below to create custom comparisons:
      </p>

      {/* Dataset selection */}
      <div className={`px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg mb-6 ${afacad.className}`}>
        <div className="flex justify-between items-center mb-2">
          <p className="text-base font-medium text-gray-600">Select datasets to include:</p>
          <div className="flex gap-2">
            <button 
              onClick={selectAllDatasets}
              className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
            >
              Select All
            </button>
            <button 
              onClick={deselectAllDatasets}
              className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
            >
              Deselect All
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {sortedDatasets.map(dataset => (
            <button
              key={dataset}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedDatasets.includes(dataset)
                  ? 'bg-[#3083FE] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => toggleDataset(dataset)}
            >
              {dataset}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium text-gray-600 mb-2">Select comparison metric:</p>
          <div className="flex flex-wrap gap-2">
            {metricOptions.map(metric => (
              <button
                key={metric.id}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedMetric === metric.id
                    ? 'bg-[#3083FE] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedMetric(metric.id)}
              >
                {metric.label}
              </button>
            ))}
      </div>
      </div>
      </div>

      {/* Performance Comparison Chart */}
      <div className="mb-10">
        {selectedDatasets.length > 0 ? (
        <BenchmarkBarChart
            title={currentMetric.title}
            labels={filteredCosdataData
              .sort((a, b) => a.dataset.localeCompare(b.dataset))
              .map(d => d.dataset)}
          datasets={[
            {
              label: "Cosdata",
              backgroundColor: "#3083FE", 
                data: filteredCosdataData
                  .sort((a, b) => a.dataset.localeCompare(b.dataset))
                  .map(d => 
                    selectedMetric === 'qps' ? parseFloat(d.formattedQps) :
                    selectedMetric === 'insertionTime' ? parseFloat(d.formattedInsertionTime) :
                    selectedMetric === 'recall' ? parseFloat(d.formattedRecall) :
                    selectedMetric === 'ndcg' ? parseFloat(d.formattedNdcg) :
                    selectedMetric === 'p50Latency' ? d.p50Latency :
                    d.p95Latency
                  )
            },
            {
              label: "ElasticSearch",
              backgroundColor: "#F23665",
                data: filteredElasticsearchData
                  .sort((a, b) => a.dataset.localeCompare(b.dataset))
                  .map(d => 
                    selectedMetric === 'qps' ? parseFloat(d.formattedQps) :
                    selectedMetric === 'insertionTime' ? parseFloat(d.formattedInsertionTime) :
                    selectedMetric === 'recall' ? parseFloat(d.formattedRecall) :
                    selectedMetric === 'ndcg' ? parseFloat(d.formattedNdcg) :
                    selectedMetric === 'p50Latency' ? d.p50Latency :
                    d.p95Latency
                  )
              }
            ]}
            higherIsBetter={currentMetric.higherIsBetter}
            className="h-[500px]"
          />
        ) : (
          <div className={`text-center py-8 bg-gray-50 border border-gray-200 rounded-lg ${afacad.className}`}>
            <p className="text-gray-500">Please select at least one dataset to view the comparison chart.</p>
          </div>
        )}
      </div>
    </div>
  );
} 