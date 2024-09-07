"use client";
import Image from 'next/image';
import { useState } from 'react';

interface Attribute {
  id: number;
  AttributeMain: string;
  AttributePart: string | null;
}

interface ChannelVariants {
  id: number;
  Website: string;
  WebsiteShort: string;
  EmailHeadline: string;
  Email: string;
  Banner: string;
}

interface LocalizationData {
  data: any[]; // Adjust this type as needed
}

interface ClaimsData {
  data: any[]; // Adjust this type as needed
}

interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  ClaimId: string;
  PromotionalClaim: string;
  Attribute: Attribute;
  Evidence: string | null;
  claims: ClaimsData;
  ChannelVariants: ChannelVariants;
  localizations: LocalizationData;
}

interface FeatureSectionProps {
  claimsData: {
    id: number;
    attributes: Attributes;
  }[];
}

export default function FeaturesSection({ claimsData }: FeatureSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Next/Prev functionality with boundaries
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < Object.keys(groupedByAttributeMain).length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  // Grouping claimsData by AttributeMain
  const groupedByAttributeMain = claimsData.reduce((acc, claim) => {
    const attributeMain = claim.attributes.Attribute.AttributeMain;
    if (!acc[attributeMain]) {
      acc[attributeMain] = [];
    }
    acc[attributeMain].push(claim);
    return acc;
  }, {} as Record<string, typeof claimsData>);

  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-200">
        <div
          className="carousel flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Shift the carousel based on currentIndex
        >
          {Object.values(groupedByAttributeMain).map((attributeMain: any, index: number) => (
            <div
              key={index}
              className="carousel-item w-full flex-shrink-0 flex-grow-0 h-[500px] border-1 border-black border-solid" // Ensures each item takes the full width of the container
            >
              <div className="p-6 flex justify-center items-center">
                <h1 className="text-2xl font-bold text-black">{attributeMain[0].attributes.Attribute.AttributeMain}</h1>
              </div>
              <div className='flex justify-center gap-3'>
                {attributeMain.map((claim: any) => (
                  <div key={claim.id} className="p-4 bg-gray-500 w-[300px] h-[300px]">
                    {/* Render AttributePart as the headline */}
                    {claim.attributes.Attribute.AttributePart && (
                      <h2 className="text-2xl font-bold mt-2">{claim.attributes.Attribute.AttributePart}</h2>
                    )}
                    <h2 className="text-md mt-4">
                      {claim.attributes.ChannelVariants.WebsiteShort}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
      {/* Carousel Controls */}
      <div className="carousel-controls flex justify-center gap-8 mt-8">
        <button
          className="bg-gray-300 px-4 py-2"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
        	&lt;
        </button>
        <button
          className="bg-gray-300 px-4 py-2"
          onClick={handleNext}
          disabled={currentIndex === Object.keys(groupedByAttributeMain).length - 1}
        >
        &gt;
        </button>
      </div>
    </section>
  );
}
