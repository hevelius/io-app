import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramUmbrella = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 120 120" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.996 45.594H1.999C.896 45.594 0 46.485 0 47.587s.896 1.992 1.999 1.992h5.997c6.819 0 12.16-5.158 12.16-11.745v-2.158c0-5.11-3.678-9.385-8.554-9.94a9.85 9.85 0 0 0-3.964.342C2.338 27.63-.706 33.191.854 38.473a1.992 1.992 0 0 0 2.482 1.35A1.989 1.989 0 0 0 4.69 37.35c-.936-3.174.891-6.518 4.076-7.45a6.017 6.017 0 0 1 2.38-.207c2.811.32 5.012 2.948 5.012 5.983v2.158c0 4.425-3.508 7.76-8.162 7.76ZM116.587 75.202a1.999 1.999 0 1 1 2.827 2.827l-2.827 2.818c-9.439 9.408-21.989 14.589-35.338 14.589-12.586 0-24.458-4.609-33.685-13.02a.884.884 0 0 0-.1-.062c-.05-.028-.098-.055-.14-.096L32.436 97.096l2.826 2.817-9.895 9.863a13.927 13.927 0 0 1-9.895 4.08c-3.74 0-7.256-1.45-9.895-4.08A13.993 13.993 0 0 1 1.93 96.414a5.984 5.984 0 0 1 4.264-4.32 5.931 5.931 0 0 1 5.805 1.537c1.555 1.55 2.153 3.736 1.563 5.702a1.994 1.994 0 0 0 .5 1.989c.78.779 2.047.775 2.826 0l9.895-9.863 2.827 2.817 2.203-2.195-1.413-1.41a1.986 1.986 0 0 1 0-2.817 2.001 2.001 0 0 1 2.826 0l1.416 1.41 9.859-9.83c-.041-.04-.068-.088-.096-.136a.897.897 0 0 0-.058-.095c-8.444-9.197-13.07-21.032-13.07-33.58 0-13.306 5.198-25.813 14.637-35.221l2.828-2.818a2.001 2.001 0 0 1 2.827 0c.782.78.782 2.039 0 2.818l-2.283 2.273c-.22 4.108 1.068 7.787 3.696 10.407 2.629 2.618 6.325 3.91 10.439 3.682l2.28-2.274a2.002 2.002 0 0 1 2.828 0c.781.78.781 2.039 0 2.818l-2.281 2.273c-.22 4.109 1.067 7.787 3.696 10.407 2.774 2.763 6.732 4.064 11.12 3.65a.152.152 0 0 1 .05.005c.01.002.02.004.029.004l.01.001h.007c.062-.002.12-.002.182 0 .016 0 .03-.002.046-.005a.152.152 0 0 1 .05-.005c.04.003.076.017.113.032a.518.518 0 0 0 .087.028l.084.014c.075.013.15.025.222.051.035.013.068.03.101.047l.027.013.02.01c.077.035.146.08.216.125l.028.019.015.01c.09.057.177.113.256.187.009.007.018.012.027.017.011.005.022.011.031.02.012.013.02.027.027.04a.184.184 0 0 0 .023.036c.052.057.093.118.136.18l.026.04.006.008c.062.089.122.174.168.274.026.054.05.104.07.16.022.06.032.123.043.187.005.03.01.061.017.092.007.03.017.057.028.085.015.039.03.078.034.122a.16.16 0 0 1-.005.044l-.004.021v.009l-.001.016c.004.064.004.125 0 .189-.001.015.002.029.005.044.003.014.006.03.005.046-.412 4.383.89 8.32 3.664 11.086 2.629 2.618 6.321 3.905 10.439 3.682l2.28-2.276a2.003 2.003 0 0 1 2.829 0c.78.777.78 2.039 0 2.818l-2.283 2.275c-.22 4.108 1.068 7.785 3.695 10.405 2.628 2.618 6.322 3.91 10.44 3.682l2.281-2.274ZM15.474 109.863a9.95 9.95 0 0 0 7.069-2.913l7.064-7.045-2.828-2.817-7.069 7.045a6.017 6.017 0 0 1-8.48 0 5.962 5.962 0 0 1-1.499-5.952c.166-.55-.056-1.233-.562-1.739a1.908 1.908 0 0 0-1.379-.582c-.23 0-.422.038-.544.072a2.028 2.028 0 0 0-1.445 1.47 9.994 9.994 0 0 0 2.605 9.548 9.953 9.953 0 0 0 7.068 2.913Zm68.604-50.156c2.506 2.499 5.715 4.07 9.3 4.64-15.341 13.743-32.877 19.62-42.737 14.595l28.763-28.667c.552 3.638 2.129 6.896 4.674 9.432Zm-7.505-12.246c-3.65-.55-6.914-2.128-9.457-4.662-2.51-2.5-4.078-5.702-4.65-9.28-13.794 15.293-19.692 32.775-14.652 42.606l28.76-28.664ZM45.531 16.77c.594 3.512 2.151 6.658 4.622 9.123 2.578 2.57 5.899 4.156 9.61 4.682-12 13.168-18.326 27.775-17.656 39.015-4.424-7.147-6.835-15.368-6.835-23.976.002-10.631 3.618-20.705 10.259-28.844Zm11.721 67.893h-.005a45.788 45.788 0 0 0 24.004 6.78c10.66 0 20.764-3.602 28.925-10.213-3.522-.592-6.668-2.158-9.137-4.619-2.579-2.57-4.166-5.88-4.696-9.578-12.581 11.387-26.488 17.69-37.525 17.69-.532 0-1.047-.03-1.566-.06Z"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.999 65.519h15.992c1.103 0 1.999-.89 1.999-1.992a1.995 1.995 0 0 0-2-1.993H2c-1.103 0-1.999.89-1.999 1.993 0 1.101.896 1.992 1.999 1.992ZM1.999 57.593h5.953c9.455 0 20.034-7.687 20.034-17.976a1.995 1.995 0 0 0-2-1.992c-1.102 0-1.998.89-1.998 1.992 0 7.88-8.622 13.991-16.036 13.991H1.999c-1.103 0-1.999.89-1.999 1.993 0 1.101.896 1.992 1.999 1.992ZM7.952 73.489c1.103 0 1.999-.89 1.999-1.993a1.995 1.995 0 0 0-1.999-1.992H1.999c-1.103 0-1.999.89-1.999 1.992 0 1.102.896 1.993 1.999 1.993h5.953Z"
    />
  </Svg>
);

export default PictogramUmbrella;
