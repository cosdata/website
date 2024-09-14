"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Orbitron, Audiowide } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '500',
})

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
})

const HeroSection = () => {
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    console.log("Component mounted, setting up timer");
    const timer = setTimeout(() => {
      console.log("Timer finished, setting showLabel to true");
      setShowLabel(true);
    }, 3000);

    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    };
  }, []);

  console.log("Current showLabel state:", showLabel);

  return (
    <main className="max-w-7xl mx-auto py-16 px-0 sm:px-6 lg:px-8">
      <div className="flex flex-col xl:flex-row justify-centerxl:items-center xl:justify-between">
        <div className="bg-gray-100 p-5 flex flex-col justify-center xl:w-4/12">
          <h1 className="text-[28px] font-[500] leading-[50px] text-[#0055c8]  mb-6">
            <div className={`text-[#f47a96] text-3xl`} >Supercharge Your AI</div> <div>with Unified, Intelligent Search</div>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            The future ready AI data platform to power the next generation search pipelines.
          </p>
          <div><a href="#" className="inline-block bg-[#e47da0] text-white px-6 py-3 duration-300 hover:bg-[#f47a96]">
            Book a meeting
          </a></div>
        </div>

        <div className="flex justify-center w-full xl:w-8/12 overflow-hidden">
          <div className="w-full p-0 h-[200px] sm:h-[400px] md:h-[600px]  xl:h-[600px] relative overflow-hidden duration-300 scale-[1.3] image-container">
            <Image
              src="/svgs/hybrid.drawio.svg"
              alt="Image"
              fill
              className="object-contain image"
            />
            {/* {showLabel && (
              <div className='absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl top-0 left-0 w-full h-full z-[1] fade-in'>
                <div
                  className='absolute top-[31%] left-[-1%] hover:top-[28%] sm:top-[28%] sm:left-[1%] sm:hover:top-[26%] md:top-[31%] md:left-[2%] w-48 h-8 text-[#646465]  font-semibold transform-gpu transition-all duration-300 md:hover:top-[29%] cursor-pointer'
                  style={{ transform: 'rotateZ(-29deg) skewX(-30deg)' }}
                >
                  Knowledge graphs
                </div>
                <div
                  className='absolute bottom-[52%] right-[8%] hover:bottom-[54%] sm:bottom-[52%] sm:right-[19%] sm:hover:bottom-[54%] md:bottom-[51%] md:right-[28%] lg:bottom-[51%] lg:right-[36%] w-48 h-8 text-[#646465]  font-semibold transform-gpu transition-all duration-300 md:hover:bottom-[53%] cursor-pointer'
                  style={{ transform: 'rotateZ(-29deg) skewX(-30deg)' }}
                >
                  HNSW index
                </div>
                <div
                  className='absolute bottom-[40%] right-[-18%] hover:bottom-[42%] sm:bottom-[34%] sm:right-[-2%] sm:hover:bottom-[36%] md:bottom-[35%] md:right-[4%] md:hover:bottom-[37%] lg:bottom-[35%] lg:right-[9%] w-48 h-8 text-[#646465] font-semibold transform-gpu transition-all duration-300 lg:hover:bottom-[37%] cursor-pointer'
                  style={{ transform: 'rotateZ(-29deg) skewX(-30deg)' }}
                >
                  Inverted index
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;