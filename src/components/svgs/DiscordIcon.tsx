import React from "react";
interface Props {
  width?: number | string;
  height?: number | string;
}

const DiscordIconSvg: React.FC<Props> = ({
  width = "100%",
  height = "100%",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5275 2.73544C19.8762 1.45542 17.8945 0.815445 15.8028 0.708771L15.4725 1.02879C17.344 1.45542 18.9954 2.30874 20.5367 3.48209C18.6651 2.52209 16.5734 1.88212 14.3715 1.66877C13.711 1.56209 13.1605 1.56209 12.5 1.56209C11.8395 1.56209 11.289 1.56209 10.6285 1.66877C8.4266 1.88212 6.33485 2.52209 4.4633 3.48209C6.00455 2.30874 7.65597 1.45542 9.52752 1.02879L9.19723 0.708771C7.10547 0.815445 5.12383 1.45542 3.47247 2.73544C1.60092 6.1488 0.610092 9.98879 0.5 13.9354C2.15135 15.6421 4.4633 16.7088 6.88535 16.7088C6.88535 16.7088 7.65597 15.8554 8.2064 15.1087C6.77525 14.7888 5.45412 14.0421 4.5734 12.8688C5.34403 13.2954 6.11465 13.7221 6.88535 14.0421C7.87617 14.4688 8.867 14.6821 9.85783 14.8955C10.7386 15.0021 11.6193 15.1087 12.5 15.1087C13.3807 15.1087 14.2614 15.0021 15.1422 14.8955C16.133 14.6821 17.1238 14.4688 18.1147 14.0421C18.8854 13.7221 19.656 13.2954 20.4266 12.8688C19.5459 14.0421 18.2248 14.7888 16.7936 15.1087C17.344 15.8554 18.1147 16.7088 18.1147 16.7088C20.5367 16.7088 22.8486 15.6421 24.5 13.9354C24.3899 9.98879 23.3991 6.1488 21.5275 2.73544ZM8.867 12.0154C7.76608 12.0154 6.77525 11.0554 6.77525 9.88212C6.77525 8.70877 7.76608 7.74877 8.867 7.74877C9.96793 7.74877 10.9587 8.70877 10.9587 9.88212C10.9587 11.0554 9.96793 12.0154 8.867 12.0154ZM16.133 12.0154C15.0321 12.0154 14.0413 11.0554 14.0413 9.88212C14.0413 8.70877 15.0321 7.74877 16.133 7.74877C17.2339 7.74877 18.2248 8.70877 18.2248 9.88212C18.2248 11.0554 17.2339 12.0154 16.133 12.0154Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DiscordIconSvg;
