import { StripeService } from "@github20k/services/payment/providers/stripe.service";

export class PaymentService {
  static staticSwitcher(type: string) {
    switch (type) {
      case "stripe":
        return new StripeService();
    }
  }
}

export const paymentService = PaymentService.staticSwitcher(
  process.env.PAYMENT_SERVICE
);
