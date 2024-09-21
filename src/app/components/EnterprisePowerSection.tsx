"use client"
import { useState } from "react";
import Image from "next/image";

export default function EnterprisePowerSection() {
    const items = [
        {
            title: "Ready to Grow with You",
            points: [
                "Near-linear scalability for predictable, efficient query performance.",
                "Unbounded scalability for consistent high-speed results with massive datasets.",
                "Engineered to maintain fast performance as your data expands."
            ]
        },
        {
            title: "Built for Serious Business",
            points: [
                "Reliable data security against unauthorized access and threats.",
                "Enterprise-grade privacy with robust data isolation.",
                "Fault-tolerant design with backup and recovery for consistent performance."
            ]
        },
        {
            title: "Data Time Machine",
            points: [
                "Git-style versioning for your datasets.",
                "Audit changes and track data lineage.",
                "Time-travel to any previous state.",
                "Easily revert or branch your data."
            ]
        }
    ];

    // State to manage the active item
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="max-w-6xl md:mx-auto">

            <div className=" bg-white">
                <div className="text-[#0055c8] text-3xl font-semibold flex justify-center mb-16">
                    Enterprise Power: Infinite Scale, Ironclad Security, Instant Rewind
                </div>

                {/* Flex container to hold the left (headings) and right (content) columns */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left column for headings and content under the active heading */}
                    <div className="lg:w-[600px] w-full">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer p-4 mb-8 duration-100 ${index === activeIndex ? "bg-[#e5f4ff]" : "bg-transparent"
                                    }`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="flex items-center justify-between gap-2">
                                    {/* Image section */}
                                    <Image
                                        src={`/svgs/features/icon(${index + 1}).drawio.svg`}
                                        alt="icon"
                                        width={40}
                                        height={40}
                                    />

                                    {/* Heading section that expands */}
                                    <h2
                                        className={`text-3xl font-semibold flex-grow text-[#f23665]`}
                                    >
                                        {item.title}
                                    </h2>

                                    {/* Arrow section */}
                                    <span className={`text-3xl transition-transform ${index === activeIndex ? "rotate-90" : "rotate-0"}`}>
                                        <Image src={"/svgs/arrow.svg"} height={30} width={30} alt="arrow" />
                                    </span>
                                </div>

                                {/* Show points below the active heading */}
                                <div
                                    className={`transition-[max-height] duration-300 ease-in-out mt-8 overflow-hidden ${index === activeIndex ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    {item.points.map((point, idx) => (
                                        <div className="text-[#3d8bff] my-2 flex gap-2" key={idx}>
                                            <span>{'\u2022'}</span>{point}
                                        </div>
                                    ))}
                                </div>

                                {/* Right column content under each headline in mobile view */}
                                <div className="block lg:hidden mt-4">
                                    {index === activeIndex && (
                                        <div>
                                            {item.points.map((point, idx) => (
                                                <div className="text-[#3d8bff] my-2 flex gap-2" key={idx}>
                                                    <span>{'\u2022'}</span>{point}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right column for the content of the selected heading */}
                    <div className="hidden lg:block lg:w-[400px] w-full p-6">
                        <div className="w-full">
                            {items[activeIndex].points.map((point, idx) => (
                                <div className="text-[#3d8bff] my-2 flex gap-2" key={idx}>
                                    <span>{'\u2022'}</span>{point}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
