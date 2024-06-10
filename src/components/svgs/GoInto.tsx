import React from "react";
interface Props {
  width?: number | string;
  height?: number | string;
}

const GoIntoSvg: React.FC<Props> = ({
  width = "100%",
  height = "100%",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 7.79102L17.5 2.79102M17.5 2.79102H12.5M17.5 2.79102L10 10.291M8.33333 2.79102H6.5C5.09987 2.79102 4.3998 2.79102 3.86502 3.0635C3.39462 3.30318 3.01217 3.68563 2.77248 4.15604C2.5 4.69082 2.5 5.39088 2.5 6.79102V13.791C2.5 15.1911 2.5 15.8912 2.77248 16.426C3.01217 16.8964 3.39462 17.2788 3.86502 17.5185C4.3998 17.791 5.09987 17.791 6.5 17.791H13.5C14.9001 17.791 15.6002 17.791 16.135 17.5185C16.6054 17.2788 16.9878 16.8964 17.2275 16.426C17.5 15.8912 17.5 15.1911 17.5 13.791V11.9577"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GoIntoSvg;
