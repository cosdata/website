import { afacad, commonStyles } from '@/app/styles/common';

interface TechHeroSectionProps {
    heading: string;
    subHeading: string;
    buttonText1: string;
    buttonLink1: string;
}

export default function TechHeroSection({
    heading,
    subHeading,
    buttonText1,
    buttonLink1,
}: TechHeroSectionProps) {
    return (
        <div className={`py-24 ${commonStyles.mainContainer} flex flex-col items-center`}>
            <div className={`${afacad.className} ${commonStyles.heroTitle} font-bold text-center mb-8`}>
                {heading}
            </div>
            <div className={`${afacad.className} ${commonStyles.heroSubtitle} mt-2 text-center max-w-[1000px]`}>
                {subHeading}
            </div>

            <div className='mt-8'>
                <a
                    href={buttonLink1}
                    className={`${commonStyles.button} bg-[#f23665] text-white hover:bg-[#d92d5c] cursor-pointer text-[18px]`}
                >
                    {buttonText1}
                </a>
            </div>
        </div>
    );
} 