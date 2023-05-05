import type { NextApiRequest, NextApiResponse } from "next";
import newsletterValidation from "@github20k/helpers/newsletter.validation";
import {newsletterService} from "@github20k/services/newsletter/newsletter.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(400).send("Invalid click");
  }

  try {
    newsletterValidation.validateSync(req.body);
    await newsletterService?.registerToNewsletter(req.body.email);
    res.status(200).json({
      success: true
    });
  }
  catch (err) {
    res.status(400).json({
      message: 'Error'
    });
  }
}
