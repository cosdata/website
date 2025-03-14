"use client";
import { commonStyles } from '../../../../styles/common';

export default function HeroSection() {
  const handleEarlyAccessClick = () => {
    // Dispatch a custom event to open the early access modal
    const event = new CustomEvent('openEarlyAccessModal');
    window.dispatchEvent(event);
  };

  return (
    <main className="pt-12 sm:pt-12 md:pt-16 lg:pt-20 pb-20 bg-gradient-to-br from-gray-900 via-green-800 to-emerald-900 relative overflow-hidden text-white">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-lime-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10`}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-[42px] sm:text-[56px] md:text-[72px] font-bold text-[#f23665] leading-tight">
              Cosdata Structured Search
            </h1>
            <h2 className="text-[25px] sm:text-[42px] md:text-[48px] font-bold text-white mt-2">
              Next-Gen Knowledge Graph
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto md:mx-0">
              Innovative knowledge graph purpose-built for structured search and vector search integration, optimized for GraphRAG applications with unprecedented scalability and ease of use.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={handleEarlyAccessClick}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-[#f23665] hover:bg-[#d92d5c] transition-colors duration-300"
              >
                Get Early Access
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <a
                href="https://github.com/cosdata/cosdata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-md text-white bg-transparent hover:bg-white/10 transition-colors duration-300"
              >
                Explore GitHub
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-2/5 relative">
            <div className="relative w-full h-[350px] md:h-[400px] p-4 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
              {/* Knowledge Graph SVG Visualization */}
              <svg className="w-full h-full" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                {/* Main central node */}
                <circle cx="250" cy="250" r="25" fill="#f23665" />
                
                {/* Primary nodes */}
                <circle cx="150" cy="150" r="20" fill="#4ade80" />
                
                <circle cx="350" cy="150" r="20" fill="#4ade80" />
                
                <circle cx="150" cy="350" r="20" fill="#4ade80" />
                
                <circle cx="350" cy="350" r="20" fill="#4ade80" />
                
                {/* Secondary nodes */}
                <circle cx="100" cy="250" r="15" fill="#34d399" />
                <circle cx="400" cy="250" r="15" fill="#34d399" />
                <circle cx="250" cy="100" r="15" fill="#34d399" />
                <circle cx="250" cy="400" r="15" fill="#34d399" />
                
                {/* Tertiary nodes */}
                <circle cx="180" cy="80" r="10" fill="#a3e635" />
                <circle cx="320" cy="80" r="10" fill="#a3e635" />
                <circle cx="180" cy="420" r="10" fill="#a3e635" />
                <circle cx="320" cy="420" r="10" fill="#a3e635" />
                <circle cx="80" cy="180" r="10" fill="#a3e635" />
                <circle cx="420" cy="180" r="10" fill="#a3e635" />
                <circle cx="80" cy="320" r="10" fill="#a3e635" />
                <circle cx="420" cy="320" r="10" fill="#a3e635" />
                
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
                <line x1="150" y1="150" x2="350" y2="150" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="150" y1="350" x2="350" y2="350" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="150" y1="150" x2="150" y2="350" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="350" y1="150" x2="350" y2="350" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6" />
                
                {/* Connections to tertiary nodes */}
                <line x1="150" y1="150" x2="180" y2="80" stroke="#a3e635" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="350" y1="150" x2="320" y2="80" stroke="#a3e635" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="150" y1="350" x2="180" y2="420" stroke="#a3e635" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="350" y1="350" x2="320" y2="420" stroke="#a3e635" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="150" y1="150" x2="80" y2="180" stroke="#a3e635" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="350" y1="150" x2="420" y2="180" stroke="#a3e635" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="150" y1="350" x2="80" y2="320" stroke="#a3e635" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="350" y1="350" x2="420" y2="320" stroke="#a3e635" strokeWidth="1" strokeOpacity="0.4" />
                
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