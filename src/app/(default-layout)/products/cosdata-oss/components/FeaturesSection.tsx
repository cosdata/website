"use client";
import Image from 'next/image';
import { commonStyles, afacad, geologica } from '../../../../styles/common';

export default function FeaturesSection() {
  const features = [
    {
      title: "High Performance",
      description: "Lightning-fast indexing and query responses with industry-leading concurrent requests per second (RPS), optimized for high-dimensional data at scale.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-[#f23665]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Hybrid Search",
      description: "Enhanced search precision by combining sparse and dense vector searches to deliver highly relevant, context-rich results for complex queries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-[#f23665]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Enterprise-Grade",
      description: "Robust data isolation, security with role-based access control, multiple deployment options, and Git-like versioning for data integrity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-[#f23665]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Scalable Architecture",
      description: "Engineered to grow alongside your data and query demands with near-linear scalability, maintaining consistent performance even with massive datasets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-[#f23665]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
  ];

  const additionalFeatures = [
    {
      title: "Efficient Resource Utilization",
      description: "Provably efficient data structures and algorithms ensure outstanding performance while providing increasingly relevant search results."
    },
    {
      title: "Advanced Quantization",
      description: "Configure scalar quantization (2-bit, 3-bit) and product quantization for enhanced compression and improved recall trade-offs."
    },
    {
      title: "Intuitive APIs",
      description: "Elegantly crafted HTTP RESTful APIs with client SDKs available in multiple programming languages for effortless integration."
    },
    {
      title: "Multi-Modal Support",
      description: "Real-time querying and dynamic index updates for multi-modal data (text, images, audio) without downtime or delays."
    }
  ];

  return (
    <section className={`py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 ${afacad.className} text-lg`}>
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto`}>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0055c8] mb-8 sm:mb-12 ${geologica.className}`}>
          Key Features
        </h2>

        <div className="flex flex-col md:flex-row items-center mb-10 sm:mb-16 gap-6 md:gap-8">
          <div className="md:w-1/2 md:pr-0 lg:pr-8">
            <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] mb-3 sm:mb-4 ${geologica.className}`}>
              Next-Generation Vector Database
            </h3>
            <p className={`text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 ${commonStyles.paragraph}`}>
              Cosdata OSS is a cutting-edge vector database designed for high performance, scalability, and ease of use. It combines advanced indexing algorithms with efficient resource utilization to deliver exceptional search performance for AI applications.
            </p>
            <a 
              href="https://github.com/cosdata/cosdata" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-[#f23665] font-medium hover:text-[#d92d5c] transition-colors text-sm sm:text-base"
            >
              Explore the code
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <div className="relative w-[250px] sm:w-[300px] md:w-full h-[200px] sm:h-[250px] md:h-[300px]">
              <Image 
                src="/svgs/indexing.svg" 
                alt="Vector Database Visualization" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="mb-3 sm:mb-4 group-hover:text-[#0055c8] transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0055c8] group-hover:text-[#f23665] transition-colors duration-300 ${geologica.className}`}>{feature.title}</h3>
              <p className={`text-gray-700 text-sm sm:text-base ${commonStyles.paragraph}`}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-6 sm:mb-8 pt-6 sm:pt-8 border-t border-gray-200">
          <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] mb-6 sm:mb-8 text-center ${geologica.className}`}>
            Additional Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 mt-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className={`text-base sm:text-lg font-semibold text-[#0055c8] ${geologica.className}`}>{feature.title}</h4>
                  <p className={`text-gray-700 mt-1 text-sm sm:text-base ${commonStyles.paragraph}`}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 