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
    { dataset: "trec-covid", corpusSize: 171332, queriesSize: 50, insertionTime: "1.70", recall: "0.01623", ndcg: "0.60871", qps: "2219.04", p50: "10.35", p95: "17.82", memoryUsage: "0.89" },
    { dataset: "fiqa", corpusSize: 57638, queriesSize: 648, insertionTime: "0.48", recall: "0.31506", ndcg: "0.24934", qps: "4941.77", p50: "7.35", p95: "12.08", memoryUsage: "0.90" },
    { dataset: "arguana", corpusSize: 8674, queriesSize: 1406, insertionTime: "0.12", recall: "0.64651", ndcg: "0.39603", qps: "2167.46", p50: "8.83", p95: "14.64", memoryUsage: "0.90" },
    { dataset: "webis-touche2020", corpusSize: 382545, queriesSize: 49, insertionTime: "5.47", recall: "0.20285", ndcg: "0.33774", qps: "2789.45", p50: "10.08", p95: "18.11", memoryUsage: "1.94" },
    { dataset: "quora", corpusSize: 522931, queriesSize: 10000, insertionTime: "2.71", recall: "0.90219", ndcg: "0.80897", qps: "1425.28", p50: "10.76", p95: "35.53", memoryUsage: "1.95" },
    { dataset: "scidocs", corpusSize: 25657, queriesSize: 1000, insertionTime: "0.30", recall: "0.16302", ndcg: "0.15647", qps: "13337.93", p50: "6.96", p95: "12.34", memoryUsage: "1.95" },
    { dataset: "scifact", corpusSize: 5183, queriesSize: 300, insertionTime: "0.10", recall: "0.82017", ndcg: "0.68549", qps: "40909.43", p50: "7.31", p95: "12.77", memoryUsage: "1.95" },
    { dataset: "nq", corpusSize: 2681468, queriesSize: 3452, insertionTime: "19.31", recall: "0.45449", ndcg: "0.29127", qps: "483.26", p50: "30.43", p95: "80.86", memoryUsage: "3.14" },
    { dataset: "msmarco", corpusSize: 8841823, queriesSize: 6980, insertionTime: "57.74", recall: "0.37923", ndcg: "0.22549", qps: "315.46", p50: "45.62", p95: "162.21", memoryUsage: "3.23" },
    { dataset: "fever", corpusSize: 5416568, queriesSize: 6666, insertionTime: "40.30", recall: "0.64542", ndcg: "0.47268", qps: "313.89", p50: "51.61", p95: "156.68", memoryUsage: "5.76" },
    { dataset: "climate-fever", corpusSize: 5416593, queriesSize: 1535, insertionTime: "40.61", recall: "0.17235", ndcg: "0.13429", qps: "134.78", p50: "106.48", p95: "379.23", memoryUsage: "5.95" }
  ],
  elasticsearch: [
    { dataset: "trec-covid", corpusSize: 171332, queriesSize: 50, insertionTime: "22.06", recall: "0.01655", ndcg: "0.61525", qps: "109.67", p50: "56.73", p95: "87.83", memoryUsage: "0.64" },
    { dataset: "fiqa", corpusSize: 57638, queriesSize: 648, insertionTime: "6.65", recall: "0.3244", ndcg: "0.25364", qps: "250.91", p50: "38.57", p95: "59.62", memoryUsage: "1.15" },
    { dataset: "arguana", corpusSize: 8674, queriesSize: 1406, insertionTime: "1.36", recall: "0.76316", ndcg: "0.47796", qps: "262.56", p50: "43.77", p95: "74.03", memoryUsage: "4.41" },
    { dataset: "webis-touche2020", corpusSize: 382545, queriesSize: 49, insertionTime: "63.07", recall: "0.20729", ndcg: "0.33656", qps: "107.53", p50: "62.31", p95: "98.71", memoryUsage: "0.52" },
    { dataset: "quora", corpusSize: 522931, queriesSize: 10000, insertionTime: "30.21", recall: "0.90219", ndcg: "0.80771", qps: "323.04", p50: "38.86", p95: "55.22", memoryUsage: "4.64" },
    { dataset: "scidocs", corpusSize: 25657, queriesSize: 1000, insertionTime: "3.64", recall: "0.16262", ndcg: "0.1545", qps: "318.58", p50: "32.91", p95: "48.22", memoryUsage: "3.35" },
    { dataset: "scifact", corpusSize: 5183, queriesSize: 300, insertionTime: "0.96", recall: "0.81728", ndcg: "0.68258", qps: "271.13", p50: "34.47", p95: "50.70", memoryUsage: "1.90" },
    { dataset: "nq", corpusSize: 2681468, queriesSize: 3452, insertionTime: "243.24", recall: "0.45652", ndcg: "0.29186", qps: "196.52", p50: "58.58", p95: "99.53", memoryUsage: "5.07" },
    { dataset: "msmarco", corpusSize: 8841823, queriesSize: 6980, insertionTime: "714.67", recall: "0.38159", ndcg: "0.22747", qps: "166.38", p50: "73.08", p95: "128.76", memoryUsage: "5.16" },
    { dataset: "fever", corpusSize: 5416568, queriesSize: 6666, insertionTime: "525.73", recall: "0.69558", ndcg: "0.52144", qps: "154.12", p50: "79.58", p95: "137.75", memoryUsage: "4.56" },
    { dataset: "climate-fever", corpusSize: 5416593, queriesSize: 1535, insertionTime: "522.75", recall: "0.18154", ndcg: "0.14325", qps: "84.35", p50: "161.60", p95: "262.69", memoryUsage: "5.69" }
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