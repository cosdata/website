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
        <div className="bg-gradient-to-r from-[#0055c8] to-[#3d8bff] rounded-xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Stay Updated with Cosdata
                    </h2>
                    <p className="text-xl text-white opacity-90 mb-10">
                        Get the latest insights on vector search, similarity algorithms, and product updates delivered to your inbox.
                    </p>
                    
                    {status !== 'success' ? (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-4 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/10 text-white placeholder-white/60 border border-white/20"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-8 py-4 bg-white text-[#0055c8] rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 font-bold text-base disabled:opacity-70 disabled:cursor-not-allowed"
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
                                <p className="mt-4 text-red-200 text-sm">{errorMessage}</p>
                            )}
                        </form>
                    ) : (
                        <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto">
                            <p className="text-white font-semibold flex items-center justify-center">
                                <svg className="w-6 h-6 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Thank you for subscribing!
                            </p>
                        </div>
                    )}
                    
                    <p className="text-sm text-white/70 mt-6">
                        By subscribing, you agree to receive Cosdata&apos;s updates. You can unsubscribe at any time.
                        <br />View our <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
