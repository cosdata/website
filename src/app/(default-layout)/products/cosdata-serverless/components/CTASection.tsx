"use client";
import { commonStyles } from '../../../../styles/common';

export default function CTASection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6">
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto`}>
        <div className="bg-gradient-to-r from-indigo-900/80 to-[#847CFC]/90 rounded-xl shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
          </div>
          <div className="px-4 sm:px-6 py-8 sm:py-10 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Try Cosdata Serverless?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white opacity-90 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto">
              Join our early access program to experience the future of vector search. 
              Our serverless vector database eliminates operational complexity while delivering 
              exceptional performance at any scale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 flex-wrap">
              <button
                onClick={() => {
                  const event = new CustomEvent('openEarlyAccessModal');
                  window.dispatchEvent(event);
                }}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#847CFC] rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 font-bold text-base sm:text-lg w-full sm:w-auto"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                Get Early Access
              </button>
              <a
                href="#" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#f23665] text-white rounded-lg shadow-md hover:bg-[#d92d5c] transition-colors duration-300 font-bold text-base sm:text-lg w-full sm:w-auto"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read CHANNI Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 