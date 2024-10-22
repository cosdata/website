'use client'

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import Link from 'next/link';
import { Afacad } from 'next/font/google';
import { Noto_Sans_Mono } from 'next/font/google';

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

type BlogContentProps = {
  content: BlocksContent;
};

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <BlocksRenderer 
      content={content}
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
          return <Tag className={`font-bold mb-6 ${sizes[level as keyof typeof sizes]} text-[#374151] ${noto_sans_mono.className}`}>{children}</Tag>;
        },
        list: ({ children, format }) => {
          const ListTag = format === 'ordered' ? 'ol' : 'ul';
          return <ListTag className={`list-inside mb-6 pl-5 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`}>{children}</ListTag>;
        },
        'list-item': ({ children }) => <li className="mb-2">{children}</li>,
        quote: ({ children }) => <blockquote className={`border-l-4 border-gray-300 pl-4 italic mb-6 text-lg sm:text-xl md:text-xl text-[#374151] ${afacad.className}`}>{children}</blockquote>,
        code: ({ children }) => <pre className={`bg-gray-100 p-4 rounded mb-6 overflow-x-auto text-base sm:text-lg md:text-lg text-[#374151] ${noto_sans_mono.className}`}><code>{children}</code></pre>,
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
        link: ({ children, url }) => <Link href={url} className="text-blue-600 hover:underline">{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => <strong className="font-semibold">{children}</strong>,
        italic: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => <u className="underline">{children}</u>,
        strikethrough: ({ children }) => <span className="line-through">{children}</span>,
        code: ({ children }) => <code className={`bg-gray-100 p-1 rounded text-base sm:text-lg md:text-lg ${noto_sans_mono.className}`}>{children}</code>,
      }}
    />
  );
}
