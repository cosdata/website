"use client";
import Image from 'next/image';
import { commonStyles } from '../../../../styles/common';

export default function FeaturesSection() {
  const features = [
    {
      title: "High Performance",
      description: "Lightning-fast indexing and query responses with industry-leading concurrent requests per second (RPS), optimized for high-dimensional data at scale.",
      icon: "performance.svg"
    },
    {
      title: "Hybrid Search",
      description: "Enhanced search precision by combining sparse and dense vector searches to deliver highly relevant, context-rich results for complex queries.",
      icon: "high-relevance.svg"
    },
    {
      title: "Enterprise-Grade",
      description: "Robust data isolation, security with role-based access control, multiple deployment options, and Git-like versioning for data integrity.",
      icon: "protection.svg"
    },
    {
      title: "Scalable Architecture",
      description: "Engineered to grow alongside your data and query demands with near-linear scalability, maintaining consistent performance even with massive datasets.",
      icon: "database-scale.svg"
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
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0055c8] mb-12">
          Key Features
        </h2>

        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-bold text-[#0055c8] mb-4">
              Next-Generation Vector Database
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Cosdata HNSW is a cutting-edge vector database designed for high performance, scalability, and ease of use. It combines advanced indexing algorithms with efficient resource utilization to deliver exceptional search performance for AI applications.
            </p>
            <a 
              href="https://github.com/cosdata/cosdata" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-[#f23665] font-medium hover:text-[#d92d5c] transition-colors"
            >
              Explore the code
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full h-[300px]">
              <Image 
                src="/svgs/indexing.svg" 
                alt="Vector Database Visualization" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-12 w-12 mb-4 text-[#f23665]">
                <div className="relative w-12 h-12">
                  <Image 
                    src={`/svgs/${feature.icon}`} 
                    alt={feature.title} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0055c8]">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-8">
          <h3 className="text-2xl font-bold text-[#0055c8] mb-6 text-center">
            Additional Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 text-[#f23665] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-[#0055c8]">{feature.title}</h4>
                  <p className="text-gray-700 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 