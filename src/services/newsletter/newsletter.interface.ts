export interface NewsletterInterface {
  registerToNewsletter(name: string, email: string): Promise<void>;
}
