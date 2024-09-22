"use client";
import React from 'react';

const Marquee: React.FC = () => {
    const images = [
        "/svgs/marquee_logos/amazon.svg",
        "/svgs/marquee_logos/google.svg",
        "/svgs/marquee_logos/cohere.svg",
        "/svgs/marquee_logos/microsoft.svg",
        "/svgs/marquee_logos/meta.svg",
        "/svgs/marquee_logos/openai.svg",
        "/svgs/marquee_logos/huggingface.svg",
    ];

    return (
        <div className="relative overflow-hidden bg-white max-w-6xl mx-auto ">
            <div className="flex animate-marquee">
                {[...images, ...images].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Logo ${index + 1}`}
                        className="w-36 ml-10 filter grayscale"
                    />
                ))}
            </div>
            {/* Blur effect at the start */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            {/* Blur effect at the end */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

    );
};

export default Marquee;
