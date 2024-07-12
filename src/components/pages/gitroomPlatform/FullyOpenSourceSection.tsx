import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/core/buttons";
import SectionTitle from "@/components/core/SectionTitle";
import SectionSubTitle from "@/components/core/SectionSubTitle";
import { FC, useMemo } from "react";

const BlackShadow = () => (
  <>
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[calc(50%)]",
        "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 65%)",
      }}
    />
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[calc(50%)]",
        "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 65%)",
      }}
    />
  </>
);

const Shadow = () => (
  <>
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[calc(50%)]",
        "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[0] opacity-[8%]"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #1A83FF, transparent 60%)",
      }}
    />

    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[calc(50%)]",
        "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[0] opacity-[8%]"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #4EBFFF, transparent 60%)",
      }}
    />

    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[calc(50%)]",
        "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[0] opacity-[8%]"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #4EBFFF, transparent 70%)",
      }}
    />
  </>
);

const FullyOpenSourceSection: FC<{stars: number}> = (props) => {
  const router = useRouter();

  const calculateStars = useMemo(() => {
    return (props.stars / 1000).toFixed(1) + "k";
  }, [props.stars]);

  return (
    <div
      className={clsx(
        "git-room-container",
        "my-[159px] md:mt-[312px] md:mb-[332px] flex flex-col justify-center"
      )}
    >
      <div
        className={clsx(
          "mx-auto relative",
          "w-[30.88px] h-[30.88px] md:w-[42px] md:h-[42px] mt-3 z-[2]"
        )}
      >
        <Image
          src="/svgs/FullyOpenSourceSectionIcon.svg"
          layout="fill"
          objectFit="contain"
          alt="fully opensource"
        />
      </div>
      <SectionTitle customClasses={clsx("mt-[24.83px] md:mt-[36px] z-[2]")}>
        We are fully open-source
      </SectionTitle>
      <SectionSubTitle customClasses={clsx("mt-5 z-[2]")}>
        Maintain full transparency and collaboration, acting solely as an
        initiative.
      </SectionSubTitle>
      <div className={clsx("mt-12 flex justify-center gap-[10px] z-[2]")}>
        <Button
          variant="secondary-white"
          customClasses={clsx("w-[170px] h-[48px]")}
          onClick={() => router.push("https://docs.gitroom.com/use/analytics")}
        >
          Read the docs
        </Button>
        <Button
          variant="primary-white"
          customClasses={clsx("w-[170px] h-[48px]")}
          onClick={() => window.open("https://github.com/gitroomhq/gitroom")}
        >
          <div className={clsx("relative w-5 h-5 mr-2")}>
            <Image
              src="/svgs/GithubIcon.svg"
              layout="fill"
              objectFit="contain"
              alt="github"
            />
          </div>
          Star Us{" "}
          <div
            className={clsx("mx-2 w-[1px] h-[18px] bg-[rgba(0,0,0,0.25)]")}
          ></div>
          {calculateStars}
        </Button>
      </div>

      <BlackShadow />
      <Shadow />
    </div>
  );
};

export default FullyOpenSourceSection;
