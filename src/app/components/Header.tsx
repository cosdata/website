"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    router.push('/signin');
  };

  const handleSignupClick = () => {
    router.push('/signup');
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/" ><div className='w-32 h-8 relative'><Image src="/images/logo.webp" alt='logo' fill /></div> </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">

            <Link href="#" className="text-black font-open-sans text-[14px] font-normal leading-[30px] hover:text-pink-500">Technology</Link>
            <Link href="#" className="text-black font-open-sans text-[14px] font-normal leading-[30px] hover:text-pink-500">Products</Link>
            <Link href="#" className="text-black font-open-sans text-[14px] font-normal leading-[30px] hover:text-pink-500">Industries</Link>
            <Link href="#" className="text-black font-open-sans text-[14px] font-normal leading-[30px] hover:text-pink-500">Resources</Link>
            <Link href="#" className="text-black font-open-sans text-[14px] font-normal leading-[30px] hover:text-pink-500">About</Link>
            <button onClick={handleSignupClick} className="bg-teal-300 text-[rgb(0,0,0)] font-open-sans text-[15px] font-light leading-[27px] px-6 py-2 rounded-sm duration-300  border-teal-300 border-2 hover:bg-white">Sign up</button>
            <button onClick={handleLoginClick} className="bg-[#f23665] text-[rgb(255,255,255)] font-open-sans text-[15px] font-light leading-[22.5px] px-4 py-2 rounded-sm  duration-300  border-[#f23665] border-2 hover:bg-white hover:text-black">Login</button>
            <Link href="#" className="text-black font-open-sans text-[14px] font-normal leading-[30px] hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </Link>
          </nav>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleDrawer} className="text-gray-800 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>


      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link href="#" className="block text-black font-open-sans text-[14px] font-normal leading-[30px] hover:text-pink-500">Technology</Link>
            <Link href="#" className="block text-black font-open-sans text-[14px] font-normal leading-[30px] hover:text-pink-500">Products</Link>
            <Link href="#" className="block text-black font-open-sans text-[14px] font-normal leading-[30px] hover:text-pink-500">Industries</Link>
            <Link href="#" className="block text-black font-open-sans text-[14px] font-normal leading-[30px] hover:text-pink-500">Resources</Link>
            <Link href="#" className="block text-black font-open-sans text-[14px] font-normal leading-[30px] hover:text-pink-500">About</Link>
            <button onClick={handleSignupClick} className=" block bg-teal-300 text-[rgb(0,0,0)] font-open-sans text-[15px] font-light leading-[27px] px-6 py-2 rounded-sm duration-300  border-blue-100 border-2 hover:bg-white">Sign up</button>
            <button onClick={handleLoginClick} className="block bg-pink-500 text-[rgb(255,255,255)] font-open-sans text-[15px] font-light leading-[22.5px] px-4 py-2 rounded-sm  duration-300  border-pink-500 border-2 hover:bg-white hover:text-black">Login</button>
          </div>
        </div>
      )}
    </div>
  );
}
