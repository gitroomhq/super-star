import React from "react";
import clsx from "clsx";
import Image from "next/image";

const StayFormSection: React.FC = () => {
  return (
    <div className={clsx("git-room-container", "flex flex-col items-center")}>
      <div
        className={clsx("relative w-[50px] h-[50px] md:w-[131px] md:h-[131px]")}
      >
        <Image
          src="/svgs/NoteEmail.svg"
          layout="fill"
          objectFit="contain"
          alt="stay form"
        />
      </div>

      <div
        className={clsx(
          "text-center font-chakra-petch text-white font-[600]",
          "mt-5 text-[28px] leadig-[30.8px]",
          "md:mt-6 max-w-[335px]",
          "md:text-[44px] md:leading-[48.4px] md:max-w-[790px]"
        )}
      >
        Stay Informed: Access Free Learning Resources and Articles
      </div>
      <div
        className={clsx(
          "text-center text-white font-[400]",
          "mt-5",
          "txt-sm leading-[16.8px] max-w-[335px]",
          "md:text-base md:leading-[19.2px]",
          "md:max-w-[515px]"
        )}
      >
        Stay ahead of the curve with our newsletter! Receive exclusive insights,
        updates, and tips straight to your inbox, ensuring you never miss a beat
        in the world of development.
      </div>

      {/* video content */}
      <div className={clsx("flex flex-col items-center")}>
        <div
          className={clsx(
            "text-center text-white font-[600]",
            "text-xl leading-[24.2px]",
            "md:text-2xl md:leadig-[29.05px]"
          )}
        >
          Nevo David 
        </div>
        <div
          className={clsx(
            "text-center text-white font-[400] ",
            "text-sm leading-[16.8px]",
            "max-w-[304px]",
            "md:text-base md:leading-[16.8px] md:max-w-[360px]"
          )}
        >
          Experienced full-stack developer with a decade of expertise. Working
          at Novu, the open-source notification infrastructure startup.
        </div>
      </div>
    </div>
  );
};

export default StayFormSection;
