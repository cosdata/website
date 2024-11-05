import { commonStyles, geologica, afacad } from "@/app/styles/common"
import React from 'react'

interface Price {
    title: string;
    description: string;
    note: string;
    details: string[];
    button: {
        active: boolean;
        text: string;
        link: string
    }
}

interface PriceGridProps {
    heading: string;
    subHeading: string;
    description: string;
    prices: Price[];
}

export default function PriceGrid(Prop: PriceGridProps) {
    const prices = Prop.prices
    return (
        <div className={`${commonStyles.mainContainer} flex flex-col items-center py-24`}>
            <div className={` ${commonStyles.heroTitle} font-bold text-center`}>{Prop.heading}</div>
            {/* <div className={`text-[#374151] text-[25px] sm:text-[42px] md:text-[48px] text-center`}>{Prop.subHeading}</div> */}

            <div className={`${commonStyles.heroSubtitle} text-center py-8`}>{Prop.description}</div>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center`}>
                {prices.map((price, index) => (
                    <div key={index} className="flex flex-col justify-between text-[#000000] transition-transform rounded-2xl bg-white shadow-xl hover:shadow-2xl gap-4 max-w-[600px]">
                        <div>
                            <div className={`w-full rounded-2xl p-6 ${index==1?"bg-[#f47a96]":"bg-[#3d8bff]"} h-[400px] `}>
                                <h1 className={` text-[16px]  text-left ${geologica.className} bg-white rounded-lg font-bold inline-block p-2  mb-20`}>{price.title}</h1>
                                <div className={`${afacad.className} text-[24px]`}>{price.description}</div>
                            </div>
                            <div className={`p-6 my-4 text-[24px] text-[#374151] ${afacad.className}`}>
                                <div className="pb-4 font-bold">{price.note}</div>
                                <ul className="flex flex-col gap-4">
                                    {price.details.map((detail, index) => (
                                        <li key={index} className={` flex gap-2`}><span className=""> {`\u2713`}</span><span>{detail} </span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="p-6">
                            <a href={price.button.link} className={`${afacad.className}  ${(price.button.active ? "bg-[#f47a96]" : " border-[1px] border-gray-500 border-solid ")} px-2 lg:px-4 py-3 rounded-lg  flex items-center justify-center ${afacad.className} block font-bold text-[24px]`}>{price.button.text}</a>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
