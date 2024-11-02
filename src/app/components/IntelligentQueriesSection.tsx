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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {items.slice(0, 2).map((item, index) => (
                    <FeatureCard
                        key={index}
                        title={item.title}
                        svg={item.svg}
                        description={item.description}
                        anchorLink={item.anchorLink}
                    />
                ))}
                {/* Move the third element to the next row on medium screens */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-1 justify-self-center">
                    <FeatureCard
                        title={items[2].title}
                        svg={items[2].svg}
                        description={items[2].description}
                        anchorLink={items[2].anchorLink}
                    />
                </div>
            </div>
        </div>
    );
};

export default IntelligentQueriesSection;
