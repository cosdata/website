import { OfferingData } from "@/components/vector-database-guide/OfferingDisplay";
import { FeatureDefinition } from "@/components/vector-database-guide/FeatureComparison";

// Define feature definitions for purpose-built vector databases
export const purposeBuiltFeatures: FeatureDefinition[] = [
  { key: 'metadataFilters', label: 'Metadata Filters' },
  { key: 'multiVector', label: 'Multi-Vector Support' },
  { key: 'hybridSearch', label: 'Hybrid Search' },
  { key: 'sparseVectors', label: 'Sparse Vectors' },
  { key: 'fullTextSearch', label: 'Full-Text Search' },
  { key: 'diskIndex', label: 'Disk Index' },
  { key: 'quantization', label: 'Quantization' }
];

// Define benchmark link type
export interface BenchmarkLinks {
  firstParty?: string[];
  thirdParty?: string[];
}

// Modified offering data with foundation info, highlights, and benchmark links
export interface PurposeBuiltDatabase {
  id: string;
  name: string;
  overview: string;
  founded: number;
  website: string;
  highlights: string[];
  features: {
    [key: string]: boolean | string[];
  };
  benchmarkLinks?: BenchmarkLinks;
}

// Create the detailed database for purpose-built vector databases
export const purposeBuiltDatabases: PurposeBuiltDatabase[] = [
  {
    id: "chroma",
    name: "ChromaDB",
    overview: "Chroma is an open-source embedding database designed for building AI applications with embeddings.",
    founded: 2022,
    website: "https://www.trychroma.com/",
    highlights: [
      "Simple Python API for quick implementation",
      "Suitable for small to medium-scale applications",
      "Active development with a growing community",
      "Strong Python integration",
      "Integrates with various ML frameworks",
      "Persistent storage capabilities",
      "Multiple distance functions available"
    ],
    features: {
      metadataFilters: true,
      multiVector: false,
      hybridSearch: true,
      sparseVectors: false,
      fullTextSearch: false,
      diskIndex: true,
      quantization: false,
      additional: ["Persistent storage", "Multiple distance functions", "Python-first API"]
    },
    benchmarkLinks: {
      firstParty: [
        "https://docs.trychroma.com/usage-guide/benchmarks"
      ],
      thirdParty: [
        "https://github.com/qdrant/vector-db-benchmark/blob/main/results/results_chroma.md"
      ]
    }
  },
  {
    id: "cosdata",
    name: "Cosdata HNSW",
    overview: "Cosdata is a lightweight vector database that uses the HNSW algorithm for efficient similarity search.",
    founded: 2023,
    website: "https://cosdata.io/",
    highlights: [
      "Lightweight and fast HNSW implementation",
      "Low resource requirements",
      "Simple deployment process",
      "Specialized for pure vector search use cases",
      "Focused feature set for specific applications",
      "Low memory footprint",
      "Simple API design"
    ],
    features: {
      metadataFilters: true,
      multiVector: false,
      hybridSearch: false,
      sparseVectors: false,
      fullTextSearch: false,
      diskIndex: true,
      quantization: true,
      additional: ["HNSW algorithm", "Low memory footprint", "Simple API"]
    },
    benchmarkLinks: {
      firstParty: [
        "https://cosdata.io/performance"
      ]
    }
  },
  {
    id: "lancedb",
    name: "LanceDB",
    overview: "LanceDB is an open-source vector database built with a focus on performance and simplicity, designed to work with the Lance data format.",
    founded: 2022,
    website: "https://lancedb.com/",
    highlights: [
      "Built on the Lance columnar format for efficiency",
      "Embedded database with no separate server required",
      "Designed for edge and cloud deployment",
      "Integration with data science tools",
      "Python and Rust APIs available",
      "Embedded solution for simplified architecture",
      "Works well for edge computing scenarios"
    ],
    features: {
      metadataFilters: true,
      multiVector: true,
      hybridSearch: true,
      sparseVectors: false,
      fullTextSearch: true,
      diskIndex: true,
      quantization: true,
      additional: ["Lance columnar format", "Embedded database", "Python and Rust APIs"]
    },
    benchmarkLinks: {
      firstParty: [
        "https://blog.lancedb.com/benchmarks-why-an-embedded-db-can-be-faster-than-an-in-memory-db-9f48a054ea6a"
      ],
      thirdParty: [
        "https://github.com/qdrant/vector-db-benchmark/blob/main/results/results_lancedb.md"
      ]
    }
  },
  {
    id: "milvus",
    name: "Milvus",
    overview: "Milvus is a production-ready vector database built for scalable similarity search, featuring a cloud-native architecture.",
    founded: 2019,
    website: "https://milvus.io/",
    highlights: [
      "Distributed architecture designed for scale",
      "Production-ready with reliability features",
      "Active community and ongoing development",
      "Comprehensive feature set",
      "Multiple index types supported",
      "Cloud-native architecture",
      "Time Travel feature for historical queries"
    ],
    features: {
      metadataFilters: true,
      multiVector: true,
      hybridSearch: true,
      sparseVectors: true,
      fullTextSearch: true,
      diskIndex: true,
      quantization: true,
      additional: ["Distributed architecture", "Multiple index types", "Time Travel (historical queries)"]
    },
    benchmarkLinks: {
      firstParty: [
        "https://milvus.io/docs/performance_benchmark.md"
      ],
      thirdParty: [
        "https://github.com/zilliztech/VectorDBBench",
        "https://github.com/qdrant/vector-db-benchmark/blob/main/results/results_milvus.md"
      ]
    }
  },
  {
    id: "qdrant",
    name: "Qdrant",
    overview: "Qdrant is a vector similarity search engine written in Rust, focusing on high performance and production-ready features.",
    founded: 2021,
    website: "https://qdrant.tech/",
    highlights: [
      "Built in Rust for performance and safety",
      "Strong filtering capabilities for metadata",
      "Well-designed and documented API",
      "REST and gRPC APIs available",
      "Optimized HNSW implementation",
      "Payload storage with JSON support",
      "Good balance of features and performance"
    ],
    features: {
      metadataFilters: true,
      multiVector: true,
      hybridSearch: true,
      sparseVectors: true,
      fullTextSearch: false,
      diskIndex: true,
      quantization: true,
      additional: ["HNSW and filtering", "REST and gRPC APIs", "Payload storage with JSON"]
    },
    benchmarkLinks: {
      firstParty: [
        "https://qdrant.tech/benchmarks/"
      ],
      thirdParty: [
        "https://huggingface.co/blog/vector-database-benchmark",
        "https://github.com/qdrant/vector-db-benchmark"
      ]
    }
  },
  {
    id: "vespa",
    name: "Vespa",
    overview: "Vespa is a versatile open-source big data processing and serving engine with vector search capabilities.",
    founded: 2017,
    website: "https://vespa.ai/",
    highlights: [
      "Combined vector, structured, and text search capabilities",
      "Highly scalable architecture",
      "Feature-rich beyond vector search",
      "Production-proven at Yahoo/Verizon",
      "Advanced ranking frameworks",
      "Real-time partial updates",
      "ACID semantics for data integrity"
    ],
    features: {
      metadataFilters: true,
      multiVector: true,
      hybridSearch: true,
      sparseVectors: true,
      fullTextSearch: true,
      diskIndex: true,
      quantization: true,
      additional: ["Real-time partial updates", "Advanced ranking frameworks", "ACID semantics"]
    },
    benchmarkLinks: {
      firstParty: [
        "https://vespa.ai/benchmarks"
      ],
      thirdParty: [
        "https://medium.com/acing-ai/which-is-the-fastest-vector-database-72f650f55428"
      ]
    }
  },
  {
    id: "weaviate",
    name: "Weaviate",
    overview: "Weaviate is an open-source vector database that enables search and retrieval of data objects using vector embeddings.",
    founded: 2019,
    website: "https://weaviate.io/",
    highlights: [
      "GraphQL-native interface",
      "Strong semantic search capabilities",
      "Modular architecture for extensibility",
      "Active development and community",
      "Multi-tenancy support",
      "RESTful API alongside GraphQL",
      "Module system for specialized functionality"
    ],
    features: {
      metadataFilters: true,
      multiVector: true,
      hybridSearch: true,
      sparseVectors: true,
      fullTextSearch: true,
      diskIndex: true,
      quantization: true,
      additional: ["GraphQL API", "Modular architecture", "Multi-tenancy support"]
    },
    benchmarkLinks: {
      firstParty: [
        "https://weaviate.io/developers/weaviate/benchmarks"
      ],
      thirdParty: [
        "https://github.com/qdrant/vector-db-benchmark/blob/main/results/results_weaviate.md",
        "https://huggingface.co/blog/vector-database-benchmark"
      ]
    }
  }
]; 