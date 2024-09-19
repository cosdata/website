import Image from 'next/image';
export default function IntuitiveTailoredSection() {
    const items = [
        {
            title: "Effortless Management",
            points: [
                "RESTful APIs: Manage all database functions effortlessly with intuitive HTTP interfaces.",
                "Client SDKs: Access the database easily with SDKs available in multiple programming languages."
            ]
        },
        {
            title: "Optimized Indexing",
            points: [
                "Dense Vector Index: Efficient and precise indexing with optimized HNSW algorithm.",
                "Sparse Vector Index: Expertly designed for SPLADE-generated sparse vectors, outperforming BM25 indices."
            ]
        },
        {
            title: "Flexible Hyperparameter Control",
            points: [
                "Auto-configuration: Insights-driven setup automatically fine-tunes the system for best results.",
                "Manual Precision: Precisely control indexing and querying parameters for custom setups."
            ]
        }
    ]
    return (
        <div className="bg-[#f2f6fc] p-6">
            <div className="flex flex-col max-w-6xl mx-auto">
                <div className="text-[#0055c8] text-4xl font-semibold flex justify-center mb-6">
                    Intuitive and Tailored to Your Needs
                </div>
                <div className="flex flex-col">
                    {items.map((item, index) => (
                        <div>
                            <div className="flex flex-col lg:flex-row gap-2 items-center justify-between space-y-4 my-6 mb-8" key={index}>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={`/svgs/features/icon(${index + 1}).drawio.svg`}
                                        alt="svg"
                                        width={50}
                                        height={50} />
                                    <h1 className="text-3xl font-semibold text-[#f23665] w-fit">
                                        {item.title}
                                    </h1>

                                </div>
                                <div className="lg:w-[600px] w-full">
                                    {item.points.map((point, index) => (
                                        <div className="text-[#3d8bff] my-1 flex gap-2" key={index}>
                                            <span className=''>{'\u2022'}</span>{point}
                                        </div>
                                    ))}
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