import React from 'react';
import Image from 'next/image';
import { commonStyles } from '../styles/common';

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
    <section className={`${commonStyles.skewedSection} bg-[#fcf6f7]`}>
      <div className={commonStyles.skewedContent}>
        <div className={`${commonStyles.mainContainer} py-[40px] 2xl:py-[80px]`}>
          <h2 className={commonStyles.sectionTitle}>
            Unlock Your Data's Potential
          </h2>
           <p className={commonStyles.sectionSubtitle}>
            Leverage embeddings, hybrid search, and knowledge graphs to power applications in search, recommendations, anomaly detection, and more.
          </p>

          {useCases.map((useCase, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-10 md:mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                <h3 className="text-xl sm:text-3xl font-semibold mb-4 text-[#0055c8]">
                  {useCase.title}
                </h3>
                <p className={`${commonStyles.paragraph} mb-6`}>
                  {useCase.description}
                </p>
                <a href="/blog/introducing-cosdata" className={commonStyles.link}>
                  Learn more
                  <span className="ml-2">→</span>
                </a>
              </div>
              <div className="md:w-1/2 px-4 flex justify-center items-center">
                <div className="w-64 h-64">
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
      </div>
    </section>
  );
};

export default UseCases;
