import { FeatureDefinition } from "@/components/vector-database-guide/FeatureComparison";

// Define feature definitions for serverless vector databases
export const serverlessFeatures: FeatureDefinition[] = [
  { key: 'filters', label: 'Filters' },
  { key: 'multiVector', label: 'Multi-Vector Support' },
  { key: 'hybridSearch', label: 'Hybrid Search' },
  { key: 'sparse', label: 'Sparse Vectors' },
  { key: 'fullText', label: 'Full-Text Search' },
  { key: 'diskIndex', label: 'Disk Index' },
  { key: 'quantization', label: 'Quantization' },
  { key: 'socII', label: 'SOC II Compliance' },
  { key: 'hipaa', label: 'HIPAA Compliance' },
  { key: 'selfServe', label: 'Self-serve' },
  { key: 'freeTier', label: 'Free Tier' }
];

// Define benchmark and pricing link type
export interface DatabaseLinks {
  benchmarks?: string[];
  pricing?: string[];
}

// Interface for serverless vector database offerings
export interface ServerlessDatabase {
  id: string;
  name: string;
  overview: string;
  founded: number;
  website: string;
  highlights: string[];
  features: {
    [key: string]: boolean | string[];
  };
  links?: DatabaseLinks;
}

// Create the detailed database for serverless vector databases
export const serverlessDatabases: ServerlessDatabase[] = [
  {
    id: "cosdata-serverless",
    name: "Cosdata Serverless",
    overview: "Cosdata Serverless is a fully managed vector database service with automatic scaling and no infrastructure management required.",
    founded: 2023,
    website: "https://cosdata.io/serverless",
    highlights: [
      "Zero infrastructure management",
      "Automatic scaling based on workload",
      "Pay-as-you-go pricing model",
      "Low latency vector search",
      "Simple REST API",
      "Fast setup and integration",
      "Optimized for RAG applications"
    ],
    features: {
      filters: true,
      multiVector: false,
      hybridSearch: false,
      sparse: false,
      fullText: false,
      diskIndex: true,
      quantization: true,
      socII: false,
      hipaa: false,
      selfServe: true,
      freeTier: true,
      additional: ["Instant scaling", "Simple API", "No provisioning required"]
    },
    links: {
      benchmarks: [
        "https://cosdata.io/performance"
      ],
      pricing: [
        "https://cosdata.io/pricing"
      ]
    }
  },
  {
    id: "lancedb",
    name: "LanceDB",
    overview: "LanceDB is a serverless vector database built on the Lance format, designed for simplicity and performance with a serverless deployment option.",
    founded: 2022,
    website: "https://lancedb.com/",
    highlights: [
      "Built on the Lance columnar format",
      "Cloud-based serverless option",
      "Developer-friendly APIs",
      "Support for various data types",
      "Optimized for cost efficiency",
      "Open-source core technology",
      "Flexible deployment options"
    ],
    features: {
      filters: true,
      multiVector: true,
      hybridSearch: true,
      sparse: false,
      fullText: true,
      diskIndex: true,
      quantization: true,
      socII: false,
      hipaa: false,
      selfServe: true,
      freeTier: true,
      additional: ["Lance columnar format", "Python and TypeScript SDKs", "Object storage integration"]
    },
    links: {
      benchmarks: [
        "https://blog.lancedb.com/benchmarks-why-an-embedded-db-can-be-faster-than-an-in-memory-db-9f48a054ea6a"
      ],
      pricing: [
        "https://lancedb.com/pricing"
      ]
    }
  },
  {
    id: "zilliz",
    name: "Zilliz",
    overview: "Zilliz Cloud is a fully managed vector database service built on Milvus, offering serverless deployment options for AI applications.",
    founded: 2019,
    website: "https://zilliz.com/",
    highlights: [
      "Built on the Milvus open-source platform",
      "Enterprise-grade security features",
      "Highly scalable architecture",
      "Multiple index types supported",
      "Global multi-region deployment",
      "Strong compliance certifications",
      "Support for complex queries"
    ],
    features: {
      filters: true,
      multiVector: true,
      hybridSearch: true,
      sparse: true,
      fullText: true,
      diskIndex: true,
      quantization: true,
      socII: true,
      hipaa: true,
      selfServe: true,
      freeTier: true,
      additional: ["Multiple index types", "Global multi-region", "Enterprise support"]
    },
    links: {
      benchmarks: [
        "https://zilliz.com/evaluations"
      ],
      pricing: [
        "https://zilliz.com/pricing"
      ]
    }
  },
  {
    id: "pinecone-serverless",
    name: "Pinecone Serverless",
    overview: "Pinecone Serverless is a fully managed vector database that automatically scales to meet your application needs without infrastructure management.",
    founded: 2019,
    website: "https://www.pinecone.io/",
    highlights: [
      "Low-latency search capabilities",
      "Automatic scaling and management",
      "Cost-effective pricing model",
      "Strong security and compliance",
      "Simple API and SDKs",
      "Managed index maintenance",
      "Native hybrid search capabilities"
    ],
    features: {
      filters: true,
      multiVector: true,
      hybridSearch: true,
      sparse: true,
      fullText: false,
      diskIndex: true,
      quantization: true,
      socII: true,
      hipaa: true,
      selfServe: true,
      freeTier: true,
      additional: ["Auto-scaling", "Managed indexes", "Simple REST API"]
    },
    links: {
      benchmarks: [
        "https://www.pinecone.io/learn/hybrid-search-benchmark/"
      ],
      pricing: [
        "https://www.pinecone.io/pricing/"
      ]
    }
  },
  {
    id: "turbopuffer",
    name: "Turbopuffer",
    overview: "Turbopuffer is a serverless vector database designed for low latency and high throughput vector search with a developer-friendly experience.",
    founded: 2023,
    website: "https://turbopuffer.com/",
    highlights: [
      "Low latency vector search",
      "Elastic scaling capabilities",
      "Simple developer experience",
      "Fast data indexing",
      "Predictable performance",
      "Transparent pricing model",
      "Built for ML/AI applications"
    ],
    features: {
      filters: true,
      multiVector: false,
      hybridSearch: false,
      sparse: false,
      fullText: false,
      diskIndex: true,
      quantization: true,
      socII: false,
      hipaa: false,
      selfServe: true,
      freeTier: true,
      additional: ["Fast indexing", "Low latency search", "Easy integration"]
    },
    links: {
      benchmarks: [
        "https://turbopuffer.com/benchmarks"
      ],
      pricing: [
        "https://turbopuffer.com/pricing"
      ]
    }
  },
  {
    id: "weaviate-serverless",
    name: "Weaviate",
    overview: "Weaviate's serverless offering provides a fully managed vector database with GraphQL and REST APIs for intuitive data retrieval and management.",
    founded: 2019,
    website: "https://weaviate.io/",
    highlights: [
      "GraphQL and REST APIs",
      "Automatic scaling and management",
      "Strong semantic search capabilities",
      "Multi-modal data support",
      "Built-in AI modules",
      "No infrastructure management",
      "Developer-friendly experience"
    ],
    features: {
      filters: true,
      multiVector: true,
      hybridSearch: true,
      sparse: true,
      fullText: true,
      diskIndex: true,
      quantization: true,
      socII: true,
      hipaa: false,
      selfServe: true,
      freeTier: true,
      additional: ["GraphQL API", "REST API", "Multi-modal support"]
    },
    links: {
      benchmarks: [
        "https://weaviate.io/developers/weaviate/benchmarks"
      ],
      pricing: [
        "https://weaviate.io/pricing"
      ]
    }
  }
]; 