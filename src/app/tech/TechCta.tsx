import { commonStyles, afacad } from "@/app/styles/common"
import Image from "next/image"
import React from 'react'

interface TechCtaProps {
    pdfLink: string;
}

export default function TechCta({ pdfLink }: TechCtaProps) {
    return (
        <div className={`${commonStyles.mainContainer} ${afacad.className} flex justify-center w-full px-4 py-12`}>
            <div className="bg-gray-200 w-full flex sm:flex-row flex-col gap-6 justify-center sm:justify-between px-4 sm:px-8 py-8 rounded-xl">
                <div className={`flex flex-col items-center sm:items-start justify-between gap-6`}>
                    <div className="text-[20px] text-center">
                        Want to learn more about CHANNI technology?
                    </div>
                    <a
                        href={pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${commonStyles.button} bg-[#f23665] text-white hover:bg-[#d92d5c] cursor-pointer`}
                    >
                        Read CHANNI Paper
                    </a>
                </div>
                <div className="flex justify-center sm:justify-start">
                    <Image src="./svgs/cta_image(1).svg" alt="cta" width={160} height={100} />
                </div>
            </div>
        </div>
    )
} 