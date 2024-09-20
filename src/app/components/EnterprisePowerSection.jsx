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
        <div className="max-w-6xl md:mx-auto ">
            <div className="relative w-full h-[100px] sm:h-[150px] lg:h-[200px] bg-cover bg-center bg-no-repeat" >
                <Image
                    src={"/svgs/lines.svg"}
                    fill />
            </div>

            <div className="mx-5 p-6">
                <div className="text-[#0055c8] text-3xl font-semibold flex justify-center mb-6">
                    Enterprise Power: Infinite Scale, Ironclad Security, Instant Rewind
                </div>

                {/* Flex container to hold the left (headings) and right (content) columns */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left column for headings */}
                    <div className="lg:w-1/3 w-full">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer p-4  mb-2 ${index === activeIndex ? "bg-[#e5f4ff]" : "bg-transparent"
                                    }`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={`/svgs/features/icon(${index + 1}).drawio.svg`}
                                        alt="icon"
                                        width={40}
                                        height={40}
                                    />
                                    <h2
                                        className={`text-xl font-semibold ${index === activeIndex ? "text-[#f23665]" : "text-gray-700"
                                            }`}
                                    >
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right column for the content of the selected heading */}
                    <div className="lg:w-2/3 w-full p-6">
                        <h3 className="text-2xl font-semibold text-[#f23665] mb-4">
                            {items[activeIndex].title}
                        </h3>
                        <div className="lg:w-[600px] w-full">
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
