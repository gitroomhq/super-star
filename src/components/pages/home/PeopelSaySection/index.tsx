import React from "react";
import { clsx } from "clsx";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import PeopleCard from "./PeopleCard";
import { IconButton } from "@/components/core/Buttons";
import { ChevLeftSvg, ChevRightSvg } from "@/components/svgs";

import "swiper/css";

const PeopleSaySection: React.FC = () => {
  const peopleCardsInfo = [
    {
      logoSrc: "/svgs/PeopleSayLogo1.svg",
      description:
        "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      person: {
        imgSrc: "/pngs/people1.png",
        name: "Guillermo Rauch",
        address: "COO @ Medusa",
      },
    },
    {
      logoSrc: "/svgs/PeopleSayLogo2.svg",
      description:
        "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      person: {
        imgSrc: "/pngs/people1.png",
        name: "Tomer Barnea",
        address: "COO @ Medusa",
      },
    },
    {
      logoSrc: "/svgs/PeopleSayLogo3.svg",
      description:
        "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      person: {
        imgSrc: "/pngs/people1.png",
        name: "Tomer Barnea",
        address: "COO @ Medusa",
      },
    },
    {
      logoSrc: "/svgs/PeopleSayLogo4.svg",
      description:
        "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      person: {
        imgSrc: "/pngs/people1.png",
        name: "Tomer Barnea",
        address: "COO @ Medusa",
      },
    },
    {
      logoSrc: "/svgs/PeopleSayLogo5.svg",
      description:
        "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      person: {
        imgSrc: "/pngs/people1.png",
        name: "Tomer Barnea",
        address: "COO @ Medusa",
      },
    },
    {
      logoSrc: "/svgs/PeopleSayLogo1.svg",
      description:
        "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      person: {
        imgSrc: "/pngs/people1.png",
        name: "Guillermo Rauch",
        address: "COO @ Medusa",
      },
    },
    {
      logoSrc: "/svgs/PeopleSayLogo2.svg",
      description:
        "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      person: {
        imgSrc: "/pngs/people1.png",
        name: "Tomer Barnea",
        address: "COO @ Medusa",
      },
    },
    {
      logoSrc: "/svgs/PeopleSayLogo3.svg",
      description:
        "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      person: {
        imgSrc: "/pngs/people1.png",
        name: "Tomer Barnea",
        address: "COO @ Medusa",
      },
    },
    {
      logoSrc: "/svgs/PeopleSayLogo4.svg",
      description:
        "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      person: {
        imgSrc: "/pngs/people1.png",
        name: "Tomer Barnea",
        address: "COO @ Medusa",
      },
    },
    {
      logoSrc: "/svgs/PeopleSayLogo5.svg",
      description:
        "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      person: {
        imgSrc: "/pngs/people1.png",
        name: "Tomer Barnea",
        address: "COO @ Medusa",
      },
    },
  ];

  return (
    <div
      className={clsx("mt-[100px] md:mt-[200px]", "w-full", "flex flex-col")}
    >
      <div className={clsx("flex flex-col items-center")}>
        <div
          className={clsx("relative w-[50px] h-[50px] md:w-[68px] md:h-[68px]")}
        >
          <Image
            src="/svgs/PeopleSayIcon.svg"
            layout="fill"
            objectFit="contain"
            alt="people say"
          />
        </div>
        <div
          className={clsx(
            "mt-5",
            "text-white font-chakra-petch text-[28px] font-semibold text-center"
          )}
        >
          What People Say
        </div>
      </div>
      <div className={clsx("mt-[66px]")}>
        <Swiper
          loop={true}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            960: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 5,
            },
          }}
        >
          <NavigationButton />
          {peopleCardsInfo.map((item, idx: number) => (
            <SwiperSlide key={idx}>
              <div className={clsx("mx-3", "flex justify-center")}>
                <PeopleCard
                  logoSrc={item.logoSrc}
                  description={item.description}
                  person={item.person}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const NavigationButton = () => {
  const swiper = useSwiper();

  return (
    <div className={clsx("mt-10", "flex items-center justify-center gap-3")}>
      <IconButton
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <ChevLeftSvg width={"8px"} height={"12px"} />
      </IconButton>
      <IconButton
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <ChevRightSvg width={"8px"} height={"12px"} />
      </IconButton>
    </div>
  );
};

export default PeopleSaySection;
