import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { geologica, afacad } from '@/app/styles/common';

interface OverviewProps {
  title: string;
  description: string;
}

export function Overview({ title, description }: OverviewProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border border-gray-200 shadow-lg overflow-hidden">
        <div className={`bg-gradient-to-r from-[#0055c8] to-[#0066e8] py-6 px-8 ${geologica.className}`}>
          <h3 className="text-xl md:text-2xl font-[500] text-white">{title}</h3>
        </div>
        <CardContent className={`p-8 bg-white ${afacad.className}`}>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                <svg className="w-5 h-5 text-[#0055c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className={`font-[500] text-gray-900 ${geologica.className}`}>Unbiased Comparisons</h4>
                <p className="text-sm text-gray-600 mt-1">All benchmarks and feature comparisons are based on actual research and testing.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                <svg className="w-5 h-5 text-[#0055c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className={`font-[500] text-gray-900 ${geologica.className}`}>Decision Guidance</h4>
                <p className="text-sm text-gray-600 mt-1">Simple questions to help you determine the best vector database for your needs.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                <svg className="w-5 h-5 text-[#0055c8]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div>
                <h4 className={`font-[500] text-gray-900 ${geologica.className}`}>Comprehensive</h4>
                <p className="text-sm text-gray-600 mt-1">Covering all major vector database types from self-hosted to RAG-as-a-Service.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 