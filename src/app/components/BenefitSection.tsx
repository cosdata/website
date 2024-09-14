"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image'
import Link from 'next/link';

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

interface BenefitSectionProps {
    claimsData: {
        id: number;
        attributes: Attributes;
    }[];
}

export default function BenefitSection({ claimsData }: BenefitSectionProps) {
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

    return (
        <div className="bg-white text-[#59606c] py-16 mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-center mb-8">The Fast and Effortless Way to Data</h1>

            {/* Main Container */}
            <div className='flex flex-col items-center w-full'>
                <div className='w-full bg-[#f0f2f5] py-12'>
                    <div className='max-w-6xl mx-auto'>

                        {/* Subheading */}
                        <div className='flex justify-between w-full mb-6'>
                            <h2 className="text-2xl font-semibold text-[#3d8bff]">Blazing-Fast Performance, Always</h2>
                            <Link href="#" className="text-2xl font-semibold">Magic Under the Hood</Link>
                        </div>

                        {/* Card Section */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            <div className='bg-white p-6 border border-[#dae4f1]    '>
                                <h3 className="text-lg font-bold mb-2">Requests per Second</h3>
                                <p className="text-sm">
                                    Delivers exceptional concurrent requests per second (RPS) under heavy load.
                                </p>
                            </div>

                            <div className='bg-white p-6 border border-[#dae4f1]    '>
                                <h3 className="text-lg font-bold mb-2">Latency</h3>
                                <p className="text-sm">
                                    Lightning-fast search performance—our vector database is engineered to deliver exceptionally fast query.
                                </p>
                            </div>

                            <div className='bg-white p-6 border border-[#dae4f1]    '>
                                <h3 className="text-lg font-bold mb-2">Indexing</h3>
                                <p className="text-sm">
                                    Ultra-fast indexing for sparse and dense vectors, optimized for handling high-dimensional data at scale.
                                </p>
                            </div>

                            <div className='bg-white p-6 border border-[#dae4f1]    '>
                                <h3 className="text-lg font-bold mb-2">Resource Utilization</h3>
                                <p className="text-sm">
                                    Ingenious provably efficient data structures and algorithms ensure outsized performance while providing increasingly relevant search results.
                                </p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <Link href="#" > How do we achieve this</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
    {/* Mobile version*/ }
    {/* <div className='flex flex-wrap justify-center gap-4 m-2'>
        {groupedItems.map((section, index) => (
          <div
            key={index}
            className={`p-4 pt-8 bg-[#f0f2f5] ${index % 3 === 2 ? 'w-96 md:w-full' : 'w-96 md:w-[49%]'}`}
          >
            <h2 className="text-2xl font-bold mb-2 text-[#0055c8]">{section.attributeMainCasual}</h2>
            <div className={`flex justify-start gap-0  ${index % 3 === 2 ? 'flex-wrap' : 'flex-col'}`}>
              {section.claims.map((claim: any) => (
                <div key={claim.id} className={`p-2  ${index % 3 === 2 ? 'w-full md:w-[49%]' : 'w-full'}`}>
                  {/* Render AttributePart as the headline 
                  <Image
                    src={`/svgs/features/icon(${claim.id % 12 + 1}).drawio.svg`}
                    alt='icon'
                    width={50}
                    height={50}
                  />
                  {claim.attributes.Attribute.AttributePart && (
                    <div className="text-xl font-bold mt-3 text-[#686c6e]">
                      {claim.attributes.Attribute.AttributePart}
                    </div>
                  )}
                  <p className="text-sm my-4 text-[#59606c]">
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
      </div> */}

    // </div >
    // );

}

