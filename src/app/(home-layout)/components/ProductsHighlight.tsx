import Link from 'next/link';
import Image from 'next/image';
import { commonStyles, geologica, afacad } from '../../styles/common';

const ProductsHighlight = () => {
  return (
    <section className="pt-12 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 bg-white relative z-10">
      <div className={`${commonStyles.mainContainer} px-5 sm:px-6 md:px-8 lg:px-10`}>
        <h2 className={`${commonStyles.sectionTitle} mb-8 sm:mb-12`}>
          Our Products
        </h2>
        <p className={`${commonStyles.sectionSubtitle} max-w-3xl mx-auto mb-10 sm:mb-16`}>
          Explore our suite of cutting-edge vector database solutions designed for different use cases and requirements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Cosdata HNSW */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="h-3 bg-[#0055C8]"></div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-center h-14 sm:h-16 w-14 sm:w-16 rounded-full bg-blue-100 mb-3 sm:mb-4 mx-auto">
                <svg className="h-7 sm:h-8 w-7 sm:w-8 text-[#0055C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold text-center mb-2 sm:mb-3 text-[#0055c8] ${geologica.className}`}>Cosdata HNSW</h3>
              <p className={`${commonStyles.paragraph} mb-4 sm:mb-6 text-center`}>
                High-performance vector database with industry-leading query speeds and hybrid search capabilities.
              </p>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                <ul className={`text-[#374151] space-y-2 sm:space-y-3 text-lg ${afacad.className}`}>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Market-Leading Benchmarks
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Self-hosted deployment
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced hybrid search
                  </li>
                </ul>
              </div>
              <Link 
                href="/products/cosdata-hnsw" 
                className="block w-full text-center py-2.5 sm:py-3 px-4 bg-[#0055C8] text-white rounded-md hover:bg-blue-800 transition-colors duration-300 text-lg font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Cosdata Serverless */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="h-3 bg-[#847CFC]"></div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-center h-14 sm:h-16 w-14 sm:w-16 rounded-full bg-[#847CFC]/10 mb-3 sm:mb-4 mx-auto">
                <svg className="h-7 sm:h-8 w-7 sm:w-8 text-[#847CFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold text-center mb-2 sm:mb-3 text-[#0055c8] ${geologica.className}`}>Cosdata Serverless</h3>
              <p className={`${commonStyles.paragraph} mb-4 sm:mb-6 text-center`}>
                Infinitely scalable vector database with zero operational overhead, powered by our innovative CHANNI technology.
              </p>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                <ul className={`text-[#374151] space-y-2 sm:space-y-3 text-lg ${afacad.className}`}>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Zero operational overhead
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Pay-as-you-go pricing
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Adaptive scaling
                  </li>
                </ul>
              </div>
              <Link 
                href="/products/cosdata-serverless" 
                className="block w-full text-center py-2.5 sm:py-3 px-4 bg-[#847CFC] text-white rounded-md hover:bg-[#706BD7] transition-colors duration-300 text-lg font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Structured Search */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="h-3 bg-[#F23665]"></div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-center h-14 sm:h-16 w-14 sm:w-16 rounded-full bg-red-100 mb-3 sm:mb-4 mx-auto">
                <svg className="h-7 sm:h-8 w-7 sm:w-8 text-[#F23665]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold text-center mb-2 sm:mb-3 text-[#0055c8] ${geologica.className}`}>Structured Search</h3>
              <p className={`${commonStyles.paragraph} mb-4 sm:mb-6 text-center`}>
                Next-generation knowledge graph technology optimized for structured search and GraphRAG applications.
              </p>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                <ul className={`text-[#374151] space-y-2 sm:space-y-3 text-lg ${afacad.className}`}>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Knowledge graph integration
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Graph-Based RAG optimized
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unprecedented scale and simplicity
                  </li>
                </ul>
              </div>
              <Link 
                href="/products/structured-search" 
                className="block w-full text-center py-2.5 sm:py-3 px-4 bg-[#F23665] text-white rounded-md hover:bg-[#d92d59] transition-colors duration-300 text-lg font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHighlight; 