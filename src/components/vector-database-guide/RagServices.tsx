import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { RagService } from '@/data/vector-db-rag';
import { geologica, afacad } from '@/app/styles/common';

interface RagServicesProps {
  services: RagService[];
}

export function RagServices({ services }: RagServicesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service) => (
        <Card 
          key={service.id} 
          id={service.id}
          className="h-full overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <CardHeader className={`bg-gradient-to-r from-[#0055c8]/90 to-[#0066e8]/90 text-white py-3 px-4 ${geologica.className}`}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-medium">{service.name}</CardTitle>
              <a 
                href={service.website} 
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
                <p className="text-base text-gray-700">{service.overview}</p>
              </div>
              
              <div>
                <h3 className={`font-medium mb-2 text-[#0055c8] ${geologica.className}`}>Key Capabilities</h3>
                <ul className="list-disc pl-5 text-base text-gray-700 space-y-1 highlight-list">
                  {service.keyCapabilities.slice(0, 5).map((capability, index) => (
                    <li key={index} className="leading-tight !overflow-visible">
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 