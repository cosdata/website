import Image from 'next/image';
import { commonStyles } from '../styles/common';

export default function AdvancedSearchSection() {
  return (
    <div className={commonStyles.mainContainer}>
      <h1 className={commonStyles.sectionTitle}>
        Advanced Search for Superior Relevance
      </h1>
      <div className={`pt-10 flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-8 lg:px-6`}>
        <div className="w-full lg:w-1/2 space-y-6">
          <p className={commonStyles.paragraph}>
            Cosdata leverages hybrid search and knowledge graphs to deliver highly relevant, context-rich results for complex queries.
          </p>
          <ul className={`space-y-4 ${commonStyles.paragraph}`}>
            <li>
              <strong className="text-xl font-bold">
                <span className='text-[#0054C9] mr-1 text-xl'>▲</span>
                Semantic Search (Dense Vector):
              </strong>{" "}
              Using HNSW indexing, our system conducts dense vector searches to capture the semantic meaning of your query, delivering results based on context, relationships, and deeper data patterns—not just keywords.
            </li>
            <li>
              <strong className="text-xl font-bold">
                <span className='text-[#77ABFF] mr-1 text-xl'>▲</span>
                Lexical Search (Sparse Vector):
              </strong>{" "}
              We use an Inverted Index for sparse vector searches, ensuring efficient and accurate keyword matching, even in large-scale datasets—ideal for precise text queries.
            </li>
            <li>
              <strong className="text-xl font-bold">
                <span className='text-[#F23665] mr-1 text-xl'>▲</span>
                Knowledge Graph Integration:
              </strong>{" "}
              Our knowledge graph integration maps structured data to vectors, enabling a deeper understanding of entity relationships and delivering results that connect information meaningfully.
            </li>
          </ul>
        </div>

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
