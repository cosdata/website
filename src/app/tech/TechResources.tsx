import { commonStyles } from "../styles/common";
import Image from "next/image"
import React from 'react'

interface Resource {
    title: string;
    description: string;
    link_text: string;
    link: string;
    svg: string;
    disabled?: boolean;
}

interface ResourceProp {
    heading: string;
    subHeading: string;
    Resources: Resource[];
}

export default function TechResources(Prop: ResourceProp) {
    const Resources = Prop.Resources;

    return (
        <div className={`${commonStyles.mainContainer} py-[40px] 2xl:py-[80px]`}>
            <div className={`${commonStyles.sectionTitle}`}>{Prop.heading}</div>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Resources.map((Resource, index) => (
                    <div key={index} className={`${commonStyles.featureCard}`}>
                        <Image src={Resource.svg} alt={Resource.title} width={40} height={40} className="my-5" />
                        <div className={`${commonStyles.featureTitle}`}>{Resource.title}</div>
                        <div className={`${commonStyles.featureDescription}`}>{Resource.description}</div>
                        <div>
                            {Resource.disabled ? (
                                <span className={`${commonStyles.featureLink} opacity-50 cursor-not-allowed`}>
                                    {Resource.link_text}
                                </span>
                            ) : (
                                <a 
                                    href={Resource.link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${commonStyles.featureLink} cursor-pointer`}
                                >
                                    {Resource.link_text}<span className="ml-2">→</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 