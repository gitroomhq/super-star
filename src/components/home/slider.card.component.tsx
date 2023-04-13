import Image from "next/image";

const SliderCardComponent = ({
  item,
}: {
  item: {
    profile: {
      picture: string;
    };
    name: string;
    title: string;
    text: string;
    background: {
      picture: string;
    };
  };
}) => {
  return (
    <div className="relative bg-slider-item border border-brand-yellow rounded-xl px-6 py-8 xl:p-11">
      <div className="relative z-10">
        <div className="w-full flex items-start justify-between mb-4">
          <div className="relative w-16 h-16 xl:w-24 xl:h-24 rounded-full overflow-hidden">
            <Image
              className="object-contain"
              fill
              src={item?.profile?.picture!}
              alt="item"
            />
          </div>
        </div>
        <h3 className="text-white font-bold text-xl md:text-main/9 capitalize mb-2">
            {item.name}
        </h3>
        <p className="text-brand-plum-primary font-medium text-sm md:text-lg mb-4 xl:mb-6">
            {item.title}
        </p>
        <p className="lg:text-lg xl:text-xl font-medium text-brand-white-light mb-5 xl:mb-9">
            {item.text}
        </p>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-full">
        <Image
          className="object-contain"
          src={item?.background?.picture!}
          fill
          alt="bg"
        />
      </div>
    </div>
  );
};

export default SliderCardComponent;

const ItemSvg = () => {
  return (
    <svg
      width={39}
      height={44}
      viewBox="0 0 39 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.999937 0H38.9999L35.4999 43.1538L22.4999 4.15385L13.9717 18H0.939453L0.999937 4.15385V0Z"
        fill="url(#paint0_linear_209_108)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_209_108"
          x1="311.657"
          y1="6.23207"
          x2="32.4966"
          y2="7.63253"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#761B5C" />
          <stop offset="0.989583" stopColor="#E97368" />
        </linearGradient>
      </defs>
    </svg>
  );
};
