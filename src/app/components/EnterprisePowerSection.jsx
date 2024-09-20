import Image from 'next/image';
export default function EnterprisePowerSection() {
    const items = [
        {
            title: "Ready to Grow with You",
            points: [
                "Near-linear scalability for predictable, efficient query performance.",
                "Unbounded scalability for consistent high-speed results with massive datasets.",
                "Engineered to maintain fast performance as your data expands."
            ]
        },
        {
            title: "Built for Serious Business",
            points: [
                "Reliable data security against unauthorized access and threats.",
                "Enterprise-grade privacy with robust data isolation.",
                "Fault-tolerant design with backup and recovery for consistent performance."
            ]
        },
        {
            title: "Data Time Machine",
            points: [
                "Git-style versioning for your datasets.",
                "Audit changes and track data lineage.",
                "Time-travel to any previous state.",
                "Easily revert or branch your data."
            ]
        }
    ]
    return (
        <div className="max-w-6xl md:mx-auto mx-5 p-6">
            <div className='relative w-full h-[600px]'>
                <Image
                    src={"/svgs/lines.svg"}
                    fill />
            </div>
            <div className="text-[#0055c8] text-3xl font-semibold flex justify-center mb-6  mt-20">
                Enterprise Power: Infinite Scale, Ironclad Security, Instant Rewind
            </div>
            <div className="flex flex-col">
                {items.map((item, index) => (
                    <div>
                        <div className="flex flex-col lg:flex-row gap-2 items-center justify-between space-y-4 my-6 mb-8" key={index}>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={`/svgs/features/icon(${index + 1}).drawio.svg`}
                                    alt="svg"
                                    width={50}
                                    height={50} />
                                <h1 className="text-3xl font-semibold text-[#f23665]">
                                    {item.title}
                                </h1>

                            </div>
                            <div className="lg:w-[600px] w-full">
                                {item.points.map((point, index) => (
                                    <div className="text-[#3d8bff] my-1 flex gap-2" key={index}>
                                        <span>{'\u2022'}</span>{point}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`w-full h-[2px] bg-[#f0f2f5] mt-4 ${index === items.length - 1 ? 'hidden' : ''}`}>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}