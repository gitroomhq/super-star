import React from "react";
import Lottie from "react-lottie-player";
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

type LottieWrapperProps = {
  animationData?: object;
  play?: boolean;
  className?: string;
  path?: string;
  pic?: string;
};

const LottieWrapper: React.FC<LottieWrapperProps> = ({
  animationData,
  pic = "",
  path = "",
  play = true,
  className = "",
}) => {
  if (path) {
    return (
      <div className={className}>
        <div className="w-full h-full relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={pic} alt="hero" className="absolute top-0 left-0 z-[1] w-full" />
          <DotLottiePlayer
            src={path}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%", position: 'relative', zIndex: 2 }}
          />
        </div>
      </div>
    )
  }
  return (<div className={className}>
      <Lottie
        animationData={animationData}
        loop
        play={play}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieWrapper;
