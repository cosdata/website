"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Biz from "./svgs/Biz";
import Grow from "./svgs/Grow";
import Lock from "./svgs/Lock";

interface Item {
    title: string;
    svg: string;
    points: string[];
    description: string;
}

const EnterprisePowerSection: React.FC = () => {
    const items: Item[] = [
        {
            title: "Unbounded Scalability",
            svg: "/svgs/grow.svg",
            points: [
                "Near-linear scalability for predictable, efficient query performance.",
                "Unbounded scalability for consistent high-speed results with massive datasets.",
                "Engineered to maintain fast performance as your data expands."
            ],
            description:
                "Cosdata leverages the separation of storage and compute for superior scalability and performance. Our high-performance storage engine, combined with efficient data handling, advanced caching, and lazy loading techniques, maximizes resource utilization and processing capabilities in cloud environments."
        },
        {
            title: "Secure Data Management",
            svg: "/svgs/biz.svg",
            points: [
                "Reliable data security against unauthorized access and threats.",
                "Enterprise-grade privacy with robust data isolation.",
                "Fault-tolerant design with backup and recovery for consistent performance."
            ],
            description:
                "Cosdata ensures enterprise-grade data management with rigorous security protocols. Our privacy-focused architecture offers data isolation and fault-tolerance for resilient performance, even during challenging conditions."
        },
        {
            title: "Advanced Version Control Features",
            svg: "/svgs/lock.svg",
            points: [
                "Git-style versioning for your datasets.",
                "Audit changes and track data lineage.",
                "Time-travel to any previous state.",
                "Easily revert or branch your data."
            ],
            description:
                "Manage your data with Git-style version control. Audit changes, track data lineage, and revert to any previous state. Cosdata’s version control allows for easy branching and reliable data recovery."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 3000);

        return () => clearTimeout(timeout);
    }, [activeIndex]);
    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobileView(true)
        } else {
            setMobileView(false)
        }
    }, [])
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
                                    <span className={`text-3xl transition-transform ${index === activeIndex ? "rotate-90" : "rotate-0"}`}>
                                        <Image src="/svgs/arrow.svg" height={30} width={30} alt="arrow" />
                                    </span>
                                </div>

                                <div
                                    className={`transition-[max-height] duration-300 ease-in-out mt-8 overflow-hidden ${index === activeIndex ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    {item.points.map((point, idx) => (
                                        <div className="text-[#374151] my-2 flex gap-2" key={idx}>
                                            <span>{'\u2022'}</span>{point}
                                        </div>
                                    ))}
                                    {/* Mobile view SVG and description */}
                                    {mobileView && (
                                        <div className="md:hidden flex flex-col items-center p-6">
                                            <div>
                                                {activeIndex === 0 ? (
                                                    <Grow active={animate} width={400} height={300} />
                                                ) : activeIndex === 1 ? (

                                                    <Biz active={animate} width={400} height={300} />
                                                ) : (
                                                    <Lock active={animate} width={400} height={300} />
                                                )}
                                            </div>

                                            {/* Description in mobile view */}
                                            <div className="mt-6  text-[#374151]">
                                                {items[activeIndex].description}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right column with SVG animation and description */}
                    {!mobileView && (<div className="hidden md:block md:w-1/2 w-full pl-6">
                        <div className="w-full h-[220px] flex justify-center items-center">
                            <div className={`absolute flex justify-center items-center`}>
                                {activeIndex === 0 ? (
                                    <Grow active={animate} width={400} height={300} />
                                ) : activeIndex === 1 ? (
                                    <Biz active={animate} width={400} height={300} />
                                ) : (
                                    <Lock active={animate} width={400} height={300} />
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

export default EnterprisePowerSection;
