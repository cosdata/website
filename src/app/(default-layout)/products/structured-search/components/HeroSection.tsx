"use client";
import { commonStyles } from '../../../../styles/common';

export default function HeroSection() {
  const handleEarlyAccessClick = () => {
    // Dispatch a custom event to open the early access modal
    const event = new CustomEvent('openEarlyAccessModal');
    window.dispatchEvent(event);
  };

  return (
    <main className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-gray-900 via-[#9a1f3d] to-[#6d162c] relative overflow-hidden text-white px-4 sm:px-6">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#F23665] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-[#d92d59] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#ff7096] rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto relative z-10`}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-bold text-white leading-tight">
              Cosdata Structured Search
            </h1>
            <h2 className="text-[22px] sm:text-[25px] md:text-[42px] lg:text-[48px] font-bold text-white mt-2">
              Next-Gen Knowledge Graph
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto md:mx-0">
              Innovative knowledge graph purpose-built for structured search and vector search integration, optimized for Graph-Based RAG applications with unprecedented scalability and ease of use.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <button
                onClick={handleEarlyAccessClick}
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-md text-white bg-gradient-to-r from-[#0055c8] to-[#0077ff] hover:from-[#0044a8] hover:to-[#0066e6] transition-all duration-300"
              >
                Get Early Access
                <svg className="ml-1.5 sm:ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <a
                href="https://github.com/cosdata/cosdata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-sm sm:text-base font-medium rounded-md shadow-md text-white bg-transparent hover:bg-white/10 transition-colors duration-300"
              >
                Explore GitHub
                <svg className="ml-1.5 sm:ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-2/5 relative">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] p-3 sm:p-4 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
              {/* Knowledge Graph SVG Visualization */}
              <svg className="w-full h-full" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                {/* Main central node */}
                <circle cx="250" cy="250" r="25" fill="#f23665" />
                
                {/* Primary nodes */}
                <circle cx="150" cy="150" r="20" fill="#ff7096" />
                
                <circle cx="350" cy="150" r="20" fill="#ff7096" />
                
                <circle cx="150" cy="350" r="20" fill="#ff7096" />
                
                <circle cx="350" cy="350" r="20" fill="#ff7096" />
                
                {/* Secondary nodes */}
                <circle cx="100" cy="250" r="15" fill="#ff8fab" />
                <circle cx="400" cy="250" r="15" fill="#ff8fab" />
                <circle cx="250" cy="100" r="15" fill="#ff8fab" />
                <circle cx="250" cy="400" r="15" fill="#ff8fab" />
                
                {/* Tertiary nodes */}
                <circle cx="180" cy="80" r="10" fill="#ffb3c6" />
                <circle cx="320" cy="80" r="10" fill="#ffb3c6" />
                <circle cx="180" cy="420" r="10" fill="#ffb3c6" />
                <circle cx="320" cy="420" r="10" fill="#ffb3c6" />
                <circle cx="80" cy="180" r="10" fill="#ffb3c6" />
                <circle cx="420" cy="180" r="10" fill="#ffb3c6" />
                <circle cx="80" cy="320" r="10" fill="#ffb3c6" />
                <circle cx="420" cy="320" r="10" fill="#ffb3c6" />
                
                {/* Connections from center to primary nodes */}
                <line x1="250" y1="250" x2="150" y2="150" stroke="white" strokeWidth="2" />
                <line x1="250" y1="250" x2="350" y2="150" stroke="white" strokeWidth="2" />
                <line x1="250" y1="250" x2="150" y2="350" stroke="white" strokeWidth="2" />
                <line x1="250" y1="250" x2="350" y2="350" stroke="white" strokeWidth="2" />
                
                {/* Connections from center to secondary nodes */}
                <line x1="250" y1="250" x2="100" y2="250" stroke="white" strokeWidth="1.5" strokeDasharray="5,3" />
                <line x1="250" y1="250" x2="400" y2="250" stroke="white" strokeWidth="1.5" strokeDasharray="5,3" />
                <line x1="250" y1="250" x2="250" y2="100" stroke="white" strokeWidth="1.5" strokeDasharray="5,3" />
                <line x1="250" y1="250" x2="250" y2="400" stroke="white" strokeWidth="1.5" strokeDasharray="5,3" />
                
                {/* Connections between primary nodes */}
                <line x1="150" y1="150" x2="350" y2="150" stroke="#ff7096" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="150" y1="350" x2="350" y2="350" stroke="#ff7096" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="150" y1="150" x2="150" y2="350" stroke="#ff7096" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="350" y1="150" x2="350" y2="350" stroke="#ff7096" strokeWidth="1.5" strokeOpacity="0.6" />
                
                {/* Connections to tertiary nodes */}
                <line x1="150" y1="150" x2="180" y2="80" stroke="#ffb3c6" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="350" y1="150" x2="320" y2="80" stroke="#ffb3c6" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="150" y1="350" x2="180" y2="420" stroke="#ffb3c6" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="350" y1="350" x2="320" y2="420" stroke="#ffb3c6" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="150" y1="150" x2="80" y2="180" stroke="#ffb3c6" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="350" y1="150" x2="420" y2="180" stroke="#ffb3c6" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="150" y1="350" x2="80" y2="320" stroke="#ffb3c6" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="350" y1="350" x2="420" y2="320" stroke="#ffb3c6" strokeWidth="1" strokeOpacity="0.4" />
                
                {/* Vector embedding visualization */}
                <circle cx="250" cy="250" r="100" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2,4" strokeOpacity="0.3" />
                <circle cx="250" cy="250" r="150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2,4" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}