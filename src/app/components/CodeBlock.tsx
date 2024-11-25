'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  language: string;
  children: string;
}

export default function CodeBlock({ language, children }: CodeBlockProps) {

  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      customStyle={{
        margin: '1.5rem 0',
        padding: '1.5rem',
        borderRadius: '0.5rem',
      }}
      showLineNumbers={true}
    >
      {children}
    </SyntaxHighlighter>
  );
} 