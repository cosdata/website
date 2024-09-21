import React from 'react';

const ImprovedAccuracySection: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-[#ffffff] to-[#f5dede] p-6 flex flex-col justify-between text-[#7db1ff] duration-300 hover:translate-y-[-20px]">
                    <h3 className="text-2xl font-bold mb-8 text-[#0055c8]">Improved accuracy leads to better decision-making.</h3>
                    <p className='text-[#7db1ff]'>
                        Unified hybrid search and knowledge graphs combine precision with context, delivering spot-on results for complex queries. Find precisely what you need, using semantic and relational data to improve decisions and outcomes.
                    </p>
                </div>

                <div className="bg-gradient-to-b from-[#ffffff] to-[#f5dede] p-6 flex flex-col justify-between text-[#7db1ff]  duration-300 hover:translate-y-[-20px]">
                    <h3 className="text-2xl font-bold mb-8 text-[#0055c8]  ">Faster and smoother user experience at any scale.</h3>
                    <p className='text-[#7db1ff]'>
                        Optimized vectorization and smart quantization enable rapid indexing and querying, maintaining speed as data volume increases. Experience swift responses and fluid interactions, unaffected by dataset size or query intricacy.
                    </p>
                </div>

                <div className="bg-gradient-to-b from-[#ffffff] to-[#f5dede] p-6 flex flex-col justify-between text-[#7db1ff]  duration-300 hover:translate-y-[-20px]">
                    <h3 className="text-2xl font-bold mb-8 text-[#0055c8]">Saves time and money while simplifying processes.</h3>
                    <p className='text-[#7db1ff]'>
                        Intuitive APIs and smart auto-configuration streamline data management. Spend less time on setup and maintenance, more on utilizing insights. Simplify complex tasks and reduce costs with efficient, user-friendly tools.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImprovedAccuracySection;
