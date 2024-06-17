import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Lottie from "react-lottie-player";
import NetLottie from "@/lottie/Net.json";
import IconContainer from "@/components/common/IconContainer";

const Shadow = () => (
  <>
    <div
      className={clsx(
        "left-[50%] top-[0px] md:-top-[100px] translate-x-[-50%]",
        "absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] z-[0]"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 80%)",
      }}
    />
    <div
      className={clsx(
        "left-[50%] top-[0px] md:-top-[100px] translate-x-[-50%]",
        "absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] z-[0]"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 80%)",
      }}
    />
    <div
      className={clsx(
        "left-[50%] top-[0px] md:-top-[100px] translate-x-[-50%]",
        "absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] z-[0]"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 80%)",
      }}
    />
  </>
);

const StayFormSection: React.FC = () => {
  return (
    <div
      className={clsx(
        "relative",
        "mt-[84px] md:mt-[184px]",
        "git-room-container",
        "flex flex-col items-center !px-0"
      )}
    >
      <Shadow />
      <IconContainer
        iconSrc="/svgs/NoteEmail.svg"
        className="w-[50px] h-[50px] md:w-[68px] md:h-[68px]"
        width={50}
        height={50}
        alt="stay form"
        hasGradient
        gradientColor="#293C5D"
        transparent={35}
        opacity={40}
      />
      <h3
        className={clsx(
          "text-center font-chakra-petch text-white font-[600]",
          "mt-5 text-[28px] leading-[30.8px] mx-5",
          "md:mt-6 max-w-[335px]",
          "md:text-[44px] md:leading-[48.4px] md:max-w-[790px] z-[1]"
        )}
      >
        Stay Informed: Access Free Learning Resources and Articles
      </h3>
      <div
        className={clsx(
          "font-matter text-center text-[rgba(255,255,255,0.9)] font-[400]",
          "mt-5 mx-5",
          "txt-sm leading-[16.8px] max-w-[335px]",
          "md:text-base md:leading-[19.2px]",
          "md:max-w-[515px] z-[1]"
        )}
      >
        Stay ahead of the curve with our newsletter! Receive exclusive insights,
        updates, and tips straight to your inbox, ensuring you never miss a beat
        in the world of development.
      </div>
      <div
        className={clsx(
          "relative mt-[-133px] overflow-hidden w-full h-[570px]",
          "flex justify-center"
        )}
      >
        <Lottie
          loop
          animationData={NetLottie}
          play
          style={{
            position: "absolute",
            width: 936,
            height: 570,
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
          }}
        />

        <div className="absolute z-[11] top-[322px]">
          <Image
            src="/pngs/avatar.png"
            width={2000}
            height={2000}
            alt="Nevo"
            className="w-[77px] h-[77px] absolute top-[6px] left-[50%] -translate-x-[50%]"
          />
          <Image src="/svgs/avatar-bg.svg" width={86} height={86} alt="Nevo" />
        </div>
      </div>

      <div
        className={clsx(
          "mt-[-144px] mx-5",
          "flex flex-col items-center z-[11]"
        )}
      >
        <div
          className={clsx(
            "text-center text-white font-[600]",
            "text-xl leading-[24.2px]",
            "md:text-2xl md:leading-[29.05px]"
          )}
        >
          Nevo David
        </div>
        <div
          className={clsx(
            "mt-2",
            "font-matter text-center text-[rgba(255,255,255,0.9)] font-[400] ",
            "text-sm leading-[16.8px]",
            "max-w-[304px]",
            "md:text-base md:leading-[19.1px] md:max-w-[360px]"
          )}
        >
          Experienced full-stack developer with a decade of expertise. Working
          at Novu, the open-source notification infrastructure startup.
        </div>
      </div>

      <div
        className="left-[50%] -translate-x-[50%] translate-y-[50%] pointer-events-none z-[1]"
        style={{
          width: "1200px",
          height: "1000px",
          background: "radial-gradient(circle, #0075FF 0%, transparent 80%)",
          // transform: "scaleY(0.5)",
          position: "absolute",
          bottom: "-80px",
          opacity: 0.2,
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default StayFormSection;
