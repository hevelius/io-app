import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconBackAndroid = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2929 23.7071c.3905.3905 1.0237.3905 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142L3.41421 13H23c.5523 0 1-.4477 1-1s-.4477-1-1-1H3.41421l9.29289-9.29289c.3905-.39053.3905-1.0237 0-1.41422s-1.0237-.39052-1.4142 0l-11 11.00001c-.39053.3905-.39053 1.0237 0 1.4142l11 11Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconBackAndroid;
