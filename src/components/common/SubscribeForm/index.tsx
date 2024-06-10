import React, { useState } from "react";
import { useRouter } from "next/router";

import clsx from "clsx";

import { validateEmail } from "@/utlis/validate";

import styles from "./styles.module.css";

interface Props {
  customClasses?: string;
}

const SubscribeForm: React.FC<Props> = ({ customClasses }) => {
  const [value, setValue] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [successed, setSuccessed] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = () => {
    if (successed) {
      router.push("/blog");
    } else {
      setSubmitted(true);
      if (validateEmail(value).validate) {
        setSuccessed(true);
      }
    }
  };

  return (
    <div
      className={clsx(
        styles.componentContainer,
        customClasses,
        submitted && validateEmail(value).validate && styles.hasError,
        focused && styles.focused
      )}
    >
      {successed ? (
        <div className={clsx("flex h-[50px] md:h-[56px]")}>
          <div
            className={clsx(
              "flex items-center",
              "text-[rgba(179,133,255,1)] font-chakra-petch font-[600]",
              "text-sm leading-[16.8px] max-w-[200px] md:text-[20px] md:leading-[22px] md:max-w-[323px]"
            )}
          >
            Thank you! The newsletter will be in your mailbox very soon.
          </div>
          <button
            className={clsx(styles.btnSubmit, "ml-auto")}
            onClick={handleSubmit}
          >
            Explore Blog
          </button>
        </div>
      ) : (
        <div
          className={clsx(
            styles.inputWrapper,
            submitted && !validateEmail(value).validate && styles.hasError,
            validateEmail(value).validate && styles.filled,
            "realtive"
          )}
        >
          <div
            style={{
              background: "radial-gradient(#cccbff, #ffffff00 50%) no-repeat",
              width: "300px",
              height: "50px",
              top: "-40%",
              left: "-10%",
              position: "absolute",
              opacity: "0.65",
            }}
            className="block hover:hidden"
          />
          <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] left-[50%] -translate-x-[50%]">
            <input
              className={clsx(styles.input, "!h-full !w-full")}
              placeholder="Enter your e-mail"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
              onFocus={() => {
                setFocused(true);
              }}
              onBlur={() => {
                setFocused(false);
              }}
            />
          </div>
          <button className={clsx(styles.btnSubmit, "-translate-y-[1px]")} onClick={handleSubmit}>
            Subscribe
          </button>
        </div>
      )}
      {submitted && !validateEmail(value).validate && (
        <div className={clsx(styles.labelValidate)}>
          {validateEmail(value).validateStr}
        </div>
      )}

      <div className={clsx(styles.labelReference)}>
        * Add your email, a video of getting the first 1,000 stars will be sent
        to your email
      </div>
    </div>
  );
};

export default SubscribeForm;
