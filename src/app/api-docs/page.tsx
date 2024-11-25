import { notFound } from 'next/navigation';
import { commonStyles, afacad, geologica } from '../styles/common';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { headers } from 'next/headers';
import CodeBlock from '../components/CodeBlock';
import AnchorLink from '../components/AnchorLink';
import * as React from 'react';

// Define interfaces for our components
interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const revalidate = 3600;

export default async function ApiDocs() {
  const headersList = headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  
  try {
    const response = await fetch(`${protocol}://${host}/api/webpages/api-docs`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const page = await response.json();

    if (!page) {
      notFound();
    }

    return (
      <div className={`bg-white min-h-screen ${geologica.className}`}>
        <article className={commonStyles.mainContainer}>
          <div className={`prose prose-lg max-w-none ${afacad.className}`}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                // Remove paragraph handling of code blocks
                p: ({ children, ...props }) => (
                  <p className="text-lg mb-6 text-[#374151]" {...props}>
                    {children}
                  </p>
                ),
                // Headings
                h1: ({ children }) => {
                  const id = typeof children === 'string' 
                    ? children.match(/^\d+\./)
                      ? children.split(' ')[0].slice(0, -1) // For "1. Overview" -> "1"
                      : children.toLowerCase().replace(/[^\w]+/g, '-')
                    : undefined;
                  return (
                    <h1 id={id} className="text-4xl font-bold mb-8 text-[#374151]">
                      {children}
                    </h1>
                  );
                },
                h2: ({ children }) => {
                  const rawText = typeof children === 'string' ? children : '';
                  const match = rawText.match(/^\d+\./);
                  const id = match
                    ? rawText.toLowerCase()
                        .replace(/\./g, '')
                        .replace(/\s+/g, '-') // Convert spaces to hyphens
                    : rawText.toLowerCase().replace(/[^\w]+/g, '-');
                  return (
                    <h2 id={id} className="text-3xl font-semibold mt-12 mb-6 text-[#374151]">
                      {children}
                    </h2>
                  );
                },
                h3: ({ children }) => {
                  const rawText = typeof children === 'string' ? children : '';
                  const match = rawText.match(/^\d+\.\d+\./);
                  const id = match
                    ? rawText.toLowerCase()
                        .replace(/\./g, '')
                        .replace(/\s+/g, '-') // Convert spaces to hyphens
                    : rawText.toLowerCase().replace(/[^\w]+/g, '-');
                  return (
                    <h3 id={id} className="text-2xl font-semibold mt-8 mb-4 text-[#374151]">
                      {children}
                    </h3>
                  );
                },
                h4: ({ children }) => {
                  const rawText = typeof children === 'string' ? children : '';
                  const match = rawText.match(/^\d+\.\d+\.\d+\./);
                  const id = match
                    ? rawText.toLowerCase()
                        .replace(/\./g, '')
                        .replace(/\s+/g, '-') // Convert spaces to hyphens
                    : rawText.toLowerCase().replace(/[^\w]+/g, '-');
                  return (
                    <h4 id={id} className="text-xl font-semibold mt-6 mb-3 text-[#374151]">
                      {children}
                    </h4>
                  );
                },
                // Lists with different text sizes based on nesting
                ul: ({ children, ...props }) => (
                  <ul 
                    {...props}
                    className={`
                      list-disc
                      mb-2
                      space-y-2
                      ml-6
                      text-2xl
                      [&_ul]:text-xl
                      [&_ul_ul]:text-lg
                      [&_ul]:mt-2
                      [&_ul_ul]:mt-2
                    `}
                  >
                    {children}
                  </ul>
                ),
                ol: ({ children, ...props }) => (
                  <ol 
                    {...props}
                    className={`
                      list-decimal
                      mb-2
                      space-y-2
                      ml-6
                      text-2xl
                      [&_ol]:text-xl
                      [&_ol_ol]:text-lg
                      [&_ol]:mt-2
                      [&_ol_ol]:mt-2
                    `}
                  >
                    {children}
                  </ol>
                ),
                li: ({ children, ...props }) => (
                  <li 
                    {...props}
                    className={`
                      ml-4
                      pl-2
                      text-[#374151]
                    `}
                  >
                    {children}
                  </li>
                ),
                // Handle code blocks at the root level
                code: ({ inline, className, children, ...props }: CodeProps) => {
                  if (!inline) {
                    const content = String(children).trim();
                    let lang = '';
                    let cleanContent = content;

                    const languageMatch = content.match(/^(\w+)\s+/);
                    if (languageMatch) {
                      lang = languageMatch[1];
                      cleanContent = content.slice(languageMatch[0].length);
                    } else {
                      const match = /language-(\w+)/.exec(className || '');
                      lang = match ? match[1] : '';
                    }

                    try {
                      if (lang === 'json') {
                        cleanContent = JSON.stringify(JSON.parse(cleanContent), null, 2);
                      }
                    } catch (e) {
                      console.log('JSON parsing failed, using raw content');
                    }

                    // Return the CodeBlock with children between tags
                    return (
                      <div className="my-6">
                        <CodeBlock language={lang}>
                          {cleanContent}
                        </CodeBlock>
                      </div>
                    );
                  }
                  
                  return (
                    <code className="bg-gray-100 rounded px-2 py-1 text-sm font-mono" {...props}>
                      {children}
                    </code>
                  );
                },
                // Tables with larger text
                table: ({ children }) => (
                  <div className="my-8 overflow-x-auto rounded-lg border border-gray-200 shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-gray-50">
                    {children}
                  </thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="bg-white divide-y divide-gray-200">
                    {children}
                  </tbody>
                ),
                tr: ({ children, ...props }) => {
                  return (
                    <tr 
                      {...props}
                      className="hover:bg-gray-50"
                    >
                      {children}
                    </tr>
                  );
                },
                th: ({ children }) => (
                  <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap border-b">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-6 py-4 text-lg text-gray-500 border-b">
                    <div className="flex items-center">
                      {children}
                    </div>
                  </td>
                ),
                a: ({ children, href }) => (
                  <AnchorLink href={href ?? '#'}>
                    {children}
                  </AnchorLink>
                ),
              }}
            >
              {page.attributes.page_data}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error fetching API docs page:', error);
    notFound();
  }
} 