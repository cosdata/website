import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Cosdata - Next-gen Vector Database and Knowledge Graph Solution",
  description: "Powerful, scalable vector database and knowledge graph solutions for enterprise AI applications.",
  metadataBase: new URL('https://cosdata.io'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cosdata.io/',
    siteName: 'Cosdata',
    title: 'Cosdata - Next-gen Vector Database and Knowledge Graph Solution',
    description: 'Powerful, scalable vector database and knowledge graph solutions for enterprise AI applications.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosdata',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosdata - Next-gen Vector Database and Knowledge Graph Solution',
    description: 'Powerful, scalable vector database and knowledge graph solutions for enterprise AI applications.',
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
      <body>
        <Header />
        <div className="max-w-8xl mx-auto px-0 sm:px-0 lg:px-0">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
