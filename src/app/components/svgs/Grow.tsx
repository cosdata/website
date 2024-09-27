"use client"
import styles from "./Grow.module.css";

import { FC, useEffect } from "react";

interface GrowProps {
    active: boolean;
    width: number;
    height: number;
}

const Grow: FC<GrowProps> = ({ active, width, height }) => {
    useEffect(() => {
        console.log("Runned", active);

        const svgElement = document.getElementById("svg2");
        console.log(svgElement);

        if (svgElement) {
            if (active) {
                svgElement.classList.add(styles.active);
            } else {
                svgElement.classList.remove(styles.active);
            }
        }
        return () => {
            svgElement?.classList.remove(styles.active);
        }; 4
    }, [active]);

    return (
        <svg
        // width="100%"
        // height="100%"
        viewBox="0 0 100 108"
        id="svg2"
        className="w-auto h-[280px] "
      >
        <defs id="defs1">
        </defs>
        <g  id="layer1">
          <rect
            style={{
              opacity: 1,
              fill: "rgb(253, 214, 224)",
              stroke: "none",
              strokeWidth: 0.41809,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              paintOrder: "stroke markers",
            }}
            id="rect11"
            width={5.1103683}
            height={23.073254}
            x={14.103748}
            y={71.187233}
            className={styles["svg-elem-1"]}          />
          <rect
            style={{
              opacity: 1,
              fill: "rgb(253, 214, 224)",
              stroke: "none",
              strokeWidth: 0.500232,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              paintOrder: "stroke markers",
            }}
            id="rect11-9"
            width={5.0282259}
            height={33.569855}
            x={29.035486}
            y={60.480736}
            className={styles["svg-elem-2"]}          />
          <rect
            style={{
              opacity: 1,
              fill: "rgb(253, 214, 224)",
              stroke: "none",
              strokeWidth: 0.555165,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              paintOrder: "stroke markers",
            }}
            id="rect11-5"
            width={4.9732933}
            height={41.804329}
            x={44.374958}
            y={52.038269}
            className={styles["svg-elem-3"]}          />
          <rect
            style={{
              fill: "rgb(253, 214, 224)",
              stroke: "none",
              strokeWidth: 0.200544,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              paintOrder: "stroke markers",
            }}
            id="rect11-00"
            width={5.1103683}
            height={5.3087087}
            x={62.873665}
            y={88.774117}
            className={styles["svg-elem-4"]}          />
          <rect
            style={{
              fill: "rgb(253, 214, 224)",
              stroke: "none",
              strokeWidth: 0.200544,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              paintOrder: "stroke markers",
            }}
            id="rect11-00-5"
            width={5.1103683}
            height={5.3087087}
            x={78.286896}
            y={88.5877}
            className={styles["svg-elem-5"]}          />
          <rect
            style={{
              opacity: 1,
              fill: "rgb(253, 214, 224)",
              stroke: "none",
              strokeWidth: 0.417223,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              paintOrder: "stroke markers",
            }}
            id="rect11-6"
            width={5.023025}
            height={23.377178}
            x={62.968712}
            y={62.953552}
            className={styles["svg-elem-6"]}          />
          <rect
            style={{
              opacity: 1,
              fill: "rgb(253, 214, 224)",
              stroke: "none",
              strokeWidth: 0.42151,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              paintOrder: "stroke markers",
            }}
            id="rect11-1"
            width={5.0814581}
            height={23.585718}
            x={78.140846}
            y={62.682671}
            className={styles["svg-elem-7"]}          />
          <rect
            style={{
              opacity: 1,
              fill: "rgb(253, 214, 224)",
              stroke: "none",
              strokeWidth: 0.412555,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              paintOrder: "stroke markers",
            }}
            id="rect11-0"
            width={5.0814581}
            height={22.594145}
            x={62.940781}
            y={40.389065}
            className={styles["svg-elem-8"]}          />
          <rect
            style={{
              opacity: 1,
              fill: "rgb(253, 214, 224)",
              stroke: "none",
              strokeWidth: 0.408805,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              paintOrder: "stroke markers",
            }}
            id="rect11-7"
            width={5.0814581}
            height={22.185347}
            x={78.135506}
            y={40.533939}
            className={styles["svg-elem-9"]}          />
          <path
            style={{
              fontVariationSettings: "normal",
              opacity: 1,
              vectorEffect: "none",
              fill: "rgb(253, 214, 224)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: "0.264583px",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              strokeOpacity: 1,
              stopColor: "rgb(0, 0, 0)",
              stopOpacity: 1,
            }}
            d="M 62.890466,40.722839 C 61.674205,37.881703 59.94956,35.512509 55.693441,34.824058 L 73.562023,17.442874 c 0.383519,-0.194801 0.385266,-0.17798 0.617446,0.01823 L 90.81572,35.239482 c -3.127885,1.438622 -7.192658,2.023375 -7.633903,5.773888 l -5.061165,-0.11054 c 0.625654,-3.900083 3.049002,-5.904726 5.66782,-6.746295 l -9.472437,-9.720474 c -0.663103,-0.703571 -0.683973,-0.72055 -1.481171,0.07119 l -9.654523,9.552276 c 3.044529,0.756645 4.603336,4.468373 4.840913,6.686076 z"
            id="path12"
            className={styles["svg-elem-10"]}
          />
        </g>
      </svg>
        
    );
}

export default Grow;
