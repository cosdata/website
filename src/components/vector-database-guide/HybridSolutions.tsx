import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { HybridDatabaseCategory } from '@/data/vector-db-hybrid';
import { geologica, afacad } from '@/app/styles/common';

// Badge component
const FeatureBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-md border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-base font-medium text-[#0055c8]">
    {children}
  </span>
);

interface HybridSolutionsProps {
  categories: HybridDatabaseCategory[];
}

export function HybridSolutions({ categories }: HybridSolutionsProps) {
  return (
    <div className="space-y-12">
      {/* Global navigation with categories and offerings */}
      <div className="mb-6">
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={`nav-${category.id}`}>
              <div className="flex items-center">
                <span className="text-[#0055c8] text-lg mr-2">•</span>
                <a href={`#${category.id}`} className="text-[#0055c8] text-lg font-medium hover:underline">{category.name}</a>
              </div>
              
              <ul className="pl-8 space-y-1 mt-2">
                {category.databases.map(db => (
                  <li key={`toc-${category.id}-${db.id}`} className="flex items-center">
                    <span className="text-[#0055c8] mr-2">◦</span>
                    <a href={`#${category.id}-${db.id}`} className="text-[#0055c8] hover:underline">{db.name}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories and their offerings */}
      {categories.map((category) => (
        <div key={category.id} id={category.id} className="space-y-6">
          <div>
            <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] mb-4 ${geologica.className}`}>{category.name}</h3>
            <p className={`text-lg text-gray-700 max-w-3xl leading-relaxed mb-6 ${afacad.className}`}>{category.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.databases.map((db) => (
              <Card 
                key={db.id} 
                id={`${category.id}-${db.id}`}
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
                        {db.benefits.slice(0, 5).map((benefit, index) => (
                          <li key={index} className="leading-tight !overflow-visible">
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 