import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

const GithubCard = () => {
  return (
    <div className={clsx(styles.githubCard)}>
      <div
        className={clsx(
          "flex flex-col justify-center items-center",
          "w-full h-[210px]",
          "lg:h-[263px]"
        )}
      ></div>
      <div
        className={clsx(
          "flex flex-col gap-4",
          "w-full h-[180px]",
          "py-[24.91px] px-4",
          "lg:py-[30px] lg:h-[197px]"
        )}
      >
        <div
          className={clsx(
            "w-full overflow-hidden text-ellipsis whitespace-nowrap",
            "text-white font-[500]",
            "text-lg leading-[19.8px]",
            "lg:text-[22px] lg:leading-[28px]"
          )}
        >
          Everything I know about the GitHub trending feed
        </div>
        <div className={clsx("flex items-center")}>
          <div
            className={clsx(
              "rounded-full bg-center bg-contain",
              "w-[34px] h-[34px]",
              "lg:w-[35.06px] lg:h-[35.06px]"
            )}
            style={{ backgroundImage: "url(/pngs/person.png)" }}
          ></div>
          <div
            className={clsx(
              "font-[500] text-[rgba(255,255,255,0.8)]",
              "ml-[9.64px] text-sm leading-[18.2px]",
              "lg:text-base lg:leading-[20.8px]"
            )}
          >
            Nevo David
          </div>
          <div
            className={clsx(
              "mx-[17.53px] w-[1px] h-4 bg-[rgba(255,255,255,0.4)]"
            )}
          ></div>
          <div
            className={clsx(
              "font-[500] text-[rgba(255,255,255,0.6)]",
              "text-sm leading-[18.2px]",
              "lg:text-base lg:leading-[20.8px]"
            )}
          >
            March 16, 2024
          </div>
        </div>
        <div
          className={clsx(
            "text-white text-[400] line-clamp-2",
            "text-[13px] leading-[19. 5px]"
          )}
        >
          Getting into the GitHub trending feed is the dream, especially in
          higher places. In Novu, we were trending on the top spot for almost a
          week and got around 7000 stars. You immediately rush with tons of
          stars, contributors, and Discord members when you are there. The
          success of many companies relies on this feed. 
        </div>
      </div>
    </div>
  );
};

export default GithubCard;
