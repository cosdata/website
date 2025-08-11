'use client'

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, afacad, geologica } from '../../styles/common';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { slugify } from '../../utils/string';
import { ReactNode, useId, useState, useEffect } from 'react';
import CompactNewsletterCTA from '../CompactNewsletterCTA';
import React from 'react';

interface BlogContentProps {
  content: any; // Accept any content type
  newsletterCTA?: ReactNode; // Optional CTA component to insert
}

export default function BlogContent({ 
  content
}: BlogContentProps) {
  // State to track client-side rendering
  const [isClient, setIsClient] = useState(false);
  
  // Effect to mark when component is mounted on client
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Generate headings from markdown for TOC
  const generateHeadingsPreview = (content: string) => {
    if (typeof content !== 'string') return null;
    
    // Extract headings using regex
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: { level: number, text: string, id: string }[] = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = slugify(text);
      
      headings.push({ level, text, id });
    }
    
    // Render headings for the TOC to find
    if (headings.length === 0) return null;
    
    return (
      <div className="sr-only" aria-hidden="true">
        {headings.map((heading, index) => {
          const HeadingTag = `h${heading.level}` as keyof JSX.IntrinsicElements;
          return (
            <HeadingTag key={index} id={heading.id}>{heading.text}</HeadingTag>
          );
        })}
      </div>
    );
  };
  
  // During server-side rendering, provide heading elements for TOC with skeleton loader
  if (!isClient) {
    return (
      <>
        {typeof content === 'string' && generateHeadingsPreview(content)}
        <div aria-hidden="true" role="presentation" className="animate-pulse space-y-6">
          <div className="h-12 bg-gray-200 rounded w-3/4 mb-8"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-8"></div>
          <div className="h-12 bg-gray-200 rounded w-2/3 mb-8"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-8"></div>
        </div>
      </>
    );
  }
  
  // Client-side only code from here - no hydration issues possible
  
  // Check if content is in Strapi Blocks format (array)
  const isBlocksFormat = Array.isArray(content);
  
  // If content is in Strapi Blocks format, use BlocksRenderer
  if (isBlocksFormat) {
    return (
      <BlocksRenderer 
        content={content as BlocksContent}
        blocks={{
          paragraph: ({ children }) => (
            <p className={`mb-8 text-lg sm:text-xl md:text-xl text-[#374151] leading-relaxed ${afacad.className}`}>
              {children}
            </p>
          ),
          heading: ({ children, level }) => {
            const Tag = `h${level}` as keyof JSX.IntrinsicElements;
            const sizes = {
              1: 'text-4xl mb-8',
              2: 'text-3xl mb-6',
              3: 'text-2xl mb-4',
              4: 'text-xl mb-4',
              5: 'text-lg mb-3',
              6: 'text-base mb-3',
            };
        
            const text = typeof children === 'string' ? children : '';
            const id = slugify(text);
            
            return (
              <Tag 
                id={id}
                className={`font-bold ${sizes[level as keyof typeof sizes]} text-[#374151] ${geologica.className} scroll-mt-24`}
              >
                {children}
              </Tag>
            );
          },
          list: ({ children, format }) => {
            const ListTag = format === 'ordered' ? 'ol' : 'ul';
            return (
              <ListTag className={`list-inside mb-8 pl-5 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className} ${
                format === 'ordered' ? 'list-decimal' : 'list-disc'
              }`}>
                {children}
              </ListTag>
            );
          },
          'list-item': ({ children }) => <li className="mb-3 pl-2">{children}</li>,
          quote: ({ children }) => (
            <blockquote className={`border-l-4 border-[#0055c8] pl-6 italic mb-8 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`}>
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <pre className="bg-gray-100 p-6 rounded-lg mb-8 overflow-x-auto">
              <code className={`text-base sm:text-lg md:text-lg text-[#374151] ${afacad.className}`}>
                {children}
              </code>
            </pre>
          ),
          image: ({ image }) => (
            <div className="mb-8">
              <div className="relative aspect-[2/1]">
                <Image 
                  src={image.url.startsWith('http') ? image.url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`} 
                  alt={image.alternativeText || ''} 
                  fill
                  className="object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          ),
          link: ({ children, url }) => (
            <Link 
              href={url} 
              className="text-[#0055c8] hover:text-[#003d8f] underline decoration-2 underline-offset-2 transition-colors duration-200"
              target={url.startsWith('http') ? '_blank' : undefined}
              rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </Link>
          ),
          // Table blocks are not supported by Strapi BlocksRenderer as of 2025
        }}
        modifiers={{
          bold: ({ children }) => <strong className="font-semibold">{children}</strong>,
          italic: ({ children }) => <em className="italic">{children}</em>,
          underline: ({ children }) => <u className="underline decoration-2 underline-offset-2">{children}</u>,
          strikethrough: ({ children }) => <span className="line-through">{children}</span>,
          code: ({ children }) => (
            <code className={`bg-gray-100 px-2 py-1 rounded text-sm sm:text-base font-mono text-[#374151]`}>
              {children}
            </code>
          ),
        }}
      />
    );
  }
  
  // Custom component to handle ReactMarkdown safely
  const SafeMarkdown = ({ content }: { content: string }) => {
    return (
      <div className="markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={markdownComponents}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  };
  
  // Always render the entire content as markdown; no mid-content CTA
  return <SafeMarkdown content={content as string} />;
}

// Define markdown components outside the main component to avoid recreation on each render
const markdownComponents = {
  h1: ({ node, children, ...props }: any) => {
    const text = Array.isArray(children) ? children.join('') : typeof children === 'string' ? children : '';
    const id = slugify(text);
    return (
      <h1 
        id={id}
        className={`font-bold mb-8 text-4xl text-[#374151] ${geologica.className} scroll-mt-24`} 
        {...props}
      >
        {children}
      </h1>
    );
  },
  h2: ({ node, children, ...props }: any) => {
    const text = Array.isArray(children) ? children.join('') : typeof children === 'string' ? children : '';
    const id = slugify(text);
    return (
      <h2 
        id={id}
        className={`font-bold mb-6 text-3xl text-[#374151] ${geologica.className} scroll-mt-24`} 
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ node, children, ...props }: any) => {
    const text = Array.isArray(children) ? children.join('') : typeof children === 'string' ? children : '';
    const id = slugify(text);
    return (
      <h3 
        id={id}
        className={`font-bold mb-4 text-2xl text-[#374151] ${geologica.className} scroll-mt-24`} 
        {...props}
      >
        {children}
      </h3>
    );
  },
  h4: ({ node, children, ...props }: any) => {
    const text = Array.isArray(children) ? children.join('') : typeof children === 'string' ? children : '';
    const id = slugify(text);
    return (
      <h4 
        id={id}
        className={`font-bold mb-4 text-xl text-[#374151] ${geologica.className} scroll-mt-24`} 
        {...props}
      >
        {children}
      </h4>
    );
  },
  h5: ({ node, ...props }: any) => (
    <h5 className={`font-bold mb-3 text-lg text-[#374151] ${geologica.className}`} {...props} />
  ),
  h6: ({ node, ...props }: any) => (
    <h6 className={`font-bold mb-3 text-base text-[#374151] ${geologica.className}`} {...props} />
  ),
  p: ({ node, children, ...props }: any) => {
    // If a single child is an image, don't wrap in <p>
    if (React.Children.toArray(children).some(child => 
      React.isValidElement(child) && child.type === 'img'
    )) {
      return <>{children}</>;
    }
    
    return (
      <p className={`mb-8 text-lg sm:text-xl md:text-xl text-[#374151] leading-relaxed ${afacad.className}`} {...props}>
        {children}
      </p>
    );
  },
  a: ({ node, href, ...props }: any) => {
    if (href) {
      return (
        <Link 
          href={href} 
          className="text-[#0055c8] hover:text-[#003d8f] underline decoration-2 underline-offset-2 transition-colors duration-200"
          target={href?.startsWith('http') ? '_blank' : undefined}
          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          {...props} 
        />
      );
    }
    return <a className="text-[#0055c8] hover:text-[#003d8f] underline decoration-2 underline-offset-2" {...props} />;
  },
  ul: ({ node, ...props }: any) => (
    <ul className={`list-disc list-inside mb-8 pl-5 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`} {...props} />
  ),
  ol: ({ node, ...props }: any) => (
    <ol className={`list-decimal list-inside mb-8 pl-5 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`} {...props} />
  ),
  li: ({ node, ...props }: any) => <li className="mb-3 pl-2" {...props} />,
  blockquote: ({ node, ...props }: any) => (
    <blockquote className={`border-l-4 border-[#0055c8] pl-6 italic mb-8 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`} {...props} />
  ),
  code: ({ node, className, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    const isCodeBlock = Boolean(match);
    
    return isCodeBlock ? (
      <pre className="bg-gray-100 p-6 rounded-lg mb-8 overflow-x-auto">
        <code className={`${className} text-base sm:text-lg md:text-lg text-[#374151] ${afacad.className}`} {...props} />
      </pre>
    ) : (
      <code className={`bg-gray-100 px-2 py-1 rounded text-sm sm:text-base font-mono text-[#374151]`} {...props} />
    );
  },
  img: ({ node, alt, src, ...props }: any) => {
    return (
      <span className="block mb-8">
        <img
          src={src}
          alt={alt || ''}
          className="rounded-lg shadow-md object-cover w-full"
          loading="lazy"
        />
      </span>
    );
  },
  // Responsive table rendering
  table: ({ node, children, ...props }: any) => (
    <div className="w-full overflow-x-auto my-8">
      <table className="min-w-full border-collapse" {...props}>{children}</table>
    </div>
  ),
  thead: ({ node, children, ...props }: any) => <thead className="bg-gray-100" {...props}>{children}</thead>,
  tbody: ({ node, children, ...props }: any) => <tbody {...props}>{children}</tbody>,
  tr: ({ node, children, ...props }: any) => <tr className="border-b last:border-b-0" {...props}>{children}</tr>,
  th: ({ node, children, ...props }: any) => <th className="px-4 py-2 text-left font-semibold bg-gray-50" {...props}>{children}</th>,
  td: ({ node, children, ...props }: any) => <td className="px-4 py-2 align-top" {...props}>{children}</td>,
};
