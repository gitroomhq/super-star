import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";
import clsx from "clsx";
import { Button, IconButton } from "../../core/Buttons";
import { CloseSvg, HamburgerSvg } from "../../svgs";

import styles from "./styles.module.css";

const Navbar = () => {
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
        "!fixed top-0 translate-x-[-50%] left-[50%]",
        "z-[1]",
        "pt-3 pb-4 transition-all",
        "w-full",
        isExpanded && "h-screen",
        isScrollDowned && "md:backdrop-blur-sm"
      )}
    >
      <div
        className={clsx(
          "relative z-[1] ml-auto mr-auto transition-all",
          "overflow-hidden",
          "px-4",
          "bg-[rgba(38,37,52,0.35)] border-[1px] border-[rgba(255,255,255,0.05)]",
          "border-[1px] border-[rgba(255,255,255,0.35)] rounded-xl",
          "flex flex-col",
          "w-full",
          {
            "h-[calc(100%-12px)]": isExpanded,
            "h-[60px]": !isExpanded,
          },
          "md:!h-[90px]",
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
          <div className={clsx("flex items-center")}>
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
          </div>
          <IconButton
            customClasses={clsx("w-6 h-6 ml-auto", "md:!hidden")}
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
            <li className="text-center">
              <Link href="" className={styles.navbarItem}>
                Community Deals
              </Link>
            </li>
            <li className="text-center">
              <Link href="" className={styles.navbarItem}>
                OSS Friends
              </Link>
            </li>
            <li className="text-center">
              <Link href="" className={styles.navbarItem}>
                Blog
              </Link>
            </li>
          </ul>
          <Button
            variant="secondary-white"
            customClasses={clsx(
              "mt-[80px] w-full max-w-[243px] h-[42px]",
              "md:ml-[70px] md:mt-0",
              "md:min-w-[130px] md:w-[130px] md:!h-12",
              "md:!text-base"
            )}
          >
            Book a Call
          </Button>
          <Button
            variant="primary-white"
            customClasses={clsx(
              "mt-2 w-full max-w-[243px] h-[42px]",
              "md:mt-0 md:ml-2.5 md:w-[208px] md:!h-12",
              "md:!text-base"
            )}
          >
            Discover the Platform
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
