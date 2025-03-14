"use client";
import { commonStyles } from '../../../../styles/common';

export default function CTASection() {
  return (
    <section className="pb-16 pt-8 bg-gradient-to-b from-white to-gray-50">
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="bg-gradient-to-r from-[#6b46c1] to-[#4f46e5] rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Try Cosdata Serverless?
            </h2>
            <p className="text-xl text-white opacity-90 mb-10 max-w-3xl mx-auto">
              Join our early access program to experience the future of vector search. 
              Our serverless vector database eliminates operational complexity while delivering 
              exceptional performance at any scale.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => {
                  const event = new CustomEvent('openEarlyAccessModal');
                  window.dispatchEvent(event);
                }}
                className="inline-flex items-center px-8 py-4 bg-white text-[#6b46c1] rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 font-bold text-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                Get Early Access
              </button>
              <a 
                href="/tech/channi-paper" 
                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300 font-bold text-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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