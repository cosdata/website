import { afacad, commonStyles } from '@/app/styles/common'
export default function VectorDatabase() {
    return (
        <div className={` py-24 ${commonStyles.mainContainer} flex flex-col items-center text-`}>
            {/* Heading */}
            <div className={`${afacad.className} ${commonStyles.heroTitle} font-bold`}>Vector Database</div>
            {/* Sub Heading */}
            <div className={`${afacad.className} ${commonStyles.heroSubtitle} text-center`}>Cosdata is the most advanced vector database with highest RPS, minimal latency, fast indexing, high control with accuracy, and so much more.</div>

            {/* Button Section */}
            <div className='flex gap-4 flex-wrap justify-center'>
                <div className={`${commonStyles.button} bg-[#f23665] text-white hover:bg-[#d92d5c] cursor-pointer`}> Get Started</div>
                <a href='#' className={`${commonStyles.button} bg-black text-white hover:bg-gray-800 cursor-pointer`}> Talk to Sales</a>
            </div>

        </div>
    )
}