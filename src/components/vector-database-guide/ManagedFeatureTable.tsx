import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ManagedDatabase } from '@/data/vector-db-managed';
import { Check, X, HelpCircle, Info } from 'lucide-react';
import { geologica, afacad } from '@/app/styles/common';

interface ManagedFeatureTableProps {
  databases: ManagedDatabase[];
  features: Array<{ key: string; label: string }>;
}

export function ManagedFeatureTable({ databases, features }: ManagedFeatureTableProps) {
  // Feature descriptions for tooltips
  const featureDescriptions = {
    filters: "Ability to filter search results based on metadata attributes",
    multiVector: "Support for multiple vectors per document or entity",
    hybridSearch: "Combines vector search with keyword or other search methods",
    sparse: "Support for sparse vector representations",
    fullText: "Traditional text search capabilities alongside vector search",
    diskIndex: "Ability to store indexes on disk rather than only in memory",
    quantization: "Vector compression technique to reduce memory usage",
    socII: "SOC II compliance certification for security and data protection",
    hipaa: "HIPAA compliance for healthcare data protection",
    selfServe: "Self-service platform for immediate account setup",
    freeTier: "Offers a free usage tier with limited resources"
  };
  
  // Create a tooltip component for feature descriptions
  const FeatureLabel = ({ label, featureKey }: { label: string; featureKey: string }) => (
    <div className={`flex items-center justify-center gap-1 group relative ${geologica.className}`}>
      <span className="text-base">{label}</span>
      <HelpCircle className="h-4 w-4 text-white cursor-help" />
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white shadow-lg rounded-md p-4 text-base z-10 hidden group-hover:block">
        <p className="text-base text-gray-700">{featureDescriptions[featureKey as keyof typeof featureDescriptions] || `Information about ${label}`}</p>
      </div>
    </div>
  );

  return (
    <div className={`overflow-hidden shadow-lg border border-gray-200 ${afacad.className}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className={geologica.className}>
            <tr>
              <th className="px-6 py-4 text-left text-base sm:text-lg font-[500] bg-[#0055c8] text-white border-b border-r border-blue-700 sticky left-0 z-10">
                Database
              </th>
              {features.map((feature) => (
                <th key={feature.key} className="px-4 py-4 text-center text-base sm:text-lg font-[500] bg-[#0055c8] text-white border-b border-r border-blue-700 min-w-[120px]">
                  <FeatureLabel label={feature.label} featureKey={feature.key} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {databases.map((db, idx) => (
              <tr key={db.id} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 border-r border-gray-200 sticky left-0 bg-inherit">
                  <div className={`font-[500] ${geologica.className}`}>{db.name}</div>
                </td>
                {features.map((feature) => (
                  <td key={feature.key} className="px-6 py-4 whitespace-nowrap text-base text-gray-500 text-center border-r border-gray-200">
                    {db.features[feature.key] === true ? (
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    ) : db.features[feature.key] === false ? (
                      <X className="h-6 w-6 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-gray-400 text-base">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className={`p-5 bg-gray-50 text-base text-gray-600 flex items-center gap-6 border-t border-gray-200 ${geologica.className}`}>
        <div className="flex items-center gap-2">
          <Info className="h-5 w-5 text-[#0055c8]" />
          <span className="font-[500] text-base">Feature comparison across managed cloud databases</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-base">Supported</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="h-5 w-5 text-red-400" />
            <span className="text-base">Not supported</span>
          </div>
        </div>
      </div>
    </div>
  );
} 