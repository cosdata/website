import { OfferingData } from "@/components/vector-database-guide/OfferingDisplay";

// OSS Offerings
export const ossOfferings: OfferingData[] = [
  {
    id: "qdrant",
    name: "Qdrant",
    overview: "Qdrant is a vector similarity search engine that provides a production-ready service with a convenient API to store, search, and manage points (vectors with payload) in high-dimensional vector spaces.",
    highlights: [
      "Blazing fast performance with HNSW and filtering",
      "First-class filtering support",
      "Written in Rust for high performance and safety",
      "Easy deployment with Docker, Kubernetes, etc.",
      "Great for production deployments with filtering requirements"
    ],
    benchmarkHighlights: [
      "Consistent sub-10ms query times at 1M vectors",
      "Maintains precision with filtered queries",
      "Excellent memory efficiency"
    ],
    benchmarkLinks: [
      { name: "Official Performance Benchmarks", url: "https://qdrant.tech/benchmarks/" },
      { name: "ANN Benchmarks", url: "https://ann-benchmarks.com/" }
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiModal: true,
      selfHosting: true,
      openSource: true,
      communitySupport: true,
      additional: ["REST API", "gRPC API", "Payload storage with JSON"]
    },
    benchmarks: {
      indexingTime: 85,
      rps: 1200,
      precision: 98.5,
      p50: 12,
      p95: 28,
      p99: 42
    }
  },
  {
    id: "milvus",
    name: "Milvus",
    overview: "Milvus is an open-source vector database built to power AI applications and embedding similarity search. It makes unstructured data search more accessible and provides a consistent user experience regardless of the deployment environment.",
    pros: [
      "Distributed architecture for massive scale",
      "Support for multiple index types",
      "Active development and community",
      "Kubernetes-native design"
    ],
    cons: [
      "Can be complex to configure for optimal performance",
      "Heavier resource requirements than some alternatives",
      "Steeper learning curve"
    ],
    bestFor: [
      "Enterprise-scale vector search applications",
      "Applications needing distributed architecture",
      "Projects requiring high throughput"
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiModal: true,
      selfHosting: true,
      openSource: true,
      communitySupport: true,
      additional: ["Cloud-native architecture", "Multiple SDK support", "Time Travel (historical data)"]
    },
    benchmarks: {
      indexingTime: 110,
      rps: 1450,
      precision: 99.1,
      p50: 15,
      p95: 35,
      p99: 58
    }
  }
];

// Serverless Offerings
export const serverlessOfferings: OfferingData[] = [
  {
    id: "pinecone",
    name: "Pinecone",
    overview: "Pinecone is a managed vector database designed specifically for vector search, offering serverless deployment with automatic scaling and high performance.",
    pros: [
      "Fully managed serverless experience",
      "Fast query performance",
      "Handles scale seamlessly",
      "Easy to integrate with popular ML frameworks"
    ],
    cons: [
      "Can become expensive at scale",
      "Limited control over infrastructure",
      "Some advanced features limited to enterprise plans"
    ],
    bestFor: [
      "Organizations preferring managed services",
      "Teams without database operation expertise",
      "Applications needing quick time to market"
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiTenancy: true,
      autoScaling: true,
      serverlessApi: true,
      payAsYouGo: true,
      additional: ["Hybrid search capability", "Pod-based architecture", "Serverless indexes"]
    },
    benchmarks: {
      indexingTime: 65,
      rps: 950,
      precision: 98.2,
      p50: 18,
      p95: 42,
      p99: 75
    },
    pricing: {
      model: "Serverless + Pod-based",
      startingPrice: "50",
      freeTier: "Limited free tier available (1 project)",
      pricingDetails: {
        storage: "$0.096 per GB per month",
        writes: "$0.096 per 1,000,000 vector writes",
        queries: "$0.096 per 1,000,000 vector queries",
        additional: "Enterprise features require custom pricing"
      }
    }
  },
  {
    id: "weaviate-cloud",
    name: "Weaviate Cloud",
    overview: "Weaviate Cloud is the managed cloud offering of the Weaviate vector database, providing vector search as a service with a focus on hybrid and semantic search capabilities.",
    pros: [
      "Strong GraphQL API support",
      "Excellent documentation",
      "First-class hybrid search capabilities",
      "Strong modular design"
    ],
    cons: [
      "Pricing can become expensive as scale increases",
      "Learning curve for GraphQL if not familiar",
      "Newer cloud service compared to alternatives"
    ],
    bestFor: [
      "GraphQL enthusiasts",
      "Projects requiring hybrid search capabilities",
      "Applications needing rich semantic search"
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiTenancy: true,
      autoScaling: true,
      serverlessApi: true,
      payAsYouGo: true,
      additional: ["GraphQL API", "RESTful API", "Module architecture"]
    },
    benchmarks: {
      indexingTime: 78,
      rps: 880,
      precision: 97.8,
      p50: 20,
      p95: 48,
      p99: 82
    },
    pricing: {
      model: "Pay-as-you-go + Cluster Sizing",
      startingPrice: "75",
      freeTier: "Sandbox cluster available for development",
      pricingDetails: {
        storage: "$0.12 per GB per month",
        writes: "$0.10 per 1,000,000 vector operations",
        queries: "$0.10 per 1,000,000 vector queries",
        additional: "Cluster sizing affects base price"
      }
    }
  }
];

// Managed Cloud Offerings
export const managedOfferings: OfferingData[] = [
  {
    id: "redis-vector",
    name: "Redis Vector",
    overview: "Redis Vector adds vector similarity search capabilities to Redis, combining the speed of in-memory processing with vector search functionality in a managed cloud environment.",
    pros: [
      "Extremely low latency",
      "Integration with other Redis functionality",
      "Familiar Redis environment",
      "Simple deployment model"
    ],
    cons: [
      "More expensive for large datasets due to in-memory nature",
      "Limited specialized vector optimizations compared to purpose-built solutions",
      "Tied to Redis ecosystem"
    ],
    bestFor: [
      "Real-time applications requiring minimal latency",
      "Projects already using Redis",
      "Applications with moderate vector dataset sizes"
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      manageability: true,
      serviceIntegration: true,
      enterpriseSupport: true,
      sla: true,
      additional: ["In-memory performance", "Redis ecosystem compatibility", "Native JSON support"]
    },
    benchmarks: {
      indexingTime: 45,
      rps: 2200,
      precision: 97.5,
      p50: 8,
      p95: 18,
      p99: 32
    },
    pricing: {
      model: "Instance-based + Resource Usage",
      startingPrice: "100",
      freeTier: "Free tier available with Redis Cloud",
      pricingDetails: {
        storage: "Priced by RAM usage ($0.20-$0.30/GB-hour)",
        writes: "Included in basic pricing",
        queries: "Included in basic pricing",
        additional: "Enterprise support packages available"
      }
    }
  },
  {
    id: "mongodb-atlas-vector",
    name: "MongoDB Atlas Vector Search",
    overview: "MongoDB Atlas Vector Search integrates vector search capabilities directly into MongoDB Atlas, allowing you to store and search vectors alongside your existing document data.",
    pros: [
      "Seamless integration with MongoDB documents",
      "Familiar query language and ecosystem",
      "Single platform for both traditional and vector data",
      "Strong operational tools and monitoring"
    ],
    cons: [
      "Not as optimized for pure vector workloads",
      "Performance can vary based on configuration",
      "Advanced vector features may lag behind specialized solutions"
    ],
    bestFor: [
      "Applications already using MongoDB",
      "Projects needing both document and vector capabilities",
      "Teams familiar with MongoDB ecosystem"
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      manageability: true,
      serviceIntegration: true,
      enterpriseSupport: true,
      sla: true,
      additional: ["Document database integration", "MongoDB query language", "Atlas platform benefits"]
    },
    benchmarks: {
      indexingTime: 92,
      rps: 850,
      precision: 97.2,
      p50: 24,
      p95: 55,
      p99: 95
    },
    pricing: {
      model: "Cluster-based + Usage",
      startingPrice: "57",
      freeTier: "Free shared cluster available",
      pricingDetails: {
        storage: "Included in cluster pricing + $0.25/GB after limits",
        writes: "Based on cluster tier and operations",
        queries: "Based on cluster tier and operations",
        additional: "Networking, backups, and data transfer extra"
      }
    }
  }
];

// Hybrid Solution Offerings
export const hybridOfferings: OfferingData[] = [
  {
    id: "postgres-pgvector",
    name: "PostgreSQL + pgvector",
    overview: "PostgreSQL with the pgvector extension provides vector similarity search capabilities in PostgreSQL, allowing you to store and query vectors alongside relational data.",
    pros: [
      "Integration with existing PostgreSQL databases",
      "SQL interface and familiar tools",
      "Combines relational and vector paradigms",
      "Leverages PostgreSQL features (transactions, indexes, etc.)"
    ],
    cons: [
      "Performance can lag behind dedicated vector databases",
      "Configuration can be complex for optimal performance",
      "Index build times can be lengthy"
    ],
    bestFor: [
      "Applications already using PostgreSQL",
      "Projects needing both relational and vector capabilities",
      "Teams with PostgreSQL expertise"
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: false,
      traditionalQueries: true,
      transactions: true,
      existingIntegration: true,
      standardLanguage: true,
      additional: ["ACID compliance", "SQL interface", "PostgreSQL ecosystem"]
    },
    benchmarks: {
      indexingTime: 180,
      rps: 320,
      precision: 96.8,
      p50: 45,
      p95: 120,
      p99: 220
    }
  },
  {
    id: "elasticsearch-vector",
    name: "Elasticsearch + Vector Search",
    overview: "Elasticsearch with vector search capabilities allows you to perform k-NN vector similarity search alongside full-text search, allowing for powerful hybrid search experiences.",
    pros: [
      "Powerful hybrid search combining text and vectors",
      "Mature ecosystem and tooling",
      "Scalable distributed architecture",
      "Strong analytics capabilities"
    ],
    cons: [
      "Vector functionality less optimized than specialist solutions",
      "Resource intensive",
      "Complex configuration for optimal performance"
    ],
    bestFor: [
      "Applications needing powerful text + vector hybrid search",
      "Projects already using Elasticsearch",
      "Teams with Elasticsearch expertise"
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      traditionalQueries: true,
      transactions: false,
      existingIntegration: true,
      standardLanguage: false,
      additional: ["Full-text search integration", "ELK stack integration", "Kibana visualizations"]
    },
    benchmarks: {
      indexingTime: 150,
      rps: 480,
      precision: 96.5,
      p50: 38,
      p95: 95,
      p99: 180
    }
  }
];

// RAG-as-a-Service Offerings
export const ragServiceOfferings: OfferingData[] = [
  {
    id: "vectara",
    name: "Vectara",
    overview: "Vectara provides a complete RAG-as-a-Service platform with built-in ML models, connectors, and APIs to deploy production-ready RAG systems quickly.",
    pros: [
      "End-to-end RAG solution with no ML expertise required",
      "High quality built-in retrieval models",
      "Document ingestion capabilities",
      "Optimized for production use"
    ],
    cons: [
      "Less flexible than custom built solutions",
      "Can become expensive at scale",
      "Limited customization of underlying models"
    ],
    bestFor: [
      "Teams wanting to deploy RAG without ML expertise",
      "Projects needing fast time to market",
      "Applications requiring high-quality retrieval out of the box"
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      dataIngestion: true,
      aiIntegration: true,
      endToEndSolution: true,
      noCode: true,
      additional: ["Built-in document processing", "Grounded generation", "Query routing"]
    },
    pricing: {
      model: "Usage-based",
      startingPrice: "250",
      freeTier: "Free tier available with limited usage",
      pricingDetails: {
        storage: "Priced per document stored",
        writes: "Priced per document ingested",
        queries: "Priced per query",
        additional: "Enterprise plans available for high volume"
      }
    }
  },
  {
    id: "glean",
    name: "Glean",
    overview: "Glean provides an enterprise-ready RAG platform focused on corporate knowledge and data, with security and privacy features for sensitive information.",
    pros: [
      "Enterprise-grade security and compliance",
      "Deep integration with workplace tools",
      "Personalized search results",
      "Document-level access controls"
    ],
    cons: [
      "Enterprise focus may be overkill for simple projects",
      "Higher price point",
      "Less suitable for consumer applications"
    ],
    bestFor: [
      "Enterprise knowledge search",
      "Organizations with compliance requirements",
      "Teams needing personalized search across documents"
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      dataIngestion: true,
      aiIntegration: true,
      endToEndSolution: true,
      noCode: false,
      additional: ["Enterprise connectors", "Access controls", "Personalization"]
    },
    pricing: {
      model: "Per-user subscription",
      startingPrice: "15",
      freeTier: "No free tier, trial available",
      pricingDetails: {
        storage: "Included in per-user pricing",
        writes: "Included in per-user pricing",
        queries: "Included in per-user pricing",
        additional: "Enterprise plans for additional features"
      }
    }
  }
];

// Map for easy access
export const allOfferingsByCategory = {
  oss: ossOfferings,
  serverless: serverlessOfferings,
  managed: managedOfferings,
  hybrid: hybridOfferings,
  'rag-service': ragServiceOfferings
}; 