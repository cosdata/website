import Image from 'next/image';

export default function AdvancedSearchSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mb-20">
      <h1 className="text-[#0055c8] text-4xl font-bold mb-12 text-center">
        Advanced Search for Superior Relevance
      </h1>
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-8 lg:px-6">
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-[#374151] text-lg leading-relaxed">
            Cosdata leverages hybrid search and knowledge graphs to deliver highly relevant, context-rich results for complex queries.
          </p>
          <ul className="space-y-4 text-[#374151]">
            <li>
              <strong className=" text-lg font-bold">
                <span className='text-[#0054C9] mr-1'>▲</span>
                Semantic Search (Dense Vector):
              </strong>{" "}
              Using HNSW indexing, our system conducts dense vector searches to capture the semantic meaning of your query, delivering results based on context, relationships, and deeper data patterns—not just keywords.
            </li>
            <li>
              <strong className=" text-lg font-bold">
                <span className='text-[#77ABFF] mr-1'>▲</span>
                Lexical Search (Sparse Vector):
              </strong>{" "}
              We use an Inverted Index for sparse vector searches, ensuring efficient and accurate keyword matching, even in large-scale datasets—ideal for precise text queries.
            </li>
            <li>
              <strong className=" text-lg font-bold">
                <span className='text-[#F23665] mr-1'>▲</span>
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
