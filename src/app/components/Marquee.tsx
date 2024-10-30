"use client";
import React from 'react';

const Marquee: React.FC = () => {

    return (
        <div className="relative overflow-hidden bg-white max-w-[1400px] mx-auto px-4 my-20">
            {/* <div className='w-full h-[1px] bg-[#f0f2f5]'></div> */}
            <div className="flex animate-marquee items-center">
                <img src="./svgs/combined.svg" alt="logos" className="h-[20px] w-[1134px]  min-w-[1134px] ml-[20px] filter grayscale opacity-70" />
                <img src="./svgs/combined.svg" alt="logos" className="h-[20px] w-[1134px] min-w-[1134px] ml-[20px] filter grayscale opacity-70" />
                <img src="./svgs/combined.svg" alt="logos" className="h-[20px] w-[1134px] min-w-[1134px] ml-[20px] filter grayscale opacity-70" />
            </div>
            {/* <div className='w-full h-[1px] bg-[#f0f2f5]'></div> */}
            {/* Blur effect at the start */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            {/* Blur effect at the end */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

    );
};

export default Marquee;
