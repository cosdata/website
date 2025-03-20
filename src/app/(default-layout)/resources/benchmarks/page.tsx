import Image from "next/image";
import Link from "next/link";
import { noto_sans_mono, commonStyles } from '../../../styles/common';
import BenchmarkTable from '@/components/BenchmarkTable';
import { benchmarkData } from '@/data/benchmarks';

export default function BenchmarksPage() {
  const cosdataConfigData = [
    { 
      config: "ef_construction: 128, ef_search: 128, neighbors_count: 16, layer_0_neighbors_count: 32", 
      indexingTime: "554.09 sec (9.23 min)", 
      recall: "97.60%", 
      rps: "2274.31" 
    },
    { 
      config: "ef_construction: 64, ef_search: 128, neighbors_count: 16, layer_0_neighbors_count: 32", 
      indexingTime: "518.23 sec (8.64 min)", 
      recall: "98.20%", 
      rps: "2242.33" 
    },
    { 
      config: "ef_construction: 64, ef_search: 64, neighbors_count: 16, layer_0_neighbors_count: 32", 
      indexingTime: "468.05 sec (7.80 min)", 
      recall: "95.60%", 
      rps: "2621.02" 
    },
    { 
      config: "ef_construction: 32, ef_search: 32, neighbors_count: 16, layer_0_neighbors_count: 32", 
      indexingTime: "422.81 sec (7.05 min)", 
      recall: "94.80%", 
      rps: "2959.85" 
    },
  ];

  return (
    <main className={`bg-transparent ${noto_sans_mono.className}`}>
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12`}>
        <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-center text-[#0055c8] mb-6 sm:mb-8 md:mb-10">
          Vector Database Benchmarks
        </h1>

        <div className="max-w-7xl mx-auto text-center mb-6 sm:mb-8 md:mb-10">
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Cosdata&apos;s open-source HNSW vector database outperforms industry leaders across multiple key metrics.
            These results are from indexing DbPedia&apos;s 1M record, 1536-dimension dataset, using the same methodology as 
            <a href="https://qdrant.tech/benchmarks/" target="_blank" rel="noopener noreferrer" className="text-[#f23665] hover:text-[#d92d5c] font-medium"> Qdrant&apos;s benchmarks</a>.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <BenchmarkTable data={benchmarkData} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="bg-white p-4 sm:p-6 shadow-md border border-gray-200">
            <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold mb-4 sm:mb-6 text-[#0055c8]">Benchmark Methodology</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              Our benchmarks were conducted using the following methodology:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">
              <li>Dataset: DbPedia&apos;s 1M record dataset with 1536-dimensional vectors</li>
              <li>Hardware: All tests were run on identical hardware (8 vCPUs, 32GB RAM)</li>
              <li>Metrics measured: Indexing time, Requests per second (RPS), and Precision</li>
              <li>Each test was run 5 times and the average results are reported</li>
              <li>Methodology aligned with <a href="https://qdrant.tech/benchmarks/" target="_blank" rel="noopener noreferrer" className="text-[#f23665] hover:text-[#d92d5c] font-medium">Qdrant&apos;s benchmarks</a> for fair comparison</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-700">
              The results demonstrate that Cosdata&apos;s HNSW implementation provides superior performance in terms of RPS while maintaining high precision. 
              Our implementation is particularly optimized for high-throughput scenarios where query performance is critical.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 shadow-md border border-gray-200">
            <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold mb-4 sm:mb-6 text-[#0055c8]">Performance Factors</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              Cosdata&apos;s superior performance can be attributed to several key factors:
            </p>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
              <li className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f23665] mr-1.5 sm:mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Optimized HNSW Implementation:</strong> Our implementation includes custom optimizations for graph construction and search algorithms</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f23665] mr-1.5 sm:mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>SIMD Acceleration:</strong> Extensive use of SIMD instructions for distance calculations</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f23665] mr-1.5 sm:mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Memory Efficiency:</strong> Careful memory layout and management to maximize cache efficiency</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f23665] mr-1.5 sm:mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Parallel Processing:</strong> Effective utilization of multi-core architectures</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f23665] mr-1.5 sm:mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Optimized Data Structures:</strong> Custom data structures designed for minimal overhead</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold mb-4 sm:mb-6 text-[#0055c8] text-center">Cosdata Configuration Benchmarks</h2>
        <div className="max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              We&apos;ve conducted additional benchmarks with different Cosdata HNSW configurations to demonstrate the flexibility and performance characteristics of our implementation:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 mb-8 sm:mb-12 text-sm sm:text-base text-gray-700">
              <li><strong>Dataset:</strong> 1 million text embeddings (768 dimensions) from <a href="https://huggingface.co/datasets/Sreenath/million-text-embeddings" target="_blank" rel="noopener noreferrer" className="text-[#f23665] hover:text-[#d92d5c] font-medium">Hugging Face</a></li>
              <li><strong>Hardware:</strong> x86 machine, 4C/8T, 32 GB RAM</li>
              <li><strong>Metrics:</strong> Total insertion time, Average Recall@5, Requests Per Second (RPS)</li>
            </ul>

          <div className="overflow-hidden shadow-lg mb-8 sm:mb-10 md:mb-12 border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-semibold bg-[#0055c8] text-white">Configuration</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-semibold bg-[#0055c8] text-white">Indexing Time</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-semibold bg-[#0055c8] text-white">Recall@5</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-semibold bg-[#0055c8] text-white">RPS</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cosdataConfigData.map((config, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap font-medium text-gray-900">
                        <code className="text-xs sm:text-sm bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded">{config.config}</code>
                      </td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap text-gray-700">{config.indexingTime}</td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap text-gray-700">{config.recall}</td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap text-gray-700 font-medium">
                        {index === 3 ? <span className="text-green-600">{config.rps}</span> : config.rps}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-8 sm:mb-10 md:mb-12">
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              <strong>Key Observations:</strong>
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
              <li>Lower <code className="text-xs sm:text-sm bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded">ef_construction</code> and <code className="text-xs sm:text-sm bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded">ef_search</code> values result in faster indexing times and higher RPS</li>
              <li>Higher <code className="text-xs sm:text-sm bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded">ef_construction</code> and <code className="text-xs sm:text-sm bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded">ef_search</code> values provide better recall accuracy</li>
              <li>The configuration with <code className="text-xs sm:text-sm bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded">ef_construction: 64, ef_search: 128</code> offers an excellent balance between speed and accuracy</li>
              <li>For maximum throughput, the configuration with <code className="text-xs sm:text-sm bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded">ef_construction: 32, ef_search: 32</code> delivers nearly 3,000 RPS</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-white shadow-md overflow-hidden border border-gray-200 max-w-7xl mx-auto">
          <div className="md:w-3/4 p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-[#0055c8]">Try Cosdata HNSW Today</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              Experience the performance benefits of Cosdata HNSW in your own applications. Our open-source implementation is available on GitHub.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-300 text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.236 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                View on GitHub
              </a>
              <Link href="/products/cosdata-hnsw" className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-[#f23665] hover:bg-[#d92d5c] text-white rounded-lg transition-colors duration-300 text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/4 p-4 sm:p-6 md:p-8 flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#0055c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 