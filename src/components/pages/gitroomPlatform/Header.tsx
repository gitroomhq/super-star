import React from "react";
import clsx from "clsx";
import Image from "next/image";

import { Button } from "@/components/core/buttons";
import LottieWrapper from "@/components/common/LottieWrapper";
import LottieHero from "@/lottie/GitPlatformHero.json";
import Link from "next/link";
import { useRouter } from "next/router";

const PurpleShadow = () => (
  <>
    <div
      className={clsx(
        "left-0 top-[75%] md:left-[25%] md:top-[50%] -translate-x-[50%] -translate-y-[50%]",
        "absolute w-[1000px] h-[1000px] md:w-[1200px] md:h-[1200px] z-[0] scale-y-50 opacity-70"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 70%)",
      }}
    />

    <div
      className={clsx(
        "left-0 top-[75%] md:left-[25%] md:top-[50%] -translate-x-[50%] -translate-y-[50%]",
        "absolute w-[1000px] h-[1000px] md:w-[1500px] md:h-[1500px] z-[0] scale-y-50 opacity-15"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #1758FF, transparent 70%)",
      }}
    />

    <div
      className={clsx(
        "left-0 top-[75%] md:left-[25%] md:top-[50%] -translate-x-[50%] -translate-y-[50%]",
        "absolute w-[1000px] h-[1000px] md:w-[2000px] md:h-[2000px] z-[0] scale-y-50 opacity-15"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #1758FF, transparent 70%)",
      }}
    />
  </>
);

const Header = () => {
  const router = useRouter();

  return (
    <div className={clsx("relative", "pb-[102px] md:pb-[263px]")}>
      <LottieWrapper
        animationData={LottieHero}
        className={clsx(
          "absolute translate-x-[-50%] -top-[48px] md:-top-[70px] lg:-top-[50px]",
          "w-[1024px] h-[500px] md:w-[1700px] md:h-[810px] lg:w-[1920px] lg:h-[860px]",
          "left-[calc(50%-135px)] md:left-[50%]"
        )}
      />
      <div
        className={clsx(
          "git-room-container flex flex-col",
          "pt-[340px] items-center",
          "md:pt-[210px] md:items-start z-[2]"
        )}
      >
        <div className="flex items-center justify-center">
          <div
            className={clsx(
              "relative w-5 h-5 flex justify-center",
              "md:w-[30px] md:h-[30px]"
            )}
          >
            <Image
              src="/svgs/GithubIcon-White.svg"
              layout="fill"
              objectFit="contain"
              alt="github"
            />
          </div>
          <div className={clsx("flex items-center ml-[8.81px] md:ml-[12px]")}>
            <div className={clsx("w-4 h-4 relative")}>
              <Image
                src="/svgs/Star.svg"
                width={16}
                height={16}
                alt="github"
                className="w-full h-full"
              />
            </div>
            <div
              className={clsx(
                "ml-[2.91px] text-white font-matter font-[400]",
                "text-[12px] leading-[14.4px]",
                "md:text-base",
                "lg:leading-[19.2px]"
              )}
            >
              2.9k
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "text-center font-chakra-petch font-[500] text-[rgba(133,160,255,1)] uppercase",
            "mt-3 text-[12px] leading-[14.4px]",
            "md:text-left md:text-[18px] md:leading-[19.8px]",
            "lg:mt-6"
          )}
        >
          We are open-source, star our repository.
        </div>
        <h2
          className={clsx(
            "text-white font-chakra-petch font-[600]",
            "text-[50px] leading-[50px] max-w-[200px]",
            "mt-[10px] sm:max-w-[646px]",
            "md:text-left md:text-[65px] md:leading-[80px]",
            "lg:mt-5 lg:text-[80px]"
          )}
        >
          Gitroom Platform
        </h2>
        <div
          className={clsx(
            "text-white font-matter font-[400] text-center",
            "mt-3 text-sm leading-[16.8px] max-w-[324px]",
            "sm:max-w-[524px]",
            "md:text-left md:max-w-[480px] md:text-base",
            "lg:mt-6 leading-[19.2px]"
          )}
        >{`Boost your open-source project's visibility and growth: trend on GitHub, leverage influencers, write compelling marketing materials. Master communication, find writers, use badges.`}</div>
        <div
          className={clsx(
            "flex items-center justify-center",
            "gap-[8px] mt-4",
            "lg:mt-6 lg:gap-[10px]"
          )}
        >
          <Link href="https://gitroom.com/auth">
            <Button
              customClasses={clsx(
                "w-[143px] h-[42px]",
                "lg:w-[134px] lg:h-[48px] lg:text-base"
              )}
            >
              Go to Platform
            </Button>
          </Link>
          <Button
            variant="secondary-white"
            customClasses={clsx(
              "w-[93px] h-[42px]",
              "lg:w-[100px] lg:!h-[48px] lg:!text-base"
            )}
            onClick={() => router.push("#pricing")}
          >
            Pricing
          </Button>
        </div>
      </div>

      <PurpleShadow />
    </div>
  );
};

export default Header;
