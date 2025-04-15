'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
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
  useLogScale?: boolean;
}

export default function BenchmarkBarChart({
  title,
  datasets,
  labels,
  higherIsBetter = true,
  className = '',
  maxValue,
  useLogScale = false
}: BenchmarkBarChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
        padding: 0,
        labels: {
          padding: 10,
          boxWidth: 12,
          boxHeight: 12
        },
        title: {
          padding: 0
        }
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        padding: {
          top: 0,
          bottom: 6,
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
        type: useLogScale ? 'logarithmic' as const : 'linear' as const,
        beginAtZero: !useLogScale,
        min: useLogScale ? 1 : 0, // Log scale can't handle 0
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
        top: 0,
        bottom: 10
      }
    },
  };

  const data = {
    labels,
    datasets,
  };

  return (
    <div className={`bg-white p-4 pt-2 rounded-lg shadow ${className} relative`}>
      <div className="absolute top-1 left-3 text-xs text-gray-500 italic z-10">
        {higherIsBetter ? '(higher is better)' : '(lower is better)'}
        {useLogScale && ' • Logarithmic scale'}
      </div>
      <Bar options={options} data={data} />
    </div>
  );
} 