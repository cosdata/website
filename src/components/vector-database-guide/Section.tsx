import React from 'react';
import { geologica } from '@/app/styles/common';

export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-[500] mb-6 sm:mb-10 text-[#0055c8] ${geologica.className}`}>{title}</h2>
      {children}
    </section>
  );
} 