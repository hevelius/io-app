import React from "react";
import { Svg, Path } from "react-native-svg";

import { SVGPictogramProps } from "../Pictogram";

const EmailValidation = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 120 120" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.066 87.421a2.32 2.32 0 0 0-2.324 2.314 2.32 2.32 0 0 0 2.324 2.315 2.32 2.32 0 0 0 2.325-2.314 2.32 2.32 0 0 0-2.325-2.315Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M78.105 36.512C79.265 26.114 88.145 18 98.895 18c11.534 0 20.919 9.343 20.919 20.826 0 10.702-8.15 19.542-18.595 20.698v34.84c0 3.825-3.123 6.942-6.973 6.942H7.779c-3.879 0-6.973-3.145-6.973-6.942v-50.91c0-3.854 3.15-6.942 6.973-6.942h70.326Zm-41.32 31.224L5.456 43.583v50.39l31.33-26.237Zm3.76 2.899 6.127 4.72a6.966 6.966 0 0 0 4.34 1.523 6.97 6.97 0 0 0 4.333-1.516l6.922-5.258 31.458 26.574H9.445l31.1-26.043Zm43.539-17.113L66.049 67.23 96.57 93.01V59.525a20.823 20.823 0 0 1-12.486-6.002ZM52.506 71.698a.467.467 0 0 0-.017.013l-.027.02c-.854.68-2.046.68-2.9 0l-.03-.023C49.5 71.683 9.904 41.158 9.879 41.14H78.11a20.827 20.827 0 0 0 3.08 8.759L52.506 71.698Zm33.688-22.761a16.23 16.23 0 0 0 12.7 6.088c8.972 0 16.271-7.267 16.271-16.199 0-8.931-7.299-16.198-16.27-16.198-8.972 0-16.271 7.267-16.271 16.198 0 3.718 1.235 7.214 3.57 10.11Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m106.549 32.562-9.979 9.934-5.33-5.306a2.33 2.33 0 0 0-3.286 0 2.306 2.306 0 0 0 0 3.273l6.973 6.942a2.331 2.331 0 0 0 3.287 0l11.622-11.57a2.306 2.306 0 0 0 0-3.273 2.331 2.331 0 0 0-3.287 0ZM66.353 87.421h-19.99a2.319 2.319 0 0 0-2.324 2.314 2.319 2.319 0 0 0 2.325 2.315h19.99a2.32 2.32 0 0 0 2.324-2.314 2.319 2.319 0 0 0-2.325-2.315Z"
      fill={color}
    />
  </Svg>
);

export default EmailValidation;
