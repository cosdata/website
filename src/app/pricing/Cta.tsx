import { commonStyles, afacad, geologica } from "@/app/styles/common"
import React from 'react'

interface CtaProps {
    onClick?: () => void;
}

export default function Cta({ onClick }: CtaProps) {
    return (
        <div className={`${commonStyles.mainContainer} ${afacad.className} flex justify-center w-full px-4 py-12`}>
            <div className="bg-gray-200 w-full flex sm:flex-row flex-col gap-6 justify-center sm:justify-between px-4 sm:px-8 py-8 rounded-xl">
                <div className={`text-[24px] text-center`}>
                Cosdata&apos;s next-generation vector database delivers lightning-fast performance at billion-vector scale, <br /> powering the AI applications of tomorrow
                </div>
                <div className="flex justify-center sm:justify-start">
                    <button onClick={onClick} className={`${commonStyles.button} bg-[#f23665] text-white hover:bg-[#d92d5c] cursor-pointer text-[20px]`}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
