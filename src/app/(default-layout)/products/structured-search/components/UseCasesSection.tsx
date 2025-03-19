"use client";
import Link from 'next/link';
import { commonStyles } from '../../../../styles/common';

export default function UseCasesSection() {
  const applications = [
    {
      title: "Agentic Memory",
      description: "Enable AI agents to build and maintain structured memory of interactions, entities, and relationships for more coherent and contextual responses over time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-[#0055c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Enterprise Knowledge Bases",
      description: "Create comprehensive knowledge graphs from enterprise data, enabling more accurate information retrieval and contextual understanding for corporate AI assistants.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-[#0055c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Complex Reasoning",
      description: "Support multi-hop reasoning and inference by traversing relationship paths in the knowledge graph, enabling AI systems to answer complex questions requiring multiple steps of logic.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-[#0055c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gray-50 px-4 sm:px-6">
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0055c8] mb-8 sm:mb-12">
          Graph-Based RAG: The Future of Contextual Retrieval
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 mb-10 sm:mb-16">
          <div className="md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0055c8] mb-3 sm:mb-4">
              What is Graph-based RAG?
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              Graph-based RAG is an advanced approach that enhances traditional RAG systems by incorporating structured relationships between data points. This enables AI systems to understand context, follow complex reasoning paths, and provide more accurate and comprehensive responses.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              Unlike traditional RAG which treats documents as independent entities, Graph-based RAG understands the connections between information, allowing for more nuanced and contextually aware retrieval.
            </p>
            <a 
              href="https://www.microsoft.com/en-us/research/publication/from-local-to-global-a-graph-rag-approach-to-query-focused-summarization/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-[#f23665] font-medium hover:text-[#d92d5c] transition-colors text-sm sm:text-base"
            >
              Read Microsoft&apos;s research on Graph-based RAG
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <svg className="w-full h-auto text-[#0055c8]" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Traditional RAG */}
              <g opacity="0.5">
                <rect x="50" y="50" width="200" height="50" rx="4" fill="white" stroke="currentColor" strokeWidth="2"/>
                <rect x="50" y="120" width="200" height="50" rx="4" fill="white" stroke="currentColor" strokeWidth="2"/>
                <rect x="50" y="190" width="200" height="50" rx="4" fill="white" stroke="currentColor" strokeWidth="2"/>
                <rect x="50" y="260" width="200" height="50" rx="4" fill="white" stroke="currentColor" strokeWidth="2"/>
                <text x="150" y="30" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">Traditional RAG</text>
              </g>
              
              {/* GraphRAG */}
              <g>
                <circle cx="450" cy="75" r="25" fill="white" stroke="currentColor" strokeWidth="2"/>
                <circle cx="380" cy="145" r="25" fill="white" stroke="currentColor" strokeWidth="2"/>
                <circle cx="520" cy="145" r="25" fill="white" stroke="currentColor" strokeWidth="2"/>
                <circle cx="380" cy="255" r="25" fill="white" stroke="currentColor" strokeWidth="2"/>
                <circle cx="450" cy="325" r="25" fill="white" stroke="currentColor" strokeWidth="2"/>
                <circle cx="520" cy="255" r="25" fill="white" stroke="currentColor" strokeWidth="2"/>
                <circle cx="450" cy="200" r="30" fill="#f23665" stroke="currentColor" strokeWidth="2"/>
                
                <line x1="450" y1="100" x2="450" y2="170" stroke="currentColor" strokeWidth="2"/>
                <line x1="380" y1="170" x2="420" y2="200" stroke="currentColor" strokeWidth="2"/>
                <line x1="520" y1="170" x2="480" y2="200" stroke="currentColor" strokeWidth="2"/>
                <line x1="380" y1="230" x2="420" y2="200" stroke="currentColor" strokeWidth="2"/>
                <line x1="450" y1="230" x2="450" y2="295" stroke="currentColor" strokeWidth="2"/>
                <line x1="520" y1="230" x2="480" y2="200" stroke="currentColor" strokeWidth="2"/>
                
                <text x="450" y="30" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">GraphRAG</text>
              </g>
              
              {/* Arrow */}
              <path d="M280 200 L320 200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arrowhead)"/>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#0055c8] mb-6 sm:mb-8 text-center">
          Key Applications
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {applications.map((app, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                {app.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0055c8]">{app.title}</h4>
              <p className="text-gray-700 text-sm sm:text-base">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 