import React, { FC } from "react";
import { Disclosure } from "@headlessui/react";
import HeadingBottomLineComponent from "@github20k/components/home/heading.bottom.line.component";
import { mainPageDetails } from "@github20k/helpers/main.page.details";

const FaqComponent = () => {
  return (
    <div className="relative bg-faqs-bg bg-no-repeat bg-cover bg-fixed bg-right pb-16 pt-10 lg:py-24 mt-10 lg:mt-20">
      <div className="relative max-w-7xl mx-auto px-6 z-20">
        <div className="text-center mb-16 lg:mb-20">
          <h3 className="font-home-baukasten text-brand-white-primary font-medium text-3xl lg:text-4xl uppercase mb-1 lg:mb-3.5">
            FAQ’s
          </h3>
          <HeadingBottomLineComponent className="mx-auto px-8 lg:px-3.5" />
        </div>

        <div className="w-full md:px-4 lg:pt-10">
          <div className="mx-auto w-full rounded-t-3xl overflow-hidden bg-white">
            {mainPageDetails.faq.map((item, idx) => (
              <Disclosure as={"div"} key={idx}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open
                          ? "bg-accordion-open border-brand-yellow "
                          : "bg-accordion border-brand-yellow/20"
                      } flex w-full items-center border justify-between px-5 py-7 md:px-12 xl:px-16 md:py-10 ${
                        idx === 0 ? "rounded-t-3xl" : ""
                      }`}
                    >
                      <div className="text-brand-white-light flex items-center gap-3 md:gap-5 lg:gap-7">
                        <span
                          className={`${
                            open ? "bg-span-open" : "bg-span"
                          } w-8 h-8 md:w-10 md:h-10 xl:w-14 xl:h-14 rounded-full flex items-center justify-center font-semibold xl:text-2xl`}
                        >
                          {idx + 1}
                        </span>
                        <h2 className="font-semibold text-xl md:text-2xl text-left">
                          {item.title}
                        </h2>
                      </div>
                      <ArrowSvg
                        className={`${open ? "rotate-90" : "rotate-0"} `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className={`${
                        open ? "border-brand-yellow" : "border-brand-yellow/20"
                      } bg-accordion-item border-t-0 font-medium xl:text-xl/9 text-brand-white-medium border px-5 py-7 md:px-12 xl:px-16 md:py-10`}
                    >
                      {item.description}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>

      {/* <Image src='/assets/bg/faqs.webp' fill alt='Faq bg' /> */}
    </div>
  );
};

export default FaqComponent;

const ArrowSvg: FC<any> = ({ className }) => {
  return (
    <svg
      className={`w-2.5 lg:w-3.5 h-5 transition-transform duration-300 ${className}`}
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.0545 11.7663L10.0486 10.7304L1.2336 1.54569L2.84119 3.60854e-07C13.0478 10.634 11.5801 9.10452 13.1395 10.7304C11.0033 12.9568 4.61179 19.6156 2.32217 22L0.77734 20.39L9.06014 11.7602L9.0545 11.7663Z"
        fill="#E7C3A5"
      />
      <path
        d="M9.0545 11.7663L10.0486 10.7304L1.2336 1.54569L2.84119 3.60854e-07C13.0478 10.634 11.5801 9.10452 13.1395 10.7304C11.0033 12.9568 4.61179 19.6156 2.32217 22L0.77734 20.39L9.06014 11.7602L9.0545 11.7663Z"
        fill="#E7C3A5"
      />
      <path
        d="M9.0545 11.7663L10.0486 10.7304L1.2336 1.54569L2.84119 3.60854e-07C13.0478 10.634 11.5801 9.10452 13.1395 10.7304C11.0033 12.9568 4.61179 19.6156 2.32217 22L0.77734 20.39L9.06014 11.7602L9.0545 11.7663Z"
        fill="#E7C3A5"
      />
    </svg>
  );
};
