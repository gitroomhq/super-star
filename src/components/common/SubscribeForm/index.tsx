import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";

import clsx from "clsx";

import { validateEmail } from "@/utlis/validate";

import styles from "./styles.module.css";
import { useNewsletterRegister } from "@/utlis/use.newsletter.register";
import { useForm } from "react-hook-form";

interface Props {
  customClasses?: string;
}

const SubscribeForm: React.FC<Props> = ({ customClasses }) => {
  const newsletter = useNewsletterRegister();
  const [value, setValue] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm({
    values: {
      email: "",
    },
  });

  const { onBlur, ...theRest } = form.register("email", {
    required: true,
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  });

  const newOnBlur = useCallback(
    (e: any) => {
      setFocused(false);
      return onBlur(e);
    },
    [onBlur]
  );

  const handleSubmit = useCallback((values: { email: string }) => {
    newsletter(values.email);
  }, []);

  return (
    <div
      className={clsx(
        styles.componentContainer,
        customClasses,
        form.formState.isSubmitted && styles.hasError,
        focused && styles.focused
      )}
    >
      {form.formState.isSubmitted ? (
        <div className={clsx("flex h-[50px] md:h-[56px]")}>
          <div
            className={clsx(
              "flex items-center",
              "text-[rgba(179,133,255,1)] font-chakra-petch font-[600]",
              "text-sm leading-[16.8px] max-w-[200px] md:text-[20px] md:leading-[22px] md:max-w-[323px]"
            )}
          >
            Thank you! You have successfully subscribed to our newsletter.
          </div>
        </div>
      ) : (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div
            className={clsx(
              styles.inputWrapper,
              form.formState.isSubmitted && styles.hasError,
              validateEmail(value).validate && styles.filled,
              "relative"
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
                type="text"
                className={clsx(styles.input, "!h-full !w-full")}
                placeholder="Enter your e-mail"
                onFocus={() => setFocused(true)}
                onBlur={newOnBlur}
                {...theRest}
              />
            </div>
            <button className={clsx(styles.btnSubmit, "-translate-y-[1px]")} type="submit">
              Subscribe
            </button>
          </div>
        </form>
      )}
      {form?.formState?.errors?.email && (
        <div className={clsx(styles.labelValidate)}>
          {form.formState.errors.email.message}
        </div>
      )}

      <div className={clsx(styles.labelReference)}>
        * Add your email, a video of getting the first 1,000 stars will be sent
        to your email
      </div>
    </div>
  );
};

export default SubscribeForm;
