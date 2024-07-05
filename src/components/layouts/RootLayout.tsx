import React from "react";
import localFont from "next/font/local";
import { Chakra_Petch, IBM_Plex_Sans } from "next/font/google";

// @ts-ignore
import Navbar from "./navbar";


// @ts-ignore
import Footer from "./footer";
import { EnumNavMenus } from "@/types";

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

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

interface Props {
  activeMenu?: EnumNavMenus;
  children?: React.ReactNode | React.ReactNode[];
}

const RootLayout: React.FC<Props> = ({
  activeMenu = EnumNavMenus.Home,
  children = null,
}: Props) => {
  return (
    <div
      className={`${matters.variable} ${chakra_petch.variable} ${ibm_plex_sans.variable} min-w-full flex flex-col w-full overflow-x-hidden`}
    >
      <Navbar activeMenu={activeMenu} />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
