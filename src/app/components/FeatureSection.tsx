"use client";
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
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first cloned section

  // Grouping claimsData by AttributeMain
  const groupedByAttributeMain = claimsData.reduce((acc, claim) => {
    const attributeMain = claim.attributes.Attribute.AttributeMain;
    if (!acc[attributeMain]) {
      acc[attributeMain] = [];
    }
    acc[attributeMain].push(claim);
    return acc;
  }, {} as Record<string, typeof claimsData>);

  // Convert to array of sections with their widths
  const groupedItems = Object.entries(groupedByAttributeMain).map(([attributeMain, claims]) => ({
    attributeMain,
    claims,
    width: 240 * claims.length // Width based on number of claims
  }));

  // Duplicate the first and last items for infinite scrolling
  const infiniteGroupedItems = [
    groupedItems[groupedItems.length - 1], // Last item
    ...groupedItems,
    groupedItems[0], // First item
  ];

  const totalSections = infiniteGroupedItems.length;

  // Calculate cumulative widths of sections
  const cumulativeWidths = infiniteGroupedItems.reduce((acc, section, index) => {
    const width = section.width;
    const totalWidth = acc.length > 0 ? acc[acc.length - 1] + width : width;
    return [...acc, totalWidth];
  }, [] as number[]);
const handleNext = () => {
  setCurrentIndex((prevIndex) => {
    const nextIndex = (prevIndex + 1) % totalSections;
    if (nextIndex === totalSections-2) {
      // Reset index to show the first item without animation
      setTimeout(() => setCurrentIndex(1), 500);
    }
    return nextIndex;
  });
};

const handlePrev = () => {
  setCurrentIndex((prevIndex) => {
    const prevIndexAdjusted = (prevIndex - 1 + totalSections) % totalSections;
    if (prevIndexAdjusted === totalSections - 1) {
      // Reset index to show the last item without animation
      setTimeout(() => setCurrentIndex(totalSections - 2), 500);
    }
    return prevIndexAdjusted;
  });
};
const carouselStyle = {
  transform: `translateX(-${cumulativeWidths[currentIndex] || 0}px)`,
  width: `${cumulativeWidths[totalSections - 1] || 0}px`,
};

if (currentIndex === 0) {
  carouselStyle.transform = `translateX(-${cumulativeWidths[1] || 0}px)`;
} else if (currentIndex === totalSections - 1) {
  carouselStyle.transform = `translateX(-${cumulativeWidths[totalSections - 2] || 0}px)`;
}

  return (
    <section className="bg-white py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">Features</h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div
          className="carousel flex transition-transform duration-500 ease-in-out"
          style={carouselStyle}
        >
          {infiniteGroupedItems.map((section, index) => (
            <div
              key={index}
              className="carousel-item flex-shrink-0"
              style={{ width: `${section.width}px` }} // Set dynamic width
            >
              {/* AttributeMain Heading */}
              <div className="p-6 bg-gray-800 text-white">
                <h1 className="text-2xl font-bold">{section.attributeMain}</h1>
              </div>

              {/* Claims Items */}
              <div className="flex flex-wrap justify-center gap-4 mt-4 border-x-[1px] border-gray-400">
                {section.claims.map((claim: any) => (
                  <div key={claim.id} className="p-4 bg-gray-200 w-full max-w-[220px] h-[300px]">
                    {/* Render AttributePart as the headline */}
                    {claim.attributes.Attribute.AttributePart && (
                      <h2 className="text-xl font-bold mt-2 text-gray-800">
                        {claim.attributes.Attribute.AttributePart}
                      </h2>
                    )}
                    <p className="text-md mt-4 text-gray-500">
  {claim.attributes.ChannelVariants.Website.length < 150 
    ? claim.attributes.ChannelVariants.Website 
    : claim.attributes.ChannelVariants.WebsiteShort.length<150 ? claim.attributes.ChannelVariants.WebsiteShort : `${claim.attributes.ChannelVariants.WebsiteShort.substring(0, 150)+'...'}` }
</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Controls */}
        <div className="carousel-controls flex justify-center gap-8 mt-8">
          <button
            className="bg-gray-300 px-4 py-2"
            onClick={handlePrev}
            disabled={currentIndex === 1} // Disable "Prev" button at the start
          >
            &lt;
          </button>
          <button
            className="bg-gray-300 px-4 py-2"
            onClick={handleNext}
            // disabled={currentIndex === totalSections - 3} // Disable "Next" button at the end
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
