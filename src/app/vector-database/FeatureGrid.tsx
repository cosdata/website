import { afacad, commonStyles } from "../styles/common";
import React from 'react';
import "../globals.css";

interface Feature {
    title: string;
    description: string;
    link_text: string;
    link: string;
}

interface FeatureProp {
    heading: string;
    subHeading: string;
    Features: Feature[];
}

export default function FeatureGrid(Prop: FeatureProp) {

    const Features = Prop.Features;

    return (
        <div className={`${commonStyles.mainContainer} py-[40px] 2xl:py-[80px]`}>
            <div className={`${commonStyles.sectionTitle}`}>
                {Prop.heading}
            </div>
            <div className={`${commonStyles.sectionSubtitle}`}>
                {Prop.subHeading}
            </div>
            <div className=" flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  max-w-[1200px]">
                    {Features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-between p-6 sm:p-8 text-[#374151] transition-transform rounded-lg shadow-md bg-gray-50 hover:shadow-lg ${(index % 4 === 0 || index % 4 === 3) ? "lg:col-span-2" : "lg:col-span-1"}  row-span-1`}
                        >
                            <div className={`${commonStyles.featureTitle}`}>{feature.title}</div>
                            <div className={`${commonStyles.featureDescription}`}>{feature.description}</div>
                            <div>
                                <a href={feature.link} className={` ${commonStyles.featureLink}`}>{feature.link_text}</a></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
