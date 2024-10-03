'use client'

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import Link from 'next/link';

type BlogContentProps = {
  content: BlocksContent;
};

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <BlocksRenderer 
      content={content}
      blocks={{
        paragraph: ({ children }) => <p className="mb-4">{children}</p>,
        heading: ({ children, level }) => {
          const Tag = `h${level}` as keyof JSX.IntrinsicElements;
          return <Tag className={`font-bold mb-4 text-${4-level}xl`}>{children}</Tag>;
        },
        list: ({ children, format }) => {
          const ListTag = format === 'ordered' ? 'ol' : 'ul';
          return <ListTag className="list-inside mb-4 pl-5">{children}</ListTag>;
        },
        'list-item': ({ children }) => <li className="mb-1">{children}</li>,
        quote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">{children}</blockquote>,
        code: ({ children }) => <pre className="bg-gray-100 p-2 rounded mb-4"><code>{children}</code></pre>,
        image: ({ image }) => (
          <Image 
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`} 
            alt={image.alternativeText || ''} 
            width={image.width || 800} 
            height={image.height || 600}
            className="mb-4"
          />
        ),
        link: ({ children, url }) => <Link href={url} className="text-blue-600 hover:underline">{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => <strong className="font-semibold">{children}</strong>,
        italic: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => <u className="underline">{children}</u>,
        strikethrough: ({ children }) => <span className="line-through">{children}</span>,
        code: ({ children }) => <code className="bg-gray-100 p-1 rounded">{children}</code>,
      }}
    />
  );
}