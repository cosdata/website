"use client";
import { useState } from 'react';
import Image from 'next/image';
import { commonStyles } from '../styles/common';

export default function BlazingFast() {
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
        <div className={`bg-transparent mx-auto py-12 ${commonStyles.mainContainer}`}>
            <h1 className={commonStyles.sectionTitle}>
                Blazing-Fast Performance, Always
            </h1>

            <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-6 px-2 md:px-6'>
                <div className='md:w-1/2 flex justify-center items-center order-2 md:order-1'>
                    <h2 className={`${commonStyles.paragraph} mx-auto md:max-w-[500px] px-0 md:px-0`}>
                        Cosdata Leverages Advanced Quantization, Vectorization, and Optimized Algorithms to Give Peak Performance at Scale. Experience unparalleled speed and efficiency in data processing and retrieval, enabling real-time analytics and instant insights for your most demanding applications. Our cutting-edge technology ensures that performance scales seamlessly with your data growth.
                        <div className="mt-4">
                            <a href="/blog/introducing-cosdata" className={commonStyles.link}>
                                Learn more
                                <span className="ml-2">→</span>
                            </a>
                        </div>
                    </h2>
                </div>
                <div className='md:w-1/2 flex justify-center items-center order-1 md:order-2'>
                    <div className='relative w-full h-[300px] md:h-[400px] my-6'>
                        <Image src="./svgs/performance.svg" alt="performance" fill className="object-contain" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center max-w-[1440px]'>
                <div className='w-full'>
                    <div className='max-w-[1440px] mx-auto'>
                        <div className="flex flex-wrap justify-center w-full">
                            {carouselItems.map((item, index) => (
                                <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2 py-4 lg:py-0">
                                    <div className="py-4 px-8 w-full h-[240px] duration-500 flex flex-col bg-gradient-to-b from-[#ffffff] to-[#f5dede] rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold mb-6 mt-2 text-[#3d8bff]">{item.title}</h3>
                                        <p className={commonStyles.paragraph}>{item.description}</p>
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
