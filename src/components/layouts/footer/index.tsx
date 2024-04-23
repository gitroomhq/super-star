import React, { useEffect, useLayoutEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";
import clsx from "clsx";
import { FooterButton } from "../../core/buttons";

const Footer = () => {
  return (
    <div className={clsx("bg-black", "text-white")}>
      <div
        className={clsx(
          "git-room-container",
          "flex flex-col",
          "gap-[48px]",
          "pt-[64px] pb-[32px]"
        )}
      >
        <div
          className={clsx(
            "flex flex-col md:flex-row md:justify-between gap-[60px]"
          )}
        >
          <div
            className={clsx(
              "flex flex-col items-center md:items-start",
              "gap-[16px] md:gap-[10px]"
            )}
          >
            <div className={clsx("flex flex-row gap-[12px]")}>
              <Image
                className={clsx("block md:hidden")}
                src="/svgs/Logo.svg"
                height={0}
                width={0}
                style={{ width: "30.55px", height: "31.38px" }}
                alt="logo"
              />
              <h4
                className={clsx(
                  "font-semibold text-[23.8px] md:text-[26.47px] font-chakra-petch"
                )}
              >
                GitRoom
              </h4>
            </div>
            <p className={clsx("font-matter")}>
              Grow your open-source community
            </p>
          </div>
          <div
            className={clsx(
              "flex flex-col md:flex-row justify-between",
              "font-matter",
              "gap-[40px] md:gap-[60px]"
            )}
          >
            <div
              className={clsx(
                "flex flex-col items-center md:items-start",
                "gap-[12px] md:gap-[20px]"
              )}
            >
              <h4 className={clsx("text-[18px] md:text-[20px]")}>
                Need consulting?
              </h4>
              <a
                href="#"
                className={clsx(
                  "text-[14px] md:text-[16px] text-[#B385FF]",
                  "underline"
                )}
              >
                Book a Free Call
              </a>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center md:items-start",
                "gap-[12px] md:gap-[20px]"
              )}
            >
              <h4 className={clsx("text-[18px] md:text-[20px]")}>
                Launching a product?
              </h4>
              <a
                href="#"
                className={clsx(
                  "text-[14px] md:text-[16px] text-[#B385FF]",
                  "underline"
                )}
              >
                Grow Chief
              </a>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center md:items-start",
                "gap-[12px] md:gap-[20px]"
              )}
            >
              <h4 className={clsx("text-[18px] md:text-[20px]")}>
                GitHub Library
              </h4>
              <a
                href="#"
                className={clsx(
                  "text-[14px] md:text-[16px] text-[#B385FF]",
                  "underline"
                )}
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-col-reverse md:flex-row justify-between",
            "pt-[40px] md:pt-[32px]",
            "text-white/60",
            "border-t-[1px] border-[#f2ecff29]",
            "font-matter",
            "gap-[32px] md:gap-0"
          )}
        >
          <div
            className={clsx(
              "flex flex-col-reverse md:flex-row justify-between items-center gap-[12px] md:gap-[40px]"
            )}
          >
            <div className={clsx("text-[13px] md:text-[15px]")}>
              <p>© Gitroom , 2024. All rights reserved.</p>
            </div>
            <div
              className={clsx(
                "flex flex-row justify-between gap-[10px]",
                "text-[14px] md:text-[15px]"
              )}
            >
              <p>Designed by </p>
              <Image
                src="/svgs/Peppermint.svg"
                height={0}
                width={0}
                style={{ width: "auto", height: "24px" }}
                alt="peppermint"
              />
            </div>
          </div>
          <div className={clsx("flex flex-row justify-center gap-[10px]")}>
            <FooterButton onClick={() => {}}>
              <Image
                src="/svgs/Discord.svg"
                height={0}
                width={0}
                style={{ width: "24px", height: "16px" }}
                alt="discord"
              />
            </FooterButton>
            <FooterButton onClick={() => {}}>
              <Image
                src="/svgs/Youtube.svg"
                height={0}
                width={0}
                style={{ width: "22px", height: "15px" }}
                alt="youtube"
              />
            </FooterButton>
            <FooterButton onClick={() => {}}>
              <Image
                src="/svgs/Linkedin.svg"
                height={0}
                width={0}
                style={{ width: "18.5px", height: "17.59px" }}
                alt="linkedin"
              />
            </FooterButton>
            <FooterButton onClick={() => {}}>
              <Image
                src="/svgs/Twitter.svg"
                height={0}
                width={0}
                style={{ width: "18px", height: "18px" }}
                alt="twitter"
              />
            </FooterButton>
          </div>
          <div
            className={clsx(
              "flex flex-col md:flex-row justify-between items-center gap-[12px] md:gap-[60px]",
              "text-[14px] md:text-[16px]"
            )}
          >
            <p className={clsx("pl-0 md:pl-[41px]")}>Terms of service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
