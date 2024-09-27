"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Biz from "./svgs/Biz";
import Grow from "./svgs/Grow";

interface Item {
    title: string;
    svg: string;
    summary: string; // Changed from points to summary
    description: string;
}

const EnterprisePowerSectionAlt: React.FC = () => {
    const items: Item[] = [
        {
            title: "Unbounded Scalability",
            svg: "/svgs/grow.svg",
            summary: "Our near-linear scalability ensures consistent high-speed performance with massive datasets, maintaining efficiency as your data expands.",
            description:
                "Cosdata leverages the separation of storage and compute for superior scalability and performance. Our high-performance storage engine, combined with efficient data handling, advanced caching, and lazy loading techniques, maximizes resource utilization and processing capabilities in cloud environments."
        },
        {
            title: "Secure Data Management",
            svg: "/svgs/biz.svg",
            summary: "We provide enterprise-grade security, privacy, and fault-tolerance, ensuring reliable data protection and consistent performance even in challenging conditions.",
            description:
                "Cosdata ensures enterprise-grade data management with rigorous security protocols. Our privacy-focused architecture offers data isolation and fault-tolerance for resilient performance, even during challenging conditions."
        },
        {
            title: "Advanced Version Control Features",
            svg: "/svgs/grow.svg",
            summary: "Manage your data with Git-style version control, allowing for easy auditing, time-travel, branching, and reliable data recovery.",
            description:
                "Manage your data with Git-style version control. Audit changes, track data lineage, and revert to any previous state. Cosdata's version control allows for easy branching and reliable data recovery."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 3000);

        return () => clearTimeout(timeout);
    }, [activeIndex]);

    return (
        <div className="max-w-6xl md:mx-auto mt-20">
            <div className="bg-white p-4">
                <div className="text-[#0055c8] text-3xl font-semibold flex justify-center mb-16 text-center">
                    Enterprise-Grade Scalability, Security, and Data Management
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-[600px] w-full">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer p-4 mb-8 duration-100 ${index === activeIndex ? "bg-[#e5f4ff]" : "bg-transparent"}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <Image
                                        src={`/svgs/features/icon(${index + 1}).drawio.svg`}
                                        alt="icon"
                                        width={40}
                                        height={40}
                                    />
                                    <h2 className="text-3xl font-semibold flex-grow text-[#f23665]">
                                        {item.title}
                                    </h2>
                                    <span className={`transition-transform ${index === activeIndex ? "text-[#0055c8] rotate-[0deg]" : "text-gray-400 rotate-[90deg]"}`}>
                                        <Image src="/svgs/arrow.svg" height={24} width={24} alt="arrow" />
                                    </span>
                                </div>

                                <div className="mt-4 text-[#374151]">
                                    {item.summary}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right column with SVG animation and description */}
                    <div className="hidden lg:block lg:w-1/2 w-full pl-6">
                        <div className="w-full h-[320px]">
                            <div className={`absolute flex justify-center items-center transform transition-all duration-[3s] ease-in-out 
                                ${animate ? "translate-x-[100px] translate-y-[20px] scale-[1.3]" : "translate-x-[50px] scale-100"}`}
                            >
                                {activeIndex === 0 ? (
                                    <Grow active={animate} width={400} height={300} />
                                ) : (
                                    <Biz active={animate} width={400} height={300} />
                                )}
                            </div>
                        </div>

                        {/* Description below the SVG */}
                        <div className="mt-6 text-lg text-[#374151]">
                            {items[activeIndex].description}
                        </div>
                    </div>
                </div>

                {/* Mobile view SVG and description */}
                <div className="lg:hidden flex flex-col items-center p-6">

                    <div className={`transition-transform duration-[2s] ease-in-out ${animate ? "translate-y-0 scale-150" : "translate-y-8 scale-100"}`}>
                        {activeIndex === 0 ? (
                            <Grow active={animate} width={300} height={300} />
                        ) : (
                            <Biz active={animate} width={300} height={300} />
                        )}
                    </div>

                    {/* Description in mobile view */}
                    <div className="mt-6 text-lg text-[#374151] text-center">
                        {items[activeIndex].description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterprisePowerSectionAlt;
