import Image from 'next/image';

interface Attribute {
  id: number;
  AttributeMain: string;
  AttributePart: string | null;
}

interface ChannelVariants {
  id: number;
  Website: string;
  WebsiteShort: string;
  EmailHeadline: string;
  Email: string;
  Banner: string;
}

interface LocalizationData {
  data: any[]; // Adjust this type as needed
}

interface ClaimsData {
  data: any[]; // Adjust this type as needed
}

interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  ClaimId: string;
  PromotionalClaim: string;
  Attribute: Attribute;
  Evidence: string | null;
  claims: ClaimsData;
  ChannelVariants: ChannelVariants;
  localizations: LocalizationData;
}

interface FeatureSectionProps {
  claimsData: {
    id: number;
    attributes: Attributes;
  }[];
}

export default function FeaturesSection({ claimsData }: FeatureSectionProps) {
  const claimsrow1 = claimsData.slice(0, 3);
  const claimsrow2 = claimsData.slice(3, 6);
  const claimsrow3 = claimsData.slice(6, 9);
  const claimsrow4 = claimsData.slice(9, 12);
  
  return (
    <section className="bg-white py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-around gap-8 mb-8 ">
          {claimsrow1.map((claim) => (
            <div key={claim.id} className="bg-gray-600 flex flex-col text-white p-8 pt-12 h-[350px] w-[350px]  items-center relative">
              <Image
                className=" absolute top-[-20px] left-[-20px]"
                src={`/svgs/icon${claim.id}.drawio.svg`}
                alt="Logo"
                width={80}
                height={80}
                />
              <h1 className="text-[20px] font-[600] leading-[30px] font-[Favorit, sans-serif] mb-12 inline">
                {claim.attributes.ChannelVariants.Website}
              </h1>
              {/* <p className="text-[18px] font-[400] leading-[20px] text-gray-200 font-[Favorit, sans-serif]">
                {claim.attributes.ChannelVariants.Website}
              </p> */}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-around gap-8 mb-8">
          {claimsrow2.map((claim) => (
            <div key={claim.id} className="bg-gray-200 flex flex-col text-gray-800 p-8 pt-12 h-[350px] w-[350px]  items-center relative">
            <Image
              className=" absolute top-[-20px] left-[-20px]"
              src={`/svgs/icon${claim.id}.drawio.svg`}
              alt="Logo"
              width={80}
              height={80}
              />
            <h1 className="text-[20px] font-[600] leading-[30px] font-[Favorit, sans-serif] mb-12 inline">
              {claim.attributes.ChannelVariants.Website}
            </h1>
            {/* <p className="text-[18px] font-[400] leading-[20px] text-gray-200 font-[Favorit, sans-serif]">
              {claim.attributes.ChannelVariants.Website}
            </p> */}
          </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-around gap-8 mb-8 ">
          {claimsrow3.map((claim) => (
              <div key={claim.id} className="bg-gray-600 flex flex-col text-white p-8 pt-12 h-[350px] w-[350px]  items-center relative">
              <Image
                className=" absolute top-[-20px] left-[-20px]"
                src={`/svgs/icon${claim.id}.drawio.svg`}
                alt="Logo"
                width={80}
                height={80}
                />
              <h1 className="text-[20px] font-[600] leading-[30px] font-[Favorit, sans-serif] mb-12 inline">
                {claim.attributes.ChannelVariants.Website}
              </h1>
              {/* <p className="text-[18px] font-[400] leading-[20px] text-gray-200 font-[Favorit, sans-serif]">
                {claim.attributes.ChannelVariants.Website}
              </p> */}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-around gap-8 mb-8">
          {claimsrow4.map((claim) => (
                        <div key={claim.id} className="bg-gray-200 flex flex-col text-gray-800 p-8 pt-12 h-[350px] w-[350px]  items-center relative">
                        <Image
                          className=" absolute top-[-20px] left-[-20px]"
                          src={`/svgs/icon${claim.id}.drawio.svg`}
                          alt="Logo"
                          width={80}
                          height={80}
                          />
                        <h1 className="text-[20px] font-[600] leading-[30px] font-[Favorit, sans-serif] mb-12 inline">
                          {claim.attributes.ChannelVariants.Website}
                        </h1>
                        {/* <p className="text-[18px] font-[400] leading-[20px] text-gray-200 font-[Favorit, sans-serif]">
                          {claim.attributes.ChannelVariants.Website}
                        </p> */}
                      </div>
          ))}
        </div>
      </div>
    </section>
  );
}