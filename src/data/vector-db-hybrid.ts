import { FeatureDefinition } from "@/components/vector-database-guide/FeatureComparison";

// Define feature definitions for hybrid vector database solutions
export const hybridFeatures: FeatureDefinition[] = [
  { key: 'vectorCapabilities', label: 'Vector Capabilities' },
  { key: 'primaryUseCase', label: 'Primary Use Case' },
  { key: 'scalability', label: 'Scalability' },
  { key: 'community', label: 'Community Support' }
];

// Interface for hybrid database offerings
export interface HybridDatabaseCategory {
  id: string;
  name: string;
  description: string;
  databases: HybridDatabase[];
}

export interface HybridDatabase {
  id: string;
  name: string;
  website: string;
  overview: string;
  benefits: string[];
}

// Create categories and databases
export const hybridCategories: HybridDatabaseCategory[] = [
  {
    id: "sql-vector",
    name: "SQL + Vector",
    description: "Traditional SQL databases with vector extensions, providing both relational data capabilities and vector similarity search.",
    databases: [
      {
        id: "postgresql-pgvector",
        name: "PostgreSQL (pgvector)",
        website: "https://github.com/pgvector/pgvector",
        overview: "PostgreSQL extension that adds vector similarity search to your relational database. Supports multiple index types including HNSW.",
        benefits: [
          "Familiar SQL interface",
          "Combines structured and vector data",
          "Support for multiple distance metrics",
          "Active community development"
        ]
      },
      {
        id: "singlestore",
        name: "SingleStore",
        website: "https://www.singlestore.com/",
        overview: "Distributed SQL database built for OLTP and OLAP workloads with native vector search capabilities.",
        benefits: [
          "Unified OLTP/OLAP architecture",
          "High throughput for mixed workloads",
          "Integrated vector search",
          "Distributed query processing"
        ]
      },
      {
        id: "myscale",
        name: "MyScale",
        website: "https://myscale.com/",
        overview: "Cloud-based vector database built on ClickHouse, optimized for analytical workloads with vector similarity search.",
        benefits: [
          "OLAP-optimized vector search",
          "High performance for analytical queries",
          "SQL interface for vector operations",
          "Scalable cloud architecture"
        ]
      },
      {
        id: "databricks",
        name: "Databricks",
        website: "https://www.databricks.com/product/databricks-ai",
        overview: "Data intelligence platform with integrated vector search for AI applications, combining data warehousing with ML capabilities.",
        benefits: [
          "Unified analytics platform",
          "Integrated vector search",
          "Seamless ML workflow integration",
          "Lakehouse architecture"
        ]
      }
    ]
  },
  {
    id: "search-engines",
    name: "Search Engines + Vector",
    description: "Search engines with added vector search capabilities, providing hybrid search combining keywords, filters, and vector similarity.",
    databases: [
      {
        id: "elasticsearch",
        name: "Elasticsearch",
        website: "https://www.elastic.co/elasticsearch/",
        overview: "Distributed search engine with vector search capabilities, enabling hybrid search across text and vector embeddings.",
        benefits: [
          "Powerful text search",
          "Hybrid search capabilities",
          "Rich query DSL",
          "Scalable distributed architecture"
        ]
      },
      {
        id: "solr",
        name: "Apache Solr",
        website: "https://solr.apache.org/",
        overview: "Open-source search platform with vector search support, known for its reliability, scalability and enterprise features.",
        benefits: [
          "Rich filtering capabilities",
          "Vector + keyword search",
          "Enterprise-ready features",
          "Mature ecosystem"
        ]
      }
    ]
  },
  {
    id: "nosql-vector",
    name: "NoSQL + Vector",
    description: "Document databases that have added vector search capabilities alongside their flexible schema design and horizontal scalability.",
    databases: [
      {
        id: "mongodb",
        name: "MongoDB",
        website: "https://www.mongodb.com/atlas/vector-search",
        overview: "Document database with Atlas Vector Search, enabling semantic search and AI applications alongside traditional document storage.",
        benefits: [
          "Flexible schema design",
          "Combined document and vector operations",
          "Managed Atlas service",
          "Horizontal scaling"
        ]
      },
      {
        id: "couchbase",
        name: "Couchbase",
        website: "https://www.couchbase.com/vector-search/",
        overview: "NoSQL document database with vector search capabilities, combining key-value access with vector similarity search.",
        benefits: [
          "Unified programming model",
          "Sub-millisecond key-value lookups",
          "Integrated vector search",
          "Distributed architecture"
        ]
      }
    ]
  },
  {
    id: "kv-stores",
    name: "Realtime KV Stores + Vector",
    description: "In-memory key-value stores with vector search extensions, providing ultra-low latency for both key lookups and vector operations.",
    databases: [
      {
        id: "redis",
        name: "Redis",
        website: "https://redis.io/docs/stack/search/reference/vectors/",
        overview: "In-memory data store with Redis Stack providing vector similarity search at sub-millisecond speeds.",
        benefits: [
          "Ultra-low latency",
          "In-memory performance",
          "Simple deployment",
          "Rich data structures"
        ]
      },
      {
        id: "aerospike",
        name: "Aerospike",
        website: "https://aerospike.com/products/vector-database/",
        overview: "High-performance NoSQL database with vector search capabilities, designed for high-throughput, low-latency workloads.",
        benefits: [
          "Hybrid memory architecture",
          "Predictable performance",
          "Linear scalability",
          "Real-time vector operations"
        ]
      }
    ]
  },
  {
    id: "graph-vector",
    name: "Graph + Vector",
    description: "Graph databases with vector capabilities, ideal for knowledge graphs, recommendation engines, and complex relationship modeling.",
    databases: [
      {
        id: "neo4j",
        name: "Neo4j",
        website: "https://neo4j.com/product/vector-search/",
        overview: "Graph database with vector search capabilities, enabling semantic search and linking within connected data structures.",
        benefits: [
          "Rich graph querying",
          "Relationship-based search",
          "Combined graph and vector operations",
          "Mature ecosystem"
        ]
      },
      {
        id: "arangodb",
        name: "ArangoDB",
        website: "https://www.arangodb.com/",
        overview: "Multi-model database supporting graphs, documents, and vectors in a single store, enabling complex data models with vector search.",
        benefits: [
          "Multi-model flexibility",
          "Graph, document, and vector in one DB",
          "AQL query language",
          "Enterprise scalability"
        ]
      },
      {
        id: "cosdata-structured",
        name: "Cosdata Structured Search",
        website: "https://cosdata.com/",
        overview: "Graph-based vector database specialized in structured data search with semantic understanding capabilities.",
        benefits: [
          "Connected data modeling",
          "Structured data embeddings",
          "Semantic relationship search",
          "Cloud-native architecture"
        ]
      }
    ]
  }
]; 