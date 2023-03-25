import type { NextApiRequest, NextApiResponse } from "next";
import { PaymentService } from "@github20k/services/payment/payment.service";
import { CRMService } from "@github20k/services/crm/crm.service";
import { CourseService } from "@github20k/services/course/course.service";
import { NewsletterService } from "@github20k/services/newsletter/newsletter.service";

export const config = { api: { bodyParser: false } };
const paymentService = PaymentService.staticSwitcher(
  process.env.PAYMENT_SERVICE
);

const crmService = CRMService.staticSwitcher(process.env.CRM_SERVICE);
const courseService = CourseService.staticSwitcher(process.env.COURSE_SERVICE);
const newsletterService = NewsletterService.staticSwitcher(
  process.env.NEWSLETTER_SERVICE
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const payment = await paymentService.checkRequestAndReturnDetails(req);
  if (payment === false) {
    res.status(401).send("Invalid payment");
    return;
  }

  await crmService.addDeal(payment.name!, payment.email!);
  await courseService.joinCourse(payment.name!, payment.email!);
  await newsletterService.registerToNewsletter(payment.name!, payment.email!);

  res.status(200).send("Success");
}
