import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GradientBackground from "./components/GradientBackground";
import BackgroundOverlay from './components/BackgroundOverlay';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <BackgroundOverlay />
        <GradientBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}