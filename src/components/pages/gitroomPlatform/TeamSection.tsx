import React from "react";
import clsx from "clsx";
import Image from "next/image";

import SectionTitle from "@/components/core/SectionTitle";
import SectionSubTitle from "@/components/core/SectionSubTitle";
import LottieWrapper from "@/components/common/LottieWrapper";
import LottieTeam from "@/lottie/Team.json";
import LottieTeamMobile from "@/lottie/Team-mobile.json";

const PurpleShadow = () => (
  <>
    {/* Light - First Light */}
    <div
      className={clsx(
        "absolute left-[0%] top-[100%]",
        "-translate-x-[calc(50%)] -translate-y-[calc(50%)]",
        "md:-translate-x-[calc(50%-150px)] md:-translate-y-[calc(50%+100px)]",
        "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] z-[2]"
      )}
    >
      <div
        className={clsx(
          "absolute",
          "translate-x-[150px] -translate-y-[100px]",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-10 scale-y-75"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #2C8BFA, transparent 70%)",
        }}
      />
      <div
        className={clsx(
          "absolute",
          "translate-y-[100px]",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-10 scale-y-75"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #2320BE, transparent 70%)",
        }}
      />
    </div>

    {/* Light - Second Light */}
    <div
      className={clsx(
        "absolute left-[100%] top-[50%]",
        "-translate-x-[calc(50%)] -translate-y-[calc(50%)]",
        "md:-translate-x-[calc(50%+150px)] md:-translate-y-[calc(50%)]",
        "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "absolute",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-20 scale-y-75"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #4200FF, transparent 60%)",
        }}
      />
    </div>
  </>
);

const TeamSection = () => {
  return (
    <div
      className={clsx(
        "git-room-container",
        "flex flex-col items-center",
        "mt-[100px] md:mt-[160px]"
      )}
    >
      <div
        className={clsx(
          "relative mx-auto text-center w-[30.88px] h-[30.88px] md:w-[43px] md:h-[43px]"
        )}
      >
        <Image
          src="/svgs/TeamSectionIcon.svg"
          layout="fill"
          objectFit="contain"
          alt="team"
        />
      </div>
      <SectionTitle
        customClasses={clsx(
          "w-full mt-[28.82px] md:mt-[29.5px] max-w-[283px]",
          "md:mt-[37px]"
        )}
      >
        Team
      </SectionTitle>
      <SectionSubTitle customClasses={clsx("mt-5 w-full max-w-[556px]")}>
        {`Build a formidable and unbeatable team utilizing GitRoom's comprehensive suite of collaboration tools. Effortlessly enhance your team's productivity by optimizing communication channels, delegating tasks efficiently, and cultivating a harmonious synergy among all members. `}
        <br />
        <br />
        {`With GitRoom's robust toolkit at your disposal, you can propel your team towards unparalleled success and achieve extraordinary results.`}
      </SectionSubTitle>
      <LottieWrapper
        animationData={LottieTeam}
        className="hidden sm:block mt-8"
      />
      <LottieWrapper
        animationData={LottieTeamMobile}
        className="block sm:hidden mt-8"
      />

      <PurpleShadow />
    </div>
  );
};

export default TeamSection;
