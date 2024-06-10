import React from "react";
import Lottie from "react-lottie-player";

type LottieWrapperProps = {
  animationData: object;
  play?: boolean;
  className?: string;
};

const LottieWrapper: React.FC<LottieWrapperProps> = ({
  animationData,
  play = true,
  className = "",
}) => {
  return (
    <div className={className}>
      <Lottie
        loop
        animationData={animationData}
        play={play}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieWrapper;
