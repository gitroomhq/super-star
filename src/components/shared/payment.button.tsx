import { useCallback, useState } from "react";
import axios from "axios";

const PaymentButton = () => {
  const [loading, setLoading] = useState(false);
  const onClick = useCallback(async () => {
    setLoading(true);
    const {
      data: { url },
    } = await axios.get("/api/payment");

    setLoading(false);
    window.open(url);
  }, []);

  return <button onClick={onClick}>{!loading ? "Payment" : "Loading"}</button>;
};

export default PaymentButton;
