"use client";
import React from 'react';

const Marquee: React.FC = () => {

    return (
        <div className="relative overflow-hidden bg-white max-w-6xl mx-auto ">
            <div className='w-full h-[1px] bg-black'></div>
            <div className="flex animate-marquee items-center my-5">
                <img src="./svgs/combined.svg" alt="logos" className=" w-[588px] ml-5 filter grayscale" />
                <img src="./svgs/combined.svg" alt="logos" className="w-[588px] ml-5 filter grayscale" />
                <img src="./svgs/combined.svg" alt="logos" className="w-[588px] ml-5 filter grayscale" />
            </div>
            <div className='w-full h-[1px] bg-black'></div>
            {/* Blur effect at the start */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            {/* Blur effect at the end */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

    );
};

export default Marquee;
