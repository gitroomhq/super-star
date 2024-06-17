import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

import SectionTitle from "@/components/core/SectionTitle";
import Switch from "@/components/core/Switch";
import PricingCard from "./PricingCard";

import { PricingMockData } from "@/mockData/pricing";
import { IPricingCard } from "@/types";

const FlexiblePricingSection = () => {
  const [dayMode, setDayMode] = useState<"Monthly" | "Yearly">("Monthly");
  const [selectedPrice, setSelectedPrice] = useState<number>(1);
  return (
    <section
      id="pricing"
      className={clsx("git-room-container", "flex flex-col")}
    >
      <div
        className={clsx(
          "relative mx-auto",
          "mt-[100px] md:mt-[214.23px] w-[42px] h-[42px] z-[2]"
        )}
      >
        <Image
          src="/svgs/FlexiblePricingSectionIcon.svg"
          layout="fill"
          objectFit="contain"
          alt="flexible pricing for companies and developers"
        />
      </div>
      <SectionTitle
        customClasses={clsx(
          "mx-auto mt-[25.12px] md:mt-[50px] w-full max-w-[653px] z-[2]"
        )}
      >
        Flexible pricing for companies and developers
      </SectionTitle>
      <Switch
        checked={dayMode === "Monthly"}
        onChange={() => {
          if (dayMode === "Monthly") setDayMode("Yearly");
          else setDayMode("Monthly");
        }}
        customClasses={clsx("mt-[60px] mx-auto z-[2]")}
        leftLabel="Monthly"
        rightLabel="Yearly"
      />
      <div
        className={clsx(
          "w-full max-w-[420px] mx-auto tablet:max-w-full mt-[35px] flex gap-[10px] flex-col tablet:flex-row items-stretch"
        )}
      >
        {PricingMockData[dayMode].map((item: IPricingCard, idx: number) => (
          <PricingCard
            key={idx}
            cardInfo={item as IPricingCard}
            selected={item.id === selectedPrice}
            onSelect={() => {
              setSelectedPrice(item.id);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FlexiblePricingSection;
