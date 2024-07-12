import React from "react";
import { clsx } from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";

import PeopleCard from "./PeopleCard";
import NavigationButton from "@/components/common/NavigationButton";

import "swiper/css";
import IconContainer from "@/components/common/IconContainer";

const Shadow = () => (
  <>
    <div
      className={clsx(
        "left-[50%] top-[0px] md:-top-[150px] translate-x-[-50%]",
        "absolute w-[1200px] h-[600px] md:h-[800px] z-[0]"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 80%)",
      }}
    />
    <div
      className={clsx(
        "left-[50%] top-[0px] md:-top-[150px] translate-x-[-50%]",
        "absolute w-[1200px] h-[600px] md:h-[800px] z-[0]"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 80%)",
      }}
    />
  </>
);

const PeopleSaySection: React.FC = () => {
  const peopleCardsInfo = [
    {
      logo: { src: "/svgs/PeopleSayLogo1.svg", width: 60, height: 60 },
      description:
        "Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!",
      person: {
        imgSrc: "/pngs/people1.png",
        name: "Nicklas Gellner",
        role: "COO",
        company: "Medusa",
        link: "https://github.com/medusajs/medusa",
      },
    },
    {
      logo: { src: "/svgs/PeopleSayLogo2.svg", width: 60, height: 60 },
      description:
        "Nevo has achieved great growth for Novu in a remarkably short time. His creative, and practical strategies have resulted in immediate and tangible results.",
      person: {
        imgSrc: "/pngs/people2.png",
        name: "Tomer Barnea",
        role: "CEO",
        company: "Novu",
        link: "https://github.com/novuhq/novu",
      },
    },
    {
      logo: { src: "/svgs/PeopleSayLogo3.svg", width: 80, height: 60 },
      description:
        "The content is clear, creative and practical, and can have an immediate impact, highly recommend to anyone looking to grow their Github library.",
      person: {
        imgSrc: "/pngs/people3.png",
        name: "Zevi Reinitz",
        role: "Head of Product Marketing",
        company: "Livecycle",
        link: "https://github.com/livecycle/preevy",
      },
    },
    {
      logo: { src: "/svgs/PeopleSayLogo4.svg", width: 60, height: 60 },
      description:
        "Nevo's knowledge and expertise in building communities, engaging with developers, and reaching out to them wherever they are, is invaluable.",
      person: {
        imgSrc: "/pngs/people4.png",
        name: "Michael Solati",
        role: "DevRel",
        company: "Amplication",
        link: "https://github.com/amplication/amplication",
      },
    },
    {
      logo: { src: "/svgs/PeopleSayLogo5.svg", width: 60, height: 60 },
      description:
        "Nevo's thoughts were insightful, his ideas and strategies are experimented with regular improvements towards the growth of GitHub stargazers and contributors.",
      person: {
        imgSrc: "/pngs/people5.png",
        name: "Teja Kummarikuntla",
        role: "Developer Advocate",
        company: "ToolJet",
        link: "https://github.com/ToolJet/ToolJet",
      },
    },
  ];

  return (
    <>
      <div className="git-room-container">
        <Shadow />
        <div
          className={clsx(
            "mt-[100px] md:mt-[200px]",
            "w-full",
            "flex flex-col z-[1]"
          )}
        >
          <div className={clsx("flex flex-col items-center")}>
            <IconContainer
              iconSrc="/svgs/PeopleSayIcon.svg"
              className="w-[50px] h-[50px] md:w-[68px] md:h-[68px]"
              width={50}
              height={50}
              alt="people say"
              hasGradient
              gradientColor="#6F52E5"
            />
            <h3
              className={clsx(
                "mt-5",
                "text-center font-[600] text-white font-chakra-petch text-[28px] ",
                "md:text-[44px] md:leading-[57.2px] z-[1]"
              )}
            >
              What People Say
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1442px] relative mt-[66px] md:mt-20 h-[380px] mx-auto">
        <div className="hidden xs:block absolute h-[300px] w-[50px] laptop:w-[110px] lg:w-[120px] top-0 left-0 bg-card-mask z-[1]" />
        <div className="hidden xs:block absolute h-[300px] w-[50px] laptop:w-[110px] lg:w-[120px] top-0 right-0 bg-card-mask-reverse z-[1]" />
        <div className="max-w-[1440px] relative mx-auto h-[380px] overflow-hidden">
          <div className="absolute top-0 left-[50%] -translate-x-[50%] w-[calc((100%-30px)*3)] xs:w-[1000px] md:max-w-max md:w-[calc((100%-80px)/3*5)] laptop:w-[1930px] mx-auto">
            <Swiper
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                },
                960: {
                  slidesPerView: 5,
                },
              }}
              slidesPerView={7}
              centeredSlides
              cssMode={true}
            >
              <NavigationButton />
              {peopleCardsInfo.map((item, idx: number) => (
                <SwiperSlide key={idx}>
                  <div className={clsx("flex justify-center")}>
                    <PeopleCard
                      logo={item.logo}
                      description={item.description}
                      person={item.person}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleSaySection;
