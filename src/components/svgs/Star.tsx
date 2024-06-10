import React from "react";
interface Props {
  width?: number | string;
  height?: number | string;
}

const StarSvg: React.FC<Props> = ({
  width = "100%",
  height = "100%",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2367_147922)">
        <path
          d="M17 10.291L18.5716 15.1279H23.6574L19.5429 18.1173L21.1145 22.9541L17 19.9648L12.8855 22.9541L14.4571 18.1173L10.3426 15.1279H15.4284L17 10.291Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2367_147922"
          x="0.341797"
          y="0.291016"
          width="33.3164"
          height="32.6641"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.274772 0 0 0 0 0.434322 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2367_147922"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2367_147922"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default StarSvg;
