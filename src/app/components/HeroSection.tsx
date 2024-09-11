"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    console.log("Component mounted, setting up timer");
    const timer = setTimeout(() => {
      console.log("Timer finished, setting showLabel to true");
      setShowLabel(true);
    }, 8000);

    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    };
  }, []);

  console.log("Current showLabel state:", showLabel);

  return (
    <main className="max-w-7xl mx-auto py-16 px-0 sm:px-6 lg:px-8">
      <div className="flex flex-col xl:flex-row gap-12 justify-center   xl:items-center xl:justify-between">
        <div className="bg-gray-100 p-5 xl:w-3/12">
          <h1 className="text-[42px] font-[500] leading-[72px] text-[#0055c8] font-[Favorit,sans-serif] mb-6">
            <span className='text-[#f47a96] italic'>Supercharged</span> AI <span className='font-bold text-[#0055c8]'>RAG</span> Data Platform for the Next Generation of Search.
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            Introducing a revolution in digital cell morphology that will transform the way you see, work, and diagnose.
          </p>
          <a href="#" className="inline-block bg-[#e47da0] text-white px-6 py-3 duration-300 hover:bg-[#f47a96]">
            Book a meeting
          </a>
        </div>

        <div className="flex justify-center lg:ml-6 w-full xl:w-9/12 overflow-hidden">
          <div className="w-full p-0 h-[300px] sm:h-[400px] md:h-[600px]  xl:h-[600px] relative overflow-hidden duration-300 scale-[1.4] image-container">
            <Image
              src="/svgs/hybrid.drawio.svg"
              alt="Image"
              fill
              className="object-contain image"
            />
            {showLabel && (
              <div className='absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl top-0 left-0 w-full h-full z-[1] fade-in'>
                <div
                  className='absolute top-[31%] left-[2%] md:top-[31%] md:left-[2%] w-48 h-8 text-[#646465]  font-semibold transform-gpu transition-all duration-300 md:hover:top-[29%] cursor-pointer'
                  style={{ transform: 'rotateZ(-29deg) skewX(-30deg)' }}
                >
                  HNSW index
                </div>
                <div
                  className='absolute md:bottom-[51%] md:right-[28%] lg:bottom-[51%] lg:right-[36%] w-48 h-8 text-[#646465]  font-semibold transform-gpu transition-all duration-300 md:hover:bottom-[53%] cursor-pointer'
                  style={{ transform: 'rotateZ(-29deg) skewX(-30deg)' }}
                >
                  Inverted index
                </div>
                <div
                  className='absolute md:bottom-[35%] md:right-[4%] md:hover:bottom-[37%] lg:bottom-[35%] lg:right-[10%] w-48 h-8 text-[#646465] font-semibold transform-gpu transition-all duration-300 lg:hover:bottom-[37%] cursor-pointer'
                  style={{ transform: 'rotateZ(-29deg) skewX(-30deg)' }}
                >
                  Knowledge graphs
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;