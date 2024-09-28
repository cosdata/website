import Image from 'next/image';
export default function IntuitiveTailoredSection() {
    const items = [
        {
            title: "Effortless Management",
            points: [
                "RESTful APIs: Easily manage all database functions through intuitive HTTP interfaces for seamless interaction.",
                "Client SDKs: Quickly integrate with your preferred programming language using SDKs available across multiple platforms."
            ]
        },
        {
            title: "Optimized Indexing",
            points: [
                "Dense Vector Index: Achieve high-efficiency indexing using our optimized HNSW algorithm for precise search results.",
                "Sparse Vector Index: Designed for SPLADE-generated sparse vectors, our system outperforms traditional BM25 indices for more accurate indexing."
            ]
        },
        {
            title: "Flexible Hyperparameter Control",
            points: [
                "Auto-configuration: Automatically fine-tune system parameters with insights-driven setup for optimal performance without manual effort.",
                "Manual Precision: Gain full control by customizing indexing and querying parameters for specialized use cases and performance needs."
            ]
        }
    ]
    return (
        <div className="bg-[#e5f4ff] p-6">
            <div className="flex flex-col max-w-6xl mx-auto">
                <div className="text-[#0055c8] text-4xl font-semibold flex justify-center my-6 text-center">
                    Precision Performance, Effortless Integration
                </div>
                <div className="flex flex-col">
                    {items.map((item, index) => (
                        <div>
                            <div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between space-y-4 my-6 mb-8" key={index}>
                                <div className="flex gap-4">
                                    {/* <Image
                                        src={`/svgs/features/icon(${index + 1}).drawio.svg`}
                                        alt="svg"
                                        width={50}
                                        height={50} /> */}
                                    <h1 className="text-3xl font-semibold text-[#f23665] ">
                                        {item.title}
                                    </h1>
                                </div>
                                <div className="lg:w-[600px] lg:min-w-[600px] w-full">
                                    {item.points.map((point, index) => {
                                        const [boldText, ...rest] = point.split(':');
                                        return (
                                            <div className=" text-[#374151] my-2" key={index}>
                                                <span className="font-bold">{boldText}:</span>
                                                <span>{rest.join(':')}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className={`w-full h-[2px] bg-[#ffffff] mt-4 ${index === items.length - 1 ? 'hidden' : ''}`}>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}