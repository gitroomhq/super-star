import { FC, ReactNode, useEffect } from "react";

export const TwitterWidget: FC<{ children: ReactNode, active: boolean }> = (props) => {
  useEffect(() => {
    if (typeof window !== "undefined" && props.active) {
      // @ts-ignore
      window?.twttr?.widgets?.load();
    }
  }, []);
  const { children } = props;
  return <>{children}</>;
};
