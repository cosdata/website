"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const SimpleBackground: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Don't render anything on the home page
  if (isHomePage) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 -z-20 bg-white">
      {/* Simple white background for most of the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#f5f7fa]"></div>
      
      {/* Subtle blue gradient at the bottom for the footer area */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#f5f7fa] to-[#e6f0ff]"></div>
    </div>
  );
};

export default SimpleBackground; 