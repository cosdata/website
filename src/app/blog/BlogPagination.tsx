'use client'

import { useRouter, useSearchParams } from 'next/navigation';

interface BlogPaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams?.toString() || '');
        if (page === 1) {
            params.delete('page');
        } else {
            params.set('page', page.toString());
        }

        const query = params.toString();
        const url = query ? `/blog?${query}` : '/blog';
        router.push(url);

        // Scroll to top when changing pages
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (totalPages <= 1) {
        return null;
    }

    const generatePageNumbers = () => {
        const pages = [];
        const delta = 2; // Number of pages to show on each side of current page

        // Always show first page
        if (currentPage - delta > 1) {
            pages.push(1);
            if (currentPage - delta > 2) {
                pages.push('...');
            }
        }

        // Show pages around current page
        for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
            pages.push(i);
        }

        // Always show last page
        if (currentPage + delta < totalPages) {
            if (currentPage + delta < totalPages - 1) {
                pages.push('...');
            }
            pages.push(totalPages);
        }

        return pages;
    };

    const pages = generatePageNumbers();

    return (
        <nav className="flex items-center justify-center space-x-2" aria-label="Pagination">
            {/* Previous Button */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className={`
          inline-flex items-center px-3 py-2 text-sm font-medium rounded-md
          ${currentPage <= 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-[#0055c8] hover:bg-blue-50 hover:text-[#003d8f]'
                    }
          transition-colors duration-200
        `}
                aria-label="Go to previous page"
            >
                ← Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-1">
                {pages.map((page, index) => (
                    <span key={index}>
                        {page === '...' ? (
                            <span className="px-3 py-2 text-gray-500">...</span>
                        ) : (
                            <button
                                onClick={() => handlePageChange(page as number)}
                                className={`
                  px-3 py-2 text-sm font-medium rounded-md min-w-[40px]
                  ${currentPage === page
                                        ? 'bg-[#0055c8] text-white'
                                        : 'text-[#0055c8] hover:bg-blue-50 hover:text-[#003d8f]'
                                    }
                  transition-colors duration-200
                `}
                                aria-label={`Go to page ${page}`}
                                aria-current={currentPage === page ? 'page' : undefined}
                            >
                                {page}
                            </button>
                        )}
                    </span>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className={`
          inline-flex items-center px-3 py-2 text-sm font-medium rounded-md
          ${currentPage >= totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-[#0055c8] hover:bg-blue-50 hover:text-[#003d8f]'
                    }
          transition-colors duration-200
        `}
                aria-label="Go to next page"
            >
                Next →
            </button>
        </nav>
    );
}
