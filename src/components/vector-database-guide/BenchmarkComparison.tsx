import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { geologica, afacad } from '@/app/styles/common';

export interface BenchmarkMetric {
  key: string;
  label: string;
  unit?: string;
}

export interface DatabaseBenchmarks {
  [key: string]: string | number | undefined;
}

export interface BenchmarkComparisonProps {
  metrics: BenchmarkMetric[];
  offerings: Array<{
    id: string;
    name: string;
    benchmarks?: DatabaseBenchmarks;
  }>;
}

export function BenchmarkComparison({ metrics, offerings }: BenchmarkComparisonProps) {
  const formatValue = (value: string | number | undefined, unit?: string) => {
    if (value === undefined) return 'N/A';
    return `${value}${unit ? ` ${unit}` : ''}`;
  };

  return (
    <Card>
      <CardHeader className={`bg-gradient-to-r from-[#0055c8]/10 to-[#0066e8]/10 ${geologica.className}`}>
        <CardTitle className="text-xl text-[#0055c8]">Performance Benchmarks</CardTitle>
      </CardHeader>
      <CardContent className={`p-5 ${afacad.className}`}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                {offerings.map((offering) => (
                  <th key={offering.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {offering.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {metrics.map((metric) => (
                <tr key={metric.key}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {metric.label}
                  </td>
                  {offerings.map((offering) => (
                    <td key={offering.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {formatValue(offering.benchmarks?.[metric.key], metric.unit)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>Note: Performance may vary depending on configuration, data size, and workload characteristics.</p>
        </div>
      </CardContent>
    </Card>
  );
} 