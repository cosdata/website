'use client'

import { motion } from 'framer-motion'
import { commonStyles } from '../styles/common';

const Particle = ({ index }: { index: number }) => {
  const randomX = Math.random() * 100
  const randomY = Math.random() * 100
  const randomDelay = Math.random() * 5

  return (
    <motion.div
      key={`particle-${index}`}
      className="absolute w-2 h-2 bg-white rounded-full opacity-50"
      style={{ left: `${randomX}%`, top: `${randomY}%` }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay: randomDelay,
      }}
    />
  )
}

const CoverImage = () => {
  return (
    <section className="pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-12 sm:pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden text-white mb-8">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10`}>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold text-[#f23665] leading-tight mb-4">
            Cosdata Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Insights and updates from the Cosdata team
          </p>
        </div>
      </div>
    </section>
  );
}

export default CoverImage;