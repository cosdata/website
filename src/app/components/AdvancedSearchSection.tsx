import Image from 'next/image';
import { Afacad } from 'next/font/google';
import { Noto_Sans_Mono } from 'next/font/google';
import { Lato } from 'next/font/google';


const afacad = Afacad({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const noto_sans_mono = Noto_Sans_Mono({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export default function AdvancedSearchSection() {
  return (
    <div className={`max-w-[1400px] mx-auto px-4 sm:px-8 py-8 md:py-12 ${noto_sans_mono.className}`}>
      <h1 className="text-[#0055c8] text-3xl sm:text-[44px] font-bold mb-12 text-center">
        Advanced Search for Superior Relevance
      </h1>
      <div className={`pt-10 flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-8 lg:px-6 ${afacad.className}`}>
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-[#374151] text-xl leading-relaxed">
            Cosdata leverages hybrid search and knowledge graphs to deliver highly relevant, context-rich results for complex queries.
          </p>
          <ul className="space-y-4 text-[#374151] text-xl">
            <li>
              <strong className=" text-xl font-bold">
                <span className='text-[#0054C9] mr-1 text-xl'>▲</span>
                Semantic Search (Dense Vector):
              </strong>{" "}
              Using HNSW indexing, our system conducts dense vector searches to capture the semantic meaning of your query, delivering results based on context, relationships, and deeper data patterns—not just keywords.
            </li>
            <li>
              <strong className=" text-xl font-bold">
                <span className='text-[#77ABFF] mr-1 text-xl'>▲</span>
                Lexical Search (Sparse Vector):
              </strong>{" "}
              We use an Inverted Index for sparse vector searches, ensuring efficient and accurate keyword matching, even in large-scale datasets—ideal for precise text queries.
            </li>
            <li>
              <strong className=" text-xl font-bold">
                <span className='text-[#F23665] mr-1 text-xl'>▲</span>
                Knowledge Graph Integration:
              </strong>{" "}
              Our knowledge graph integration maps structured data to vectors, enabling a deeper understanding of entity relationships and delivering results that connect information meaningfully.
            </li>
          </ul>
        </div>

        {/* Image section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-[380px] h-[350px] lg:h-[350px]">
            <Image
              src={"/svgs/results.svg"}
              alt="Advanced search illustration"
              fill
              className="object-contain z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
