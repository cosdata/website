"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {

  // Image Animation code

  // const [showPoint, setShowPoint] = useState(true);
  // const [imageStyle, setImageStyle] = useState({}); // For zoom effect
  // const [animationEnded, setAnimationEnded] = useState(false); // Track if the animation has ended
  // const [lastMousePosition, setLastMousePosition] = useState({ xPercent: 50, yPercent: 50 }); // Track last mouse position

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPoint(false); // Hide the point after 20 seconds
  //     setAnimationEnded(true); // Mark animation as ended
  //   }, 20000); // 20 seconds duration
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [animationEnded]);

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (!animationEnded) return; // Prevent zoom before animation ends
  //   const imageContainer = e.currentTarget;
  //   const rect = imageContainer.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;
  //   const xPercent = (x / rect.width) * 100;
  //   const yPercent = (y / rect.height) * 100;

  //   // Save the last mouse position in state
  //   setLastMousePosition({ xPercent, yPercent });

  //   setImageStyle({
  //     transformOrigin: `${xPercent}% ${yPercent}%`,
  //     transform: 'scale(1.5)',
  //     transition: 'transform 1s ease',
  //   });
  // };

  // const handleMouseLeave = () => {
  //   if (!animationEnded) return;

  //   // Keep the last mouse position as the transform origin
  //   const { xPercent, yPercent } = lastMousePosition;

  //   setImageStyle({
  //     transformOrigin: `${xPercent}% ${yPercent}%`, // Use last mouse position for zoom-out
  //     transform: 'scale(1)',
  //     transition: 'transform 1s ease',
  //   });
  // };

  return (
    <main className="bg-transparent lg:mb-10 py-20 flex justify-center">
      <div className="max-w-6xl mx-auto py-0 px-0 sm:px-6">
        <div className="flex w-full justify-center">
          <div className="flex-grow flex flex-col p-6">
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[500] leading-[64px] text-[#0055c8] mb-6">
              <div className="text-[#f23665] text-[50px] sm:text-[56px] lg:text-[72px] font-bold">Supercharge Your AI</div>
              <div>with Unified, Intelligent Search</div>
            </h1>
            <p className="text-lg md:text-xl text-[#374151] mb-8 leading-relaxed">
              Our Next-gen Vector Database powers advanced AI search pipelines for the future of data intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="inline-block bg-[#f23665] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#d92d5c] transition duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                Get Early Access
              </a>
              <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                View on Github
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
