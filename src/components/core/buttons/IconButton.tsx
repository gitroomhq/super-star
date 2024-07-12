import React, { useState } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";
import Link from "next/link";

interface Props
  extends Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    "customClasses" | "variant" | "href" | "disalbed"
  > {
  customClasses?: string | object;
  asLink?: string;
  href?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Div = (props: any) => {
  return <div {...props} />
}

const A = (props: any) => {
  return <Link {...props} />
}
const IconButton: React.FC<Props> = ({
  customClasses = "",
  asLink = "",
  children,
  disabled = false,
  ...props
}: Props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const Element = asLink ? A : Div;
  return (
    <Element
      {...asLink ? {href: asLink} : {

      }}
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
    </Element>
  );
};

export default IconButton;
