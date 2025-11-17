"use client";

import { motion } from 'framer-motion';
import { commonStyles, afacad, geologica } from '../../../styles/common';

const benefits = [
  {
    icon: '🏆',
    title: 'Participate in Hackathons',
    description: 'Join exclusive hackathons hosted by Cosdata. Build real-world AI applications, win prizes, and get noticed by top companies.',
  },
  {
    icon: '📅',
    title: 'Attend Events & Workshops',
    description: 'Learn directly from experts through online sessions, community meetups, and live technical discussions.',
  },
  {
    icon: '👥',
    title: 'Connect & Grow',
    description: 'Be part of a thriving builder community. Collaborate, share ideas, and grow your technical network with developers worldwide.',
  },
  {
    icon: '💻',
    title: 'Build with Cosdata OSS',
    description: 'Contribute to open-source projects, get certified, and showcase your work to a global audience.',
  },
];

export default function WhyJoinSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className={`${commonStyles.mainContainer}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className={`${commonStyles.sectionTitle} mb-4`}>
            Why Join the Cosdata Community?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="text-5xl sm:text-6xl mb-4">{benefit.icon}</div>
              <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] mb-4 ${geologica.className}`}>
                {benefit.title}
              </h3>
              <p className={`text-base sm:text-lg text-[#374151] ${afacad.className}`}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

