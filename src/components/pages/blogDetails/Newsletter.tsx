import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import { SubscribeForm } from "@/components/common";

const BlackShadow = () => (
  <>
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
        "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 60%)",
      }}
    />
  </>
);

const GradientEffect = () => {
  return (
    <>
      <div
        className={clsx(
          "absolute left-[30%] top-[0%]",
          "-translate-x-[calc(50%)] -translate-y-[calc(50%-50px)]",
          "w-[1400px] h-[1400px] sm:w-[1500px] sm:h-[1500px] z-[0]"
        )}
      >
        <div
          className={clsx(
            "absolute",
            "w-[1400px] h-[1400px] sm:w-[1500px] sm:h-[1500px] opacity-10"
          )}
          style={{
            background:
              "radial-gradient(circle at 50%, #0047FF, transparent 20%)",
          }}
        />
        <div
          className={clsx(
            "absolute",
            "w-[1400px] h-[1400px] sm:w-[1500px] sm:h-[1500px] opacity-10"
          )}
          style={{
            background:
              "radial-gradient(circle at 50%, #0020C7, transparent 40%)",
          }}
        />
      </div>

      <div
        className={clsx(
          "absolute left-[70%] top-[100%]",
          "-translate-x-[calc(50%)] -translate-y-[calc(50%+50px)]",
          "w-[1400px] h-[1400px] sm:w-[1500px] sm:h-[1500px] z-[0]"
        )}
      >
        <div
          className={clsx(
            "absolute",
            "w-[1400px] h-[1400px] sm:w-[1500px] sm:h-[1500px] opacity-10"
          )}
          style={{
            background:
              "radial-gradient(circle at 50%, #7526F4, transparent 40%)",
          }}
        />
        <div
          className={clsx(
            "absolute",
            "w-[1400px] h-[1400px] sm:w-[1500px] sm:h-[1500px] opacity-10"
          )}
          style={{
            background:
              "radial-gradient(circle at 50%, #8433EA, transparent 60%)",
          }}
        />
      </div>
    </>
  );
};

const BorderEffect = () => {
  return (
    <>
      <div
        className={clsx(
          "left-[50%] top-[0%] -translate-x-[50%] -translate-y-[50%]",
          "absolute w-[800px] h-[800px] z-[0] scale-y-50 opacity-60"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #D4C2FF, transparent 30%)",
        }}
      />

      <div
        className={clsx(
          "left-[100%] top-[100%] -translate-x-[50%] -translate-y-[50%]",
          "absolute w-[800px] h-[800px] z-[0] opacity-30"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #CB5DFF, transparent 30%)",
        }}
      />
    </>
  );
};

function Newsletter() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;
  return (
    <>
      {createPortal(
        <section className="my-10 !px-0">
          <div className="relative w-full p-[1px] bg-[#B9C8FF33] rounded overflow-hidden">
            <BorderEffect />
            <div className="relative bg-star-background bg-center w-full py-[75px] px-5 sm:px-[60px] md:px-[144px] md:py-[53px] flex flex-col items-center gap-6 rounded overflow-hidden">
              <BlackShadow />
              <GradientEffect />
              <div className="font-semibold font-chakra-petch text-[36px] leading-[40px] text-center z-[1]">
                Stay informed, subscribe for the newsletter now!
              </div>
              <SubscribeForm />
            </div>
          </div>
        </section>,
        document.querySelector("#register-newsletter")! ||
          document.createElement("div")
      )}
    </>
  );
}

export default Newsletter;
