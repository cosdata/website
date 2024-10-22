import React from 'react';
import { Afacad } from 'next/font/google';
import { Noto_Sans_Mono } from 'next/font/google';

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

export const metadata = {
  title: 'Cosdata Roadmap',
  description: 'Detailed roadmap and feature status for Cosdata',
};

const RoadmapPage = () => {
  return (
    <div className={`bg-white min-h-screen ${noto_sans_mono.className}`}>
      <article className="max-w-[1440px] mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#374151]">Cosdata Roadmap</h1>
          <p className={`text-gray-500 ${afacad.className} text-lg`}>Detailed roadmap and feature status for Cosdata</p>
        </header>
        
        <div className={`prose prose-lg max-w-none text-[#374151] ${afacad.className}`}>
          {/* Table of Contents */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside mb-8 text-lg">
            <li><a href="#high-level-milestones" className="text-blue-600 hover:underline">1. High-Level Milestones</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#vector-database" className="text-blue-600 hover:underline">1.1. Vector Database (Dense / Sparse Vectors with Hybrid Search)</a></li>
                <li><a href="#graph-database" className="text-blue-600 hover:underline">1.2. Graph Database Features, Knowledge Graph Integration</a></li>
                <li><a href="#cloud-services" className="text-blue-600 hover:underline">1.3. Cloud Services and Web Platform</a></li>
              </ul>
            </li>
            <li><a href="#feature-status" className="text-blue-600 hover:underline">2. Feature Status</a>
              <ul className="list-disc list-inside ml-4">
                <li><a href="#indexing-and-search" className="text-blue-600 hover:underline">2.1. Indexing and Search</a></li>
                <li><a href="#distance-metrics" className="text-blue-600 hover:underline">2.2. Distance Metrics and Quantization</a></li>
                <li><a href="#storage-and-performance" className="text-blue-600 hover:underline">2.3. Storage and Performance</a></li>
                <li><a href="#data-management" className="text-blue-600 hover:underline">2.4. Data Management and Versioning</a></li>
                <li><a href="#query-and-api" className="text-blue-600 hover:underline">2.5. Query and API</a></li>
                <li><a href="#graph-database-features" className="text-blue-600 hover:underline">2.6. Graph Database and Knowledge Graph</a></li>
                <li><a href="#cloud-integration" className="text-blue-600 hover:underline">2.7. Cloud Integration and Web Application</a></li>
                <li><a href="#integration-and-ecosystem" className="text-blue-600 hover:underline">2.8. Integration and Ecosystem</a></li>
                <li><a href="#security" className="text-blue-600 hover:underline">2.9. Security and Access Control</a></li>
                <li><a href="#ongoing-improvements" className="text-blue-600 hover:underline">2.10. Ongoing Improvements</a></li>
              </ul>
            </li>
          </ul>

          {/* High-Level Milestones */}
          <h2 id="high-level-milestones" className="text-3xl font-semibold mt-12 mb-6">1. High-Level Milestones</h2>

          {/* Vector Database */}
          <h3 id="vector-database" className="text-2xl font-semibold mt-8 mb-4">1.1. Vector Database (Dense / Sparse Vectors with Hybrid Search)</h3>
          <h4 className="text-xl font-semibold mt-6 mb-3">1.1.1. MVP/Alpha: December 15, 2024</h4>
          <ol className="list-decimal list-inside mb-6 text-lg">
            <li>Optimized HNSW (dense) and Inverted index (sparse) implementations</li>
            <li>RESTful API for core operations</li>
            <li>SIMD optimized major distance metrics and quantization</li>
            <li>Versioning & "Transaction-as-a-resource"</li>
            <li>Run basic comparison benchmarks for HNSW & Inverted index (SPLADE)</li>
          </ol>

          {/* Graph Database */}
          <h3 id="graph-database" className="text-2xl font-semibold mt-8 mb-4">1.2. Graph Database Features, Knowledge Graph Integration</h3>
          <h4 className="text-xl font-semibold mt-6 mb-3">1.2.1. MVP/Alpha: Jan 30, 2025</h4>
          <ol className="list-decimal list-inside mb-6 text-lg">
            <li>Basic graph data structures and operations</li>
            <li>Simple integration with vector search</li>
            <li>Rudimentary CosQL for graph queries</li>
          </ol>

          <h4 className="text-xl font-semibold mt-6 mb-3">1.2.2. Beta: March 15, 2025</h4>
          <ol className="list-decimal list-inside mb-6 text-lg">
            <li>Advanced graph algorithms and knowledge graph features</li>
            <li>Enhanced CosQL with graph-specific operations</li>
            <li>Basic rule evaluation engine</li>
          </ol>

          <h4 className="text-xl font-semibold mt-6 mb-3">1.2.3. RC/GA: June 15, 2025</h4>
          <ol className="list-decimal list-inside mb-6 text-lg">
            <li>Full graph database capabilities</li>
            <li>Seamless integration of graph and vector search</li>
            <li>Advanced knowledge graph operations and querying</li>
          </ol>

          {/* Cloud Services */}
          <h3 id="cloud-services" className="text-2xl font-semibold mt-8 mb-4">1.3. Cloud Services and Web Platform</h3>
          <h4 className="text-xl font-semibold mt-6 mb-3">1.3.1. MVP/Alpha: January 15, 2025</h4>
          <ol className="list-decimal list-inside mb-6 text-lg">
            <li>Basic containerization and deployment scripts</li>
            <li>Simple auto-scaling and monitoring</li>
            <li>Prototype of web-based management interface</li>
          </ol>

          <h4 className="text-xl font-semibold mt-6 mb-3">1.3.2. Beta: June 15, 2025</h4>
          <ol className="list-decimal list-inside mb-6 text-lg">
            <li>Multi-cloud support and improved resource management</li>
            <li>Enhanced monitoring and basic serverless functions</li>
            <li>Development of comprehensive web application</li>
            <li>Initial integration with major cloud ecosystems</li>
          </ol>

          <h4 className="text-xl font-semibold mt-6 mb-3">1.3.3. RC/GA: August 30, 2025</h4>
          <ol className="list-decimal list-inside mb-6 text-lg">
            <li>Fully automated deployment and scaling</li>
            <li>Production-ready web application with full feature set</li>
            <li>Comprehensive management and analytics interface</li>
            <li>High availability and redundancy features</li>
            <li>Complete integration with major cloud ecosystems</li>
          </ol>

          {/* Feature Status */}
          <h2 id="feature-status" className="text-3xl font-semibold mt-12 mb-6">2. Feature Status</h2>

          {/* Indexing and Search */}
          <h3 id="indexing-and-search" className="text-2xl font-semibold mt-8 mb-4">2.1. Indexing and Search</h3>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>HNSW indexing for dense vectors with high dimensionality support <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Inverted Index for sparse vectors (Splade & BM25), supporting very high dimensionality <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>ANN probabilistic search for Inverted Index <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Benchmarking Inverted Index against proprietary data type offerings <span className="text-yellow-600 font-semibold">[IN PROGRESS]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Optimized hybrid search algorithms <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Advanced indexing optimizations <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Complete end-to-end comparison benchmarking of HNSW & Inverted Index <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Implement re-ranker integration <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
          </ul>

          {/* Distance Metrics and Quantization */}
          <h3 id="distance-metrics" className="text-2xl font-semibold mt-8 mb-4">2.2. Distance Metrics and Quantization</h3>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>Dot product <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Cosine Similarity <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Euclidean <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Hamming <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>SIMD optimizations for cosine & dot product metrics <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Binary (base 2) quantization <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Quaternary (base 4) quantization <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Octal (base 8) quantization <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>U8 (base 256) quantization <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Sub-Byte Quantization of Inverted Index <span className="text-yellow-600 font-semibold">[IN PROGRESS]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>SIMD optimizations for all quantization methods <span className="text-yellow-600 font-semibold">[IN PROGRESS]</span> <span className="text-orange-600">[RC/GA]</span></li>
            <li>Implementing auto-configuration for optimal quantization and storage based on statistical sampling <span className="text-yellow-600 font-semibold">[IN PROGRESS]</span> <span className="text-purple-600">[BETA]</span></li>
          </ul>

          {/* Storage and Performance */}
          <h3 id="storage-and-performance" className="text-2xl font-semibold mt-8 mb-4">2.3. Storage and Performance</h3>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>Buffered IO, equivalent to memory mapped files for efficient caching <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Custom storage layer with serialization of index and corresponding file formats <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Lazy Loading of index nodes, fulfilling DiskANN requirements for low memory use <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>LRU cache for lazy loaded items <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Separation of compute & storage architecture <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Advanced caching strategies <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Distributed storage support <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
            <li>Implement advanced sharding for multi-billion scale datasets <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
            <li>Enhance high availability and redundancy features <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
          </ul>

          {/* Data Management and Versioning */}
          <h3 id="data-management" className="text-2xl font-semibold mt-8 mb-4">2.4. Data Management and Versioning</h3>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>Versioning with transaction-based historical revisions and branching <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Lazy loadable collections (Set, Map, Vec, Array, EagerLazyLoad, etc) <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Auto creation of indexes <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Advanced versioning features, like branching & related APIs <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Improve usability of versioning system <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Multi-modal data support <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
            <li>Add native support for storing documents and multi-modal data types <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
          </ul>

          {/* Query and API */}
          <h3 id="query-and-api" className="text-2xl font-semibold mt-8 mb-4">2.5. Query and API</h3>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>RESTful API (upsert, ANN, collection create, create index) <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Developing user-facing RESTful API for Inverted Index <span className="text-yellow-600 font-semibold">[IN PROGRESS]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Integrating HNSW hyperparameters API <span className="text-yellow-600 font-semibold">[IN PROGRESS]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>GraphQL API support <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
            <li>Implement metadata filtering <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-purple-600">[BETA]</span></li>
          </ul>

          {/* Graph Database and Knowledge Graph */}
          <h3 id="graph-database-features" className="text-2xl font-semibold mt-8 mb-4">2.6. Graph Database and Knowledge Graph</h3>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>Cos Query Language (CosQL) specification <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Rule, Fact, Schema parser for data definition, manipulation & querying <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Rule evaluation engine (detailed design document created) <span className="text-green-600 font-semibold">[COMPLETED]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Enhanced CosQL features <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Enhance graph database rule evaluation engine and improve performance <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Integrate LLM/model for natural language querying of knowledge graphs and relational data <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
            <li>Implement Agentic Memory capabilities <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
          </ul>

          {/* Cloud Integration and Web Application */}
          <h3 id="cloud-integration" className="text-2xl font-semibold mt-8 mb-4">2.7. Cloud Integration and Web Application</h3>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>Prototype web-based management interface <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-blue-600">[MVP/ALPHA]</span></li>
            <li>Begin development of comprehensive web application <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Implement basic serverless functions <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Integrate with major cloud ecosystems (initial) <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-purple-600">[BETA]</span></li>
            <li>Release production-ready web application <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
            <li>Implement advanced serverless functions <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
            <li>Fully integrate with major cloud ecosystems <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
            <li>Develop comprehensive analytics features in web application <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
          </ul>

          {/* Integration and Ecosystem */}
          <h3 id="integration-and-ecosystem" className="text-2xl font-semibold mt-8 mb-4">2.8. Integration and Ecosystem</h3>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>Integrate with major text and image vectorization models <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
            <li>Integrate with LangChain, LlamaIndex, and similar frameworks <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
            <li>Develop web application and cloud serverless integration with major ecosystems <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
          </ul>

          {/* Security and Access Control */}
          <h3 id="security" className="text-2xl font-semibold mt-8 mb-4">2.9. Security and Access Control</h3>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>Develop authentication and IAM user roles for filtering/joining HNSW and Inverted indexes <span className="text-red-600 font-semibold">[TODO]</span> <span className="text-orange-600">[RC/GA]</span></li>
          </ul>

          {/* Ongoing Improvements */}
          <h3 id="ongoing-improvements" className="text-2xl font-semibold mt-8 mb-4">2.10. Ongoing Improvements</h3>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>Ongoing bug fixes and performance improvements <span className="text-yellow-600 font-semibold">[IN PROGRESS]</span> <span className="text-gray-600">[ALL PHASES]</span></li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default RoadmapPage;
