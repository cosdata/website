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
    <section className="py-16">
      <div className={`${commonStyles.mainContainer}`}>
        <div className="text-center mb-12">
          <h2 className={`${commonStyles.sectionTitle}`}>
            Industry-Leading Performance
          </h2>
          <p className={`${commonStyles.sectionSubtitle} max-w-3xl mx-auto`}>
            Cosdata outperforms the competition with blazing-fast query speeds and superior efficiency
          </p>
        </div>

        <div className="bg-white rounded-xloverflow-hidden p-6 mb-12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className={`text-left border-b border-gray-200 ${geologica.className}`}>
                  <th className="py-4 px-4 font-semibold bg-[#0055c8] text-white">Database</th>
                  <th className="py-4 px-4 font-semibold bg-[#0055c8] text-white text-center">Indexing Time (min)</th>
                  <th className="py-4 px-4 font-semibold bg-[#0055c8] text-white text-center">Queries/Second</th>
                  <th className="py-4 px-4 font-semibold bg-[#0055c8] text-white text-center">Precision</th>
                </tr>
              </thead>
              <tbody className={afacad.className}>
                {benchmarkData.map((db, index) => (
                  <tr 
                    key={db.name} 
                    className={`border-b border-gray-100 ${db.name === "Cosdata" ? "bg-blue-50" : ""}`}
                  >
                    <td className="py-4 px-4 font-medium">
                      {db.name === "Cosdata" ? (
                        <span className="flex items-center">
                          {db.name}
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Fastest
                          </span>
                        </span>
                      ) : db.name}
                    </td>
                    <td className="py-4 px-4 text-center">{db.indexingTime}</td>
                    <td className="py-4 px-4 text-center font-semibold">
                      {db.name === "Cosdata" ? (
                        <span className="text-green-600">{db.rps}</span>
                      ) : db.rps}
                    </td>
                    <td className="py-4 px-4 text-center">{db.precision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white rounded-xl p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 text-center text-[#0055c8] ${geologica.className}`}>1,773+ QPS</h3>
            <p className={`text-gray-600 text-center text-lg ${afacad.className}`}>
              Industry-leading query performance with over 1,770 queries per second on a single node
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 text-center text-[#0055c8] ${geologica.className}`}>98% Precision</h3>
            <p className={`text-gray-600 text-center text-lg ${afacad.className}`}>
              High-quality results with improved recall and exceptional accuracy for complex queries
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 text-center text-[#0055c8] ${geologica.className}`}>30-50% Faster</h3>
            <p className={`text-gray-600 text-center text-lg ${afacad.className}`}>
              Significantly faster than competing vector databases across both indexing and query operations
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/resources/benchmarks"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-[#0055c8] hover:bg-[#004bb3] transition-colors duration-300"
          >
            View Detailed Benchmarks
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenchmarksHighlight; 