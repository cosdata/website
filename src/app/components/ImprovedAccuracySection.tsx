import React from 'react';
import Image from 'next/image';

interface FeatureItem {
    title: string;
    svg: string;
    description: string;
}

const FeatureCard: React.FC<FeatureItem> = ({ title, svg, description }) => {
    return (
        <div className='flex flex-col justify-between bg-gradient-to-b from-white to-[#f5dede] p-6  text-[#3d8bff] transition-transform duration-300 hover:-translate-y-5'>
            <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                    <Image src={svg} alt={title} width={50} height={50} />
                    <h3 className="text-2xl font-bold text-[#0055c8]">{title}</h3>
                </div>
                <p className='mb-5'>{description}</p>
            </div>
            <div>
                <button className=' underline'>Learn More</button>
            </div>
        </div>
    );
};

const ImprovedAccuracySection: React.FC = () => {
    const items: FeatureItem[] = [
        {
            title: "Boost accuracy for smarter choices",
            svg: "/svgs/features/icon(1).drawio.svg",
            description: "Hybrid search and knowledge graphs combine precision and context for accurate complex queries. Find exactly what you need, using semantic and relational data to improve outcomes."
        },
        {
            title: "Swift, scalable performance",
            svg: "/svgs/features/icon(2).drawio.svg",
            description: "Optimized vectorization and smart quantization enable rapid indexing and querying as data volume grows. Experience swift responses regardless of dataset size or query complexity."
        },
        {
            title: "Streamline: save time and money",
            svg: "/svgs/features/icon(3).drawio.svg",
            description: "Intuitive APIs and auto-configuration streamline data management. Focus on insights, not setup. Simplify tasks and cut costs with efficient tools."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <FeatureCard
                        key={index}
                        title={item.title}
                        svg={item.svg}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImprovedAccuracySection;
