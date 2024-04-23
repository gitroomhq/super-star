import React from "react";
import localFont from "@next/font/local";
import { Chakra_Petch } from "@next/font/google";

import Navbar from "./navbar";
import Footer from "./footer";

const matters = localFont({
  src: [
    {
      path: "../../assets/fonts/matter-font/Matter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../assets/fonts/matter-font/Matter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../assets/fonts/matter-font/Matter-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-matter",
});

const chakra_petch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra-petch",
  display: "swap",
});

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const RootLayout: React.FC<Props> = ({ children = null }: Props) => {
  return (
    <div
      className={`${matters.variable} ${chakra_petch.variable} flex flex-col w-full h-screen`}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
