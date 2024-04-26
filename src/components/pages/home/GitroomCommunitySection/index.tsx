import React from "react";
import clsx from "clsx";
import Lottie from "react-lottie-player";

import TextButton from "@/components/core/Buttons/TextButton";

import { CommunitySvg } from "@/components/svgs";

import LottieDiscord from "@/lottie/Discord.json";
import LottieYoutube from "@/lottie/Youtube.json";
import LottieOSS from "@/lottie/Oss.json";

import styles from "./styles.module.css";

const GitRoomCommunitySection = () => {
  return (
    <div
      className={clsx(
        "git-room-container",
        "flex flex-col",
        "mt-[100px] md:mt-[200px]"
      )}
    >
      <div
        className={clsx(
          "mx-auto",
          "relative mx-auto w-[50px] h-[50px]",
          "md:w-[68px] md:h-[68px]"
        )}
      >
        <CommunitySvg />
      </div>
      <div
        className={clsx(
          "mx-auto text-center",
          "mt-5 text-white font-[600] font-chakra-petch text-[28px] leading-[30.8px]",
          "w-full max-w-[319px] md:max-w-full",
          "md:text-[44px] md:mt-6"
        )}
      >
        Join the Gitroom Community
      </div>
      <div
        className={clsx(
          "mt-10 md:mt-[80.48px]",
          "flex flex-col gap-2 items-center",
          "md:flex-wrap md:flex-row",
          "md:gap-2.5"
        )}
      >
        <div className={clsx(styles.cardWrapper, "h-[415px] md:h-[520px]")}>
          <div className={clsx("absolute left-0 top-0 w-full z-0")}>
            <Lottie
              loop
              animationData={LottieOSS}
              style={{ width: "100%", height: "" }}
              play
            />
          </div>

          <div
            className={clsx(
              "z-[1] mt-auto flex flex-col",
              "px-6 pb-[33px]",
              "md:pb-10 md:pl-[39.5px] md:max-w-[539px]"
            )}
          >
            <div className={clsx(styles.cardTitle)}>OSS Friends</div>
            <div className={clsx(styles.cardDescription)}>
              Connect with community of open-source enthusiasts and
              collaborators. Share knowledge, seek advice, and foster meaningful
              relationships with like-minded developers passionate about
              advancing initiatives.
            </div>
            <TextButton customClasses={clsx("mt-4")}>
              Join Community {`>`}
            </TextButton>
          </div>
        </div>
        <div className={clsx(styles.cardWrapper, "h-[414px] md:h-[520px]")}>
          <div className={clsx("absolute left-0 top-0 w-full z-0")}>
            <Lottie
              loop
              animationData={LottieOSS}
              style={{ width: "100%", height: "" }}
              play
            />
          </div>

          <div
            className={clsx(
              "z-[1] mt-auto flex flex-col",
              "px-6 pb-[33px]",
              "md:pb-10 md:pl-[39.5px] md:max-w-[539px]"
            )}
          >
            <div className={clsx(styles.cardTitle)}>Community Deals</div>
            <div className={clsx(styles.cardDescription)}>
              Explore our community features designed to enhance collaboration
              and engagement. From discussion forums to collaborative projects,
              discover opportunities to connect, learn, and grow with fellow
              developers.
            </div>
            <TextButton customClasses={clsx("mt-4")}>
              Explorer Deals {`>`}
            </TextButton>
          </div>
        </div>
        <div className={clsx(styles.cardWrapper, "h-[280px] md:h-[300px]")}>
          <div
            className={clsx(
              "z-[1] flex flex-col",
              "px-6 pt-[30px]",
              "md:mt-[99px] md:max-w-[420px] md:pb-10 md:pl-[39.5px] md:pt-0"
            )}
          >
            <div className={clsx(styles.cardTitle)}>
              Join our Discord Server
            </div>
            <div className={clsx(styles.cardDescription)}>
              Connect with like-minded developers on our Discord server. Share
              insights, ask questions, and collaborate in real-time within our
              community.
            </div>
            <TextButton customClasses={clsx("mt-4")}>
              Join the Discord {`>`}
            </TextButton>
          </div>
          <div className={clsx("absolute left-0 bottom-0 w-full z-0")}>
            <Lottie
              loop
              animationData={LottieDiscord}
              style={{ width: "100%", height: "" }}
              play
            />
          </div>
        </div>
        <div className={clsx(styles.cardWrapper, "h-[280px] md:h-[300px]")}>
          <div
            className={clsx(
              "z-[1] flex flex-col",
              "pt-[30px] px-6",
              "md:pt-0 pl-[39.5px] md:pb-10 md:w-[365px] md:mt-[99px]"
            )}
          >
            <div className={clsx(styles.cardTitle)}>YouTube channel</div>
            <div className={clsx(styles.cardDescription)}>
              Subscribe to our YouTube channel today for exclusive content,
              early access to videos and to join a community of enthusiasts.
            </div>
            <TextButton customClasses={clsx("mt-4")}>
              YouTube Channel {`>`}
            </TextButton>
          </div>
          <div className={clsx("absolute left-0 bottom-0 w-full z-0")}>
            <Lottie
              loop
              animationData={LottieYoutube}
              style={{ width: "100%", height: "" }}
              play
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitRoomCommunitySection;
