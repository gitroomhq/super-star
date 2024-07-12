import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST" || !req.body.email) {
    return res.status(400).json({ message: "Invalid request" });
  }

  await fetch(
    `https://api.beehiiv.com/v2/publications/${process.env.BLOG_ID}/subscriptions`,
    {
      method: "POST",
      body: JSON.stringify({
        email: req.body.email,
        reactivate_existing: true,
        send_welcome_email: true,
        ...(req.body.utm ? { utm_source: req.body.utm } : {}),
        ...(req.body.utm_medium ? { utm_medium: req.body.utm_medium } : {}),
        ...(req.body.utm_campaign
          ? { utm_campaign: req.body.utm_campaign }
          : {}),
        ...(req.body.referrer ? { referring_site: req.body.referrer } : {}),
      }),
      headers: {
        Authorization: `Bearer ${process.env.BLOG_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );
  res.status(200).json({ message: "Registered" });
}
