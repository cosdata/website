"use client";
import { useState } from 'react';
import Image from 'next/image';

interface Attribute {
    id: number;
    AttributeMain: string;
    AttributePart: string | null;
    AttributeMainCasual: string;
}

interface ChannelVariants {
    id: number;
    Website: string;
    WebsiteShort: string;
    EmailHeadline: string;
    Email: string;
    Banner: string;
}

interface LocalizationData {
    data: any[]; // Adjust this type as needed
}

interface ClaimsData {
    data: any[]; // Adjust this type as needed
}

interface Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    ClaimId: string;
    PromotionalClaim: string;
    Attribute: Attribute;
    Evidence: string | null;
    claims: ClaimsData;
    ChannelVariants: ChannelVariants;
    localizations: LocalizationData;
}

interface BenefitSectionProps {
    claimsData: {
        id: number;
        attributes: Attributes;
    }[];
}

export default function BenefitSection({ claimsData }: BenefitSectionProps) {
    const cardsPerView = 4;

    // Data for the carousel cards
    const carouselItems = [
        {
            title: "Requests per Second",
            description: "Delivers exceptional concurrent requests per second (RPS) under heavy load.",
        },
        {
            title: "Latency",
            description: "Lightning-fast search performance—our vector database is engineered to deliver exceptionally fast query.",
        },
        {
            title: "Indexing",
            description: "Ultra-fast indexing for sparse and dense vectors, optimized for handling high-dimensional data at scale.",
        },
        {
            title: "Resource Utilization",
            description: "Ingenious provably efficient data structures and algorithms ensure outsized performance.",
        },
        {
            title: "Quantization",
            description: "Fine-tune compression with quarter-nary (2-bit) and octal (3-bit) resolutions for better recall trade-offs.",
        },
        {
            title: "Product Quantization",
            description: "Our pioneering approach compresses data more effectively while enhancing recall performance.",
        },
        {
            title: "",
            description: "- Vectorization / SIMD - Buffered memory mapped IO",
        },
        {
            title: "",
            description: "- Lazy loadable cache - Custom file format / serialization",
        },
    ];

    // State for current slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // State for active section
    const [activeSection, setActiveSection] = useState('blazing');

    // State for showing Magic Under the Hood in mobile version
    const [showMagic, setShowMagic] = useState(false);

    // Handler for Blazing-Fast Performance
    const showBlazingPerformance = () => {
        setCurrentIndex(0); // Show first 4 cards
        setActiveSection('blazing'); // Set active section
    };

    // Handler for Magic Under the Hood
    const showMagicUnderTheHood = () => {
        setCurrentIndex(4); // Show next 4 cards
        setActiveSection('magic'); // Set active section
    };

    // Toggle for showing "Magic Under the Hood" section on mobile
    const toggleShowMagic = () => {
        setShowMagic(!showMagic);
    };

    return (
        <div className="bg-transparent mx-auto mt-10">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-center mb-8 text-[#0055c8]">The Fast and Effortless Way to Data</h1>

            {/* Main Container */}
            <div className='hidden lg:flex flex-col items-center w-6xl'>
                {/* Desktop Version */}
                <div className='w-full py-12'>
                    <div className='max-w-6xl mx-auto'>
                        {/* Subheading */}
                        <div className='flex justify-between w-full mb-6 relative'>
                            {activeSection === 'blazing' ? (
                                <>
                                    <h2
                                        className="text-3xl font-semibold text-[#f23665] cursor-pointer"
                                        onClick={showBlazingPerformance}
                                    >
                                        Blazing-Fast Performance, Always
                                    </h2>
                                    <h2
                                        className="text-2xl font-semibold cursor-pointer text-[#3d8bff]"
                                        onClick={showMagicUnderTheHood}
                                    >
                                        <span className='text-[#f23665]'>»</span> Magic Under the Hood
                                    </h2>
                                </>
                            ) : (
                                <>
                                    <h2
                                        className="text-3xl font-semibold text-[#f23665] cursor-pointer"
                                        onClick={showMagicUnderTheHood}
                                    >
                                        Magic Under the Hood
                                    </h2>
                                    <h2
                                        className="text-2xl font-semibold cursor-pointer text-[#3d8bff]"
                                        onClick={showBlazingPerformance}
                                    >
                                        <span className='text-[#f23665]'>»</span> Blazing-Fast Performance, Always
                                    </h2>
                                </>
                            )}
                        </div>

                        {/* Carousel Container */}
                        <div className="overflow-hidden w-full">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{
                                    transform: `translateX(-${(100 / 4) * currentIndex}%)`,
                                }}
                            >
                                {carouselItems.map((item, index) => (
                                    <div key={index} className="min-w-72 p-4">
                                        <div className="p-8 pt-16 w-full max-w-[270px] h-[350px] duration-500 flex flex-col bg-gradient-to-b from-[#ffffff] to-[#f5dede]">
                                            <Image src={`./svgs/features/icon(${index + 1}).drawio.svg`}
                                                alt='svg' height={50} width={50} />
                                            <h3 className="text-lg font-bold mb-6 mt-2 text-[#3d8bff]">{item.title}</h3>
                                            <p className=" text-[#3d8bff]">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile version */}
            <div className='flex lg:hidden flex-col justify-center items-center gap-4 m-2'>
                {/* Blazing-Fast Performance Section */}
                <div className='mb-8 bg-[#f0f2f5] max-w-[400px] p-8'>
                    <h2 className="text-3xl font-bold mb-4 text-[#f23665]">
                        Blazing-Fast Performance, Always
                    </h2>
                    <div className='flex flex-wrap justify-center gap-4'>
                        {carouselItems.slice(0, 4).map((item, index) => (
                            <div
                                key={index}
                                className={`p-4 pt-8 w-96`}
                            >
                                <Image src={`./svgs/features/icon(${index}).drawio.svg`}
                                    alt='svg' width={50} height={50} />
                                {item.title && (
                                    <h3 className="text-xl font-bold my-2 text-[#3d8bff]">
                                        {item.title}
                                    </h3>
                                )}
                                <div className="">
                                    <p className=" my-4 text-[#3d8bff]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Toggle button for Magic Under the Hood */}
                {!showMagic ? (
                    <div className='flex justify-end w-full max-w-[400px]'>
                        <button
                            onClick={toggleShowMagic}
                            className="bg-[#f0f2f5] border-[#f0f2f5] border-2 border-solid duration-100 text-[#0055c8] w-fit p-2"
                        >
                            How do we achieve this?
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className='bg-[#f0f2f5] max-w-[400px] p-8 mb-8'>
                            <h2 className="text-3xl font-bold mb-4 text-[#f23665]">
                                Magic Under the Hood
                            </h2>
                            <div className='flex flex-wrap justify-center gap-4'>
                                {carouselItems.slice(4).map((item, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 pt-8 w-96`}
                                    >
                                        <Image src={`./svgs/features/icon(${index}).drawio.svg`}
                                            alt='svg' width={50} height={50} />
                                        {item.title && (
                                            <h3 className="text-xl font-bold my-2 text-[#3d8bff]">
                                                {item.title}
                                            </h3>
                                        )}
                                        <div className="">
                                            <p className="my-4 text-[#3d8bff]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-end w-full max-w-[400px]'>
                            <button
                                onClick={toggleShowMagic}
                                className="bg-[#f0f2f5] border-[#f0f2f5] border-2 border-solid duration-100 text-[#0055c8] w-fit p-2"
                            >
                                Hide
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
