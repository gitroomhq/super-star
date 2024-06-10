import { clsx } from "clsx";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import NavigationButton from "@/components/common/NavigationButton";
import GithubCard from "../home/GithubSection/GithubCard";
import { GithubInfo } from "@/mockData/github";
import { IGithubInfo } from "@/types";
import IconContainer from "@/components/common/IconContainer";

const RelatedPost = () => {
  return (
    <>
      <div className="git-room-container mt-[100px] md:flex">
        <div className={clsx("flex-flex-col mx-auto")}>
          <IconContainer
            iconSrc="/svgs/BlogHeaderIcon.svg"
            width={50}
            height={50}
            alt="blog note"
            className="relative mx-auto w-[32.35px] h-[32.35px] md:w-[44px] md:h-[44px]"
            hasGradient
            gradientColor="#B6A3FF"
          />

          <div
            className={clsx(
              "font-chakra-petch font-[600] text-[28px] leading-[28px] md:text-[44px] md:leading-[57.2px] text-center text-white",
              "mt-[28.2px] md:mt-[36px]"
            )}
          >
            Related Posts
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "swiper-github-slider-wrapper !mt-6 md:!mt-[80px] mx-auto"
        )}
      >
        <Swiper
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            1080: {
              slidesPerView: 3,
            },
          }}
          centeredSlides
        >
          <NavigationButton />
          <div className={clsx("flex justify-center items-stretch")}>
            {GithubInfo.map((item: IGithubInfo, idx: number) => (
              <SwiperSlide key={idx}>
                <GithubCard key={idx} githubInfo={item} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default RelatedPost;
