import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconSmileHappy = ({ size, style }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 22.5C6.201 22.5 1.5 17.799 1.5 12C1.5 6.201 6.201 1.5 12 1.5C17.799 1.5 22.5 6.201 22.5 12C22.5 17.799 17.799 22.5 12 22.5ZM8.25 9.75C9.07843 9.75 9.75 9.07843 9.75 8.25C9.75 7.42157 9.07843 6.75 8.25 6.75C7.42157 6.75 6.75 7.42157 6.75 8.25C6.75 9.07843 7.42157 9.75 8.25 9.75ZM17.25 8.25C17.25 9.07843 16.5784 9.75 15.75 9.75C14.9216 9.75 14.25 9.07843 14.25 8.25C14.25 7.42157 14.9216 6.75 15.75 6.75C16.5784 6.75 17.25 7.42157 17.25 8.25ZM7.14804 14.0093C6.98938 13.6267 6.55059 13.4452 6.16796 13.6038C5.78534 13.7625 5.60378 14.2013 5.76244 14.5839C6.10211 15.403 6.6008 16.1467 7.22703 16.773C8.48424 18.0302 10.1861 18.75 12 18.75C13.8139 18.75 15.5158 18.0302 16.773 16.773C17.3992 16.1467 17.8979 15.403 18.2376 14.5839C18.3962 14.2013 18.2147 13.7625 17.832 13.6038C17.4494 13.4452 17.0106 13.6267 16.852 14.0093C16.588 14.646 16.1999 15.2247 15.7123 15.7123C14.7336 16.691 13.412 17.25 12 17.25C10.588 17.25 9.26639 16.691 8.28769 15.7123C7.8001 15.2247 7.41204 14.646 7.14804 14.0093Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconSmileHappy;
