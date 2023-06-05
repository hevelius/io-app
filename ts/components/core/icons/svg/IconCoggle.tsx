import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconCoggle = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m21.4821 15.175.0019.0047c-.4302 1.2836-1.1141 2.452-1.9932 3.4452l-.0055.0009c-.046.0066-.131.0032-.2359-.0313-1.042-.3427-2.224-.2575-3.2508.3354-1.0272.593-1.6921 1.5744-1.916 2.6486-.0226.1083-.0623.1838-.0909.2202l-.0032.004c-.6419.1294-1.3069.1975-1.9888.1975-.6827 0-1.3484-.0682-1.9911-.198l-.0032-.0039c-.0286-.0365-.06825-.1119-.09083-.2201-.22404-1.0741-.88889-2.0554-1.91596-2.6483-1.0263-.5926-2.20756-.678-3.24919-.3359-.10486.0344-.18988.0378-.23584.0312l-.00546-.0009c-.87903-.9933-1.56294-2.1618-1.99294-3.4455l.00181-.0047c.01726-.043.06273-.1149.14513-.1885.81895-.7311 1.33691-1.798 1.33691-2.9846.00001-1.1868-.51811-2.25392-1.33727-2.98502-.0824-.07355-.12788-.14547-.14514-.18845l-.00182-.0047c.42973-1.28339 1.11323-2.45168 1.99178-3.44493l.00547-.00086c.04601-.00659.13111-.00321.23602.03129 1.04196.34264 2.2238.25737 3.25054-.33542 1.02775-.59337 1.6928-1.57555 1.91641-2.65045.02253-.10832.06218-.18381.09088-.22032l.0032-.00395c.6425-.12971 1.3081-.19795 1.9906-.19795.6817 0 1.3466.06808 1.9884.19748l.0031.00395c.0287.03653.0684.11207.0909.22042.2236 1.07505.8887 2.05738 1.9165 2.65082 1.0273.59309 2.2098.67815 3.2521.3349.105-.03455.1901-.03797.2361-.03138l.0055.00086c.8786.99315 1.5622 2.16132 1.992 3.44463l-.0018.0047c-.0173.04302-.0628.11497-.1453.18853-.8197.73112-1.3382 1.79855-1.3382 2.98585 0 1.187.5184 2.2543 1.3379 2.9855.0824.0735.128.1455.1452.1885Zm-.5185 4.8035c1.0737-1.2056 1.9085-2.6303 2.4288-4.1996.3285-.9908-.2322-1.846-.7241-2.2848-.4121-.3677-.6693-.8998-.6693-1.4931 0-.5935.2573-1.1256.6695-1.4933.4919-.4388 1.0527-1.29392.7243-2.28479-.5199-1.56892-1.3542-2.99331-2.4274-4.19884-.6936-.77909-1.7138-.72221-2.3402-.51591-.5243.17263-1.1131.12916-1.6266-.16731-.5138-.29663-.8459-.78522-.9583-1.32591-.1344-.646-.5956-1.5603-1.6195-1.77016-.7828-.16044-1.5927-.24454-2.4211-.24454-.8294 0-1.6401.0843-2.4238.24511C8.55239.45538 8.09129 1.3693 7.95694 2.01512c-.11247.54062-.44459 1.02913-.95833 1.32574-.51324.29632-1.10172.33989-1.62576.16756-.6264-.20599-1.64621-.26249-2.33947.51639C1.96026 5.23046 1.12602 6.65497.60624 8.22399c-.32813.99048.23214 1.84531.72378 2.28411.41199.3677.66901.8996.66901 1.4929 0 .5931-.25694 1.125-.66883 1.4927-.4916.4388-1.05176 1.2937-.72351 2.2842.52011 1.5693 1.35484 2.9941 2.42853 4.1999.69302.7782 1.71212.722 2.3383.5163.52388-.172 1.11207-.1284 1.62509.1678.51341.2964.84542.7845.9581 1.3247.13464.6454.59583 1.5585 1.61869 1.7684.7838.1609 1.5947.2452 2.4243.2452.8286 0 1.6386-.0841 2.4216-.2446 1.0232-.2098 1.4846-1.1232 1.6192-1.7688.1126-.5403.4447-1.0284.9581-1.3249.5133-.2963 1.1018-.3399 1.6259-.1675.6262.206 1.6457.2625 2.3391-.5159ZM8.99997 12c0-1.6569 1.34313-3.00005 3.00003-3.00005 1.6568 0 3 1.34315 3 3.00005 0 1.6568-1.3432 3-3 3-1.6569 0-3.00003-1.3432-3.00003-3ZM12 6.99995c-2.76145 0-5.00003 2.23858-5.00003 5.00005 0 2.7614 2.23858 5 5.00003 5 2.7614 0 5-2.2386 5-5 0-2.76147-2.2386-5.00005-5-5.00005Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconCoggle;
