import Image from "next/image";
import Link from "next/link";
import PurchaseButtonComponent from "@github20k/components/home/purchase.button.component";
import { FC } from "react";
import NewsletterComponent from "@github20k/components/blog/newsletter.component";

const FooterComponent: FC<{ hidePurchase?: boolean; newsletter?: boolean }> = (
  props
) => {
  const { hidePurchase, newsletter } = props;
  return (
    <footer className="bg-footer">
      <div className="max-w-base mx-auto px-6 flex flex-col items-center justify-center py-12 md:pt-16 lg:pt-24 ">
        <div className="relative w-16 h-16 mb-16">
          <Image
            className="object-contain"
            fill
            src={"/assets/footer.png"}
            alt="alt"
          />
        </div>
        {newsletter && <NewsletterComponent showText={true} />}
        {!hidePurchase && (
          <div className="max-w-sm xl:max-w-3xl w-full rounded-xl overflow-hidden relative mb-12 md:mb-16">
            <PurchaseButtonComponent />
          </div>
        )}

        <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-x-16 items-center text-brand-white-primary font-medium text-lg/7 mb-16">
          <Link className="hover:text-brand-plum-primary" href="/">
            Home
          </Link>
          <Link className="hover:text-brand-plum-primary" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-brand-plum-primary" href="https://libraries.github20k.com">
            Find a GitHub library
          </Link>
          <Link
            className="hover:text-brand-plum-primary"
            href="/terms-of-service"
          >
            Terms of service
          </Link>
          <Link
            className="hover:text-brand-plum-primary"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>

        <p className="text-center font-medium lg:text-lg/7 text-white/40 md:text-white">
          © Github20K , 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;

const LinkSvg = () => {
  return (
    <svg
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.17916 5.95975L7.66353 4.45697C7.79356 4.32694 7.942 4.16009 8.09044 3.97425C8.23888 3.80741 8.40572 3.65897 8.57316 3.52894C8.88844 3.25047 9.25953 3.00941 9.72384 3.00941C10.1323 3.00941 10.4844 3.19525 10.7445 3.43631C11.0046 3.67738 11.153 4.03006 11.153 4.43856C11.153 4.60541 11.1346 4.79125 11.0788 4.92128C10.9488 5.18134 10.8377 5.36659 10.7261 5.51503C10.6703 5.58925 10.6145 5.66347 10.6145 5.73769C10.6145 5.7935 10.6145 5.84931 10.6519 5.86772C10.8561 6.36884 11.0046 6.79575 11.0972 7.31528C11.153 7.51953 11.264 7.61216 11.4499 7.61216C11.5241 7.61216 11.5983 7.59375 11.6725 7.53794C11.821 7.44531 11.951 7.29688 12.081 7.14844C12.1553 7.07422 12.2111 7 12.2479 6.96259C12.9158 6.31303 13.3053 5.38559 13.3053 4.43916C13.3053 3.43691 12.8968 2.54628 12.2479 1.89731C11.5983 1.26616 10.6893 0.839844 9.72444 0.839844C8.75959 0.839844 7.83156 1.22934 7.18259 1.91631L4.64075 4.43975C3.97278 5.12612 3.60169 6.01675 3.60169 6.96319C3.60169 7.24166 3.71331 7.817 3.89856 8.35494C4.08441 8.87447 4.32547 9.33819 4.64075 9.33819C4.80759 9.33819 5.16028 9.05972 5.45716 8.74444C5.75403 8.42916 6.05091 8.07647 6.05091 7.94644C6.05091 7.85381 5.97669 7.74219 5.90247 7.57534C5.80984 7.4085 5.77244 7.20425 5.77244 6.96319C5.77244 6.59209 5.92088 6.221 6.18094 5.96094L6.17916 5.95975ZM6.12394 13.0848L8.66578 10.5613C9.33375 9.91175 9.70484 8.96531 9.70484 8.01947C9.70484 7.741 9.59322 7.18466 9.40797 6.64613C9.24113 6.12659 8.98106 5.64387 8.66578 5.64387C8.53575 5.64387 8.14625 5.94075 7.86778 6.25603C7.5525 6.57131 7.25563 6.90559 7.25563 7.03563C7.25563 7.12825 7.31144 7.27669 7.40406 7.42512C7.49669 7.59197 7.57091 7.77781 7.57091 8.01888C7.5525 8.38997 7.40406 8.76106 7.144 9.05794L5.64122 10.5423C5.51119 10.6908 5.36275 10.8392 5.21431 11.006L4.75059 11.4697C4.43531 11.7666 4.04522 11.9709 3.5815 11.9709C2.80191 11.9709 2.17134 11.3587 2.17134 10.5607C2.17134 10.3749 2.20875 10.208 2.26397 10.078C2.37559 9.81794 2.48662 9.63269 2.61666 9.48425C2.67247 9.41003 2.69088 9.33581 2.69088 9.28C2.69088 9.24259 2.67247 9.20578 2.65347 9.13156C2.43081 8.63044 2.30078 8.20353 2.20816 7.684C2.17075 7.59137 2.15234 7.51716 2.09653 7.47975C2.04072 7.40553 1.94809 7.38713 1.85547 7.38713C1.78125 7.38713 1.72544 7.40553 1.65122 7.46134C1.50278 7.55397 1.35434 7.70241 1.22431 7.85084C1.1685 7.92506 1.09428 7.98088 1.05747 8.01769C0.3895 8.68566 0 9.61369 0 10.5595C0 11.5428 0.3895 12.4524 1.05747 13.1014C1.70703 13.7509 2.59766 14.1404 3.58091 14.1404C4.54575 14.1404 5.47378 13.7693 6.12275 13.083L6.12394 13.0848Z"
        fill="currentColor"
      />
    </svg>
  );
};
