import { NextApiRequest } from "next";

export interface PaymentInterface {
  checkRequestAndReturnDetails(
    req: NextApiRequest
  ): Promise<{ id: string; email: string; name: string } | boolean>;

  createACheckoutSession(affiliate?: string): Promise<{url: string}>;
}
