"use client";
import Link from 'next/link';
import Image from 'next/image';
import { commonStyles } from '../../../../styles/common';

export default function ComparisonSection() {

  return (
    <section className="pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0055c8] mb-16">
          CHANNI: Delivering Speed at Scale
        </h2>
        
        {/* Integrated challenge and solution section */}
        <div className="mb-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column: Challenge and current approaches */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-6 text-[#0055c8] border-b border-blue-100 pb-2">The Vector Search Challenge</h4>
              
              <p className="text-gray-700 text-lg mb-8">
                Vector search systems today face a critical dilemma: choose between the blazing speed of in-memory solutions like HNSW or the cost-effective scalability of disk-based ANN. This trade-off has forced organizations to either bear excessive infrastructure costs or accept compromised performance.
              </p>
              
              {/* HNSW and Disk-Based ANN in a single row with two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h5 className="text-lg font-semibold mb-3 text-[#0055c8]">HNSW (In-Memory)</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Exceptional query performance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">High recall rates</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-600">Requires entire index in RAM</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-600">Costly at scale</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-3 text-[#0055c8]">Disk-Based ANN</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Excellent scalability</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Cost-effective storage</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-600">Higher query latency</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-600">Complex maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column: CHANNI solution */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-6 text-[#0055c8] border-b border-blue-100 pb-2">The CHANNI Solution</h4>
              
              <p className="text-gray-700 text-lg mb-6">
                CHANNI (Clustered Heirarchical Approximate Nested Navigable Index) eliminates the traditional trade-off between speed and scale with a novel multi-level architecture that intelligently manages data between memory and disk, combining the advantages of both in-memory and disk-based approaches.
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f23665] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Near-HNSW query performance while keeping most data on disk</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f23665] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Up to 90% less RAM required</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f23665] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Scales to billions of vectors without performance degradation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#f23665] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Simplified maintenance through intelligent cluster operations</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t border-indigo-100">
                  <p className="text-sm text-gray-600 italic">
                    Our HNSW implementation outperforms competitors with up to 1,770+ QPS on a single node.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CHANNI architecture diagram in full width */}
        <div className="mb-0">
          <h3 className="text-3xl font-bold text-[#0055c8] mb-6 text-center">
            CHANNI Architecture
          </h3>
          
          <div className="w-full flex justify-center">
            <Image 
              src="/svgs/channi-wide.svg" 
              alt="CHANNI Architecture" 
              width={1500} 
              height={500} 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 