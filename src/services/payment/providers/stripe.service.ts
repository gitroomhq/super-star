/// <reference types="stripe-event-types" />

import Stripe from "stripe";
import { NextApiRequest } from "next";
import { buffer } from "micro";
import { PaymentInterface } from "@/services/payment/payment.interface";
import { AbstractServicesService } from "@/services/abstract.services.service";
import { object, string } from "yup";
const stripe = new Stripe(process.env.PAYMENT_SECRET_KEY!, {} as any);

export class StripeService
  extends AbstractServicesService
  implements PaymentInterface
{
  validation = object({
    PAYMENT_SIGNING_SECRET: string().required(),
    PAYMENT_SECRET_KEY: string().required(),
  });

  providerName = "Stripe";

  async createACheckoutSession(affiliate?: string) {
    const { url } = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      custom_fields: [
        {
          type: "text",
          key: "firstname",
          label: { type: "custom", custom: "First name" },
          optional: false,
        },
        {
          type: "text",
          key: "lastname",
          label: { type: "custom", custom: "Last name" },
          optional: false,
        },
      ],
      line_items: [
        {
          price_data: {
            currency: process.env.CURRENCY!,
            product_data: {
              name: process.env.COURSE_NAME!,
              description:
                "The complete package of " + process.env.COURSE_NAME!,
            },
            unit_amount: +process.env.PRICE! * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url:
        process.env.COURSE_URL! + "/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: process.env.COURSE_URL!,
      ...(affiliate
        ? { client_reference_id: affiliate }
        : { client_reference_id: "blank" }),
    });

    return { url: url! };
  }

  async checkRequestAndReturnDetails(req: NextApiRequest) {
    const signature = req.headers["stripe-signature"] as string;
    const reqBuffer = await buffer(req);
    try {
      const event = stripe.webhooks.constructEvent(
        reqBuffer,
        signature,
        process.env.PAYMENT_SIGNING_SECRET!
      ) as Stripe.DiscriminatedEvent;

      if (
        event.type !== "checkout.session.async_payment_succeeded" &&
        event.type !== "checkout.session.completed"
      ) {
        return false;
      }

      if (event?.data?.object?.payment_status !== "paid") {
        return true;
      }

      const name = event?.data?.object?.custom_fields?.find(
        (p) => p?.key === "firstname"
      )?.text?.value;

      const lastname = event?.data?.object?.custom_fields?.find(
        (p) => p?.key === "lastname"
      )?.text?.value;

      const { id } = event.data.object;

      return {
        id,
        email: event?.data?.object?.customer_details?.email!,
        name: name + " " + lastname,
      };
    } catch (err) {
      return false;
    }
  }
}
