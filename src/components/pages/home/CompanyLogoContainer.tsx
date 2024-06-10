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
            width={133}
            height={32}
            alt="Flatfile"
          />
        </div>
        <div
          className={clsx(
            styles.companyLogoItem,
            "w-[74px] h-[28px]",
            "md:w-[140px] md:h-[40px]"
          )}
        >
          <Image
            src="/svgs/Wing.svg"
            width={74}
            height={28}
            alt="Wing"
            className="w-[74px] h-[28px] md:w-[140px] md:h-[40px]"
          />
        </div>
        <div
          className={clsx(
            styles.companyLogoItem,
            "w-[118px] h-[28px]",
            "md:w-[180px] md:h-[60px]"
          )}
        >
          <Image
            src="/svgs/CopilotKit.svg"
            width={74}
            height={28}
            alt="CopilotKit"
            className="w-[118px] h-[28px] md:w-[180px] md:h-[60px]"
          />
        </div>
        <div
          className={clsx(
            styles.companyLogoItem,
            "w-[88px] h-[28px]",
            "md:w-[140.04px] md:h-[55px]"
          )}
        >
          <Image
            src="/svgs/Odigos.svg"
            alt="Odigos"
            width={88}
            height={28}
            className="w-[88px] h-[28px] md:w-[140.04px] md:h-[55px]"
          />
        </div>
        <div
          className={clsx(
            styles.companyLogoItem,
            "w-[85px] h-[28px]",
            "md:w-[118.49px] md:h-[40.1px]"
          )}
        >
          <Image
            src="/svgs/Taipy.svg"
            width={85}
            height={28}
            alt="Taipy"
            className="w-[85px] h-[28px] md:w-[118.49px] md:h-[40.1px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyLogoContainer;
