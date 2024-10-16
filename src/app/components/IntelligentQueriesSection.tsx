import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Afacad } from 'next/font/google';
import { Noto_Sans_Mono } from 'next/font/google';
import { Roboto } from 'next/font/google';


const afacad = Afacad({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const noto_sans_mono = Noto_Sans_Mono({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const lato = Roboto({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap',
});

interface FeatureItem {
    title: string;
    svg: string;
    description: string;
    anchorLink: string;
}

const FeatureCard: React.FC<FeatureItem> = ({ title, svg, description, anchorLink }) => {
    return (
        <div className='flex flex-col justify-between bg-gradient-to-b from-white to-[#f5dede] p-4 sm:p-6 text-[#374151] transition-transform duration-300 hover:-translate-y-5 rounded-lg shadow-md'>
            <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-3 sm:mb-4">
                    <Image src={svg} alt={title} width={45} height={45} className="max-h-[45px] max-w-[45px] hidden sm:block" />
                    <h3 className={`text-xl sm:text-2xl font-bold text-[#0055c8] ${noto_sans_mono.className}`}>{title}</h3>
                </div>
                <p className={`mt-4 mb-10 text-base sm:text-lg md:text-xl ${afacad.className}`}>{description}</p>
            </div>
            <div>
                <Link href={`/blog/introducing-cosdata`} className={`px-3 py-1 sm:px-4 sm:py-2 bg-transparent text-[#3d8bff] border-2 border-[#3d8bff] rounded-md font-semibold sm:text-lg md:text-xl sm:text-base ${afacad.className}`}>Learn More</Link>
            </div>
        </div>
    );
};

const IntelligentQueriesSection: React.FC = () => {
    const items: FeatureItem[] = [
        {
            title: "Intelligent Queries, Accurate Results",
            svg: "/svgs/features/icon(1).drawio.svg",
            description: "Elevate query accuracy with our hybrid search and knowledge graph technology. Seamlessly blend semantic understanding and relational data to deliver precise results for even the most complex inquiries.",
            anchorLink: "#intelligent-queries"
        },
        {
            title: "Lightning-Fast Search at Scale",
            svg: "/svgs/features/icon(0).drawio.svg",
            description: "Experience unparalleled speed with our optimized vectorization and smart quantization techniques. Enjoy rapid indexing and querying that scales effortlessly, regardless of your dataset size or query complexity.",
            anchorLink: "#lightning-fast-search"
        },
        {
            title: "Streamlined Setup, Reduced Costs",
            svg: "/svgs/features/icon(3).drawio.svg",
            description: "Streamline your workflow with intuitive APIs and intelligent auto-configuration. Focus on deriving insights rather than managing setup, while our efficient tools simplify tasks and optimize resource utilization.",
            anchorLink: "#streamlined-setup"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-6 sm:py-8 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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
