import { FC, useState } from "react";
import { useFormik } from "formik";
import newsletterValidation from "@github20k/helpers/newsletter.validation";
import axios from "axios";

const NewsletterComponent: FC<{ showText: boolean }> = (props) => {
  const { showText } = props;
  const [submitted, setSubmitted] = useState(false);
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      validationSchema: newsletterValidation,
      validateOnChange: true,
      initialValues: {
        email: "",
      },
      onSubmit: (values) => {
        axios.post("/api/newsletter", values);
        setSubmitted(true);
      },
    });
  return (
    <div className={showText ? "text-white max-w-sm flex flex-col lg:max-w-3xl w-full text-center overflow-hidden relative mb-12 md:mb-16" : "relative z-50"}>
      {showText ? (
        <strong>
          Do you want to get more tips and tricks? register to our newsletter
        </strong>
      ) : (
        <></>
      )}
      {submitted ? (
        <div className="mt-10">Thank you!</div>
      ) : (
        <form className="max-lg:flex-col flex mt-10" onSubmit={handleSubmit}>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`flex-1 bg-[#182769]/70 border-2 border-white/10 rounded-2xl rounded-r-none max-lg:mb-3 max-lg:rounded-2xl outline-0 p-2 ${
              touched.email &&
              errors.email &&
              `border-solid border-2 border-rose-500`
            }`}
            type="text"
            name="email"
            placeholder="Email"
          />
          <button
            className="bg-purchase-btn flex min-w-[200px] items-center justify-center rounded-2xl rounded-l-none max-lg:rounded-2xl p-2"
            type="submit"
            placeholder="Register"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterComponent;
