"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { commonStyles, geologica, afacad } from '../../styles/common';

interface Item {
    title: string;
    svg: string;
    summary: string;
    description: string;
}

const EnterprisePowerSectionAlt: React.FC = () => {
    const items: Item[] = [
        {
            "title": "Unbounded Scalability",
            "svg": "/svgs/grow.svg",
            "summary": "Near-linear scalability ensures consistent performance as your data grows, maintaining query efficiency from millions to billions of vectors.",
            "description": "Separation of storage and compute enables rapid scaling in cloud environments, with advanced caching and optimized resource allocation for maximum throughput."
        },
        {
            title: "Secure Data Management",
            svg: "/svgs/biz.svg",
            summary: "Enterprise-grade security and privacy with robust safeguards to ensure data integrity and uninterrupted access across all deployment environments.",
            "description": "Comprehensive features including data isolation, role-based access control, and flexible deployment options that adapt to your specific operational requirements."
        },
        {
            title: "Advanced Version Control",
            svg: "/svgs/grow.svg",
            summary: "Git-style version control enables seamless auditing, time travel queries, and branching capabilities to track performance changes and manage datasets.",
            "description": "Efficiently compare search results across versions, maintain comprehensive audit trails, and roll back changes with built-in tools for data integrity and recovery."
        },
    ];

    const [mobileView, setMobileView] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = useCallback(() => {
        if (autoPlay) {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
    }, [items.length, autoPlay]);

    const handleManualSelect = (index: number) => {
        setActiveIndex(index);
        setAutoPlay(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setMobileView(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        if (!mobileView && autoPlay) {
            intervalRef.current = setInterval(nextSlide, 7000);
        }
        return () => {
            window.removeEventListener("resize", handleResize);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [nextSlide, autoPlay, mobileView]);

    return (
        <div className="py-20">
            <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto`}>
                <div className="px-4">
                    <h2 className={`${commonStyles.sectionTitle} mb-12`}>
                        Enterprise-Grade Scalability and Security
                    </h2>

                    {mobileView ? (
                        // Mobile view
                        <div className="pt-2 flex flex-col gap-16">
                            {items.map((item, index) => (
                                <div key={index} className="flex flex-col gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <h2 className={`text-xl sm:text-2xl font-semibold text-[#0055c8] ${geologica.className}`}>
                                            {item.title}
                                        </h2>
                                    </div>
                                    <p className={`${commonStyles.paragraph} text-gray-700`}>{item.summary}</p>
                                    <div className="relative w-full h-[250px] my-2">
                                        <Image 
                                            src={index === 0 ? "/svgs/database-scale.svg" : 
                                                 index === 1 ? "/svgs/protection.svg" : 
                                                 "/svgs/version-control.svg"}
                                            alt={item.title}
                                            fill
                                            className="object-contain drop-shadow-md"
                                        />
                                    </div>
                                    <p className={`${commonStyles.paragraph} text-gray-600 italic`}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Desktop view
                        <div className="pt-6 flex flex-col md:flex-row gap-10 items-start">
                            <div className="md:w-[45%] w-full">
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`cursor-pointer p-6 mb-6 rounded-xl transition-all duration-300 border ${
                                            index === activeIndex 
                                                ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 shadow-md transform translate-x-2" 
                                                : "bg-white border-gray-100 hover:border-blue-100"
                                        }`}
                                        onClick={() => handleManualSelect(index)}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-colors ${
                                                index === activeIndex ? "bg-[#0055c8]" : "bg-gray-300"
                                            }`}>
                                                {index + 1}
                                            </div>
                                            <h2 className={`text-2xl font-semibold flex-grow ${
                                                index === activeIndex ? "text-[#0055c8]" : "text-gray-700"
                                            } ${geologica.className}`}>
                                                {item.title}
                                            </h2>
                                            <span className={`transition-transform duration-300 ${
                                                index === activeIndex ? "text-[#0055c8] rotate-180" : "text-gray-400 rotate-0"
                                            }`}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </span>
                                        </div>

                                        <div className={`${commonStyles.paragraph} mt-3 ${index === activeIndex ? "text-gray-800" : "text-gray-600"}`}>
                                            {item.summary}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {!mobileView && (
                                <div className="md:w-[55%] w-full">
                                    <div className="p-8 rounded-xl  transition-all duration-500">
                                        <div className="w-full flex justify-center items-center">
                                            <div className="flex justify-center items-center relative w-full h-[450px] mb-8">
                                                <Image 
                                                    src={`/svgs/${activeIndex === 0 ? "database-scale" : activeIndex === 1 ? "protection" : "version-control"}.svg`} 
                                                    alt="feature" 
                                                    fill 
                                                    className="object-contain drop-shadow-lg transition-all duration-500"
                                                />
                                            </div>
                                        </div>

                                        <div className={`${commonStyles.paragraph} text-gray-700 leading-relaxed ${afacad.className}`}>
                                            {items[activeIndex].description}
                                        </div>

                                        <div className="mt-8 flex justify-center space-x-3">
                                            {items.map((_, index) => (
                                                <button
                                                    key={index}
                                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                        index === activeIndex 
                                                            ? "bg-[#0055c8] w-6" 
                                                            : "bg-gray-300 hover:bg-gray-400"
                                                    }`}
                                                    onClick={() => handleManualSelect(index)}
                                                    aria-label={`View slide ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnterprisePowerSectionAlt;
