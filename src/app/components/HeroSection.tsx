"use client";
import { useEffect, useState, useCallback, useMemo } from 'react';
import EarlyAccessModal from './EarlyAccessModal';
import { commonStyles } from '../styles/common';

const HeroSection = () => {
  const phrases = useMemo(() => [
    "Smarter, Faster Search",
    "Knowledge Graphs",
    "Hybrid Search",
    "Smart Data Versioning"
  ], []);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const typePhrase = useCallback(() => {
    const currentFullPhrase = phrases[phraseIndex];
    if (currentPhrase.length < currentFullPhrase.length) {
      setCurrentPhrase(currentFullPhrase.slice(0, currentPhrase.length + 1));
    } else {
      setTimeout(() => {
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setCurrentPhrase('');
      }, 3000);
    }
  }, [currentPhrase, phraseIndex, phrases]);

  useEffect(() => {
    const timer = setTimeout(typePhrase, 40);
    return () => clearTimeout(timer);
  }, [currentPhrase, typePhrase]);

  const cursorStyle = {
    animation: 'blink 1s step-end infinite',
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className={`bg-transparent lg:mb-10 pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-20 flex justify-center ${commonStyles.mainContainer}`}>
      <div className="w-full">
        <div className="flex flex-col items-center text-center">
          <h1 className={commonStyles.heroTitle}>
            <div className="text-[#f23665] text-[42px] sm:text-[56px] md:text-[72px] font-bold">Supercharge Your AI</div>
            <div className="pt-2 md:pt-3 text-[25px] sm:text-[42px] md:text-[48px] whitespace-nowrap">
              <span className="typewriter font-bold">
                {currentPhrase}
              </span><span className='text-[#f23665]' style={cursorStyle}>|</span>
            </div>
          </h1>
          <p className={commonStyles.heroSubtitle}>
            Our Next-gen Vector Database powers advanced RAG pipelines for the future of data intelligence.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button onClick={openModal} className={`${commonStyles.button} bg-[#f23665] text-white hover:bg-[#d92d5c]`}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              Get Early Access
            </button>
            <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className={`${commonStyles.button} bg-black text-white hover:bg-gray-800`}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View on Github
            </a>
          </div>
          <EarlyAccessModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
