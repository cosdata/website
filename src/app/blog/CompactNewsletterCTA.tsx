'use client'

import React, { useState } from 'react';
import { afacad, geologica } from '../styles/common';

export default function CompactNewsletterCTA() {
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
        const errorData = await response.json().catch(() => ({ message: 'An unexpected error occurred' }));
        throw new Error(errorData.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      
      // If it's a duplicate email error, show a friendly message
      if (error instanceof Error && error.message.includes('duplicate')) {
        setErrorMessage('This email is already subscribed. Thank you for your interest!');
        // Automatically switch to success state after a brief delay
        setTimeout(() => setStatus('success'), 3000);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };
  
  return (
    <div className="bg-gradient-to-r from-[#f0f6ff] to-[#e6f0ff] rounded-xl border border-blue-100 shadow-sm overflow-hidden">
      <div className="px-6 py-8 md:px-8 md:py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-2xl md:text-3xl font-bold text-[#0055c8] mb-2 ${geologica.className}`} data-toc-exclude>
            Keep Up to Date with Cosdata
          </h2>
          <p className={`text-base text-gray-600 mb-6 max-w-xl mx-auto ${afacad.className}`}>
            Get the latest on vector databases, RAG implementations, hybrid search techniques, 
            and product updates directly to your inbox.
          </p>
          
          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#0055c8]/20 bg-white text-gray-700 placeholder-gray-400 border border-gray-200 shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#f23665] text-white rounded-lg shadow-sm hover:bg-[#d92d5c] transition-colors duration-300 font-medium text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
              {status === 'error' && (
                <p className="mt-4 text-red-500 text-sm">{errorMessage}</p>
              )}
            </form>
          ) : (
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-sm border border-green-100">
              <p className="text-gray-700 font-semibold flex items-center justify-center">
                <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Thank you for subscribing!
              </p>
            </div>
          )}
          
          <p className="text-sm text-gray-500 mt-4">
            By subscribing, you&apos;ll receive updates on Cosdata&apos;s technology and product news.
          </p>
        </div>
      </div>
    </div>
  );
} 