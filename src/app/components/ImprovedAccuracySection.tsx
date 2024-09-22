import React from 'react';
import Image from 'next/image';

const ImprovedAccuracySection: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-[#ffffff] to-[#f5dede] p-6 flex flex-col  text-[#3d8bff] duration-300 hover:translate-y-[-20px]">
                    <div className="flex items-center gap-4">
                        <Image
                            src={`/svgs/features/icon(1).drawio.svg`}
                            alt="svg"
                            width={50}
                            height={50} />
                        <h3 className="text-2xl font-bold mb-4 text-[#0055c8]">Boost accuracy for smarter choices</h3>
                    </div>
                    <p className='text-[#3d8bff]'>
                        Unified hybrid search and knowledge graphs combine precision with context, delivering spot-on results for complex queries. Find precisely what you need, using semantic and relational data to improve decisions and outcomes.
                    </p>
                </div>

                <div className="bg-gradient-to-b from-[#ffffff] to-[#f5dede] p-6 flex flex-col  text-[#3d8bff]  duration-300 hover:translate-y-[-20px]">
                    <div className="flex items-center gap-4">
                        <Image
                            src={`/svgs/features/icon(2).drawio.svg`}
                            alt="svg"
                            width={50}
                            height={50} />
                        <h3 className="text-2xl font-bold mb-4 text-[#0055c8]  ">Swift, scalable performance</h3>
                    </div>
                    <p className='text-[#3d8bff]'>
                        Optimized vectorization and smart quantization enable rapid indexing and querying, maintaining speed as data volume increases. Experience swift responses and fluid interactions, unaffected by dataset size or query intricacy.
                    </p>
                </div>

                <div className="bg-gradient-to-b from-[#ffffff] to-[#f5dede] p-6 flex flex-col  text-[#3d8bff]  duration-300 hover:translate-y-[-20px]">
                    <div className="flex items-center gap-4">
                        <Image
                            src={`/svgs/features/icon(3).drawio.svg`}
                            alt="svg"
                            width={50}
                            height={50} />
                        <h3 className="text-2xl font-bold mb-4 text-[#0055c8]">Streamline: save time and money</h3>
                    </div>
                    <p className='text-[#3d8bff]'>
                        Intuitive APIs and smart auto-configuration streamline data management. Spend less time on setup and maintenance, more on utilizing insights. Simplify complex tasks and reduce costs with efficient, user-friendly tools.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImprovedAccuracySection;
