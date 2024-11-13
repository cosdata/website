import { afacad, commonStyles } from "@/app/styles/common";
import TechHeroSection from "./TechHeroSection"
import TechPreface from "./TechPreface";
import Image from "next/image";
import Link from "next/link";

export default function TechPage() {
    const HeroSectionProp = {
        heading: "Vector Search Reimagined",
        subHeading: "Powered by CHANNI, a ground-breaking multi-level vector search index that combines hierarchical graph navigation with intelligent clustering, Cosdata's vector database delivers unmatched performance by combining blazing-fast in-memory search capabilities with disk-based scalability.",
        buttonText1: "Read The CHANNI Paper",
        buttonLink1: "/tech/channi-paper"
    }

    return (
        <div className="flex flex-col">
            <TechHeroSection {...HeroSectionProp} />
            <div className="w-full bg-white">
                <TechPreface />
                
                <div className="flex justify-center my-10">
                    <Link 
                        href="/tech/channi-paper"
                        className={`${commonStyles.button} ${afacad.className} bg-[#f23665] hover:bg-[#d92d5c] text-white text-xl px-8 py-4`}
                    >
                        Read the CHANNI Paper
                    </Link>
                </div>
                
                <div className={commonStyles.mainContainer}>
                    <div className={`${commonStyles.sectionTitle} text-center mb-2`}>
                        Clustered Hierarchical Approximate Nested Navigable Index (CHANNI)
                    </div>
                    <Image 
                        src="/svgs/CHANNI.svg"
                        alt="CHANNI Architecture Diagram"
                        width={815}
                        height={1030}
                        className="w-full h-auto"
                    />
                </div>

                <div className="flex justify-center my-10">
                    <Link 
                        href="/tech/channi-paper"
                        className={`${commonStyles.button} ${afacad.className} bg-[#f23665] hover:bg-[#d92d5c] text-white text-xl px-8 py-4`}
                    >
                        Read the CHANNI Paper
                    </Link>
                </div>
                
            </div>
        </div>
    )
} 