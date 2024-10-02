import Image from 'next/image';

export default function PrecisionPerformanceSection() {
    const items = [
        {
            title: "Effortless Management",
            points: [
                "RESTful APIs: Easily manage all database functions through intuitive HTTP interfaces for seamless interaction.",
                "Client SDKs: Quickly integrate with your preferred programming language using SDKs available across multiple platforms."
            ],
            image: "/svgs/management.svg"
        },
        {
            title: "Optimized Indexing",
            points: [
                "Dense Vector Index: Achieve high-efficiency indexing using our optimized HNSW algorithm for precise search results.",
                "Sparse Vector Index: Designed for SPLADE-generated sparse vectors, our system outperforms traditional BM25 indices for more accurate indexing."
            ],
            image: "/svgs/indexing.svg"
        },
        {
            title: "Flexible Hyperparameter Control",
            points: [
                "Auto-configuration: Automatically fine-tune system parameters with insights-driven setup for optimal performance without manual effort.",
                "Manual Precision: Gain full control by customizing indexing and querying parameters for specialized use cases and performance needs."
            ],
            image: "/svgs/configure.svg"
        }
    ]

    return (
        <section className="pt-8">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4 text-[#0055c8]">
                    Precision Performance, Effortless Integration
                </h2>
                <p className="text-xl text-center text-gray-600 mb-16">
                    Discover how our intuitive and tailored solutions can enhance your data management experience.
                </p>

                {items.map((item, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center mb-8 md:mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                            <h3 className="text-xl sm:text-3xl font-semibold mb-4 text-[#0055c8]">
                                {item.title}
                            </h3>
                            {item.points.map((point, pointIndex) => {
                                const [boldText, ...rest] = point.split(':');
                                return (
                                    <p key={pointIndex} className="text-gray-600 mb-2">
                                        <span className="font-bold">{boldText}:</span>
                                        <span>{rest.join(':')}</span>
                                    </p>
                                );
                            })}
                            <a href="#" className="text-blue-600 font-semibold hover:underline mt-4 inline-block">Learn more -&gt;</a>
                        </div>
                        <div className="md:w-1/2 px-4 flex justify-center items-center">
                            <div className="w-64 h-64">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={256}
                                    height={256}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}