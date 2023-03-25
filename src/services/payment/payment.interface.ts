import { NextApiRequest } from "next";

export interface PaymentInterface {
  checkRequestAndReturnDetails(
    req: NextApiRequest
  ): Promise<{ id: string, email: string; name: string } | false>;
}
