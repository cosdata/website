import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Cosdata',
  description: 'Learn about Cosdata, our mission, and our innovative vector search and knowledge graph technology.',
};

export default function AboutPage() {
  // This will redirect users to the blog post that serves as our About Us page
  redirect('/blog/introducing-cosdata');
} 