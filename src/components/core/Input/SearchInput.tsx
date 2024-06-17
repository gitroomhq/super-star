"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { MagnifierSvg } from "@/components/svgs";

import styles from "./styles.module.css";

interface Props extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, ""> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <div className={clsx(styles.searchInputWrapper)} {...props}>
      <input
        className={clsx(isEntered && "!pl-4")}
        placeholder="Search..."
        onFocus={() => setIsEntered(true)}
        onBlur={() => setIsEntered(false)}
      />
      <div
        className={clsx(
          "absolute top-[13px] lg:top-4 left-4 w-6 h-6 text-white"
        )}
      >
        {!isEntered && <MagnifierSvg />}
      </div>
    </div>
  );
};

export default SearchInput;
