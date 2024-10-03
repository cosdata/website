'use client'

import { motion } from 'framer-motion'

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
    <div className="relative h-80 overflow-hidden mb-12">
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-[#f23665] text-[40px] sm:text-[56px] md:text-[72px] font-bold">Cosdata Blog</div>
      </div>
    </div>
  )
}

export default CoverImage;