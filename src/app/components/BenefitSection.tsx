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
    const cardsPerView = 4;

    // Data for the carousel cards
    const carouselItems = [
        {
            title: "Requests per Second",
            description: "Delivers exceptional concurrent requests per second (RPS) under heavy load.",
        },
        {
            title: "Latency",
            description: "Lightning-fast search performance—our vector database is engineered to deliver exceptionally fast query.",
        },
        {
            title: "Indexing",
            description: "Ultra-fast indexing for sparse and dense vectors, optimized for handling high-dimensional data at scale.",
        },
        {
            title: "Resource Utilization",
            description: "Ingenious provably efficient data structures and algorithms ensure outsized performance.",
        },
        {
            title: "Quantization",
            description: "Fine-tune compression with quarter-nary (2-bit) and octal (3-bit) resolutions for better recall trade-offs.",
        },
        {
            title: "Product Quantization",
            description: "Our pioneering approach compresses data more effectively while enhancing recall performance.",
        },
        {
            title: "",
            description: "- Vectorization / SIMD - Buffered memory mapped IO",
        },
        {
            title: "",
            description: "- Lazy loadable cache - Custom file format / serialization",
        },
    ];

    // State for current slide index
    const [currentIndex, setCurrentIndex] = useState(0);



    // State for active section
    const [activeSection, setActiveSection] = useState('blazing');

    // Handler for Blazing-Fast Performance
    const showBlazingPerformance = () => {
        setCurrentIndex(0); // Show first 4 cards
        setActiveSection('blazing'); // Set active section
    };

    // Handler for Magic Under the Hood
    const showMagicUnderTheHood = () => {
        setCurrentIndex(4); // Show next 4 cards
        setActiveSection('magic'); // Set active section
    };
    return (
        <div className="bg-transparent text-[#59606c] py-16 mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-center mb-8">The Fast and Effortless Way to Data</h1>

            {/* Main Container */}
            <div className='hidden lg:flex flex-col items-center w-6xl '>
                <div className='w-full py-12'>
                    <div className='max-w-6xl mx-auto'>

                        {/* Subheading */}
                        <div className='flex justify-between w-full mb-6 relative'>
                            {activeSection === 'blazing' ? (
                                <>
                                    <h2
                                        className="text-3xl font-semibold text-[#0055c8] cursor-pointer"
                                        onClick={showBlazingPerformance}
                                    >
                                        Blazing-Fast Performance, Always
                                    </h2>
                                    <div className="absolute h-[2px] bg-gradient-to-r from-[#f23665] to-[#f0f2f5] bottom-0 w-[400px]"></div>
                                    <h2
                                        className="text-2xl font-semibold cursor-pointer text-[#3d8bff]"
                                        onClick={showMagicUnderTheHood}
                                    >
                                        Magic Under the Hood
                                    </h2>
                                    <div className="absolute h-[2px] bottom-0 w-[400px]"></div>
                                </>
                            ) : (
                                <>
                                    <h2
                                        className="text-3xl font-semibold text-[#0055c8] cursor-pointer"
                                        onClick={showMagicUnderTheHood}
                                    >
                                        Magic Under the Hood
                                    </h2>
                                    <div className="absolute h-[2px] bg-gradient-to-r from-[#f23665] to-[#f0f2f5] bottom-0 w-[260px]"></div>
                                    <h2

                                        className="text-2xl font-semibold cursor-pointer text-[#3d8bff]"
                                        onClick={showBlazingPerformance}
                                    >
                                        Blazing-Fast Performance, Always
                                    </h2>
                                    <div className="absolute h-[2px] bottom-0 w-[400px]"></div>
                                </>
                            )}
                        </div>

                        {/* Carousel Container */}
                        <div className="overflow-hidden w-full">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{
                                    transform: `translateX(-${(100 / 4) * currentIndex}%)`,
                                }}
                            >
                                {carouselItems.map((item, index) => (
                                    <div key={index} className="min-w-72 p-4">
                                        <div className="p-8 pt-24 w-full max-w-[270px] h-[300px] duration-500 flex flex-col bg-gradient-to-b from-[#ffffff] to-[#f5dede]">
                                            <h3 className="text-lg font-bold mb-6 text-[#3d8bff]">{item.title}</h3>
                                            <p className="text-sm text-[#3d8bff]">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            {activeSection == 'blazing' ? <h2 onClick={showMagicUnderTheHood} className=' cursor-pointer bg-[#f0f2f5] border-[#f0f2f5] border-2 border-solid duration-100   text-[#0055c8] w-fit p-2'>How do we achieve this?</h2>
                                : <h2 onClick={showBlazingPerformance} className='cursor-pointer bg-[#f0f2f5] border-[#f0f2f5] border-2 border-solid duration-100   text-[#0055c8] w-fit p-2'>Back</h2>}

                        </div>
                    </div>

                </div>
            </div>
            {/* Mobile version */}
            <div className='flex lg:hidden flex-col justify-center items-center gap-4 m-2'>

                {/* Blazing-Fast Performance Section */}
                <div className='mb-8 bg-[#f0f2f5] max-w-[400px] p-8'>
                    <h2 className="text-3xl font-bold mb-4 text-[#0055c8]">
                        Blazing-Fast Performance, Always
                    </h2>
                    <div className='flex flex-wrap justify-center gap-4'>
                        {carouselItems.slice(0, 4).map((item, index) => (
                            <div
                                key={index}
                                className={`p-4 pt-8 w-96 `}
                            >
                                {/* Render Title if available */}
                                {item.title && (
                                    <h3 className="text-xl font-bold mb-2 text-[#0055c8]">
                                        {item.title}
                                    </h3>
                                )}

                                {/* Render Description */}
                                <div className="p-2">
                                    <p className="text-sm my-4 text-[#59606c]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Magic Under the Hood Section */}
                <div className='bg-[#f0f2f5] max-w-[400px] p-8'>
                    <h2 className="text-3xl font-bold mb-4 text-[#0055c8]">
                        Magic Under the Hood
                    </h2>
                    <div className='flex flex-wrap justify-center gap-4'>
                        {carouselItems.slice(4).map((item, index) => (
                            <div
                                key={index}
                                className={`p-4 pt-8 w-96`}
                            >
                                {/* Render Title if available */}
                                {item.title && (
                                    <h3 className="text-xl font-bold mb-2 text-[#0055c8]">
                                        {item.title}
                                    </h3>
                                )}

                                {/* Render Description */}
                                <div className="p-2">
                                    <p className="text-sm my-4 text-[#59606c]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );


}

