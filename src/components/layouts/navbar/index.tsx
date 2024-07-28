import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";
import clsx from "clsx";
import { CloseSvg, HamburgerSvg } from "../../svgs";

import styles from "./styles.module.css";
import { EnumNavMenus } from "@/types";
import { useRouter } from "next/router";
import IconButton from "@/components/core/buttons/IconButton";
import Button from "@/components/core/buttons/Button";

interface Props {
  activeMenu: EnumNavMenus;
}

const Navbar: React.FC<Props> = ({ activeMenu = "" }) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isScrollDowned, setIsScrollDowned] = useState<boolean>(false);

  const onlyWidth = useWindowWidth();

  const controlNavbar = () => {
    if (window.scrollY > 10) {
      setIsScrollDowned(true);
    } else {
      setIsScrollDowned(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  useEffect(() => {
    if (onlyWidth >= 960) setIsExpanded(false);
  }, [onlyWidth]);

  return (
    <div
      className={clsx(
        "git-room-container",
        "!fixed top-0 left-0 right-0",
        "z-[15]",
        "transition-all",
        "w-full",
        isExpanded && "h-screen",
        // isScrollDowned && "md:backdrop-blur-md",
        "top-3"
      )}
    >
      <div
        className={clsx(
          "relative z-[1] ml-auto mr-auto transition-all",
          "overflow-hidden",
          "px-4",
          "bg-[rgba(38,37,52,0.35)] backdrop-blur-lg",
          "border-[1px] md:border-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.35)] rounded-[12px]",
          "flex flex-col",
          "w-full",
          {
            "h-[calc(100%-24px)]": isExpanded,
            "h-[60px]": !isExpanded,
          },
          "md:!h-[80px]",
          "md:flex-row md:items-center"
        )}
      >
        <div
          className={clsx(
            "absolute left-0 top-0 w-full h-full",
            "z-[-1]",
            "backdrop-blur-md",
            "bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(135,113,237,0.15)]",
            "md:hidden"
          )}
        ></div>
        <div
          className={clsx("relative flex items-center h-[58px] min-h-[58px]")}
        >
          <Link className={clsx("flex items-center")} href="/">
            <div
              className={clsx(
                "relative",
                "w-[30.55px] h-[31.39px]",
                "mr-[2.78px] mb-1",
                "md:mr-1 md:w-[44px] md:h-[45.2px] md:mb-2"
              )}
            >
              <Image
                src="/svgs/Logo.svg"
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </div>
            <div
              className={clsx(
                "font-chakra-petch text-white font-bold text-[16.67px]",
                "md:text-2xl"
              )}
            >
              Gitroom
            </div>
          </Link>
          <IconButton
            customClasses={clsx("!w-6 !h-6 ml-auto !bg-none", "md:!hidden")}
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? <CloseSvg /> : <HamburgerSvg />}
          </IconButton>
        </div>
        <div
          className={clsx(
            "mt-[60px] relative",
            "flex flex-col items-center",
            {
              hidden: !isExpanded,
            },
            "md:flex-row md:!flex",
            "md:ml-auto md:mt-0"
          )}
        >
          <ul
            className={clsx("flex flex-col gap-y-8", "md:flex-row md:gap-x-10")}
          >
            {/*<li className="text-center">*/}
            {/*  <Link*/}
            {/*    href="/community-deals"*/}
            {/*    className={clsx(*/}
            {/*      styles.navbarItem,*/}
            {/*      activeMenu === EnumNavMenus.CommuntyDeals &&*/}
            {/*        styles.navbarItemActive*/}
            {/*    )}*/}
            {/*  >*/}
            {/*    Community Deals*/}
            {/*  </Link>*/}
            {/*</li>*/}
            {/*<li className="text-center">*/}
            {/*  <Link*/}
            {/*    href="/oss-friends"*/}
            {/*    className={clsx(*/}
            {/*      styles.navbarItem,*/}
            {/*      activeMenu === EnumNavMenus.OSSFriends &&*/}
            {/*        styles.navbarItemActive*/}
            {/*    )}*/}
            {/*  >*/}
            {/*    OSS Friends*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li className="text-center">
              <Link
                href="https://gitlibrary.club"
                className={clsx(styles.navbarItem)}
              >
                Add your repository
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/blog"
                className={clsx(styles.navbarItem, activeMenu === EnumNavMenus.Blog && styles.navbarItemActive)}
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className="w-full flex flex-col items-center">
            <Button
              asLink={"/gitroom-platform"}
              variant="secondary-white"
              customClasses={clsx("mt-[80px] w-full max-w-[243px] min-h-[42px]", "md:ml-[70px] md:mt-0", "md:min-w-[130px] md:w-[200px] md:min-w-[130px] md:!h-12",
                "md:!text-base"
              )}
            >
              Discover the Platform
            </Button>
          </div>
          <Button
            asLink={"https://cal.com/gitroom/30min?utm_source=website"}
            variant="primary-white"
            customClasses={clsx(
              "animate-bounce mt-2 w-full max-w-[243px] w-[243px] min-h-[42px]",
              "md:mt-0 md:ml-2.5 md:w-[208px] md:min-w-[208px] md:!h-12",
              "md:!text-base"
            )}
          >
            Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
