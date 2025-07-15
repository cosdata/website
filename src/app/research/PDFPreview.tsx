"use client";

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

interface PDFPreviewProps {
  pdfUrl: string;
  title: string;
}

export default function PDFPreview({ pdfUrl, title }: PDFPreviewProps) {
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="relative h-48 bg-gray-100 overflow-hidden flex items-start justify-center">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0055C8]"></div>
          </div>
        }
        error={
          <div className="flex items-center justify-center h-full text-gray-500">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        }
      >
        <div className="transform scale-100 origin-top">
          <Page
            pageNumber={1}
            width={400}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </div>
      </Document>
      <div className="absolute top-2 right-2 bg-[#0055C8] text-white px-2 py-1 rounded text-xs font-semibold">
        PDF
      </div>
    </div>
  );
}
