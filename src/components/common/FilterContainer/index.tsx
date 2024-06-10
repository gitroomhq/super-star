import React from "react";
import clsx from "clsx";

import { Filters } from "@/mockData/filter";
import { IFilter } from "@/types";

import styles from "./styles.module.css";

interface Props {
  wrapperClasses?: string;
}

const FilterContainer: React.FC<Props> = ({ wrapperClasses = "" }) => {
  return (
    <div className={clsx("flex flex-wrap gap-2 md:gap-3", wrapperClasses)}>
      {Filters.map((filter: IFilter) => (
        <div
          className={clsx(styles.filterBtn, filter.id === 0 && styles.selected)}
          key={filter.id}
        >
          {filter.content}
        </div>
      ))}
    </div>
  );
};

export default FilterContainer;
