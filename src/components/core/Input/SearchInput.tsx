import React from "react";
import clsx from "clsx";
import { MagnifierSvg } from "@/components/svgs";

import styles from "./styles.module.css";

interface Props extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, ""> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={clsx(styles.searchInputWrapper)} {...props}>
      <input className={clsx()} placeholder="Search..." />
      <div
        className={clsx(
          "absolute top-[13px] lg:top-4 left-4 w-6 h-6 text-white"
        )}
      >
        <MagnifierSvg />
      </div>
    </div>
  );
};

export default SearchInput;
