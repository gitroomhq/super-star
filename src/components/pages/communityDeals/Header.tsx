import clsx from "clsx";
import { Button } from "@/components/core/buttons";
import IconContainer from "@/components/common/IconContainer";
import Link from "next/link";

const BlackShadow = () => (
  <>
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
        "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 80%)",
      }}
    />
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
        "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 80%)",
      }}
    />
  </>
);

const PurpleShadow = () => (
  <>
    {/* Light - First Light */}
    <div
      className={clsx(
        "absolute -left-[33px] top-[75%]",
        "-translate-x-[calc(50%)] -translate-y-[calc(50%)]",
        // "md:-translate-x-[calc(50%+248px)] md:-translate-y-[calc(50%-30px)]",
        "w-[700px] h-[700px] md:w-[1200px] md:h-[1200px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "absolute translate-x-[36px] -translate-y-[75px]",
          "w-[700px] h-[700px] md:w-[1200px] md:h-[1200px] opacity-[8%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #20F2FF, transparent 70%)",
        }}
      />

      <div
        className={clsx(
          "absolute -translate-x-[36px] translate-y-[75px]",
          "w-[700px] h-[700px] md:w-[1200px] md:h-[1200px] opacity-[10%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #8F2FEE, transparent 70%)",
        }}
      />
    </div>

    {/* Light - Second Light */}
    <div
      className={clsx(
        "absolute left-[50%] top-[50%]",
        "-translate-x-[calc(50%+140px)] -translate-y-[calc(50%-15px)]",
        "md:-translate-x-[calc(50%+248px)] md:-translate-y-[calc(50%-30px)]",
        "w-[700px] h-[700px] md:w-[900px] md:h-[900px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "absolute translate-x-[24px] -translate-y-[50px]",
          "w-[700px] h-[700px] md:w-[900px] md:h-[900px] opacity-[5%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #20F2FF, transparent 70%)",
        }}
      />

      <div
        className={clsx(
          "absolute -translate-x-[24px] translate-y-[50px]",
          "w-[700px] h-[700px] md:w-[900px] md:h-[900px] opacity-[8%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #8F2FEE, transparent 70%)",
        }}
      />
    </div>

    {/* Light - Third Light */}
    <div
      className={clsx(
        "absolute left-[50%] top-[50%]",
        "-translate-x-[calc(50%-218px)] -translate-y-[calc(50%+200px)]",
        "md:-translate-x-[calc(50%-318px)] md:-translate-y-[calc(50%+300px)]",
        "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "absolute",
          "-translate-x-[50px] -translate-y-[50px]",
          "md:-translate-x-[100px] md:-translate-y-[100px]",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-20"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #20F2FF, transparent 60%)",
        }}
      />

      <div
        className={clsx(
          "absolute",
          "translate-x-[50px] translate-y-[50px]",
          "md:translate-x-[100px] md:translate-y-[100px]",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-30"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #8F2FEE, transparent 60%)",
        }}
      />
    </div>
  </>
);

const CommunityDealsHeader = () => {
  return (
    <div className="relative flex items-center pt-[160px] pb-[153px] md:pt-[200px] md:pb-[180px] max-w-[1440px] mx-auto">
      <div
        className={clsx(
          "git-room-container flex flex-col items-center justify-center z-[2]"
        )}
      >
        <IconContainer
          iconSrc="/svgs/CommunityDealsPageHeader.svg"
          className="w-[30.88px] h-[30.88px] md:w-[42px] md:h-[42px] mx-auto"
          width={50}
          height={50}
          alt="community deals header"
          hasGradient
          gradientColor="#6F52E5"
          transparent={25}
        />
        <h2
          className={clsx(
            "text-center text-white font-chakra-petch font-[600]",
            "mt-4 text-[28px] leading-[30.8px]",
            "md:mt-5 md:text-[60px] md:leading-[66px]"
          )}
        >
          Community Deals
        </h2>
        <div
          className={clsx(
            "text-[rgba(255,255,255,0.9)] font-matter text-center",
            "text-sm leading-[16.8px]",
            "md:text-base md:leading-[19.1px]",
            "w-full mt-5 max-w-[550px]"
          )}
        >
          Explore our community features designed to enhance collaboration and
          engagement. From discussion forums to collaborative projects, discover
          opportunities to connect, learn, and grow with fellow developers.
        </div>
        <div
          className={clsx(
            "mt-11 text-center text-[rgba(255,255,255,0.9)] font-chakra-petch font-[500]",
            "text-[22px] leading-[28.6px]"
          )}
        >
          Want to add your software deal?
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

      <BlackShadow />
      <PurpleShadow />
    </div>
  );
};

export default CommunityDealsHeader;
