import { NewsletterInterface } from "@/services/newsletter/newsletter.interface";
import axios, { AxiosBasicCredentials, AxiosHeaders } from "axios";
import { AbstractServicesService } from "@/services/abstract.services.service";
import { object, string } from "yup";

const auth = {
  username: "Nevo",
  password: process.env.NEWSLETTER_TOKEN,
} as AxiosBasicCredentials;

export class MailchimpService extends AbstractServicesService implements NewsletterInterface {
  validation = object({
    NEWSLETTER_SERVER: string().required(),
    NEWSLETTER_LIST: string().required(),
    NEWSLETTER_TOKEN: string().required(),
  });

  providerName = "MailChimp";

  async registerToNewsletter(name: string, email_address: string) {
    const [FNAME, ...LNAME] = name?.split(" ");
    await axios.post(
      `https://${process.env.NEWSLETTER_SERVER}.api.mailchimp.com/3.0/lists/${process.env.NEWSLETTER_LIST}?skip_merge_validation=true&skip_duplicate_check=true`,
      {
        members: [
          {
            email_address,
            email_type: "html",
            status: "subscribed",
            merge_fields: {
              FNAME,
              LNAME: LNAME.join(" "),
            },
          },
        ],
        sync_tags: false,
        update_existing: true,
      },
      { auth }
    );
  }
}
