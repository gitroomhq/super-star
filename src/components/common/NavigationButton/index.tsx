import { useSwiper } from "swiper/react";

// @ts-ignore
import IconButton from "@/components/core/buttons/IconButton";
import { ChevLeftSvg, ChevRightSvg } from "@/components/svgs";

const NavigationButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-center items-center gap-3 mt-10">
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

export default NavigationButton;
