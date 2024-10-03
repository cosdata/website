import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GradientBackground from "./components/GradientBackground";
import BackgroundOverlay from './components/BackgroundOverlay';

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