import clsx from "clsx";

interface Props {
  customClasses?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const SectionTitle: React.FC<Props> = ({ customClasses = "", children }) => {
  return (
    <div
      className={clsx(
        "font-chakra-petch font-semibold text-white text-center",
        "text-[28px] leading-[30.8px] md:text-[44px] md:leading-[48.4px]",
        customClasses
      )}
    >
      {children}
    </div>
  );
};

export default SectionTitle;
