import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GradientBackground from "./components/GradientBackground";
import BackgroundOverlay from './components/BackgroundOverlay';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Cosdata",
  description: "Next-gen Vector Database Solution",
  icons: {
    icon: '/favicon.ico',
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
        <BackgroundOverlay />
        <GradientBackground />
        <Header />
        <div className="max-w-8xl mx-auto px-0 sm:px-0 lg:px-0">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
