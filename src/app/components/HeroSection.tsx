"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [showPoint, setShowPoint] = useState(true);
  const [imageStyle, setImageStyle] = useState({}); // For zoom effect
  const [animationEnded, setAnimationEnded] = useState(false); // Track if the animation has ended
  const [lastMousePosition, setLastMousePosition] = useState({ xPercent: 50, yPercent: 50 }); // Track last mouse position

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoint(false); // Hide the point after 20 seconds
      setAnimationEnded(true); // Mark animation as ended
    }, 20000); // 20 seconds duration
    return () => {
      clearTimeout(timer);
    };
  }, [animationEnded]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!animationEnded) return; // Prevent zoom before animation ends
    const imageContainer = e.currentTarget;
    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Save the last mouse position in state
    setLastMousePosition({ xPercent, yPercent });

    setImageStyle({
      transformOrigin: `${xPercent}% ${yPercent}%`,
      transform: 'scale(1.5)',
      transition: 'transform 1s ease',
    });
  };

  const handleMouseLeave = () => {
    if (!animationEnded) return;

    // Keep the last mouse position as the transform origin
    const { xPercent, yPercent } = lastMousePosition;

    setImageStyle({
      transformOrigin: `${xPercent}% ${yPercent}%`, // Use last mouse position for zoom-out
      transform: 'scale(1)',
      transition: 'transform 1s ease',
    });
  };

  return (
    <main className="bg-transparent min-h-[80vh] xl:min-h-[50vh] py-10 flex justify-center">
      <div className="max-w-6xl mx-auto py-0 px-0 sm:px-6">
        <div className="flex w-full justify-center">
          <div className="flex-grow flex flex-col p-6">
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[500] leading-[64px] text-[#0055c8] mb-6">
              <div className="text-[#f23665] text-[50px] sm:text-[56px] lg:text-[72px] font-bold">Supercharge Your AI</div>
              <div>with Unified, Intelligent Search</div>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              The future ready AI data platform to power the next generation search pipelines.
            </p>
            <div>
              <a href="#" className="inline-block bg-[#f23665] text-white px-3 py-1 duration-300">
                Learn more
              </a>
            </div>
          </div>

          {/* <div className="flex-grow xl:flex hidden justify-center w-full xl:w-7/12 overflow-hidden">
            <div
              className="w-full relative overflow-hidden image-container"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="/svgs/hybrid.drawio.svg"
                alt="Image"
                fill
                className="object-contain image z-10"
                id="heroImage"
                style={imageStyle} // Apply zoom effect
              />
              {showPoint && (
                <div className="absolute  text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl top-0 left-0 w-full h-full z-10 fade-in flex justify-center items-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-radial from-[#f0f2f5] to-[#f23665] throbbing"></div>
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
