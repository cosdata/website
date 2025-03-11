'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Options for the selectors
const indexSizeOptions = [
  { value: 1000000, label: '1M' },
  { value: 10000000, label: '10M' },
  { value: 100000000, label: '100M' },
  { value: 1000000000, label: '1B' },
];

const dimensionOptions = [
  { value: 768, label: '768' },
  { value: 1024, label: '1024' },
  { value: 1536, label: '1536' },
  { value: 3072, label: '3072' },
];

const operationOptions = [
  { value: 100000, label: '100K' },
  { value: 1000000, label: '1M' },
  { value: 10000000, label: '10M' },
  { value: 100000000, label: '100M' },
];

// Qdrant specific options
const replicationOptions = [
  { value: 1, label: '1x' },
  { value: 2, label: '2x' },
  { value: 4, label: '4x' },
  { value: 8, label: '8x' },
];

const quantizationOptions = [
  { value: 'none', label: 'None' },
  { value: 'product', label: 'Product' },
  { value: 'scalar', label: 'Scalar' },
  { value: 'binary', label: 'Binary' },
];

// Helper function to calculate vector size in bytes
const calculateVectorSizeBytes = (dimensions: number) => {
  // Assuming 4 bytes per dimension (float32)
  return dimensions * 4;
};

// Helper function to calculate storage size in GB
const calculateStorageSizeGB = (indexSize: number, dimensions: number) => {
  const vectorSizeBytes = calculateVectorSizeBytes(dimensions);
  // Convert bytes to GB (1 GB = 1,000,000,000 bytes)
  return (indexSize * vectorSizeBytes) / 1000000000;
};

// Format currency helper
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

// Interface for cost breakdown
interface CostBreakdown {
  writeCost: number;
  queryCost: number;
  storageCost: number;
  totalCost: number;
}

// Props interface for database components
interface DatabaseCostProps {
  indexSize: number;
  dimensions: number;
  writesPerMonth: number;
  queriesPerMonth: number;
}

// LanceDB Component
const LanceDBCost: React.FC<DatabaseCostProps> = ({ 
  indexSize, 
  dimensions, 
  writesPerMonth, 
  queriesPerMonth 
}) => {
  // Calculate storage size
  const storageSizeGB = calculateStorageSizeGB(indexSize, dimensions);
  
  // Calculate costs
  const writeCost = (writesPerMonth / 1000000) * 4 * (dimensions / 1536); // $4/M * dimensions/1536
  const queryCost = (queriesPerMonth / 1000000) * 10 * (dimensions / 1536); // $10/M * dimensions/1536
  const storageCost = storageSizeGB * 0.33; // $0.33/GB
  const totalCost = writeCost + queryCost + storageCost;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>LanceDB</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-4">
          {formatCurrency(totalCost)}
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Write Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(writeCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                ${(4 * (dimensions / 1536)).toFixed(2)} per million writes
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Query Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(queryCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                ${(10 * (dimensions / 1536)).toFixed(2)} per million queries
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Storage Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(storageCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                $0.33 per GB
              </p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <h3 className="font-medium mb-2">Pricing Formula</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Writes: $4 per million × (dimensions ÷ 1536)</li>
              <li>Queries: $10 per million × (dimensions ÷ 1536)</li>
              <li>Storage: $0.33 per GB</li>
            </ul>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <a 
              href="https://lancedb.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View LanceDB Pricing
            </a>
            <p className="text-xs text-gray-500 mt-2">
              For more detailed pricing information
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Pinecone Component
const PineconeCost: React.FC<DatabaseCostProps> = ({ 
  indexSize, 
  dimensions, 
  writesPerMonth, 
  queriesPerMonth 
}) => {
  // Calculate storage size
  const storageSizeGB = calculateStorageSizeGB(indexSize, dimensions);
  
  // Calculate Pinecone Read Units (RUs)
  // Based on Pinecone docs, query RU cost depends on namespace size and dimensions
  // Using the table from docs as reference:
  let queryRUPerOperation = 5; // Minimum cost
  
  if (indexSize <= 100000) {
    // 100K vectors
    if (dimensions <= 384) queryRUPerOperation = 5;
    else if (dimensions <= 768) queryRUPerOperation = 5;
    else queryRUPerOperation = 6; // 1536 dimensions
  } else if (indexSize <= 1000000) {
    // 1M vectors
    if (dimensions <= 384) queryRUPerOperation = 6;
    else if (dimensions <= 768) queryRUPerOperation = 10;
    else queryRUPerOperation = 18; // 1536 dimensions
  } else if (indexSize <= 10000000) {
    // 10M vectors
    if (dimensions <= 384) queryRUPerOperation = 18;
    else if (dimensions <= 768) queryRUPerOperation = 32;
    else queryRUPerOperation = 59; // 1536 dimensions
  } else {
    // 100M+ vectors - extrapolating from the pattern
    if (dimensions <= 384) queryRUPerOperation = 54;
    else if (dimensions <= 768) queryRUPerOperation = 96;
    else queryRUPerOperation = 177; // 1536 dimensions
  }
  
  // For top-k results, add additional RUs (1 RU per 10 results)
  const topK = 10; // Assuming top 10 results as specified
  const topKRUs = Math.ceil(topK / 10);
  
  // Total RUs for queries
  const totalQueryRUs = queriesPerMonth * (queryRUPerOperation + topKRUs);
  
  // Calculate Pinecone Write Units (WUs)
  // Based on Pinecone docs, upsert WU cost is proportional to record size
  // Using the table from docs as reference:
  let upsertWUPerRecord = 3; // Default for small dimensions
  
  if (dimensions <= 384) upsertWUPerRecord = 3;
  else if (dimensions <= 768) upsertWUPerRecord = 4;
  else upsertWUPerRecord = 7; // 1536 dimensions
  
  // Total WUs for writes
  const totalWriteWUs = writesPerMonth * upsertWUPerRecord;
  
  // Calculate costs
  const readCost = (totalQueryRUs / 1000000) * 4; // $4/M RUs
  const writeCost = (totalWriteWUs / 1000000) * 16; // $16/M WUs
  const storageCost = storageSizeGB * 1; // $1/GB
  const totalCost = readCost + writeCost + storageCost;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pinecone</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-4">
          {formatCurrency(totalCost)}
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Write Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(writeCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                {totalWriteWUs.toLocaleString()} WUs @ $16/M
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Query Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(readCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                {totalQueryRUs.toLocaleString()} RUs @ $4/M
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Storage Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(storageCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                $1 per GB
              </p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <h3 className="font-medium mb-2">Pricing Formula</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Read Units: {queryRUPerOperation + topKRUs} RUs per query × {queriesPerMonth.toLocaleString()} queries = {totalQueryRUs.toLocaleString()} RUs</li>
              <li>Write Units: {upsertWUPerRecord} WUs per write × {writesPerMonth.toLocaleString()} writes = {totalWriteWUs.toLocaleString()} WUs</li>
              <li>Read Cost: $4 per million RUs</li>
              <li>Write Cost: $16 per million WUs</li>
              <li>Storage: $1 per GB</li>
            </ul>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <a 
              href="https://pinecone.io/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Pinecone Pricing
            </a>
            <p className="text-xs text-gray-500 mt-2">
              For more detailed pricing information
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// TurboPuffer Component
const TurboPufferCost: React.FC<DatabaseCostProps> = ({ 
  indexSize, 
  dimensions, 
  writesPerMonth, 
  queriesPerMonth 
}) => {
  // Calculate vector size in bytes
  const vectorSizeBytes = calculateVectorSizeBytes(dimensions);
  
  // Calculate total storage size in GB
  const storageSizeGB = (indexSize * vectorSizeBytes) / 1000000000;
  
  // Assume 10k vectors per namespace
  const docsPerNamespace = 10000;
  const numberOfNamespaces = Math.max(1, Math.ceil(indexSize / docsPerNamespace));
  
  // Storage cost: $0.33/GB of logical storage
  const storageCost = storageSizeGB * 0.33;
  
  // Write cost: $2.00/GB of logical writes with batch discount
  // Apply a 34% write batch discount (average in production)
  const writeBatchDiscount = 0.34;
  const writeCost = (storageSizeGB * writesPerMonth / indexSize) * 2 * (1 - writeBatchDiscount);
  
  // Query cost calculation
  // TurboPuffer uses a fixed scan size of 256MB per query
  const scanSizePerQueryMB = 256;
  
  // Convert to TB for total data scanned
  const scanSizePerQueryTB = scanSizePerQueryMB / 1000000;
  
  // Total data scanned in TB
  const totalDataScannedTB = scanSizePerQueryTB * queriesPerMonth;
  
  // Data scanned cost: $0.005 per TB
  const dataScannedCost = totalDataScannedTB * 0.005;
  
  // Calculate data returned cost
  // Each query returns top 10 results with 5120 bytes per query
  const topKResults = 10;
  const bytesReturnedPerQuery = 5120; // Fixed at 5120 bytes per query
  
  // Total bytes returned across all queries
  const totalBytesReturned = bytesReturnedPerQuery * queriesPerMonth;
  
  // Convert to GB for pricing
  const totalGBReturned = totalBytesReturned / 1000000000;
  
  // Data returned cost: $0.05 per GB
  const returnedDataCost = totalGBReturned * 0.05;
  
  // Total query cost
  const queryCost = dataScannedCost + returnedDataCost;
  
  // Total cost
  const totalCost = storageCost + writeCost + queryCost;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>TurboPuffer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-4">
          {formatCurrency(totalCost)}
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Storage Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(storageCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                {storageSizeGB.toFixed(1)} GB @ $0.33/GB
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Write Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(writeCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                $2/GB with {(writeBatchDiscount * 100).toFixed(0)}% batch discount
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Query Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(queryCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                Data scanned: {formatCurrency(dataScannedCost)}
              </p>
              <p className="text-xs text-gray-500">
                Data returned: {formatCurrency(returnedDataCost)}
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-500">Query Configuration</p>
            <p className="text-sm mt-1">
              <span className="font-medium">{numberOfNamespaces.toLocaleString()}</span> namespaces (10k vectors each)
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Fixed scan size: 256 MB per query
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Each query returns {(bytesReturnedPerQuery / 1024).toFixed(1)} KB (top {topKResults} results)
            </p>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <h3 className="font-medium mb-2">Pricing Formula</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Storage: $0.33 per GB of logical storage</li>
              <li>Writes: $2 per GB with {(writeBatchDiscount * 100).toFixed(0)}% batch discount</li>
              <li>Queries: $0.005 per TB scanned (fixed 256MB per query) + $0.05 per GB returned</li>
            </ul>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <a 
              href="https://turbopuffer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View TurboPuffer Pricing
            </a>
            <p className="text-xs text-gray-500 mt-2">
              For more detailed pricing information
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Qdrant Component
interface QdrantCostProps extends DatabaseCostProps {
  replicationFactor: number;
  quantization: string;
  diskOffloading: boolean;
}

// Hardcoded Qdrant pricing model based on actual pricing data
const calculateQdrantPrice = (
  indexSize: number,
  dimensions: number,
  replicationFactor: number,
  quantization: string,
  diskOffloading: boolean
) => {
  // Define types for the pricing data structure
  interface PricingInfo {
    price: number;
    ram: number;
    vcpu: number;
    disk: number;
    nodes: number;
    additionalDisk: number;
  }
  
  interface DimensionPricing {
    [dimension: string]: PricingInfo;
  }
  
  interface VectorPricing {
    [vectorCount: string]: DimensionPricing;
  }
  
  // Pricing data based on user-provided information
  // For 1x replication, disk offloading enabled (20% in RAM), no quantization
  const pricingData: VectorPricing = {
    "1000000": { // 1M vectors
      "768": { price: 26.10, ram: 2, vcpu: 0.5, disk: 8, nodes: 1, additionalDisk: 0 },
      "1024": { price: 26.10, ram: 2, vcpu: 0.5, disk: 8, nodes: 1, additionalDisk: 0 },
      "1536": { price: 26.10, ram: 2, vcpu: 0.5, disk: 8, nodes: 1, additionalDisk: 0 },
      "3072": { price: 27.00, ram: 2, vcpu: 0.5, disk: 8, nodes: 1, additionalDisk: 2 }
    },
    "10000000": { // 10M vectors
      "768": { price: 102.51, ram: 12, vcpu: 1.5, disk: 48, nodes: 3, additionalDisk: 0 },
      "1024": { price: 136.68, ram: 16, vcpu: 2, disk: 64, nodes: 1, additionalDisk: 0 },
      "1536": { price: 177.55, ram: 20, vcpu: 2.5, disk: 80, nodes: 5, additionalDisk: 15 },
      "3072": { price: 352.86, ram: 40, vcpu: 5, disk: 160, nodes: 5, additionalDisk: 25 }
    },
    "100000000": { // 100M vectors
      "768": { price: 854.90, ram: 96, vcpu: 12, disk: 384, nodes: 3, additionalDisk: 78 },
      "1024": { price: 1139.42, ram: 128, vcpu: 16, disk: 512, nodes: 1, additionalDisk: 103 },
      "1536": { price: 1709.81, ram: 192, vcpu: 24, disk: 768, nodes: 3, additionalDisk: 156 },
      "3072": { price: 3418.27, ram: 384, vcpu: 48, disk: 1536, nodes: 3, additionalDisk: 309 }
    },
    "1000000000": { // 1B vectors
      "768": { price: 8976.46, ram: 1024, vcpu: 128, disk: 4096, nodes: 4, additionalDisk: 512 },
      "1024": { price: 11392.01, ram: 1280, vcpu: 160, disk: 5120, nodes: 1, additionalDisk: 1025 },
      "1536": { price: 17952.24, ram: 2048, vcpu: 256, disk: 8192, nodes: 8, additionalDisk: 1024 },
      "3072": { price: 34176.02, ram: 3840, vcpu: 480, disk: 15360, nodes: 15, additionalDisk: 3075 }
    }
  };
  
  // Find the closest index size and dimension in our pricing data
  const indexSizeKeys = Object.keys(pricingData).map(Number);
  const closestIndexSize = indexSizeKeys.reduce((prev, curr) => {
    return Math.abs(curr - indexSize) < Math.abs(prev - indexSize) ? curr : prev;
  });
  
  const closestIndexSizeStr = closestIndexSize.toString();
  const dimensionKeys = Object.keys(pricingData[closestIndexSizeStr]).map(Number);
  const closestDimension = dimensionKeys.reduce((prev, curr) => {
    return Math.abs(curr - dimensions) < Math.abs(prev - dimensions) ? curr : prev;
  });
  
  // Get the base pricing for the closest configuration
  const closestDimensionStr = closestDimension.toString();
  const basePricing = pricingData[closestIndexSizeStr][closestDimensionStr];
  
  // Apply scaling factors for different configurations
  let totalPrice = basePricing.price;
  
  // Scale price based on replication factor (linear scaling)
  if (replicationFactor > 1) {
    totalPrice = totalPrice * replicationFactor;
  }
  
  // Apply discount for quantization
  if (quantization !== 'none') {
    let quantizationDiscount = 1.0;
    switch(quantization) {
      case 'product':
        quantizationDiscount = 0.7; // 30% discount for product quantization
        break;
      case 'scalar':
        quantizationDiscount = 0.8; // 20% discount for scalar quantization
        break;
      case 'binary':
        quantizationDiscount = 0.6; // 40% discount for binary quantization
        break;
    }
    totalPrice = totalPrice * quantizationDiscount;
  }
  
  // If disk offloading is disabled, increase price (more RAM needed)
  if (!diskOffloading) {
    totalPrice = totalPrice * 1.5; // 50% increase if all vectors in RAM
  }
  
  // Calculate storage size for display
  const storageSizeGB = calculateStorageSizeGB(indexSize, dimensions);
  
  // Apply quantization factor to reduce storage requirements for display
  let quantizationFactor = 1.0;
  switch(quantization) {
    case 'product':
      quantizationFactor = 0.25; // Product quantization reduces size to ~25%
      break;
    case 'scalar':
      quantizationFactor = 0.5; // Scalar quantization reduces size to ~50%
      break;
    case 'binary':
      quantizationFactor = 0.125; // Binary quantization reduces size to ~12.5%
      break;
    default:
      quantizationFactor = 1.0; // No quantization
  }
  
  // Calculate effective storage size after quantization
  const effectiveStorageSizeGB = storageSizeGB * quantizationFactor;
  
  // Calculate RAM requirements for display
  let ramSizeGB = effectiveStorageSizeGB;
  if (diskOffloading) {
    // If disk offloading is enabled, only 20% is kept in RAM
    ramSizeGB = effectiveStorageSizeGB * 0.2;
  }
  
  // Apply replication factor
  const totalRamSizeGB = ramSizeGB * replicationFactor;
  const totalStorageSizeGB = effectiveStorageSizeGB * replicationFactor;
  
  // For display purposes, estimate the breakdown of costs
  const instanceCost = totalPrice * 0.7; // Approximately 70% of cost is for instances
  const storageCost = totalPrice * 0.25; // Approximately 25% of cost is for storage
  const networkCost = totalPrice * 0.05; // Approximately 5% of cost is for network
  
  return {
    instanceType: basePricing.nodes > 1 ? `cluster (${basePricing.nodes} nodes)` : `single node`,
    instanceCount: basePricing.nodes,
    instanceCost,
    storageCost,
    networkCost,
    totalCost: totalPrice,
    ramSizeGB: totalRamSizeGB,
    storageSizeGB: totalStorageSizeGB,
    vcpu: basePricing.vcpu * replicationFactor
  };
};

const QdrantCost: React.FC<QdrantCostProps> = ({ 
  indexSize, 
  dimensions, 
  writesPerMonth, 
  queriesPerMonth,
  replicationFactor,
  quantization,
  diskOffloading
}) => {
  // Calculate Qdrant price using our model
  const pricing = calculateQdrantPrice(
    indexSize,
    dimensions,
    replicationFactor,
    quantization,
    diskOffloading
  );
  
  // Generate Qdrant calculator URL with the current parameters
  const qdrantCalculatorUrl = `https://cloud.qdrant.io/calculator?provider=aws&region=us-east-1&vectors=${indexSize}&dimension=${dimensions}&storageOptimized=${diskOffloading ? 'true' : 'false'}&replicas=${replicationFactor}&quantization=${quantization === 'none' ? 'None' : quantization === 'product' ? 'Product' : quantization === 'scalar' ? 'Scalar8' : 'Binary'}&storageRAMCachePercentage=${diskOffloading ? '20' : '100'}`;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Qdrant</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-4">
          {formatCurrency(pricing.totalCost)}
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Resources</p>
              <p className="text-lg font-semibold">
                {pricing.instanceCount > 1 ? `${pricing.instanceCount} nodes` : "Single node"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {pricing.vcpu} vCPUs, {pricing.ramSizeGB.toFixed(1)} GB RAM
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {pricing.storageSizeGB.toFixed(1)} GB Storage
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Default Configuration</p>
              <p className="text-xs text-gray-500 mt-1">
                Base pricing with standard settings:
              </p>
              <ul className="list-disc pl-4 text-xs text-gray-500 mt-1">
                <li>No replication (1x)</li>
                <li>No quantization</li>
                <li>20% vectors in RAM</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <a 
              href={qdrantCalculatorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Explore More Options in Qdrant Calculator
            </a>
            <p className="text-xs text-gray-500 mt-2">
              Try different configurations like replication, quantization, and RAM settings
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Weaviate Component
const WeaviateCost: React.FC<DatabaseCostProps> = ({ 
  indexSize, 
  dimensions, 
  writesPerMonth, 
  queriesPerMonth 
}) => {
  // Define pricing data based on user-provided information
  interface DimensionPricing {
    [dimension: string]: number;
  }
  
  interface VectorPricing {
    [vectorCount: string]: DimensionPricing;
  }
  
  const pricingData: VectorPricing = {
    "1000000": { // 1M vectors
      "768": 71,
      "1024": 95,
      "1536": 143,
      "3072": 286
    },
    "10000000": { // 10M vectors
      "768": 735,
      "1024": 980,
      "1536": 1470,
      "3072": 2940
    }
  };
  
  // Check if pricing is available for the selected scale
  const isScaleSupported = indexSize <= 10000000;
  
  let totalCost = 0;
  let closestIndexSize = 0;
  let closestDimension = 0;
  
  if (isScaleSupported) {
    // Find the closest index size in our pricing data
    const indexSizeKeys = Object.keys(pricingData).map(Number);
    closestIndexSize = indexSizeKeys.reduce((prev, curr) => {
      return Math.abs(curr - indexSize) < Math.abs(prev - indexSize) ? curr : prev;
    });
    
    // Find the closest dimension in our pricing data
    const dimensionKeys = Object.keys(pricingData[closestIndexSize.toString()]).map(Number);
    closestDimension = dimensionKeys.reduce((prev, curr) => {
      return Math.abs(curr - dimensions) < Math.abs(prev - dimensions) ? curr : prev;
    });
    
    // Get the price for the closest configuration
    totalCost = pricingData[closestIndexSize.toString()][closestDimension.toString()];
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weaviate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-4">
          {isScaleSupported ? formatCurrency(totalCost) : "N/A"}
        </div>
        
        {isScaleSupported ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Monthly Cost</p>
                <p className="text-lg font-semibold">{formatCurrency(totalCost)}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Fixed monthly price
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Configuration</p>
                <p className="text-xs text-gray-500 mt-1">
                  Based on standard SLA tier with:
                </p>
                <ul className="list-disc pl-4 text-xs text-gray-500 mt-1">
                  <li>Performance storage</li>
                  <li>No high availability</li>
                  <li>{closestIndexSize.toLocaleString()} vectors</li>
                  <li>{closestDimension} dimensions</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <a 
                href="https://weaviate.io/pricing/serverless"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Weaviate Pricing
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Weaviate Cloud Services pricing page
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Scale Not Supported</p>
              <p className="text-xs text-gray-500 mt-1">
                Weaviate doesn&apos;t advertise pricing for more than 50M vectors.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Contact Weaviate for custom pricing at this scale.
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <a 
                href="https://weaviate.io/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contact Weaviate
              </a>
              <p className="text-xs text-gray-500 mt-2">
                For custom pricing at larger scales
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Zilliz Component
const ZillizCost: React.FC<DatabaseCostProps> = ({ 
  indexSize, 
  dimensions, 
  writesPerMonth, 
  queriesPerMonth 
}) => {
  // Calculate storage size
  const storageSizeGB = calculateStorageSizeGB(indexSize, dimensions);
  
  // Calculate write vCU usage based on data size
  // 1 KB of inserted data = 0.25 vCU
  // Convert vector size to KB (1 KB = 1024 bytes)
  const vectorSizeKB = calculateVectorSizeBytes(dimensions) / 1024;
  const totalWriteDataKB = vectorSizeKB * writesPerMonth;
  const writeVCUs = totalWriteDataKB * 0.25;
  
  // Calculate write cost
  // vCU Unit Price: $4 per million vCUs
  const writeCost = (writeVCUs / 1000000) * 4;
  
  // Calculate read vCU usage based on data scanned
  // The vCU usage doesn't grow proportionately with the data size scanned
  // Using the examples from the documentation to estimate
  let readVCUsPerMillion = 0;
  
  if (dimensions <= 128) {
    // 1M 128-dim vectors = 5M vCUs for 1M queries
    readVCUsPerMillion = 5;
  } else if (dimensions <= 768) {
    if (indexSize <= 1000000) {
      // 1M 768-dim vectors = 15M vCUs for 1M queries
      readVCUsPerMillion = 15;
    } else if (indexSize <= 5000000) {
      // 5M 768-dim vectors = 35M vCUs for 1M queries
      readVCUsPerMillion = 35;
    } else if (indexSize <= 10000000) {
      // 10M 768-dim vectors = 55M vCUs for 1M queries
      readVCUsPerMillion = 55;
    } else {
      // Extrapolating for larger datasets
      readVCUsPerMillion = 55 + (indexSize - 10000000) / 1000000 * 5;
    }
  } else if (dimensions <= 1536) {
    if (indexSize <= 1000000) {
      // 1M 1536-dim vectors = 25M vCUs for 1M queries
      readVCUsPerMillion = 25;
    } else if (indexSize <= 10000000) {
      // 10M 1536-dim vectors = 75M vCUs for 1M queries
      readVCUsPerMillion = 75;
    } else if (indexSize <= 100000000) {
      // 100M 1536-dim vectors = 290M vCUs for 1M queries
      readVCUsPerMillion = 290;
    } else {
      // 10B 1536-dim vectors = 1,495M vCUs for 1M queries (extrapolating)
      readVCUsPerMillion = 290 + (indexSize - 100000000) / 100000000 * 120;
    }
  } else {
    // For 2560-dim vectors and above
    if (indexSize <= 1000000) {
      // 1M 2560-dim vectors = 30M vCUs for 1M queries
      readVCUsPerMillion = 30;
    } else {
      // Extrapolating for larger datasets
      readVCUsPerMillion = 30 + (indexSize - 1000000) / 1000000 * 5;
    }
  }
  
  // Calculate total read vCUs
  const readVCUs = (queriesPerMonth / 1000000) * readVCUsPerMillion * 1000000;
  
  // Calculate read cost
  // vCU Unit Price: $4 per million vCUs
  const readCost = (readVCUs / 1000000) * 4;
  
  // Calculate storage cost
  // Storage unit price: $0.30/GB per month
  const storageCost = storageSizeGB * 0.3;
  
  // Calculate total cost
  const totalCost = writeCost + readCost + storageCost;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Zilliz (Serverless)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-4">
          {formatCurrency(totalCost)}
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Write Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(writeCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                {writeVCUs.toLocaleString()} vCUs @ $4/M
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Query Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(readCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                {readVCUs.toLocaleString()} vCUs @ $4/M
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Storage Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(storageCost)}</p>
              <p className="text-xs text-gray-500 mt-1">
                $0.30 per GB
              </p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <h3 className="font-medium mb-2">Pricing Formula</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Write Cost: $4 per million vCUs (1 KB data = 0.25 vCU)</li>
              <li>Query Cost: $4 per million vCUs (varies by data size and dimensions)</li>
              <li>Storage: $0.30 per GB per month</li>
            </ul>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <a 
              href="https://zilliz.com/pricing#calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Zilliz Pricing
            </a>
            <p className="text-xs text-gray-500 mt-2">
              For more detailed pricing information
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Summary component to display all database prices
const PriceSummary: React.FC<{
  indexSize: number;
  dimensions: number;
  writesPerMonth: number;
  queriesPerMonth: number;
}> = ({ indexSize, dimensions, writesPerMonth, queriesPerMonth }) => {
  // Calculate all database costs
  const storageSizeGB = calculateStorageSizeGB(indexSize, dimensions);
  
  // LanceDB
  const lanceWriteCost = (writesPerMonth / 1000000) * 4 * (dimensions / 1536);
  const lanceQueryCost = (queriesPerMonth / 1000000) * 10 * (dimensions / 1536);
  const lanceStorageCost = storageSizeGB * 0.33;
  const lanceTotalCost = lanceWriteCost + lanceQueryCost + lanceStorageCost;
  
  // Pinecone
  let queryRUPerOperation = 5;
  if (indexSize <= 100000) {
    if (dimensions <= 384) queryRUPerOperation = 5;
    else if (dimensions <= 768) queryRUPerOperation = 5;
    else queryRUPerOperation = 6;
  } else if (indexSize <= 1000000) {
    if (dimensions <= 384) queryRUPerOperation = 6;
    else if (dimensions <= 768) queryRUPerOperation = 10;
    else queryRUPerOperation = 18;
  } else if (indexSize <= 10000000) {
    if (dimensions <= 384) queryRUPerOperation = 18;
    else if (dimensions <= 768) queryRUPerOperation = 32;
    else queryRUPerOperation = 59;
  } else {
    if (dimensions <= 384) queryRUPerOperation = 54;
    else if (dimensions <= 768) queryRUPerOperation = 96;
    else queryRUPerOperation = 177;
  }
  const topK = 10;
  const topKRUs = Math.ceil(topK / 10);
  const totalQueryRUs = queriesPerMonth * (queryRUPerOperation + topKRUs);
  
  let upsertWUPerRecord = 3;
  if (dimensions <= 384) upsertWUPerRecord = 3;
  else if (dimensions <= 768) upsertWUPerRecord = 4;
  else upsertWUPerRecord = 7;
  
  const totalWriteWUs = writesPerMonth * upsertWUPerRecord;
  const pineconeReadCost = (totalQueryRUs / 1000000) * 4;
  const pineconeWriteCost = (totalWriteWUs / 1000000) * 16;
  const pineconeStorageCost = storageSizeGB * 1;
  const pineconeTotalCost = pineconeReadCost + pineconeWriteCost + pineconeStorageCost;
  
  // TurboPuffer
  const vectorSizeBytes = calculateVectorSizeBytes(dimensions);
  const docsPerNamespace = 10000;
  const numberOfNamespaces = Math.max(1, Math.ceil(indexSize / docsPerNamespace));
  const writeBatchDiscount = 0.34;
  const turboPufferStorageCost = storageSizeGB * 0.33;
  const turboPufferWriteCost = (storageSizeGB * writesPerMonth / indexSize) * 2 * (1 - writeBatchDiscount);
  
  // Updated query cost calculation with fixed values
  const scanSizePerQueryMB = 256;
  const scanSizePerQueryTB = scanSizePerQueryMB / 1000000;
  const totalDataScannedTB = scanSizePerQueryTB * queriesPerMonth;
  const dataScannedCost = totalDataScannedTB * 0.005;
  
  const bytesReturnedPerQuery = 5120; // Fixed at 5120 bytes per query
  const totalBytesReturned = bytesReturnedPerQuery * queriesPerMonth;
  const totalGBReturned = totalBytesReturned / 1000000000;
  const returnedDataCost = totalGBReturned * 0.05;
  
  const turboPufferQueryCost = dataScannedCost + returnedDataCost;
  const turboPufferTotalCost = turboPufferStorageCost + turboPufferWriteCost + turboPufferQueryCost;
  
  // Qdrant
  const qdrantPricing = calculateQdrantPrice(indexSize, dimensions, 1, 'none', true);
  
  // Weaviate
  interface DimensionPricing {
    [dimension: string]: number;
  }
  
  interface VectorPricing {
    [vectorCount: string]: DimensionPricing;
  }
  
  const weaviatePricingData: VectorPricing = {
    "1000000": {
      "768": 71,
      "1024": 95,
      "1536": 143,
      "3072": 286
    },
    "10000000": {
      "768": 735,
      "1024": 980,
      "1536": 1470,
      "3072": 2940
    }
  };
  
  const isWeaviateSupported = indexSize <= 10000000;
  let weaviateTotalCost = 0;
  
  if (isWeaviateSupported) {
    const indexSizeKeys = Object.keys(weaviatePricingData).map(Number);
    const closestIndexSize = indexSizeKeys.reduce((prev, curr) => {
      return Math.abs(curr - indexSize) < Math.abs(prev - indexSize) ? curr : prev;
    });
    
    const closestIndexSizeStr = closestIndexSize.toString();
    const dimensionKeys = Object.keys(weaviatePricingData[closestIndexSizeStr]).map(Number);
    const closestDimension = dimensionKeys.reduce((prev, curr) => {
      return Math.abs(curr - dimensions) < Math.abs(prev - dimensions) ? curr : prev;
    });
    
    const closestDimensionStr = closestDimension.toString();
    weaviateTotalCost = weaviatePricingData[closestIndexSizeStr][closestDimensionStr];
  }
  
  // Zilliz
  const vectorSizeKB = vectorSizeBytes / 1024;
  const totalWriteDataKB = vectorSizeKB * writesPerMonth;
  const writeVCUs = totalWriteDataKB * 0.25;
  const zillizWriteCost = (writeVCUs / 1000000) * 4;
  
  let readVCUsPerMillion = 0;
  if (dimensions <= 128) {
    readVCUsPerMillion = 5;
  } else if (dimensions <= 768) {
    if (indexSize <= 1000000) readVCUsPerMillion = 15;
    else if (indexSize <= 5000000) readVCUsPerMillion = 35;
    else if (indexSize <= 10000000) readVCUsPerMillion = 55;
    else readVCUsPerMillion = 55 + (indexSize - 10000000) / 1000000 * 5;
  } else if (dimensions <= 1536) {
    if (indexSize <= 1000000) readVCUsPerMillion = 25;
    else if (indexSize <= 10000000) readVCUsPerMillion = 75;
    else if (indexSize <= 100000000) readVCUsPerMillion = 290;
    else readVCUsPerMillion = 290 + (indexSize - 100000000) / 100000000 * 120;
  } else {
    if (indexSize <= 1000000) readVCUsPerMillion = 30;
    else readVCUsPerMillion = 30 + (indexSize - 1000000) / 1000000 * 5;
  }
  
  const readVCUs = (queriesPerMonth / 1000000) * readVCUsPerMillion * 1000000;
  const zillizReadCost = (readVCUs / 1000000) * 4;
  const zillizStorageCost = storageSizeGB * 0.3;
  const zillizTotalCost = zillizWriteCost + zillizReadCost + zillizStorageCost;
  
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Monthly Cost Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium">LanceDB</p>
                <p className="text-xs text-gray-500">Serverless</p>
              </div>
              <p className="text-xl font-semibold">{formatCurrency(lanceTotalCost)}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium">Pinecone</p>
                <p className="text-xs text-gray-500">Serverless</p>
              </div>
              <p className="text-xl font-semibold">{formatCurrency(pineconeTotalCost)}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium">TurboPuffer</p>
                <p className="text-xs text-gray-500">Serverless</p>
              </div>
              <p className="text-xl font-semibold">{formatCurrency(turboPufferTotalCost)}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium">Qdrant</p>
                <p className="text-xs text-gray-500">Dedicated cluster</p>
              </div>
              <p className="text-xl font-semibold">{formatCurrency(qdrantPricing.totalCost)}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium">Weaviate</p>
                <p className="text-xs text-gray-500">Serverless</p>
              </div>
              <p className="text-xl font-semibold">{isWeaviateSupported ? formatCurrency(weaviateTotalCost) : "N/A"}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium">Zilliz</p>
                <p className="text-xs text-gray-500">Serverless</p>
              </div>
              <p className="text-xl font-semibold">{formatCurrency(zillizTotalCost)}</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Vector Size: {vectorSizeBytes} bytes | Total Storage: {storageSizeGB.toFixed(2)} GB
            </p>
            <p className="text-sm text-gray-500">
              {indexSize.toLocaleString()} vectors | {writesPerMonth.toLocaleString()} writes | {queriesPerMonth.toLocaleString()} queries
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function CostComparisonPage() {
  // State for form values
  const [indexSize, setIndexSize] = useState(indexSizeOptions[0].value);
  const [dimensions, setDimensions] = useState(dimensionOptions[0].value);
  const [writesPerMonth, setWritesPerMonth] = useState(operationOptions[0].value);
  const [queriesPerMonth, setQueriesPerMonth] = useState(operationOptions[0].value);
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Vector Database Cost Comparison</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Index Size (Vectors)</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={indexSize}
                onChange={(e) => setIndexSize(Number(e.target.value))}
              >
                {indexSizeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Vector Dimensions</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={dimensions}
                onChange={(e) => setDimensions(Number(e.target.value))}
              >
                {dimensionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Writes per Month</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={writesPerMonth}
                onChange={(e) => setWritesPerMonth(Number(e.target.value))}
              >
                {operationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Queries per Month</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={queriesPerMonth}
                onChange={(e) => setQueriesPerMonth(Number(e.target.value))}
              >
                {operationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>
        
        <div className="md:col-span-2">
          <PriceSummary
            indexSize={indexSize}
            dimensions={dimensions}
            writesPerMonth={writesPerMonth}
            queriesPerMonth={queriesPerMonth}
          />
        </div>
      </div>
      
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2">Detailed Breakdown</h2>
        <p className="text-gray-500">Scroll down to see detailed pricing information for each database</p>
        <div className="mt-4 flex justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="animate-bounce text-gray-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LanceDBCost 
          indexSize={indexSize}
          dimensions={dimensions}
          writesPerMonth={writesPerMonth}
          queriesPerMonth={queriesPerMonth}
        />
        
        <PineconeCost
          indexSize={indexSize}
          dimensions={dimensions}
          writesPerMonth={writesPerMonth}
          queriesPerMonth={queriesPerMonth}
        />
        
        <TurboPufferCost
          indexSize={indexSize}
          dimensions={dimensions}
          writesPerMonth={writesPerMonth}
          queriesPerMonth={queriesPerMonth}
        />
        
        <QdrantCost
          indexSize={indexSize}
          dimensions={dimensions}
          writesPerMonth={writesPerMonth}
          queriesPerMonth={queriesPerMonth}
          replicationFactor={1}
          quantization="none"
          diskOffloading={true}
        />
        
        <WeaviateCost
          indexSize={indexSize}
          dimensions={dimensions}
          writesPerMonth={writesPerMonth}
          queriesPerMonth={queriesPerMonth}
        />
        
        <ZillizCost
          indexSize={indexSize}
          dimensions={dimensions}
          writesPerMonth={writesPerMonth}
          queriesPerMonth={queriesPerMonth}
        />
      </div>
    </div>
  );
} 