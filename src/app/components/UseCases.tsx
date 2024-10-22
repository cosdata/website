import React from 'react';
import Image from 'next/image';
import { Afacad } from 'next/font/google';
import { Noto_Sans_Mono } from 'next/font/google';

const afacad = Afacad({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const noto_sans_mono = Noto_Sans_Mono({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

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
    <section className={`mt-[50px] sm:mt-[80px] md:mt-[90px] lg:mt-[100px] xl:mt-[140px] 2xl:mt-[180px] pb-[0px] lg:pb-[60px] relative bg-[#fcf6f7] transform -skew-y-6 origin-top-left ${noto_sans_mono.className}`}>
      <div className='relative bg-transparent transform skew-y-6 origin-top-left mb-0'>
        <div className="container mx-auto px-4 max-w-[1440px] relative z-10 py-[40px] 2xl:py-[80px]">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4 text-[#0055c8]">
            Unlock Your Data's Potential
          </h2>
           <p className={`sm:text-xl md:text-2xl text-center text-[#374151] mb-20 ${afacad.className}`}>
            Leverage embeddings, hybrid search, and knowledge graphs to power applications in search, recommendations, anomaly detection, and more.
          </p>

          {useCases.map((useCase, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-10 md:mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                <h3 className="text-xl sm:text-3xl font-semibold mb-4 text-[#0055c8]">
                  {useCase.title}
                </h3>
                <p className={`text-lg sm:text-xl md:text-xl text-[#374151] mb-6 ${afacad.className}`}>
                  {useCase.description}
                </p>
                <a
                  href="/blog/introducing-cosdata"
                  className={`text-lg sm:text-xl md:text-xl text-blue-600 text-sm font-semibold hover:underline mt-2 inline-flex items-center ${afacad.className}`}
                >
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
