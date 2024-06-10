import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  iconSrc: string;
  width: number;
  height: number;
  hasGradient?: boolean;
  gradientColor?: string;
  alt?: string;
  className?: string;
  transparent?: number;
  opacity?: number;
}

const IconContainer: React.FC<Props> = ({
  iconSrc,
  width,
  height,
  hasGradient = false,
  gradientColor = "",
  alt = "",
  className = "",
  transparent = 40,
  opacity = 30,
}) => {
  return (
    <div className={clsx(className, "relative")}>
      {hasGradient && (
        <div
          className={clsx(
            "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
            `absolute w-[200px] h-[200px] z-[1] opacity-${opacity}`
          )}
          style={{
            background: `radial-gradient(circle at 50%, ${gradientColor}, transparent ${transparent}%)`,
          }}
        />
      )}
      <Image
        src={iconSrc}
        width={width}
        height={height}
        alt={alt}
        className="w-full h-full z-[2] relative"
      />
    </div>
  );
};

export default IconContainer;
