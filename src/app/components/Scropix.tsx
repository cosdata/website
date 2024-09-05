import Image from 'next/image';

function ScopioX100() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-[64px] font-[600] leading-[72px] text-[rgb(0,21,55)] font-favorit text-center mb-8">
        Two sizes. Infinite possibilities.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg shadow-md p-6 bg-gray-100">
          <div className="flex justify-center">
            <Image src="https://scopiolabs.com/wp-content/uploads/2022/01/x100ht-hero-shot.jpg" alt="Scopio X100" width={300} height={200} />
          </div>
          <h3 className="text-[48px] font-[600] leading-[54px] text-[rgb(0,21,55)] font-favorit mb-4 text-center">
            Scopio X100
          </h3>
          <p className="text-[20px] font-[400] leading-[30px] text-[rgb(0,21,55)] font-favorit mb-2">
            Discover the first fully digital platform for small and medium labs that truly replaces the manual microscope.
          </p>
          <ul className="list-disc pl-4 mb-4">
            <li className="text-[30px] font-[600] leading-[33.75px] text-[rgb(239,26,169)] font-favorit">3 Slide Tray</li>
            <li className="text-[30px] font-[600] leading-[33.75px] text-[rgb(239,26,169)] font-favorit">15 Slide/H for 200 WBC Diff</li>
          </ul>
          <div className="flex justify-center">
            <button className="border-2 border-[rgb(239,26,169)] text-black font-bold py-2 px-4 rounded duration-300 hover:bg-pink-500">
              Learn about the X100
            </button>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-700">FDA cleared, CE marked</p>
          </div>
        </div>
        <div className="rounded-lg shadow-md p-6 bg-gray-100">
          <div className="flex justify-center">
            <Image src="https://scopiolabs.com/wp-content/uploads/2022/01/x100ht-hero-shot.jpg" alt="Scopio X100HT" width={300} height={200} />
          </div>
          <h3 className="text-[48px] font-[600] leading-[54px] text-[rgb(0,21,55)] font-favorit mb-4 text-center">
            Scopio X100HT
          </h3>
          <p className="text-[20px] font-[400] leading-[30px] text-[rgb(0,21,55)] font-favorit mb-2">
            Ideal for hematology labs with high throughput requirements, Scopio X100HT gives labs reliable and accelerated diagnostic capabilities.
          </p>
          <ul className="list-disc pl-4 mb-4">
            <li className="text-[30px] font-[600] leading-[33.75px] text-[rgb(239,26,169)] font-favorit">30 Slide Loader</li>
            <li className="text-[30px] font-[600] leading-[33.75px] text-[rgb(239,26,169)] font-favorit">40 Slide/H for 200 WBC Diff</li>
          </ul>
          <div className="flex justify-center">
            <button className="border-2 border-[rgb(239,26,169)] text-black font-bold py-2 px-4 rounded duration-300 hover:bg-pink-500">
              Learn about the X100HT
            </button>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-700">FDA cleared, CE marked</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScopioX100;
