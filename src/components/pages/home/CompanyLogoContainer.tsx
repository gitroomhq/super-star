import { clsx } from "clsx";
import Image from "next/image";

import styles from "./styles.module.css";

const CompanyLogoContainer: React.FC = () => {
  return (
    <div className={clsx("git-room-container", styles.companyLogoContainer)}>
      <div className={clsx(styles.companyLogoItemWrapper)}>
        <div
          className={clsx(
            styles.companyLogoItem,
            "w-[145.06px] h-[28px]",
            "md:w-[202.01px] md:h-[39.04px]"
          )}
        >
          <Image
            src="/svgs/TriggerDev.svg"
            layout="fill"
            objectFit="contain"
            alt="Trigger.Dev"
          />
        </div>

        <div
          className={clsx(
            styles.companyLogoItem,
            "w-[96px] h-[28px]",
            "md:w-[133.22px] md:h-[32.38px]"
          )}
        >
          <Image
            src="/svgs/Flatfile.svg"
            layout="fill"
            objectFit="contain"
            alt="Flatfile"
          />
        </div>
        <div
          className={clsx(
            styles.companyLogoItem,
            "w-[74px] h-[28px]",
            "md:w-[101.47px] md:h-[26.16px]"
          )}
        >
          <Image
            src="/svgs/Wing.svg"
            layout="fill"
            objectFit="contain"
            alt="Wing"
          />
        </div>
        <div
          className={clsx(
            styles.companyLogoItem,
            "w-[118px] h-[28px]",
            "md:w-[164.96px] md:h-[33.1px]"
          )}
        >
          <Image
            src="/svgs/CopilotKit.svg"
            layout="fill"
            objectFit="contain"
            alt="CopilotKit"
          />
        </div>
        <div
          className={clsx(
            styles.companyLogoItem,
            "w-[88px] h-[28px]",
            "md:w-[123.04px] md:h-[29.36px]"
          )}
        >
          <Image
            src="/svgs/Odigos.svg"
            layout="fill"
            objectFit="contain"
            alt="Odigos"
          />
        </div>
        <div
          className={clsx(
            styles.companyLogoItem,
            "w-[85px] h-[28px]",
            "md:w-[118.49px] md:h-[31.1px]"
          )}
        >
          <Image
            src="/svgs/Taipy.svg"
            layout="fill"
            objectFit="contain"
            alt="Taipy"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyLogoContainer;
