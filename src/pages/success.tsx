import { useEffect } from "react";
import { GoogleTagHelper } from "@github20k/helpers/google.tag.helper";
import { useRouter } from "next/router";
import { makeid } from "@github20k/helpers/makeid";

export default function Success() {
  const router = useRouter();
  useEffect(() => {
    GoogleTagHelper.event("purchase", {
      transaction_id: String(router?.query?.session_id || makeid(10)),
      currency: (process?.env?.CURRENCY || '').toUpperCase(),
      value: +(process?.env?.PRICE || 300),
      items: [
        {
          item_name: process?.env?.COURSE_NAME + " course",
        },
      ],
    });
  }, []);
  return <></>;
}
