import { object, string } from "yup";

const newsletterValidation = object({
  email: string().required().email(),
});

export default newsletterValidation;