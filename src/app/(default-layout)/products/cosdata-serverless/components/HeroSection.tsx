"use client";
import Link from 'next/link';
import { commonStyles, afacad, geologica } from '../../../../styles/common';

const HeroSection = () => {
  return (
    <main className={`pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-[#3F3F46] via-[#E03461] to-[#F23665] relative overflow-hidden text-white px-4 sm:px-6 ${afacad.className} text-lg`}>
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-[#F23665] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 sm:w-80 h-64 sm:h-80 bg-[#F23665] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-[#ff7096] rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto relative z-10`}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-center md:text-left mb-8 md:mb-0">
            <h1 className={`text-[36px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-bold text-white leading-tight ${geologica.className}`}>
              Cosdata Serverless
            </h1>
            <h2 className={`text-[22px] sm:text-[25px] md:text-[42px] lg:text-[48px] font-bold text-white mt-2 ${geologica.className}`}>
              Infinitely Scalable Vector Database
            </h2>
            <p className={`mt-4 sm:mt-6 text-white max-w-2xl mx-auto md:mx-0 ${commonStyles.paragraph}`} style={{ fontSize: '1.4rem' }}>
            Cosdata Serverless delivers unmatched scalability with zero overhead. Our CHANNI technology enables lightning-fast hybrid search through efficient memory clustering and optimized graph navigation. Experience superior performance with adaptive scaling and pay only for what you use.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <button
                onClick={() => {
                  const event = new CustomEvent('openEarlyAccessModal');
                  window.dispatchEvent(event);
                }}
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-md text-white bg-gradient-to-r from-[#0055c8] to-[#0077ff] hover:from-[#0044a8] hover:to-[#0066e6] transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                Get Early Access
              </button>
              <Link href="/tech/channi-paper" 
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-sm sm:text-base font-medium rounded-md shadow-md text-white bg-transparent hover:bg-white/10 transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read CHANNI Paper
              </Link>
            </div>
          </div>
          <div className="w-full md:w-2/5 relative mt-6 md:mt-0">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[450px] bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
              {/* Simplified CHANNI architecture visualization */}
              <div className="absolute inset-0">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
                  {/* Central routing node */}
                  <circle cx="250" cy="250" r="18" fill="white" opacity="0.9" />
                  
                  {/* Cluster nodes - larger and colorful */}
                  <circle cx="150" cy="120" r="28" fill="#F23665" opacity="0.8" />
                  <circle cx="350" cy="120" r="28" fill="#ff7096" opacity="0.8" />
                  <circle cx="400" cy="250" r="28" fill="#F472B6" opacity="0.8" />
                  <circle cx="350" cy="380" r="28" fill="#F23665" opacity="0.8" />
                  <circle cx="150" cy="380" r="28" fill="#ff7096" opacity="0.8" />
                  <circle cx="100" cy="250" r="28" fill="#F23665" opacity="0.8" />
                  
                  {/* Secondary nodes */}
                  <circle cx="200" cy="180" r="14" fill="white" opacity="0.7" />
                  <circle cx="300" cy="180" r="14" fill="white" opacity="0.7" />
                  <circle cx="330" cy="300" r="14" fill="white" opacity="0.7" />
                  <circle cx="200" cy="320" r="14" fill="white" opacity="0.7" />
                  <circle cx="170" cy="250" r="14" fill="white" opacity="0.7" />
                  <circle cx="330" cy="250" r="14" fill="white" opacity="0.7" />
                  
                  {/* Tertiary nodes */}
                  <circle cx="220" cy="120" r="8" fill="white" opacity="0.6" />
                  <circle cx="280" cy="120" r="8" fill="white" opacity="0.6" />
                  <circle cx="350" cy="200" r="8" fill="white" opacity="0.6" />
                  <circle cx="350" cy="300" r="8" fill="white" opacity="0.6" />
                  <circle cx="280" cy="380" r="8" fill="white" opacity="0.6" />
                  <circle cx="220" cy="380" r="8" fill="white" opacity="0.6" />
                  <circle cx="150" cy="300" r="8" fill="white" opacity="0.6" />
                  <circle cx="150" cy="200" r="8" fill="white" opacity="0.6" />
                  
                  {/* Primary connections from center to main clusters */}
                  <line x1="250" y1="250" x2="150" y2="120" stroke="white" strokeWidth="2" opacity="0.7" />
                  <line x1="250" y1="250" x2="350" y2="120" stroke="white" strokeWidth="2" opacity="0.7" />
                  <line x1="250" y1="250" x2="400" y2="250" stroke="white" strokeWidth="2" opacity="0.7" />
                  <line x1="250" y1="250" x2="350" y2="380" stroke="white" strokeWidth="2" opacity="0.7" />
                  <line x1="250" y1="250" x2="150" y2="380" stroke="white" strokeWidth="2" opacity="0.7" />
                  <line x1="250" y1="250" x2="100" y2="250" stroke="white" strokeWidth="2" opacity="0.7" />
                  
                  {/* Secondary connections from center to secondary nodes */}
                  <line x1="250" y1="250" x2="200" y2="180" stroke="white" strokeWidth="1.5" opacity="0.5" />
                  <line x1="250" y1="250" x2="300" y2="180" stroke="white" strokeWidth="1.5" opacity="0.5" />
                  <line x1="250" y1="250" x2="330" y2="300" stroke="white" strokeWidth="1.5" opacity="0.5" />
                  <line x1="250" y1="250" x2="200" y2="320" stroke="white" strokeWidth="1.5" opacity="0.5" />
                  <line x1="250" y1="250" x2="170" y2="250" stroke="white" strokeWidth="1.5" opacity="0.5" />
                  <line x1="250" y1="250" x2="330" y2="250" stroke="white" strokeWidth="1.5" opacity="0.5" />
                  
                  {/* Tertiary connections from center to tertiary nodes */}
                  <line x1="250" y1="250" x2="220" y2="120" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="250" y1="250" x2="280" y2="120" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="250" y1="250" x2="350" y2="200" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="250" y1="250" x2="350" y2="300" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="250" y1="250" x2="280" y2="380" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="250" y1="250" x2="220" y2="380" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="250" y1="250" x2="150" y2="300" stroke="white" strokeWidth="1" opacity="0.3" />
                  <line x1="250" y1="250" x2="150" y2="200" stroke="white" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection; 