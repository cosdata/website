'use client';
import { useState } from 'react';
import { afacad } from '../styles/common';

export default function StudentEmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch('/api/submit-student-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, studentForm: true }),
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
    <div className="w-full flex flex-col items-center justify-center">
      {status !== 'success' ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-[320px] mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border-2 border-[#0055c8] focus:border-[#0055c8] outline-none text-base text-gray-800 bg-white ${afacad.className}"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            style={{ minWidth: 0 }}
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-[#0055c8] text-lg text-white font-semibold shadow hover:bg-blue-800 transition-colors text-base ${afacad.className}"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Get Student Updates'}
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold text-base mt-2 text-center ${afacad.className}">Success! Thank you for subscribing.</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 mt-2 text-base text-center ${afacad.className}">{errorMessage}</p>
      )}
    </div>
  );
} 