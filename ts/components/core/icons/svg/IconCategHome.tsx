import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconCategHome = ({ size, style }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      d="M23.298 22.567h-.501v-6.263a.7.7 0 0 0 .98-.068.702.702 0 0 0-.06-.991L21.66 13.42V9.783a.702.702 0 0 0-1.404 0v2.392l-3.68-3.264V5.278A5.248 5.248 0 0 0 11.336.037a5.248 5.248 0 0 0-5.242 5.241v1.525A22.577 22.577 0 0 0 4.52 4.272a.702.702 0 0 0-1.129 0c-.137.185-3.346 4.57-3.346 8.274 0 1.807.36 3.517 1.015 4.815.577 1.145 1.34 1.884 2.194 2.144v3.062H.702a.702.702 0 0 0 0 1.403h22.596a.702.702 0 1 0 0-1.403Zm-11.23 0h-1.403v-5.213h1.403v5.213Zm.702-6.617H9.963a.702.702 0 0 0-.702.702v5.915H7.858V15.06l6.768-6.004 6.767 6.004v7.507h-7.921v-5.915a.702.702 0 0 0-.702-.702ZM7.496 5.278a3.843 3.843 0 0 1 3.839-3.838 3.843 3.843 0 0 1 3.838 3.838v2.387l-.082-.072a.702.702 0 0 0-.931 0L12 9.508V5.777a.702.702 0 0 0-1.403 0v2.139l-.468-.473a.702.702 0 0 0-.997.988l1.465 1.48v.842l-2.225 1.973a4.818 4.818 0 0 1-.54-.836 9.672 9.672 0 0 0-.337-1.731v-4.88ZM2.313 16.73c-.557-1.105-.864-2.591-.864-4.183 0-2.364 1.62-5.22 2.507-6.605.63.983 1.629 2.707 2.155 4.472a.69.69 0 0 0 .025.082c.2.693.326 1.39.326 2.05 0 .707-.06 1.393-.177 2.033l-.751.667a.702.702 0 0 0 .207 1.177 6.128 6.128 0 0 1-.143.307c-.474.94-1.073 1.478-1.643 1.478-.57 0-1.168-.538-1.642-1.478Zm2.344 2.776c.67-.204 1.285-.704 1.797-1.464v4.526H4.657v-3.062Z"
      fill="currentColor"
    />
    <Path
      d="M15.677 20.745h3.616a.702.702 0 0 0 .701-.701v-3.392a.702.702 0 0 0-.701-.702h-3.616a.702.702 0 0 0-.702.702v3.392c0 .387.315.701.702.701Zm.702-3.391h2.212v1.988h-2.212v-1.988Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconCategHome;
