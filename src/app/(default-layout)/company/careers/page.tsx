import type { Metadata } from 'next';
import { commonStyles } from '../../../styles/common';

export const metadata: Metadata = {
  title: 'Careers at Cosdata - Join Our Team',
  description: 'Explore career opportunities at Cosdata. Join our team and help build the future of vector search and knowledge graph technology.',
};

export default function CareersPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-green-800 to-emerald-900 text-white">
        <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at Cosdata</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join our team and help build the future of vector search and knowledge graph technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Work With Us</h2>
            
            <div className="prose prose-lg">
              <p>
                At Cosdata, we're building cutting-edge vector search and knowledge graph technology to power the next generation of AI applications. We're a team of passionate engineers, researchers, and product builders who are excited about pushing the boundaries of what's possible.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Values</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Innovation:</strong> We're constantly exploring new ideas and approaches to solve complex problems.</li>
                <li><strong>Excellence:</strong> We strive for excellence in everything we do, from code quality to user experience.</li>
                <li><strong>Collaboration:</strong> We believe in the power of teamwork and open communication.</li>
                <li><strong>Impact:</strong> We're focused on building technology that makes a real difference for our users.</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Open Positions</h3>
              
              <p className="italic">
                We're currently building our team page. Please check back soon for open positions, or contact us directly at <a href="mailto:careers@cosdata.io" className="text-blue-600 hover:text-blue-800">careers@cosdata.io</a> to express interest.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-10">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Don't see a role that fits?</h4>
                <p>
                  We're always looking for talented individuals to join our team. If you're passionate about vector search, knowledge graphs, or AI, we'd love to hear from you!
                </p>
                <a 
                  href="mailto:careers@cosdata.io" 
                  className="inline-block mt-4 px-6 py-3 bg-[#f23665] text-white rounded-md hover:bg-[#d92d5c] transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 