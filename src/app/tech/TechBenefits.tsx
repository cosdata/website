import { afacad, commonStyles } from "../styles/common"
import React from 'react'
import Image from 'next/image';

interface Benefit {
    title: string;
    description: string;
    image: string;
    link: string;
}

interface TechBenefitsProps {
    heading: string;
    subHeading: string;
    Benefits: Benefit[];
}

export default function TechBenefits(Props: TechBenefitsProps) {
    const Benefits = Props.Benefits

    return (
        <div className={`${commonStyles.mainContainer} py-[40px] 2xl:py-[80px]`}>
            <h2 className={commonStyles.sectionTitle}>
                {Props.heading}
            </h2>
            <p className={commonStyles.sectionSubtitle}>
                {Props.subHeading}
            </p>

            {Benefits.map((benefit, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center mb-10 md:mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                        <h3 className="text-xl sm:text-3xl font-semibold mb-4 text-[#0055c8]">
                            {benefit.title}
                        </h3>
                        <p className={`${commonStyles.paragraph} mb-6`}>
                            {benefit.description}
                        </p>
                        <a href={benefit.link} className={commonStyles.link}>
                            Learn more
                            <span className="ml-2">→</span>
                        </a>
                    </div>
                    <div className="md:w-1/2 px-4 flex justify-center items-center">
                        <div className="w-64 h-64">
                            <Image
                                src={benefit.image}
                                alt={benefit.title}
                                width={256}
                                height={256}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
} 