import { MailchimpService } from "@github20k/services/newsletter/providers/mailchimp.service";

export class NewsletterService {
  static staticSwitcher(type: string) {
    switch (type) {
      case "mailchimp":
        return new MailchimpService();
    }
  }
}

export const newsletterService = NewsletterService.staticSwitcher(
  process.env.NEWSLETTER_SERVICE!
);
