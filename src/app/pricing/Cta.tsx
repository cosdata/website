import { commonStyles, afacad, geologica } from "@/app/styles/common"
import React from 'react'

export default function Cta() {
    return (
        <div className={`${commonStyles.mainContainer} ${afacad.className} flex justify-center w-full px-4 py-12`}>
            <div className="bg-gray-200 w-full flex sm:flex-row flex-col gap-6 justify-center sm:justify-between px-4 sm:px-8 py-8 rounded-xl">
                <div className={`text-[24px] text-center`}>
                 Cosdata is a developer-friendly,<br/>
                open source database for Multimodal AI.
                </div>
                <div className="flex justify-center sm:justify-start">
                    <button className={`${commonStyles.button} bg-[#f23665] text-white hover:bg-[#d92d5c] cursor-pointer text-[20px]`}>Get Started</button>
                </div>
            </div>
        </div>
    )
}
