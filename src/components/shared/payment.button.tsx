import { useCallback, useState } from "react";
import axios from "axios";
import { TrackingHelper } from "@github20k/helpers/tracking.helper";

const PaymentButton = () => {
  const [loading, setLoading] = useState(false);
  const onClick = useCallback(async () => {
    setLoading(true);
    const {
      data: { url },
    } = await axios.get("/api/payment");

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

    setLoading(false);
    window.open(url);
  }, []);

  return <button onClick={onClick}>{!loading ? "Payment" : "Loading"}</button>;
};

export default PaymentButton;
