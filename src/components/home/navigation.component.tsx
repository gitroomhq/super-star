import { FC, useMemo } from "react";
import numeral from "numeral";
import Link from "next/link";

const NavigationComponent: FC<{ stars: number }> = (props) => {
  const { stars } = props;
  const formatStars = useMemo(() => {
    return numeral(stars).format();
  }, [stars]);
  return (
    <header className="max-w-base w-full mx-auto px-6 absolute top-0 right-0 z-50 mt-9 xl:mt-16">
      <div className="sm:max-w-xs mx-auto md:mr-0 flex items-center bg-nav-stat-gr border border-brand-plum divide-x-2 divide-brand-plum rounded-xl p-1">
        <button className="flex-1 flex items-center justify-center gap-x-5 py-2.5 xl:py-3.5 text-brand-plum font-semibold">
          <Link
            href={`https://github.com/${process.env.GITHUB_REPO}`}
            target="blank"
            className="uppercase"
          >
            <GithubSvg />
          </Link>
          <Link
            href={`https://github.com/${process.env.GITHUB_REPO}`}
            target="blank"
            className="uppercase"
          >
            stars
          </Link>
        </button>
        <Link
          href={`https://github.com/${process.env.GITHUB_REPO}`}
          target="blank"
          className="flex-1 text-brand-white-medium text-center py-2.5 font-semibold xl:py-3.5"
        >
          {formatStars}
        </Link>
      </div>
    </header>
  );
};

export default NavigationComponent;

const GithubSvg = () => {
  return (
    <svg
      width={24}
      height={20}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={24} height={20} fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_170_52"
            transform="matrix(0.0260417 0 0 0.03125 -0.0208333 0)"
          />
        </pattern>
        <image
          id="image0_170_52"
          width={40}
          height={32}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
