import { afacad, commonStyles } from '@/app/styles/common';

interface HeroSectionProps {
    heading: string;
    subHeading: string;
    buttonText1: string;
    buttonLink1: string;
    buttonText2: string;
    buttonLink2: string;
}

export default function HeroSection({
    heading,
    subHeading,
    buttonText1,
    buttonLink1,
    buttonText2,
    buttonLink2
}: HeroSectionProps) {
    return (
        <div className={`py-24 ${commonStyles.mainContainer} flex flex-col items-center`}>
            {/* Heading */}
            <div className={`${afacad.className} ${commonStyles.heroTitle} font-bold`}>
                {heading}
            </div>
            {/* Subheading */}
            <div className={`${afacad.className} ${commonStyles.heroSubtitle} text-center`}>
                {subHeading}
            </div>

            {/* Button Section */}
            <div className='flex gap-4 flex-wrap justify-center mt-4'>
                <a
                    href={buttonLink1}
                    className={`${commonStyles.button} bg-[#f23665] text-white hover:bg-[#d92d5c] cursor-pointer`}
                >
                    {buttonText1}
                </a>
                <a
                    href={buttonLink2}
                    className={`${commonStyles.button} bg-black text-white hover:bg-gray-800 cursor-pointer`}
                >
                    {buttonText2}
                </a>
            </div>
        </div>
    );
}
