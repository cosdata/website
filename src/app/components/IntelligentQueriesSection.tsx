import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { commonStyles } from '../styles/common';

interface FeatureItem {
    title: string;
    svg: string;
    description: string;
    anchorLink: string;
}

const FeatureCard: React.FC<FeatureItem> = ({ title, svg, description, anchorLink }) => {
    return (
        <div className={commonStyles.featureCard}>
            <div className="flex flex-col items-left">
            <div className="w-14 h-14 mb-4 relative">
                    <Image 
                        src={svg} 
                        alt={title} 
                        fill 
                        className="object-contain"
                    />
                </div>                
                <h3 className={commonStyles.featureTitle}>{title}</h3>
                <p className={commonStyles.featureDescription}>{description}</p>
            </div>
            <div className="text-left">
                <Link href={`/blog/introducing-cosdata`} className={commonStyles.featureLink}>
                    Learn More
                    <span className="ml-2">→</span>
                </Link>
            </div>
        </div>
    );
};

const IntelligentQueriesSection: React.FC = () => {
    const items: FeatureItem[] = [
        {
            title: "Intelligent Queries, Accurate Results",
            svg: "/svgs/features/icon(1).drawio.svg",
            description: "Elevate query accuracy with hybrid search and knowledge graph technology.",
            anchorLink: "#intelligent-queries"
        },
        {
            title: "Lightning-Fast Search at Scale",
            svg: "/svgs/features/icon(0).drawio.svg",
            description: "Experience unparalleled speed with optimized vectorization techniques.",
            anchorLink: "#lightning-fast-search"
        },
        {
            title: "Streamlined Setup, Reduced Costs",
            svg: "/svgs/features/icon(3).drawio.svg",
            description: "Simplify workflow with intuitive APIs and intelligent auto-configuration.",
            anchorLink: "#streamlined-setup"
        }
    ];

    return (
        <div className={commonStyles.mainContainer}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-12">
                {items.map((item, index) => (
                    <FeatureCard
                        key={index}
                        title={item.title}
                        svg={item.svg}
                        description={item.description}
                        anchorLink={item.anchorLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default IntelligentQueriesSection;
