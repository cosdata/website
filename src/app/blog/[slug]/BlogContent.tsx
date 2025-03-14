'use client'

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import Link from 'next/link';
import { commonStyles, afacad, geologica } from '../../styles/common';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
          paragraph: ({ children }) => <p className={`mb-6 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`}>{children}</p>,
          heading: ({ children, level }) => {
            const Tag = `h${level}` as keyof JSX.IntrinsicElements;
            const sizes = {
              1: 'text-4xl',
              2: 'text-3xl',
              3: 'text-2xl',
              4: 'text-xl',
              5: 'text-lg',
              6: 'text-base',
            };
            return <Tag className={`font-bold mb-6 ${sizes[level as keyof typeof sizes]} text-[#374151] ${geologica.className}`}>{children}</Tag>;
          },
          list: ({ children, format }) => {
            const ListTag = format === 'ordered' ? 'ol' : 'ul';
            return <ListTag className={`list-inside mb-6 pl-5 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`}>{children}</ListTag>;
          },
          'list-item': ({ children }) => <li className="mb-2">{children}</li>,
          quote: ({ children }) => <blockquote className={`border-l-4 border-gray-300 pl-4 italic mb-6 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`}>{children}</blockquote>,
          code: ({ children }) => <pre className={`bg-gray-100 p-4 rounded mb-6 overflow-x-auto text-base sm:text-lg md:text-lg text-[#374151] ${afacad.className}`}><code>{children}</code></pre>,
          image: ({ image }) => (
            <div className="mb-6">
              <Image 
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`} 
                alt={image.alternativeText || ''} 
                width={image.width || 800} 
                height={image.height || 600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ),
          link: ({ children, url }) => <Link href={url} className={commonStyles.link}>{children}</Link>,
        }}
        modifiers={{
          bold: ({ children }) => <strong className="font-semibold">{children}</strong>,
          italic: ({ children }) => <em className="italic">{children}</em>,
          underline: ({ children }) => <u className="underline">{children}</u>,
          strikethrough: ({ children }) => <span className="line-through">{children}</span>,
          code: ({ children }) => <code className={`bg-gray-100 p-1 rounded text-base sm:text-lg md:text-lg ${afacad.className}`}>{children}</code>,
        }}
      />
    );
  }
  
  // If content is not in Strapi Blocks format, use ReactMarkdown
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h1 className={`font-bold mb-6 text-4xl text-[#374151] ${geologica.className}`} {...props} />,
        h2: ({ node, ...props }) => <h2 className={`font-bold mb-6 text-3xl text-[#374151] ${geologica.className}`} {...props} />,
        h3: ({ node, ...props }) => <h3 className={`font-bold mb-6 text-2xl text-[#374151] ${geologica.className}`} {...props} />,
        h4: ({ node, ...props }) => <h4 className={`font-bold mb-6 text-xl text-[#374151] ${geologica.className}`} {...props} />,
        h5: ({ node, ...props }) => <h5 className={`font-bold mb-6 text-lg text-[#374151] ${geologica.className}`} {...props} />,
        h6: ({ node, ...props }) => <h6 className={`font-bold mb-6 text-base text-[#374151] ${geologica.className}`} {...props} />,
        p: ({ node, ...props }) => <p className={`mb-6 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`} {...props} />,
        a: ({ node, href, ...props }) => {
          if (href) {
            return <Link href={href} className={commonStyles.link} {...props} />;
          }
          return <a className={commonStyles.link} {...props} />;
        },
        ul: ({ node, ...props }) => <ul className={`list-disc list-inside mb-6 pl-5 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`} {...props} />,
        ol: ({ node, ...props }) => <ol className={`list-decimal list-inside mb-6 pl-5 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`} {...props} />,
        li: ({ node, ...props }) => <li className="mb-2" {...props} />,
        blockquote: ({ node, ...props }) => <blockquote className={`border-l-4 border-gray-300 pl-4 italic mb-6 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`} {...props} />,
        code: ({ node, className, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          const isCodeBlock = Boolean(match);
          
          return isCodeBlock ? (
            <pre className={`bg-gray-100 p-4 rounded mb-6 overflow-x-auto text-base sm:text-lg md:text-lg text-[#374151] ${afacad.className}`}>
              <code className={className} {...props} />
            </pre>
          ) : (
            <code className={`bg-gray-100 p-1 rounded text-base sm:text-lg md:text-lg ${afacad.className}`} {...props} />
          );
        },
        img: ({ node, ...props }) => (
          <div className="mb-6">
            <img
              className="w-full h-auto rounded-lg"
              {...props}
              alt={props.alt || ''}
            />
          </div>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
