export class GoogleTagHelper {
  static event(name: string, value: any) {
    if (!process.env.G_TAG_ANALYTICS || typeof window === "undefined") {
      return;
    }

    // @ts-ignore
    window.gtag(name, value);
  }
}
