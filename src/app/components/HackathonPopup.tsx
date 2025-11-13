"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { commonStyles, afacad, geologica } from '../styles/common';

const STORAGE_KEY = 'cosdata_hackathon_popup_dismissed';
const STORAGE_DURATION = 1 * 24 * 60 * 60 * 1000; // 1 day in milliseconds
const DELAY_TIME = 5000; // 5 seconds

export default function HackathonPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if popup was dismissed within the last 3 days
    const dismissedTime = localStorage.getItem(STORAGE_KEY);
    if (dismissedTime) {
      const timeDiff = Date.now() - parseInt(dismissedTime);
      if (timeDiff < STORAGE_DURATION) {
        return; // Don't show popup if dismissed within 3 days
      }
    }

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, DELAY_TIME);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Store dismissal time in localStorage
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100] p-4 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full relative my-auto"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
          aria-label="Close popup"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header with Logo */}
        <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-gray-200">
          {/*
          <div className="w-12 h-12 relative flex-shrink-0">
            <Image
              src="/svgs/logo.svg"
              alt="Cosdata Logo"
              fill
              className="object-contain"
            />
          </div>
          */}
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#0055c8] ${geologica.className}`}>
            🎉 Join the Cosdata Hackathon 2025!
          </h2>
        </div>

        {/* Content */}
        <div className={`px-6 py-6 ${afacad.className}`}>
          {/* Subtext */}
          <p className={`text-base sm:text-lg text-[#374151] mb-6 leading-relaxed`}>
            Build AI-native projects using Cosdata OSS and win prizes worth <span className="font-semibold text-[#f23665]">₹35,000</span>!
            <br />
            Get a chance to land paid internships (up to ₹25,000 stipend) and showcase your project to the community.
          </p>

          {/* Details Section */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-xl">🗓️</span>
              <div>
                <p className={`text-base sm:text-lg font-semibold text-[#0055c8] mb-1`}>Dates:</p>
                <p className={`text-base sm:text-lg text-[#374151]`}>November 15 – 20, 2025</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl">💡</span>
              <div>
                <p className={`text-base sm:text-lg font-semibold text-[#0055c8] mb-2`}>What You Can Build:</p>
                <p className={`text-base sm:text-lg text-[#374151]`}>
                  Semantic Search Tools | AI Agents | Chatbots | RAG Systems | Recommenders
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons Section */}
          <div className="space-y-4 mb-6">
            {/* Primary CTA */}
            <a
              href="https://forms.gle/7gmADB3zmhn5WZMe8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#f23665] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#d92d5c] transition duration-300 text-base sm:text-lg"
            >
              → Register Now
            </a>

            {/* Secondary CTA */}
            <a
              href="https://discord.gg/QFsrBfFVVY"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border-2 border-[#0055c8] text-[#0055c8] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#0055c8] hover:text-white transition duration-300 text-base sm:text-lg"
            >
              → Join Discord
            </a>

            {/* Tertiary Link */}
            <div className="text-center pt-2">
              <a
                href="https://github.com/cosdata/cosdata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#374151] hover:text-[#0055c8] transition-colors"
              >
                ⭐ Don&apos;t forget to star our GitHub repo
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              Hosted by Cosdata 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

