import Image from 'next/image';
import Link from 'next/link';

export default function VideoSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8">New and Noteworthy</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gray-100  overflow-hidden">
          <div className="relative w-full h-[300px]">
            <Image
              src="https://scopiolabs.com/wp-content/uploads/2022/01/x100ht-hero-shot.jpg"
              alt="Press Release"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4 flex flex-col min-h-44 justify-between">
            {/* <h2 className="text-xl font-semibold mb-2 text-gray-900">Press Release</h2> */}
            <p className="text-gray-700 mb-4">Scopio Labs Receives Groundbreaking FDLink Clearance for First-Ever Digital Bone Marrow Aspirate Application</p>
            <Link href="#" className="text-pink-500 font-semibold duration-300 hover:text-black">Read More</Link>
          </div>
        </div>
      
        <div className="bg-gray-100  overflow-hidden">
          <div className="relative w-full h-[300px]">
            <Image
              src="https://scopiolabs.com/wp-content/uploads/2022/01/x100ht-hero-shot.jpg"
              alt="AI in Healthcare"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4 flex flex-col min-h-44 justify-between">
            <p className="text-gray-700 mb-4">Nine revolutionary ways AI is advancing healthcare</p>

          <Link href="#" className="text-pink-500 font-semibold duration-300 hover:text-black">Read More</Link>
          </div>
        </div>
      
        <div className="bg-gray-100  overflow-hidden">
          <div className="relative w-full h-[300px]">
            <Image
              src="https://scopiolabs.com/wp-content/uploads/2022/01/x100ht-hero-shot.jpg"
              alt="Digital Morphology"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4 flex flex-col min-h-44 justify-between">
            <p className="text-gray-700 mb-4">Can Labs Go Remote? They Can With Digital Morphology</p>
            <Link href="#" className="text-pink-500 font-semibold duration-300 hover:text-black ">Read More</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
