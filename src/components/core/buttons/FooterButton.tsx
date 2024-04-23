import React from "react";
import clsx from "clsx";

const FooterButton = ({
  onClick,
  children,
}: {
  onClick: Function;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "w-[40px] md:w-[44px] h-[40px] md:h-[44px]",
        "rounded-[8px]",
        "flex justify-center items-center",
        "border-[1px] border-[#bab9ff33]"
      )}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

export default FooterButton;
