"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { commonStyles, afacad, geologica } from '../../../styles/common';

// Placeholder community member data - can be replaced with actual data
const communityMembers = [
  { id: 1, name: 'Member 1', avatar: '/images/community/avatar1.jpg' },
  { id: 2, name: 'Member 2', avatar: '/images/community/avatar2.jpg' },
  { id: 3, name: 'Member 3', avatar: '/images/community/avatar3.jpg' },
  { id: 4, name: 'Member 4', avatar: '/images/community/avatar4.jpg' },
  { id: 5, name: 'Member 5', avatar: '/images/community/avatar5.jpg' },
  { id: 6, name: 'Member 6', avatar: '/images/community/avatar6.jpg' },
  { id: 7, name: 'Member 7', avatar: '/images/community/avatar7.jpg' },
  { id: 8, name: 'Member 8', avatar: '/images/community/avatar8.jpg' },
];

// Generate random delays for each card to create random blinking pattern
const getRandomDelay = () => Math.random() * 3; // Random delay between 0-3 seconds
const getRandomDuration = () => 1.5 + Math.random() * 1; // Random duration between 1.5-2.5 seconds

export default function HeroSection() {
  const [startBlinking, setStartBlinking] = useState(false);

  // Generate random delays and durations once for each card
  const cardAnimations = useMemo(() => 
    communityMembers.map(() => ({
      blinkDelay: getRandomDelay(),
      blinkDuration: getRandomDuration(),
    })), []
  );

  useEffect(() => {
    // Start blinking after initial animations complete (after ~1 second)
    const timer = setTimeout(() => {
      setStartBlinking(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className={`${commonStyles.mainContainer} relative z-10`}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${geologica.className}`}>
              <span className="text-[#0055c8]">Join the Cosdata</span>
              <br />
              <span className="text-[#f23665]">Community</span>
              <span className="text-3xl sm:text-4xl md:text-5xl"> 🚀</span>
            </h1>
            <p className={`${commonStyles.heroSubtitle} mb-8 text-lg sm:text-xl md:text-2xl`}>
              A global community of developers, builders, and AI enthusiasts building the future of intelligent systems with Cosdata OSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="https://discord.gg/QFsrBfFVVY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f23665] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#d92d5c] transition duration-300 text-center font-semibold text-lg"
              >
                Join Discord
              </Link>
              <Link
                href="/students"
                className="inline-block border-2 border-[#0055c8] text-[#0055c8] px-6 py-3 rounded-lg hover:bg-[#0055c8] hover:text-white transition duration-300 text-center font-semibold text-lg"
              >
                Explore Hackathons
              </Link>
            </div>
          </motion.div>

          {/* Right: Community Members Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-4 gap-4 sm:gap-6"
          >
            {communityMembers.map((member, index) => {
              const { blinkDelay, blinkDuration } = cardAnimations[index];
              
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    startBlinking
                      ? {
                          opacity: 1,
                          scale: [0.5, 1.3, 0.9],
                        }
                      : {
                          opacity: 1,
                          scale: 1,
                        }
                  }
                  transition={
                    startBlinking
                      ? {
                          scale: {
                            duration: blinkDuration,
                            delay: blinkDelay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                        }
                      : {
                          duration: 0.4,
                          delay: 0.3 + index * 0.1,
                        }
                  }
                  className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl">
                    {member.name.split(' ')[0][0]}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

