"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

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
            "summary": "Near-linear scalability ensures consistent high-speed performance with massive datasets, maintaining efficiency as your data expands.",
            "description": "Separation of storage and compute enables rapid scaling in cloud environments, with advanced caching and lazy loading to maximize resources."
        },
        {
            title: "Secure Data Management",
            svg: "/svgs/biz.svg",
            summary: "Enterprise-grade security, privacy, and reliability, with robust safeguards to ensure data integrity and uninterrupted access across multiple deployment environments.",
            description:
                "With features like data isolation, role-based access control, and multi-mode deployment, Cosdata provides secure, flexible solutions that adapt to your operational needs.",
        },
        {
            title: "Advanced Version Control",
            svg: "/svgs/grow.svg",
            summary: "Git-style version control for seamless auditing, time travel, and branching, allowing you to track performance and revert with ease.",
            description:
                "Compare search results across versions, audit changes, and roll back effortlessly, with built-in tools for data integrity and recovery.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [mobileView, setMobileView] = useState(false);
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
            if (window.innerWidth < 768) {
                setMobileView(true);
            } else {
                setMobileView(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Call initially to set the correct state

        // Add carousel effect
        if (autoPlay) {
            intervalRef.current = setInterval(nextSlide, 7000);
        }
        return () => {
            window.removeEventListener("resize", handleResize);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [nextSlide, autoPlay]);

    return (
        <div className="max-w-6xl md:mx-auto mt-20">
            <div className="p-4">
                <div className="text-[#0055c8] text-4xl font-semibold flex justify-center mb-16 text-center">
                    Enterprise-Grade Scalability, Security, and Data Management
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-[600px] w-full">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer p-4 mb-4 duration-300 ${index === activeIndex ? "bg-[#e5f4ff]" : "bg-transparent"}`}
                                onClick={() => handleManualSelect(index)}
                            >
                                <div className="flex items-center justify-between gap-2">
                                    {/* <Image
                                        src={`/svgs/features/icon(${index + 1}).drawio.svg`}
                                        alt="icon"
                                        width={40}
                                        height={40}
                                    /> */}
                                    <h2 className="text-3xl font-semibold flex-grow text-[#f23665]">
                                        {item.title}
                                    </h2>
                                    <span className={`transition-transform ${index === activeIndex ? "text-[#0055c8] rotate-0" : "text-gray-400 rotate-90"}`}>
                                        <Image src="/svgs/arrow.svg" height={24} width={24} alt="arrow" />
                                    </span>
                                </div>

                                {/* Show summary always, not just for active item */}
                                <div className="mt-3 text-[#374151]">
                                    {item.summary}
                                </div>

                                {/* Mobile view SVG and description, only visible for the active item */}
                                {mobileView && index === activeIndex && (
                                    <div className="mt-4 w-full duration-300 ease-in-out opacity-100">
                                        <div className="w-full flex justify-center items-center">
                                            <div className="flex justify-center items-center relative w-full h-[400px] pt-6">
                                                {index === 0 ? (
                                                    <Image src="/svgs/database-scale.svg" alt="scale" fill />
                                                ) : index === 1 ? (
                                                    <Image src="/svgs/protection.svg" alt="protection" fill />
                                                ) : (
                                                    <Image src="/svgs/version-control.svg" alt="version control" fill />
                                                )}
                                            </div>
                                        </div>
                                        {/* Description in mobile view */}
                                        <div className="mt-6 text-[#374151]">
                                            {item.description}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right column with SVG animation and description for desktop view */}
                    {!mobileView && (
                        <div className="hidden md:block md:w-1/2 w-full pl-6">
                            <div className="w-full flex justify-center items-center">
                                <div className="flex justify-center items-center relative w-full h-[400px] pt-6">
                                    {activeIndex === 0 ? (
                                        <Image src="/svgs/database-scale.svg" alt="scale" fill />
                                    ) : activeIndex === 1 ? (
                                        <Image src="/svgs/protection.svg" alt="protection" fill />
                                    ) : (
                                        <Image src="/svgs/version-control.svg" alt="version control" fill />
                                    )}
                                </div>
                            </div>

                            {/* Description below the SVG */}
                            <div className="mt-6 text-[#374151]">
                                {items[activeIndex].description}
                            </div>

                            {/* Updated carousel buttons */}
                            <div className="mt-6 flex justify-center space-x-2">
                                {items.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-3 h-3 rounded-full ${
                                            index === activeIndex ? "bg-[#0055c8]" : "bg-gray-300"
                                        }`}
                                        onClick={() => handleManualSelect(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnterprisePowerSectionAlt;