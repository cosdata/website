"use client";
import Link from 'next/link';
import { commonStyles } from '../../../../styles/common';

export default function FeaturesSection() {
  const features = [
    {
      title: "Infinite Scalability",
      description: "Scale from zero to billions of vectors without any infrastructure management. Our serverless architecture automatically handles capacity planning and scaling.",
      icon: (
        <svg className="w-12 h-12 text-[#f23665]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      )
    },
    {
      title: "Hybrid Search",
      description: "Combine dense and sparse vector searches for superior relevance. Our hybrid search capabilities deliver highly contextual results by leveraging both semantic and keyword matching.",
      icon: (
        <svg className="w-12 h-12 text-[#f23665]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Pay-Per-Use Pricing",
      description: "Only pay for the resources you actually consume. No upfront costs, no minimum fees, and no idle capacity charges. Scale down to zero when not in use.",
      icon: (
        <svg className="w-12 h-12 text-[#f23665]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Enterprise-Ready",
      description: "Built with enterprise-grade security, compliance, and reliability. Includes role-based access control, data encryption, and comprehensive audit logging.",
      icon: (
        <svg className="w-12 h-12 text-[#f23665]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  const additionalFeatures = [
    {
      title: "Global Distribution",
      description: "Automatically replicate your vector database across multiple regions for low-latency access and high availability."
    },
    {
      title: "Market-Leading HNSW Foundation",
      description: "Built on our industry-leading HNSW implementation that outperforms competitors with up to 1,770+ queries per second on a single node, now enhanced with CHANNI technology for serverless scale."
    },
    {
      title: "Seamless API Integration",
      description: "Simple, consistent APIs that work the same way regardless of your data size, with client libraries for popular programming languages."
    },
    {
      title: "Multi-Modal Support",
      description: "Store and search vectors from any source - text, images, audio, or custom embeddings - with specialized indexes for each modality."
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
              Serverless Vector Search
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Cosdata Serverless is a fully managed vector database service that eliminates the operational complexity of running vector search at scale. Built on our market-leading HNSW implementation and innovative CHANNI technology, it delivers exceptional performance with the simplicity of serverless computing.
            </p>
            <button
              onClick={() => {
                const event = new CustomEvent('openEarlyAccessModal');
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center text-[#f23665] font-medium hover:text-[#d92d5c] transition-colors"
            >
              Get early access
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="w-full h-[300px] bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg border border-gray-200 flex items-center justify-center p-6">
              <div className="text-center">
                <svg className="w-20 h-20 mx-auto text-[#6b46c1] mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
                <h4 className="text-xl font-bold text-[#0055c8] mb-2">Serverless Architecture</h4>
                <p className="text-gray-600">Fully managed, auto-scaling vector database</p>
              </div>
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
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0055c8]">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 shadow-md">
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