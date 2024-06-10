import React from "react";
interface Props {
  width?: number | string;
  height?: number | string;
}

const ChevLeftSvg: React.FC<Props> = ({
  width = "100%",
  height = "100%",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 11L1.5 6L6.5 1"
        stroke="currentColor"
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevLeftSvg;
