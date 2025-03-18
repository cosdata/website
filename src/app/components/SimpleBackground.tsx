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
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#f8f8f8]"></div>
      
      {/* Subtle gray gradient at the bottom for the footer area - changed from blue to neutral */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#f8f8f8] to-[#f1f1f1]"></div>
    </div>
  );
};

export default SimpleBackground; 