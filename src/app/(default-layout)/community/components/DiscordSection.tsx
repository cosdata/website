"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { commonStyles, afacad, geologica } from '../../../styles/common';

// Placeholder Discord channel screenshots - replace with actual images
const discordScreenshots = [
  { id: 1, channel: '#hackathon', image: '/images/community/discord-hackathon.jpg' },
  { id: 2, channel: '#ai-projects', image: '/images/community/discord-projects.jpg' },
  { id: 3, channel: '#general', image: '/images/community/discord-general.jpg' },
];

export default function DiscordSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % discordScreenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className={`${commonStyles.mainContainer}`}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 ">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl sm:text-[44px] font-bold text-left mb-16 text-[#0055c8] mb-6`}>
              Join Our Discord Server <span className="text-3xl sm:text-4xl">💬</span>
            </h2>
            <p className={`${commonStyles.paragraph} mb-6 text-base sm:text-lg md:text-xl`}>
              Connect with 1000+ developers, share your projects, ask questions, and get feedback directly from the Cosdata team and other contributors.
            </p>
            <Link
              href="https://discord.gg/QFsrBfFVVY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5865F2] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#4752C4] transition duration-300 font-semibold text-lg"
            >
              Join Discord →
            </Link>
          </motion.div>

          {/* Right: Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl border-4 border-gray-200">
              {/* Placeholder for Discord screenshots */}
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">💬</div>
                  <p className="text-xl font-semibold mb-2">{discordScreenshots[currentSlide].channel}</p>
                  <p className="text-sm opacity-90">Discord Community Preview</p>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {discordScreenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-[#5865F2] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

