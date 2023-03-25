/// <reference types="stripe-event-types" />

import Stripe from "stripe";
import { NextApiRequest } from "next";
import { buffer } from "micro";
import { PaymentInterface } from "@github20k/services/payment/payment.interface";
import { AbstractServicesService } from "@github20k/services/abstract.services.service";
import { object, string } from "yup";
const stripe = new Stripe(process.env.PAYMENT_SECRET_KEY!, {} as any);

export class StripeService extends AbstractServicesService<PaymentInterface> {
  validation = object({
    PAYMENT_SIGNING_SECRET: string().required(),
    PAYMENT_SECRET_KEY: string().required(),
  });

  providerName = "Stripe";

  async checkRequestAndReturnDetails(req: NextApiRequest) {
    const signature = req.headers["stripe-signature"] as string;
    const reqBuffer = await buffer(req);
    try {
      const event = stripe.webhooks.constructEvent(
        reqBuffer,
        signature,
        process.env.PAYMENT_SIGNING_SECRET
      ) as Stripe.DiscriminatedEvent;

      if (event.type !== "invoice.paid") {
        return false;
      }

      const { id, customer_email, customer_name } = event.data.object;

      return { id, email: customer_email, name: customer_name };
    } catch (err) {
      return false;
    }
  }
}
