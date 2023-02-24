import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconHourglass = ({ size, style }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      d="M12.451 12.012a.705.705 0 1 0-1.41 0 .705.705 0 0 0 1.41 0ZM12.451 14.217a.705.705 0 1 0-1.41 0 .705.705 0 0 0 1.41 0Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.79 20.509h-.771c-.151-4.497-1.75-6.032-2.826-7.065-.626-.6-.903-.89-.903-1.44 0-.56 0-.899 1.046-1.872 1.08-1.004 2.539-2.362 2.683-6.64h.716a.703.703 0 0 0 .703-.704V.703A.703.703 0 0 0 19.735 0H3.758a.703.703 0 0 0-.703.703v2.085c0 .389.315.703.703.703h.716c.144 4.279 1.603 5.637 2.683 6.641.652.607 1.046.973 1.046 1.872 0 .446-.26.715-.844 1.28-1.1 1.061-2.733 2.64-2.885 7.225h-.77a.703.703 0 0 0-.704.703v2.085c0 .388.315.703.703.703H19.79a.703.703 0 0 0 .704-.703v-2.085a.703.703 0 0 0-.703-.703ZM4.46 1.406h14.57v.68H4.461v-.68Zm3.875 12.89c-.986.95-2.315 2.235-2.455 6.213h.015l5.381-4.82a.703.703 0 0 1 .939 0l5.38 4.82h.016c-.133-3.882-1.38-5.078-2.393-6.05-.656-.63-1.335-1.282-1.335-2.455 0-1.511.76-2.218 1.494-2.901.522-.486 1.062-.988 1.486-1.88.446-.942.693-2.167.748-3.732H5.881c.055 1.565.301 2.79.748 3.731.424.893.964 1.395 1.486 1.88.734.684 1.494 1.39 1.494 2.902 0 1.061-.648 1.687-1.273 2.291Zm-.332 6.213 3.742-3.353 3.743 3.353H8.004Zm-3.598 2.085h14.68v-.679H4.406v.679Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3 9.904c-.31.574-.905.93-1.554.93a1.765 1.765 0 0 1-1.553-.93c-.377-.699-.911-1.195-1.34-1.594l-.002-.002c-.487-.453-.908-.845-1.243-1.55A5.92 5.92 0 0 1 7.18 5.42a.703.703 0 0 1 .689-.844h7.755a.703.703 0 0 1 .688.844c-.105.511-.248.961-.428 1.338-.335.706-.756 1.097-1.244 1.551-.429.4-.963.896-1.34 1.595ZM8.803 5.982c.024.06.05.118.076.173.22.462.487.712.932 1.125.478.444 1.132 1.053 1.62 1.956a.36.36 0 0 0 .315.192.36.36 0 0 0 .316-.192c.488-.902 1.142-1.512 1.62-1.956.444-.413.713-.663.932-1.125a3.06 3.06 0 0 0 .076-.173H8.803Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconHourglass;
