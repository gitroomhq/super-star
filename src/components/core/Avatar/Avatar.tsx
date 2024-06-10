import { clsx } from "clsx";

interface Props
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "customClasses"> {
  customClasses: string;
}

const Avatar: React.FC<Props> = ({ customClasses, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        "rounded-full bg-contain bg-no-repeat bg-center",
        customClasses
      )}
    ></div>
  );
};

export default Avatar;
