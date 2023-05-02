import { FC, useState } from "react";
import { useFormik } from "formik";
import newsletterValidation from "@github20k/helpers/newsletter.validation";
import axios from "axios";

const NewsletterComponent: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      validationSchema: newsletterValidation,
      validateOnChange: true,
      initialValues: {
        email: "",
        name: "",
      },
      onSubmit: (values) => {
        axios.post("/api/newsletter", values);
        setSubmitted(true);
      },
    });
  return (
    <div className="text-white max-w-sm flex flex-col lg:max-w-3xl w-full text-center overflow-hidden relative mb-12 md:mb-16">
      <strong>
        Do you want to get more tips and tricks? register to our newsletter
      </strong>
      {submitted ? (
        <div className="mt-10">Thank you!</div>
      ) : (
        <form className="max-lg:flex-col flex mt-10" onSubmit={handleSubmit}>
          <input
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`outline-none bg-white h-12 mr-2 max-lg:mr-0 max-lg:mb-3 px-5 text-black ${
              touched.name &&
              errors.name &&
              `border-solid border-2 border-rose-500`
            }`}
            type="text"
            name="name"
            placeholder="First Name"
          />
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`outline-none lg:flex-1 bg-white h-12 mr-2 max-lg:mr-0 max-lg:mb-3 px-5 text-black ${
              touched.email &&
              errors.email &&
              `border-solid border-2 border-rose-500`
            }`}
            type="text"
            name="email"
            placeholder="Email"
          />
          <button
            className="bg-purchase-btn flex px-10 items-center justify-center h-12"
            type="submit"
            placeholder="Register"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterComponent;
