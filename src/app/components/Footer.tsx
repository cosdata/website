'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { commonStyles, afacad, geologica } from '../styles/common';

function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/submit-early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, companyName: '', jobTitle: '' }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <footer className={`relative ${afacad.className}`}>
      <div className="bg-gray-100 text-gray-800 pb-8 pt-6 sm:pt-8 border-t border-gray-200 px-4 sm:px-6">
        <div className={commonStyles.mainContainer}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8">
            {/* Newsletter and Social Links */}
            <div className="flex flex-col col-span-2 md:col-span-1 order-first md:order-first mb-4 md:mb-0">
              <Link href="/">
                <div className='w-36 sm:w-48 h-10 sm:h-12 relative mb-3 sm:mb-4'>
                  <Image
                    src="/svgs/logo.svg" 
                    alt='Cosdata logo'
                    fill
                    style={{ objectFit: "contain", objectPosition: "left" }}
                  />
                </div>
              </Link>
              <div className="flex space-x-4 mb-4">
                <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0055c8]">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a href="https://discord.gg/qvm8FJJHPm" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#5865F2]">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-col items-start mt-1 sm:mt-3">
                <p className={`${commonStyles.paragraph} text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base`}>Subscribe to our newsletter.</p>
                {status !== 'success' ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center sm:space-x-2 gap-2 w-full">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className={`w-full px-2 py-2 sm:py-[0.36rem] rounded-md outline-none border-2 focus:border-[#3083fe] border-gray-300 bg-white text-gray-800 text-sm sm:text-base`}
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="inline-block bg-[#f23665] text-white px-3 sm:px-4 py-2 rounded-lg shadow-md hover:bg-[#d92d5c] transition duration-300 flex items-center justify-center text-sm sm:text-base sm:w-auto w-full whitespace-nowrap"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </form>
                ) : (
                  <p className={`${commonStyles.paragraph} text-green-600 font-semibold text-sm sm:text-base`}>Success! Thank you for subscribing.</p>
                )}
                {status === 'error' && (
                  <p className={`${commonStyles.paragraph} text-red-500 mt-2 text-sm sm:text-base`}>{errorMessage}</p>
                )}
              </div>
            </div>

            {/* Products */}
            <div className='flex flex-col'>
              <h3 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-gray-900 ${geologica.className}`}>Products</h3>
              <ul className={`space-y-1.5 sm:space-y-2 ${commonStyles.paragraph} text-gray-700 text-sm sm:text-base`}>
                <li><Link href="/products/cosdata-hnsw" className="hover:text-[#0055c8]">Cosdata HNSW</Link></li>
                <li><Link href="/products/cosdata-serverless" className="hover:text-[#0055c8]">Cosdata Serverless</Link></li>
                <li><Link href="/products/structured-search" className="hover:text-[#0055c8]">Structured Search</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className='flex flex-col'>
              <h3 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-gray-900 ${geologica.className}`}>Resources</h3>
              <ul className={`space-y-1.5 sm:space-y-2 ${commonStyles.paragraph} text-gray-700 text-sm sm:text-base`}>
                <li><Link href="/blog" className="hover:text-[#0055c8]">Blog</Link></li>
                <li><Link href="/resources/benchmarks" className="hover:text-[#0055c8]">Benchmarks</Link></li>
                <li><Link href="/tech/roadmap" className="hover:text-[#0055c8]">Roadmap</Link></li>
                <li><Link href="/blog/channi-paper" className="hover:text-[#0055c8]">CHANNI Paper</Link></li>
                <li><Link href="/blog/mavann-metadata-filtering" className="hover:text-[#0055c8]">MAVANN Paper</Link></li>
                <li>
                  <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="hover:text-[#0055c8] flex items-center">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className='flex flex-col'>
              <h3 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-gray-900 ${geologica.className}`}>Company</h3>
              <ul className={`space-y-1.5 sm:space-y-2 ${commonStyles.paragraph} text-gray-700 text-sm sm:text-base`}>
                <li><Link href="/blog/introducing-cosdata" className="hover:text-[#0055c8]">About Us</Link></li>
                <li><Link href="/company/careers" className="hover:text-[#0055c8]">Careers</Link></li>
                <li><Link href="/company/contact" className="hover:text-[#0055c8]">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-[#0055c8]">Privacy Policy</Link></li>
                <li><Link href="https://docs.cosdata.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#0055c8] flex items-center">
                  Documentation
                </Link></li>
                <li>
                  <a href="https://discord.gg/qvm8FJJHPm" target="_blank" rel="noopener noreferrer" className="hover:text-[#0055c8] flex items-center">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
