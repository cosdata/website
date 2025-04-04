import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

export interface FeatureDefinition {
  key: string;
  label: string;
}

export interface DatabaseFeatures {
  [key: string]: boolean | string[] | undefined;
}

export interface FeatureComparisonProps {
  features: FeatureDefinition[];
  offerings: Array<{
    id: string;
    name: string;
    features: DatabaseFeatures;
  }>;
}

export function FeatureComparison({ features, offerings }: FeatureComparisonProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                {offerings.map((offering) => (
                  <th key={offering.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {offering.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {features.map((feature) => (
                <tr key={feature.key}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {feature.label}
                  </td>
                  {offerings.map((offering) => (
                    <td key={offering.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {typeof offering.features[feature.key] === 'boolean' ? (
                        offering.features[feature.key] ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )
                      ) : (
                        offering.features[feature.key] || 'N/A'
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
} 