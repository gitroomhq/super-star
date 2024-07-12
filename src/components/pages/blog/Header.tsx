import IconContainer from "@/components/common/IconContainer";
import clsx from "clsx";
import { FC } from "react";

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
        "absolute left-[0100%] top-[85%]",
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
            "radial-gradient(circle at 50%, #4C9AE0, transparent 70%)",
        }}
      />

      <div
        className={clsx(
          "absolute -translate-x-[36px] translate-y-[75px]",
          "w-[700px] h-[700px] md:w-[1200px] md:h-[1200px] opacity-[10%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #6200C4, transparent 70%)",
        }}
      />
    </div>

    {/* Light - Second Light */}
    <div
      className={clsx(
        "absolute left-[200px] top-[50%]",
        "-translate-x-[calc(50%)] -translate-y-[calc(50%)]",
        "md:-translate-x-[calc(50%)] md:-translate-y-[calc(50%)]",
        "w-[700px] h-[700px] md:w-[900px] md:h-[900px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "absolute translate-x-[24px] -translate-y-[50px]",
          "w-[700px] h-[700px] md:w-[900px] md:h-[900px] opacity-[8%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #4C9AE0, transparent 70%)",
        }}
      />

      <div
        className={clsx(
          "absolute -translate-x-[24px] translate-y-[50px]",
          "w-[700px] h-[700px] md:w-[900px] md:h-[900px] opacity-[8%]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #6200C4, transparent 70%)",
        }}
      />
    </div>

    {/* Light - Third Light */}
    <div
      className={clsx(
        "absolute left-[50%] top-[50%]",
        "-translate-x-[calc(50%)] -translate-y-[calc(50%)]",
        "md:-translate-x-[calc(50%-70px)] md:-translate-y-[calc(50%+200px)]",
        "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "absolute",
          "translate-x-[30px] -translate-y-[120px]",
          "md:translate-x-[40px] md:-translate-y-[160px]",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-20"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #4C9AE0, transparent 60%)",
        }}
      />

      <div
        className={clsx(
          "absolute",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-30"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #6200C4, transparent 70%)",
        }}
      />
    </div>
  </>
);

const BlogHeader: FC = (props) => {
  return (
    <div className="relative flex min-h-[502px] md:min-h-[680px] max-w-[1440px] mx-auto">
      <div
        className={clsx(
          "git-room-container",
          "flex flex-col items-center",
          "bg-no-repeat bg-center z-[2]"
        )}
      >
        <IconContainer
          iconSrc="/svgs/BlogHeaderIcon.svg"
          className="mt-[148px] w-[32.35px] h-[32.35px] md:mt-[208px] md:w-[44px] md:h-[44px]"
          width={50}
          height={50}
          alt="blog note"
          hasGradient
          gradientColor="#6F52E5"
          transparent={25}
        />
        <h2
          className={clsx(
            "mt-[28px]",
            "w-full max-w-[480px] md:max-w-[860px]",
            "text-center text-white font-chakra-petch font-[600]",
            "text-[28px] leading-[32px]",
            "md:text-[60px] md:leading-[66px]"
          )}
        >
          Unraveling the latest trends and tips in tech, development, and
          collaboration
        </h2>
        <div
          className={clsx(
            "mt-6",
            "w-full max-w-[291px] md:max-w-[500px]",
            "text-center text-[rgba(255,255,255,0.9)] font-matter font-[400]",
            "text-sm leading-[16.8px]",
            "md:font-base md:leading-[19.2px]"
          )}
        >
          Explore blog for thought-provoking articles, expert insights, and
          practical advice on navigating the dynamic landscape of technology,
          software development, and team collaboration.
        </div>
      </div>

      <BlackShadow />
      <PurpleShadow />
    </div>
  );
};

export default BlogHeader;
