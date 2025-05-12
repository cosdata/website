import Link from 'next/link';
import { commonStyles, noto_sans_mono, geologica, afacad } from '../styles/common';

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

export default function StudentsPage() {
  const StudentEmailSignup = require('./StudentEmailSignup').default;

  return (
    <main className="bg-transparent">
      {/* Hero Section */}
      <section className="pt-24 pb-2 sm:pb-4 md:pb-8 flex flex-col items-center text-center bg-gradient-to-b from-[#f5dede] to-white px-4 sm:px-6 md:px-8 mb-8">
        <h1 className={`text-[#f23665] text-4xl sm:text-5xl md:text-6xl font-bold mb-4 max-w-7xl ${geologica.className}`}>Join the Cosdata Student Community</h1>
        <p className={`text-xl sm:text-2xl md:text-3xl max-w-5xl mx-auto mb-6 text-[#374151] ${afacad.className}`}>Build AI apps, participate in events, and unlock internships, job opportunities, and certifications. Connect with other students, learn, and get recognized!</p>
      </section>

      {/* Step-by-step CTA Section */}
      <section className="pb-2 sm:pb-4 md:pb-8 px-4 sm:px-6 md:px-8 bg-transparent mb-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center">
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#0055c8] pb-2 sm:pb-4 md:pb-8 text-center ${geologica.className}`}>Get Started in 3 Easy Steps</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-6 md:gap-y-8 justify-center items-stretch">
            {/* Step 1: Email Signup */}
            <div className="flex flex-col min-h-[240px] bg-white rounded-xl shadow py-6 sm:py-8 px-4 sm:px-6 md:px-8 border-2 border-[#0055c8] justify-between items-center w-full">
              <div className="w-full flex flex-col items-center">
                <div className="text-3xl font-bold text-[#0055c8] mb-2">1</div>
                <div className={`text-lg font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>Sign Up to Get Updates</div>
              </div>
              <div className="w-full flex flex-col justify-end mt-4">
                <StudentEmailSignup />
              </div>
            </div>
            {/* Step 2: Join Discord */}
            <div className="flex flex-col min-h-[240px] bg-white rounded-xl shadow py-6 sm:py-8 px-4 sm:px-6 md:px-8 border-2 border-[#0055c8] justify-between items-center w-full">
              <div className="w-full flex flex-col items-center">
                <div className="text-3xl font-bold text-[#0055c8] mb-2">2</div>
                <div className={`text-lg font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>Join our Discord</div>
              </div>
              <div className="w-full flex flex-col justify-end mt-4">
                <a href="https://discord.gg/XMdtTBrtKT" target="_blank" rel="noopener noreferrer" className="inline-block w-full px-6 py-3 rounded-lg bg-[#0055c8] text-white font-semibold shadow hover:bg-blue-800 transition-colors text-lg text-center ${afacad.className}">Join Discord</a>
              </div>
            </div>
            {/* Step 3: Star GitHub */}
            <div className="flex flex-col min-h-[240px] bg-white rounded-xl shadow py-6 sm:py-8 px-4 sm:px-6 md:px-8 border-2 border-[#0055c8] justify-between items-center w-full">
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
          </div>
        </div>
      </section>

      {/* Value Proposition Card */}
      <section className="pb-2 sm:pb-4 md:pb-8 px-4 sm:px-6 md:px-8 mb-2 sm:mb-4 md:mb-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl p-6 sm:p-8 px-4 sm:px-6 md:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold text-[#0055c8] mb-2 sm:mb-3 ${geologica.className}`}>Why Join?</h2>
          <p className={`text-xl sm:text-2xl text-[#374151] mb-2 text-left sm:text-center sm:px-0 ${afacad.className}`}>As a Cosdata student, you&apos;ll get access to exclusive hackathons, project showcases, and a vibrant AI/ML community. Stand out with internship and job opportunities, earn certifications, and get your work recognized by industry leaders.</p>
        </div>
      </section>

      {/* Details Sections (as before) */}
      <section className="pb-2 sm:pb-4 md:pb-8 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className={`${commonStyles.mainContainer} py-0 px-0`}>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-0">
            <div className="bg-white rounded-xl p-6 sm:p-8">
              <h2 className={`text-2xl sm:text-3xl font-bold text-[#0055c8] mb-3 sm:mb-4 ${geologica.className}`}>Who Can Participate?</h2>
              <ul className={`benchmark-list space-y-1.5 text-base sm:text-lg text-[#374151] ${afacad.className}`}>
                <li>Students building final-year or side projects</li>
                <li>Hackathon participants</li>
                <li>AI/ML club members</li>
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
      </section>

      <section className="pb-2 sm:pb-4 md:pb-8 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-8">
        <div className={`${commonStyles.mainContainer} py-0 px-0`}>
          <div className="mx-auto bg-white rounded-xl p-6 sm:p-8 px-0 sm:px-2 md:px-6">
            <h2 className={`text-3xl sm:text-4xl font-bold text-[#0055c8] text-center mb-2 sm:mb-3 ${geologica.className}`}>Why Cosdata?</h2>
            <p className={`text-xl sm:text-2xl text-[#374151] mb-2 text-left sm:text-center px-0 sm:px-0 ${afacad.className}`}>Cosdata delivers high-performance vector search solutions, including OSS and Serverless options, designed for enterprise-scale AI applications. Power your GenAI projects with industry-leading speed, hybrid search, and knowledge graph integration.</p>
            <Link href="/" className={`block text-blue-600 underline text-left sm:text-center text-xl sm:text-2xl ${afacad.className}`}>Learn more about Cosdata</Link>
          </div>
        </div>
      </section>

      {/* Step-by-step CTA Section */}
      <section className="pb-24 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center">
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#0055c8] mb-6 text-center ${geologica.className}`}>Get Started in 3 Easy Steps</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-8 md:gap-y-8 justify-center items-stretch">
            {/* Step 1: Email Signup */}
            <div className="flex flex-col flex-1 min-h-[240px] bg-white rounded-xl shadow p-6 sm:p-8 sm:px-8 border-2 border-[#0055c8] justify-between items-center mb-8 md:mb-0 w-full">
              <div className="w-full flex flex-col items-center">
                <div className="text-3xl font-bold text-[#0055c8] mb-2">1</div>
                <div className={`text-lg font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>Sign Up to Get Updates</div>
              </div>
              <div className="w-full flex flex-col justify-end mt-4">
                <StudentEmailSignup />
              </div>
            </div>
            {/* Step 2: Join Discord */}
            <div className="flex flex-col flex-1 min-h-[240px] bg-white rounded-xl shadow p-6 sm:p-8 sm:px-8 border-2 border-[#0055c8] justify-between items-center mb-8 md:mb-0 w-full">
              <div className="w-full flex flex-col items-center">
                <div className="text-3xl font-bold text-[#0055c8] mb-2">2</div>
                <div className={`text-lg font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>Join our Discord</div>
              </div>
              <div className="w-full flex flex-col justify-end mt-4">
                <a href="https://discord.gg/XMdtTBrtKT" target="_blank" rel="noopener noreferrer" className="inline-block w-full px-6 py-3 rounded-lg bg-[#0055c8] text-white font-semibold shadow hover:bg-blue-800 transition-colors text-lg text-center ${afacad.className}">Join Discord</a>
              </div>
            </div>
            {/* Step 3: Star GitHub */}
            <div className="flex flex-col flex-1 min-h-[240px] bg-white rounded-xl shadow p-6 sm:p-8 sm:px-8 border-2 border-[#0055c8] justify-between items-center w-full">
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
          </div>
        </div>
      </section>
    </main>
  );
}
