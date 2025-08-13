import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from 'next/script';
import BodyWithAttributes from './components/BodyWithAttributes';

export const metadata: Metadata = {
  title: "Cosdata - Context retrieval engine for AI agents",
  description: " Delivering high-performance, scalable context intelligence for AI - turning unstructured and semi-structured data into precise, actionable insights.",
  metadataBase: new URL('https://cosdata.io'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cosdata.io/',
    siteName: 'Cosdata',
    title: 'Cosdata - Context retrieval engine for AI agents',
    description: ' Delivering high-performance, scalable context intelligence for AI - turning unstructured and semi-structured data into precise, actionable insights.',
    images: [
      {
        url: '/images/og-image.jpg',
        alt: 'Cosdata',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosdata - Context retrieval engine for AI agents',
    description: ' Delivering high-performance, scalable context intelligence for AI - turning unstructured and semi-structured data into precise, actionable insights.',
    images: ['/images/og-image.jpg'],
    creator: '@cosdata',
    site: '@cosdata',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
};

// Server component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QK60MJRHMR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QK60MJRHMR');
          `}
        </Script>
      </head>
      <BodyWithAttributes>
        <Header />
        <div className="max-w-8xl mx-auto px-0 sm:px-0 lg:px-0">
          {children}
        </div>
        <Footer />
      </BodyWithAttributes>
    </html>
  );
}
