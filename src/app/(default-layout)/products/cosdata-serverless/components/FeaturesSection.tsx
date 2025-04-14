"use client";
import Link from 'next/link';
import { commonStyles, afacad, geologica } from '../../../../styles/common';

export default function FeaturesSection() {
  const features = [
    {
      title: "Infinite Scalability",
      description: "Scale from zero to billions of vectors without any infrastructure management. Our serverless architecture automatically handles capacity planning and scaling.",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#f23665]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      )
    },
    {
      title: "Hybrid Search",
      description: "Our hybrid search capabilities deliver highly contextual results by leveraging both semantic retrieval and advanced lexical search, including full-text indexing and SPLADE-enhanced sparse vectors for improved recall and precision.",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#f23665]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Pay-Per-Use Pricing",
      description: "Only pay for the resources you actually consume. No upfront costs, no minimum fees, and minimal base storage costs with compute that scales to match your usage patterns.",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#f23665]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Enterprise-Ready",
      description: "Built with enterprise-grade security, compliance, and reliability. Includes role-based access control, data encryption, and comprehensive audit logging.",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#f23665]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
      title: "Advanced ANN Technology",
      description: "Powered by CHANNI, our innovative ANN algorithm that leverages the same high-performance building blocks as our market-leading HNSW implementation."
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
    <section className={`py-4 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 ${afacad.className} text-lg`}>
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto`}>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0055c8] mb-8 sm:mb-12 md:mb-16 ${geologica.className}`}>
          Key Features
        </h2>

        {/* Hero feature section - no box, just content and illustration */}
        <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16 lg:mb-24 gap-6 md:gap-8">
          <div className="md:w-1/2 md:pr-6 lg:pr-12">
            <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] mb-3 sm:mb-4 ${geologica.className}`}>
              Serverless Vector Search
            </h3>
            <p className={`text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 ${commonStyles.paragraph}`}>
              Cosdata Serverless is a fully managed vector database service that eliminates the operational complexity of running vector search at scale. Built with our innovative CHANNI technology, it delivers exceptional performance with the simplicity of serverless computing.
            </p>
            <button
              onClick={() => {
                const event = new CustomEvent('openEarlyAccessModal');
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center text-[#f23665] font-medium hover:text-[#d92d5c] transition-colors text-sm sm:text-base"
            >
              Get early access
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="w-full h-[220px] sm:h-[250px] md:h-[300px] bg-gradient-to-br from-[#847CFC]/10 to-indigo-100 rounded-lg flex items-center justify-center p-4 sm:p-6">
              <div className="text-center">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-[#847CFC] mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
                <h4 className={`text-lg sm:text-xl font-bold text-[#0055c8] mb-2 ${geologica.className}`}>Serverless Architecture</h4>
                <p className={`text-gray-600 text-sm sm:text-base ${commonStyles.paragraph}`}>Fully managed, auto-scaling vector database</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core features - using a more open layout with icons and text */}
        <div className="mb-0 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-8 sm:gap-y-12 md:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-5 md:mr-6">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 text-[#f23665] bg-pink-50 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0055c8] ${geologica.className}`}>{feature.title}</h3>
                  <p className={`text-gray-700 text-sm sm:text-base ${commonStyles.paragraph}`}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 