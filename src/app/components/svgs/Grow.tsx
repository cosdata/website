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
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 160 108"
        id="svg2"
      >
        <defs id="defs1" />
        <g  id="layer1">
          <rect
            style={{
              opacity: 0.299868,
              fill: "rgb(21, 50, 226)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.964999,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              strokeOpacity: 1,
            }}
            id="rect9"
            width={51.645432}
            height={5.9816022}
            x={2.4292006}
            y={98.356567}
            ry={2.9908011}
            className={styles["svg-elem-1"]}
          />
          <rect
            style={{
              opacity: 0.299868,
              fill: "rgb(21, 50, 226)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.964999,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              strokeOpacity: 1,
            }}
            id="rect10"
            width={41.182247}
            height={5.3223324}
            x={34.040493}
            y={91.396935}
            ry={2.6611662}
            className={styles["svg-elem-2"]}
          />
          <rect
            style={{
              opacity: 0.37552,
              fill: "rgb(21, 50, 226)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.964999,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              strokeOpacity: 1,
            }}
            id="rect11"
            width={32.125374}
            height={5.9109893}
            x={60.518848}
            y={83.801811}
            ry={2.6611662}
            className={styles["svg-elem-3"]}
          />
          <rect
            style={{
              opacity: 0.37552,
              fill: "rgb(21, 50, 226)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.891377,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              strokeOpacity: 1,
            }}
            id="rect11-6"
            width={27.073322}
            height={5.984611}
            x={78.476883}
            y={75.999512}
            ry={2.6943114}
            className={styles["svg-elem-4"]}
          />
          <rect
            style={{
              opacity: 0.37552,
              fill: "rgb(21, 50, 226)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.826282,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              strokeOpacity: 1,
            }}
            id="rect11-9"
            width={23.013197}
            height={6.0497065}
            x={93.284767}
            y={68.666237}
            ry={2.7236176}
            className={styles["svg-elem-5"]}
          />
          <rect
            style={{
              opacity: 0.444122,
              fill: "rgb(21, 50, 226)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.811388,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              strokeOpacity: 1,
            }}
            id="rect11-3"
            width={22.136526}
            height={6.0646005}
            x={103.86337}
            y={60.910744}
            ry={2.7303228}
            className={styles["svg-elem-6"]}
          />
          <rect
            style={{
              opacity: 0.444122,
              fill: "rgb(21, 50, 226)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.779792,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              strokeOpacity: 1,
            }}
            id="rect11-2"
            width={20.340118}
            height={6.0961962}
            x={113.94068}
            y={53.093094}
            ry={2.7445476}
            className={styles["svg-elem-7"]}
          />
          <rect
            style={{
              opacity: 0.444122,
              fill: "rgb(21, 50, 226)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.779792,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              strokeOpacity: 1,
            }}
            id="rect11-2-7"
            width={20.340118}
            height={6.0961962}
            x={119.47998}
            y={45.661674}
            ry={2.7445476}
            className={styles["svg-elem-8"]}
          />
          <rect
            style={{
              opacity: 0.461354,
              fill: "rgb(21, 50, 226)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.758234,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              strokeOpacity: 1,
            }}
            id="rect11-2-2"
            width={19.163244}
            height={6.1177545}
            x={124.05031}
            y={38.184719}
            ry={2.7542534}
            className={styles["svg-elem-9"]}
          />
          <rect
            style={{
              opacity: 0.5,
              fill: "rgb(21, 50, 226)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.743438,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              strokeOpacity: 1,
            }}
            id="rect11-2-9"
            width={18.378206}
            height={6.1325502}
            x={128.33025}
            y={30.760023}
            ry={2.7609146}
            className={styles["svg-elem-10"]}
          />
          <rect
            style={{
              opacity: 0.5,
              fill: "rgb(21, 50, 226)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.723339,
              strokeLinecap: "round",
              strokeMiterlimit: 0,
              strokeOpacity: 1,
            }}
            id="rect11-2-4"
            width={17.341097}
            height={6.1526489}
            x={131.33145}
            y={23.035734}
            ry={2.769963}
            className={styles["svg-elem-11"]}
          />
          <path
            style={{
              fontVariationSettings: "normal",
              opacity: 1,
              vectorEffect: "none",
              fill: "rgb(249, 170, 213)",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: "0.197448px",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              strokeOpacity: 1,
              stopColor: "rgb(0, 0, 0)",
              stopOpacity: 1,
            }}
            d="m 132.04065,18.542534 7.27348,-13.4898475 c 0.86153,-1.6632061 2.28025,-1.9593974 3.54114,-0.2278852 l 6.73391,13.5051907 c 0.55329,1.674265 1.52955,2.809963 -1.66664,2.712091 l -14.12548,-0.007 c -2.58142,-0.02431 -2.44708,-1.237024 -1.75641,-2.492596 z"
            id="path13"
            className={styles["svg-elem-12"]}
          />
        </g>
      </svg>

    );
}

export default Grow;
