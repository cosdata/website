"use client";

import { useState, useEffect } from "react";
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
            title: "Unbounded Scalability",
            svg: "/svgs/grow.svg",
            summary: "Our near-linear scalability ensures consistent high-speed performance with massive datasets, maintaining efficiency as your data expands.",
            description:
                "Cosdata leverages the separation of storage and compute for superior scalability and performance. Our high-performance storage engine, combined with efficient data handling, advanced caching, and lazy loading techniques, maximizes resource utilization and processing capabilities in cloud environments.",
        },
        {
            title: "Secure Data Management",
            svg: "/svgs/biz.svg",
            summary: "We provide enterprise-grade security, privacy, and fault-tolerance, ensuring reliable data protection and consistent performance even in challenging conditions.",
            description:
                "Cosdata ensures enterprise-grade data management with rigorous security protocols. Our privacy-focused architecture offers data isolation and fault-tolerance for resilient performance, even during challenging conditions.",
        },
        {
            title: "Advanced Version Control Features",
            svg: "/svgs/grow.svg",
            summary: "Manage your data with Git-style version control, allowing for easy auditing, time-travel, branching, and reliable data recovery.",
            description:
                "Manage your data with Git-style version control. Audit changes, track data lineage, and revert to any previous state. Cosdata's version control allows for easy branching and reliable data recovery.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [mobileView, setMobileView] = useState(false);


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
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="max-w-6xl md:mx-auto mt-20">
            <div className="bg-white p-4">
                <div className="text-[#0055c8] text-3xl font-semibold flex justify-center mb-16 text-center">
                    Enterprise-Grade Scalability, Security, and Data Management
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-[600px] w-full">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer p-4 mb-8 duration-300 ${index === activeIndex ? "bg-[#e5f4ff]" : "bg-transparent"}`}
                                onClick={() => setActiveIndex(index)}
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
                                    <span className={`transition-transform ${index === activeIndex ? "text-[#0055c8] rotate-90" : "text-gray-400 rotate-0"}`}>
                                        <Image src="/svgs/arrow.svg" height={24} width={24} alt="arrow" />
                                    </span>
                                </div>

                                <div
                                    className={`mt-4 text-[#374151] overflow-hidden transition-all duration-300 ease-in-out ${index === activeIndex ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                                >
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
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnterprisePowerSectionAlt;
