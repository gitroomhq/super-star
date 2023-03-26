import type { NextApiRequest, NextApiResponse } from "next";
import { paymentService } from "@github20k/services/payment/payment.service";
import { crmService } from "@github20k/services/crm/crm.service";
import { courseService } from "@github20k/services/course/course.service";
import { newsletterService } from "@github20k/services/newsletter/newsletter.service";

export const config = { api: { bodyParser: false } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(400).send("Invalid payment");
  }

  const payment = await paymentService.checkRequestAndReturnDetails(req);
  if (payment === true) {
    res.status(200).send("Got the event, but there is no payment yet.");
    return;
  }

  if (payment === false) {
    res.status(400).send("Invalid payment");
    return;
  }

  try {
    await Promise.all([
      crmService.addDeal(payment.name!, payment.email!),
      courseService.joinCourse(payment.name!, payment.email!),
      newsletterService.registerToNewsletter(payment.name!, payment.email!),
    ]);
  } catch (err) {
    // In case one of them didn't work, we send 400, then the payment gateway will re-try the request
    res.status(400).send("Could not complete one of the services");
    return;
  }

  res.status(200).send("Success");
}
