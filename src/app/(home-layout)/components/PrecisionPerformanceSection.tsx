import Image from "next/image";
import Link from "next/link";
import { commonStyles, afacad, geologica } from '../../styles/common';

export default function PrecisionPerformanceSection() {
  const items = [
    {
      title: "Effortless Management",
      points: [
        "RESTful APIs: Easily manage all database functions through intuitive HTTP interfaces for seamless interaction.",
        "Client SDKs: Quickly integrate with your preferred programming language using SDKs available across multiple platforms.",
      ],
      image: "/svgs/management.svg",
    },
    {
      title: "Optimized Indexing",
      points: [
        "Dense Vector Index: Achieve high-efficiency indexing using our optimized HNSW algorithm for precise search results.",
        "Sparse Vector Index: Supporting SPLADE-generated sparse vectors alongside our custom BM25 implementation for comprehensive lexical search capabilities.",
      ],
      image: "/svgs/indexing.svg",
    },
    {
      title: "Flexible Hyperparameter Control",
      points: [
        "Auto-configuration: Automatically fine-tune system parameters with insights-driven setup for optimal performance without manual effort.",
        "Manual Precision: Gain full control by customizing indexing and querying parameters for specialized use cases and performance needs.",
      ],
      image: "/svgs/configure.svg",
    },
  ];

  return (
    <section className="bg-[#e5f4ff] py-12 sm:py-16 mt-4 sm:mt-8 px-4 sm:px-6">
      <div className={`${commonStyles.mainContainer} py-6 sm:py-[40px] md:py-[60px] 2xl:py-[80px]`}>
        <h2 className={`${commonStyles.sectionTitle} mb-4 sm:mb-6`}>
          Precision Performance, Effortless Integration
        </h2>
        <p className={`${commonStyles.sectionSubtitle} mb-8 sm:mb-12`}>
          Discover how our intuitive and tailored solutions can enhance your data management experience.
        </p>

        {items.map((item, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center mb-12 sm:mb-16 md:mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 mb-8 md:mb-0 px-2 sm:px-4">
              <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-[#0055c8] ${geologica.className}`}>
                {item.title}
              </h3>
              {item.points.map((point, pointIndex) => {
                const [boldText, ...rest] = point.split(":");
                return (
                  <p key={pointIndex} className={`${commonStyles.paragraph} mb-3 sm:mb-4`}>
                    <span className="font-bold">{boldText}:</span>
                    <span>{rest.join(":")}</span>
                  </p>
                );
              })}
              <Link 
                href="https://docs.cosdata.io/getting-started/introduction/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${commonStyles.link} inline-flex items-center text-base sm:text-lg text-blue-600 font-medium hover:underline mt-2`}
              >
                View Documentation
                <span className="ml-1 sm:ml-2">→</span>
              </Link>
            </div>
            <div className="md:w-1/2 px-2 sm:px-4 flex justify-center items-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-100 rounded-full p-6 sm:p-8 transition-transform duration-300 hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
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
}
