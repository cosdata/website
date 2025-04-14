'use client'

import { useEffect, useState, useCallback } from 'react';
import { afacad } from '@/app/styles/common';

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function BenchmarksTOC({ isMobile = false }: { isMobile?: boolean }) {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>('');
    const [tocElement, setTocElement] = useState<HTMLElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    // Store a reference to the TOC nav element
    const setTocRef = useCallback((node: HTMLElement | null) => {
        if (node) setTocElement(node);
    }, []);

    // Function to scroll the TOC to show the active heading
    const scrollActiveHeadingIntoView = useCallback(() => {
        if (!tocElement || !activeId) return;
        
        const activeLink = tocElement.querySelector(`a[href="#${activeId}"]`) as HTMLAnchorElement | null;
        if (!activeLink) return;
        
        const activeLinkRect = activeLink.getBoundingClientRect();
        const tocRect = tocElement.getBoundingClientRect();
        
        // Check if the active link is outside the visible area of the TOC
        const isAbove = activeLinkRect.top < tocRect.top;
        const isBelow = activeLinkRect.bottom > tocRect.bottom;
        
        if (isAbove || isBelow) {
            // Calculate the scroll position to center the active link
            const scrollPosition = activeLink.offsetTop - tocElement.offsetHeight / 2 + activeLink.offsetHeight / 2;
            
            // Smooth scroll to the position
            tocElement.scrollTo({
                top: Math.max(0, scrollPosition),
                behavior: 'smooth'
            });
        }
    }, [tocElement, activeId]);

    useEffect(() => {
        // Find all h1 and h2 elements in the main content section (excluding h3)
        const elements = Array.from(document.querySelectorAll('main h1, main h2'));
        const headingElements = elements.map((element) => {
            // Create an ID if one doesn't exist
            if (!element.id) {
                // Generate an ID from the text content
                element.id = element.textContent?.toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w-]/g, '') || `heading-${Math.random().toString(36).substr(2, 9)}`;
            }
            
            return {
                id: element.id,
                text: element.textContent || '',
                level: parseInt(element.tagName.charAt(1)),
            };
        });

        setHeadings(headingElements);

        // Set up intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0% -35% 0%',
                threshold: 0,
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    // Effect to scroll the TOC when activeId changes
    useEffect(() => {
        if (activeId) {
            // Small delay to ensure DOM is updated
            const timeoutId = setTimeout(() => {
                scrollActiveHeadingIntoView();
            }, 100);
            
            return () => clearTimeout(timeoutId);
        }
    }, [activeId, scrollActiveHeadingIntoView]);

    // Don't show if no headings
    if (headings.length === 0) return null;

    // Mobile dropdown version of TOC
    if (isMobile) {
        return (
            <div className={`mb-6 border border-gray-200 rounded-lg overflow-hidden ${afacad.className}`}>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-gray-900 font-medium"
                >
                    <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0055c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        On This Page
                    </span>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                
                {isOpen && (
                    <div 
                        className="px-4 py-3 max-h-[300px] overflow-y-auto"
                        ref={setTocRef}
                    >
                        <ul className="space-y-2">
                            {headings.map((heading) => (
                                <li
                                    key={heading.id}
                                    style={{
                                        paddingLeft: `${(heading.level - 1) * 0.75}rem`,
                                    }}
                                >
                                    <a
                                        href={`#${heading.id}`}
                                        className={`block text-sm hover:text-[#0055c8] transition-colors duration-200
                                            ${activeId === heading.id 
                                                ? 'text-[#0055c8] font-medium' 
                                                : 'text-gray-600'}
                                            ${heading.level === 1 ? 'font-semibold' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(heading.id)?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            });
                                            setIsOpen(false);
                                        }}
                                    >
                                        {heading.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }

    // Desktop sidebar version of TOC
    return (
        <nav 
            ref={setTocRef}
            className={`hidden lg:block sticky top-24 ml-8 w-64 max-h-[calc(100vh-8rem)] ${afacad.className}
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
            
            <h4 className="font-semibold text-lg mb-4 text-gray-900">On This Page</h4>
            
            <ul className="space-y-2">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        style={{
                            paddingLeft: `${(heading.level - 1) * 0.75}rem`,
                        }}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={`block text-sm hover:text-[#0055c8] transition-colors duration-200
                                ${activeId === heading.id 
                                    ? 'text-[#0055c8] font-medium' 
                                    : 'text-gray-600'}
                                ${heading.level === 1 ? 'font-semibold' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                });
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
} 