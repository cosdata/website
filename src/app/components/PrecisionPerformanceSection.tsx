import Image from "next/image";
import { Afacad } from "next/font/google";
import { Noto_Sans_Mono } from "next/font/google";

const afacad = Afacad({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const noto_sans_mono = Noto_Sans_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PrecisionPerformanceSection() {
  const items = [
    {
      title: "Effortless Management",
      points: [
        "RESTful APIs: Easily manage all database functions through intuitive HTTP interfaces for seamless interaction.",
        "Client SDKs: Quickly integrate with your preferred programming language using SDKs available across multiple platforms.",
      ],
      image: "/svgs/management.svg",
    },
    {
      title: "Optimized Indexing",
      points: [
        "Dense Vector Index: Achieve high-efficiency indexing using our optimized HNSW algorithm for precise search results.",
        "Sparse Vector Index: Designed for SPLADE-generated sparse vectors, our system outperforms traditional BM25 indices for more accurate indexing.",
      ],
      image: "/svgs/indexing.svg",
    },
    {
      title: "Flexible Hyperparameter Control",
      points: [
        "Auto-configuration: Automatically fine-tune system parameters with insights-driven setup for optimal performance without manual effort.",
        "Manual Precision: Gain full control by customizing indexing and querying parameters for specialized use cases and performance needs.",
      ],
      image: "/svgs/configure.svg",
    },
  ];

  return (
    <section
      className={`mt-[50px] sm:mt-[80px] md:mt-[90px] lg:mt-[100px] xl:mt-[140px] 2xl:mt-[180px] pb-[0px] lg:pb-[60px] relative bg-[#e5f4ff] transform -skew-y-6 origin-top-left ${noto_sans_mono.className}`}
    >
      <div className="relative bg-transparent transform skew-y-6 origin-top-left mb-0">
        <div className="container mx-auto px-4 max-w-[1440px] relative z-10 py-[40px] 2xl:py-[80px]">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4 text-[#0055c8]">
            Precision Performance, Effortless Integration
          </h2>
          <p
            className={`sm:text-xl md:text-2xl text-center text-[#374151] mb-20 ${afacad.className}`}
          >
            Discover how our intuitive and tailored solutions can enhance your
            data management experience.
          </p>

          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-10 md:mb-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                <h3 className="text-xl sm:text-3xl font-semibold mb-4 text-[#0055c8]">
                  {item.title}
                </h3>
                {item.points.map((point, pointIndex) => {
                  const [boldText, ...rest] = point.split(":");
                  return (
                    <p key={pointIndex} className={`text-lg sm:text-xl md:text-xl text-[#374151] mb-2 ${afacad.className}`}>
                      <span className="font-bold">{boldText}:</span>
                      <span>{rest.join(":")}</span>
                    </p>
                  );
                })}
                <a
                  href="/blog/introducing-cosdata"
                  className={`text-lg sm:text-xl md:text-xl text-blue-600 text-sm font-semibold hover:underline mt-4 inline-flex items-center ${afacad.className}`}
                >
                  Learn more
                  <span className="ml-2">→</span>
                </a>{" "}
              </div>
              <div className="md:w-1/2 px-4 flex justify-center items-center">
                <div className="w-64 h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={256}
                    height={256}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
