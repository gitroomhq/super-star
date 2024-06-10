import React from "react";
import clsx from "clsx";
import Image from "next/image";

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

import SectionTitle from "@/components/core/SectionTitle";
import { ChevDownSvg } from "@/components/svgs";
import { Faqs } from "@/mockData/faq";
import { IFaq } from "@/types";

import styles from "./styles.module.css";

const FrequentlyAskSection = () => {
  return (
    <div
      className={clsx(
        "relative mx-auto w-full max-w-[840px] px-5",
        "flex flex-col items-center z-[2] bg-black"
      )}
    >
      <div
        className={clsx(
          "mx-auto relative",
          "w-[30.88px] h-[30.88px] md:w-[42px] md:h-[42px] z-[1]"
        )}
      >
        <Image
          src="/svgs/FrequentlyAskSectionIcon.svg"
          layout="fill"
          objectFit="contain"
          alt="flexible pricing icon"
        />
      </div>
      <SectionTitle
        customClasses={clsx(
          "mt-[29.91px] max-w-[335px] md:mt-[37.48px] md:w-full md:max-w-[653px] z-[1]"
        )}
      >
        Frequently asked questions
      </SectionTitle>

      <Accordion
        transition
        transitionTimeout={200}
        className={clsx("w-full max-w-[800px]", "mt-[36px] md:mt-[68px] z-[1]")}
      >
        {Faqs.map((faq: IFaq) => (
          <AccordionItem
            key={faq.id}
            header={faq.question}
            initialEntered={faq.id === 0}
            className={clsx(styles.accordionItem)}
            border={faq.id < Faqs.length - 1}
          >
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

// @ts-ignore
const AccordionItem = ({ header, border, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <div className={clsx("max-w-[280px] md:mr-[40px] md:max-w-full")}>
          {header}
        </div>
        <div className={clsx(styles.btnAccordion)}>
          <div
            className={clsx(
              "w-[17.46px] h-[17.46px] md:w-[24px] md:h-[24px] relative",
              `transition-transform duration-200 ease-out ${
                isEnter && "rotate-180"
              }`
            )}
          >
            <ChevDownSvg />
          </div>
        </div>
      </>
    )}
    className={clsx(border && "border-b border-[rgba(255,255,255,0.15)]")}
    buttonProps={{
      className: ({ isEnter }) =>
        clsx(
          "flex w-full text-white font-matter font-[600] text-[18px] leading-[21.6px] pt-6 text-left",
          "md:pt-8 md:text-[24px] leading-[28.8px]",
          `${isEnter ? "pb-5" : "pb-6 md:pb-10"}`
        ),
    }}
    contentProps={{
      className:
        "transition-height duration-200 ease-out font-matter text-white font-[400] text-base leading-[19.2px] max-w-[700px]",
    }}
    panelProps={{ className: "pb-5" }}
  />
);

export default FrequentlyAskSection;
