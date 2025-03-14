"use client";
import Image from 'next/image';
import Link from 'next/link';
import { commonStyles } from '../../../../styles/common';

export default function BenchmarksSection() {
  const benchmarkData = [
    { name: "Cosdata", indexingTime: "14.98", rps: "1773", precision: ".98" },
    { name: "Qdrant", indexingTime: "24.43", rps: "1238", precision: ".99" },
    { name: "Weaviate", indexingTime: "13.94", rps: "1142", precision: ".97" },
    { name: "Elastic Search", indexingTime: "83.72", rps: "716", precision: ".98" },
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <h2 className="text-[42px] font-bold text-center text-[#0055c8] mb-10">
          Industry-Leading Performance
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg text-gray-700 mb-8">
            Cosdata&apos;s open-source HNSW vector database outperforms industry leaders across multiple key metrics.
            These results are from indexing DbPedia&apos;s 1M record, 1536-dimension dataset, using the same methodology as 
            <a href="https://qdrant.tech/benchmarks/" target="_blank" rel="noopener noreferrer" className="text-[#f23665] hover:text-[#d92d5c] font-medium"> Qdrant&apos;s benchmarks</a>.
          </p>
        </div>

        <div className="overflow-hidden shadow-lg mb-12 border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left text-base font-semibold bg-[#0055c8] text-white">Vector DB</th>
                  <th className="py-4 px-6 text-left text-base font-semibold bg-[#0055c8] text-white">Indexing Time (m)</th>
                  <th className="py-4 px-6 text-left text-base font-semibold bg-[#0055c8] text-white">RPS</th>
                  <th className="py-4 px-6 text-left text-base font-semibold bg-[#0055c8] text-white">Precision</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {benchmarkData.map((db, index) => (
                  <tr key={index} className={index === 0 ? "bg-blue-50" : index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-900">
                      {index === 0 ? (
                        <span className="flex items-center">
                          {db.name}
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Fastest
                          </span>
                        </span>
                      ) : db.name}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-gray-700">{db.indexingTime}</td>
                    <td className="py-4 px-6 whitespace-nowrap text-gray-700 font-medium">
                      {index === 0 ? <span className="text-green-600">{db.rps}</span> : db.rps}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-gray-700">{db.precision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mb-16">
          <Link 
            href="/resources/benchmarks" 
            className="inline-flex items-center px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-300 border border-gray-300"
          >
            View detailed benchmarks
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative w-full h-[300px]">
                <Image 
                  src="/svgs/results.svg" 
                  alt="Performance Comparison Chart" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6 text-[#0055c8]">Why We&apos;re Faster</h3>
              <p className="text-gray-700 mb-6">
                Our implementation achieves superior performance through:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base">Optimized HNSW graph construction</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base">Efficient memory management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base">SIMD-accelerated distance calculations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base">Parallel processing for multi-core utilization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base">Optimized data structures for minimal overhead</span>
                </li>
              </ul>
              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  Benchmarks conducted using the same methodology as <a href="https://qdrant.tech/benchmarks/" target="_blank" rel="noopener noreferrer" className="text-[#f23665] hover:text-[#d92d5c]">Qdrant&apos;s benchmarks</a>, 
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