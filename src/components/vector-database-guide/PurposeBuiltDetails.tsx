import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PurposeBuiltDatabase } from '@/data/vector-db-purpose-built';
import { ExternalLink } from 'lucide-react';
import { geologica, afacad } from '@/app/styles/common';

// Feature badge component
const FeatureBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-md border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-base font-medium text-[#0055c8]">
    {children}
  </span>
);

interface PurposeBuiltDetailsProps {
  databases: PurposeBuiltDatabase[];
}

export function PurposeBuiltDetails({ databases }: PurposeBuiltDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {databases.map((db) => (
        <Card 
          key={db.id} 
          id={db.id}
          className="h-full overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <CardHeader className={`bg-gradient-to-r from-[#0055c8]/90 to-[#0066e8]/90 text-white py-3 px-4 ${geologica.className}`}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-medium">{db.name}</CardTitle>
              <a 
                href={db.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-gray-200 hover:underline flex items-center gap-1"
              >
                Website <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </CardHeader>
          
          <CardContent className={`p-5 ${afacad.className}`}>
            <div className="space-y-4">
              <div>
                <h3 className={`font-medium mb-2 text-[#0055c8] ${geologica.className}`}>Overview</h3>
                <p className="text-base text-gray-700">{db.overview}</p>
              </div>
              
              <div>
                <h3 className={`font-medium mb-2 text-[#0055c8] ${geologica.className}`}>Key Highlights</h3>
                <ul className="list-disc pl-5 text-base text-gray-700 space-y-1 highlight-list">
                  {db.highlights.slice(0, 5).map((highlight, index) => (
                    <li key={index} className="leading-tight !overflow-visible">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className={`font-medium mb-2 text-[#0055c8] ${geologica.className}`}>Features</h3>
                <div className="flex flex-wrap gap-1.5">
                  {db.features.metadataFilters && <FeatureBadge>Metadata Filters</FeatureBadge>}
                  {db.features.multiVector && <FeatureBadge>Multi-Vector</FeatureBadge>}
                  {db.features.hybridSearch && <FeatureBadge>Hybrid</FeatureBadge>}
                  {db.features.sparseVectors && <FeatureBadge>Sparse</FeatureBadge>}
                  {db.features.fullTextSearch && <FeatureBadge>Full-Text</FeatureBadge>}
                  {db.features.diskIndex && <FeatureBadge>Disk Index</FeatureBadge>}
                  {db.features.quantization && <FeatureBadge>Quantization</FeatureBadge>}
                </div>
              </div>
              
              {(db.benchmarkLinks?.firstParty || db.benchmarkLinks?.thirdParty) && (
                <div>
                  <h3 className={`font-medium mb-2 text-[#0055c8] ${geologica.className}`}>Benchmark Reports</h3>
                  <ul className="list-none text-base space-y-1">
                    {db.benchmarkLinks.firstParty && db.benchmarkLinks.firstParty.map((link, index) => (
                      <li key={`first-party-${index}`}>
                        <a 
                          href={link} 
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
                          Company Benchmark
                        </a>
                      </li>
                    ))}
                    {db.benchmarkLinks.thirdParty && db.benchmarkLinks.thirdParty.map((link, index) => (
                      <li key={`third-party-${index}`}>
                        <a 
                          href={link} 
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
                          Independent Benchmark
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 