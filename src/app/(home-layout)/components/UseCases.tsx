import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, geologica } from '../../styles/common';

const UseCases: React.FC = () => {
  const useCases = [
    {
      "title": "Retrieval Augmented Generation (RAG)",
      "description": "Enhance the quality of AI-generated content. Leverage Cosdata's powerful hybrid search capabilities, combining dense and sparse vectors with knowledge graphs, to retrieve contextually relevant data points for retrieval-augmented generation.",
      "image": "/svgs/RAG.svg"
    },
    {
      "title": "Advanced Search",
      "description": "Elevate your applications with Cosdata's advanced search technology. Seamlessly process high-dimensional data for nuanced similarity searches, and gain deeper insights with our integration of dense vectors and structured knowledge graphs.",
      "image": "/svgs/advanced-search.svg"
    },
    {
      "title": "Recommendation Systems",
      "description": "Build responsive, data-driven recommendation systems with Cosdata's hybrid search. Utilize multiple vectors and relationships in a single query to generate highly personalized, relevant recommendations at scale.",
      "image": "/svgs/recommendation.svg"
    },
  ];

  return (
    <section className="py-12 sm:py-16 mt-4 sm:mt-8 px-4 sm:px-6">
      <div className={`${commonStyles.mainContainer} py-6 sm:py-[40px] md:py-[60px] 2xl:py-[80px]`}>
        <h2 className={`${commonStyles.sectionTitle} mb-4 sm:mb-6`}>
          Unlock Your Data&apos;s Potential
        </h2>
        <p className={`${commonStyles.sectionSubtitle} mb-8 sm:mb-12`}>
          Leverage embeddings, hybrid search, and knowledge graphs to power applications in search, recommendations, anomaly detection, and more.
        </p>

        {useCases.map((useCase, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center mb-12 sm:mb-16 md:mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 mb-8 md:mb-0 px-2 sm:px-4">
              <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-[#0055c8] ${geologica.className}`}>
                {useCase.title}
              </h3>
              <p className={`${commonStyles.paragraph} mb-4 sm:mb-6`}>
                {useCase.description}
              </p>
              <Link 
                href="/products/cosdata-serverless" 
                className={`${commonStyles.link} inline-flex items-center text-base sm:text-lg text-blue-600 font-medium hover:underline`}
              >
                Learn more
                <span className="ml-1 sm:ml-2">→</span>
              </Link>
            </div>
            <div className="md:w-1/2 px-2 sm:px-4 flex justify-center items-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-50 rounded-full p-6 sm:p-8 transition-transform duration-300 hover:scale-105">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  width={256}
                  height={256}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
