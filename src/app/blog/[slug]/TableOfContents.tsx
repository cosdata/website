'use client'

import { useEffect, useState, useCallback } from 'react';
import { afacad } from '../../styles/common';
import { slugify } from '../../utils/string';

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents() {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>('');
    const [tocElement, setTocElement] = useState<HTMLElement | null>(null);

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
        // This code only runs on the client side
        // Find all h1, h2, h3, h4, h5, and h6 elements in the article
        const elements = Array.from(document.querySelectorAll('article h1, article h2, article h3, article h4, article h5, article h6'));
        
        // Filter out the first H1 (main title) and elements with data-toc-exclude attribute
        const filteredElements = elements.filter((element, index, array) => {
            // Skip if this element has data-toc-exclude attribute
            if (element.hasAttribute('data-toc-exclude')) {
                return false;
            }
            
            // Skip if this is the first H1 in the document
            if (element.tagName === 'H1' && array.findIndex(el => el.tagName === 'H1') === index) {
                return false;
            }
            return true;
        });
        
        const headingElements = filteredElements.map((element) => {
            const text = element.textContent || '';
            // Generate consistent IDs based on text content instead of random values
            const id = element.id || `heading-${slugify(text)}`;
            return {
                id,
                text,
                level: parseInt(element.tagName.charAt(1)),
            };
        });

        // Add IDs to elements that don't have them
        filteredElements.forEach((element, index) => {
            if (!element.id) {
                element.id = headingElements[index].id;
            }
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

        filteredElements.forEach((element) => observer.observe(element));

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

    // Display the TOC even if there's only one heading
    if (headings.length === 0) return null;

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
            
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Table of Contents</h4>
            <ul className="space-y-3">
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
                                    : 'text-gray-600'}`}
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