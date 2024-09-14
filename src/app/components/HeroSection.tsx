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
  const [showPoint, setShowPoint] = useState(true);

  useEffect(() => {
    console.log("Component mounted, setting up timer");
    const timer = setTimeout(() => {
      console.log("Timer finished, setting showLabel to true");
      setShowPoint(true);
    }, 18000);

    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    };
  }, []);

  console.log("Current showLabel state:", showPoint);

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
            Learn more
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
            {showPoint && (
              <div className='absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl top-0 left-0 w-full h-full z-[1] fade-in flex justify-center items-center'>
                <div className='w-5 h-5 rounded-full bg-[#f47a96]'>

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