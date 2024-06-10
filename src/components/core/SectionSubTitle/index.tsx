import clsx from "clsx";

interface Props {
  customClasses?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const SectionSubTitle: React.FC<Props> = ({ customClasses = "", children }) => {
  return (
    <div
      className={clsx(
        "font-matter font-normal text-[#ffffffe6] text-center",
        "text-[14px] leading-[16.8px] md:text-[16px] md:leading-[19.2px]",
        customClasses
      )}
    >
      {children}
    </div>
  );
};

export default SectionSubTitle;
