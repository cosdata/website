"use client";
import { commonStyles, afacad, geologica } from '../../../../styles/common';

export default function CTASection() {
  return (
    <section className={`py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 ${afacad.className} text-lg`}>
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto`}>
        <div className="bg-gradient-to-br from-gray-900 via-[#9a1f3d] to-[#6d162c] rounded-xl shadow-xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-16 -right-16 w-40 sm:w-48 h-40 sm:h-48 bg-[#F23665] rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-[#ff7096] rounded-full opacity-10 blur-3xl"></div>
          </div>
          <div className="px-4 sm:px-6 py-8 sm:py-10 md:p-12 text-center relative z-10">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 ${geologica.className}`}>
              Ready to Try Cosdata Serverless?
            </h2>
            <p className={`md:text-xl text-white opacity-90 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto ${commonStyles.paragraph}`} style={{ fontSize: '1.4rem' }}>
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
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#0055c8] to-[#0077ff] text-white rounded-lg shadow-md hover:from-[#0044a8] hover:to-[#0066e6] transition-all duration-300 font-bold text-base sm:text-lg w-full sm:w-auto"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                Get Early Access
              </button>
              <a
                href="/tech/channi-paper"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-white rounded-lg shadow-md hover:bg-white/10 transition-colors duration-300 font-bold text-base sm:text-lg w-full sm:w-auto"
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