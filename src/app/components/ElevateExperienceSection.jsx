import Image from 'next/image';

export default function ElevateExperienceSection() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-1 p-6">
                <div className="lg:w-1/2">
                    <h1 className="text-[#0055c8] text-3xl font-bold mb-4">
                        Elevate Your Search Experience
                    </h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#3d8bff] leading-relaxed">
                            <span className="text-[#f23665] font-semibold">Hybrid Search:</span> Fuse sparse and dense vector searches for unparalleled precision. Our vector database combines traditional keyword matching with AI-driven semantic understanding.
                        </p>
                        <p className="text-[#3d8bff] leading-relaxed">
                            <span className="text-[#f23665] font-semibold">Knowledge-Graph Integration:</span> Enhance relevance by mapping structured data to vector embeddings. Seamlessly blend ontological relationships with contextual semantics.
                        </p>
                    </div>
                </div>
                <div className="relative w-full h-[400px] lg:h-[300px]">
                    <Image
                        src={"/svgs/triangles.svg"}
                        alt="triangle"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
