import clsx from "clsx";
// import ReactModal from "react-modal";
import Image from "next/image";

import { Button } from "@/components/core/Buttons";
import { CloseSvg } from "@/components/svgs";
import { MouseEvent } from "react";

interface Props {
  isShow: boolean;
  onClose: Function;
}

const CommunityModal: React.FC<Props> = ({ isShow, onClose }) => {
  if (!isShow) return <></>;

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    // <ReactModal isOpen={isShow} className={"community-modal"}>
    <div
      className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-30 backdrop-blur-md flex"
      onClick={() => onClose()}
    >
      <div
        className={clsx("community-modal", "m-auto")}
        onClick={handleModalClick}
      >
        <div
          className={clsx(
            "relative flex flex-col px-[32px] pt-10 md:pt-[45px] pb-[32px]"
          )}
        >
          <div
            className={clsx(
              "absolute right-[18px] top-[18px]",
              "w-6 h-6 cursor-pointer text-white hover:text-[rgba(138,171,255,1)]"
            )}
            onClick={() => {
              onClose();
            }}
          >
            <CloseSvg />
          </div>
          <div
            className={clsx(
              "relative",
              "mx-auto w-[30.88px] h-[30.88px] md:w-[42px] md:h-[42px]"
            )}
          >
            <Image
              src="/svgs/CommunityDealsPageHeader.svg"
              layout="fill"
              objectFit="contain"
              alt="community deals header"
            />
          </div>

          <div
            className={clsx(
              "text-center font-[500] text-white mt-2 text-[28px] leading-[30.8px] font-chakra-petch",
              "md:text-[44px] md:leading-[48.4px]"
            )}
          >
            Apply for the Deal
          </div>
          <div
            className={clsx(
              "mx-auto mt-4 text-[rgba(255,255,255,0.9)] font-matter font-[400]",
              "text-center text-sm leading-[16.8px]",
              "md:text-base md:leading-[19.1px]",
              "md:mt-6 max-w-[578px]"
            )}
          >
            To apply for this deal, please write a message to the company. After
            consideration, you will be contacted for further cooperation.
          </div>
          <textarea
            className={clsx("git-room-textarea", "mt-6", "md:mt-[32px]")}
            placeholder="Enter your message..."
          />
          <Button
            customClasses={clsx(
              "mx-auto mt-6 md:mt-[32px]",
              "text-sm leading-[16px] md:text-base md:leading-[19.1px]",
              "w-[118px] h-[42px] md:w-[180px] md:h-12"
            )}
            onClick={() => {
              onClose();
            }}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>

    // </ReactModal>
  );
};

export default CommunityModal;
