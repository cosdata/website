import Link from 'next/link';
import Image from 'next/image';
import { commonStyles, afacad, geologica } from '../../styles/common';

const ResearchHighlight = () => {
  return (
    <section className="py-16 bg-[#f0f7ff]">
      <div className={`${commonStyles.mainContainer}`}>
        <div className="text-center mb-12">
          <h2 className={`${commonStyles.sectionTitle}`}>
            Research & Innovation
          </h2>
          <p className={`${commonStyles.sectionSubtitle} max-w-3xl mx-auto`}>
            Our cutting-edge research powers the next generation of vector search technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* CHANNI Paper */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-2 bg-blue-600"></div>
            <div className="p-8">
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Research Paper</span>
                  <h3 className={`text-2xl font-bold text-[#0055c8] ${geologica.className}`}>CHANNI</h3>
                </div>
              </div>
              
              <h4 className={`text-lg mb-4 font-medium text-gray-900 ${geologica.className}`}>
                Multi-Level Vector Search Index with Nested Graph Navigation
              </h4>
              
              <p className={`text-gray-600 mb-6 ${afacad.className}`}>
                CHANNI introduces a novel vector indexing architecture that bridges the gap between memory-efficient clustering and high-performance graph navigation, combining hierarchical navigable small world graphs at multiple levels.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h5 className={`text-sm font-semibold text-gray-700 mb-2 ${geologica.className}`}>Key Innovations:</h5>
                <ul className={`text-gray-600 space-y-2 ${afacad.className}`}>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Multi-level navigation architecture leveraging HNSW graphs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Primary-based cluster representation for efficient memory utilization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Innovative sample-based clustering strategy with minimal computational expense</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                href="/blog/channi-paper" 
                className="inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Read the Paper
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* MAVANN Paper */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-2 bg-purple-600"></div>
            <div className="p-8">
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">Research Paper</span>
                  <h3 className={`text-2xl font-bold text-[#0055c8] ${geologica.className}`}>MAVANN</h3>
                </div>
              </div>
              
              <h4 className={`text-lg mb-4 font-medium text-gray-900 ${geologica.className}`}>
                Metadata-Aware Vector Approximate Nearest Neighbor
              </h4>
              
              <p className={`text-gray-600 mb-6 ${afacad.className}`}>
                MAVANN introduces a novel approach to metadata filtering in vector databases, integrating metadata directly into the vector search process for dramatically improved performance without sacrificing result quality.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h5 className={`text-sm font-semibold text-gray-700 mb-2 ${geologica.className}`}>Key Innovations:</h5>
                <ul className={`text-gray-600 space-y-2 ${afacad.className}`}>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Metadata-aware vector navigation for efficient pre-filtering during search</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Dynamic re-routing based on both vector similarity and metadata constraints</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Up to 20x faster query performance with complex metadata filtering</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                href="/blog/mavann-metadata-filtering" 
                className="inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
              >
                Read the Paper
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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