import clsx from "clsx";
import styles from "./styles.module.css";

interface Props {
  customClasses?: string;
  leftLabel?: string;
  rightLabel?: string;
  checked: boolean;
  onChange: Function;
}

const Switch: React.FC<Props> = ({
  customClasses = "",
  leftLabel = "",
  rightLabel = "",
  checked = true,
  onChange,
}) => {
  return (
    <div
      className={clsx("inline-flex items-center relative", customClasses)}
      onClick={() => {
        onChange(!checked);
      }}
    >
      {leftLabel.length > 0 && (
        <div
          className={clsx(
            "mr-3 font-[400] font-matter transition-all",
            checked ? "text-white" : "text-[rgba(255,255,255,0.5)]"
          )}
        >
          {leftLabel}
        </div>
      )}

      <div className={clsx(styles.wrapper)}>
        {/* Gradient Effect */}
        <div
          className={clsx(
            "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
            "absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] z-[1] opacity-20 pointer-events-none"
          )}
          style={{
            background:
              "radial-gradient(circle at 50%, #4A42FB, transparent 70%)",
          }}
        />
        <div className={clsx(styles.anchor, !checked && styles.anchorRight)} />
      </div>
      {rightLabel.length > 0 && (
        <div
          className={clsx(
            "ml-3 font-[400] font-matter transition-all",
            !checked ? "text-white" : "text-[rgba(255,255,255,0.5)]"
          )}
        >
          {rightLabel}
        </div>
      )}
    </div>
  );
};

export default Switch;
