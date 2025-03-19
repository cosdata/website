import Link from 'next/link';
import Image from 'next/image';
import { commonStyles, afacad, geologica } from '../../styles/common';

const BenchmarksHighlight = () => {
  // Benchmark data for display
  const benchmarkData = [
    { name: "Cosdata", indexingTime: "14.98", rps: "1773", precision: ".98" },
    { name: "Qdrant", indexingTime: "24.43", rps: "1238", precision: ".99" },
    { name: "Weaviate", indexingTime: "13.94", rps: "1142", precision: ".97" },
    { name: "Elastic Search", indexingTime: "83.72", rps: "716", precision: ".98" },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className={`${commonStyles.mainContainer}`}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`${commonStyles.sectionTitle} mb-4 sm:mb-6`}>
            Industry-Leading Performance
          </h2>
          <p className={`${commonStyles.sectionSubtitle} max-w-3xl mx-auto`}>
            Cosdata outperforms the competition with blazing-fast query speeds and superior efficiency
          </p>
        </div>

        <div className="bg-white rounded-xl overflow-hidden p-1 sm:p-2 mb-8 sm:mb-12">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className={`text-left border-b border-gray-200 ${geologica.className}`}>
                  <th className="py-3 sm:py-4 px-4 sm:px-6 font-semibold bg-[#0055c8] text-white text-sm sm:text-base">Database</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6 font-semibold bg-[#0055c8] text-white text-sm sm:text-base">Indexing Time (m)</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6 font-semibold bg-[#0055c8] text-white text-sm sm:text-base">RPS</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6 font-semibold bg-[#0055c8] text-white text-sm sm:text-base">Precision</th>
                </tr>
              </thead>
              <tbody className={`${afacad.className} divide-y divide-gray-200`}>
                {benchmarkData.map((db, index) => (
                  <tr 
                    key={db.name} 
                    className={index === 0 ? "bg-blue-50" : index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-3 sm:py-4 px-4 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                      {db.name === "Cosdata" ? (
                        <span className="flex items-center">
                          {db.name}
                          <span className="ml-1 sm:ml-2 inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Fastest
                          </span>
                        </span>
                      ) : db.name}
                    </td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-gray-700 whitespace-nowrap">{db.indexingTime}</td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                      {db.name === "Cosdata" ? (
                        <span className="text-green-600">{db.rps}</span>
                      ) : db.rps}
                    </td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-gray-700 whitespace-nowrap">{db.precision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-10">
          <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center border border-gray-200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center text-[#0055c8] ${geologica.className}`}>1,773+ QPS</h3>
            <p className={`text-gray-600 text-center text-base sm:text-lg ${afacad.className}`}>
              Industry-leading query performance with over 1,770 queries per second on a single node
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center border border-gray-200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center text-[#0055c8] ${geologica.className}`}>98% Precision</h3>
            <p className={`text-gray-600 text-center text-base sm:text-lg ${afacad.className}`}>
              High-quality results with improved recall and exceptional accuracy for complex queries
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center border border-gray-200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center text-[#0055c8] ${geologica.className}`}>30-50% Faster</h3>
            <p className={`text-gray-600 text-center text-base sm:text-lg ${afacad.className}`}>
              Significantly faster than competing vector databases across both indexing and query operations
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/resources/benchmarks"
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-[#0055c8] hover:bg-[#004bb3] transition-colors duration-300"
          >
            View Detailed Benchmarks
            <svg className="ml-1.5 sm:ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenchmarksHighlight; 