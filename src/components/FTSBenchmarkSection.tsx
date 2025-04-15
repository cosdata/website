'use client';

import React, { useState, useMemo } from 'react';
import { ftsBenchmarkData } from '@/data/benchmarks';
import BenchmarkBarChart from './BenchmarkBarChart';
import { commonStyles, geologica, afacad } from '@/app/styles/common';

// Format benchmark data with consistent decimal places
const formatBenchmarkData = (data: any[]) => {
  return data.map(item => ({
    ...item,
    // Format the values with specified decimal places
    formattedQps: Math.round(parseFloat(item.qps)).toString(),
    formattedInsertionTime: parseFloat(item.insertionTime).toFixed(1),
    formattedRecall: parseFloat(item.recall).toFixed(2),
    formattedNdcg: parseFloat(item.ndcg).toFixed(2),
    p50Latency: item.p50 ? Math.round(parseFloat(item.p50)) : null,
    p95Latency: item.p95 ? Math.round(parseFloat(item.p95)) : null
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

// Dataset categories
const datasetCategories = [
  { 
    id: 'all', 
    label: 'All Datasets', 
    datasets: ['arguana', 'climate-fever', 'fever', 'fiqa', 'msmarco', 'nq', 'quora', 'scidocs', 'scifact', 'trec-covid', 'webis-touche2020'],
    description: 'All available benchmark datasets'
  },
  { 
    id: 'small_medium', 
    label: 'Small Datasets (<500K documents)', 
    datasets: ['arguana', 'scifact', 'fiqa', 'scidocs', 'trec-covid', 'webis-touche2020'],
    description: 'Datasets with fewer than 500,000 documents'
  },
  { 
    id: 'large', 
    label: 'Large Datasets (>500K documents)', 
    datasets: ['quora', 'fever', 'climate-fever', 'nq', 'msmarco'],
    description: 'Large datasets with more than 500,000 documents'
  },
  { 
    id: 'scientific', 
    label: 'Scientific Datasets', 
    datasets: ['scidocs', 'scifact', 'trec-covid', 'climate-fever'],
    description: 'Datasets focused on scientific publications and fact-checking'
  },
  { 
    id: 'qa', 
    label: 'Question-Answering Datasets', 
    datasets: ['nq', 'msmarco', 'quora', 'fiqa'],
    description: 'Datasets centered around question answering and information retrieval'
  }
];

// Takeaways for each metric and dataset category combination
const getTakeaway = (metric: ComparisonMetric, categoryId: string, averageSpeedup: number) => {
  const categoryLabel = datasetCategories.find(c => c.id === categoryId)?.label.toLowerCase() || '';
  
  switch (metric) {
    case 'qps':
      return `Cosdata delivers ${averageSpeedup.toFixed(1)}x faster query throughput across ${categoryLabel}.`;
    case 'insertionTime':
      return `Cosdata indexes data ${averageSpeedup.toFixed(1)}x faster for ${categoryLabel}.`;
    case 'p50Latency':
    case 'p95Latency':
      return `Cosdata provides ${averageSpeedup.toFixed(1)}x lower ${metric === 'p50Latency' ? 'median' : '95th percentile'} latency across ${categoryLabel}.`;
    case 'recall':
      return `Cosdata maintains competitive recall scores across ${categoryLabel} while delivering superior performance.`;
    case 'ndcg':
      return `Cosdata achieves similar ranking quality (NDCG) to ElasticSearch across ${categoryLabel}.`;
    default:
      return `Cosdata outperforms ElasticSearch across ${categoryLabel}.`;
  }
};

export default function FTSBenchmarkSection() {
  // Get all available datasets
  const allDatasets = ftsBenchmarkData.cosdata.map(item => item.dataset);
  
  // Sort datasets alphabetically
  const sortedDatasets = [...allDatasets].sort();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMetric, setSelectedMetric] = useState<ComparisonMetric>('qps');

  // Format benchmark data with latency
  const cosdataDataWithLatency = formatBenchmarkData(ftsBenchmarkData.cosdata);
  const elasticsearchDataWithLatency = formatBenchmarkData(ftsBenchmarkData.elasticsearch);

  // Get the selected datasets based on category
  const selectedDatasets = useMemo(() => {
    const category = datasetCategories.find(c => c.id === selectedCategory);
    return category ? category.datasets : [];
  }, [selectedCategory]);

  // Filter data based on selected datasets
  const filteredCosdataData = useMemo(() => 
    cosdataDataWithLatency.filter(item => selectedDatasets.includes(item.dataset))
  , [cosdataDataWithLatency, selectedDatasets]);
  
  const filteredElasticsearchData = useMemo(() => 
    elasticsearchDataWithLatency.filter(item => selectedDatasets.includes(item.dataset))
  , [elasticsearchDataWithLatency, selectedDatasets]);

  // Get the selected metric configuration
  const currentMetric = metricOptions.find(m => m.id === selectedMetric) || metricOptions[0];

  // Calculate average speedup for the takeaway
  const averageSpeedup = useMemo(() => {
    let total = 0;
    let count = 0;
    
    selectedDatasets.forEach(dataset => {
      const cosdataItem = cosdataDataWithLatency.find(item => item.dataset === dataset);
      const elasticsearchItem = elasticsearchDataWithLatency.find(item => item.dataset === dataset);
      
      if (cosdataItem && elasticsearchItem) {
        let cosdataValue, elasticsearchValue;
        
        if (selectedMetric === 'qps') {
          cosdataValue = parseFloat(cosdataItem.qps);
          elasticsearchValue = parseFloat(elasticsearchItem.qps);
          if (cosdataValue > 0 && elasticsearchValue > 0) {
            total += cosdataValue / elasticsearchValue;
            count++;
          }
        } else if (selectedMetric === 'insertionTime' || selectedMetric === 'p50Latency' || selectedMetric === 'p95Latency') {
          // For metrics where lower is better, invert the ratio
          if (selectedMetric === 'insertionTime') {
            cosdataValue = parseFloat(cosdataItem.insertionTime);
            elasticsearchValue = parseFloat(elasticsearchItem.insertionTime);
          } else if (selectedMetric === 'p50Latency') {
            cosdataValue = cosdataItem.p50Latency || 0;
            elasticsearchValue = elasticsearchItem.p50Latency || 0;
          } else {
            cosdataValue = cosdataItem.p95Latency || 0;
            elasticsearchValue = elasticsearchItem.p95Latency || 0;
          }
          
          if (cosdataValue > 0 && elasticsearchValue > 0) {
            total += elasticsearchValue / cosdataValue; // Invert for "lower is better" metrics
            count++;
          }
        } else if (selectedMetric === 'recall') {
          // For recall, we just look at the relative difference
          cosdataValue = parseFloat(cosdataItem.recall);
          elasticsearchValue = parseFloat(elasticsearchItem.recall);
          if (cosdataValue > 0 && elasticsearchValue > 0) {
            total += cosdataValue / elasticsearchValue;
            count++;
          }
        } else if (selectedMetric === 'ndcg') {
          // For NDCG, we just look at the relative difference
          cosdataValue = parseFloat(cosdataItem.ndcg);
          elasticsearchValue = parseFloat(elasticsearchItem.ndcg);
          if (cosdataValue > 0 && elasticsearchValue > 0) {
            total += cosdataValue / elasticsearchValue;
            count++;
          }
        }
      }
    });
    
    return count > 0 ? total / count : 0;
  }, [selectedMetric, selectedDatasets, cosdataDataWithLatency, elasticsearchDataWithLatency]);

  // Calculate speedup ratios for each dataset (used in highlights section)
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

      {/* Performance highlights */}
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

      <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 ${afacad.className}`}>
        Select a dataset category and comparison metric to visualize performance differences:
      </p>

      {/* Dataset and Metric selection */}
      <div className={`px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg mb-6 ${afacad.className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dataset Category Selection */}
          <div>
            <p className="text-base font-medium text-gray-600 mb-3">Dataset Category:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                {/* First column of dataset categories */}
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`category-all`}
                    name="datasetCategory"
                    className="mr-2 h-4 w-4 text-[#3083FE] focus:ring-[#3083FE]"
                    checked={selectedCategory === 'all'}
                    onChange={() => setSelectedCategory('all')}
                  />
                  <label htmlFor={`category-all`} className="text-sm text-gray-700 cursor-pointer">
                    All Datasets
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`category-small_medium`}
                    name="datasetCategory"
                    className="mr-2 h-4 w-4 text-[#3083FE] focus:ring-[#3083FE]"
                    checked={selectedCategory === 'small_medium'}
                    onChange={() => setSelectedCategory('small_medium')}
                  />
                  <label htmlFor={`category-small_medium`} className="text-sm text-gray-700 cursor-pointer">
                    Small Datasets (&lt;500K documents)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id={`category-large`}
                    name="datasetCategory"
                    className="mr-2 h-4 w-4 text-[#3083FE] focus:ring-[#3083FE]"
                    checked={selectedCategory === 'large'}
                    onChange={() => setSelectedCategory('large')}
                  />
                  <label htmlFor={`category-large`} className="text-sm text-gray-700 cursor-pointer">
                    Large Datasets (&gt;500K documents)
                  </label>
                </div>
              </div>
              <div>
                {/* Second column of dataset categories */}
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`category-scientific`}
                    name="datasetCategory"
                    className="mr-2 h-4 w-4 text-[#3083FE] focus:ring-[#3083FE]"
                    checked={selectedCategory === 'scientific'}
                    onChange={() => setSelectedCategory('scientific')}
                  />
                  <label htmlFor={`category-scientific`} className="text-sm text-gray-700 cursor-pointer">
                    Scientific Datasets
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id={`category-qa`}
                    name="datasetCategory"
                    className="mr-2 h-4 w-4 text-[#3083FE] focus:ring-[#3083FE]"
                    checked={selectedCategory === 'qa'}
                    onChange={() => setSelectedCategory('qa')}
                  />
                  <label htmlFor={`category-qa`} className="text-sm text-gray-700 cursor-pointer">
                    Question-Answering Datasets
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Selection */}
          <div>
            <p className="text-base font-medium text-gray-600 mb-3">Comparison Metric:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {metricOptions.map(metric => (
                <div key={metric.id} className="flex items-center">
                  <input
                    type="radio"
                    id={`metric-${metric.id}`}
                    name="comparisonMetric"
                    className="mr-2 h-4 w-4 text-[#3083FE] focus:ring-[#3083FE]"
                    checked={selectedMetric === metric.id}
                    onChange={() => setSelectedMetric(metric.id)}
                  />
                  <label htmlFor={`metric-${metric.id}`} className="text-sm text-gray-700 cursor-pointer">
                    {metric.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Takeaway Section */}
      {selectedDatasets.length > 0 && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-start">
          <svg className="w-6 h-6 text-[#0055c8] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
          </svg>
          <p className={`text-lg font-medium text-gray-800 ${afacad.className}`}>
            {getTakeaway(selectedMetric, selectedCategory, averageSpeedup)}
          </p>
        </div>
      )}

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
            <p className="text-gray-500">No datasets available in the selected category.</p>
          </div>
        )}
      </div>

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
    </div>
  );
} 