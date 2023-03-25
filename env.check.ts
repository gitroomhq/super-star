import { config } from "dotenv";
config();

import { PaymentService } from "@github20k/services/payment/payment.service";
import { CRMService } from "@github20k/services/crm/crm.service";
import { CourseService } from "@github20k/services/course/course.service";
import { NewsletterService } from "@github20k/services/newsletter/newsletter.service";

const paymentService = PaymentService.staticSwitcher(
  process.env.PAYMENT_SERVICE!
);

const crmService = CRMService.staticSwitcher(process.env.CRM_SERVICE!);
const courseService = CourseService.staticSwitcher(process.env.COURSE_SERVICE!);
const newsletterService = NewsletterService.staticSwitcher(
  process.env.NEWSLETTER_SERVICE!
);

(async () => {
  const errors = {
    ...(await paymentService.runEnvValidation()),
    ...(await courseService.runEnvValidation()),
    ...(await crmService.runEnvValidation()),
    ...(await newsletterService.runEnvValidation()),
  };

  if (Object.values(errors).length > 0) {
      console.log(errors);
      console.log('')
      process.exit(1);
  }

  return true;
})();
