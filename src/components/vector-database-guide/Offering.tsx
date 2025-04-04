import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { geologica, afacad } from '@/app/styles/common';

export interface OfferingProps {
  name: string;
  overview: string;
  highlights: string[]; // Exactly 5 highlights
  benchmarkHighlights?: string[]; // Exactly 3 benchmark highlights
  benchmarkLinks?: Array<{ name: string; url: string }>;
}

export function Offering({
  name,
  overview,
  highlights,
  benchmarkHighlights,
  benchmarkLinks
}: OfferingProps) {
  return (
    <Card className="h-full">
      <CardHeader className={`bg-gradient-to-r from-[#0055c8]/90 to-[#0066e8]/90 text-white ${geologica.className}`}>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className={`p-5 ${afacad.className}`}>
        <div className="space-y-4">
          <div>
            <h3 className={`font-medium mb-2 text-[#0055c8] ${geologica.className}`}>Overview</h3>
            <p className="text-sm text-gray-700">{overview}</p>
          </div>
          
          <div>
            <h3 className={`font-medium mb-2 text-[#0055c8] ${geologica.className}`}>Key Highlights</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              {highlights.slice(0, 5).map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          
          {benchmarkHighlights && benchmarkHighlights.length > 0 && (
            <div>
              <h3 className={`font-medium mb-2 text-[#0055c8] ${geologica.className}`}>Benchmark Highlights</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {benchmarkHighlights.slice(0, 3).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
          
          {benchmarkLinks && benchmarkLinks.length > 0 && (
            <div>
              <h3 className={`font-medium mb-2 text-[#0055c8] ${geologica.className}`}>Benchmark Reports</h3>
              <ul className="list-none text-sm space-y-1">
                {benchmarkLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg 
                        className="w-3.5 h-3.5 mr-1.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 