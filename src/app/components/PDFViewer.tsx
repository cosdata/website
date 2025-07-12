"use client";
import { Document, Page, Outline, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, FileText, Loader2 } from 'lucide-react';

interface PDFViewerProps {
    fileUrl: string;
}

export default function PDFViewer({ fileUrl }: PDFViewerProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageWidth, setPageWidth] = useState<number>(800);

    useEffect(() => {
        const updatePageWidth = () => {
            const newWidth = Math.min(800, window.innerWidth - 450);
            setPageWidth(newWidth);
        };

        updatePageWidth();
        window.addEventListener('resize', updatePageWidth);
        return () => window.removeEventListener('resize', updatePageWidth);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset: number) {
        setPageNumber(prevPageNumber => Math.max(1, Math.min(numPages, prevPageNumber + offset)));
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    function onItemClick({ pageNumber: itemPageNumber }: { pageNumber: number }) {
        setPageNumber(itemPageNumber);
    }

    return (
        <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

            <Document
                file={fileUrl}
                loading={
                    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                        <p className="text-gray-600 font-medium">Loading PDF...</p>
                    </div>
                }
                onLoadSuccess={onDocumentLoadSuccess}
                onItemClick={onItemClick}
                className="flex-1"
            >
                <div className="flex flex-row h-full">
                    {/* Sidebar with Outline */}
                    <div className="w-80 bg-white shadow-lg border-r border-gray-200 flex flex-col">
                        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                            <h2 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                                Table of Contents
                            </h2>
                        </div>
                        <div className="flex-1 overflow-auto p-4">
                            <Outline
                                onItemClick={onItemClick}
                                className="text-sm"
                            />
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col bg-gray-50">
                        {/* Navigation Bar */}
                        <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        disabled={pageNumber <= 1}
                                        onClick={previousPage}
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium
                                                 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                                 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500
                                                 transition-all duration-200 shadow-sm"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        Previous
                                    </button>

                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-gray-500">Page</span>
                                        <input
                                            type="number"
                                            min={1}
                                            max={numPages || 1}
                                            value={pageNumber}
                                            onChange={(e) => {
                                                const page = parseInt(e.target.value);
                                                if (page >= 1 && page <= numPages) {
                                                    setPageNumber(page);
                                                }
                                            }}
                                            className="w-16 px-2 py-1 text-center border border-gray-300 rounded-md
                                                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        <span className="text-sm text-gray-500">of {numPages || '--'}</span>
                                    </div>

                                    <button
                                        type="button"
                                        disabled={pageNumber >= numPages}
                                        onClick={nextPage}
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium
                                                 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                                 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500
                                                 transition-all duration-200 shadow-sm"
                                    >
                                        Next
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Progress Bar */}
                                <div className="flex items-center gap-3">
                                    <div className="w-32 bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${numPages ? (pageNumber / numPages) * 100 : 0}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium">
                                        {numPages ? Math.round((pageNumber / numPages) * 100) : 0}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* PDF Display Area */}
                        <div className="flex-1 flex justify-center items-start p-6 overflow-auto">
                            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
                                <Page
                                    pageNumber={pageNumber}
                                    width={pageWidth}
                                    className="max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Document>
        </div>
    );
}
