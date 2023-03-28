import { useEffect } from "react";
import { TrackingHelper } from "@github20k/helpers/tracking.helper";
import { useRouter } from "next/router";
import { makeid } from "@github20k/helpers/makeid";

export default function Success() {
  const router = useRouter();
  useEffect(() => {
    TrackingHelper.gtag("purchase", {
      transaction_id: String(router?.query?.session_id || makeid(10)),
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
      items: [
        {
          item_name: process?.env?.COURSE_NAME + " course",
          price: +(process?.env?.PRICE || 300),
        },
      ],
    });

    TrackingHelper.facebook("Purchase", {
      content_ids: [TrackingHelper.getUniqueId()],
      eventref: 'fb_oea',
      num_items: 1,
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
    });

    TrackingHelper.twitter(process?.env?.TWITTER_PURCHASE_ID!, {
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
    });
  }, []);
  return <></>;
}
