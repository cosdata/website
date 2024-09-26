"use client";
import { useState } from 'react';
import Image from 'next/image';

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
        <div className="bg-transparent mx-auto mt-10 ">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-center mb-8 text-[#0055c8] bg-white w-fit mx-auto">Blazing-Fast Performance, Always</h1>

            {/* Subheading */}
            <h2 className="text-2xl font-semibold text-center mb-4 text-black mx-auto max-w-screen-md">
                Cosdata Leverages Advanced Quantization, Vectorization, and Optimized Algorithms to Give Peak Performance at Scale
            </h2>

            {/* Main Container */}
            <div className='hidden lg:flex flex-col items-center w-6xl '>
                {/* Desktop Version */}
                <div className='w-full py-12 '>
                    <div className='max-w-6xl mx-auto bg-white'>
                        {/* Carousel Container */}
                        <div className="flex justify-center w-full">
                            {carouselItems.map((item, index) => (
                                <div key={index} className="min-w-72 p-4 ">
                                    <div className="p-8 pt-8 w-full max-w-[270px] h-[350px] duration-500 flex flex-col bg-gradient-to-b from-[#ffffff] to-[#f5dede] rounded-lg shadow-md">
                                        <div className="flex justify-center items-center mb-3">
                                            <Image src={`./svgs/features/icon(${index + 1}).drawio.svg`}
                                                alt='svg' height={50} width={50} className="h-12 w-12" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-6 mt-2 text-[#3d8bff]">{item.title}</h3>
                                        <p className="text-black">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile version */}
            <div className='flex lg:hidden flex-col justify-center items-center gap-4 m-2 '>
                {/* Blazing-Fast Performance Section */}
                <div className='mb-8 bg-[#f0f2f5] max-w-[400px] p-8 rounded-lg shadow-md'>
                    <h2 className="text-3xl font-bold mb-4 text-[#f23665]">
                        Blazing-Fast Performance, Always
                    </h2>
                    <div className='flex flex-wrap justify-center gap-4'>
                        {carouselItems.map((item, index) => (
                            <div
                                key={index}
                                className={`p-4 pt-8 max-w-96 w-full`}
                            >
                                <div className="flex justify-center items-center mb-4">
                                    <Image src={`./svgs/features/icon(${index + 1}).drawio.svg`}
                                        alt='svg' width={50} height={50} className="h-12 w-12" />
                                </div>
                                {item.title && (
                                    <h3 className="text-xl font-bold my-2 text-[#3d8bff]">
                                        {item.title}
                                    </h3>
                                )}
                                <div className="">
                                    <p className="my-4 text-[#3d8bff]">
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