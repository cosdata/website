'use client'

import React from 'react';

export default function BodyWithAttributes({ children }: { children: React.ReactNode }) {
  // Add suppressHydrationWarning to prevent warnings about attributes added by browser extensions
  return (
    <body suppressHydrationWarning={true}>
      {children}
    </body>
  );
} 