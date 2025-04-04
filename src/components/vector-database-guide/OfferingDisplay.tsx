import React from 'react';
import { Offering, OfferingProps } from './Offering';
import { FeatureComparison, FeatureDefinition } from './FeatureComparison';
import { BenchmarkComparison, BenchmarkMetric } from './BenchmarkComparison';
import { CostComparison } from './CostComparison';
import { geologica, afacad } from '@/app/styles/common';

export interface OfferingData {
  id: string;
  name: string;
  overview: string;
  highlights?: string[]; // Exactly 5 highlights
  pros?: string[]; // For backward compatibility
  cons?: string[]; // For backward compatibility
  bestFor?: string[]; // For backward compatibility
  benchmarkHighlights?: string[]; // Exactly 3 benchmark highlights
  benchmarkLinks?: Array<{ name: string; url: string }>;
  features: {
    [key: string]: boolean | string[];
  };
  benchmarks?: {
    [key: string]: string | number;
  };
  pricing?: {
    model?: string;
    startingPrice?: string;
    freeTier?: string;
    pricingDetails?: {
      storage?: string;
      writes?: string;
      queries?: string;
      additional?: string;
    };
  };
}

export interface OfferingDisplayProps {
  title: string;
  description?: string;
  offerings: OfferingData[];
  featureDefinitions: FeatureDefinition[];
  benchmarkMetrics?: BenchmarkMetric[];
  showCostComparison?: boolean;
}

// Helper function to convert old format to new format
const getHighlights = (offering: OfferingData): string[] => {
  // If highlights are already provided, use them
  if (offering.highlights && offering.highlights.length > 0) {
    return offering.highlights.slice(0, 5);
  }
  
  // Otherwise, combine pros, cons, and bestFor into highlights
  const combinedHighlights: string[] = [];
  
  // Add pros first
  if (offering.pros) {
    combinedHighlights.push(...offering.pros);
  }
  
  // Add cons next
  if (offering.cons) {
    combinedHighlights.push(...offering.cons);
  }
  
  // Add bestFor last
  if (offering.bestFor) {
    combinedHighlights.push(...offering.bestFor);
  }
  
  // Return the first 5 (or fewer if not enough)
  return combinedHighlights.slice(0, 5);
};

export function OfferingDisplay({
  title,
  description,
  offerings,
  featureDefinitions,
  benchmarkMetrics,
  showCostComparison = false
}: OfferingDisplayProps) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className={`text-2xl sm:text-3xl font-bold mb-4 text-[#0055c8] ${geologica.className}`}>{title}</h2>
        {description && <p className={`text-lg text-gray-700 mb-6 ${afacad.className}`}>{description}</p>}
      </div>

      <div>
        <h3 className={`text-xl sm:text-2xl font-semibold mb-6 text-[#0055c8] ${geologica.className}`}>Database Overviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((offering) => (
            <Offering
              key={offering.id}
              name={offering.name}
              overview={offering.overview}
              highlights={getHighlights(offering)}
              benchmarkHighlights={offering.benchmarkHighlights}
              benchmarkLinks={offering.benchmarkLinks}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className={`text-xl sm:text-2xl font-semibold mb-6 text-[#0055c8] ${geologica.className}`}>Feature Comparison</h3>
        <FeatureComparison
          features={featureDefinitions}
          offerings={offerings.map(offering => ({
            id: offering.id,
            name: offering.name,
            features: offering.features
          }))}
        />
      </div>

      {benchmarkMetrics && benchmarkMetrics.length > 0 && (
        <div>
          <h3 className={`text-xl sm:text-2xl font-semibold mb-6 text-[#0055c8] ${geologica.className}`}>Benchmark Comparison</h3>
          <BenchmarkComparison
            metrics={benchmarkMetrics}
            offerings={offerings.map(offering => ({
              id: offering.id,
              name: offering.name,
              benchmarks: offering.benchmarks
            }))}
          />
        </div>
      )}

      {showCostComparison && (
        <div>
          <h3 className={`text-xl sm:text-2xl font-semibold mb-6 text-[#0055c8] ${geologica.className}`}>Pricing Comparison</h3>
          <CostComparison
            offerings={offerings.map(offering => ({
              id: offering.id,
              name: offering.name,
              pricing: offering.pricing
            }))}
          />
        </div>
      )}
    </div>
  );
} 