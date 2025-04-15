import { VectorBenchmarkData } from '../data/benchmarks';
import { afacad } from '@/app/styles/common';

interface BenchmarkTableProps {
  data: VectorBenchmarkData[];
  className?: string;
}

export default function BenchmarkTable({ data, className = '' }: BenchmarkTableProps) {
  // Format and round latency values
  const formattedData = data.map(db => ({
    ...db,
    formattedP50: Math.round(parseFloat(db.p50)),
    formattedP95: Math.round(parseFloat(db.p95)),
    formattedPrecision: parseFloat(db.precision).toFixed(2)
  }));

  return (
    <div className={`overflow-hidden shadow-lg border border-gray-200 ${className}`}>
      <div className="overflow-x-auto">
        <table className={`min-w-full ${afacad.className}`}>
          <thead>
            <tr>
              <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-semibold bg-[#0055c8] text-white">Vector DB</th>
              <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-semibold bg-[#0055c8] text-white">Indexing Time (m)</th>
              <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-semibold bg-[#0055c8] text-white">QPS</th>
              <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-semibold bg-[#0055c8] text-white">Precision</th>
              <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-semibold bg-[#0055c8] text-white">p50 (ms)</th>
              <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-semibold bg-[#0055c8] text-white">p95 (ms)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {formattedData.map((db, index) => (
              <tr key={index} className={index === 0 ? "bg-blue-50" : index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap font-medium text-gray-900">
                  {index === 0 ? (
                    <span className="flex items-center">
                      {db.name}
                      <span className="ml-2 inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Fastest
                      </span>
                    </span>
                  ) : db.name}
                </td>
                <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap text-gray-700">{db.indexingTime}</td>
                <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap text-gray-700 font-medium">
                  {index === 0 ? <span className="text-green-600">{db.qps}</span> : db.qps}
                </td>
                <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap text-gray-700">{db.formattedPrecision}</td>
                <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap text-gray-700">{db.formattedP50}</td>
                <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap text-gray-700">{db.formattedP95}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 