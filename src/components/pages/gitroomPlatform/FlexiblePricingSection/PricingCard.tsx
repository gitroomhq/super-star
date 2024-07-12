import clsx from "clsx";

import { Button } from "@/components/core/buttons";
import { CircleCheckFilledSvg } from "@/components/svgs";

import { IPricingCard } from "@/types";

import styles from "./styles.module.css";

interface Props {
  cardInfo: IPricingCard;
  selected?: boolean;
  onSelect: Function;
}

const PricingCard: React.FC<Props> = ({
  cardInfo,
  selected = false,
  onSelect,
}) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col px-6 py-[32px] flex-1 min-h-full group rounded-[4px] bg-black cursor-pointer",
        "border-[1px] border-[rgba(203,202,255,0.15)]",
        "md:p-[32px]"
      )}
    >
      {/* Gradient Border */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `
          rgb(144, 126, 255, 0.1) 0px 0px 15px 15px, rgb(144, 126, 255, 0.1) 0px 0px 15px 15px inset,
          rgba(149, 100, 255, 0.1) 0px 0px 10px 10px, rgba(149, 100, 255, 0.1) 0px 0px 10px 10px inset,
          rgba(0, 26, 255, 0.2) 0px 0px 2px 2px, rgba(0, 26, 255, 0.2) 0px 0px 2px 2px inset,
          rgba(225, 225, 255, 0.8) 0px 0px 1px 1px, rgba(225, 225, 255, 0.8) 0px 0px 1px 1px inset
          `,
        }}
      ></div>

      {/* Gradient Effect */}
      <div
        className={clsx(
          "opacity-0 group-hover:opacity-25 transition-opacity duration-300",
          "left-[50%] top-[45px] -translate-x-[50%] -translate-y-[50%]",
          "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[1] pointer-events-none"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #5026FA, transparent 80%)",
        }}
      />

      <div
        className={clsx(
          "flex flex-col items-center border-b-[1px] border-[rgba(255,255,255,0.1)] z-[2]",
          "pb-5",
          "tablet:pb-6"
        )}
      >
        <div
          className={clsx(
            "font-chakra-petch font-[500] text-white",
            "text-[24px] leading-[26.4px]",
            "tablet:text-[32px] tablet:leading-[35.2px]"
          )}
        >
          {cardInfo.title}
        </div>
        <div
          className={clsx(
            "mt-[5px] text-[rgba(255,255,255,0.8)] font-matter",
            "text-sm leading-[16.8px]",
            "tablet:mt-[2px] tablet:text-base tablet:leading-[19.2px]"
          )}
        >
          {cardInfo.subTitle}
        </div>

        {cardInfo.isPopular && (
          <div className={clsx("absolute top-[13.77px] right-[14px]")}>
            <div className={clsx(styles.popularBadge)}>
              <div>Popular</div>
            </div>
          </div>
        )}
      </div>
      <div className={clsx("flex flex-col", "pt-5 tablet:pt-6 z-[2]")}>
        <div className={clsx("flex text-[#828FFF]")}>
          <div
            className={clsx(
              "font-chakra-petch font-[500]",
              "text-[34px] leading-[44.2px]",
              "tablet:text-[40px] tablet:leading-[52px] "
            )}
          >
            ${cardInfo.price}
          </div>
          <div
            className={clsx(
              "flex items-end",
              "font-chakra-petch font-[500]",
              "ml-3 text-[20px] leading-[26px] pb-[5px]",
              " tablet:text-[24px] tablet:leading-[31.2px]"
            )}
          >
            / per {cardInfo.duration === "Monthly" ? "Month" : "Year"}
          </div>
        </div>
        <div className={clsx("flex flex-col mt-5 tablet:mt-[24.5px]")}>
          {cardInfo.options.map((itemOne: string, idx) => (
            <div key={idx} className={clsx(styles.pricingCardItem)}>
              <div className=" text-white mr-1.5 w-4 h-4 tablet:w-5 tablet:h-5 tablet:mr-2">
                <CircleCheckFilledSvg />
              </div>
              {itemOne}
            </div>
          ))}
        </div>
      </div>
      <div className={clsx("mt-auto w-full pt-10 z-[2]")}>
        <Button
          variant={selected ? "primary-white" : "secondary-white"}
          customClasses={clsx(styles.btnSelect)}
          onClick={() => {
            onSelect();
          }}
        >
          Get Started for Free
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
