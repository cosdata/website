'use client'

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, afacad, geologica } from '../../styles/common';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { slugify } from '../../utils/string';

type BlogContentProps = {
  content: any; // Accept any content type
};

export default function BlogContent({ content }: BlogContentProps) {
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
            <figure className="mb-8">
              <div className="relative aspect-[2/1]">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`} 
                  alt={image.alternativeText || ''} 
                  fill
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
              {image.alternativeText && (
                <figcaption className="mt-2 text-center text-sm text-gray-600 italic">
                  {image.alternativeText}
                </figcaption>
              )}
            </figure>
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
  
  // If content is not in Strapi Blocks format, use ReactMarkdown
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, children, ...props }) => {
          const id = slugify(children as string);
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
        h2: ({ node, children, ...props }) => {
          const id = slugify(children as string);
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
        h3: ({ node, children, ...props }) => {
          const id = slugify(children as string);
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
        h4: ({ node, children, ...props }) => {
          const id = slugify(children as string);
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
        h5: ({ node, ...props }) => <h5 className={`font-bold mb-3 text-lg text-[#374151] ${geologica.className}`} {...props} />,
        h6: ({ node, ...props }) => <h6 className={`font-bold mb-3 text-base text-[#374151] ${geologica.className}`} {...props} />,
        p: ({ node, ...props }) => (
          <p className={`mb-8 text-lg sm:text-xl md:text-xl text-[#374151] leading-relaxed ${afacad.className}`} {...props} />
        ),
        a: ({ node, href, ...props }) => {
          if (href) {
            return (
              <Link 
                href={href} 
                className="text-[#0055c8] hover:text-[#003d8f] underline decoration-2 underline-offset-2 transition-colors duration-200"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                {...props} 
              />
            );
          }
          return <a className="text-[#0055c8] hover:text-[#003d8f] underline decoration-2 underline-offset-2" {...props} />;
        },
        ul: ({ node, ...props }) => (
          <ul className={`list-disc list-inside mb-8 pl-5 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`} {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className={`list-decimal list-inside mb-8 pl-5 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`} {...props} />
        ),
        li: ({ node, ...props }) => <li className="mb-3 pl-2" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className={`border-l-4 border-[#0055c8] pl-6 italic mb-8 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`} {...props} />
        ),
        code: ({ node, className, ...props }) => {
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
        img: ({ node, ...props }) => (
          <figure className="mb-8">
            <div className="relative aspect-[2/1]">
              <img
                className="rounded-lg shadow-md object-cover"
                {...props}
                alt={props.alt || ''}
              />
            </div>
            {props.alt && (
              <figcaption className="mt-2 text-center text-sm text-gray-600 italic">
                {props.alt}
              </figcaption>
            )}
          </figure>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
