import Image from 'next/image';
import GradientBackground from "./GradientBackground"
export default function ElevateExperienceSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mb-20">
      <h1 className="text-[#0055c8] text-4xl font-bold mb-12 text-center">
        Advanced Search for Superior Relevance
      </h1>
      <div className="flex flex-col lg:flex-row-reverse items-start justify-between gap-8 lg:px-6">
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-black text-lg leading-relaxed">
            Cosdata leverages hybrid search and knowledge graphs to deliver highly relevant, context-rich results for complex queries.
          </p>
          <ul className="space-y-4 text-black">
            <li>
              <strong className="text-[#0054C9] text-lg font-bold">
                Semantic Search (Dense Vector):
              </strong>{" "}
              Using HNSW indexing, our system conducts dense vector searches to capture the semantic meaning of your query, delivering results based on context, relationships, and deeper data patterns—not just keywords.    </li>
            <li>
              <strong className="text-[#77ABFF] text-lg font-bold">
                Lexical Search (Sparse Vector):
              </strong>{" "}
              We use an Inverted Index for sparse vector searches, ensuring efficient and accurate keyword matching, even in large-scale datasets—ideal for precise text queries.
</li>
            <li>
              <strong className="text-[#F23665] text-lg font-bold">
                Knowledge Graph Integration:
              </strong>{" "}
              Our knowledge graph integration maps structured data to vectors, enabling a deeper understanding of entity relationships and delivering results that connect information meaningfully.
              </li>
              </ul>
        </div>
        <div className="relative w-full lg:w-1/2 h-[350px] lg:h-[450px] flex items-center justify-center">
          <Image
            src={"/svgs/search_graphic_2.svg"}
            alt="Advanced search illustration"
            fill
            className="object-contain z-10"
          />
        </div>
      </div>
    </div>
  );
}
