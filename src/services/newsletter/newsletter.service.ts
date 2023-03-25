import { MailchimpService } from "@github20k/services/newsletter/providers/mailchimp.service";
import { NewsletterInterface } from "@github20k/services/newsletter/newsletter.interface";

export class NewsletterService {
  static staticSwitcher(type: string): NewsletterInterface {
    switch (type) {
      case "mailchimp":
        return new MailchimpService();
    }
  }
}
