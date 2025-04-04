export interface VectorDatabase {
  id: string;
  name: string;
  category: 'oss' | 'serverless' | 'managed' | 'hybrid' | 'rag-service';
  overview: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  features: {
    vectorSearch: boolean;
    hybridSearch: boolean;
    metadataFiltering: boolean;
    realTimeUpdates: boolean;
    horizontalScaling: boolean;
    multiModal: boolean;
    additional?: string[];
  };
  benchmarks?: {
    indexingTime?: string;
    rps?: string;
    precision?: string;
    p50?: string;
    p95?: string;
    scale?: string;
  };
  pricing?: {
    model: string;
    startingPrice?: string;
    pricingDetails?: {
      storage: string;
      writes: string;
      queries: string;
      additional?: string;
    };
  };
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  examples: string[];
  decisionFactors: {
    title: string;
    description: string;
    options: {
      title: string;
      description: string;
      whenToChoose: string[];
    }[];
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  examples?: string[];
  subcategories?: SubCategory[];
  decisionFactors: {
    title: string;
    description: string;
    options: {
      title: string;
      description: string;
      whenToChoose: string[];
    }[];
  };
}

export const categories: Category[] = [
  {
    id: "rag-as-service",
    name: "RAG-as-a-Service Solutions",
    description: "Complete solutions that handle the entire RAG pipeline, from data ingestion to retrieval and generation.",
    examples: ["Vectara", "Glean", "Nuclia DB"],
    decisionFactors: {
      title: "When to Choose RAG-as-a-Service",
      description: "Consider these factors when deciding if a RAG-as-a-Service solution is right for you.",
      options: [
        {
          title: "Choose RAG-as-a-Service if:",
          description: "You want a complete, managed solution that handles the entire RAG pipeline.",
          whenToChoose: [
            "You need to get started quickly without building infrastructure",
            "You don't have ML/AI expertise in-house",
            "You want to focus on your application logic rather than infrastructure",
            "You need a production-ready solution with minimal setup"
          ]
        },
        {
          title: "Consider alternatives if:",
          description: "You need more control or have specific requirements.",
          whenToChoose: [
            "You need fine-grained control over the RAG pipeline",
            "You have specific performance requirements",
            "You want to avoid vendor lock-in",
            "You need to integrate with existing infrastructure"
          ]
        }
      ]
    }
  },
  {
    id: "purpose-built",
    name: "Purpose-Built Vector Databases",
    description: "Databases specifically designed for vector operations and similarity search, offering optimal performance for vector workloads.",
    examples: ["Pinecone", "Qdrant", "Weaviate"],
    decisionFactors: {
      title: "When to Choose a Purpose-Built Vector Database",
      description: "Consider these factors when deciding if a purpose-built vector database is right for you.",
      options: [
        {
          title: "Choose a Purpose-Built Vector Database if:",
          description: "You need optimal performance and scalability for vector operations.",
          whenToChoose: [
            "You have large-scale vector search requirements",
            "You need high performance and low latency",
            "You want a solution optimized for vector operations",
            "You need advanced vector search features"
          ]
        },
        {
          title: "Consider alternatives if:",
          description: "You have other considerations that might make a different solution more suitable.",
          whenToChoose: [
            "You need to integrate with existing database infrastructure",
            "You have complex transaction requirements",
            "You need to minimize the number of systems to manage",
            "You have budget constraints"
          ]
        }
      ]
    }
  },
  {
    id: "general-purpose",
    name: "General-Purpose + Vector",
    description: "Traditional databases that have added vector search capabilities, allowing you to leverage existing infrastructure.",
    subcategories: [
      {
        id: "relational",
        name: "Relational SQL (OLTP-oriented)",
        description: "Traditional relational databases that have added vector search capabilities.",
        examples: ["PostgreSQL (pgvector)", "MySQL HeatWave"],
        decisionFactors: {
          title: "When to Choose a Relational Database with Vector Support",
          description: "Consider these factors when deciding if a relational database with vector support is right for you.",
          options: [
            {
              title: "Choose a Relational Database with Vector Support if:",
              description: "You need ACID compliance and relational data model with vector search.",
              whenToChoose: [
                "You already use a relational database",
                "You need transaction support",
                "You want to maintain data consistency",
                "You need complex queries across different data types"
              ]
            },
            {
              title: "Consider alternatives if:",
              description: "You have specific requirements that might make a different solution more suitable.",
              whenToChoose: [
                "Vector search is your primary use case",
                "You need maximum vector search performance",
                "You want to minimize complexity",
                "You have budget constraints"
              ]
            }
          ]
        }
      },
      {
        id: "analytical",
        name: "Analytical/OLAP SQL",
        description: "Analytical databases optimized for large-scale data processing with vector search capabilities.",
        examples: ["ClickHouse", "MyScale"],
        decisionFactors: {
          title: "When to Choose an Analytical Database with Vector Support",
          description: "Consider these factors when deciding if an analytical database with vector support is right for you.",
          options: [
            {
              title: "Choose an Analytical Database with Vector Support if:",
              description: "You need to process large amounts of data with vector search capabilities.",
              whenToChoose: [
                "You have large-scale analytical workloads",
                "You need high throughput for batch operations",
                "You want to combine analytics with vector search",
                "You need to process real-time data streams"
              ]
            },
            {
              title: "Consider alternatives if:",
              description: "You have specific requirements that might make a different solution more suitable.",
              whenToChoose: [
                "Vector search is your primary use case",
                "You need maximum vector search performance",
                "You want to minimize complexity",
                "You have budget constraints"
              ]
            }
          ]
        }
      }
    ],
    decisionFactors: {
      title: "When to Choose a General-Purpose Database with Vector Features",
      description: "Consider these factors when deciding if a general-purpose database with vector features is right for you.",
      options: [
        {
          title: "Choose a General-Purpose Database if:",
          description: "You want to leverage existing infrastructure and minimize system complexity.",
          whenToChoose: [
            "You already use a specific database platform",
            "You need to maintain data consistency across different data types",
            "You want to minimize operational overhead",
            "You have existing expertise with a particular database"
          ]
        },
        {
          title: "Consider alternatives if:",
          description: "You have specific requirements that might make a different solution more suitable.",
          whenToChoose: [
            "You need maximum vector search performance",
            "You have very large-scale vector search requirements",
            "You need specialized vector search features",
            "You want to avoid potential performance overhead"
          ]
        }
      ]
    }
  },
  {
    id: "search-engines",
    name: "Search Engines + Vector",
    description: "Full-text search engines with ANN support for hybrid search capabilities.",
    examples: ["ElasticSearch", "OpenSearch", "Solr", "Typesense"],
    decisionFactors: {
      title: "When to Choose a Search Engine with Vector Support",
      description: "Consider these factors when deciding if a search engine with vector support is right for you.",
      options: [
        {
          title: "Choose a Search Engine with Vector Support if:",
          description: "You need both traditional search and vector search capabilities.",
          whenToChoose: [
            "You need hybrid search (text + vector)",
            "You already use a search engine",
            "You need advanced text search features",
            "You want to leverage existing search infrastructure"
          ]
        },
        {
          title: "Consider alternatives if:",
          description: "You have specific requirements that might make a different solution more suitable.",
          whenToChoose: [
            "Vector search is your primary use case",
            "You need maximum vector search performance",
            "You want to minimize complexity",
            "You have budget constraints"
          ]
        }
      ]
    }
  },
  {
    id: "nosql",
    name: "NoSQL / Document Stores + Vector",
    description: "Document databases that have added vector search capabilities.",
    examples: ["MongoDB", "Couchbase"],
    decisionFactors: {
      title: "When to Choose a NoSQL Database with Vector Support",
      description: "Consider these factors when deciding if a NoSQL database with vector support is right for you.",
      options: [
        {
          title: "Choose a NoSQL Database with Vector Support if:",
          description: "You need flexible document storage with vector search capabilities.",
          whenToChoose: [
            "You already use a NoSQL database",
            "You need flexible schema support",
            "You want to maintain data consistency",
            "You need both document and vector operations"
          ]
        },
        {
          title: "Consider alternatives if:",
          description: "You have specific requirements that might make a different solution more suitable.",
          whenToChoose: [
            "Vector search is your primary use case",
            "You need maximum vector search performance",
            "You want to minimize complexity",
            "You have budget constraints"
          ]
        }
      ]
    }
  },
  {
    id: "distributed",
    name: "Distributed / Scalable NoSQL + Vector",
    description: "Distributed NoSQL databases that have added vector search capabilities.",
    examples: ["Cassandra", "DataStax", "Aerospike"],
    decisionFactors: {
      title: "When to Choose a Distributed NoSQL Database with Vector Support",
      description: "Consider these factors when deciding if a distributed NoSQL database with vector support is right for you.",
      options: [
        {
          title: "Choose a Distributed NoSQL Database with Vector Support if:",
          description: "You need distributed scalability with vector search capabilities.",
          whenToChoose: [
            "You need global distribution",
            "You have high availability requirements",
            "You need linear scalability",
            "You want to leverage existing distributed infrastructure"
          ]
        },
        {
          title: "Consider alternatives if:",
          description: "You have specific requirements that might make a different solution more suitable.",
          whenToChoose: [
            "Vector search is your primary use case",
            "You need maximum vector search performance",
            "You want to minimize complexity",
            "You have budget constraints"
          ]
        }
      ]
    }
  },
  {
    id: "in-memory",
    name: "In-Memory / Realtime KV Stores + Vector",
    description: "In-memory key-value stores that have added vector search capabilities.",
    examples: ["Redis (RedisVector)", "Memgraph (graph + memory)", "Aerospike (in-memory configs)"],
    decisionFactors: {
      title: "When to Choose an In-Memory Database with Vector Support",
      description: "Consider these factors when deciding if an in-memory database with vector support is right for you.",
      options: [
        {
          title: "Choose an In-Memory Database with Vector Support if:",
          description: "You need ultra-low latency with vector search capabilities.",
          whenToChoose: [
            "You need sub-millisecond latency",
            "You have real-time requirements",
            "You need high throughput",
            "You want to leverage existing in-memory infrastructure"
          ]
        },
        {
          title: "Consider alternatives if:",
          description: "You have specific requirements that might make a different solution more suitable.",
          whenToChoose: [
            "Vector search is your primary use case",
            "You need maximum vector search performance",
            "You want to minimize complexity",
            "You have budget constraints"
          ]
        }
      ]
    }
  },
  {
    id: "graph",
    name: "Graph Databases + Vector",
    description: "Graph databases that have added vector search capabilities.",
    examples: ["Neo4j", "ArangoDB"],
    decisionFactors: {
      title: "When to Choose a Graph Database with Vector Support",
      description: "Consider these factors when deciding if a graph database with vector support is right for you.",
      options: [
        {
          title: "Choose a Graph Database with Vector Support if:",
          description: "You need graph traversal with vector search capabilities.",
          whenToChoose: [
            "You need to model relationships between entities",
            "You need graph traversal capabilities",
            "You want to combine graph and vector operations",
            "You already use a graph database"
          ]
        },
        {
          title: "Consider alternatives if:",
          description: "You have specific requirements that might make a different solution more suitable.",
          whenToChoose: [
            "Vector search is your primary use case",
            "You need maximum vector search performance",
            "You want to minimize complexity",
            "You have budget constraints"
          ]
        }
      ]
    }
  }
];

export const vectorDatabases: VectorDatabase[] = [
  // OSS Purpose-Built Vector Databases
  {
    id: 'qdrant',
    name: 'Qdrant',
    category: 'oss',
    overview: 'Open-source vector similarity search engine with extended filtering support.',
    pros: [
      'High performance',
      'Rich filtering capabilities',
      'Active community'
    ],
    cons: [
      'Requires self-hosting',
      'Steeper learning curve'
    ],
    bestFor: [
      'Applications requiring high performance',
      'Projects with specific filtering needs'
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiModal: false,
      additional: ['REST API', 'gRPC support']
    },
    benchmarks: {
      indexingTime: '0.5',
      rps: '1000',
      precision: '0.98',
      p50: '5',
      p95: '15'
    }
  },
  {
    id: 'milvus',
    name: 'Milvus',
    category: 'oss',
    overview: 'Open-source vector database built for scalable similarity search.',
    pros: [
      'Highly scalable',
      'Multiple index types',
      'Strong community'
    ],
    cons: [
      'Complex deployment',
      'Resource intensive'
    ],
    bestFor: [
      'Large-scale applications',
      'Projects requiring multiple index types'
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiModal: true,
      additional: ['Multiple index types', 'Kubernetes support']
    },
    benchmarks: {
      indexingTime: '0.8',
      rps: '800',
      precision: '0.97',
      p50: '8',
      p95: '20'
    }
  },

  // Serverless Vector Databases
  {
    id: 'pinecone',
    name: 'Pinecone',
    category: 'serverless',
    overview: 'Serverless vector database for building AI applications.',
    pros: [
      'Fully managed',
      'Simple API',
      'Automatic scaling'
    ],
    cons: [
      'Limited control',
      'Can be expensive at scale'
    ],
    bestFor: [
      'Quick prototyping',
      'Applications with variable load'
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiModal: false
    },
    benchmarks: {
      indexingTime: '0.3',
      rps: '1200',
      precision: '0.99',
      p50: '3',
      p95: '10'
    },
    pricing: {
      model: 'Usage-based',
      startingPrice: '70',
      pricingDetails: {
        storage: '$0.20/GB/month',
        writes: '$0.0001/vector',
        queries: '$0.0001/query'
      }
    }
  },
  {
    id: 'weaviate',
    name: 'Weaviate Cloud',
    category: 'serverless',
    overview: 'Serverless vector database with graph-like query capabilities.',
    pros: [
      'Graph-like queries',
      'Multi-tenant support',
      'Strong consistency'
    ],
    cons: [
      'Complex pricing',
      'Limited regions'
    ],
    bestFor: [
      'Graph-like queries',
      'Multi-tenant applications'
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiModal: true
    },
    benchmarks: {
      indexingTime: '0.4',
      rps: '900',
      precision: '0.98',
      p50: '4',
      p95: '12'
    },
    pricing: {
      model: 'Tiered',
      startingPrice: '100',
      pricingDetails: {
        storage: '$0.25/GB/month',
        writes: '$0.0002/vector',
        queries: '$0.0002/query'
      }
    }
  },

  // Managed Cloud Vector Databases
  {
    id: 'redis-vector',
    name: 'Redis Vector',
    category: 'managed',
    overview: 'Managed Redis with vector search capabilities.',
    pros: [
      'Familiar Redis API',
      'Low latency',
      'Strong ecosystem'
    ],
    cons: [
      'Limited vector features',
      'Higher cost'
    ],
    bestFor: [
      'Existing Redis users',
      'Low latency requirements'
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiModal: false
    },
    benchmarks: {
      indexingTime: '0.2',
      rps: '1500',
      precision: '0.97',
      p50: '2',
      p95: '8'
    },
    pricing: {
      model: 'Fixed + Usage',
      startingPrice: '200',
      pricingDetails: {
        storage: '$0.30/GB/month',
        writes: '$0.0003/vector',
        queries: '$0.0003/query'
      }
    }
  },
  {
    id: 'mongodb-atlas',
    name: 'MongoDB Atlas Vector Search',
    category: 'managed',
    overview: 'Managed MongoDB with integrated vector search.',
    pros: [
      'Document model',
      'Strong consistency',
      'Global distribution'
    ],
    cons: [
      'Limited vector features',
      'Complex pricing'
    ],
    bestFor: [
      'Existing MongoDB users',
      'Document-based applications'
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiModal: false
    },
    benchmarks: {
      indexingTime: '0.6',
      rps: '700',
      precision: '0.96',
      p50: '6',
      p95: '18'
    },
    pricing: {
      model: 'Tiered',
      startingPrice: '150',
      pricingDetails: {
        storage: '$0.25/GB/month',
        writes: '$0.0002/vector',
        queries: '$0.0002/query'
      }
    }
  },

  // Hybrid Solutions
  {
    id: 'postgres-pgvector',
    name: 'PostgreSQL + pgvector',
    category: 'hybrid',
    overview: 'PostgreSQL extension for vector similarity search.',
    pros: [
      'SQL interface',
      'ACID compliance',
      'Strong ecosystem'
    ],
    cons: [
      'Limited vector features',
      'Performance tradeoffs'
    ],
    bestFor: [
      'Existing PostgreSQL users',
      'Applications requiring ACID'
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: false,
      multiModal: false
    }
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch + Vector Search',
    category: 'hybrid',
    overview: 'Elasticsearch with vector search capabilities.',
    pros: [
      'Full-text search',
      'Rich query language',
      'Strong ecosystem'
    ],
    cons: [
      'Complex setup',
      'Resource intensive'
    ],
    bestFor: [
      'Search-heavy applications',
      'Applications requiring full-text search'
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiModal: false
    }
  },

  // RAG-as-a-Service Solutions
  {
    id: 'vectara',
    name: 'Vectara',
    category: 'rag-service',
    overview: 'End-to-end RAG platform with built-in vector search.',
    pros: [
      'Complete solution',
      'Easy integration',
      'Managed service'
    ],
    cons: [
      'Limited customization',
      'Vendor lock-in'
    ],
    bestFor: [
      'Quick deployment',
      'Applications requiring full RAG'
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiModal: true
    }
  },
  {
    id: 'glean',
    name: 'Glean',
    category: 'rag-service',
    overview: 'Enterprise search platform with RAG capabilities.',
    pros: [
      'Enterprise features',
      'Strong security',
      'Compliance ready'
    ],
    cons: [
      'Enterprise pricing',
      'Limited customization'
    ],
    bestFor: [
      'Enterprise applications',
      'Compliance-focused projects'
    ],
    features: {
      vectorSearch: true,
      hybridSearch: true,
      metadataFiltering: true,
      realTimeUpdates: true,
      horizontalScaling: true,
      multiModal: true
    }
  }
]; 