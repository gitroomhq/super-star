import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import IconButton from "@/components/core/buttons/IconButton";

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <div className={clsx("bg-black", "text-white")}>
      <div
        className={clsx(
          "git-room-container",
          "flex flex-col",
          "gap-[48px]",
          "pt-[64px] pb-[32px] mt-[100px]"
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
            <div className={clsx("flex flex-row gap-1")}>
              <Image
                className={clsx("block md:hidden")}
                src="/svgs/Logo.svg"
                height={0}
                width={0}
                style={{ width: "45px", height: "auto" }}
                alt="logo"
              />
              <h4
                className={clsx(
                  "font-semibold text-[23.8px] md:text-[26.47px] font-chakra-petch pt-[11px] md:pt-0"
                )}
              >
                Gitroom
              </h4>
            </div>
            <p
              className={clsx(
                "font-matter font-[400] text-sm leading-[24px] text-[rgba(255,255,255,0.8)]",
                "md:text-base leading-[24px]"
              )}
            >
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
              <h4
                className={clsx(
                  "font-[500] text-[18px] md:text-[20px] leading-[21.6px]"
                )}
              >
                Need consulting?
              </h4>
              <Link
                href="https://cal.com/gitroom/30min?utm_source=website"
                className={clsx(
                  "font-[400] text-[14px] md:text-[16px] text-[#B385FF] hover:text-[rgba(217,193,255,1)]",
                  "underline transition-all"
                )}
              >
                Book a Free Call
              </Link>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center md:items-start",
                "gap-[12px] md:gap-[20px]"
              )}
            >
              <h4
                className={clsx(
                  "font-[500] text-[18px] md:text-[20px] leading-[21.6px]"
                )}
              >
                Launching a product?
              </h4>
              <Link
                href="https://growchief.com/"
                className={clsx(
                  "text-[14px] md:text-[16px] text-[#B385FF] hover:text-[rgba(217,193,255,1)]",
                  "underline transition-all"
                )}
              >
                Grow Chief
              </Link>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center md:items-start",
                "gap-[12px] md:gap-[20px]"
              )}
            >
              <h4
                className={clsx(
                  "font-[500] text-[18px] md:text-[20px] leading-[21.6px]"
                )}
              >
                Resources
              </h4>
              <Link
                href="https://gitlibrary.club/"
                className={clsx(
                  "text-[14px] md:text-[16px] text-[#B385FF] hover:text-[rgba(217,193,255,1)]",
                  "underline transition-all"
                )}
              >
                GitHub Library
              </Link>
              <Link
                href="https://postiz.com"
                className={clsx(
                  "text-[14px] md:text-[16px] text-[#B385FF] hover:text-[rgba(217,193,255,1)]",
                  "underline transition-all"
                )}
              >
                Postiz
              </Link>
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
              <p>© GitRoom , 2024. All rights reserved.</p>
            </div>
            <div
              className={clsx(
                "flex flex-row justify-between gap-[10px]",
                "text-[14px] md:text-[15px] hover:text-[#AA80EE] transition-all cursor-pointer"
              )}
              onClick={() => router.push("https://peppermint.id")}
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
            <IconButton
              asLink="https://discord.gitroom.com">
              <Image
                src="/svgs/Discord.svg"
                height={0}
                width={0}
                style={{ width: "24px", height: "16px" }}
                alt="discord"
              />
            </IconButton>
            <IconButton
              asLink="https://youtube.com/@nevodavid"
            >
              <Image
                src="/svgs/Youtube.svg"
                height={0}
                width={0}
                style={{ width: "22px", height: "15px" }}
                alt="youtube"
              />
            </IconButton>
            <IconButton
              asLink="https://linkedin.com/in/nevo-david"
            >
              <Image
                src="/svgs/Linkedin.svg"
                height={0}
                width={0}
                style={{ width: "18.5px", height: "17.59px" }}
                alt="linkedin"
              />
            </IconButton>
            <IconButton
              asLink="https://twitter.com/nevodavid"
            >
              <Image
                src="/svgs/Twitter.svg"
                height={0}
                width={0}
                style={{ width: "18px", height: "18px" }}
                alt="twitter"
              />
            </IconButton>
          </div>
          <div
            className={clsx(
              "flex flex-col md:flex-row justify-between items-center gap-[12px] md:gap-[60px]",
              "text-[14px] md:text-[16px]"
            )}
          >
            <Link
              href="/terms"
              className={clsx(
                "pl-0 md:pl-[41px] text-[rgba(255,255,255,0.6)] hover:text-[rgba(255,255,255,1)] transition-all"
              )}
            >
              Terms of service
            </Link>
            <Link
              href="/privacy"
              className={clsx(
                "text-[rgba(255,255,255,0.6)] hover:text-[rgba(255,255,255,1)] transition-all"
              )}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
