'use client'

import { useState } from 'react';
import { afacad } from '../styles/common';

export default function NewsletterSignup() {
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
      <div className={`bg-white shadow-md rounded-lg p-8 ${afacad.className}`}>
        <h2 className="text-2xl font-bold mb-4">Sign up for Cosdata updates</h2>
        <p className="text-gray-600 mb-6">
          We'll occasionally send you best practices for using vector data and similarity search, as well as product news.
        </p>
        {status !== 'success' ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
          </form>
        ) : (
          <p className="text-green-600 font-semibold">Success! Thank you for subscribing.</p>
        )}
        <p className="text-xs text-gray-500 mt-4">
          By submitting, you agree to subscribe to Cosdata's updates. You can withdraw your consent anytime. More details are in the Privacy Policy.
        </p>
      </div>
    )
  }
