import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@github20k/styles/Home.module.css";
import { paymentService } from "@github20k/services/payment/payment.service";
import { useEffect } from "react";
import { Stripe } from "stripe";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ url }) {
  useEffect(() => {
    window.location.href = url;
  }, []);
  return <>{}</>;
}

export async function getServerSideProps(context) {
  const { url } = await paymentService.createACheckoutSession();
  return {
    props: { url }, // will be passed to the page component as props
  };
}
