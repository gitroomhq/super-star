import type { NextApiRequest, NextApiResponse } from "next";
import { paymentService } from "@github20k/services/payment/payment.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(400).send("Invalid click");
  }

  const { url } = await paymentService.createACheckoutSession(req?.query?.affiliate as string | undefined);
  res.status(200).json({ url });
}
