import Link from 'next/link';
import Image from 'next/image';
import { commonStyles, afacad, geologica } from '../../styles/common';

const ResearchHighlight = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-blue-50 px-4 sm:px-6">
      <div className={`${commonStyles.mainContainer}`}>
        <h2 className={`${commonStyles.sectionTitle} mb-4 sm:mb-6`}>
          Research & Innovation
        </h2>
        <p className={`${commonStyles.sectionSubtitle} max-w-3xl mx-auto mb-8 sm:mb-12`}>
          Our team is pushing the boundaries of vector search technology, with industry-leading research and novel approaches to tough problems.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Paper 1 */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm flex flex-col h-full">
            <div className="mb-4 sm:mb-6">
              <span className={`${geologica.className} text-xs sm:text-sm bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full mb-3 sm:mb-4 inline-block`}>Research Paper</span>
              <h3 className={`text-xl sm:text-2xl font-bold ${geologica.className} mt-2 sm:mt-3`}>Hierarchical Navigable Small World Graphs: Optimized Vector Search for Generative AI</h3>
              <p className={`${commonStyles.paragraph} mt-2 sm:mt-3 mb-3 sm:mb-4`}>
                Our research explores the optimal configuration of HNSW graphs for vector search in large language model applications, demonstrating performance improvements of up to 32% compared to standard implementations.
              </p>
            </div>
            
            <div className="mb-4 sm:mb-6 flex-1">
              <h4 className={`${geologica.className} text-base font-semibold text-gray-700 mb-2 sm:mb-3`}>Key Innovations:</h4>
              <ul className={`text-[#374151] space-y-2 sm:space-y-3 text-base sm:text-lg ${afacad.className}`}>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Adaptive graph connectivity based on data dimensionality</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Novel layer construction algorithm with 28% improved recall</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Memory-optimized index structure with 15% reduced footprint</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-auto">
              <Link 
                href="/research/hnsw-optimization" 
                className="inline-flex items-center px-4 sm:px-5 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-[#0055c8] hover:bg-blue-700 transition-colors duration-300"
              >
                Read the Paper
                <svg className="ml-1.5 sm:ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Paper 2 */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm flex flex-col h-full">
            <div className="mb-4 sm:mb-6">
              <span className={`${geologica.className} text-xs sm:text-sm bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full mb-3 sm:mb-4 inline-block`}>Research Paper</span>
              <h3 className={`text-xl sm:text-2xl font-bold ${geologica.className} mt-2 sm:mt-3`}>CHANNI: Cloud-Hosted Approximate Nearest Neighbor Infrastructure</h3>
              <p className={`${commonStyles.paragraph} mt-2 sm:mt-3 mb-3 sm:mb-4`}>
                Our groundbreaking serverless vector database architecture demonstrates how to achieve microsecond query latencies in a fully managed cloud environment while maintaining near-perfect recall at massive scale.
              </p>
            </div>
            
            <div className="mb-4 sm:mb-6 flex-1">
              <h4 className={`${geologica.className} text-base font-semibold text-gray-700 mb-2 sm:mb-3`}>Key Innovations:</h4>
              <ul className={`text-[#374151] space-y-2 sm:space-y-3 text-base sm:text-lg ${afacad.className}`}>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Distributed index partitioning with intelligent routing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Adaptive caching strategy that reduces latency by 65%</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Auto-scaling query processing with sub-millisecond overhead</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-auto">
              <Link 
                href="/research/channi" 
                className="inline-flex items-center px-4 sm:px-5 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-[#0055c8] hover:bg-blue-700 transition-colors duration-300"
              >
                Read the Paper
                <svg className="ml-1.5 sm:ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlight; 