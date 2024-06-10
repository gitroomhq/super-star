import clsx from "clsx";
import Image from "next/image";
import SectionTitle from "@/components/core/SectionTitle";

import styles from "./styles.module.css";

const BlackShadow = () => (
  <>
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[calc(50%-100px)]",
        "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 65%)",
      }}
    />
    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[calc(50%-100px)]",
        "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 65%)",
      }}
    />

    <div
      className={clsx(
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[calc(50%-100px)]",
        "absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-[0] scale-y-50"
      )}
      style={{
        background: "radial-gradient(circle at 50%, #000, transparent 65%)",
      }}
    />
  </>
);

const ProvidersSection = () => {
  return (
    <div
      className={clsx(
        "git-room-container",
        "flex flex-col",
        "pt-[100px] md:pt-[200px]"
      )}
    >
      <div
        className={clsx(
          "relative mx-auto mt-[14px]",
          "w-[42px] h-[42px] z-[2]"
        )}
      >
        <Image
          src="/svgs/ProvidersSectionIcon.svg"
          layout="fill"
          objectFit="contain"
          alt="providers section"
        />
      </div>
      <SectionTitle
        customClasses={clsx("mt-[28.82px] md:mt-[36px] mx-auto z-[2]")}
      >
        Providers
      </SectionTitle>
      <div
        className={clsx(
          "mx-auto text-[rgba(255,255,255,0.9)] font-matter text-center font-[400]",
          "mt-4 text-base leading-[19.2px] w-full max-w-[563px] z-[2]"
        )}
      >
        {`Gain valuable insights into your project's performance with our
        comprehensive analytics dashboard. Track key metrics, monitor
        engagement, and make informed decisions to drive success.`}
      </div>
      <div
        className={clsx(
          "flex items-center justify-center",
          "mt-12 gap-5 z-[2]"
        )}
      >
        <div
          className={clsx(
            styles.btnProviderItem,
            "bg-[rgba(10,102,194,1)] w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          )}
        >
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 13.3158V21.5894H17.657V13.8203C17.657 11.9033 16.9507 10.5916 15.2354 10.5916C13.9238 10.5916 13.1166 11.4997 12.8139 12.3068C12.713 12.6095 12.6121 13.0131 12.6121 13.5176V21.5894H7.76906C7.76906 21.5894 7.86995 8.47276 7.76906 7.1611H12.6121V9.17904C13.2175 8.17007 14.4282 6.75752 16.9507 6.75752C20.0785 6.75752 22.5 8.87635 22.5 13.3158ZM2.72421 0.199219C1.10986 0.199219 0 1.30908 0 2.72164C0 4.1342 1.00897 5.24406 2.62332 5.24406C4.33856 5.24406 5.34753 4.1342 5.34753 2.72164C5.44843 1.20819 4.43946 0.199219 2.72421 0.199219ZM0.30269 21.5894H5.14574V7.1611H0.30269V21.5894Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className={clsx(
            styles.btnProviderItem,
            "bg-[rgba(255,255,255,1)] w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          )}
        >
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3575 12.9055L29.5268 0.201172H26.8804L17.1777 11.2298L9.43375 0.201172H0.5L12.2129 16.8799L0.5 30.2012H3.14643L13.3865 18.5518L21.5663 30.2012H30.5L18.3575 12.9055ZM14.7316 17.0264L13.543 15.3645L4.1008 2.15337H8.16626L15.7887 12.8191L16.9723 14.481L26.8792 28.3441H22.8137L14.7316 17.0264Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          className={clsx(
            styles.btnProviderItem,
            "bg-[rgba(255,63,24,1)] w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          )}
        >
          <svg
            width="37"
            height="31"
            viewBox="0 0 37 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.855 19.9455C22.5095 19.9455 21.3789 18.8642 21.3789 17.531C21.3789 16.1978 22.5095 15.0808 23.855 15.0808C25.2005 15.0808 26.2917 16.1978 26.2917 17.531C26.2917 18.8642 25.2005 19.9455 23.855 19.9455ZM24.4265 24.6319C23.1733 25.8726 21.2405 26.4757 18.518 26.4757C18.5124 26.4757 18.5056 26.4746 18.4989 26.4746C18.4932 26.4746 18.4865 26.4757 18.4797 26.4757C15.7572 26.4757 13.8256 25.8726 12.5735 24.6319C12.1887 24.2507 12.1887 23.6342 12.5735 23.2541C12.9571 22.874 13.5792 22.874 13.964 23.2541C14.828 24.1102 16.3051 24.5271 18.4797 24.5271C18.4865 24.5271 18.4932 24.5282 18.4989 24.5282C18.5056 24.5282 18.5124 24.5271 18.518 24.5271C20.6926 24.5271 22.1709 24.1102 23.036 23.2541C23.4207 22.8728 24.0429 22.874 24.4265 23.2541C24.8101 23.6353 24.8101 24.2518 24.4265 24.6319ZM10.7083 17.531C10.7083 16.1989 11.8366 15.0808 13.181 15.0808C14.5265 15.0808 15.6178 16.1989 15.6178 17.531C15.6178 18.8642 14.5265 19.9455 13.181 19.9455C11.8366 19.9455 10.7083 18.8642 10.7083 17.531ZM30.497 2.14974C31.4082 2.14974 32.1496 2.88436 32.1496 3.78619C32.1496 4.68913 31.4082 5.42375 30.497 5.42375C29.5857 5.42375 28.8444 4.68913 28.8444 3.78619C28.8444 2.88436 29.5857 2.14974 30.497 2.14974ZM36.5 14.879C36.5 12.5146 34.5594 10.5917 32.1732 10.5917C31.1405 10.5917 30.1921 10.9529 29.4474 11.5537C26.8092 9.91059 23.4613 8.9207 19.8725 8.71113L21.7445 2.84646L26.8891 4.04704C27.0241 5.90309 28.5901 7.37232 30.497 7.37232C32.4916 7.37232 34.115 5.76375 34.115 3.78619C34.115 1.80975 32.4916 0.201172 30.497 0.201172C29.102 0.201172 27.8892 0.988181 27.2851 2.13748L21.3069 0.742938C20.8062 0.62589 20.3 0.911264 20.1448 1.39729L17.8205 8.67657C13.9539 8.77021 10.319 9.76345 7.48737 11.5024C6.75275 10.9328 5.82912 10.5917 4.82675 10.5917C2.44062 10.5917 0.5 12.5146 0.5 14.879C0.5 16.3404 1.2425 17.6324 2.37313 18.4061C2.32588 18.7461 2.30112 19.0883 2.30112 19.435C2.30112 22.3902 4.03475 25.1391 7.1825 27.1746C10.1997 29.1266 14.1935 30.2012 18.4269 30.2012C22.6602 30.2012 26.654 29.1266 29.6712 27.1746C32.819 25.1391 34.5526 22.3902 34.5526 19.435C34.5526 19.1195 34.5312 18.8063 34.4919 18.4952C35.6979 17.7339 36.5 16.3973 36.5 14.879Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className={clsx(
            styles.btnProviderItem,
            "bg-[rgba(255,63,24,1)] w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          )}
        >
          <Image
            src="/svgs/Dev.svg"
            layout="fill"
            objectFit="contain"
            alt="providers dev"
          />
        </div>
        <div
          className={clsx(
            styles.btnProviderItem,
            "bg-[rgba(41,98,255,1)] w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          )}
        >
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.56149 10.2245C-0.187162 12.9731 -0.187162 17.429 2.56149 20.1774L10.5235 28.1397C13.2721 30.8881 17.7281 30.8881 20.4764 28.1397L28.4387 20.1774C31.1871 17.4288 31.1871 12.9729 28.4387 10.2245L20.4764 2.26246C17.7278 -0.485925 13.2719 -0.485925 10.5235 2.26246L2.56149 10.2245ZM18.9834 18.6846C20.9074 16.7605 20.9074 13.6413 18.9834 11.7176C17.0596 9.7935 13.9404 9.7935 12.0166 11.7176C10.0925 13.6416 10.0925 16.7605 12.0166 18.6846C13.9406 20.6084 17.0596 20.6084 18.9836 18.6846H18.9834Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className={clsx(
            styles.btnProviderItem,
            "w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          )}
        >
          <Image
            src="/svgs/Social.svg"
            layout="fill"
            objectFit="contain"
            alt="providers social"
          />
        </div>
      </div>
      <div
        className={clsx(
          "mx-auto font-matter font-[500] text-[rgba(177,145,255,1)] hover:text-[rgba(217,193,255,1)] transition-all cursor-pointer",
          "mt-12 text-sm leading-[16.8px] z-[2]"
        )}
      >
        MORE PROVIDERS COMING SOON
      </div>

      <BlackShadow />
    </div>
  );
};

export default ProvidersSection;
