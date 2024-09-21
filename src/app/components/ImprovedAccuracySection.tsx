import React from 'react';

const ImprovedAccuracySection: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#f0f2f5] p-6 flex flex-col justify-between">
                    <h3 className="text-2xl font-bold text-[#f23665] mb-8">Improved accuracy leads to better decision-making.</h3>
                    <p className='text-[#7db1ff]'>
                        CosData's unified hybrid search and knowledge graph approach combines precision with context, delivering spot-on results for complex queries. Find exactly what you need, leveraging both semantic connections and data relationships to enhance decision-making and improve outcomes.
                    </p>
                </div>

                <div className="bg-[#f0f2f5] p-6 flex flex-col justify-between">
                    <h3 className="text-2xl font-bold text-[#f23665] mb-8">Faster and smoother user experience at any scale.</h3>
                    <p className='text-[#7db1ff]'>
                        Lightning-fast indexing and querying, powered by optimized algorithms, advanced vectorization, and smart quantization techniques, keep CosData swift as your data grows. Enjoy instant responses and seamless interactions, regardless of dataset size or query complexity.
                    </p>
                </div>

                <div className="bg-[#f0f2f5] p-6 flex flex-col justify-between">
                    <h3 className="text-2xl font-bold text-[#f23665] mb-8">Saves time and money while simplifying processes.</h3>
                    <p className='text-[#7db1ff]'>
                        Intuitive APIs and smart auto-configuration streamline data management. Spend less time on setup and maintenance, more on utilizing insights. Simplify complex tasks and reduce costs with efficient, user-friendly tools.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImprovedAccuracySection;
