"use client";
import { useState } from 'react';
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

interface BlazingFastProps {
    claimsData: {
        id: number;
        attributes: Attributes;
    }[];
}

export default function BlazingFast(/*{ claimsData }: BlazingFastProps*/) {
    // Data for the carousel cards
    const carouselItems = [
        {
            title: "Superior Throughput",
            description: "Handle high-concurrency with ease, delivering exceptional requests per second (RPS) even under heavy loads.",
        },
        {
            title: "Ultra-Low Latency",
            description: "Experience lightning-fast query responses, minimizing latency and maximizing speed.",
        },
        {
            title: "Rapid Indexing",
            description: "Optimized for scale, Cosdata provides ultra-fast indexing, handling high-dimensional data effortlessly.",
        },
        {
            title: "Efficient Utilization",
            description: "Efficient algorithms and data structures ensure maximum performance with minimal resource consumption.",
        },
    ];

    return (
        <div className={`bg-transparent mx-auto py-12 max-w-[1440px] ${noto_sans_mono.className}`}>
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl font-bold text-center mb-12 text-[#0055c8] bg-white w-fit mx-auto px-4 md:px-6">Blazing-Fast Performance, Always</h1>

            {/* Subheading */}
            <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center mb-6 px-2 md:px-6'>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <div className='relative w-full h-[300px] md:h-[400px] my-6'>
                        <Image src="./svgs/performance.svg" alt="performance" fill className="object-contain" />
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <h2 className={`text-xl text-left mb-4 text-[#374151] mx-auto md:max-w-[500px] px-4 md:px-0 ${afacad.className}`}>
                        Cosdata Leverages Advanced Quantization, Vectorization, and Optimized Algorithms to Give Peak Performance at Scale. Experience unparalleled speed and efficiency in data processing and retrieval, enabling real-time analytics and instant insights for your most demanding applications. Our cutting-edge technology ensures that performance scales seamlessly with your data growth.
                        <div className="mt-4">
                        <a href="/blog/introducing-cosdata" className="text-xl text-blue-600 text-sm font-semibold hover:underline mt-4 inline-flex items-center">
                                Learn more
                                <span className="ml-2">→</span>
                            </a>
                        </div>
                    </h2>
                </div>
            </div>

            {/* Main Container */}
            <div className='flex flex-col items-center max-w-[1440px]'>
                {/* Desktop Version */}
                <div className='w-full'>
                    <div className='max-w-[1440px] mx-auto'>
                        {/* Carousel Container */}
                        <div className="flex flex-wrap justify-center w-full">
                            {carouselItems.map((item, index) => (
                                <div key={index} className="max-w-[25%] min-w-72 px-4 py-4 lg:py-0">
                                    <div className="py-4 px-8 w-full  h-[240px] duration-500 flex flex-col bg-gradient-to-b from-[#ffffff] to-[#f5dede] rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold mb-6 mt-2 text-[#3d8bff]">{item.title}</h3>
                                        <p className={`text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
