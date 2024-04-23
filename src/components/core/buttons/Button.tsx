import React, { useEffect, useState } from "react";
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
  const [focused, setFocused] = useState<boolean>(false);
  const [variantClass, setVariantClass] = useState(styles.btnPrimaryWhite);

  useEffect(() => {
    switch (variant) {
      case "primary-white":
        setVariantClass(styles.btnPrimaryWhite);
        break;
      case "secondary-white":
        setVariantClass(styles.btnSecondaryWhite);
        break;
      default:
        setVariantClass(styles.btnPrimaryWhite);
        break;
    }
  }, [variant]);

  if (variant === "primary-white") {
    return (
      <div
        className={clsx(styles.btn, "font-matter", customClasses, "p-[1px]")}
      >
        <div className={styles.borderDiv}></div>
        <div className={styles.btnPrimaryWhite}>{children}</div>
      </div>
    );
  }

  return (
    <div
      className={clsx(styles.btn, variantClass, "font-matter", customClasses)}
      onMouseDown={() => {
        setFocused(true);
      }}
      onMouseUp={() => {
        setFocused(false);
      }}
      onMouseLeave={() => {
        setFocused(false);
      }}
      onTouchStart={() => {
        setFocused(true);
      }}
      onTouchEnd={() => {
        setFocused(false);
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
