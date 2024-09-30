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

interface BlazingFastProps {
    claimsData: {
        id: number;
        attributes: Attributes;
    }[];
}

export default function BlazingFast({ claimsData }: BlazingFastProps) {
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
        <div className="bg-transparent mx-auto mt-10 max-w-6xl ">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-center mb-8 text-[#0055c8] bg-white w-fit mx-auto">Blazing-Fast Performance, Always</h1>

            {/* Subheading */}
            <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center px-2'>
                <div className='relative w-full h-[400px] my-6'>
                    <Image src="./svgs/performance.svg" alt="performance" fill />
                </div>
                <h2 className="text-lg text-center md:text-left mb-4 text-[#374151] mx-auto md:max-w-[500px]">
                    Cosdata Leverages Advanced Quantization, Vectorization, and Optimized Algorithms to Give Peak Performance at Scale Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi numquam doloremque ut veniam reprehenderit magnam repudiandae quos inventore non, nostrum rem similique fuga culpa aspernatur dignissimos, beatae
                    <div><a href="#" className="text-blue-600 text-sm font-semibold hover:underline mt-4 inline-block">Learn more -&gt;</a>
                    </div>
                </h2>

            </div>
            {/* Main Container */}
            <div className='flex flex-col items-center w-6xl '>
                {/* Desktop Version */}
                <div className='w-full pb-12 '>
                    <div className='max-w-6xl mx-auto bg-white'>
                        {/* Carousel Container */}
                        <div className="flex flex-wrap justify-center w-full">
                            {carouselItems.map((item, index) => (
                                <div key={index} className="max-w-[25%] min-w-72 px-4 py-4 lg:py-0">
                                    <div className="py-4 px-8 w-full  h-[240px] duration-500 flex flex-col bg-gradient-to-b from-[#ffffff] to-[#f5dede] rounded-lg shadow-md">
                                        {/* <div className="flex justify-center items-center mb-3">
                                            <Image src={`./svgs/features/icon(${index + 1}).drawio.svg`}
                                                alt='svg' height={50} width={50} className="h-12 w-12" />
                                        </div> */}
                                        <h3 className="text-lg font-bold mb-6 mt-2 text-[#3d8bff]">{item.title}</h3>
                                        <p className="text-[#374151]">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="flex justify-center mt-10">
                        <button className="w-full max-w-6xl mx-3 py-3 px-6 text-[#374151] bg-transparent border-2 border-[#374151] rounded-md flex items-center justify-center text-md font-bold transition-all duration-300 hover:bg-[#374151] hover:text-white">
                            Learn More <span className="ml-2">→</span>
                        </button>
                    </div> */}
                </div>
            </div>

            {/* Mobile version */}
            {/* <div className='flex lg:hidden flex-col justify-center items-center gap-4 m-2 '>
            
                <div className='mb-8 bg-[#f0f2f5] p-8 rounded-lg shadow-md'>
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
                                    <h3 className="text-xl font-bold my-2 text-[#3d8bff] text-center">
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
            </div> */}
        </div>
    );
}