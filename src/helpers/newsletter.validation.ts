import { object, string } from "yup";

const newsletterValidation = object({
  name: string().required().min(2),
  email: string().required().email(),
});

export default newsletterValidation;