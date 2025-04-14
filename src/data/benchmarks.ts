export interface VectorBenchmarkData {
  name: string;
  indexingTime: string;
  qps: string;
  precision: string;
  p50: string;
  p95: string;
  dataset?: string;
}

export interface FTSBenchmarkData {
  dataset: string;
  corpusSize: number;
  queriesSize: number;
  insertionTime: string;
  recall: string;
  ndcg: string;
  qps: string;
  p50?: string;
  p95?: string;
  memoryUsage: string;
}

// Vector benchmark data (single dataset with multiple systems)
export const vectorBenchmarkData: VectorBenchmarkData[] = [
  { name: "Cosdata", indexingTime: "16.32", qps: "1758", precision: ".97", p50: "6.61", p95: "7.87", dataset: "DbPedia 1M records (1536 dim)" },
  { name: "Qdrant", indexingTime: "24.43", qps: "1238", precision: ".99", p50: "3.54", p95: "4.95", dataset: "DbPedia 1M records (1536 dim)" },
  { name: "Weaviate", indexingTime: "13.94", qps: "1142", precision: ".97", p50: "4.99", p95: "7.16", dataset: "DbPedia 1M records (1536 dim)" },
  { name: "Elastic Search", indexingTime: "83.72", qps: "716", precision: ".98", p50: "22.10", p95: "72.53", dataset: "DbPedia 1M records (1536 dim)" },
];

// For backwards compatibility
export const benchmarkData = vectorBenchmarkData;

// FTS benchmark data (multiple datasets with two systems)
export const ftsBenchmarkData = {
  cosdata: [
    { dataset: "trec-covid", corpusSize: 171332, queriesSize: 50, insertionTime: "1.89", recall: "0.01608", ndcg: "0.60773", qps: "2582.15", p50: "9.61", p95: "17.88", memoryUsage: "0.89" },
    { dataset: "fiqa", corpusSize: 57638, queriesSize: 648, insertionTime: "0.52", recall: "0.31544", ndcg: "0.249", qps: "5021.41", p50: "7.23", p95: "12.22", memoryUsage: "0.90" },
    { dataset: "arguana", corpusSize: 8674, queriesSize: 1406, insertionTime: "0.14", recall: "0.64723", ndcg: "0.39645", qps: "2173.40", p50: "9.05", p95: "13.56", memoryUsage: "0.90" },
    { dataset: "webis-touche2020", corpusSize: 382545, queriesSize: 49, insertionTime: "6.15", recall: "0.20366", ndcg: "0.33898", qps: "2781.53", p50: "9.53", p95: "26.48", memoryUsage: "1.94" },
    { dataset: "quora", corpusSize: 522931, queriesSize: 10000, insertionTime: "2.72", recall: "0.90214", ndcg: "0.80856", qps: "1429.84", p50: "11.50", p95: "29.72", memoryUsage: "1.95" },
    { dataset: "scidocs", corpusSize: 25657, queriesSize: 1000, insertionTime: "0.33", recall: "0.16282", ndcg: "0.15664", qps: "13664.44", p50: "7.18", p95: "12.55", memoryUsage: "1.95" },
    { dataset: "scifact", corpusSize: 5183, queriesSize: 300, insertionTime: "0.11", recall: "0.82017", ndcg: "0.68482", qps: "41169.87", p50: "7.24", p95: "13.18", memoryUsage: "1.95" },
    { dataset: "nq", corpusSize: 2681468, queriesSize: 3452, insertionTime: "19.84", recall: "0.45657", ndcg: "0.29198", qps: "483.65", p50: "30.34", p95: "82.50", memoryUsage: "3.13" },
    { dataset: "msmarco", corpusSize: 8841823, queriesSize: 6980, insertionTime: "59.04", recall: "0.37744", ndcg: "0.22469", qps: "317.23", p50: "44.32", p95: "171.28", memoryUsage: "3.21" },
    { dataset: "fever", corpusSize: 5416568, queriesSize: 6666, insertionTime: "41.68", recall: "0.64576", ndcg: "0.47334", qps: "311.87", p50: "49.63", p95: "179.89", memoryUsage: "5.73" },
    { dataset: "climate-fever", corpusSize: 5416593, queriesSize: 1535, insertionTime: "41.59", recall: "0.1724", ndcg: "0.13386", qps: "134.61", p50: "109.96", p95: "376.72", memoryUsage: "5.94" }
  ],
  elasticsearch: [
    { dataset: "trec-covid", corpusSize: 171332, queriesSize: 50, insertionTime: "21.76", recall: "0.01907", ndcg: "0.68803", qps: "106.11", p50: "placeholder", p95: "placeholder", memoryUsage: "0.14" },
    { dataset: "fiqa", corpusSize: 57638, queriesSize: 648, insertionTime: "6.58", recall: "0.3244", ndcg: "0.25364", qps: "267.82", p50: "placeholder", p95: "placeholder", memoryUsage: "0.79" },
    { dataset: "arguana", corpusSize: 8674, queriesSize: 1406, insertionTime: "1.45", recall: "0.7532", ndcg: "0.47163", qps: "264.14", p50: "placeholder", p95: "placeholder", memoryUsage: "0.10" },
    { dataset: "webis-touche2020", corpusSize: 382545, queriesSize: 49, insertionTime: "59.47", recall: "0.2122", ndcg: "0.34707", qps: "88.27", p50: "placeholder", p95: "placeholder", memoryUsage: "0.81" },
    { dataset: "quora", corpusSize: 522931, queriesSize: 10000, insertionTime: "28.74", recall: "0.90219", ndcg: "0.80771", qps: "333.83", p50: "placeholder", p95: "placeholder", memoryUsage: "3.32" },
    { dataset: "scidocs", corpusSize: 25657, queriesSize: 1000, insertionTime: "3.91", recall: "0.17372", ndcg: "0.16468", qps: "314.41", p50: "placeholder", p95: "placeholder", memoryUsage: "0.99" },
    { dataset: "scifact", corpusSize: 5183, queriesSize: 300, insertionTime: "0.97", recall: "0.81978", ndcg: "0.69064", qps: "271.59", p50: "placeholder", p95: "placeholder", memoryUsage: "0.54" },
    { dataset: "nq", corpusSize: 2681468, queriesSize: 3452, insertionTime: "236.39", recall: "0.50659", ndcg: "0.32607", qps: "144.13", p50: "placeholder", p95: "placeholder", memoryUsage: "0.87" },
    { dataset: "msmarco", corpusSize: 8841823, queriesSize: 6980, insertionTime: "695.99", recall: "0.38159", ndcg: "0.22747", qps: "171.33", p50: "placeholder", p95: "placeholder", memoryUsage: "2.51" },
    { dataset: "fever", corpusSize: 5416568, queriesSize: 6666, insertionTime: "521.22", recall: "0.81413", ndcg: "0.64938", qps: "91.22", p50: "placeholder", p95: "placeholder", memoryUsage: "2.57" },
    { dataset: "climate-fever", corpusSize: 5416593, queriesSize: 1535, insertionTime: "520.12", recall: "0.23179", ndcg: "0.18615", qps: "59.72", p50: "placeholder", p95: "placeholder", memoryUsage: "2.78" }
  ]
};

// Summary highlights for space-limited sections
export const benchmarkHighlights = {
  vector: {
    qpsAdvantage: "1,758+ QPS",
    precision: "97%",
    speedAdvantage: "30-50% Faster",
    dataset: "1M records, 1536-dimensional vectors"
  },
  fts: {
    averageQpsAdvantage: "~16x faster",
    topQps: "41,000+ QPS",
    averageRecall: "Similar recall to ElasticSearch",
    memoryUsage: "Efficient memory usage"
  }
}; 