"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image'

interface Attribute {
  id: number;
  AttributeMain: string;
  AttributePart: string | null;
  AttributeMainCasual: string;
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
  const [headingsOffset, setHeadingsOffset] = useState(0);
  const [activeHeadingIndex, setActiveHeadingIndex] = useState(0);


  // Grouping claimsData by AttributeMain
  const orderedAttributesCasual = [
    "Blazing-Fast Performance, Always",
    "Careful with money",
    "Find What Truly Matters",
    "Intuitive, No Hassles",
    "Tailored to Fit Your Needs",
    "Built for Serious Business",
    "Ready to Grow with You",
    "All-in-One Multimodal Power"
  ];

  const groupedByAttributeMain = claimsData.reduce((acc, claim) => {
    const attributeMain = claim.attributes.Attribute.AttributeMain;
    const attributeMainCasual = claim.attributes.Attribute.AttributeMainCasual;

    // Only process claims if attributeMainCasual is in the ordered array
    if (orderedAttributesCasual.includes(attributeMainCasual)) {
      if (!acc[attributeMain]) {
        acc[attributeMain] = {
          claims: [],
          attributeMain,
          attributeMainCasual // Store casual name
        };
      }
      acc[attributeMain].claims.push(claim);
    }
    return acc;
  }, {} as Record<string, { claims: any[]; attributeMain: string; attributeMainCasual: string }>);

  // Ensure the claims are grouped in the correct order based on `orderedAttributesCasual`
  const orderedGroupedByAttributeMain = orderedAttributesCasual.map(attributeMainCasual => {
    const matchingGroup = Object.values(groupedByAttributeMain).find(
      group => group.attributeMainCasual === attributeMainCasual
    );
    return matchingGroup ? matchingGroup : null;
  }).filter(group => group !== null);


  // Convert to array of sections with their widths
  const groupedItems = Object.values(orderedGroupedByAttributeMain).map(({ attributeMain, attributeMainCasual, claims }) => ({
    attributeMain,
    attributeMainCasual, // Store casual name for use
    claims,
    width: 250 * claims.length // Width based on number of claims
  }));

  // if(window.screen.width>1280){


  // // Duplicate the first and last items for infinite scrolling
  // const infiniteGroupedItems = [
  //   groupedItems[groupedItems.length - 1], // Lasts item
  //   ...groupedItems,
  //   ...groupedItems,
  //   ...groupedItems
  // ];
  // const headingItems = [
  //   ...groupedItems,
  //   ...groupedItems,
  //   ...groupedItems
  // ]


  // const totalSections = infiniteGroupedItems.length;

  // // Calculate cumulative widths of sections
  // const cumulativeWidths = infiniteGroupedItems.reduce((acc, section, index) => {
  //   const width = section.width;
  //   const totalWidth = acc.length > 0 ? acc[acc.length - 1] + width : width;
  //   return [...acc, totalWidth];
  // }, [] as number[]);

  // // Handle navigation to specific section based on heading click
  // const handleHeadingClick = (index: number) => {
  //   setCurrentIndex(index + 1); // +1 to account for the cloned last section
  // };

  // // Handle Next and Prev buttons
  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => {
  //     const nextIndex = (prevIndex + 1) % totalSections;
  //     if (nextIndex === 0) {
  //       // Reset index to show the first item without animation
  //       setTimeout(() => setCurrentIndex(1), 500);
  //     }
  //     return nextIndex;
  //   });
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => {
  //     const prevIndexAdjusted = (prevIndex - 1 + totalSections) % totalSections;
  //     if (prevIndexAdjusted === 0) {
  //       // Reset index to show the last item without animation
  //       setTimeout(() => setCurrentIndex(totalSections - 2), 500);
  //     }
  //     return prevIndexAdjusted;
  //   });
  // };

  // const carouselStyle = {
  //   transform: `translateX(-${currentIndex == 0 ? 0 : cumulativeWidths[currentIndex - 1]}px)`,
  //   width: `${cumulativeWidths[totalSections - 1] || 0}px`,
  // };

  // useEffect(() => {
  //   const headingWidth = 350; // Width of each heading item
  //   const visibleHeadingsCount = Math.floor(document.querySelector('.headings-carousel')!.clientWidth / headingWidth);
  //   const newOffset = Math.max(0, (currentIndex - 1) * headingWidth - (visibleHeadingsCount - 1) * headingWidth);
  //   setHeadingsOffset(newOffset);
  // }, [currentIndex]);

  // useEffect(() => {
  //   // console.log(claimsData)
  //   setActiveHeadingIndex(currentIndex - 1); // Update the active heading index
  // }, [currentIndex]);

  // const headingsCarouselStyle = {
  //   transform: `translateX(-${activeHeadingIndex * 400}px)`, // Move the active heading to the left
  //   width: `${headingItems.length * 400}px`, // Total width of all headings
  //   transition: 'transform 0.5s', // Add transition effect
  // };

  return (
    <div className="bg-transparnet text-[#59606c] py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">The Fast and Effortless Way to Data</h1>



      {/* Mobile version*/}
      <div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
        {groupedItems.map((section, index) => (
          <div
            key={index}
            className={`p-3 sm:p-4 pt-6 sm:pt-8 bg-[#f0f2f5] rounded-lg ${index % 3 === 2 ? 'w-full sm:w-96 md:w-full' : 'w-full sm:w-96 md:w-[49%]'}`}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[#0055c8]">{section.attributeMainCasual}</h2>
            <div className={`flex justify-start gap-0 ${index % 3 === 2 ? 'flex-wrap' : 'flex-col'}`}>
              {section.claims.map((claim: any) => (
                <div key={claim.id} className={`p-2 ${index % 3 === 2 ? 'w-full md:w-[49%]' : 'w-full'}`}>
                  {/* Render AttributePart as the headline */}
                  <div className="flex items-center">
                    <Image
                      src={`/svgs/features/icon(${claim.id % 12 + 1}).drawio.svg`}
                      alt='icon'
                      width={40}
                      height={40}
                      className="sm:w-[50px] sm:h-[50px]"
                    />
                  </div>
                  {claim.attributes.Attribute.AttributePart && (
                    <div className="text-lg sm:text-xl font-bold mt-2 sm:mt-3 text-[#686c6e]">
                      {claim.attributes.Attribute.AttributePart}
                    </div>
                  )}
                  <p className="text-sm sm:text-base my-2 sm:my-4 text-[#59606c]">
                    {claim.attributes.ChannelVariants.Website.length < 150
                      ? claim.attributes.ChannelVariants.Website
                      : claim.attributes.ChannelVariants.WebsiteShort.length < 150
                        ? claim.attributes.ChannelVariants.WebsiteShort
                        : `${claim.attributes.ChannelVariants.WebsiteShort.substring(0, 150)}...`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );

}

{/* <div className="max-w-7xl bg-[#fcfcfc] mx-auto px-0 hidden xl:block overflow-hidden relative">
 Headings Carousel 
<div className="headings-carousel flex overflow-hidden whitespace-nowrap" style={headingsCarouselStyle}>
  {headingItems.map((section, index) => (
    <div
      key={index}
      className={`heading-item flex place-items-end cursor-pointer px-4 py-2 ${index === currentIndex - 1 ? 'bg-gradient-to-r from-[#b9d2f7] to-[#f0f2f5] w-[450px]' : 'bg-[#f0f2f5]'}`}
      onClick={() => handleHeadingClick(index)}
      style={{ width: '450px' }}
    >
      <h2 className={`font-semibold duration-300 ${index===currentIndex-1? 'text-[#1f5095]':'text-[#6da7f8]'} ${index === currentIndex - 1 ? 'text-2xl' : 'text-lg'}`}>{section.attributeMainCasual}</h2>
    </div>
  ))}
</div>

{/* Main Carousel
<div
  className="carousel flex transition-transform duration-500 ease-in-out"
  style={carouselStyle}
>
  {infiniteGroupedItems.map((section, index) => (
    <div
      key={index}
      className={`carousel-item flex-shrink-0`} // Apply different background colors
      style={{ width: `${section.width}px` }} // Set dynamic width
    >
      {/* Claims Items 
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {section.claims.map((claim: any) => (
          <div key={claim.id} className={`p-2 pt-20 w-full max-w-[230px] h-[300px] duration-500   ${index !== currentIndex ? ' bg-gradient-to-b from-[#ffffff] to-[#f0f2f5]' : 'bg-gradient-to-b from-[#ffffff] to-[#f5dede]'}`}>
            {/* Render AttributePart as the headline
            {claim.attributes.Attribute.AttributePart && (
              <h2 className="text-xl font-bold mt-2 text-[#20477e]">
                {claim.attributes.Attribute.AttributePart}
              </h2>
            )}
            <p className={`text-md mt-4 text-[#71767e]`}>
              {claim.attributes.ChannelVariants.Website.length < 150
                ? claim.attributes.ChannelVariants.Website
                : claim.attributes.ChannelVariants.WebsiteShort.length < 150
                  ? claim.attributes.ChannelVariants.WebsiteShort
                  : `${claim.attributes.ChannelVariants.WebsiteShort.substring(0, 150) + '...'}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

{/* Carousel Controls
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
  >
    &gt;
  </button>
</div>
</div> */}
