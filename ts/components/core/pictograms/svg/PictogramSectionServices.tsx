import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramSectionServices = ({
  size,
  color,
  ...props
}: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 48 48" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48 36.214v-5.848l-2.887-.74a12.384 12.384 0 0 0-.87-2.109l1.516-2.562-4.134-4.135-2.562 1.518a12.322 12.322 0 0 0-2.11-.872l-.74-2.885h-5.847l-.74 2.887c-.73.226-1.438.517-2.108.871l-2.563-1.518-.18.183V18.58h-2.323a2.33 2.33 0 0 1-1.72-.762 2.303 2.303 0 0 1-.592-1.791c.112-1.173 1.186-2.093 2.445-2.093h2.19V6.968a2.325 2.325 0 0 0-2.323-2.323h-6.194v-.641c0-2.049-1.534-3.8-3.493-3.986a3.876 3.876 0 0 0-2.981.988 3.88 3.88 0 0 0-1.268 2.865v.774H2.323A2.325 2.325 0 0 0 0 6.968v6.967h2.19c1.258 0 2.332.92 2.444 2.092a2.328 2.328 0 0 1-2.312 2.554H0v6.967a2.326 2.326 0 0 0 2.323 2.323h7.742v-2.19c0-1.258.918-2.333 2.091-2.445a2.324 2.324 0 0 1 2.553 2.312v2.323h7.465c-.276.566-.519 1.15-.706 1.756l-2.887.74v5.847l2.887.74c.226.731.517 1.438.87 2.11l-1.517 2.561 4.134 4.135 2.563-1.518c.67.354 1.377.646 2.109.872l.74 2.886h5.847l.74-2.887a12.306 12.306 0 0 0 2.109-.872l2.562 1.518 4.134-4.135-1.517-2.562c.354-.67.645-1.377.871-2.109l2.887-.74Zm-33.01-13.53a3.87 3.87 0 0 0-2.98-.988c-1.96.186-3.494 1.937-3.494 3.985v.642H2.323a.775.775 0 0 1-.775-.775V20.13h.775a3.882 3.882 0 0 0 2.865-1.268 3.889 3.889 0 0 0 .988-2.981c-.188-1.959-1.938-3.493-3.986-3.493h-.642v-5.42c0-.427.348-.774.775-.774h7.742V3.871a2.322 2.322 0 0 1 2.553-2.313c1.173.112 2.092 1.187 2.092 2.446v2.19h7.742c.426 0 .774.346.774.774v5.419h-.641c-2.049 0-3.8 1.534-3.987 3.494a3.893 3.893 0 0 0 .988 2.98 3.884 3.884 0 0 0 2.866 1.268h.774v2.423l-2.404 2.404.809 1.367h-5.373v-.775a3.88 3.88 0 0 0-1.267-2.864ZM43.745 36.11l.118-.436 2.59-.664v-3.443l-2.59-.662-.118-.437a10.733 10.733 0 0 0-1.065-2.577l-.226-.393 1.36-2.298-2.434-2.435-2.298 1.361-.391-.226c-.803-.462-1.67-.82-2.58-1.065l-.436-.117-.663-2.59h-3.443l-.662 2.59-.436.118c-.909.245-1.777.603-2.579 1.065l-.392.226-2.298-1.361-2.434 2.435 1.36 2.298-.225.392c-.463.802-.821 1.669-1.066 2.578l-.117.437-2.59.662v3.443l2.59.663.117.436c.245.91.603 1.777 1.066 2.578l.226.392-1.361 2.298 2.434 2.436 2.298-1.362.392.226c.803.462 1.67.82 2.579 1.065l.437.118.662 2.59h3.443l.662-2.59.437-.118a10.801 10.801 0 0 0 2.579-1.065l.391-.226 2.298 1.361 2.435-2.435-1.361-2.298.226-.393c.462-.8.82-1.668 1.065-2.577Z"
      fill={color}
    />
    <Path
      d="M33.29 27.097a6.2 6.2 0 0 0-6.193 6.193 6.2 6.2 0 0 0 6.193 6.194 6.137 6.137 0 0 0 3.716-1.247L36.076 37a4.606 4.606 0 0 1-2.786.935 4.65 4.65 0 0 1-4.645-4.645 4.65 4.65 0 0 1 4.645-4.645 4.65 4.65 0 0 1 4.645 4.645A4.602 4.602 0 0 1 37 36.076l1.238.93a6.146 6.146 0 0 0 1.246-3.716 6.2 6.2 0 0 0-6.194-6.193Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 33.29c0-5.123 4.167-9.29 9.29-9.29 5.123 0 9.29 4.167 9.29 9.29 0 5.123-4.167 9.29-9.29 9.29-5.123 0-9.29-4.167-9.29-9.29Zm1.548 0c0 4.269 3.473 7.742 7.742 7.742 4.27 0 7.742-3.473 7.742-7.742s-3.473-7.742-7.742-7.742-7.742 3.473-7.742 7.742Z"
      fill={color}
    />
    <Path
      d="M39.484 4.645h1.548v1.548h-1.548V4.645ZM39.484 7.742h1.548V9.29h-1.548V7.742ZM41.032 6.193h1.549v1.549h-1.549V6.193ZM37.935 6.193h1.549v1.549h-1.549V6.193ZM31.742 10.839h1.548v1.548h-1.548v-1.548ZM31.742 13.935h1.548v1.549h-1.548v-1.549ZM33.29 12.387h1.549v1.548H33.29v-1.548ZM30.194 12.387h1.548v1.548h-1.549v-1.548ZM42.58 13.935h1.549v1.549h-1.548v-1.549ZM42.58 17.032h1.549v1.549h-1.548v-1.549ZM44.129 15.484h1.548v1.548H44.13v-1.548ZM41.032 15.484h1.549v1.548h-1.549v-1.548ZM27.871 1.548h1.548v1.549h-1.548V1.548ZM27.871 4.645h1.548v1.548h-1.548V4.645ZM29.42 3.097h1.548v1.548h-1.549V3.097ZM26.323 3.097h1.548v1.548h-1.548V3.097ZM13.161 35.613h1.549v1.548H13.16v-1.548ZM13.161 38.71h1.549v1.548H13.16V38.71ZM14.71 37.161h1.548v1.549H14.71V37.16Z"
      fill={color}
    />
    <Path
      d="M11.613 37.161h1.548v1.549h-1.548V37.16ZM5.42 30.968h1.548v1.548H5.419v-1.548ZM5.42 34.065h1.548v1.548H5.419v-1.548ZM6.968 32.516h1.548v1.549H6.968v-1.549ZM3.871 32.516h1.548v1.549H3.871v-1.549Z"
      fill={color}
    />
  </Svg>
);

export default PictogramSectionServices;
