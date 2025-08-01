"use client";
import { commonStyles } from '../../../../styles/common';

export default function CTASection() {
  const handleEarlyAccessClick = () => {
    // Dispatch a custom event to open the early access modal
    const event = new CustomEvent('openEarlyAccessModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6">
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto`}>
        <div className="bg-gradient-to-br from-gray-900 via-[#9a1f3d] to-[#6d162c] rounded-xl shadow-xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-16 -right-16 w-40 sm:w-48 h-40 sm:h-48 bg-[#F23665] rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-[#ff7096] rounded-full opacity-10 blur-3xl"></div>
          </div>
          <div className="px-4 sm:px-6 py-8 sm:py-10 md:p-12 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Knowledge Graph?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white opacity-90 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto">
              Join the waitlist for Cosdata Structured Search and be among the first to experience 
              the next generation of knowledge graph technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <button
                onClick={handleEarlyAccessClick}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#0055c8] to-[#0077ff] text-white rounded-lg shadow-md hover:from-[#0044a8] hover:to-[#0066e6] transition-all duration-300 font-bold text-base sm:text-lg w-full sm:w-auto"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                Get Early Access
              </button>
              <a
                href="https://github.com/cosdata/cosdata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-white rounded-lg shadow-md hover:bg-white/10 transition-colors duration-300 font-bold text-base sm:text-lg w-full sm:w-auto"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 