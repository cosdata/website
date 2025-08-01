"use client";
import Link from 'next/link';
import Image from 'next/image';
import { commonStyles, afacad, geologica } from '../../../../styles/common';
import { vectorBenchmarkData } from '@/data/benchmarks';

const HeroSection = () => {
  return (
    <main className={`pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden text-white px-4 sm:px-6 ${afacad.className} text-lg`}>
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 sm:w-80 h-64 sm:h-80 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto relative z-10`}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-center md:text-left mb-8 md:mb-0">
            <h1 className={`text-[36px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-bold text-[#f23665] leading-tight ${geologica.className}`}>
              Cosdata OSS
            </h1>
            <h2 className={`text-[22px] sm:text-[25px] md:text-[42px] lg:text-[48px] font-bold text-white mt-2 leading-tight ${geologica.className}`}>
              High-Performance Vector Database
            </h2>
            <p className={`mt-4 sm:mt-6 md:text-xl text-white max-w-2xl mx-auto md:mx-0 ${commonStyles.paragraph}`} style={{ fontSize: '1.4rem' }}>
              Benchmark-leading performance with {vectorBenchmarkData[0].qps}+ QPS on 1M-record datasets, 
              outperforming leading vector databases while maintaining {parseFloat(vectorBenchmarkData[0].precision) * 100}% precision. 
              Combines powerful vector and full-text search with enterprise-grade reliability.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-md text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                View on Github
              </a>
              <Link href="/resources/benchmarks" 
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-md text-white bg-[#f23665] hover:bg-[#d92d5c] transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                View Benchmarks
              </Link>
            </div>
          </div>
          <div className="w-full md:w-2/5 relative mt-6 md:mt-0">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
              <Image 
                src="/svgs/performance.svg" 
                alt="OSS Vector Database Visualization" 
                fill 
                className="object-contain p-4" 
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection; 