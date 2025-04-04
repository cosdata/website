import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { geologica, afacad } from '@/app/styles/common';

export interface PricingDetails {
  storage?: string;
  writes?: string;
  queries?: string;
  additional?: string;
}

export interface DatabasePricing {
  model?: string;
  startingPrice?: string;
  freeTier?: string;
  pricingDetails?: PricingDetails;
}

export interface CostComparisonProps {
  offerings: Array<{
    id: string;
    name: string;
    pricing?: DatabasePricing;
  }>;
}

export function CostComparison({ offerings }: CostComparisonProps) {
  const formatCurrency = (value?: string): string => {
    if (!value) return 'N/A';
    if (value.startsWith('$')) return value;
    return `$${value}`;
  };

  return (
    <Card>
      <CardHeader className={`bg-gradient-to-r from-[#0055c8]/10 to-[#0066e8]/10 ${geologica.className}`}>
        <CardTitle className="text-xl text-[#0055c8]">Pricing & Plans</CardTitle>
      </CardHeader>
      <CardContent className={`p-5 ${afacad.className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((offering) => (
            <div key={offering.id} className="bg-gray-50 p-5 rounded-lg border border-gray-100 shadow-sm">
              <h3 className={`text-lg font-medium mb-3 text-[#0055c8] ${geologica.className}`}>{offering.name}</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-medium">Pricing Model:</span> {offering.pricing?.model || 'N/A'}</p>
                <p><span className="font-medium">Starting Price:</span> {offering.pricing?.startingPrice ? formatCurrency(offering.pricing.startingPrice) : 'N/A'}</p>
                {offering.pricing?.freeTier && (
                  <p><span className="font-medium">Free Tier:</span> {offering.pricing.freeTier}</p>
                )}
                {offering.pricing?.pricingDetails && (
                  <>
                    <div className="h-px bg-gray-200 my-3"></div>
                    <p className={`font-medium mb-2 text-[#0055c8] ${geologica.className}`}>Usage Pricing:</p>
                    {offering.pricing.pricingDetails.storage && (
                      <p><span className="font-medium">Storage:</span> {offering.pricing.pricingDetails.storage}</p>
                    )}
                    {offering.pricing.pricingDetails.writes && (
                      <p><span className="font-medium">Writes:</span> {offering.pricing.pricingDetails.writes}</p>
                    )}
                    {offering.pricing.pricingDetails.queries && (
                      <p><span className="font-medium">Queries:</span> {offering.pricing.pricingDetails.queries}</p>
                    )}
                    {offering.pricing.pricingDetails.additional && (
                      <p><span className="font-medium">Additional:</span> {offering.pricing.pricingDetails.additional}</p>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>Note: Pricing may vary based on region and usage patterns. Always check the vendor's website for the most current pricing.</p>
        </div>
      </CardContent>
    </Card>
  );
} 