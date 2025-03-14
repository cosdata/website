'use client'

import { useEffect, useState } from 'react';
import { afacad } from '../../styles/common';

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents() {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Find all h2 and h3 elements in the article
        const elements = Array.from(document.querySelectorAll('article h2, article h3'));
        const headingElements = elements.map((element) => ({
            id: element.id || `heading-${Math.random().toString(36).substr(2, 9)}`,
            text: element.textContent || '',
            level: parseInt(element.tagName.charAt(1)),
        }));

        // Add IDs to elements that don't have them
        elements.forEach((element, index) => {
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

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    if (headings.length < 2) return null;

    return (
        <nav className={`hidden lg:block sticky top-24 ml-8 w-64 max-h-[calc(100vh-8rem)] overflow-y-auto ${afacad.className}`}>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Table of Contents</h4>
            <ul className="space-y-3">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        style={{
                            paddingLeft: `${(heading.level - 2) * 1}rem`,
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