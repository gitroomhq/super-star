
import React from "react";
interface Props {
  width?: number | string;
  height?: number | string;
}

const ChevDownSvg: React.FC<Props> = ({
  width = "100%",
  height = "100%",
}: Props) => {
  return (
  <svg width={width} height={height} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8906 6.82422L9.5264 11.1884L5.16223 6.82422" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  );
};

export default ChevDownSvg;

