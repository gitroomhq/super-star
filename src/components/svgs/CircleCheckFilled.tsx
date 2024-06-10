import React from "react";
interface Props {
  width?: number | string;
  height?: number | string;
}

const CircleCheckFilledSvg: React.FC<Props> = ({
  width = "100%",
  height = "100%",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99935 1.66663C5.40768 1.66663 1.66602 5.40829 1.66602 9.99996C1.66602 14.5916 5.40768 18.3333 9.99935 18.3333C14.591 18.3333 18.3327 14.5916 18.3327 9.99996C18.3327 5.40829 14.591 1.66663 9.99935 1.66663ZM13.9827 8.08329L9.25768 12.8083C9.14102 12.925 8.98268 12.9916 8.81602 12.9916C8.64935 12.9916 8.49102 12.925 8.37435 12.8083L6.01602 10.45C5.77435 10.2083 5.77435 9.80829 6.01602 9.56663C6.25768 9.32496 6.65768 9.32496 6.89935 9.56663L8.81602 11.4833L13.0993 7.19996C13.341 6.95829 13.741 6.95829 13.9827 7.19996C14.2243 7.44163 14.2243 7.83329 13.9827 8.08329Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CircleCheckFilledSvg;
