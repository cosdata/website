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
  const [isIframeOpen, setIsIframeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);

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

  // Add event listener for the custom event
  useEffect(() => {
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
    
    window.addEventListener('openEarlyAccessModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('openEarlyAccessModal', handleOpenModal);
    };
  }, []);

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
    setIsProductsMenuOpen(false);
    setIsResourcesMenuOpen(false);
    setIsCompanyMenuOpen(false);
    setIsOpen(false); // Close mobile menu if open
  }, []);

  useEffect(() => {
    const closeSubMenus = (e: MouseEvent) => {
      if (isSubMenuOpen && !(e.target as Element).closest('.submenu-container')) {
        setIsSubMenuOpen(false);
      }
      if (isProductsMenuOpen && !(e.target as Element).closest('.products-submenu-container')) {
        setIsProductsMenuOpen(false);
      }
      if (isResourcesMenuOpen && !(e.target as Element).closest('.resources-submenu-container')) {
        setIsResourcesMenuOpen(false);
      }
      if (isCompanyMenuOpen && !(e.target as Element).closest('.company-submenu-container')) {
        setIsCompanyMenuOpen(false);
      }
    };

    document.addEventListener('click', closeSubMenus);
    return () => document.removeEventListener('click', closeSubMenus);
  }, [isSubMenuOpen, isProductsMenuOpen, isResourcesMenuOpen, isCompanyMenuOpen]);

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
            <div className="relative group products-submenu-container">
              <button
                className="text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500 flex items-center"
                onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
              >
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${isProductsMenuOpen || 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}>
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="products-menu">
                  <Link href="/products/cosdata-hnsw" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>Cosdata HNSW</Link>
                  <Link href="/products/cosdata-serverless" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>Cosdata Serverless</Link>
                  <Link href="/products/structured-search" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>Structured Search</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group resources-submenu-container">
              <button
                className="text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500 flex items-center"
                onClick={() => setIsResourcesMenuOpen(!isResourcesMenuOpen)}
              >
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${isResourcesMenuOpen || 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}>
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="resources-menu">
                <Link href="/blog" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>Blog</Link>
                  <Link href="/resources/benchmarks" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>Benchmarks</Link>
                  <Link href="/tech/roadmap" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>Roadmap</Link>
                  <div className="px-4 py-2 text-xl md:text-lg text-gray-700 font-semibold">Research</div>
                  <Link href="/tech/channi-paper" className="block px-6 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>CHANNI Paper</Link>
                  <Link href="/tech/mavann-metadata-filtering" className="block px-6 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>MAVANN Paper</Link>
                  <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative group company-submenu-container">
              <button
                className="text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500 flex items-center"
                onClick={() => {
                  setIsCompanyMenuOpen(!isCompanyMenuOpen);
                }}
              >
                Company
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${isCompanyMenuOpen || 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}>
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="company-menu">
                  <Link href="/blog/introducing-cosdata" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>About Us</Link>
                  <Link href="/company/careers" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>Careers</Link>
                  <Link href="/company/contact" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>Contact Us</Link>
                  <a href="https://discord.gg/qvm8FJJHPm" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-xl md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleSubMenuLinkClick}>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                      </svg>
                      Discord
                    </span>
                  </a>
                </div>
              </div>
            </div>
            
            <Link href="/docs/api-doc" className="text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" >
              Docs
            </Link>
            
            <button onClick={openModal} className="inline-block bg-[#f23665] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#d92d5c] transition duration-300 flex items-center text-xl md:text-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              Get Early Access
            </button>
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
                onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
                className="w-full text-left text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500 flex items-center justify-between"
              >
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isProductsMenuOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/products/cosdata-hnsw" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>Cosdata HNSW</Link>
                  <Link href="/products/cosdata-serverless" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>Cosdata Serverless</Link>
                  <Link href="/products/structured-search" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>Structured Search</Link>
                </div>
              )}
            </div>
            
            <div>
              <button
                onClick={() => setIsResourcesMenuOpen(!isResourcesMenuOpen)}
                className="w-full text-left text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500 flex items-center justify-between"
              >
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isResourcesMenuOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/blog" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>Blog</Link>
                  <Link href="/resources/benchmarks" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>Benchmarks</Link>
                  <Link href="/tech/roadmap" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>Roadmap</Link>
                  <div className="text-black font-open-sans text-xl md:text-lg font-semibold leading-[30px] mt-2">Research</div>
                  <Link href="/tech/channi-paper" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500 ml-2" onClick={handleSubMenuLinkClick}>CHANNI Paper</Link>
                  <Link href="/tech/mavann-metadata-filtering" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500 ml-2" onClick={handleSubMenuLinkClick}>MAVANN Paper</Link>
                  <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      GitHub
                    </span>
                  </a>
                </div>
              )}
            </div>
            
            <div>
              <button
                onClick={() => setIsCompanyMenuOpen(!isCompanyMenuOpen)}
                className="w-full text-left text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500 flex items-center justify-between"
              >
                Company
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isCompanyMenuOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/blog/introducing-cosdata" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>About Us</Link>
                  <Link href="/company/careers" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>Careers</Link>
                  <Link href="/company/contact" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>Contact Us</Link>
                  <a href="https://discord.gg/qvm8FJJHPm" target="_blank" rel="noopener noreferrer" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500" onClick={handleSubMenuLinkClick}>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                      </svg>
                      Discord
                    </span>
                  </a>
                </div>
              )}
            </div>
            
            <Link href="/docs/api-doc" className="block text-black font-open-sans text-xl md:text-lg font-normal leading-[30px] hover:text-pink-500">
              Docs
            </Link>
            
            <button onClick={openModal} className="w-full mt-4 bg-[#f23665] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#d92d5c] transition duration-300 flex items-center justify-center text-xl md:text-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              Get Early Access
            </button>
          </div>
        </div>
      )}
      <div style={{ height: `${dynamicPadding * 2 + 20}px` }}></div> {/* Dynamic spacer */}
      <EarlyAccessModal isOpen={isModalOpen} onClose={closeModal} />

    </>
  );
}
