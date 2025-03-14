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
      <div className="bg-[#0055c8] absolute -z-[11] w-full h-[1500px] bottom-0"></div>

      <div className="bg-[#0055c8] text-[white] pb-8 pt-4 relative z-10">
        <div className={commonStyles.mainContainer}>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="flex flex-col sm:items-center order-last sm:order-first">
              <div>
                <Link href="/">
                  <div className='w-48 h-12 relative mb-4'>
                    <Image
                      src="/svgs/logo_white.svg"
                      alt='Cosdata logo'
                      fill
                      style={{ objectFit: "contain", objectPosition: "left" }}
                    />
                  </div>
                </Link>
                <div className="flex space-x-4">
                  <a href="https://github.com/cosdata/cosdata" target="_blank" rel="noopener noreferrer" className="">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  <a href="https://discord.gg/qvm8FJJHPm" target="_blank" rel="noopener noreferrer" className="">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                    </svg>
                  </a>
                  <a href="#" className="">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                </div>
                <div className="flex flex-col items-start mt-4">
                  <p className={`${commonStyles.paragraph} text-white mb-4`}>Subscribe to our newsletter.</p>
                  {status !== 'success' ? (
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center lg:items-center gap-2 w-full">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className={`w-full px-2 py-[0.36rem] rounded-md outline-none border-2 focus:border-[#3083fe] border-[white] bg-white text-gray-800 mb-2 sm:mb-0 ${afacad.className}`}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        type="submit"
                        className={`${commonStyles.button} w-full bg-[white] text-[#0055c8] hover:bg-[#3083fe] hover:text-white`}
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                      </button>
                    </form>
                  ) : (
                    <p className={`${commonStyles.paragraph} text-white font-semibold`}>Success! Thank you for subscribing.</p>
                  )}
                  {status === 'error' && (
                    <p className={`${commonStyles.paragraph} text-red-300 mt-2`}>{errorMessage}</p>
                  )}
                </div>
              </div>
            </div>

            <div className='flex flex-col md:items-center'>
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${geologica.className}`}>Product</h3>
                <ul className={`space-y-2 ${commonStyles.paragraph} text-white`}>
                  <li><Link href="/tech" className="">Technology</Link></li>
                  <li><Link href="/blog/introducing-cosdata" className="">Features</Link></li>
                  <li><Link href="/blog/introducing-cosdata" className="">Use Cases</Link></li>
                  <li><Link href="#" className="">Pricing</Link></li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col md:items-center'>
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${geologica.className}`}>Resources</h3>
                <ul className={`space-y-2 ${commonStyles.paragraph} text-white`}>
                  <li><Link href="/blog" className="">Blog</Link></li>
                  <li><Link href="#" className="">Documentation</Link></li>
                  <li><Link href="#" className="">API Reference</Link></li>
                  <li><Link href="#" className="">Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
