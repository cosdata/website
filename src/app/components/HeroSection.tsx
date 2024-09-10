import Image from 'next/image';

const HeroSection = () => {
  return (
    <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:justify-between">
        <div className="bg-gray-100 p-5 lg:w-4/12">
          <h1 className="text-[50px] font-[500] leading-[72px] text-[#0055c8] font-[Favorit,sans-serif] mb-6">
            <span className='text-[#f47a96] italic'>Supercharged</span> AI <span className='font-bold text-[#0055c8]'>RAG</span> Data Platform for the Next Generation of Search.
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            Introducing a revolution in digital cell morphology that will transform the way you see, work, and diagnose.
          </p>
          <a href="#" className="inline-block bg-[#e47da0] text-white px-6 py-3 duration-300 hover:bg-[#f47a96]">
            Book a meeting
          </a>
        </div>

        <div className="flex justify-center lg:ml-6 w-full lg:w-8/12">
          <div className="w-full p-0  h-[450px] relative duration-300 hover:scale-110">
            <Image
              src="/svgs/hybrid.drawio.svg"
              alt="Image"
              fill
              className="object-contain" // This replaces the inline objectFit style
            />
            <div className='duration-500 absolute top-0 left-0 w-full h-full z-[1] opacity-100'>
              <div className='absolute top-[23%] left-[8%] w-48 h-8 z-[-1] text-[#646465] text-xl font-semibold  duration-300 hover:top-[20%] cursor-pointer' style={{ transform: 'rotateZ(-29deg) skewX(-30deg)' }}>
                HNSW index
              </div>
              <div className='absolute bottom-[55%] right-[36%] w-48 h-8 z-[-1] text-[#646465] text-xl font-semibold duration-300 hover:bottom-[58%] cursor-pointer' style={{ transform: 'rotateZ(-29deg) skewX(-30deg)' }}>
                Inverted index
              </div>
              <div className='absolute bottom-[28%] right-[15%] w-48 h-8 z-[-1] text-[#646465] text-xl font-semibold duration-300 hover:bottom-[30%] cursor-pointer' style={{ transform: 'rotateZ(-29deg) skewX(-30deg)' }}>
                Knowledge graphs
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
