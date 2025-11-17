"use client";

import { motion } from 'framer-motion';
import { commonStyles, afacad, geologica } from '../../../styles/common';

// Placeholder member data - can be replaced with actual data from API or JSON
const featuredMembers = [
  { id: 1, name: 'Alex Chen', role: 'AI Engineer', avatar: '/images/community/member1.jpg', github: 'https://github.com/alexchen' },
  { id: 2, name: 'Sarah Johnson', role: 'Open Source Contributor', avatar: '/images/community/member2.jpg', github: 'https://github.com/sarahj' },
  { id: 3, name: 'Michael Park', role: 'ML Researcher', avatar: '/images/community/member3.jpg', github: 'https://github.com/mpark' },
  { id: 4, name: 'Emily Davis', role: 'Full Stack Developer', avatar: '/images/community/member4.jpg', github: 'https://github.com/emilyd' },
  { id: 5, name: 'David Kim', role: 'Data Scientist', avatar: '/images/community/member5.jpg', github: 'https://github.com/davidk' },
  { id: 6, name: 'Lisa Wang', role: 'DevOps Engineer', avatar: '/images/community/member6.jpg', github: 'https://github.com/lisaw' },
  { id: 7, name: 'James Brown', role: 'AI Architect', avatar: '/images/community/member7.jpg', github: 'https://github.com/jamesb' },
  { id: 8, name: 'Maria Garcia', role: 'Software Engineer', avatar: '/images/community/member8.jpg', github: 'https://github.com/mariag' },
];

export default function FeaturedMembersSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className={`${commonStyles.mainContainer}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className={`${commonStyles.sectionTitle} mb-4`}>
            Meet Our Builders <span className="text-3xl sm:text-4xl">✨</span>
          </h2>
          <p className={`${commonStyles.sectionSubtitle} text-base sm:text-lg md:text-xl`}>
            Highlighting a few members from our growing global developer community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-pink-400 flex items-center justify-center text-white font-bold text-2xl sm:text-3xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3 className={`text-base sm:text-lg font-semibold text-[#0055c8] mb-1 ${geologica.className}`}>
                {member.name}
              </h3>
              <p className={`text-sm sm:text-base text-[#374151] mb-2 ${afacad.className}`}>
                {member.role}
              </p>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#f23665] hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

