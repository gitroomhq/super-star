import { useCallback, useState } from "react";
import axios from "axios";
import { TrackingHelper } from "@github20k/helpers/tracking.helper";

const PaymentButton = () => {
  const [loading, setLoading] = useState(false);
  const onClick = useCallback(async () => {
    // @ts-ignore
    const affiliate = typeof window === "undefined" || !process.env.REWARDFUL_ID || !window?.Rewardful?.referral ? "" : `?affiliate=${window.Rewardful.referral}`;
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

    TrackingHelper.twitter(process.env.TWITTER_INITIATE_CHECKOUT_ID, {
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
    });

    setLoading(false);
    window.open(url);
  }, []);

  return <button onClick={onClick}>{!loading ? "Payment" : "Loading"}</button>;
};

export default PaymentButton;
