import React, { useEffect, useState } from "react";
import clsx from "clsx";

// @ts-ignore
import TextButton from "@/components/core/buttons/TextButton";
import LottieWrapper from "@/components/common/LottieWrapper";
import LottieOSS from "@/lottie/Oss.json";
import LottieCommunityDeal from "@/lottie/CommunityDeal.json";
import LottieDiscord from "@/lottie/Discord.json";
import LottieYoutube from "@/lottie/Youtube.json";

import styles from "./styles.module.css";
import IconContainer from "../IconContainer";
import Link from "next/link";

const Shadow = () => (
  <>
    <div
      className={clsx(
        "left-[50%] top-[0px] md:top-[130px] translate-x-[-50%] -translate-y-[50%]",
        "absolute w-[800px] h-[600px] md:w-[1200px] md:h-[1000px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 80%)",
      }}
    />
    <div
      className={clsx(
        "left-[50%] top-[0px] md:top-[130px] translate-x-[-50%] -translate-y-[50%]",
        "absolute w-[800px] h-[600px] md:w-[1200px] md:h-[1000px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 80%)",
      }}
    />
  </>
);

interface Props {
  customClasses?: string;
}

const GitRoomCommunitySection: React.FC<Props> = ({ customClasses = "" }) => {
  const [playOSS, setPlayOSS] = useState(false);
  const [playCommunity, setPlayCommunity] = useState(false);
  const [playDiscord, setPlayDiscord] = useState(false);
  const [playYoutube, setPlayYoutube] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      className={clsx(
        "git-room-container",
        "flex flex-col",
        "z-[1]",
        customClasses
      )}
    >
      <Shadow />
      <IconContainer
        iconSrc="/svgs/OSSHeaderIcon.svg"
        className="w-[28px] h-[26px] md:w-[40px] md:h-[35px] mx-auto"
        width={50}
        height={50}
        alt="subscribe"
        hasGradient
        gradientColor="#6F52E5"
      />
      <h3
        className={clsx(
          "mx-auto text-center",
          "mt-[31.08px] text-white font-[600] font-chakra-petch text-[28px] leading-[30.8px]",
          "w-full max-w-[319px] md:max-w-full",
          "md:text-[44px] md:mt-[39.07px] z-[1]"
        )}
      >
        Join the Gitroom Community
      </h3>
      <div
        className={clsx(
          "mt-10 md:mt-20",
          "flex flex-col justify-center items-center",
          "md:flex-wrap md:flex-row",
          "gap-2 md:gap-2.5"
        )}
      >
        <div
          className={clsx(styles.cardWrapper, styles.cardOne)}
          onMouseEnter={() => setPlayOSS(true)}
          onMouseLeave={() => setPlayOSS(false)}
        >
          <LottieWrapper
            animationData={LottieOSS}
            play={isMobile || playOSS}
            className="absolute left-0 top-0 w-full z-0 h-full rounded"
          />
          <div
            className={clsx(
              "z-[1] mt-auto flex flex-col",
              "px-6 pb-[33px]",
              "md:pb-10 md:pl-[39.5px] md:max-w-[539px]"
            )}
          >
            <h4 className={clsx(styles.cardTitle)}>OSS Friends</h4>
            <div className={clsx(styles.cardDescription)}>
              Connect with community of open-source enthusiasts and
              collaborators. Share knowledge, seek advice, and foster meaningful
              relationships with like-minded developers passionate about
              advancing initiatives.
            </div>
            <div>
              <TextButton customClasses={clsx("mt-4 font-[300]")}>
                Join Community (SOON)
              </TextButton>
            </div>
          </div>
        </div>
        <div
          className={clsx(styles.cardWrapper, styles.cardOne)}
          onMouseEnter={() => setPlayCommunity(true)}
          onMouseLeave={() => setPlayCommunity(false)}
        >
          <LottieWrapper
            animationData={LottieCommunityDeal}
            play={isMobile || playCommunity}
            className="absolute left-0 top-0 w-full z-0 h-full rounded"
          />
          <div
            className={clsx(
              "z-[1] mt-auto flex flex-col",
              "px-6 pb-[33px]",
              "md:pb-10 md:pl-[39.5px] md:max-w-[539px]"
            )}
          >
            <h4 className={clsx(styles.cardTitle)}>Community Deals</h4>
            <div className={clsx(styles.cardDescription)}>
              Explore our community features designed to enhance collaboration
              and engagement. From discussion forums to collaborative projects,
              discover opportunities to connect, learn, and grow with fellow
              developers.
            </div>
            <div>
              <TextButton customClasses={clsx("mt-4 font-[300]")}>
                Explore Deals (SOON)
              </TextButton>
            </div>
          </div>
        </div>
        <div
          className={clsx(styles.cardWrapper, styles.cardTwo)}
          onMouseEnter={() => setPlayDiscord(true)}
          onMouseLeave={() => setPlayDiscord(false)}
        >
          <div
            className={clsx(
              "z-[1] flex flex-col",
              "px-6 pt-[30px]",
              "md:mt-[99px] md:max-w-[420px] md:pb-10 md:pl-[39.5px] md:pt-0"
            )}
          >
            <h4 className={clsx(styles.cardTitle)}>Join our Discord Server</h4>
            <div className={clsx(styles.cardDescription, "max-w-[333px]")}>
              Connect with like-minded developers on our Discord server. Share
              insights, ask questions, and collaborate in real-time within our
              community.
            </div>
            <Link href="https://discord.gitroom.com/">
              <TextButton customClasses={clsx("mt-4 font-[300]")}>
                Join the Discord {`>`}
              </TextButton>
            </Link>
          </div>
          <LottieWrapper
            animationData={LottieDiscord}
            play={isMobile || playDiscord}
            className="absolute left-0 bottom-0 w-full z-0 h-full rounded"
          />
        </div>
        <div
          className={clsx(styles.cardWrapper, styles.cardTwo)}
          onMouseEnter={() => setPlayYoutube(true)}
          onMouseLeave={() => setPlayYoutube(false)}
        >
          <div
            className={clsx(
              "z-[1] flex flex-col",
              "pt-[30px] px-6",
              "md:pt-0 md:pl-[39.5px] md:pb-10 md:w-[365px] md:mt-[99px]"
            )}
          >
            <h4 className={clsx(styles.cardTitle)}>YouTube channel</h4>
            <div className={clsx(styles.cardDescription, "max-w-[296px]")}>
              Subscribe to our YouTube channel today for exclusive content,
              early access to videos and to join a community of enthusiasts.
            </div>
            <Link href="https://youtube.com/@nevodavid">
              <TextButton customClasses={clsx("mt-4 font-[300]")}>
                YouTube Channel {`>`}
              </TextButton>
            </Link>
          </div>
          <LottieWrapper
            animationData={LottieYoutube}
            play={isMobile || playYoutube}
            className="absolute left-0 bottom-0 w-full z-0 h-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default GitRoomCommunitySection;
