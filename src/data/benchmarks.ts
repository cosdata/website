export interface BenchmarkData {
  name: string;
  indexingTime: string;
  rps: string;
  precision: string;
  p50: string;
  p95: string;
}

export const benchmarkData: BenchmarkData[] = [
  { name: "Cosdata", indexingTime: "16.32", rps: "1758", precision: ".97", p50: "6.61", p95: "7.87" },
  { name: "Qdrant", indexingTime: "24.43", rps: "1238", precision: ".99", p50: "3.54", p95: "4.95" },
  { name: "Weaviate", indexingTime: "13.94", rps: "1142", precision: ".97", p50: "4.99", p95: "7.16" },
  { name: "Elastic Search", indexingTime: "83.72", rps: "716", precision: ".98", p50: "22.10", p95: "72.53" },
]; 