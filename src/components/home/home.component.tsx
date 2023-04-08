import PaymentButton from "@github20k/components/shared/payment.button";
import {FC} from "react";

const HomeComponent: FC<{stargazers_count: number}> = () => {
  return <PaymentButton />;
};

export default HomeComponent;