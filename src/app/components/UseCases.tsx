import React from 'react';
import Image from 'next/image';

const UseCases: React.FC = () => {
  const useCases = [
    {
        "title": "Retrieval Augmented Generation (RAG)",
        "description": "Enhance the quality of AI-generated content. Leverage Cosdata's powerful hybrid search capabilities, combining dense and sparse vectors with knowledge graphs, to retrieve contextually relevant data points for retrieval-augmented generation.",
        "image": "/images/rag.png"
    },
    {
        "title": "Advanced Search",
        "description": "Elevate your applications with Cosdata's advanced search technology. Seamlessly process high-dimensional data for nuanced similarity searches, and gain deeper insights with our integration of dense vectors and structured knowledge graphs.",
        "image": "/images/advanced_search.png"
    },
    {
        "title": "Recommendation Systems",
        "description": "Build responsive, data-driven recommendation systems with Cosdata’s hybrid search. Utilize multiple vectors and relationships in a single query to generate highly personalized, relevant recommendations at scale.",
        "image": "/images/recommender_system.png"
    },
    {
        "title": "Data Analysis and Anomaly Detection",
        "description": "Revolutionize your approach to data analysis and anomaly detection. Cosdata’s vector-based search quickly identifies patterns, correlations, and outliers across complex datasets, ensuring robust real-time anomaly detection.",
        "image": "/images/anomaly_detection.png"
    }
    ,
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl"> {/* Added max-w-5xl to limit width */}
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0055c8]"> {/* Added text-[#0055c8] */}
          Unlock Your Data's Potential
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">Leverage embeddings, hybrid search, and knowledge graphs to power applications in search, recommendations, anomaly detection, and more.</p>

        {useCases.map((useCase, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 mb-8 md:mb-0 px-4"> {/* Added horizontal padding */}
              <h3 className="text-3xl font-semibold mb-4 text-[#0055c8]"> {/* Added text-[#0055c8] */}
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-6">{useCase.description}</p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">Learn more -&gt;</a>
            </div>
            <div className="md:w-1/2 px-4">
              <div className="max-w-md mx-auto">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg w-full h-auto"
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