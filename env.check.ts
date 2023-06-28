import { config } from "dotenv";
config();

import { PaymentService } from "@github20k/services/payment/payment.service";
import { CRMService } from "@github20k/services/crm/crm.service";
import { CourseService } from "@github20k/services/course/course.service";
import { NewsletterService } from "@github20k/services/newsletter/newsletter.service";
import {blogService} from "@github20k/services/blog/blog.service";

const availablePaymentService = ['stripe'];
const availableCrmService = ['pipedrive'];
const availableLMSService = ['teachable'];
const availableNewsletterService = ['mailchimp', 'beehiiv'];
const availableBlogService = ['wordpress', 'beehiiv'];

let errors = false;
if (!process.env.PAYMENT_SERVICE || availablePaymentService.indexOf(process.env.PAYMENT_SERVICE) === -1) {
    console.log(`Invalid payment service, must be one of: ${availablePaymentService.join(', ')}`);
    errors = true;
}

if (process.env.CRM_SERVICE && availableCrmService.indexOf(process.env.CRM_SERVICE) === -1) {
    console.log(`CRM Service not found, must be one of: ${availableCrmService.join(', ')}`);
    errors = true;
}

if (process.env.COURSE_SERVICE && availableLMSService.indexOf(process.env.COURSE_SERVICE) === -1) {
    console.log(`LMS Service not found, must be one of: ${availableLMSService.join(', ')}`);
    errors = true;
}

if (process.env.NEWSLETTER_SERVICE && availableNewsletterService.indexOf(process.env.NEWSLETTER_SERVICE) === -1) {
    console.log(`LMS Service not found, must be one of: ${availableNewsletterService.join(', ')}`);
    errors = true;
}

if (process.env.BLOG_SERVICE && availableBlogService.indexOf(process.env.BLOG_SERVICE) === -1) {
    console.log(`Blog Service not found, must be one of: ${availableBlogService.join(', ')}`);
    errors = true;
}

if (errors) {
    process.exit(1);
}

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
    ...(await paymentService?.runEnvValidation()),
    ...(process.env.COURSE_SERVICE ? await courseService?.runEnvValidation() : {}),
    ...(process.env.CRM_SERVICE ? await crmService?.runEnvValidation() : {}),
    ...(process.env.NEWSLETTER_SERVICE ? await newsletterService?.runEnvValidation() : {}),
    ...(process.env.BLOG_SERVICE ? await blogService?.runEnvValidation() : {}),
  };

  if (Object.values(errors).length > 0) {
    console.log(errors);
    console.log("");
    process.exit(1);
  }

  return true;
})();
