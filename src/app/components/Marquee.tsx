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
        <div className="relative overflow-hidden py-14 bg-white max-w-6xl mx-auto my-20">
            <div className="flex animate-marquee">
                {[...images, ...images].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Logo ${index + 1}`}
                        className="w-48 ml-10"
                    />
                ))}
            </div>
        </div>
    );
};

export default Marquee;
