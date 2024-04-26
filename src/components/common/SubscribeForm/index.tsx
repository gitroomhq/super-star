import React, { useState } from "react";
import clsx from "clsx";

import { validateEmail } from "@/utlis/validate";

import styles from "./styles.module.css";

interface Props {
  customClasses?: string;
}

const SubscribeForm: React.FC<Props> = ({ customClasses }) => {
  const [value, setValue] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div
      className={clsx(
        styles.componentContainer,
        customClasses,
        submitted && validateEmail(value).validate && styles.hasError
      )}
    >
      <div
        className={clsx(
          styles.inputWrapper,
          submitted && !validateEmail(value).validate && styles.hasError
        )}
      >
        <input
          className={clsx(styles.input)}
          placeholder="Enter your e-mail"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button className={clsx(styles.btnSubmit)} onClick={handleSubmit}>
          Subscribe
        </button>
      </div>
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
