"use client";

import Link from 'next/link';
import { commonStyles, afacad, geologica } from '../styles/common';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

interface PDFPreviewProps {
  pdfUrl: string;
  title: string;
}

function PDFPreview({ pdfUrl, title }: PDFPreviewProps) {
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

interface ResearchPaper {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  innovations: string[];
  pdfUrl: string;
  pageUrl: string;
}

const researchPapers: ResearchPaper[] = [
  {
    id: 'channi',
    title: 'CHANNI',
    subtitle: 'Multi-Level Vector Search Index with Nested Graph Navigation',
    description: 'CHANNI introduces a novel vector indexing architecture that bridges the gap between memory-efficient clustering and high-performance graph navigation, combining hierarchical navigable small world graphs at multiple levels.',
    innovations: [
      'Multi-level navigation architecture leveraging HNSW graphs',
      'Primary-based cluster representation for efficient memory utilization',
      'Innovative sample-based clustering strategy with minimal computational expense'
    ],
    pdfUrl: '/pdfs/channi.pdf',
    pageUrl: '/research/channi-multi-level-vector-search-nested-graph-navigation'
  },
  {
    id: 'mavann',
    title: 'MAVANN',
    subtitle: 'Metadata-Aware Vector Approximate Nearest Neighbor',
    description: 'MAVANN introduces a novel approach to metadata filtering in vector databases, integrating metadata directly into the vector search process for dramatically improved performance without sacrificing result quality.',
    innovations: [
      'Metadata-aware vector navigation for efficient pre-filtering during search',
      'Dynamic re-routing based on both vector similarity and metadata constraints',
      'Up to 20x faster query performance with complex metadata filtering'
    ],
    pdfUrl: '/pdfs/mavann.pdf',
    pageUrl: '/research/mavann-metadata-aware-vector-approximate-nearest-neighbor'
  },
  {
    id: 'dynamic-memory',
    title: 'Dynamic Memory AI Agents',
    subtitle: 'Toward a Human-Like Memory System for AI Agents',
    description: 'This research explores the development of dynamic memory systems for AI agents, enabling more human-like information processing and retention capabilities for enhanced long-term interactions.',
    innovations: [
      'Human-inspired memory architecture for AI systems',
      'Dynamic information retention and retrieval mechanisms',
      'Enhanced long-term context understanding for AI agents'
    ],
    pdfUrl: '/pdfs/dynamic-memory-ai-agents.pdf',
    pageUrl: '/research/dynamic-memory-ai-agents'
  }
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#f0f7ff]">
      <div className={`${commonStyles.mainContainer} py-16`}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className={`${commonStyles.sectionTitle} mb-6`}>
            Research & Innovation
          </h1>
          <p className={`${commonStyles.sectionSubtitle} max-w-4xl mx-auto`}>
            Explore our cutting-edge research papers that power the next generation of vector search technology. 
            Each paper represents breakthrough innovations in vector indexing, metadata-aware search, and AI memory systems.
          </p>
        </div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {researchPapers.map((paper) => (
            <div key={paper.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              {/* PDF Preview */}
              <PDFPreview pdfUrl={paper.pdfUrl} title={paper.title} />
              
              <div className="h-2 bg-[#0055C8]"></div>
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#0055C8]">
                    Research Paper
                  </span>
                  <h3 className={`text-2xl font-bold text-[#0055C8] ${geologica.className}`}>
                    {paper.title}
                  </h3>
                </div>
                
                {/* Title and Description */}
                <h4 className={`text-xl mb-4 font-medium text-gray-900 ${geologica.className}`}>
                  {paper.subtitle}
                </h4>
                
                <p className={`${commonStyles.paragraph} mb-6 text-base leading-relaxed`}>
                  {paper.description}
                </p>
                
                {/* Key Innovations */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h5 className={`text-base font-semibold text-gray-800 mb-3 ${geologica.className}`}>
                    Key Innovations:
                  </h5>
                  <ul className={`text-[#374151] space-y-2 text-base ${afacad.className}`}>
                    {paper.innovations.map((innovation, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-[#0055C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{innovation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href={paper.pageUrl}
                    className="flex-1 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0055C8] hover:bg-blue-800 transition-colors duration-300"
                  >
                    Read the Paper
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <a 
                    href={paper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-5 py-3 border-2 border-[#0055C8] text-base font-medium rounded-md text-[#0055C8] hover:bg-[#0055C8] hover:text-white transition-colors duration-300"
                  >
                    Download PDF
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-8">
          <h2 className={`text-2xl font-bold text-[#0055c8] mb-4 ${geologica.className}`}>
            Stay Updated with Our Research
          </h2>
          <p className={`${commonStyles.paragraph} mb-6 max-w-2xl mx-auto`}>
            Our research team continuously pushes the boundaries of vector search technology. 
            Follow our work to stay at the forefront of search innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0055C8] hover:bg-blue-800 transition-colors duration-300"
            >
              Read Our Blog
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a 
              href="https://github.com/cosdata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-[#0055C8] text-base font-medium rounded-md text-[#0055C8] hover:bg-[#0055C8] hover:text-white transition-colors duration-300"
            >
              View on GitHub
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}