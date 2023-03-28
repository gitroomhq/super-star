export class GoogleTagHelper {
  static event(name: string, value: any) {
    if (!process.env.G_TAG_ANALYTICS || typeof window === "undefined") {
      console.log("no gtag");
      return;
    }

    // @ts-ignore
    window.gtag('event', name, value);
  }
}
