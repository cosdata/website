import { FeatureDefinition } from "@/components/vector-database-guide/FeatureComparison";
import { BenchmarkMetric } from "@/components/vector-database-guide/BenchmarkComparison";

// Common features across all vector database types
export const commonFeatures: FeatureDefinition[] = [
  { key: 'vectorSearch', label: 'Vector Search' },
  { key: 'hybridSearch', label: 'Hybrid Search' },
  { key: 'metadataFiltering', label: 'Metadata Filtering' },
  { key: 'realTimeUpdates', label: 'Real-time Updates' },
  { key: 'horizontalScaling', label: 'Horizontal Scaling' }
];

// OSS vector database features
export const ossFeatures: FeatureDefinition[] = [
  ...commonFeatures,
  { key: 'multiModal', label: 'Multi-modal Support' },
  { key: 'selfHosting', label: 'Self-hosting' },
  { key: 'openSource', label: 'Open Source' },
  { key: 'communitySupport', label: 'Community Support' }
];

// Serverless vector database features
export const serverlessFeatures: FeatureDefinition[] = [
  ...commonFeatures,
  { key: 'multiTenancy', label: 'Multi-tenancy' },
  { key: 'autoScaling', label: 'Auto-scaling' },
  { key: 'serverlessApi', label: 'Serverless API' },
  { key: 'payAsYouGo', label: 'Pay-as-you-go' }
];

// Managed cloud vector database features
export const managedFeatures: FeatureDefinition[] = [
  ...commonFeatures,
  { key: 'manageability', label: 'Managed Service' },
  { key: 'serviceIntegration', label: 'Cloud Service Integration' },
  { key: 'enterpriseSupport', label: 'Enterprise Support' },
  { key: 'sla', label: 'SLA Guarantees' }
];

// Hybrid solution features
export const hybridFeatures: FeatureDefinition[] = [
  ...commonFeatures,
  { key: 'traditionalQueries', label: 'Traditional Queries' },
  { key: 'transactions', label: 'Transaction Support' },
  { key: 'existingIntegration', label: 'Existing Ecosystem Integration' },
  { key: 'standardLanguage', label: 'Standard Query Language (SQL)' }
];

// RAG-as-a-Service features
export const ragServiceFeatures: FeatureDefinition[] = [
  ...commonFeatures,
  { key: 'dataIngestion', label: 'Built-in Data Ingestion' },
  { key: 'aiIntegration', label: 'AI/LLM Integration' },
  { key: 'endToEndSolution', label: 'End-to-end RAG Solution' },
  { key: 'noCode', label: 'No-code Configuration' }
];

// Benchmark metrics for all database types
export const benchmarkMetrics: BenchmarkMetric[] = [
  { key: 'indexingTime', label: 'Indexing Time', unit: 's' },
  { key: 'rps', label: 'Queries per Second' },
  { key: 'precision', label: 'Precision', unit: '%' },
  { key: 'p50', label: 'P50 Latency', unit: 'ms' },
  { key: 'p95', label: 'P95 Latency', unit: 'ms' },
  { key: 'p99', label: 'P99 Latency', unit: 'ms' }
]; 