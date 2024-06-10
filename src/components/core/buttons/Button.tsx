import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props
  extends Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    "variant" | "customClasses" | "variant" | "href" | "disalbed"
  > {
  variant?: "primary-white" | "secondary-white";
  customClasses?: string | object;
  href?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  variant = "primary-white",
  customClasses = "",
  children,
  disabled = false,
  ...props
}: Props) => {
  let variantClass = styles.btnPrimaryWhite;
  if (variant === "secondary-white") {
    variantClass = styles.btnSecondaryWhite;
  }

  if (variant === "primary-white") {
    return (
      <div
        className={clsx(
          styles.btn,
          "font-matter",
          styles.btnPrimaryWhite,
          customClasses,
          "p-[1px]"
        )}
        {...props}
      >
        <div className={styles.content}>{children}</div>
      </div>
    );
  }

  return (
    // <div
    //   className={clsx(
    //     styles.btn,
    //     "font-matter",
    //     "p-[1px] bg-gradient-to-t from-[#FFFFFF10] to-[#FFFFFF50] hover:from-[#BAB9FF10] hover:to-[#BAB9FF50] rounded-xl",
    //     customClasses
    //   )}
    //   {...props}
    // >
    //   <div
    //     className={clsx(
    //       styles.btn,
    //       variantClass,
    //       "!ml-0 bg-black w-full h-full"
    //     )}
    //   >
    //     {children}
    //   </div>
    // </div>
    <div
      className={clsx(styles.btn, variantClass, "font-matter", customClasses)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
