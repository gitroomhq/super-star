import { StripeService } from "@/services/payment/providers/stripe.service";

export class PaymentService {
  static staticSwitcher(type: string) {
    switch (type) {
      default:
      case "stripe":
        return new StripeService();
    }
  }
}

export const paymentService = PaymentService.staticSwitcher(
  process.env.PAYMENT_SERVICE!
);
