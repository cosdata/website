import Image from 'next/image';

const HeroSection = () => {
  return (
    <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="bg-gray-100 p-5 lg:w-1/2">
          <h1 className="text-[64px] font-[500] leading-[72px] text-[rgb(0,21,55)] font-[Favorit,sans-serif] mb-6">
            Not just a better view of cells, a bigger vision of the future.
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            Introducing a revolution in digital cell morphology that will transform the way you see, work, and diagnose.
          </p>
          <a href="#" className="inline-block bg-pink-400 text-white px-6 py-3 duration-300 hover:bg-pink-600">
            Book a meeting
          </a>
        </div>

        <div className="flex justify-center md:ml-6 w-full lg:w-1/2">
          <div className="w-full h-[400px] relative">
            <Image
              src="/svgs/hybrid.drawio.svg"
              alt="Image"
              fill
              className="object-contain" // This replaces the inline objectFit style
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
