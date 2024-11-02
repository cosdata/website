import { commonStyles } from "../styles/common";
import Image from "next/image"
import React from 'react'

interface Resourse {
  title: string;
  description: string;
  link_text: string;
  link: string;
  svg: string;
}

interface ResourceProp {
  heading: string;
  subHeading: string;
  Resources: Resourse[];
}

export default function Resourse(Prop: ResourceProp) {
  const Resourses = Prop.Resources;

  return (
    <div className={`${commonStyles.mainContainer} py-[40px] 2xl:py-[80px]`}>
      <div className={`${commonStyles.sectionTitle}`}>{Prop.heading}</div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Resourses.map((Resourse, index) => (
          <div className={`${commonStyles.featureCard}`}>
            <Image src={Resourse.svg} alt={Resourse.title} width={40} height={40} className="my-5" />
            <div className={`${commonStyles.featureTitle}`}>{Resourse.title}</div>
            <div className={`${commonStyles.featureDescription}`}>{Resourse.description}</div>
            <div>
              <a href={Resourse.link} className={`${commonStyles.featureLink} cursor-pointer`}>{Resourse.link_text}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
