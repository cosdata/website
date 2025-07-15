import Link from 'next/link';
import Image from 'next/image';
import { commonStyles, afacad, geologica } from '../../styles/common';

const ResearchHighlight = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f0f7ff] px-4 sm:px-6">
      <div className={`${commonStyles.mainContainer}`}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`${commonStyles.sectionTitle}`}>
            Research & Innovation
          </h2>
          <p className={`${commonStyles.sectionSubtitle} max-w-3xl mx-auto`}>
            Our cutting-edge research powers the next generation of vector search technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* CHANNI Paper */}
          <div className="bg-white rounded-xl shadow-sm sm:shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-2 bg-[#0055C8]"></div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#0055C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#0055C8]">Research Paper</span>
                  <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] ${geologica.className}`}>CHANNI</h3>
                </div>
              </div>
              
              <h4 className={`text-lg sm:text-xl mb-3 sm:mb-4 font-medium text-gray-900 ${geologica.className}`}>
                Multi-Level Vector Search Index with Nested Graph Navigation
              </h4>
              
              <p className={`${commonStyles.paragraph} mb-4 sm:mb-6 text-sm sm:text-base`}>
                CHANNI introduces a novel vector indexing architecture that bridges the gap between memory-efficient clustering and high-performance graph navigation, combining hierarchical navigable small world graphs at multiple levels.
              </p>
              
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                <h5 className={`text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3 ${geologica.className}`}>Key Innovations:</h5>
                <ul className={`text-[#374151] space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg ${afacad.className}`}>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Multi-level navigation architecture leveraging HNSW graphs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Primary-based cluster representation for efficient memory utilization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Innovative sample-based clustering strategy with minimal computational expense</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                href="/research/channi-multi-level-vector-search-nested-graph-navigation" 
                className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 border border-transparent text-sm sm:text-base md:text-lg font-medium rounded-md text-white bg-[#0055C8] hover:bg-blue-800 transition-colors duration-300"
              >
                Read the Paper
                <svg className="ml-1.5 sm:ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* MAVANN Paper */}
          <div className="bg-white rounded-xl shadow-sm sm:shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-2 bg-[#F23665]"></div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-100 flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#F23665]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#F23665]">Research Paper</span>
                  <h3 className={`text-xl sm:text-2xl font-bold text-[#F23665] ${geologica.className}`}>MAVANN</h3>
                </div>
              </div>
              
              <h4 className={`text-lg sm:text-xl mb-3 sm:mb-4 font-medium text-gray-900 ${geologica.className}`}>
                Metadata-Aware Vector Approximate Nearest Neighbor
              </h4>
              
              <p className={`${commonStyles.paragraph} mb-4 sm:mb-6 text-sm sm:text-base`}>
                MAVANN introduces a novel approach to metadata filtering in vector databases, integrating metadata directly into the vector search process for dramatically improved performance without sacrificing result quality.
              </p>
              
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                <h5 className={`text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3 ${geologica.className}`}>Key Innovations:</h5>
                <ul className={`text-[#374151] space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg ${afacad.className}`}>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-[#F23665] mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Metadata-aware vector navigation for efficient pre-filtering during search</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-[#F23665] mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Dynamic re-routing based on both vector similarity and metadata constraints</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-[#F23665] mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Up to 20x faster query performance with complex metadata filtering</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                href="/research/mavann-metadata-aware-vector-approximate-nearest-neighbor" 
                className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 border border-transparent text-sm sm:text-base md:text-lg font-medium rounded-md text-white bg-[#F23665] hover:bg-purple-700 transition-colors duration-300"
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