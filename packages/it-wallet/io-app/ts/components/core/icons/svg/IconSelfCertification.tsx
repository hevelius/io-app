import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconSelfCertification = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.024 16.616H7.49c-1.485 0-2.688 1.25-2.688 2.794 0 .445.106.883.307 1.277l-.691.718-2.432.532.512-2.527 1.536-1.597c.334-.214.616-.507.821-.854L17.121 4.21l1.92 1.996-10.017 10.41Zm3.906 0h-1.734l3.122-3.244.897.869-2.285 2.375Zm-3.773-6.385-3.023 3.141.834-2.458 1.114-.683h1.075ZM1.76 15.275l2.842-8.309 8.876-1.23-2.786 2.898h-3.03L5.705 9.836 3.66 15.869a.956.956 0 0 1-.066.143l-.482.5a.93.93 0 0 1-.405.104c-.548 0-.991-.46-.991-1.03 0-.105.015-.21.046-.31ZM19.266 1.981a1.352 1.352 0 0 1 1.92 0c.53.551.53 1.444 0 1.995l-1.059 1.101-1.92-1.995 1.06-1.101Zm2.358 7.452H24V7.836h-2.083l-1.628-.67 1.983-2.061a3.096 3.096 0 0 0 0-4.253 2.882 2.882 0 0 0-4.092 0l-2.91 3.025L3.466 5.514.309 14.756c-.42 1.288.186 2.694 1.389 3.227l-.608.63L0 24l5.185-1.133.998-1.034c.397.239.847.366 1.306.37h7.434l6.144-2.394H24v-1.597h-3.21l-6.145 2.395H7.49c-.637 0-1.152-.536-1.152-1.197 0-.662.515-1.198 1.152-1.198h6.077l3.86-4.01-2.021-1.96 3.7-3.847 2.519 1.038Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconSelfCertification;
