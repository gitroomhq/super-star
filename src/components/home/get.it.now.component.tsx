import Link from "next/link";
import Image from "next/image";
import HeadingBottomLineComponent from "@github20k/components/home/heading.bottom.line.component";
import PurchaseButtonComponent from "@github20k/components/home/purchase.button.component";
import { mainPageDetails } from "@github20k/helpers/main.page.details";

const data = [
  "The 20K Stars course",
  "Recordings with companies i heped",
  "Personal Meeting",
  "Technical content writers Slack group",
];

const GetItNowComponent = () => {
  return (
    <div className="bg-getit-bg bg-no-repeat bg-cover lg:bg-contain bg-left pt-32 lg:pt-64 px-6 md:-mt-12 xl:-mt-16 ">
      <div className="text-center  mb-16 lg:mb-20">
        <h3 className="font-home-baukasten text-brand-white-primary font-medium text-3xl lg:text-4xl uppercase mb-1 lg:mb-3.5">
          {mainPageDetails.payment.title}
        </h3>
        <HeadingBottomLineComponent className="mx-auto px-8 lg:px-3.5" />
      </div>

      <ul className="w-full max-w-md lg:max-w-xl mx-auto space-y-4 lg:space-y-6 mb-12 md:mb-20 xl:mb-40">
        {mainPageDetails.payment.bullets.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 lg:gap-5">
            <span className="relative w-4 h-4 lg:w-5 lg:h-5 shrink-0">
              <Image src="/assets/svgs/check.svg" fill alt="Check" />
            </span>
            <p className="text-white font-medium md:text-xl xl:text-2xl">
              {item.title}
            </p>
          </li>
        ))}
      </ul>

      <div className="max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto purchase-bg rounded-3xl overflow-hidden mb-11 lg:mb-20 xl:mb-32">
        <div className="text-center rounded-t-3xl text-brand-white-light border-b-0 border border-[#BEFFFB] pt-7 pb-10 md:py-14 xl:pb-16 xl:pt-24">
          <p className="text-xl xl:text-4xl font-semibold mb-5 lg:mb-12 xl:mb-20">
            For only
          </p>
          <h1 className="flex items-center justify-center text-white !font-ibm-mono text-5xl md:text-6xl xl:text-8xl font-semibold space-x-3 lg:space-x-8 mb-6 md:mb-14">
            <span>{process.env.PRICE}</span>
            <span>{process.env.CURRENCY}</span>
          </h1>
          {mainPageDetails.payment.underPrice.description}
        </div>
        <PurchaseButtonComponent />
      </div>

      <p className="max-w-3xl xl:max-w-6xl mx-auto text-brand-white-light text-sm/6 md:text-xl/7 xl:text-2xl text-center">
          {mainPageDetails.payment.warrenty}
      </p>
    </div>
  );
};

export default GetItNowComponent;
