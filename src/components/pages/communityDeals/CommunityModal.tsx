"use client";

import Image from "next/image";
import { ChangeEvent, MouseEvent, useState } from "react";
import clsx from "clsx";

import { Button } from "@/components/core/buttons";
import { CloseSvg } from "@/components/svgs";
import { ICommunityCard } from "@/types";

interface Props {
  data?: ICommunityCard;
  isShow: boolean;
  onClose: Function;
  onApply: Function;
}

const MAX_CONTENT_LENGTH = 500;

const CommunityModal: React.FC<Props> = ({
  data,
  isShow,
  onClose,
  onApply,
}) => {
  const [content, setContent] = useState("");

  if (!isShow) return <></>;

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleClose = () => {
    setContent("");
    onClose();
  };

  const handleApply = () => {
    content.length <= MAX_CONTENT_LENGTH && onApply();
  };

  return (
    // <ReactModal isOpen={isShow} className={"community-modal"}>
    <div
      className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-30 backdrop-blur-md flex"
      onClick={() => onClose()}
    >
      <div
        className={clsx("community-modal", "m-auto h-[500px]")}
        onClick={handleModalClick}
      >
        <div
          className={clsx(
            "relative flex flex-col items-center justify-center h-full px-[32px] pt-10 md:pt-[45px] pb-[32px]"
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
          {!data?.applied ? (
            <div>
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
                To apply for this deal, please write a message to the company.
                After consideration, you will be contacted for further
                cooperation.
              </div>
              <div
                className={clsx(
                  "relative h-[145px] p-[1px] mt-6 md:mt-8",
                  "bg-[#2f2c55] rounded-2xl overflow-hidden",
                  content.length > 500 && "!bg-[#992A44]"
                )}
              >
                <div
                  style={{
                    background:
                      "radial-gradient(#cccbff, #ffffff00 50%) no-repeat",
                    width: "400px",
                    height: "50px",
                    top: "-15%",
                    left: "-10%",
                    position: "absolute",
                    opacity: "0.65",
                  }}
                />
                <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] left-[50%] -translate-x-[50%] bg-[#1e1d2d] py-5 pl-5 pr-1 rounded-2xl z-20">
                  <textarea
                    className={clsx("git-room-textarea")}
                    placeholder="Enter your message..."
                    onChange={handleChange}
                  />
                  <span
                    className={`text-xs leading-[16px] font-matter z-[9999] absolute bottom-1.5 right-5 ${
                      content.length <= 500
                        ? "text-[#DEDCF9] text-opacity-60"
                        : "text-[#FF4672]"
                    }`}
                  >
                    {content.length}/500
                  </span>
                </div>
              </div>
              <Button
                customClasses={clsx(
                  "mx-auto mt-6 md:mt-[32px]",
                  "text-sm leading-[16px] md:text-base md:leading-[19.1px]",
                  "w-[118px] h-[42px] md:w-[180px] md:h-12"
                )}
                onClick={handleApply}
              >
                Apply Now
              </Button>
            </div>
          ) : (
            <div className="">
              <div
                className={clsx(
                  "relative",
                  "mx-auto w-[50px] h-[50px] md:w-[68px] md:h-[68px]"
                )}
              >
                <Image
                  src="/svgs/CommunityModalApplied.svg"
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
                Thank You for Applying!
              </div>
              <div
                className={clsx(
                  "mx-auto mt-4 text-[rgba(255,255,255,0.9)] font-matter font-[400]",
                  "text-center text-sm leading-[16.8px]",
                  "md:text-base md:leading-[19.1px]",
                  "md:mt-6 max-w-[578px]"
                )}
              >
                Your application has been submitted. We appreciate your interest
                and will review your message shortly. A representative will
                contact you soon.
              </div>
              <Button
                customClasses={clsx(
                  "mx-auto mt-6 md:mt-[32px]",
                  "text-sm leading-[16px] md:text-base md:leading-[19.1px]",
                  "w-[118px] h-[42px] md:w-[180px] md:h-12"
                )}
                onClick={handleClose}
              >
                Done
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>

    // </ReactModal>
  );
};

export default CommunityModal;
