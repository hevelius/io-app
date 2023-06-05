import React from "react";
import Svg, { Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramUmbrellaNew = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M107.085-.00176c8.154 4.82452 16.613 7.64993 26.423 5.57086.846 1.7059 1.647 3.27854 2.412 4.8689 4.086 8.5651 9.458 16.0907 17.405 21.6793 6.048 4.2559 12.878 6.2728 20.51 7.339 1.008 3.6517 1.818 7.3922 3.078 10.9817 5.993 17.0858 17.144 29.2581 34.774 35.1577.855.2844 1.656.7197 2.835 1.2439-.702 18.9514 6.857 33.6914 23.786 43.3314-2.637 8.77-2.979 17.193 1.701 25.438-4.617 2.275-9.333 1.342-13.779 1.253-24.344-.462-47.364-6.095-68.225-18.792-25.352-15.424-44.395-36.455-55.222-64.0336-9.3681-23.8471-8.1172-47.641 2.457-70.95509.432-.95957 1.089-1.82141 1.863-3.10084l-.018.01777Z"
      fill="#AAEEEF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M109.854 11.4438c.308-.7527 1.174-1.1168 1.936-.8134 5.193 2.0678 10.161 3.0476 15.22 3.0476.402 0 .773-.0003 1.13-.0163.594-.0266 1.147.2986 1.406.8271 5.076 10.3451 11.441 18.072 19.412 23.6721 5.074 3.5598 10.843 6.0292 17.921 7.5916.544.12.974.5301 1.115 1.0626.528 1.9974 1.092 4.0131 1.81 6.0443l.001.0035c6.628 18.908 18.825 31.837 36.306 38.6155.542.2103.91.7141.942 1.2888.921 16.9038 8.391 30.6088 21.912 40.2658.666.475.815 1.394.334 2.051-.482.658-1.412.806-2.077.33-14.018-10.012-21.89-24.212-23.082-41.5496-17.882-7.2088-30.368-20.7035-37.146-40.0383-.65-1.8408-1.176-3.6538-1.649-5.407-7.018-1.6462-12.891-4.2005-18.11-7.8623l-.001-.0006c-8.22-5.7753-14.755-13.644-19.945-23.9397-.09.0003-.178.0003-.264.0003h-.015c-5.47 0-10.815-1.0638-16.332-3.2608-.762-.3034-1.131-1.1596-.824-1.9122Z"
      fill="#00C5CA"
    />
    <Path
      d="M30.7695 235.468c-6.1197-6.042-6.1197-15.869 0-21.911l17.2971-17.077 3.8158 3.768-17.2971 17.077c-4.0138 3.962-4.0138 10.413 0 14.375 4.0138 3.963 10.5474 3.963 14.5612 0l3.8158 3.768c-6.1196 6.041-16.0731 6.041-22.1928 0ZM128.876 111.262l-32.2061 31.797 3.8181 3.769 32.207-31.796-3.819-3.77Z"
      fill="#AAEEEF"
    />
    <Path
      d="M3.29384 203.162 0 200.523c7.29864-8.876 71.8704-86.54 93.2353-79.565 5.8317 1.901 9.3057 4.949 10.3407 9.045 2.232 8.894-8.2168 19.636-13.2385 24.798l-.9.924-3.0778-2.888.9089-.942c4.1488-4.264 13.8504-14.242 12.1764-20.888-.6569-2.612-3.1948-4.656-7.5506-6.068-7.7126-2.515-37.6721 16.232-88.60056 78.223Z"
      fill="#0B3EE3"
    />
    <Path
      d="M92.4699 174.411c-9.5755 2.506-18.6921-2.95-22.8319-7.881-3.3478-3.989-2.8888-9.889 1.062-13.434 4.5627-4.096 12.5813-5.091 21.4009 4.389l-3.1228 2.835c-5.7057-6.131-11.4565-7.677-15.4163-4.123-2.2589 2.035-2.5468 5.393-.6479 7.659 4.0588 4.833 13.9133 10.324 23.1378 4.442 2.7899-1.777 4.3733-4.016 4.8413-6.85 1.251-7.623-6.0472-16.721-6.1192-16.81l3.3028-2.63c.351.426 8.5584 10.617 7.0104 20.089-.657 4.016-2.916 7.285-6.7314 9.72-1.9439 1.244-3.9148 2.079-5.8677 2.594h-.018Z"
      fill="#0B3EE3"
    />
    <Path
      d="M79.0336 194.02c-5.1568 1.351-10.0885.48-14.4803-2.612-4.3558-3.065-6.5517-6.726-6.5337-10.884.036-9.125 11.1415-16.935 11.6185-17.254l2.4388 3.429c-2.7178 1.893-9.7915 8.077-9.8095 13.852 0 2.754 1.548 5.189 4.7518 7.445 4.4638 3.137 9.5305 3.252 15.0742.329 8.7116-4.602 15.0563-15.06 14.9123-19.591l4.2383-.134c.207 6.531-7.2442 18.179-17.1527 23.412-1.7009.898-3.3928 1.564-5.0667 2.008h.009Z"
      fill="#0B3EE3"
    />
    <Path
      d="M67.0458 207.463c-8.3696 2.185-15.1102-.391-19.169-7.437-3.1769-5.517-3.7979-10.422-1.827-14.571 3.4469-7.268 13.5624-9.125 13.9853-9.205l.747 4.123c-.072.008-8.3876 1.563-10.8894 6.868-1.35 2.843-.783 6.45 1.6739 10.715 3.5278 6.122 9.0985 7.632 17.0181 4.611 6.0477-2.301 11.3664-6.655 15.3892-12.581l3.6359-5.357 3.5278 2.327-3.6358 5.367c-4.5088 6.646-10.5205 11.541-17.3872 14.154-1.0439.399-2.0699.728-3.0688.986Z"
      fill="#0B3EE3"
    />
    <Path
      d="m53.3313 224.754-3.0598-2.905c22.9668-23.501 15.4252-17.495 15.6232-17.832l3.6808 2.079c-.189.337 7.0917-5.225-16.2442 18.658Z"
      fill="#0B3EE3"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M93.3641 80.6211c.542.6099.4808 1.5383-.1366 2.0737L59.0022 112.37c-.6174.536-1.5573.475-2.0993-.134-.542-.61-.4809-1.539.1365-2.074l34.2253-29.6758c.6175-.5353 1.5574-.4749 2.0994.1349ZM145.714 157.555c.542.61.481 1.538-.137 2.073l-34.225 29.676c-.618.535-1.558.475-2.1-.135s-.48-1.538.137-2.073l34.225-29.676c.618-.536 1.558-.475 2.1.135Z"
      fill="#00C5CA"
    />
  </Svg>
);

export default PictogramUmbrellaNew;
