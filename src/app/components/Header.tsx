"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import EarlyAccessModal from './EarlyAccessModal';
import { commonStyles, afacad, geologica } from '../styles/common';
import { Akatab } from 'next/font/google';
import "../globals.css"

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const maxScroll = 80;
    const progress = Math.min(scrollPosition / maxScroll, 1);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const isLandingPage = pathname === '/';

  // Calculate dynamic styles
  const headerStyle = {
    backgroundColor: isLandingPage ? `rgba(255, 255, 255, ${isOpen ? 1 : scrollProgress})` : 'white',
    boxShadow: scrollProgress > 0 && !isOpen
      ? `0 2px 4px rgba(0, 0, 0, ${0.1 + scrollProgress * 0.1})`
      : 'none',
    transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
  };

  // Calculate dynamic padding
  const maxPadding = 20;
  const minPadding = 6;
  const dynamicPadding = isOpen ? minPadding : maxPadding - (scrollProgress * (maxPadding - minPadding));

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubMenuLinkClick = useCallback(() => {
    setIsSubMenuOpen(false);
    setIsOpen(false); // Close mobile menu if open
  }, []);

  useEffect(() => {
    const closeSubMenu = (e: MouseEvent) => {
      if (isSubMenuOpen && !(e.target as Element).closest('.submenu-container')) {
        setIsSubMenuOpen(false);
      }
    };

    document.addEventListener('click', closeSubMenu);
    return () => document.removeEventListener('click', closeSubMenu);
  }, [isSubMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${isLandingPage && !isOpen ? '' : 'bg-white'} ${isOpen ? 'md:shadow-md' : ''}`}
        style={headerStyle}
      >
        <div
          className={`max-w-[1400px] mx-auto px-4 sm:px-4 lg:px-4 flex justify-between items-center transition-all duration-300 ${afacad.className}`}
          style={{ paddingTop: `${dynamicPadding}px`, paddingBottom: `${dynamicPadding}px` }}
        >
          <div className="text-2xl font-bold text-gray-800 -ml-3 sm:-ml-4 lg:-ml-4">
            <Link href="/" ><div className='w-[15rem] h-[3rem] relative'><Image src="/svgs/logo.svg" alt='logo' fill /></div></Link>
          </div>
          <nav className="desktop-header items-center space-x-6">
            <div className="relative group submenu-container">
              <button
                className="text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500 flex items-center"
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              >
                Technology
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${isSubMenuOpen || 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}>
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/blog/introducing-cosdata" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>Overview</Link>
                  <Link href="/tech/roadmap" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>Roadmap</Link>
                </div>
              </div>
            </div>
            <Link href="/blog/introducing-cosdata" className="text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500">About Us</Link>
            <Link href="/blog" className="text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500">Blog</Link>
            <button onClick={openModal} className="inline-block bg-[#f23665] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#d92d5c] transition duration-300 flex items-center text-xl md:text-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              Get Early Access
            </button>
            <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 flex items-center text-xl md:text-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View on Github
            </a>
          </nav>

          {/* Hamburger Icon */}
          <div className="mobile-header items-center">
            <button onClick={toggleDrawer} className="text-gray-800 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className={`fixed left-0 right-0 bg-white mobile-header z-40 ${afacad.className}`} style={{ top: `${minPadding * 2 + 20}px` }}>
          <div className="px-10 py-8 space-y-4">
            <div>
              <button
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                className="w-full text-left text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500 flex items-center justify-between"
              >
                Technology
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isSubMenuOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/blog/introducing-cosdata" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>Overview</Link>
                  <Link href="/tech/roadmap" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>Roadmap</Link>
                </div>
              )}
            </div>
            <Link href="/blog/introducing-cosdata" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500">About us</Link>
            <Link href="/blog" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500">Blog</Link>
            <button onClick={openModal} className="w-full bg-[#f23665] text-white px-4 py-3 rounded-lg shadow-md hover:bg-[#d92d5c] transition duration-300 flex items-center justify-center text-xl md:text-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              Get Early Access
            </button>
            <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="w-full bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition duration-300 flex items-center justify-center text-xl md:text-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View on Github
            </a>
          </div>
        </div>
      )}
      <div style={{ height: `${dynamicPadding * 2 + 20}px` }}></div> {/* Dynamic spacer */}
      <EarlyAccessModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
