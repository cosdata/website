import React from 'react';
import Image from 'next/image';

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
    // {
    //     "title": "Data Analysis and Anomaly Detection",
    //     "description": "Revolutionize your approach to data analysis and anomaly detection. Cosdata's vector-based search quickly identifies patterns, correlations, and outliers across complex datasets, ensuring robust real-time anomaly detection.",
    //     "image": "/images/anomaly_detection.png"
    // }
    // ,
  ];

  return (
    <section className="mt-[30px]  sm:mt-[60px] md:mt-[80px] xl:mt-[140px]  pb-[0px] lg:pb-[100px]   relative bg-[#fcf6f7] transform -skew-y-6 origin-top-left">
      <div className='relative bg-transparent transform skew-y-6 origin-top-left mt-0'>
        <div className="container mx-auto px-4 max-w-6xl py-[40px] 2xl:py-[0px]">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4 text-[#0055c8] px-4">
            Unlock Your Data's Potential
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-8 md:mb-16 px-4">Leverage embeddings, hybrid search, and knowledge graphs to power applications in search, recommendations, anomaly detection, and more.</p>

          {useCases.map((useCase, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center pb-8 md:pb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                <h3 className="text-xxl sm:text-3xl font-semibold mb-4 text-[#0055c8]">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <a href="/blog/introducing-cosdata" className="text-blue-600 font-semibold hover:underline">Learn more -&gt;</a>
              </div>
              <div className="md:w-1/2 px-4">
                <div className="max-w-md mx-auto w-fit md:mb-0">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    height={400}
                    width={400}
                    className={`${index === 1 ? 'max-h-[350px]' : 'max-h-[400px]'}`}
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