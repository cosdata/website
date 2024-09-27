"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Biz from "./svgs/Biz";
export default function EnterprisePowerSection() {
    const items = [
        {
            title: "Unbounded Scalability",
            svg: "/svgs/grow.svg",
            points: [
                "Near-linear scalability for predictable, efficient query performance.",
                "Unbounded scalability for consistent high-speed results with massive datasets.",
                "Engineered to maintain fast performance as your data expands."
            ]
        },
        {
            title: "Secure Data Management",
            svg: "/svgs/biz.svg",
            points: [
                "Reliable data security against unauthorized access and threats.",
                "Enterprise-grade privacy with robust data isolation.",
                "Fault-tolerant design with backup and recovery for consistent performance."
            ]
        },
        {
            title: "Advanced Version Control Features",
            svg: "/svgs/grow.svg",
            points: [
                "Git-style versioning for your datasets.",
                "Audit changes and track data lineage.",
                "Time-travel to any previous state.",
                "Easily revert or branch your data."
            ]
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animate, setAnimate] = useState(false); // Track if the animation should trigger

    // Effect to trigger animation when activeIndex changes
    useEffect(() => {
        setAnimate(true); // Trigger animation when activeIndex changes
        const timeout = setTimeout(() => setAnimate(false), 500); // Reset animation after 500ms (duration of transition)

        return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }, [activeIndex]);

    return (
        <div className="max-w-6xl md:mx-auto mt-20">
            <div className="bg-white p-4"> {/* Added padding for the container */}
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
                                    <h2 className={`text-3xl font-semibold flex-grow text-[#f23665]`}>
                                        {item.title}
                                    </h2>
                                    <span className={`text-3xl transition-transform ${index === activeIndex ? "rotate-90" : "rotate-0"}`}>
                                        <Image src={"/svgs/arrow.svg"} height={30} width={30} alt="arrow" />
                                    </span>
                                </div>

                                <div
                                    className={`transition-[max-height] duration-300 ease-in-out mt-8 overflow-hidden ${index === activeIndex ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    {item.points.map((point, idx) => (
                                        <div className="text-[#3d8bff] my-2 flex gap-2" key={idx}>
                                            <span>{'\u2022'}</span>{point}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right column with SVG animation */}
                    <div className="hidden lg:block lg:w-[400px] w-full p-6 relative">
                        <div className="w-full">
                            {/* Animated SVG */}
                            <div className={`absolute flex justify-center items-center transform transition-all duration-[2s] ease-in-out
                                ${animate ? "translate-x-[50px] scale-150" : "translate-x-0 scale-100"}`}
                            >
                                <Biz />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile view SVG */}
                <div className="lg:hidden flex justify-center p-6">
                    <div className={`transition-transform duration-500 ease-in-out ${animate ? "translate-y-0 scale-150" : "translate-y-8 scale-100"}`}>
                        <Biz />
                    </div>
                </div>
            </div>
        </div>
    );
}
