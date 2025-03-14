import type { Metadata } from 'next';
import { commonStyles } from '../../../styles/common';

export const metadata: Metadata = {
  title: 'Careers at Cosdata - Join Our Team',
  description: 'Join our team at Cosdata and help build the future of vector search technology.',
};

export default function CareersPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-12 md:pt-16 lg:pt-20 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden text-white">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10`}>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[42px] sm:text-[56px] md:text-[72px] font-bold text-[#f23665] leading-tight mb-6">
              Join Our Team
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-200 mb-12">
                Help us build the future of vector search and knowledge graph technology
              </p>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white border-opacity-20">
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  We're always looking for talented individuals who are passionate about pushing the boundaries of what's possible in vector search and AI technology.
                </p>
                <div className="flex flex-col items-center">
                  <p className="text-2xl font-semibold text-white mb-4">
                    Get in touch with us at
                  </p>
                  <a 
                    href="mailto:careers@cosdata.io"
                    className="text-2xl md:text-3xl font-bold text-[#f23665] hover:text-[#ff4675] transition-colors duration-300"
                  >
                    careers@cosdata.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 