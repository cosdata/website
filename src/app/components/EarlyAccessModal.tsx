"use client";

import { useState, useRef, useEffect } from 'react';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/submit-early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, companyName, jobTitle }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form fields
        setEmail('');
        setCompanyName('');
        setJobTitle('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitStatus('idle');
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-10 rounded-lg shadow-xl max-w-2xl w-full mx-4">
        <h2 className="text-3xl font-bold text-[#0055c8] mb-8">Get Early Access</h2>
        {submitStatus === 'success' ? (
          <div>
            <p className="text-[#374151] text-xl mb-6">Thank you for your interest! We'll be in touch soon.</p>
            <button
              onClick={handleClose}
              className="bg-[#f23665] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#d92d5c] transition duration-300"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-lg">Email *</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:border-[#0055c8]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="companyName" className="block text-gray-700 font-semibold mb-2 text-lg">Company Name</label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:border-[#0055c8]"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="jobTitle" className="block text-gray-700 font-semibold mb-2 text-lg">Job Title</label>
              <select
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:border-[#0055c8]"
              >
                <option value="">Select a job title</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Product Manager">Product Manager</option>
                <option value="CTO">CTO</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {submitStatus === 'error' && (
              <p className="text-red-500 mb-6 text-lg">An error occurred. Please try again.</p>
            )}
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-[#f23665] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#d92d5c] transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="text-gray-600 hover:text-gray-800 text-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}