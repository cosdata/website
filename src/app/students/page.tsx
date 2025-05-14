import Link from 'next/link';
import { useState, useEffect } from 'react';
import { commonStyles, noto_sans_mono, geologica, afacad } from '../styles/common';
import axios from 'axios';
import BlogPosts from '../blog/BlogPosts';

export const metadata = {
  title: 'Cosdata for Students – Build, Win, Get Recognized!',
  description: 'Join the Cosdata student program: build GenAI projects, win rewards, and get recognized. Open to students, hackathon participants, and AI/ML club members.',
  openGraph: {
    title: 'Cosdata for Students – Build, Win, Get Recognized!',
    description: 'Join the Cosdata student program: build GenAI projects, win rewards, and get recognized. Open to students, hackathon participants, and AI/ML club members.',
    url: 'https://cosdata.io/students',
    siteName: 'Cosdata',
    images: [
      {
        url: '/images/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosdata for Students',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosdata for Students – Build, Win, Get Recognized!',
    description: 'Join the Cosdata student program: build GenAI projects, win rewards, and get recognized. Open to students, hackathon participants, and AI/ML club members.',
    images: ['/images/og-image-home.jpg'],
  },
};

async function getFoundationPosts() {
  try {
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${baseUrl}/api/posts`, {
      params: {
        page: 1,
        pageSize: 3,
        category: 'Foundations'
      }
    });
    
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching foundation posts:', error);
    return [];
  }
}

export default async function StudentsPage() {
  const StudentEmailSignup = require('./StudentEmailSignup').default;
  const foundationPosts = await getFoundationPosts();

  return (
    <main className="bg-transparent">
      {/* Hero Section */}
      <section className="pt-24 pb-2 sm:pb-4 md:pb-8 flex flex-col items-center text-center bg-gradient-to-b from-[#f5dede] to-white px-4 sm:px-6 md:px-8 mb-6">
        <h1 className={`text-[#f23665] text-4xl sm:text-5xl md:text-6xl font-bold mb-4 max-w-7xl ${geologica.className}`}>Join the Cosdata Student Community</h1>
        <p className={`text-xl sm:text-2xl md:text-3xl max-w-6xl mx-auto text-[#374151] ${afacad.className}`}>Build AI apps, participate in hackathons, win prizes, and unlock internships, job opportunities, and certifications. Connect with other students, learn, and get recognized!</p>
      </section>

      {/* How to Get Started Section */}
      <section id="getting-started" className="scroll-mt-24 pb-2 sm:pb-4 md:pb-8 px-4 sm:px-6 md:px-8 bg-transparent mb-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center">
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#0055c8] pb-2 sm:pb-4 md:pb-8 text-center ${geologica.className}`}>How to Get Started</h2>
          <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-8 md:gap-8 justify-center items-stretch pb-2 sm:pb-4 md:pb-8">
            {/* Step 1: Email Signup */}
            <div className="flex flex-col min-h-[220px] bg-white rounded-xl py-6 sm:py-8 px-4 sm:px-6 md:px-8 justify-between items-center w-full">
              <div className="w-full flex flex-col items-center">
                <div className="text-3xl font-bold text-[#0055c8] mb-2">1</div>
                <div className={`text-lg font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>Sign Up to Get Updates</div>
              </div>
              <div className="w-full flex flex-col justify-end mt-4">
                <StudentEmailSignup />
              </div>
            </div>
            {/* Step 2: Join Discord */}
            <div className="flex flex-col min-h-[220px] bg-white rounded-xl py-6 sm:py-8 px-4 sm:px-6 md:px-8 justify-between items-center w-full">
              <div className="w-full flex flex-col items-center">
                <div className="text-3xl font-bold text-[#0055c8] mb-2">2</div>
                <div className={`text-lg font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>Join our Discord</div>
              </div>
              <div className="w-full flex flex-col justify-end mt-4">
                <a href="https://discord.gg/XMdtTBrtKT" target="_blank" rel="noopener noreferrer" className="inline-block w-full px-6 py-3 rounded-lg bg-[#0055c8] text-white font-semibold shadow hover:bg-blue-800 transition-colors text-lg text-center ${afacad.className}">Join Discord</a>
              </div>
            </div>
            {/* Step 3: Star GitHub */}
            <div className="flex flex-col min-h-[220px] bg-white rounded-xl py-6 sm:py-8 px-4 sm:px-6 md:px-8 justify-between items-center w-full">
              <div className="w-full flex flex-col items-center">
                <div className="text-3xl font-bold text-[#0055c8] mb-2">3</div>
                <div className={`text-lg font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>Check out & Star our GitHub</div>
              </div>
              <div className="w-full flex flex-col justify-end mt-4">
                <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="inline-block w-full px-6 py-3 rounded-lg bg-[#0055c8] text-white font-semibold shadow hover:bg-blue-800 transition-colors text-lg text-center flex items-center justify-center gap-2 ${afacad.className}">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                  Star on GitHub
                </a>
              </div>
            </div>
            {/* Step 4: Enter a Hackathon */}
            <div className="flex flex-col min-h-[220px] bg-white rounded-xl py-6 sm:py-8 px-4 sm:px-6 md:px-8 justify-between items-center w-full">
              <div className="w-full flex flex-col items-center">
                <div className="text-3xl font-bold text-[#0055c8] mb-2">4</div>
                <div className={`text-lg font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>Enter a Hackathon</div>
              </div>
              <div className="w-full flex flex-col justify-end mt-4">
                <a href="#hackathons" className="inline-block w-full px-6 py-3 rounded-lg bg-[#f23665] text-white font-semibold shadow hover:bg-pink-700 transition-colors text-lg text-center ${afacad.className}">Learn More</a>
              </div>
            </div>
          </div>
          {/* Additional details from the original page */}
          <div className="w-full pb-2 sm:pb-4 md:pb-8">
            <div className="max-w-6xl mx-auto bg-white rounded-xl p-6 sm:p-8 px-4 sm:px-6 md:px-8 text-center">
              <h2 className={`text-3xl sm:text-4xl font-bold text-[#0055c8] mb-2 sm:mb-3 ${geologica.className}`}>Why Join?</h2>
              <p className={`text-xl sm:text-2xl text-[#374151] mb-2 text-left sm:text-center sm:px-0 ${afacad.className}`}>As a Cosdata student, you&apos;ll get access to exclusive hackathons, project showcases, and a vibrant AI/ML community. Stand out with internship and job opportunities, earn certifications, and get your work recognized by industry leaders.</p>
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-0 mt-8">
              <div className="bg-white rounded-xl p-6 sm:p-8">
                <h2 className={`text-2xl sm:text-3xl font-bold text-[#0055c8] mb-3 sm:mb-4 ${geologica.className}`}>Who&apos;s it For?</h2>
                <ul className={`benchmark-list space-y-1.5 text-base sm:text-lg text-[#374151] ${afacad.className}`}>
                  <li>Students building final-year or side projects</li>
                  <li>Hackathon participants</li>
                  <li>AI/ML club members</li>
                  <li>Entrepreneurs building AI products</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 sm:p-8">
                <h2 className={`text-2xl sm:text-3xl font-bold text-[#0055c8] mb-3 sm:mb-4 ${geologica.className}`}>What You Can Build?</h2>
                <ul className={`benchmark-list space-y-1.5 text-base sm:text-lg text-[#374151] ${afacad.className}`}>
                  <li>Semantic Search Tools</li>
                  <li>Chatbots with RAG</li>
                  <li>Personalized Recommenders</li>
                  <li>Smart Knowledge Assistants</li>
                  <li>Project ideas welcome – build YOUR way!</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 sm:p-8">
                <h2 className={`text-2xl sm:text-3xl font-bold text-[#0055c8] mb-3 sm:mb-4 ${geologica.className}`}>What You&apos;ll Get</h2>
                <ul className={`benchmark-list space-y-1.5 text-base sm:text-lg text-[#374151] ${afacad.className}`}>
                  <li>Internship/Interview Call with Cosdata</li>
                  <li>Project Spotlight on our GitHub + LinkedIn</li>
                  <li>Certification + Letter of Recognition</li>
                  <li>Swag & Campus Fame</li>
                  <li>Become a Campus Ambassador</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosdata Hackathons Section */}
      <section id="hackathons" className="scroll-mt-24 pb-2 sm:pb-4 md:pb-8 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center">
          <h2 className={`text-3xl sm:text-4xl font-bold text-[#0055c8] mb-2 text-center ${geologica.className}`}>Cosdata Monthly Hackathons</h2>
          <p className={`text-lg sm:text-xl text-[#374151] mb-6 text-center max-w-3xl ${afacad.className}`}>Build something awesome with Cosdata every month! Get feedback, get promoted, and win cash prizes. All skill levels welcome—this is the best way to join our builder community and get noticed for internships and jobs.</p>

          {/* How it Works Steps */}
          <div className="w-full bg-white rounded-xl shadow p-8 mb-4">
            <h3 className={`text-xl font-bold text-[#0055c8] mb-4 ${geologica.className}`}>How It Works</h3>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-decimal list-inside text-lg ${afacad.className}">
              <li><a href="https://discord.gg/XMdtTBrtKT" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0055c8] underline hover:text-[#f23665]">Join our Discord</a> to connect and share your project</li>
              <li><a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0055c8] underline hover:text-[#f23665]">Star our GitHub</a> to support the community</li>
              <li><span className="font-semibold text-[#0055c8]">Build a project with Cosdata</span> (<a href="#learning-resources" className="text-[#0055c8] underline hover:text-[#f23665]">see Learning Resources below for help</a>)</li>
              <li><a href="https://discord.gg/XMdtTBrtKT" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0055c8] underline hover:text-[#f23665]">Share your project</a> in Discord, and post it on LinkedIn, X, or another social network (web link or demo video)</li>
            </ol>
          </div>

          {/* Requirements & Rewards */}
          <div className="w-full flex flex-col md:flex-row gap-6">
            {/* Requirements */}
            <div className="flex-1 bg-white rounded-xl shadow p-8">
              <h4 className={`text-lg font-bold text-[#0055c8] mb-3 ${geologica.className}`}>Requirements</h4>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-[#374151] ${afacad.className}">
                <li>Project must use Cosdata</li>
                <li>Share your project in Discord</li>
                <li>Project must be published to the web <span className="text-[#0055c8]">or</span> have a demo video</li>
                <li>Post your project on LinkedIn, X, or another social network</li>
              </ul>
            </div>
            {/* Rewards */}
            <div className="flex-1 bg-white rounded-xl shadow p-8">
              <h4 className={`text-lg font-bold text-[#f23665] mb-3 ${geologica.className}`}>What You Get</h4>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-[#374151] ${afacad.className}">
                <li>All submissions receive feedback from the Cosdata team</li>
                <li>All projects promoted on Cosdata&apos;s social channels</li>
                <li><span className="font-bold text-[#f23665]">Winner receives $100</span></li>
                <li>Outstanding contributors considered for paid internships</li>
                <li>We hire all our devs from our contributor & builder pool!</li>
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex justify-center mt-6 pb-12">
            <a href="https://discord.gg/XMdtTBrtKT" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-[#0055c8] text-white font-bold shadow hover:bg-blue-800 transition-colors text-lg">Start Building</a>
          </div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section id="learning-resources" className="scroll-mt-24 pb-12 sm:pb-12 md:pb-12 bg-transparent w-full">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 w-full">
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#0055c8] text-center ${geologica.className}`}>Learning Resources</h2>
          {/* Blog Foundations Series */}
          <div className="w-full bg-white rounded-xl">
            <div className="px-8">
              <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] mb-10 ${geologica.className}`}>Foundations Series (Blog)</h3>
              {foundationPosts.length > 0 ? (
                <div>
                  <BlogPosts posts={foundationPosts} className="md:grid-cols-2" />
                  <div className="mt-4">
                    <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline text-sm">
                      View all posts →
                    </Link>
                  </div>
                </div>
              ) : (
                <p className={`text-base text-[#374151] ${afacad.className}`}>Explore our <Link href="/blog" className="text-blue-600 underline">blog</Link> for deep dives and the Foundations Series on vector search, RAG, and more.</p>
              )}
            </div>
          </div>

          {/* Docs, GitHub, Discord, Socials */}
          <div className="w-full bg-white rounded-xl p-8">
            <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] mb-10 ${geologica.className}`}>More Resources</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
              <li>
                <a href="https://docs.cosdata.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0055c8] hover:text-[#f23665] transition-colors text-lg font-semibold justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  Docs
                </a>
              </li>
              <li>
                <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0055c8] hover:text-[#f23665] transition-colors text-lg font-semibold justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.gg/XMdtTBrtKT" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0055c8] hover:text-[#f23665] transition-colors text-lg font-semibold justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@cosdata" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0055c8] hover:text-[#f23665] transition-colors text-lg font-semibold justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/cosdata" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0055c8] hover:text-[#f23665] transition-colors text-lg font-semibold justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/cosdataio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0055c8] hover:text-[#f23665] transition-colors text-lg font-semibold justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Cosdata Section */}
      <section id="about-cosdata" className="scroll-mt-24 pb-24 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center">
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#0055c8] text-center ${geologica.className}`}>About Cosdata</h2>
          <div className="w-full bg-white rounded-xl p-8 text-center text-lg text-[#374151] ${afacad.className}">
            <p className="mb-4">Cosdata delivers high-performance vector search solutions, including open-source and serverless options, designed for enterprise-scale AI applications. We empower students to build GenAI projects with industry-leading performance, scale, and easy of use.</p>
            <p>As a student, you can access exclusive hackathons, project showcases, and a vibrant AI/ML community. Stand out with internship and job opportunities, earn certifications, win prizes, and get your work recognized by industry leaders.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
