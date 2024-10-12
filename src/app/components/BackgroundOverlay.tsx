"use client"
import React, { useEffect, useState } from 'react';

const BackgroundOverlay = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden -z-20 opacity-20">
            {/* Top Right Triangle */}
            <img
                src="/svgs/dotted_triangle.svg" // Adjust the path as necessary
                alt="Dotted Triangle"
                className="absolute top-0 right-0 w-[1000px] h-[1000px]"
                style={{
                    transform: `translateX(50%) translateY(-${scrollY * 0.01}px) rotate(${scrollY * 0.005}deg)` // Adjust movement and rotation factor as needed
                }}
            />

            {/* Middle Left Triangle */}
            <img
                src="/svgs/dotted_triangle.svg" // Adjust the path as necessary
                alt="Dotted Triangle"
                className="absolute lg:left-[-500px] top-1/2 w-[1000px] h-[1000px]"
                style={{
                    transform: `translateX(50%) translateY(${scrollY * 0.005}px) rotate(${scrollY * 0.003}deg)` // Adjust movement and rotation factor as needed
                }}
            />
            

            {/* Bottom Middle Triangle */}
            {/* Uncomment this if needed */}
            {/* <img
                src="/svgs/dotted_triangle.svg" // Adjust the path as necessary
                alt="Dotted Triangle"
                className="absolute left-1/2 bottom-0 w-[1000px] h-[1000px]"
                style={{
                    transform: `translateX(50%) translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.04}deg)` // Adjust movement and rotation factor as needed
                }}
            /> */}
        </div>
    );
};

export default BackgroundOverlay;
