'use client';

import ScrollRestoration from '../../components/ScrollRestoration';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollRestoration />
      {children}
    </>
  );
} 