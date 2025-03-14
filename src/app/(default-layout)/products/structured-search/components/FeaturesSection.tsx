"use client";
import { commonStyles } from '../../../../styles/common';

export default function FeaturesSection() {
  const features = [
    {
      title: "Knowledge Graph Integration",
      description: "Seamlessly integrate structured data with vector embeddings to create a powerful knowledge graph that enhances retrieval accuracy and context awareness.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#f23665]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "GraphRAG Optimized",
      description: "Purpose-built for Graph Retrieval Augmented Generation, enabling more contextual, accurate, and comprehensive responses for complex queries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#f23665]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Scalable Architecture",
      description: "Designed to handle billions of entities and relationships with efficient query performance, maintaining speed even as your knowledge base grows.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#f23665]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Developer-Friendly",
      description: "Intuitive APIs and comprehensive documentation make it easy to integrate structured search capabilities into your existing applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#f23665]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
  ];

  const additionalFeatures = [
    {
      title: "Hybrid Search Capabilities",
      description: "Combine structured queries with vector similarity search for more precise and contextually relevant results."
    },
    {
      title: "Seamless Integration",
      description: "Works natively with Cosdata HNSW and Cosdata Serverless for a complete vector database ecosystem."
    },
    {
      title: "Flexible Schema Design",
      description: "Define and evolve your knowledge graph schema without downtime or complex migrations."
    },
    {
      title: "Advanced Query Language",
      description: "Powerful yet intuitive query language for traversing and retrieving information from your knowledge graph."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0055c8] mb-12">
          Key Features
        </h2>

        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-bold text-[#0055c8] mb-4">
              Next-Generation Knowledge Graph
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Cosdata Structured Search is an innovative knowledge graph solution designed specifically for AI applications. It bridges the gap between traditional structured data and vector embeddings, enabling more powerful and contextual retrieval for advanced AI systems.
            </p>
            <a 
              href="https://cosdata-docs-test.vercel.app/api/cosquery/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-[#f23665] font-medium hover:text-[#d92d5c] transition-colors"
            >
              Explore the documentation
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-64 h-64 text-[#0055c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0055c8] group-hover:text-[#f23665] transition-colors">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-[#0055c8] mb-8 text-center">
            Additional Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 mr-4 mt-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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