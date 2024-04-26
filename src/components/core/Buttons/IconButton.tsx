import React, { useState } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props
  extends Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    "customClasses" | "variant" | "href" | "disalbed"
  > {
  customClasses?: string | object;
  href?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const IconButton: React.FC<Props> = ({
  customClasses = "",
  children,
  disabled = false,
  ...props
}: Props) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <div
      className={clsx(
        styles.btn,
        styles.btnIcon,
        styles.focused,
        customClasses
      )}
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

export default IconButton;
