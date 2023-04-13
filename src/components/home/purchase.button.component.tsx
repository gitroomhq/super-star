import { useCallback, useState } from "react";
import axios from "axios";
import { TrackingHelper } from "@github20k/helpers/tracking.helper";
import { mainPageDetails } from "@github20k/helpers/main.page.details";

const PurchaseButtonComponent = () => {
  const [loading, setLoading] = useState(false);
  const onClick = useCallback(async () => {
    // @ts-ignore
    const affiliate =
      typeof window === "undefined" ||
      !process.env.REWARDFUL_ID ||
      !window?.Rewardful?.referral
        ? ""
        : `?affiliate=${window.Rewardful.referral}`;
    setLoading(true);
    const {
      data: { url },
    } = await axios.get(`/api/payment${affiliate}`);

    TrackingHelper.gtag("begin_checkout", {
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
      items: [
        {
          item_name: process.env.COURSE_NAME! + " course",
          price: +(process?.env?.PRICE || 300),
        },
      ],
    });

    TrackingHelper.facebook("InitiateCheckout", {
      content_ids: [TrackingHelper.getUniqueId()],
      eventref: "fb_oea",
    });

    TrackingHelper.twitter(process?.env?.TWITTER_INITIATE_CHECKOUT_ID!, {
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
    });

    TrackingHelper.reddit("AddToCart", {
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
      itemCount: 1,
    });

    TrackingHelper.segment("initiateCheckout", {
      content_ids: [TrackingHelper.getUniqueId()],
      eventref: "fb_oea",
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
    });

    setLoading(false);
    window.open(url);
  }, []);

  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-purchase-btn flex w-full items-center justify-center gap-4 py-4 md:py-8 xl:py-9"
    >
      <BtnSvg />
      <span className="text-white font-bold text-2xl xl:text-4xl">
        {!loading ? mainPageDetails.payment.callToAction.text : "Loading"}
      </span>
    </button>
  );
};

export const BtnSvg = () => {
  return (
    <svg
      className="w-6 h-6 xl:w-9 xl:h-9 shrink-0 hidden md:inline-block"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3845 0.61527C20.1898 0.419891 19.9584 0.264945 19.7036 0.159351C19.4488 0.0537575 19.1756 -0.000397822 18.8998 2.2e-06H8.39992C8.1241 -0.000397822 7.85092 0.0537575 7.59612 0.159351C7.34131 0.264945 7.10991 0.419891 6.91523 0.61527L0.615296 6.91494C0.419908 7.10962 0.264956 7.34101 0.159358 7.5958C0.0537597 7.8506 -0.000397839 8.12376 2.20009e-06 8.39957V18.899C2.20009e-06 19.4576 0.2205 19.991 0.615296 20.3836L21.6151 41.3826C21.8097 41.5782 22.041 41.7335 22.2958 41.8395C22.5506 41.9455 22.8238 42 23.0998 42C23.3757 42 23.649 41.9455 23.9037 41.8395C24.1585 41.7335 24.3899 41.5782 24.5845 41.3826L41.3843 24.5834C41.5795 24.3886 41.7343 24.1572 41.84 23.9024C41.9456 23.6477 42 23.3746 42 23.0988C42 22.823 41.9456 22.5499 41.84 22.2952C41.7343 22.0404 41.5795 21.809 41.3843 21.6142L20.3845 0.61527ZM13.3412 16.7991C12.8799 16.8106 12.4211 16.7298 11.9916 16.5612C11.5621 16.3927 11.1707 16.14 10.8403 15.8179C10.51 15.4958 10.2474 15.1109 10.0681 14.6858C9.88883 14.2607 9.79638 13.8041 9.79624 13.3427C9.7961 12.8814 9.88827 12.4247 10.0673 11.9995C10.2464 11.5743 10.5087 11.1892 10.8388 10.8669C11.169 10.5447 11.5602 10.2917 11.9896 10.1229C12.419 9.95413 12.8778 9.87296 13.3391 9.88419C14.2413 9.90615 15.0993 10.2799 15.7298 10.9257C16.3602 11.5715 16.7133 12.4381 16.7136 13.3406C16.7138 14.2431 16.3613 15.11 15.7312 15.7562C15.1011 16.4023 14.2434 16.7766 13.3412 16.7991Z"
        fill="url(#paint0_linear_209_181)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_209_181"
          x1={21}
          y1={0}
          x2={21}
          y2={42}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7FFF0" />
          <stop offset={1} stopColor="#54F8DC" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PurchaseButtonComponent;
