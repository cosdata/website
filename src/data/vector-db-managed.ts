import { FeatureDefinition } from "@/components/vector-database-guide/FeatureComparison";

// Define feature definitions for managed cloud vector databases
export const managedFeatures: FeatureDefinition[] = [
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

// Interface for managed cloud vector database offerings
export interface ManagedDatabase {
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

// Create the detailed database for managed cloud vector databases
export const managedDatabases: ManagedDatabase[] = [
  {
    id: "vespa",
    name: "Vespa Cloud",
    overview: "Vespa Cloud offers a fully managed version of the open-source Vespa, providing scalable, real-time search and recommendation capabilities.",
    founded: 2017,
    website: "https://cloud.vespa.ai/",
    highlights: [
      "Production-ready search and recommendation engine",
      "Auto-scaling capabilities",
      "Strong consistency model",
      "Robust security measures",
      "Built-in machine learning capabilities",
      "Comprehensive query language",
      "Horizontal scaling"
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
      freeTier: false,
      additional: ["Advanced ranking", "SQL-like query language", "BM25", "WAND algorithm", "Tensor computation"]
    },
    links: {
      benchmarks: [
        "https://vespa.ai/performance"
      ],
      pricing: [
        "https://cloud.vespa.ai/pricing"
      ]
    }
  },
  {
    id: "weaviate",
    name: "Weaviate Cloud",
    overview: "Weaviate Cloud is a fully managed service for the open-source Weaviate vector database, offering GraphQL and REST APIs for intuitive data retrieval.",
    founded: 2019,
    website: "https://weaviate.io/",
    highlights: [
      "GraphQL and REST APIs",
      "Multi-modal data support",
      "Built-in AI modules",
      "Data import/export tools",
      "Enterprise support options",
      "Scalable architecture",
      "Performance monitoring"
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
      additional: ["GraphQL API", "REST API", "Multi-modal support", "BM25", "HNSW index"]
    },
    links: {
      benchmarks: [
        "https://weaviate.io/developers/weaviate/benchmarks"
      ],
      pricing: [
        "https://weaviate.io/pricing"
      ]
    }
  },
  {
    id: "qdrant",
    name: "Qdrant Cloud",
    overview: "Qdrant Cloud is a managed solution for the open-source Qdrant vector database, designed for high-load vector similarity search.",
    founded: 2021,
    website: "https://qdrant.tech/",
    highlights: [
      "Dedicated cloud infrastructure",
      "REST API interface",
      "Strong filtering capabilities",
      "Multi-region deployments",
      "Automatic backups",
      "Index optimization",
      "Performance analytics"
    ],
    features: {
      filters: true,
      multiVector: true,
      hybridSearch: true,
      sparse: false,
      fullText: true,
      diskIndex: true,
      quantization: true,
      socII: true,
      hipaa: false,
      selfServe: true,
      freeTier: true,
      additional: ["REST API", "Custom payload filtering", "HNSW index", "Schemaless design"]
    },
    links: {
      benchmarks: [
        "https://qdrant.tech/benchmarks/"
      ],
      pricing: [
        "https://qdrant.tech/pricing/"
      ]
    }
  },
  {
    id: "azure-ai-search",
    name: "Azure AI Search",
    overview: "Azure AI Search (formerly Azure Cognitive Search) is a cloud search service with built-in vector search capabilities for AI-powered applications.",
    founded: 2015,
    website: "https://azure.microsoft.com/en-us/products/ai-services/ai-search/",
    highlights: [
      "Integrated with Azure ecosystem",
      "Comprehensive search capabilities",
      "Built-in content extraction",
      "Multi-language support",
      "Security and compliance",
      "Semantic ranking",
      "Data enrichment"
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
      additional: ["Azure integration", "Semantic ranking", "Language analyzers", "REST API"]
    },
    links: {
      benchmarks: [
        "https://azure.microsoft.com/en-us/blog/azure-cognitive-search-outperforms-elasticsearch-for-ai-content-search/"
      ],
      pricing: [
        "https://azure.microsoft.com/en-us/pricing/details/cognitive-search/"
      ]
    }
  },
  {
    id: "gcp-vertex-ai",
    name: "GCP Vertex AI Vector Search",
    overview: "Google Cloud's Vertex AI Vector Search provides a fully managed vector database service integrated with Google's AI platform.",
    founded: 2021,
    website: "https://cloud.google.com/vertex-ai/docs/vector-search/overview",
    highlights: [
      "Integration with Google Cloud ecosystem",
      "Highly scalable architecture",
      "Advanced ML features",
      "Low latency search",
      "Distance measures optimization",
      "Global availability",
      "Seamless ML pipelines"
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
      additional: ["GCP integration", "Built-in embeddings", "One-click deployment", "REST API"]
    },
    links: {
      benchmarks: [
        "https://cloud.google.com/blog/products/ai-machine-learning/get-started-with-vector-search-on-vertex-ai"
      ],
      pricing: [
        "https://cloud.google.com/vertex-ai/pricing"
      ]
    }
  }
]; 