"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Orbitron, Audiowide } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '500',
});

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
});

const HeroSection = () => {
  const [showPoint, setShowPoint] = useState(true);
  const [showBoard, setShowBoard] = useState(true);
  const [imageStyle, setImageStyle] = useState({}); // For zoom effect
  const [animationEnded, setAnimationEnded] = useState(false); // Track if the animation has ended

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoint(false); // Hide the point after 20 seconds
      setAnimationEnded(true); // Mark animation as ended
    }, 20000); // 20 seconds duration
    const secondtimer = setTimeout(() => {
      setShowBoard(false);
    }, 3500)
    return () => {
      clearTimeout(timer);
      clearTimeout(secondtimer);
    };
  }, [animationEnded]);

  const handleReplay = () => {
    if (!animationEnded) return; // Only allow replay if the animation has ended

    const ele = document.getElementById("heroImage");
    if (ele) {
      // Remove the animation class and force reflow (restarts animation)
      ele.classList.remove("image");

      // Trigger a reflow to restart the animation
      void ele.offsetWidth;

      // Re-add the class after a small delay
      setTimeout(() => {
        ele.classList.add("image");
      }, 50);
    }

    setAnimationEnded(false);
    setShowPoint(true);
    setShowBoard(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!animationEnded) return; // Prevent zoom before animation ends
    const imageContainer = e.currentTarget;
    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setImageStyle({
      transformOrigin: `${xPercent}% ${yPercent}%`,
      transform: 'scale(1.5)',
      transition: 'transform 1s ease',
    });
  };

  const handleMouseLeave = () => {
    if (!animationEnded) return;
    setImageStyle({
      transform: 'scale(1)',
      transition: 'transform 1s ease',
    });
  };

  return (
    <main className="bg-transparent min-h-[100vh]">
      <div className='max-w-7xl mx-auto py-0 px-0 sm:px-6'>
        <div className="flex flex-col xl:flex-row justify-center items-stretch">
          <div className="flex-grow gap-3 flex flex-col justify-center xl:w-5/12 xl:h-[600px] p-6">
            <h1 className="text-[48px] font-[500] leading-[56px] text-[#0055c8] mb-6">
              <div className="text-[#f23665] text-[56px] font-bold">Supercharge Your AI</div>
              <div>with Unified, Intelligent Search</div>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              The future ready AI data platform to power the next generation search pipelines.
            </p>
            <div>
              <a href="#" className="inline-block bg-[#f47a96] text-white px-6 py-3 duration-300">
                Learn more
              </a>
            </div>
          </div>

          <div className="flex-grow xl:flex hidden justify-center w-full xl:w-7/12 overflow-hidden">
            <div
              className="w-full  relative overflow-hidden image-container"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="/svgs/hybrid.drawio.svg"
                alt="Image"
                fill
                className="object-contain image"
                id="heroImage"
                style={imageStyle} // Apply zoom effect
              />
              {showPoint && (
                <div className="absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl top-0 left-0 w-full h-full z-[1] fade-in flex justify-center items-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-radial from-[#f0f2f5] to-[#f23665] throbbing"></div>
                </div>
              )}
              {/* {showBoard && (
                <div className="absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl top-0 left-0 w-full h-full z-[2] bg-transparent flex justify-center items-end">
                  <div className="w-full h-[33%] bg-gradient-to-r from-[#f7f8fa] to-[#ffffff]"></div>
                </div>
              )} */}
            </div>
          </div>
        </div>
        <div className='xl:flex hidden justify-end'>
          <button
            onClick={handleReplay}
            className={`mt-4 bg-[#3d8bff] text-white px-4 py-2 opoacity-70 ${!animationEnded ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={!animationEnded}
          >
            Replay
          </button> </div>
      </div>
    </main>
  );
};

export default HeroSection;
