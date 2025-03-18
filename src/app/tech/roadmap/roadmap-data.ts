// Timeline Items
export interface TimelineItem {
  date: string;
  title: string;
  content: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    date: "December 15, 2024",
    title: "MVP/Alpha: Vector Database",
    content: [
      "Optimized HNSW (dense) and Inverted index (sparse) implementations",
      "RESTful API for core operations",
      "SIMD optimized major distance metrics and quantization",
      "Versioning & \"Transaction-as-a-resource\"",
      "Run basic comparison benchmarks for HNSW & Inverted index (SPLADE)"
    ]
  },
  {
    date: "January 30, 2025",
    title: "MVP/Alpha: Graph Database",
    content: [
      "Basic graph data structures and operations",
      "Simple integration with vector search",
      "Rudimentary CosQL for graph queries"
    ]
  },
  {
    date: "March 15, 2025",
    title: "Beta: Graph Database",
    content: [
      "Advanced graph algorithms and knowledge graph features",
      "Enhanced CosQL with graph-specific operations",
      "Basic rule evaluation engine"
    ]
  },
  {
    date: "June 15, 2025",
    title: "RC/GA: Graph Database",
    content: [
      "Full graph database capabilities",
      "Seamless integration of graph and vector search",
      "Advanced knowledge graph operations and querying"
    ]
  },
  {
    date: "June 15, 2025",
    title: "Beta: Cloud Services",
    content: [
      "Multi-cloud support and improved resource management",
      "Enhanced monitoring and basic serverless functions",
      "Development of comprehensive web application",
      "Initial integration with major cloud ecosystems"
    ]
  },
  {
    date: "August 30, 2025",
    title: "RC/GA: Cloud Services",
    content: [
      "Fully automated deployment and scaling",
      "Production-ready web application with full feature set",
      "Comprehensive management and analytics interface",
      "High availability and redundancy features",
      "Complete integration with major cloud ecosystems"
    ]
  }
];

// Feature Sections
export type StatusType = 'COMPLETED' | 'IN PROGRESS' | 'TODO';
export type PhaseType = 'MVP/ALPHA' | 'BETA' | 'RC/GA' | 'ALL PHASES';

export interface Feature {
  text: string;
  status: StatusType;
  phase: PhaseType;
}

export interface FeatureSection {
  title: string;
  id: string;
  features: Feature[];
}

export const featureSections: FeatureSection[] = [
  {
    title: "Indexing and Search",
    id: "indexing-and-search",
    features: [
      { text: "HNSW indexing for dense vectors with high dimensionality support", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Inverted Index for sparse vectors (Splade & BM25), supporting very high dimensionality", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "ANN probabilistic search for Inverted Index", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Benchmarking Inverted Index against proprietary data type offerings", status: "IN PROGRESS", phase: "BETA" },
      { text: "Optimized hybrid search algorithms", status: "TODO", phase: "MVP/ALPHA" },
      { text: "Advanced indexing optimizations", status: "TODO", phase: "BETA" },
      { text: "Complete end-to-end comparison benchmarking of HNSW & Inverted Index", status: "TODO", phase: "BETA" },
      { text: "Implement re-ranker integration", status: "TODO", phase: "RC/GA" }
    ]
  },
  {
    title: "Distance Metrics and Quantization",
    id: "distance-metrics",
    features: [
      { text: "Dot product", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Cosine Similarity", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Euclidean", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Hamming", status: "TODO", phase: "MVP/ALPHA" },
      { text: "SIMD optimizations for cosine & dot product metrics", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Binary (base 2) quantization", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Quaternary (base 4) quantization", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Octal (base 8) quantization", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "U8 (base 256) quantization", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Sub-Byte Quantization of Inverted Index", status: "IN PROGRESS", phase: "BETA" },
      { text: "SIMD optimizations for all quantization methods", status: "IN PROGRESS", phase: "RC/GA" },
      { text: "Implementing auto-configuration for optimal quantization and storage based on statistical sampling", status: "IN PROGRESS", phase: "BETA" }
    ]
  },
  {
    title: "Storage and Performance",
    id: "storage-and-performance",
    features: [
      { text: "Buffered IO, equivalent to memory mapped files for efficient caching", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Custom storage layer with serialization of index and corresponding file formats", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Lazy Loading of index nodes, fulfilling DiskANN requirements for low memory use", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "LRU cache for lazy loaded items", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Separation of compute & storage architecture", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Advanced caching strategies", status: "TODO", phase: "BETA" },
      { text: "Distributed storage support", status: "TODO", phase: "RC/GA" },
      { text: "Implement advanced sharding for multi-billion scale datasets", status: "TODO", phase: "RC/GA" },
      { text: "Enhance high availability and redundancy features", status: "TODO", phase: "RC/GA" }
    ]
  },
  {
    title: "Data Management and Versioning",
    id: "data-management",
    features: [
      { text: "Versioning with transaction-based historical revisions and branching", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Lazy loadable collections (Set, Map, Vec, Array, EagerLazyLoad, etc)", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Auto creation of indexes", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Advanced versioning features, like branching & related APIs", status: "TODO", phase: "BETA" },
      { text: "Improve usability of versioning system", status: "TODO", phase: "BETA" },
      { text: "Multi-modal data support", status: "TODO", phase: "RC/GA" },
      { text: "Add native support for storing documents and multi-modal data types", status: "TODO", phase: "RC/GA" }
    ]
  },
  {
    title: "Query and API",
    id: "query-and-api",
    features: [
      { text: "RESTful API (upsert, ANN, collection create, create index)", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Developing user-facing RESTful API for Inverted Index", status: "IN PROGRESS", phase: "BETA" },
      { text: "Integrating HNSW hyperparameters API", status: "IN PROGRESS", phase: "BETA" },
      { text: "GraphQL API support", status: "TODO", phase: "RC/GA" },
      { text: "Implement metadata filtering", status: "TODO", phase: "BETA" }
    ]
  },
  {
    title: "Graph Database and Knowledge Graph",
    id: "graph-database-features",
    features: [
      { text: "Cos Query Language (CosQL) specification", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Rule, Fact, Schema parser for data definition, manipulation & querying", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Rule evaluation engine (detailed design document created)", status: "COMPLETED", phase: "MVP/ALPHA" },
      { text: "Enhanced CosQL features", status: "TODO", phase: "BETA" },
      { text: "Enhance graph database rule evaluation engine and improve performance", status: "TODO", phase: "BETA" },
      { text: "Integrate LLM/model for natural language querying of knowledge graphs and relational data", status: "TODO", phase: "RC/GA" },
      { text: "Implement Agentic Memory capabilities", status: "TODO", phase: "RC/GA" }
    ]
  },
  {
    title: "Cloud Integration and Web Application",
    id: "cloud-integration",
    features: [
      { text: "Prototype web-based management interface", status: "TODO", phase: "MVP/ALPHA" },
      { text: "Begin development of comprehensive web application", status: "TODO", phase: "BETA" },
      { text: "Implement basic serverless functions", status: "TODO", phase: "BETA" },
      { text: "Integrate with major cloud ecosystems (initial)", status: "TODO", phase: "BETA" },
      { text: "Release production-ready web application", status: "TODO", phase: "RC/GA" },
      { text: "Implement advanced serverless functions", status: "TODO", phase: "RC/GA" },
      { text: "Fully integrate with major cloud ecosystems", status: "TODO", phase: "RC/GA" },
      { text: "Develop comprehensive analytics features in web application", status: "TODO", phase: "RC/GA" }
    ]
  },
  {
    title: "Integration and Ecosystem",
    id: "integration-and-ecosystem",
    features: [
      { text: "Integrate with major text and image vectorization models", status: "TODO", phase: "RC/GA" },
      { text: "Integrate with LangChain, LlamaIndex, and similar frameworks", status: "TODO", phase: "RC/GA" },
      { text: "Develop web application and cloud serverless integration with major ecosystems", status: "TODO", phase: "RC/GA" }
    ]
  },
  {
    title: "Security and Access Control",
    id: "security",
    features: [
      { text: "Develop authentication and IAM user roles for filtering/joining HNSW and Inverted indexes", status: "TODO", phase: "RC/GA" }
    ]
  },
  {
    title: "Ongoing Improvements",
    id: "ongoing-improvements",
    features: [
      { text: "Ongoing bug fixes and performance improvements", status: "IN PROGRESS", phase: "ALL PHASES" }
    ]
  }
]; 