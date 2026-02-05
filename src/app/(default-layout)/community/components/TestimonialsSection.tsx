"use client";

import { motion } from 'framer-motion';
import { commonStyles, afacad, geologica } from '../../../styles/common';

const testimonials = [
  {
    id: 1,
    quote: "Contributing to Cosdata helped me understand how real-world vector systems work — and it landed me my first internship!",
    author: "Riya",
    role: "Student Developer",
    avatar: "/images/community/testimonial1.jpg",
  },
  {
    id: 2,
    quote: "The Cosdata community is full of energy! I learned more here in a month than in my entire semester.",
    author: "Aman",
    role: "AI Engineer",
    avatar: "/images/community/testimonial2.jpg",
  },
  {
    id: 3,
    quote: "Building with Cosdata OSS opened doors I never expected. The community support is incredible!",
    author: "Priya",
    role: "Open Source Contributor",
    avatar: "/images/community/testimonial3.jpg",
  },
];

export default function TestimonialsSection() {
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
            What Our Builders Say <span className="text-3xl sm:text-4xl">💬</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-pink-50 p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#f23665] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className={`${commonStyles.paragraph} mb-6 text-base sm:text-lg italic`}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className={`font-semibold text-[#0055c8] ${geologica.className}`}>
                    {testimonial.author}
                  </p>
                  <p className={`text-sm text-[#374151] ${afacad.className}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

