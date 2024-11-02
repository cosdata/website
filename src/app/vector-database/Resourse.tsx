import { commonStyles } from "../styles/common";
import Image from "next/image"
import React from 'react'

export default function Resourse() {
    const Resourses=[
        {
            "heading": "Documentation",
            "description": "Discover more about cosdata by checking out our documentation for details on advanced features and functionalities.",
            "link_text": "Read More",
            "svg":"/svgs/features/icon(1).drawio.svg"
        },
        {
            "heading": "Enterprise Solutions",
            "description": "For maximal control for production-ready applications cosdata is available as a Hybrid Cloud and Private Cloud (Full On Premise) solution.",
            "link_text": "Contact Sales",
            "svg":"/svgs/features/icon(2).drawio.svg"
        },
        {
            "heading": "Benchmarks",
            "description": "Learn how cosdata is designed to deliver the fastest and most accurate results and how it compares to alternatives in our benchmarks.",
            "link_text": "Compare",
            "svg":"/svgs/features/icon(3).drawio.svg"
        },
        {
            "heading": "Pricing",
            "description": "Visit our pricing page for more details on cosdata’s free tier, managed cloud, and enterprise plans.",
            "link_text": "Pricing",
            "svg":"/svgs/features/icon(4).drawio.svg"
        }
    ]
    
  return (
    <div className={`${commonStyles.mainContainer} py-[40px] 2xl:py-[80px]`}>
        <div className={`${commonStyles.sectionTitle}`}>Additional Resources</div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Resourses.map((Resourse,index)=>(
        <div className={`${commonStyles.featureCard}`}>
            <Image src={Resourse.svg} alt={Resourse.heading} width={40} height={40} className="my-5"/>
            <div className={`${commonStyles.featureTitle}`}>{Resourse.heading}</div>
            <div className={`${commonStyles.featureDescription}`}>{Resourse.description}</div>
            <div className={`${commonStyles.featureLink} cursor-pointer`}>{Resourse.link_text}</div>
        </div>
      ))}
      </div>
    </div>
  )
}
