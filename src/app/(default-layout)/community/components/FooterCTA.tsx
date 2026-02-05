"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { commonStyles, afacad, geologica } from '../../../styles/common';

export default function FooterCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0055c8] via-blue-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-300 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className={`${commonStyles.mainContainer} relative z-10 text-center`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${geologica.className}`}>
            Ready to Build with Us? <span className="text-3xl sm:text-4xl md:text-5xl">🚀</span>
          </h2>
          <p className={`${commonStyles.paragraph} mb-8 text-white text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto`}>
            Join a global network of AI builders and open-source developers shaping the future of intelligent systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://discord.gg/QFsrBfFVVY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#0055c8] px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 font-semibold text-lg"
            >
              Join Discord
            </Link>
            <Link
              href="https://github.com/cosdata/cosdata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0055c8] transition duration-300 font-semibold text-lg"
            >
              Star on GitHub
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

