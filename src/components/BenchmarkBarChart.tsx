'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BenchmarkBarChartProps {
  title: string;
  datasets: {
    label: string;
    backgroundColor: string;
    data: (number | string)[];
  }[];
  labels: string[];
  higherIsBetter?: boolean;
  className?: string;
  maxValue?: number;
}

export default function BenchmarkBarChart({
  title,
  datasets,
  labels,
  higherIsBetter = true,
  className = '',
  maxValue
}: BenchmarkBarChartProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold' as const,
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const value = context.parsed.y;
            return `${context.dataset.label}: ${value.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: maxValue,
        ticks: {
          callback: function(value: any) {
            if (value >= 1000) {
              return (value / 1000).toLocaleString() + 'k';
            }
            return value;
          }
        }
      },
      x: {
        ticks: {
          padding: 10
        }
      }
    },
    layout: {
      padding: {
        bottom: 15
      }
    },
  };

  const data = {
    labels,
    datasets,
  };

  return (
    <div className={`bg-white p-4 rounded-lg shadow ${className}`}>
      <div className="mb-2 text-xs text-gray-500 italic">
        {higherIsBetter ? '(higher is better)' : '(lower is better)'}
      </div>
      <Bar options={options} data={data} />
    </div>
  );
} 