import React from "react";
import Lottie from "react-lottie-player";
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

type LottieWrapperProps = {
  animationData?: object;
  play?: boolean;
  className?: string;
  path?: string;
};

const LottieWrapper: React.FC<LottieWrapperProps> = ({
  animationData,
  path = "",
  play = true,
  className = "",
}) => {
  if (path) {
    return (
      <div className={className}>
        <DotLottiePlayer
          src={path}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
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
