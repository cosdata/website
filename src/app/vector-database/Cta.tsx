import { commonStyles, afacad, geologica } from "@/app/styles/common"
import Image from "next/image"
import React from 'react'

export default function Cta() {
    return (
        <div className={`${commonStyles.mainContainer} ${afacad.className} flex justify-center w-full px-4 py-12`}>
            <div className="bg-gray-200 w-full flex sm:flex-row flex-col gap-6 justify-center sm:justify-between px-4 sm:px-8 py-8 rounded-xl">
                <div className={`flex flex-col items-center sm:items-start justify-between gap-6`}>
                    <div className="text-[20px] text-center">
                        Do you have any further questions?
                        </div>
                    <button className={`${commonStyles.button} bg-[#f23665] text-white hover:bg-[#d92d5c] cursor-pointer`}>Contact Us</button>

                </div>
                <div className="flex justify-center sm:justify-start">
                    <Image src="./svgs/cta_image(1).svg" alt="cta" width={160} height={100} />
                </div>
            </div>
        </div>
    )
}
