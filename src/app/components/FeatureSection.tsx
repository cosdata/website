import Image from 'next/image';
interface FeatureSectionProps {
  featureClaim: {
    WebsiteShort: string,
    Website: string
  }
}

export default function FeaturesSection({ featureClaim }: FeatureSectionProps) {
  
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-[32px] font-[600] leading-[36px] text-[#001439] font-[Favorit, sans-serif] mb-4">
              {/* Zoom in. Zoom out. Pan left and right. */}
              {featureClaim?.WebsiteShort}
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#001439] font-[Favorit, sans-serif]">
              {/* Quickly and easily navigate all relevant areas of the scan. Scopio’s revolutionary digital imaging harnesses novel computational photography to capture the full field at 100X resolution without sacrificing anything. */}
            {featureClaim?.Website}
            
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-[32px] font-[600] leading-[36px] text-[#001439] font-[Favorit, sans-serif] mb-4">
              
              {featureClaim?.WebsiteShort}
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#001439] font-[Favorit, sans-serif]">
            {featureClaim?.Website}

            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-[32px] font-[600] leading-[36px] text-[#001439] font-[Favorit, sans-serif] mb-4">
              {/* Remote connectivity through your secure hospital network. */}
           
              {featureClaim?.WebsiteShort}
           
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#001439] font-[Favorit, sans-serif]">
              {/* Review, collaborate or consult as if the entire team is in the lab. Scopio provides offsite colleagues, hematopathologists and lab professionals secure access through their hospital’s network to the <span className="text-pink-500">full-field image</span> and AI results. */}
            
              {featureClaim?.Website}
            
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
