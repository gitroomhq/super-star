import clsx from "clsx";
import Image from "next/image";
import { Button } from "@/components/core/buttons";
import { CircleCheckFilledSvg } from "@/components/svgs";
import { EnumCommunityCardType, ICommunityCard } from "@/types";

import styles from "./styles.module.css";

interface Props {
  customClasses?: string;
  cardInfo: ICommunityCard;
  onApply: Function;
}

const CommunityDealsCard: React.FC<Props> = ({
  customClasses = "",
  cardInfo,
  onApply = () => {},
}) => {
  return (
    <div className={clsx(styles.communityCard, customClasses)}>
      <div className={clsx("flex flex-col h-full p-8 z-[1]")}>
        <div
          className={clsx(
            "flex flex-wrap md:items-center md:flex-nowrap",
            "pb-5",
            "md:pb-6",
            "border-b-[1px] border-[rgba(255,255,255,0.15)]"
          )}
        >
          <div
            className={clsx(
              "w-12 h-12 min-w-12 min-h-12 rounded-[9px] mr-4",
              "order-1"
            )}
            style={{ backgroundImage: `url(${cardInfo.logoSrc})` }}
          ></div>
          <div
            className={clsx(
              "flex flex-col mt-3 md:mt-0 mr-auto",
              "order-3 w-full md:w-auto md:order-2"
            )}
          >
            <div
              className={clsx(
                "font-[500] text-white font-chakra-petch",
                "text-[20px] leading-[22px]",
                "md:text-[24px] md:leading-[26.4px]"
              )}
            >
              {cardInfo.title}
            </div>
            <div
              className={clsx(
                "mt-[5px] text-[rgba(255,255,255,0.8)] font-matter",
                "text-xs leading-[16.8px]",
                "md:text-sm md:leading-[16.8px]"
              )}
            >
              {cardInfo.description}
            </div>
          </div>
          <div
            className={clsx(
              "shrink-0 mb-auto",
              "ml-auto md:ml-3",
              "flex items-center text-[rgba(93,167,255,1)] font-matter font-[500] bg-[rgba(134,182,255,0.15)]",
              "rounded-[20px]",
              "h-[26px] px-3 py-[6px] text-[12px] leading-[14.4px]",
              "md:h-[29px]",
              "md:text-sm md:leading-[16.8px]",
              "order-2 md:order-3"
            )}
          >{`${cardInfo.coupons[0]}/${cardInfo.coupons[1]} coupons left`}</div>
        </div>

        <div className={clsx("flex flex-col flex-grow")}>
          <h4
            className={clsx(
              "font-chakra-petch font-[600] text-[rgba(189,166,255,1)]",
              "mt-5 text-[24px] leading-[28.8px]",
              "md:mt-6 md:text-[32px] md:leading-[41.6px]"
            )}
          >
            {cardInfo.contentTitle}
          </h4>
          <div
            className={clsx(
              "font-matter text-[rgba(255,255,255,0.6)] font-[400]",
              "mt-3 text-sm leading-[16.8px]",
              "md:text-base md:leading-[19.2px]"
            )}
          >
            {cardInfo.contentSubTitle}
          </div>
          <div className={clsx("mt-auto", "flex items-center")}>
            <div
              className={clsx(
                "flex items-center",
                "font-matter font-[400] text-[14px] leading-[16.8px]",
                cardInfo.cardType === EnumCommunityCardType.freeUsersAccepted
                  ? "text-[rgba(253,148,255,1)]"
                  : "text-[rgba(133,255,218,1)]"
              )}
            >
              <div className={clsx("w-5 h-5 mr-2")}>
                <CircleCheckFilledSvg />
              </div>
              {cardInfo.cardType}
            </div>
            <Button
              customClasses={clsx(
                "text-sm leading-[16px]",
                "md:text-base md:leading-[19.1px]",
                "ml-auto w-[100px] h-[42px] md:w-[164px] md:h-12"
              )}
              onClick={() => {
                onApply();
              }}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDealsCard;
