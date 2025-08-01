"use client";
import { commonStyles, afacad, geologica } from '../../../../styles/common';

export default function CTASection() {
  return (
    <section className={`py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 ${afacad.className} text-lg`}>
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto`}>
        <div className="bg-gradient-to-r from-[#0055c8] to-[#3d8bff] rounded-xl shadow-xl overflow-hidden">
          <div className="px-4 sm:px-6 py-8 sm:py-10 md:p-12 text-center">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 ${geologica.className}`}>
              Ready to Implement Cosdata OSS?
            </h2>
            <p className={`md:text-xl text-white opacity-90 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto ${commonStyles.paragraph}`}>
              Our open-source vector database solution is ready for you to use in your applications. 
              Check out our GitHub repository to get started with the fastest vector search available.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 flex-wrap">
              <a 
                href="https://github.com/cosdata/cosdata" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0055c8] rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 font-bold text-base sm:text-lg w-full sm:w-auto"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                View on GitHub
              </a>
              <a 
                href="https://github.com/cosdata/cosdata/blob/main/README.md" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300 font-bold text-base sm:text-lg w-full sm:w-auto"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 