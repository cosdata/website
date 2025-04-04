'use client';

import React, { useState } from 'react';
import { Section } from '@/components/vector-database-guide/Section';
import { Question } from '@/components/vector-database-guide/Question';
import { OfferingDisplay } from '@/components/vector-database-guide/OfferingDisplay';
import { PurposeBuiltDetails } from '@/components/vector-database-guide/PurposeBuiltDetails';
import { PurposeBuiltFeatureTable } from '@/components/vector-database-guide/PurposeBuiltFeatureTable';
import { ServerlessDetails } from '@/components/vector-database-guide/ServerlessDetails';
import { ServerlessFeatureTable } from '@/components/vector-database-guide/ServerlessFeatureTable';
import { ManagedDetails } from '@/components/vector-database-guide/ManagedDetails';
import { ManagedFeatureTable } from '@/components/vector-database-guide/ManagedFeatureTable';
import { HybridSolutions } from '@/components/vector-database-guide/HybridSolutions';
import { RagServices } from '@/components/vector-database-guide/RagServices';
import { FeatureComparison } from '@/components/vector-database-guide/FeatureComparison';
import FloatingTableOfContents from '@/components/vector-database-guide/FloatingTableOfContents';
import { geologica, afacad } from '@/app/styles/common';
import { GuideOverview } from '@/components/vector-database-guide/GuideOverview';
import { DecisionGuide } from '@/components/vector-database-guide/DecisionGuide';

// Import question data
import { questionOne, questionTwo, questionThree } from '@/data/vector-db-questions';

// Import feature definitions and metrics
import {
  ossFeatures,
  serverlessFeatures as serverlessOfferingFeatures,
  benchmarkMetrics
} from '@/data/vector-db-features';

// Import offerings data
import {
  ossOfferings,
  serverlessOfferings,
} from '@/data/vector-db-offerings';

// Import purpose-built vector database data
import { purposeBuiltDatabases, purposeBuiltFeatures } from '@/data/vector-db-purpose-built';

// Import serverless database data
import { serverlessDatabases, serverlessFeatures } from '@/data/vector-db-serverless';

// Import managed cloud database data
import { managedDatabases, managedFeatures } from '@/data/vector-db-managed';

// Import hybrid database data
import { hybridCategories } from '@/data/vector-db-hybrid';

// Import RAG service data
import { ragServices } from '@/data/vector-db-rag';

export default function VectorDatabaseGuide() {
  const [selectedPath, setSelectedPath] = useState<string[]>([]);

  const handleDecision = (value: string, targetId: string) => {
    setSelectedPath([...selectedPath, value]);
    
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
    <main className="bg-transparent">
      <div className={`w-full bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden ${geologica.className}`}>
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-64 sm:w-80 h-64 sm:h-80 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-24 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={`text-[36px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-bold text-[#f23665] leading-tight max-w-5xl mx-auto ${geologica.className}`}>
            The Honest Guide to Choosing a Vector Database
          </h1>
          <h2 className={`text-[16px] sm:text-[18px] md:text-[20px] font-medium text-gray-200 mt-4 ${geologica.className}`}>
            Last Updated April 3rd, 2025
          </h2>
          <div className="mt-6 sm:mt-8">
            <a href="#" className={`inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-md text-white bg-[#f23665] hover:bg-[#d92d5c] transition-colors duration-300 ${geologica.className}`}>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download the PDF
            </a>
          </div>
        </div>
      </div>

      <div className={`container mx-auto py-12 px-4 ${afacad.className}`}>
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <div className="lg:w-[calc(100%-18rem)]">
            {/* 1. Overview */}
              <GuideOverview />

            {/* 2-4. Decision Guide with Questions */}
            <div className="mb-10"/>
              <DecisionGuide 
                questionOne={questionOne}
                questionTwo={questionTwo}
                questionThree={questionThree}
                onSelect={handleDecision}
              />

            {/* 5. Self-hosted Vector DB Comparison */}
            <section className="mb-14" id="self-hosted-comparison">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055c8] mb-8 sm:mb-12 ${geologica.className}`}>
                Self-hosted Vector Databases
              </h2>
              <p className={`text-lg mb-8 text-gray-700 max-w-3xl leading-relaxed ${afacad.className}`}>
                Purpose-built vector databases designed for self-hosting provide maximum control and customization. 
                These solutions require infrastructure management but offer greater flexibility.
              </p>

              <ul className="space-y-1 mb-8">
                {purposeBuiltDatabases.map(db => (
                  <li key={`toc-${db.id}`} className="flex items-center">
                    <span className="text-[#0055c8] text-lg mr-2">•</span>
                    <a href={`#${db.id}`} className="text-[#0055c8] text-lg hover:underline">{db.name}</a>
                  </li>
                ))}
              </ul>

              <div className="mb-12">
                <PurposeBuiltDetails databases={purposeBuiltDatabases} />
              </div>

              <div>
                <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] mb-6 sm:mb-8 ${geologica.className}`}>Feature Comparison</h3>
                <PurposeBuiltFeatureTable
                  databases={purposeBuiltDatabases}
                  features={purposeBuiltFeatures}
                />
              </div>
            </section>

            {/* 6. Serverless Vector DB Comparison */}
            <section className="mb-14" id="serverless-comparison">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055c8] mb-8 sm:mb-12 ${geologica.className}`}>
                Serverless Vector Databases
              </h2>
              <p className={`text-lg mb-8 text-gray-700 max-w-3xl leading-relaxed ${afacad.className}`}>
                These fully managed serverless solutions offer scalability with minimal operational overhead. They handle
                infrastructure management and automatically scale based on your usage.
              </p>

              <ul className="space-y-1 mb-8">
                {serverlessDatabases.map(db => (
                  <li key={`toc-${db.id}`} className="flex items-center">
                    <span className="text-[#0055c8] text-lg mr-2">•</span>
                    <a href={`#${db.id}`} className="text-[#0055c8] text-lg hover:underline">{db.name}</a>
                  </li>
                ))}
              </ul>

              <div className="mb-12">
                <ServerlessDetails databases={serverlessDatabases} />
              </div>

              <div>
                <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] mb-6 sm:mb-8 ${geologica.className}`}>Feature Comparison</h3>
                <ServerlessFeatureTable 
                  databases={serverlessDatabases}
                  features={serverlessFeatures}
                />
              </div>
            </section>

            {/* 7. Managed Cloud Vector DB Comparison */}
            <section className="mb-14" id="managed-comparison">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055c8] mb-8 sm:mb-12 ${geologica.className}`}>
                Managed Vector Databases
              </h2>
              <p className={`text-lg mb-8 text-gray-700 max-w-3xl leading-relaxed ${afacad.className}`}>
                Managed vector database services offer a balance between control and convenience. These solutions
                provide managed infrastructure with extended configuration options.
              </p>

              <ul className="space-y-1 mb-8">
                {managedDatabases.map(db => (
                  <li key={`toc-${db.id}`} className="flex items-center">
                    <span className="text-[#0055c8] text-lg mr-2">•</span>
                    <a href={`#${db.id}`} className="text-[#0055c8] text-lg hover:underline">{db.name}</a>
                  </li>
                ))}
              </ul>

              <div className="mb-12">
                <ManagedDetails databases={managedDatabases} />
              </div>

              <div>
                <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] mb-6 sm:mb-8 ${geologica.className}`}>Feature Comparison</h3>
                <ManagedFeatureTable
                  databases={managedDatabases}
                  features={managedFeatures}
                />
              </div>
            </section>

            {/* 8. Hybrid Solution Guide */}
            <section className="mb-14" id="hybrid-solution-guide">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055c8] mb-8 sm:mb-12 ${geologica.className}`}>
                Hybrid Vector Database Solutions
              </h2>
              <p className={`text-lg mb-8 text-gray-700 max-w-3xl leading-relaxed ${afacad.className}`}>
                These solutions add vector capabilities to existing database systems, allowing you to leverage your existing database infrastructure and expertise.
              </p>
              
              <HybridSolutions categories={hybridCategories} />
            </section>

            {/* 9. RAG-as-a-Service Guide */}
            <section className="mb-14" id="rag-service-guide">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055c8] mb-8 sm:mb-12 ${geologica.className}`}>
                RAG-as-a-Service Solutions
              </h2>
              <p className={`text-lg mb-8 text-gray-700 max-w-3xl leading-relaxed ${afacad.className}`}>
                These end-to-end platforms provide complete RAG functionality without requiring deep ML expertise or complex infrastructure setup.
              </p>
              
              <ul className="space-y-1 mb-8">
                {ragServices.map(service => (
                  <li key={`toc-${service.id}`} className="flex items-center">
                    <span className="text-[#0055c8] text-lg mr-2">•</span>
                    <a href={`#${service.id}`} className="text-[#0055c8] text-lg hover:underline">{service.name}</a>
                  </li>
                ))}
              </ul>
              
              <RagServices services={ragServices} />
            </section>
          </div>
          
          {/* Table of Contents (right column) */}
          <FloatingTableOfContents
            questionOne={questionOne}
            questionTwo={questionTwo}
            questionThree={questionThree}
            purposeBuiltDatabases={purposeBuiltDatabases}
            serverlessDatabases={serverlessDatabases}
            managedDatabases={managedDatabases}
            hybridCategories={hybridCategories}
            ragServices={ragServices}
          />
        </div>
      </div>
      
      <div className={`w-full bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-12 relative overflow-hidden ${geologica.className}`}>
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-24 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className={`text-2xl font-[500] mb-4 ${geologica.className}`}>Ready to choose your vector database?</h2>
          <div className={afacad.className}>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              We hope this guide has helped you understand the vector database landscape. 
              For personalized recommendations or to discuss your specific use case, reach out to our team.
            </p>
            <a href="/contact" className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-[#f23665] hover:bg-[#d92d5c] transition-colors duration-300 ${geologica.className}`}>
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 