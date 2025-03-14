import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Cosdata - Get in Touch',
  description: 'Contact the Cosdata team for inquiries about our vector search and knowledge graph technology solutions.',
};

export default function ContactPage() {
  return <ContactForm />;
} 