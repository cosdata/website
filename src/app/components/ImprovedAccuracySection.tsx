import React from 'react';
import Image from 'next/image';

interface FeatureItem {
    title: string;
    svg: string;
    description: string;
}

const FeatureCard: React.FC<FeatureItem> = ({ title, svg, description }) => {
    return (
        <div className='flex flex-col justify-between bg-gradient-to-b from-white to-[#f5dede] p-6 text-[#3d8bff] transition-transform duration-300 hover:-translate-y-5 rounded-lg shadow-md'>
            <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                    <Image src={svg} alt={title} width={50} height={50} />
                    <h3 className="text-2xl font-bold text-[#0055c8]">{title}</h3>
                </div>
                <p className='mb-5'>{description}</p>
            </div>
            <div>
                <button className='px-4 py-2 bg-[#3d8bff] text-white rounded-md hover:bg-[#0055c8] transition-colors duration-300'>Learn More</button>
            </div>
        </div>
    );
};

const ImprovedAccuracySection: React.FC = () => {
    const items: FeatureItem[] = [
        {
            title: "Intelligent Queries, Accurate Results",
            svg: "/svgs/features/icon(1).drawio.svg",
            description: "Elevate query accuracy with our hybrid search and knowledge graph technology. Seamlessly blend semantic understanding and relational data to deliver precise results for even the most complex inquiries."
        },
        {
            title: "Lightning-Fast Search at Scale",
            svg: "/svgs/features/icon(2).drawio.svg",
            description: "Experience unparalleled speed with our optimized vectorization and smart quantization techniques. Enjoy rapid indexing and querying that scales effortlessly, regardless of your dataset size or query complexity."
        },
        {
            title: "Streamlined Setup, Reduced Costs",
            svg: "/svgs/features/icon(3).drawio.svg",
            description: "Streamline your workflow with intuitive APIs and intelligent auto-configuration. Focus on deriving insights rather than managing setup, while our efficient tools simplify tasks and optimize resource utilization."
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
