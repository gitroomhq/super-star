import clsx from "clsx";
import Image from "next/image";
import { Button } from "@/components/core/buttons";
import IconContainer from "@/components/common/IconContainer";
import Link from "next/link";

const BlackShadow = () => (
  <>
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
        "absolute w-[1200px] h-[1200px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 80%)",
      }}
    />
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
        "absolute w-[1200px] h-[1200px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 80%)",
      }}
    />
  </>
);

const PurpleShadow = () => (
  <>
    {/* Light - Ellipse 8376 */}
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
        "absolute w-[900px] h-[1100px] md:w-[1200px] md:h-[1500px] z-[0] opacity-10 scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #0A49EC, transparent 80%)",
      }}
    />

    {/* Light - Ellipse 8375 */}
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
        "absolute w-[900px] h-[1100px] md:w-[1200px] md:h-[1500px] z-[0] opacity-10 scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #1400FF, transparent 80%)",
      }}
    />
    {/* Light - Light */}
    <div>
      <div
        className={clsx(
          "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
          "absolute w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] z-[0] opacity-20"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #4C9AE0, transparent 60%)",
        }}
      />

      <div
        className={clsx(
          "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
          "absolute w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] z-[0] opacity-20"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #6200C4, transparent 60%)",
        }}
      />
    </div>
  </>
);

const OSSFriendsHeader = () => {
  return (
    <div className="flex items-center min-h-[543px] md:min-h-[750px] relative">
      <div
        className={clsx(
          "git-room-container flex flex-col items-center justify-center z-[2]"
        )}
      >
        <IconContainer
          iconSrc="/svgs/OSSHeaderIcon.svg"
          className="mx-auto w-[28.96px] h-[26.23px] md:w-[39.39px] md:h-[35.68px]"
          width={50}
          height={50}
          alt="oss header"
          hasGradient
          gradientColor="#6F52E5"
          transparent={25}
        />
        <h2
          className={clsx(
            "text-center text-white font-chakra-petch font-[600] max-w-[335px]",
            "mt-[27.08px] text-[28px] leading-[30.8px]",
            "md:mt-[35.07px] md:text-[60px] md:leading-[66px] md:max-w-[765px]"
          )}
        >
          Do you want to be an open-source friend?
        </h2>
        <div
          className={clsx(
            "text-[rgba(255,255,255,0.9)] font-matter text-center max-w-[335px]",
            "text-sm leading-[16.8px]",
            "md:text-base md:leading-[19.1px]",
            "w-full mt-5 max-w-[500px]"
          )}
        >
          In Gitroom, we are proud to collaborate with a diverse group of
          partners to promote open-source software and the values of
          transparency, collaboration, and community that it represents.{" "}
        </div>
        <Link href="https://gitroom.com/auth">
          <Button
            customClasses={clsx(
              "mt-[35px] w-[217px] h-[42px] text-sm leading-[16px]",
              "md:text-base md:leading-[19.1px] md:mt-5 md:w-[242px] md:h-12"
            )}
          >
            Join the Gitroom platform
          </Button>
        </Link>
      </div>

      <div className="absolute left-[50%] top-[0px] md:-top-[12px] -translate-x-[50%] w-[690px] h-[690px] md:w-[1164px] md:h-[1164px] z-[1]">
        <Image src="/svgs/OSSBg.svg" height={1164} width={1164} alt="" />
      </div>

      <BlackShadow />
      <PurpleShadow />
    </div>
  );
};

export default OSSFriendsHeader;
