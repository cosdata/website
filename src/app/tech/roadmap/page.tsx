"use client";

import React, { useRef, useEffect } from 'react';
import { Afacad } from 'next/font/google';
import { Noto_Sans_Mono, Geologica } from 'next/font/google';
import { timelineItems, featureSections, Feature, TimelineItem as TimelineItemType, StatusType, PhaseType, FeatureSection as FeatureSectionType } from './roadmap-data';

const afacad = Afacad({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const noto_sans_mono = Noto_Sans_Mono({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const geologica = Geologica({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

interface StatusBadgeProps {
  status: StatusType;
}

// Status badge component
const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let colorClass = "bg-gray-100 text-gray-600";
  let text = "Unknown";
  
  if (status === "COMPLETED") {
    colorClass = "bg-green-100 text-green-600";
    text = "Completed";
  } else if (status === "IN PROGRESS") {
    colorClass = "bg-yellow-100 text-yellow-600";
    text = "In Progress";
  } else if (status === "TODO") {
    colorClass = "bg-red-100 text-red-600";
    text = "Todo";
  }
  
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
      {text}
    </span>
  );
};

interface PhaseBadgeProps {
  phase: PhaseType;
}

// Phase badge component
const PhaseBadge: React.FC<PhaseBadgeProps> = ({ phase }) => {
  let colorClass = "bg-gray-100 text-gray-600";
  let text = phase;
  
  if (phase === "MVP/ALPHA") {
    colorClass = "bg-blue-100 text-blue-600";
  } else if (phase === "BETA") {
    colorClass = "bg-purple-100 text-purple-600";
  } else if (phase === "RC/GA") {
    colorClass = "bg-orange-100 text-orange-600";
  }
  
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
      {text}
    </span>
  );
};

interface TimelineItemProps {
  date: string;
  title: string;
  children: React.ReactNode;
  isLeft?: boolean;
}

// Timeline component
const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, children, isLeft = true }) => (
  <div className="relative mb-12">
    {/* The vertical timeline bar */}
    <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-200"></div>
    
    {/* The circle marker */}
    <div className="absolute left-6 top-0 w-3 h-3 -ml-1 rounded-full bg-[#0055c8] z-10"></div>
    
    {/* Date and content */}
    <div className="ml-16">
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
        <div className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 font-medium inline-block">
          {date}
        </div>
        <h3 className={`text-xl font-semibold ${geologica.className}`}>{title}</h3>
      </div>
      <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
        {children}
      </div>
    </div>
  </div>
);

interface FeatureTableProps {
  features: Feature[];
}

// Feature table component
const FeatureTable: React.FC<FeatureTableProps> = ({ features }) => (
  <div className="bg-white shadow-sm border border-gray-100 overflow-hidden">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Feature
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phase
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className={`px-6 py-4 text-sm text-gray-700 ${afacad.className}`}>
                {feature.text}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={feature.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <PhaseBadge phase={feature.phase} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

interface FeatureSectionProps {
  title: string;
  features: Feature[];
  id: string;
}

// Feature section component
const FeatureSection: React.FC<FeatureSectionProps> = ({ title, features, id }) => (
  <div className="mb-16">
    <h3 id={id} className={`text-2xl font-semibold mb-6 pl-4 ${geologica.className}`}>
      {title}
    </h3>
    <FeatureTable features={features} />
  </div>
);

const RoadmapPage = () => {
  const contentScrollRef = useRef<HTMLDivElement>(null);
  
  // Handle navigation link clicks
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const scrollContainer = contentScrollRef.current;
    
    if (scrollContainer) {
      const targetSection = document.getElementById(sectionId);
      
      if (targetSection) {
        // Calculate position of the section relative to the scrollable container
        const containerRect = scrollContainer.getBoundingClientRect();
        const sectionRect = targetSection.getBoundingClientRect();
        const relativeTop = sectionRect.top - containerRect.top + scrollContainer.scrollTop;
        
        // Scroll to the section with smooth behavior
        scrollContainer.scrollTo({
          top: relativeTop - 20, // Subtract some pixels for padding
          behavior: 'smooth'
        });
      }
    }
  };
  
  // Set up hash-based navigation on page load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && contentScrollRef.current) {
        const targetSection = document.getElementById(hash);
        if (targetSection) {
          setTimeout(() => {
            const containerRect = contentScrollRef.current!.getBoundingClientRect();
            const sectionRect = targetSection.getBoundingClientRect();
            const relativeTop = sectionRect.top - containerRect.top + contentScrollRef.current!.scrollTop;
            
            contentScrollRef.current!.scrollTo({
              top: relativeTop - 20,
              behavior: 'smooth'
            });
          }, 100); // Small delay to ensure elements are rendered
        }
      }
    };
    
    // Handle initial hash if present
    if (window.location.hash) {
      handleHashChange();
    }
    
    // Set up listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  return (
    <div className={`bg-gradient-to-b from-white to-gray-50 min-h-screen pb-16 ${noto_sans_mono.className}`}>
      <article className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-16 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-[#0055c8] animate-fadeIn ${geologica.className}`}>
            Cosdata Roadmap
          </h1>
          <p className={`text-gray-600 text-lg md:text-xl max-w-3xl mx-auto animate-fadeIn ${afacad.className}`}>
            Detailed timeline and feature status for our journey from MVP to production-ready enterprise solution
          </p>
        </header>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left sidebar - sticky navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 animate-fadeIn">
                <h2 className={`text-xl font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>
                  Navigation
                </h2>
                
                <div className={`${afacad.className} max-h-[calc(100vh-180px)] overflow-y-auto pr-2 custom-scrollbar`}>
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2">Timeline</h3>
                    <ul className="space-y-2">
                      <li>
                        <a 
                          href="#timeline" 
                          className="text-blue-600 hover:underline flex items-center"
                          onClick={(e) => scrollToSection(e, "timeline")}
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          Development Timeline
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Feature Status</h3>
                    <ul className="space-y-2">
                      {featureSections.map((section: FeatureSectionType) => (
                        <li key={section.id}>
                          <a 
                            href={`#${section.id}`} 
                            className="text-blue-600 hover:underline flex items-center"
                            onClick={(e) => scrollToSection(e, section.id)}
                          >
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <StatusBadge status="COMPLETED" />
                        <span className="text-sm text-gray-600">Features we&apos;ve finished</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <StatusBadge status="IN PROGRESS" />
                        <span className="text-sm text-gray-600">Currently working on</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <StatusBadge status="TODO" />
                        <span className="text-sm text-gray-600">Coming next</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="lg:w-3/4">
            <div ref={contentScrollRef} className="max-h-[calc(100vh)] overflow-y-auto pr-4 custom-scrollbar">
              {/* Development Timeline section */}
              <div id="timeline" className="mb-20 animate-fadeIn">
                <h2 className={`text-3xl font-semibold mb-6 pl-6 ${geologica.className}`}>
                  Development Timeline
                </h2>
                
                <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  {timelineItems.map((item: TimelineItemType, index: number) => (
                    <TimelineItem key={index} date={item.date} title={item.title}>
                      <ul className={`list-disc list-inside space-y-2 text-gray-700 ${afacad.className}`}>
                        {item.content.map((point: string, pointIndex: number) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </TimelineItem>
                  ))}
                </div>
              </div>
              
              {/* Feature Status section */}
              <div className="animate-fadeIn" style={{ animationDelay: "200ms" }}>
                <h2 id="feature-status" className={`text-3xl font-semibold mb-6 pl-6 ${geologica.className}`}>
                  Feature Status
                </h2>
                
                {featureSections.map((section: FeatureSectionType) => (
                  <FeatureSection 
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    features={section.features}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default RoadmapPage;

// Add this to globals.css
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeIn {
//   animation: fadeIn 0.6s ease-out forwards;
// }
