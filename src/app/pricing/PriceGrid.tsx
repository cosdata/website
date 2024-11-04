import { commonStyles, geologica, afacad } from "@/app/styles/common"
import React from 'react'

interface Price{
    title: string;
    pricing: {
        starting_price: string;
        description: string;
    },
    cta: {
        text: string;
        subtext: string;
    },
    details: string[];
}

interface PriceGridProps {
    heading:string;
    subHeading:string;
    description:string;
    prices: Price[];
}

export default function PriceGrid(Prop:PriceGridProps) {
    const prices = Prop.prices
    return (
        <div className={`${commonStyles.mainContainer} flex flex-col items-center py-24`}>
            <div className={` ${commonStyles.heroTitle} font-bold text-center`}>{Prop.heading}</div>
            <div className={`text-[#374151] text-[25px] sm:text-[42px] md:text-[48px] text-center`}>{Prop.subHeading}</div>

            <div className={`${commonStyles.heroSubtitle} text-center py-8`}>{Prop.description}</div>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center`}>
                {prices.map((price, index) => (
                    <div key={index} className="flex flex-col p-6 sm:p-10 text-[#374151] transition-transform rounded-xl shadow-md bg-gray-200 hover:border-[#f23665] border-2 border-solid gap-4 max-w-[600px]">
                        <div className={` text-[35px] text-[#0055c8] text-left ${geologica.className} font-bold `}>{price.title}</div>
                        <div className={` text-[30px] font-bold`}>{price.pricing.starting_price}</div>
                        <div className={` `}>{price.pricing.description}</div>

                        <div className={`flex justify-center items-center `}>

                            <button className={`${commonStyles.button} bg-[#f23665] text-white text-[18px] w-full`}>{price.cta.text}</button>
                        </div>
                        <div className={` `}>{price.cta.subtext}</div>
                        <ul className="flex flex-col gap-2">
                            {price.details.map((detail, index) => (
                                <li key={index} className={` `}>{`\u2022`}{detail}</li>
                            ))}
                        </ul>
                    </div>

                ))}
            </div>
        </div>
    )
}
