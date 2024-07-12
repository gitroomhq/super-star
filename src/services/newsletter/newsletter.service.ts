import { MailchimpService } from "@/services/newsletter/providers/mailchimp.service";
import {BeehiivService} from "@/services/newsletter/providers/beehiiv.service";

export class NewsletterService {
  static staticSwitcher(type: string) {
    switch (type) {
      case "mailchimp":
        return new MailchimpService();
      case "beehiiv":
        return new BeehiivService();
    }
  }
}

export const newsletterService = NewsletterService.staticSwitcher(
  process.env.NEWSLETTER_SERVICE!
);
