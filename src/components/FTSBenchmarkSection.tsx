'use client';

import React, { useState } from 'react';
import { ftsBenchmarkData } from '@/data/benchmarks';
import BenchmarkBarChart from './BenchmarkBarChart';
import { commonStyles, geologica } from '@/app/styles/common';

export default function FTSBenchmarkSection() {
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>([
    'quora', 'scifact', 'nq', 'msmarco', 'fever'
  ]);

  const filteredCosdataData = ftsBenchmarkData.cosdata.filter(item => 
    selectedDatasets.includes(item.dataset)
  );
  
  const filteredElasticsearchData = ftsBenchmarkData.elasticsearch.filter(item => 
    selectedDatasets.includes(item.dataset)
  );

  // Calculate speedup ratios for each dataset
  const speedupRatios = selectedDatasets.map(dataset => {
    const cosdataItem = ftsBenchmarkData.cosdata.find(item => item.dataset === dataset);
    const elasticsearchItem = ftsBenchmarkData.elasticsearch.find(item => item.dataset === dataset);
    
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

  return (
    <div className="mb-16">
      <h2 className={`text-2xl sm:text-3xl font-bold mb-6 text-[#0055c8] text-center ${geologica.className}`}>
        Full-Text Search Benchmarks
      </h2>
      
      <div className="mb-8 max-w-3xl mx-auto">
        <p className={`${commonStyles.paragraph} mb-4`}>
          We benchmarked Cosdata&apos;s full-text search capabilities against ElasticSearch across multiple datasets to evaluate performance, accuracy, and efficiency.
        </p>
      </div>

      {/* Dataset selection */}
      <div className="mb-8">
        <h3 className={`text-lg font-semibold mb-2 ${geologica.className}`}>Select Datasets to Compare:</h3>
        <div className="flex flex-wrap gap-2">
          {ftsBenchmarkData.cosdata.map(item => (
            <button
              key={item.dataset}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedDatasets.includes(item.dataset)
                  ? 'bg-[#3083FE] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => toggleDataset(item.dataset)}
            >
              {item.dataset}
            </button>
          ))}
        </div>
      </div>

      {/* QPS Comparison Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <BenchmarkBarChart
          title="Queries Per Second (QPS)"
          labels={filteredCosdataData.map(d => d.dataset)}
          datasets={[
            {
              label: "Cosdata",
              backgroundColor: "#3083FE",
              data: filteredCosdataData.map(d => parseFloat(d.qps))
            },
            {
              label: "ElasticSearch",
              backgroundColor: "#F23665",
              data: filteredElasticsearchData.map(d => parseFloat(d.qps))
            }
          ]}
          higherIsBetter={true}
          className="h-[400px]"
        />

        {/* Insertion Time Comparison Chart */}
        <BenchmarkBarChart
          title="Insertion Time (seconds)"
          labels={filteredCosdataData.map(d => d.dataset)}
          datasets={[
            {
              label: "Cosdata",
              backgroundColor: "#3083FE",
              data: filteredCosdataData.map(d => parseFloat(d.insertionTime))
            },
            {
              label: "ElasticSearch",
              backgroundColor: "#F23665", 
              data: filteredElasticsearchData.map(d => parseFloat(d.insertionTime))
            }
          ]}
          higherIsBetter={false}
          className="h-[400px]"
        />
      </div>

      {/* Recall and NDCG Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <BenchmarkBarChart
          title="Recall@10"
          labels={filteredCosdataData.map(d => d.dataset)}
          datasets={[
            {
              label: "Cosdata",
              backgroundColor: "#3083FE",
              data: filteredCosdataData.map(d => parseFloat(d.recall))
            },
            {
              label: "ElasticSearch",
              backgroundColor: "#F23665",
              data: filteredElasticsearchData.map(d => parseFloat(d.recall))
            }
          ]}
          higherIsBetter={true}
          className="h-[400px]"
        />

        <BenchmarkBarChart
          title="NDCG@10"
          labels={filteredCosdataData.map(d => d.dataset)}
          datasets={[
            {
              label: "Cosdata",
              backgroundColor: "#3083FE",
              data: filteredCosdataData.map(d => parseFloat(d.ndcg))
            },
            {
              label: "ElasticSearch",
              backgroundColor: "#F23665",
              data: filteredElasticsearchData.map(d => parseFloat(d.ndcg))
            }
          ]}
          higherIsBetter={true}
          className="h-[400px]"
        />
      </div>

      {/* Memory Usage Chart */}
      <div className="mb-10">
        <BenchmarkBarChart
          title="Memory Usage (GB)"
          labels={filteredCosdataData.map(d => d.dataset)}
          datasets={[
            {
              label: "Cosdata",
              backgroundColor: "#3083FE", 
              data: filteredCosdataData.map(d => parseFloat(d.memoryUsage))
            },
            {
              label: "ElasticSearch",
              backgroundColor: "#F23665",
              data: filteredElasticsearchData.map(d => parseFloat(d.memoryUsage))
            }
          ]}
          higherIsBetter={false}
          className="h-[400px] max-w-4xl mx-auto"
        />
      </div>

      {/* Table with all metrics */}
      <div className="overflow-hidden shadow-lg border border-gray-200 rounded-lg mb-8">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold bg-[#0055c8] text-white">Dataset</th>
                <th className="py-3 px-4 text-left text-sm font-semibold bg-[#0055c8] text-white">System</th>
                <th className="py-3 px-4 text-left text-sm font-semibold bg-[#0055c8] text-white">Corpus Size</th>
                <th className="py-3 px-4 text-left text-sm font-semibold bg-[#0055c8] text-white">Insertion Time</th>
                <th className="py-3 px-4 text-left text-sm font-semibold bg-[#0055c8] text-white">QPS</th>
                <th className="py-3 px-4 text-left text-sm font-semibold bg-[#0055c8] text-white">Recall@10</th>
                <th className="py-3 px-4 text-left text-sm font-semibold bg-[#0055c8] text-white">NDCG@10</th>
                <th className="py-3 px-4 text-left text-sm font-semibold bg-[#0055c8] text-white">Memory (GB)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {selectedDatasets.flatMap(dataset => {
                const cosdataItem = ftsBenchmarkData.cosdata.find(item => item.dataset === dataset);
                const elasticsearchItem = ftsBenchmarkData.elasticsearch.find(item => item.dataset === dataset);
                
                if (!cosdataItem || !elasticsearchItem) return [];
                
                return [
                  <tr key={`${dataset}-cosdata`} className="bg-blue-50">
                    <td className="py-2 px-4 whitespace-nowrap font-medium text-gray-900" rowSpan={2}>{dataset}</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700 font-medium">Cosdata</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">{cosdataItem.corpusSize.toLocaleString()}</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">{cosdataItem.insertionTime}s</td>
                    <td className="py-2 px-4 whitespace-nowrap text-green-600 font-medium">{parseFloat(cosdataItem.qps).toLocaleString()}</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">{cosdataItem.recall}</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">{cosdataItem.ndcg}</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">{cosdataItem.memoryUsage} GB</td>
                  </tr>,
                  <tr key={`${dataset}-elasticsearch`} className="bg-white">
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">ElasticSearch</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">{elasticsearchItem.corpusSize.toLocaleString()}</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">{elasticsearchItem.insertionTime}s</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">{parseFloat(elasticsearchItem.qps).toLocaleString()}</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">{elasticsearchItem.recall}</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">{elasticsearchItem.ndcg}</td>
                    <td className="py-2 px-4 whitespace-nowrap text-gray-700">{elasticsearchItem.memoryUsage} GB</td>
                  </tr>
                ];
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance highlights */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className={`text-xl font-bold mb-4 text-[#0055c8] ${geologica.className}`}>Performance Highlights</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#3083FE] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cosdata achieves up to <strong className="text-[#3083FE]">{Math.round(speedupRatios[0]?.ratio || 0)}x faster QPS</strong> than ElasticSearch on the {speedupRatios[0]?.dataset} dataset</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#3083FE] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cosdata maintains similar recall and NDCG scores to ElasticSearch while delivering superior performance</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#3083FE] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Index creation is <strong className="text-[#3083FE]">significantly faster</strong> with Cosdata, up to 12x faster on large datasets</span>
          </li>
        </ul>
      </div>

      {/* Methodology */}
      <div className="bg-white p-4 sm:p-6 shadow-md border border-gray-200 rounded-lg">
        <h3 className={`text-xl font-bold mb-4 text-[#0055c8] ${geologica.className}`}>FTS Benchmark Methodology</h3>
        <p className={`${commonStyles.paragraph} mb-4`}>
          Our full-text search benchmarks were conducted using the BEIR benchmark suite, which provides a diverse set of information retrieval datasets.
          All benchmarks were run on identical hardware configurations to ensure fair comparison.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Metrics</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li><strong>QPS:</strong> Queries per second (higher is better)</li>
              <li><strong>Recall@10:</strong> Proportion of relevant documents in top 10 results</li>
              <li><strong>NDCG@10:</strong> Normalized Discounted Cumulative Gain at 10 results</li>
              <li><strong>Latency:</strong> Response time at p50 and p95 percentiles</li>
              <li><strong>Memory Usage:</strong> Peak memory usage during operation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Datasets</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li><strong>scifact:</strong> Scientific fact checking dataset</li>
              <li><strong>fiqa:</strong> Financial opinion mining and question answering</li>
              <li><strong>nq:</strong> Natural Questions dataset</li>
              <li><strong>msmarco:</strong> Microsoft Machine Reading Comprehension</li>
              <li><strong>fever:</strong> Fact Extraction and Verification</li>
              <li><strong>quora:</strong> Quora duplicate questions dataset</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 