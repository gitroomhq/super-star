import React from "react";
import clsx from "clsx";

interface Props {
  customClasses: string;
  children: React.ReactNode | React.ReactNode[];
}

const TextButton: React.FC<Props> = ({
  customClasses,
  children,
  ...props
}: Props) => {
  return (
    <div
      className={clsx(
        "flex items-center",
        "font-matter text-[rgba(138,171,255,1)]",
        "text-base font-[500] leading-[21.6px]",
        "md:text-lg md:leading-[19.2px]",
        "hover:text-[rgba(212,224,255,1)]",
        "transition-all cursor-pointer",
        customClasses
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default TextButton;
