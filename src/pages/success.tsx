import { useEffect } from "react";
import { TrackingHelper } from "@github20k/helpers/tracking.helper";
import { useRouter } from "next/router";
import { makeid } from "@github20k/helpers/makeid";
import SuccessComponent from "@github20k/components/home/success.component";
import {getGithubStars} from "@github20k/helpers/get.github.stars";

export default function Success(props: { stargazers_count: number }) {
  const { stargazers_count } = props;
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
      eventref: "fb_oea",
      num_items: 1,
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
    });

    TrackingHelper.twitter(process?.env?.TWITTER_PURCHASE_ID!, {
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
    });

    TrackingHelper.segment("purchase", {
      content_ids: [TrackingHelper.getUniqueId()],
      eventref: "fb_oea",
      num_items: 1,
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
    });

    TrackingHelper.reddit('Purchase', {
      currency: (process?.env?.CURRENCY || "").toUpperCase(),
      value: +(process?.env?.PRICE || 300),
      itemCount: 1,
      transactionId: String(router?.query?.session_id || makeid(10))
    });
  }, []);
  return <SuccessComponent stargazers_count={stargazers_count} />;
}

export async function getStaticProps() {
  return {
    props: {
      ...(await getGithubStars()),
    }, // will be passed to the page component as props
  };
}
