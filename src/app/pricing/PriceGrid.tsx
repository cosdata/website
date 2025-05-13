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
    heading: string | React.ReactNode;
    subHeading: string;
    description: string;
    prices: Price[];
    onContactSales?: () => void;
}

const labelColors = [
    "bg-[#1E40AF] text-white", // OSS
    "bg-[#F23665] text-white", // Serverless
    "bg-[#7c3aed] text-white"  // Enterprise (purple)
];

const buttonBgColors = [
    "bg-[#1E40AF] text-white", // OSS
    "bg-[#F23665] text-white", // Serverless
    "bg-[#7c3aed] text-white"  // Enterprise (purple)
];

export default function PriceGrid(Prop: PriceGridProps) {
    const prices = Prop.prices
    return (
        <div className={`${commonStyles.mainContainer} flex flex-col items-center py-12`}>
            <div className={` ${commonStyles.heroTitle} font-bold text-center`}>{Prop.heading}</div>
            {/* <div className={`text-[#374151] text-[25px] sm:text-[42px] md:text-[48px] text-center`}>{Prop.subHeading}</div> */}

            <div className={`${commonStyles.heroSubtitle} text-center py-4`}>{Prop.description}</div>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center`}>
                {prices.map((price, index) => (
                    <div key={index} className="flex flex-col justify-between text-[#000000] transition-transform rounded-2xl bg-white shadow-xl hover:shadow-2xl gap-4 max-w-[500px] p-6">
                        {/* Colorful label pill/card */}
                        <div className={`inline-block px-4 py-2 rounded-full font-bold text-[24px] mb-2 ${labelColors[index]} ${geologica.className}`}>{price.title}</div>
                        <div className={`${afacad.className} text-[20px] mb-2`}>{price.description}</div>
                        <div className={`my-2 text-[18px] text-[#374151] ${afacad.className}`}>
                            <div className="pb-2 font-bold">{price.note}</div>
                            <ul className="flex flex-col gap-2">
                                {price.details.map((detail, i) => (
                                    <li key={i} className={` flex gap-2`}><span className=""> {`\u2713`}</span><span>{detail} </span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-2">
                            {price.button.text === 'Contact Sales' && Prop.onContactSales ? (
                                <button
                                    type="button"
                                    onClick={Prop.onContactSales}
                                    className={`${afacad.className} ${buttonBgColors[index]} px-2 lg:px-4 py-2 rounded-lg flex items-center justify-center block font-bold text-[20px] w-full`}
                                >
                                    {price.button.text}
                                </button>
                            ) : (
                                <a
                                    href={price.button.link}
                                    className={`${afacad.className} ${price.button.active ? buttonBgColors[index] : "border-[1px] border-gray-500 border-solid"} px-2 lg:px-4 py-2 rounded-lg flex items-center justify-center block font-bold text-[20px] w-full`}
                                >
                                    {price.button.text}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
