"use client";
import Link from 'next/link';
import { commonStyles } from '../../../../styles/common';

export default function ComparisonSection() {
  const architecturePoints = [
    {
      title: "Multi-Level Navigation",
      description: "CHANNI's dual-level navigation approach enables rapid identification of relevant clusters at the top level, while hierarchical navigable graphs within each cluster facilitate efficient local search with high precision."
    },
    {
      title: "Intelligent Clustering",
      description: "Vector space is partitioned through representative sampling, creating well-distributed clusters without the overhead of iterative centroid refinement, perfect for serverless environments."
    },
    {
      title: "Horizontal Scaling",
      description: "The cluster-based organization naturally supports distributed deployment across multiple machines, with the top-level HNSW graph serving as an efficient routing mechanism."
    },
    {
      title: "Dynamic Maintenance",
      description: "Automatic cluster split and merge operations maintain optimal performance as your data grows, with parallel execution capabilities to maximize throughput."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0055c8] mb-12">
          CHANNI Technology: The Best of Both Worlds
        </h2>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-bold text-[#0055c8] mb-4">
              The Vector Search Challenge
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Vector search systems today face a critical dilemma: choose between the blazing speed of in-memory solutions like HNSW or the cost-effective scalability of disk-based approaches like DiskANN. This trade-off has forced organizations to either bear excessive infrastructure costs or accept compromised performance.
            </p>
            <Link 
              href="/tech/channi-paper" 
              className="inline-flex items-center text-[#f23665] font-medium hover:text-[#d92d5c] transition-colors"
            >
              Read the CHANNI paper
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="w-full h-[300px] bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg border border-gray-200 p-4 relative overflow-hidden">
              {/* Abstract visualization of CHANNI architecture */}
              <div className="absolute inset-0">
                {/* Top level clusters */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center border-2 border-purple-300">
                  <span className="text-xs font-bold text-purple-700">C1</span>
                </div>
                <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center border-2 border-blue-300">
                  <span className="text-xs font-bold text-blue-700">C2</span>
                </div>
                <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center border-2 border-indigo-300">
                  <span className="text-xs font-bold text-indigo-700">C3</span>
                </div>
                
                {/* Connections between clusters */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  <line x1="100" y1="75" x2="300" y2="75" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="100" y1="75" x2="133" y2="225" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="300" y1="75" x2="133" y2="225" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
                  
                  {/* Inner cluster nodes for C1 */}
                  <circle cx="80" cy="55" r="4" fill="#9F7AEA" />
                  <circle cx="110" cy="65" r="4" fill="#9F7AEA" />
                  <circle cx="90" cy="95" r="4" fill="#9F7AEA" />
                  <line x1="100" y1="75" x2="80" y2="55" stroke="#9F7AEA" strokeWidth="1" />
                  <line x1="100" y1="75" x2="110" y2="65" stroke="#9F7AEA" strokeWidth="1" />
                  <line x1="100" y1="75" x2="90" y2="95" stroke="#9F7AEA" strokeWidth="1" />
                  
                  {/* Inner cluster nodes for C2 */}
                  <circle cx="280" cy="55" r="4" fill="#4F46E5" />
                  <circle cx="310" cy="85" r="4" fill="#4F46E5" />
                  <circle cx="290" cy="95" r="4" fill="#4F46E5" />
                  <line x1="300" y1="75" x2="280" y2="55" stroke="#4F46E5" strokeWidth="1" />
                  <line x1="300" y1="75" x2="310" y2="85" stroke="#4F46E5" strokeWidth="1" />
                  <line x1="300" y1="75" x2="290" y2="95" stroke="#4F46E5" strokeWidth="1" />
                  
                  {/* Inner cluster nodes for C3 */}
                  <circle cx="113" cy="205" r="4" fill="#6366F1" />
                  <circle cx="143" cy="235" r="4" fill="#6366F1" />
                  <circle cx="153" cy="215" r="4" fill="#6366F1" />
                  <line x1="133" y1="225" x2="113" y2="205" stroke="#6366F1" strokeWidth="1" />
                  <line x1="133" y1="225" x2="143" y2="235" stroke="#6366F1" strokeWidth="1" />
                  <line x1="133" y1="225" x2="153" y2="215" stroke="#6366F1" strokeWidth="1" />
                </svg>
                
                {/* Legend */}
                <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 p-2 rounded text-xs">
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 bg-purple-300 rounded-full mr-1"></div>
                    <span>Cluster</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-0 border-t border-dashed border-purple-500 mr-1"></div>
                    <span>Connection</span>
                  </div>
                </div>
              </div>
              
              {/* Title overlay */}
              <div className="absolute top-2 left-2 bg-white bg-opacity-80 p-2 rounded">
                <span className="text-sm font-bold text-[#0055c8]">CHANNI Architecture</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#0055c8] mb-6 text-center">
            Current Approaches and Their Limitations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold mb-4 text-[#0055c8]">HNSW (In-Memory)</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Exceptional query performance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">High recall rates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-600">Requires entire index in RAM</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-600">Costly at scale</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 italic">
                  Our HNSW implementation outperforms competitors with up to 1,770+ QPS on a single node.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold mb-4 text-[#0055c8]">Disk-Based ANN</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Excellent scalability</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Cost-effective storage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-600">Higher query latency</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-600">Complex maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-8 shadow-md mb-12">
          <h3 className="text-2xl font-bold text-[#0055c8] mb-6 text-center">
            The CHANNI Solution
          </h3>
          <p className="text-gray-700 text-lg mb-8 text-center">
            CHANNI bridges this gap with a novel multi-level architecture that combines the best aspects of both approaches. By intelligently managing data between memory and disk through its unique cluster-primary representation and nested navigation structure, CHANNI achieves:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <svg className="w-6 h-6 text-[#f23665] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Near-HNSW query performance while keeping most data on disk</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#f23665] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Dramatic reduction in infrastructure costs (up to 90% less RAM required)</p>
              </div>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <svg className="w-6 h-6 text-[#f23665] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Ability to scale to billions of vectors without performance degradation</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#f23665] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">Simplified maintenance through intelligent cluster operations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <h3 className="text-2xl font-bold text-[#0055c8] mb-4 md:col-span-2 text-center">
            Key Architectural Innovations
          </h3>
          {architecturePoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-3 text-[#0055c8]">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 