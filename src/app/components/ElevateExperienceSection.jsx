import Image from 'next/image';
import GradientBackground from "./GradientBackground"
export default function ElevateExperienceSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 my-20">
            <h1 className="text-[#0055c8] text-4xl font-bold mb-12 text-center">
                Elevate Your Search Experience
            </h1>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-4 lg:gap-1 lg:p-6">
                <div className="lg:w-1/2">

                    <div className="flex flex-col  gap-8">
                        <p className="text-[#3d8bff] leading-relaxed flex flex-col">
                            <span className="text-[#f23665] text-3xl font-semibold">Hybrid Search</span>
                            <span className='leading-[30px]'>
                                Enhance search precision with our vector database, leveraging the power of combined sparse and dense vector searches to deliver highly relevant, context-rich results for complex queries.
                            </span>
                        </p>
                        <p className="text-[#3d8bff] leading-relaxed flex flex-col">
                            <span className="text-[#f23665] text-3xl font-semibold">Knowledge-Graph Integration</span>
                            <span className='leading-[30px]'>
                                Enhance relevance by mapping structured data to vector embeddings. Seamlessly blend ontological relationships with contextual semantics.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="relative w-full lg:w-1/2 h-[350px]">
                    {/* <div className=" w-[360px] h-[300px]"> */}
                    <Image
                        src={"/svgs/triangles.svg"}
                        alt="triangle"
                        fill
                        className="object-contain z-10"
                    />
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}
