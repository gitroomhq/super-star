import { NewsletterInterface } from "@github20k/services/newsletter/newsletter.interface";
import axios from "axios";
import { AbstractServicesService } from "@github20k/services/abstract.services.service";
import { object, string } from "yup";

const axiosInstance = axios.create({
  baseURL: "https://api.beehiiv.com/v2/",
  headers: {
    Authorization: `Bearer ${process.env.NEWSLETTER_TOKEN}`,
  },
});

export class BeehiivService
  extends AbstractServicesService
  implements NewsletterInterface
{
  validation = object({
    NEWSLETTER_ID: string().required(),
    NEWSLETTER_TOKEN: string().required(),
  });

  providerName = "Beehiiv";

  async registerToNewsletter(
    email_address: string,
    name?: string,
    slug?: string,
    tag?: string,
    referrer?: string
  ) {
    const [FNAME, ...LNAME] = (name || "").split(" ");
    await axiosInstance.post(
      `/publications/${process.env.NEWSLETTER_ID}/subscriptions`,
      {
        email: email_address,
        reactivate_existing: false,
        send_welcome_email: true,
        ...(referrer
          ? {
              referring_site: referrer,
            }
          : {}),
        ...(slug
          ? {
              utm_source: "libraries",
            }
          : {}),
        custom_fields: [
          ...(FNAME
            ? [
                {
                  name: "first_name",
                  value: FNAME,
                },
              ]
            : []),
          ...(LNAME.length
            ? [
                {
                  name: "last_name",
                  value: LNAME.join(" "),
                },
              ]
            : []),
          ...(slug
            ? [
                {
                  name: "first_subject",
                  value: "Your GitHub library is live!",
                },
                {
                  name: "slug",
                  value: `Your GitHub library is live! check it out here!
                  
                  https://libraries.github20k.com/site/${slug}`,
                },
              ]
            : []),
        ],
      }
    );
  }
}
