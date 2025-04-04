'use client'

import React, { useState } from 'react';
import { afacad, geologica } from '@/app/styles/common';
import { PurposeBuiltDatabase } from '@/data/vector-db-purpose-built';
import { ServerlessDatabase } from '@/data/vector-db-serverless';
import { ManagedDatabase } from '@/data/vector-db-managed';
import { HybridDatabaseCategory } from '@/data/vector-db-hybrid';
import { RagService } from '@/data/vector-db-rag';
import { QuestionData } from '@/data/vector-db-questions';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface FloatingTableOfContentsProps {
  questionOne: QuestionData;
  questionTwo: QuestionData;
  questionThree: QuestionData;
  purposeBuiltDatabases: PurposeBuiltDatabase[];
  serverlessDatabases: ServerlessDatabase[];
  managedDatabases: ManagedDatabase[];
  hybridCategories: HybridDatabaseCategory[];
  ragServices: RagService[];
}

export default function FloatingTableOfContents({
  questionOne,
  questionTwo,
  questionThree,
  purposeBuiltDatabases,
  serverlessDatabases,
  managedDatabases,
  hybridCategories,
  ragServices
}: FloatingTableOfContentsProps) {
  // State to track which sections are expanded - all default to closed (false)
  const [expanded, setExpanded] = useState({
    decisionGuide: false,
    selfHosted: false,
    serverless: false,
    managed: false,
    hybrid: false,
    rag: false
  });

  const toggleSection = (section: keyof typeof expanded) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  // Handle anchor link clicks with offset for the navbar
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Get the target element
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Get navbar height (approximately 70px, but can be adjusted)
      const navbarHeight = 70;
      
      // Calculate the position to scroll to
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      // Scroll to the element with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`hidden lg:block sticky top-24 w-64 self-start max-h-[calc(100vh-8rem)] ${afacad.className}
        scrollbar-thin scrollbar-thumb-blue-300 scrollbar-thumb-rounded-full scrollbar-track-transparent
        hover:scrollbar-thumb-blue-400 overflow-y-auto pr-2`}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#93c5fd transparent'
      }}
    >
      <style jsx global>{`
        /* Modern scrollbar for Webkit browsers (Chrome, Safari, etc.) */
        .scrollbar-thin::-webkit-scrollbar {
          width: 5px;
        }
          
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
          
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(59, 130, 246, 0.3);
          border-radius: 9999px;
        }
          
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(59, 130, 246, 0.5);
        }
          
        /* Hide scrollbar buttons */
        .scrollbar-thin::-webkit-scrollbar-button {
          display: none;
        }
      `}</style>
        
      <div className={`p-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 ${geologica.className}`}>
        <h3 className="font-semibold text-xl mb-1 text-gray-900">Vector Database Guide</h3>
        
        <div className="space-y-3">
          {/* Overview */}
          <div>
            <a 
              href="#overview" 
              className="font-medium text-gray-700 text-base hover:text-[#0055c8] transition-colors"
              onClick={(e) => handleAnchorClick(e, "overview")}
            >
              Overview
            </a>
          </div>
          
          {/* Decision Guide */}
          <div>
            <div 
              className="flex items-center justify-between cursor-pointer mb-1 group"
              onClick={() => toggleSection('decisionGuide')}
            >
              <a 
                href="#question-1" 
                className="font-medium text-gray-700 text-base group-hover:text-[#0055c8] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAnchorClick(e, "question-1");
                }}
              >
                Decision Guide
              </a>
              <button className="focus:outline-none" onClick={(e) => {
                e.stopPropagation();
                toggleSection('decisionGuide');
              }}>
                {expanded.decisionGuide ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
            {expanded.decisionGuide && (
              <ul className="pl-3 space-y-2 border-l border-gray-200">
                <li>
                  <a 
                    href="#question-1" 
                    className="block py-1 text-sm text-gray-600 hover:text-[#0055c8] transition-colors"
                    onClick={(e) => handleAnchorClick(e, "question-1")}
                  >
                    Question 1: {questionOne.title}
                  </a>
                </li>
                <li>
                  <a 
                    href="#question-2" 
                    className="block py-1 text-sm text-gray-600 hover:text-[#0055c8] transition-colors"
                    onClick={(e) => handleAnchorClick(e, "question-2")}
                  >
                    Question 2: {questionTwo.title}
                  </a>
                </li>
                <li>
                  <a 
                    href="#question-3" 
                    className="block py-1 text-sm text-gray-600 hover:text-[#0055c8] transition-colors"
                    onClick={(e) => handleAnchorClick(e, "question-3")}
                  >
                    Question 3: {questionThree.title}
                  </a>
                </li>
              </ul>
            )}
          </div>
          
          {/* Self-hosted Databases */}
          <div>
            <div 
              className="flex items-center justify-between cursor-pointer mb-1 group"
              onClick={() => toggleSection('selfHosted')}
            >
              <a 
                href="#self-hosted-comparison" 
                className="font-medium text-gray-700 text-base group-hover:text-[#0055c8] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAnchorClick(e, "self-hosted-comparison");
                }}
              >
                Self-hosted Vector DBs
              </a>
              <button className="focus:outline-none" onClick={(e) => {
                e.stopPropagation();
                toggleSection('selfHosted');
              }}>
                {expanded.selfHosted ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
            {expanded.selfHosted && (
              <ul className="pl-3 space-y-1 border-l border-gray-200">
                {purposeBuiltDatabases.map(db => (
                  <li key={db.id}>
                    <a 
                      href={`#${db.id}`} 
                      className="block py-1 text-sm text-gray-600 hover:text-[#0055c8] transition-colors"
                      onClick={(e) => handleAnchorClick(e, db.id)}
                    >
                      {db.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Serverless Databases */}
          <div>
            <div 
              className="flex items-center justify-between cursor-pointer mb-1 group"
              onClick={() => toggleSection('serverless')}
            >
              <a 
                href="#serverless-comparison" 
                className="font-medium text-gray-700 text-base group-hover:text-[#0055c8] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAnchorClick(e, "serverless-comparison");
                }}
              >
                Serverless Vector DBs
              </a>
              <button className="focus:outline-none" onClick={(e) => {
                e.stopPropagation();
                toggleSection('serverless');
              }}>
                {expanded.serverless ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
            {expanded.serverless && (
              <ul className="pl-3 space-y-1 border-l border-gray-200">
                {serverlessDatabases.map(db => (
                  <li key={db.id}>
                    <a 
                      href={`#${db.id}`} 
                      className="block py-1 text-sm text-gray-600 hover:text-[#0055c8] transition-colors"
                      onClick={(e) => handleAnchorClick(e, db.id)}
                    >
                      {db.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Managed Cloud Databases */}
          <div>
            <div 
              className="flex items-center justify-between cursor-pointer mb-1 group"
              onClick={() => toggleSection('managed')}
            >
              <a 
                href="#managed-comparison" 
                className="font-medium text-gray-700 text-base group-hover:text-[#0055c8] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAnchorClick(e, "managed-comparison");
                }}
              >
                Managed Vector DBs
              </a>
              <button className="focus:outline-none" onClick={(e) => {
                e.stopPropagation();
                toggleSection('managed');
              }}>
                {expanded.managed ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
            {expanded.managed && (
              <ul className="pl-3 space-y-1 border-l border-gray-200">
                {managedDatabases.map(db => (
                  <li key={db.id}>
                    <a 
                      href={`#${db.id}`} 
                      className="block py-1 text-sm text-gray-600 hover:text-[#0055c8] transition-colors"
                      onClick={(e) => handleAnchorClick(e, db.id)}
                    >
                      {db.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Hybrid Solutions */}
          <div>
            <div 
              className="flex items-center justify-between cursor-pointer mb-1 group"
              onClick={() => toggleSection('hybrid')}
            >
              <a 
                href="#hybrid-solution-guide" 
                className="font-medium text-gray-700 text-base group-hover:text-[#0055c8] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAnchorClick(e, "hybrid-solution-guide");
                }}
              >
                Hybrid DBs
              </a>
              <button className="focus:outline-none" onClick={(e) => {
                e.stopPropagation();
                toggleSection('hybrid');
              }}>
                {expanded.hybrid ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
            {expanded.hybrid && (
              <ul className="pl-3 space-y-1 border-l border-gray-200">
                {hybridCategories.map(category => (
                  <li key={category.id}>
                    <a 
                      href={`#${category.id}`} 
                      className="block py-1 text-sm text-gray-600 hover:text-[#0055c8] transition-colors"
                      onClick={(e) => handleAnchorClick(e, category.id)}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* RAG Services */}
          <div>
            <div 
              className="flex items-center justify-between cursor-pointer mb-1 group"
              onClick={() => toggleSection('rag')}
            >
              <a 
                href="#rag-service-guide" 
                className="font-medium text-gray-700 text-base group-hover:text-[#0055c8] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAnchorClick(e, "rag-service-guide");
                }}
              >
                RAG Services
              </a>
              <button className="focus:outline-none" onClick={(e) => {
                e.stopPropagation();
                toggleSection('rag');
              }}>
                {expanded.rag ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
            {expanded.rag && (
              <ul className="pl-3 space-y-1 border-l border-gray-200">
                {ragServices.map(service => (
                  <li key={service.id}>
                    <a 
                      href={`#${service.id}`} 
                      className="block py-1 text-sm text-gray-600 hover:text-[#0055c8] transition-colors"
                      onClick={(e) => handleAnchorClick(e, service.id)}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 