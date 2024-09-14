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
    // First animation for 20 seconds
    const timer = setTimeout(() => {
      setShowPoint(false); // Hide the point after 20 seconds
      // Hide the board after 20 seconds
      setAnimationEnded(true); // Mark animation as ended
    }, 20000); // 20 seconds duration
    const secondtimer = setTimeout(() => {
      setShowBoard(false);
    }, 3000)
    return () => {
      clearTimeout(timer);
      clearTimeout(secondtimer);
    }; // Cleanup timer on component unmount
  }, []);

  // Replay animation
  const handleReplay = () => {
    if (!animationEnded) return; // Only allow replay if the animation has ended

    setAnimationEnded(false); // Reset the state to restart the animation
    setShowPoint(true);
    setShowBoard(true);

    // Start animation again for 20 seconds
    setTimeout(() => {
      setShowPoint(false);
      setAnimationEnded(true); // Mark animation as ended again
    }, 20000);
    setTimeout(() => {
      setShowBoard(false);
    }, 3000)
  };

  // Zoom on hover functionality
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!animationEnded) return; // Prevent zoom before animation ends
    const imageContainer = e.currentTarget;
    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left; // X coordinate relative to the container
    const y = e.clientY - rect.top;  // Y coordinate relative to the container
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setImageStyle({
      transformOrigin: `${xPercent}% ${yPercent}%`,
      transform: 'scale(2)', // Zoom in on hover
      transition: 'transform 0.5s ease', // Smooth transition
    });
  };

  const handleMouseLeave = () => {
    if (!animationEnded) return; // Prevent reset before animation ends
    setImageStyle({
      transform: 'scale(1)', // Reset zoom when hover ends
      transition: 'transform 0.5s ease', // Smooth transition
    });
  };

  return (
    <main className="max-w-7xl mx-auto py-16 px-0 sm:px-6 lg:px-8">
      <div className="flex flex-col xl:flex-row justify-center xl:items-center xl:justify-between">
        <div className="bg-gray-100 p-5 flex flex-col justify-center xl:w-4/12">
          <h1 className="text-[36px] font-[500] leading-[50px] text-[#0055c8] mb-6">
            <div className="text-[#f23665] font-bold">Supercharge Your AI</div>
            <div>with Unified, Intelligent Search</div>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            The future ready AI data platform to power the next generation search pipelines.
          </p>
          <div>
            <a href="#" className="inline-block bg-[#f23665] text-white px-6 py-3 duration-300">
              Learn more
            </a>
          </div>
        </div>

        <div className="flex justify-center w-full xl:w-8/12 overflow-hidden">
          <div
            className="w-full p-0 h-[200px] sm:h-[400px] md:h-[600px] xl:h-[600px] relative overflow-hidden image-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/svgs/hybrid.drawio.svg"
              alt="Image"
              fill
              className="object-contain image"
              style={imageStyle} // Apply zoom effect
            />
            {showPoint && (
              <div className="absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl top-0 left-0 w-full h-full z-[1] fade-in flex justify-center items-center">
                <div className="w-5 h-5 rounded-full bg-[#f23665]"></div>
              </div>
            )}
            {showBoard && (
              <div className="absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl top-0 left-0 w-full h-full z-[2] bg-transparent flex justify-center items-end">
                <div className="w-[32rem] h-[10rem] bg-white"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={handleReplay}
        className={`mt-4 bg-blue-500 text-white px-4 py-2 ${!animationEnded ? 'cursor-not-allowed opacity-50' : ''}`}
        disabled={!animationEnded} // Disable replay button until animation ends
      >
        Replay Animation
      </button>
    </main>
  );
};

export default HeroSection;
