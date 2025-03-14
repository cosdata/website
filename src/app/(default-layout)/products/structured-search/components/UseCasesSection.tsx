"use client";
import Link from 'next/link';
import { commonStyles } from '../../../../styles/common';

export default function UseCasesSection() {
  const applications = [
    {
      title: "Agentic Memory",
      description: "Enable AI agents to build and maintain structured memory of interactions, entities, and relationships for more coherent and contextual responses over time.",
      icon: (
        <svg className="w-12 h-12 text-[#0055c8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 16L7.5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 16L16.5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7.5 5L9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16.5 5L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Enterprise Knowledge Bases",
      description: "Create comprehensive knowledge graphs from enterprise data, enabling more accurate information retrieval and contextual understanding for corporate AI assistants.",
      icon: (
        <svg className="w-12 h-12 text-[#0055c8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L20 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L4 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Complex Reasoning",
      description: "Support multi-hop reasoning and inference by traversing relationship paths in the knowledge graph, enabling AI systems to answer complex questions requiring multiple steps of logic.",
      icon: (
        <svg className="w-12 h-12 text-[#0055c8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12H4C8.42 12 12 15.58 12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12H14C18.42 12 22 8.42 22 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0055c8] mb-12">
          GraphRAG: The Future of Contextual Retrieval
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-[#0055c8] mb-4">
              What is GraphRAG?
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Graph Retrieval Augmented Generation (GraphRAG) is an advanced approach that enhances traditional RAG systems by incorporating structured relationships between data points. This enables AI systems to understand context, follow complex reasoning paths, and provide more accurate and comprehensive responses.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Unlike traditional RAG which treats documents as independent entities, GraphRAG understands the connections between information, allowing for more nuanced and contextually aware retrieval.
            </p>
            <a 
              href="https://www.microsoft.com/en-us/research/publication/from-local-to-global-a-graph-rag-approach-to-query-focused-summarization/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-[#f23665] font-medium hover:text-[#d92d5c] transition-colors"
            >
              Read Microsoft&apos;s research on GraphRAG
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="md:w-1/2">
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

        <h3 className="text-2xl font-bold text-[#0055c8] mb-8 text-center">
          Key Applications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {applications.map((app, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                {app.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#0055c8]">{app.title}</h4>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 