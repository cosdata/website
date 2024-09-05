import Image from 'next/image';
import { fetchPromotionalClaim } from '../utils/api';

interface ImageSectionProps {
  promotionalClaim: string;
}

export default function ImageSection({ promotionalClaim }: ImageSectionProps) {
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 w-full bg-blue-900 p-8 text-white">
          <h2 className="text-[48px] font-[600] leading-[54px] text-white mb-4">
            {truncateText(promotionalClaim, 5)}
          </h2>
          <p className="text-[20px] font-[300] leading-[30px] text-[#e6e6e6] mb-6">
            {promotionalClaim}
          </p>
          <a 
            href="#" 
            className="inline-block bg-transparent border border-pink-500 text-white px-6 py-3 rounded-md 
                       font-[700] text-[16px] leading-[16px] duration-300 hover:bg-pink-500 hover:text-white"
          >
            Explore More
          </a>
        </div>
        <div className="lg:w-1/2 w-full h-[400px] mb-8 lg:mb-0 lg:mr-8 relative">
          <Image
            src="https://scopiolabs.com/wp-content/uploads/2022/01/x100ht-hero-shot.jpg"
            alt="Full-Field Imaging"
            layout="fill"
            style={{ objectFit: 'cover' }}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}


