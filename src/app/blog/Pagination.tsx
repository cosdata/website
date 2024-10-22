'use client'
import React from 'react';
import { commonStyles } from '../styles/common';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  return (
    <div className={`flex justify-center space-x-2 ${className || ''}`}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded-md ${commonStyles.paragraph} ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-white shadow hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  )
}
