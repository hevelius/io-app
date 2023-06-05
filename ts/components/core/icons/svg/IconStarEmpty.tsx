import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconStarEmpty = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2605 2.03943c.7664-1.35075 2.7127-1.35075 3.4791 0l2.729 4.81004 5.4179 1.10907c1.5215.31145 2.1229 2.16256 1.0751 3.30876l-3.7313 4.0819.6194 5.4954c.174 1.5433-1.4006 2.6873-2.8146 2.045L12 20.6022l-5.03505 2.2874c-1.41396.6423-2.98857-.5017-2.81462-2.045l.61945-5.4954-3.73131-4.0819C-.00935 10.1211.59211 8.26998 2.11356 7.95854l5.41793-1.10907 2.72901-4.81004ZM12 3.02637 9.27102 7.83641a2.00003 2.00003 0 0 1-1.33844.97243L2.51465 9.91791l3.7313 4.08179c.38952.4262.57591.9998.51124 1.5735l-.61944 5.4955 5.03505-2.2874c.5257-.2387 1.1288-.2388 1.6544 0l5.0351 2.2874-.6194-5.4955a2.00015 2.00015 0 0 1 .5112-1.5735l3.7313-4.08179-5.4179-1.10907a1.99973 1.99973 0 0 1-1.3384-.97243L12 3.02637Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconStarEmpty;
