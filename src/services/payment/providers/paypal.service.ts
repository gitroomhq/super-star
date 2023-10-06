import { NextApiRequest } from "next";
import { PaymentInterface } from "@github20k/services/payment/payment.interface";
import { AbstractServicesService } from "@github20k/services/abstract.services.service";
import { object, string } from "yup";
import paypal from '@paypal/checkout-server-sdk'; // Assuming you're using the PayPal Checkout Server SDK

export class ProviderService extends AbstractServicesService implements PaymentInterface
{
  // required environment variables
  validation = object({
    PARAM: string().required(),
    PARAM: string().required(),
  });

  providerName = "PayPal";

  async createACheckoutSession(affiliate?: string) {
    let request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: process.env.CURRENCY!,
          value: (+process.env.PRICE! * 100).toString()
        },
        description: "The complete package of " + process.env.COURSE_NAME!,
      }],
      payer: {
        name: {
          given_name: 'First name',
          surname: 'Last name'
        }
      },
      application_context: {
        return_url: process.env.COURSE_URL! + "/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: process.env.COURSE_URL!,
      }
    });

    let response = await client().execute(request);
    return { url: response.result.links[1].href }; // return the approval link
  }

  async checkRequestAndReturnDetails(req: NextApiRequest) {
    let request = new paypal.orders.OrdersGetRequest(req.body.id);
    let response = await client().execute(request);
    return {
      id: response.result.id,
      email: response.result.payer.email_address,
      name: response.result.payer.name.given_name + " " + response.result.payer.name.surname,
    }; // return the order details
  }
}

// Helper function to create a new PayPal client
function client() {
  return new paypal.core.PayPalHttpClient(new paypal.core.LiveEnvironment('client_id', 'client_secret'));
}
