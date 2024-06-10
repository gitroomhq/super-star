import React, { useState } from "react";
import clsx from "clsx";
import { IAccordion } from "@/types";
import styles from "./styles.module.css";

interface Props {
  customClasses?: string;
  data: Array<IAccordion>;
}

const Accordion: React.FC<Props> = ({ customClasses, data }) => {
  const [selected, setSelected] = useState<number>(-1);
  return (
    <div className={clsx(styles.wrapper, customClasses)}>
      {data.map((item: IAccordion, idx: number) => (
        <div key={idx} className={clsx(styles.accordion)}>
          <div
            className={clsx(styles.accordionHeader)}
            onClick={() => {
              if (selected === item.id) setSelected(-1);
              else setSelected(item.id);
            }}
          >
            {item.title}
          </div>
          <div
            className={clsx(
              styles.accordionContent,
              selected === item.id
                ? "max-h-[500px] overflow-y-scroll"
                : "max-h-0 h-0"
            )}
          >
            <div className={clsx(styles.accordionContentDiv)}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
