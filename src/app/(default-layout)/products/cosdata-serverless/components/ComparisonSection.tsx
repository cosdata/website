"use client";
import Link from 'next/link';
import Image from 'next/image';
import { commonStyles, afacad, geologica } from '../../../../styles/common';

export default function ComparisonSection() {

  return (
    <section className={`pb-0 sm:pb-16 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8 ${afacad.className} text-lg`}>
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto`}>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0055c8] mb-8 sm:mb-12 md:mb-16 ${geologica.className}`}>
          CHANNI: Delivering Speed at Scale
        </h2>
        
        {/* Integrated challenge and solution section */}
        <div className="mb-10 sm:mb-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left column: Challenge and current approaches */}
            <div className="lg:col-span-1">
              <h4 className={`text-xl font-bold mb-4 sm:mb-6 text-[#0055c8] border-b border-blue-100 pb-2 ${geologica.className}`}>The Vector Search Challenge</h4>
              
              <p className={`text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 ${commonStyles.paragraph}`}>
                Vector search systems today face a critical dilemma: choose between the blazing speed of in-memory solutions like HNSW or the cost-effective scalability of disk-based ANN. This trade-off has forced organizations to either bear excessive infrastructure costs or accept compromised performance.
              </p>
              
              {/* HNSW and Disk-Based ANN in a single row with two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <h5 className={`text-lg font-semibold mb-2 sm:mb-3 text-[#0055c8] ${geologica.className}`}>HNSW (In-Memory)</h5>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-gray-700 text-sm sm:text-base ${commonStyles.paragraph}`}>Exceptional query performance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-gray-700 text-sm sm:text-base ${commonStyles.paragraph}`}>High recall rates</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-red-600 text-sm sm:text-base ${commonStyles.paragraph}`}>Requires entire index in RAM</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-red-600 text-sm sm:text-base ${commonStyles.paragraph}`}>Costly at scale</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className={`text-lg font-semibold mb-2 sm:mb-3 text-[#0055c8] ${geologica.className}`}>Disk-Based ANN</h5>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-gray-700 text-sm sm:text-base ${commonStyles.paragraph}`}>Excellent scalability</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-gray-700 text-sm sm:text-base ${commonStyles.paragraph}`}>Cost-effective storage</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-red-600 text-sm sm:text-base ${commonStyles.paragraph}`}>Higher query latency</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-red-600 text-sm sm:text-base ${commonStyles.paragraph}`}>Complex maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column: CHANNI solution */}
            <div className="lg:col-span-1">
              <h4 className={`text-xl font-bold mb-4 sm:mb-6 text-[#0055c8] border-b border-blue-100 pb-2 ${geologica.className}`}>The CHANNI Solution</h4>
              
              <p className={`text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 ${commonStyles.paragraph}`}>
                CHANNI (Clustered Heirarchical Approximate Nested Navigable Index) eliminates the traditional trade-off between speed and scale with a novel multi-level architecture that intelligently manages data between memory and disk, combining the advantages of both in-memory and disk-based approaches.
              </p>
              
              <div className="bg-gradient-to-r from-[#847CFC]/5 to-[#9E97FD]/5 rounded-lg p-4 sm:p-6">
                <h3 className={`text-xl font-bold mb-4 text-[#847CFC] ${geologica.className}`}>Enter CHANNI: The Best of Both Worlds</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-gray-700 text-sm sm:text-base ${commonStyles.paragraph}`}>Near-HNSW query performance while keeping most data on disk</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-gray-700 text-sm sm:text-base ${commonStyles.paragraph}`}>Up to 90% less RAM required</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-gray-700 text-sm sm:text-base ${commonStyles.paragraph}`}>Scales to billions of vectors without performance degradation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-gray-700 text-sm sm:text-base ${commonStyles.paragraph}`}>Simplified maintenance through intelligent cluster operations</span>
                  </li>
                </ul>
                
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-indigo-100">
                  <p className={`text-xs sm:text-sm text-gray-600 italic ${commonStyles.paragraph}`}>
                    Built with components from our market-leading HNSW implementation that offers up to 1,770+ QPS on a single node.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CHANNI architecture diagram in full width */}
        <div className="mb-0">
          <h3 className={`text-2xl sm:text-3xl font-bold text-[#0055c8] mb-4 sm:mb-6 text-center ${geologica.className}`}>
            CHANNI Architecture
          </h3>
          
          <div className="w-full flex justify-center">
            {/* Mobile image (hidden on md screens and up) */}
            <div className="block md:hidden w-full">
              <Image 
                src="/svgs/channi.svg" 
                alt="CHANNI Architecture" 
                width={500} 
                height={500} 
                className="max-w-full h-auto mx-auto"
              />
            </div>
            
            {/* Desktop image (hidden on smaller than md screens) */}
            <div className="hidden md:block w-full">
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
      </div>
    </section>
  );
} 