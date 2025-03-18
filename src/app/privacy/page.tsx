import { commonStyles, afacad, geologica } from '../styles/common';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Cosdata',
  description: 'Privacy Policy for Cosdata - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f0f7ff] py-16">
      <div className={`max-w-4xl mx-auto px-4 md:px-8 ${afacad.className}`}>
        <h1 className={`${commonStyles.sectionTitle} !text-left mb-8 text-4xl md:text-5xl`}>
          Privacy Policy
        </h1>
        <div className="text-[#374151] text-lg">
          <p className="mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>1. Introduction</h2>
            <p className="mb-4">
              Welcome to Cosdata (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with us in any way.
            </p>
            <p className="mb-4">
              By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>2. Information We Collect</h2>
            <h3 className={`text-xl font-medium mb-3 text-[#0055c8] ${geologica.className}`}>2.1 Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sign up for our newsletter</li>
              <li>Request early access to our products</li>
              <li>Contact us through our website</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="mb-4">
              This information may include your name, email address, company name, and any other information you choose to provide.
            </p>

            <h3 className={`text-xl font-medium mb-3 text-[#0055c8] ${geologica.className}`}>2.2 Usage Data</h3>
            <p className="mb-4">
              We automatically collect certain information when you visit, use, or navigate our website. This information does not reveal your specific identity but may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Device and browser information</li>
              <li>IP address</li>
              <li>Usage patterns and preferences</li>
              <li>Pages visited</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>3. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing and improving our website</li>
              <li>Sending administrative information and updates</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Sending marketing and promotional communications (with your consent)</li>
              <li>Monitoring usage patterns to enhance user experience</li>
              <li>Detecting, preventing, and addressing technical issues</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>4. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>
            <p className="mb-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>5. Data Sharing and Disclosure</h2>
            <p className="mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>With service providers:</strong> We may share your information with third-party vendors and service providers who perform services on our behalf.</li>
              <li><strong>For business transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
              <li><strong>With your consent:</strong> We may disclose your information for any other purpose with your consent.</li>
              <li><strong>Legal requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>6. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
            <p className="mb-4">
              We strive to use commercially acceptable means to protect your personal information, but we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>7. Your Data Protection Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including rights to access, correct, delete, or restrict the use of your personal information. If you would like to exercise any of these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>8. Children&apos;s Privacy</h2>
            <p className="mb-4">
              Our website is not intended for use by children under the age of 16. We do not knowingly collect personally identifiable information from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>9. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
            <p className="mb-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 text-[#0055c8] ${geologica.className}`}>10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>By visiting our <Link href="/company/contact" className="text-[#0055c8] hover:underline">contact page</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 