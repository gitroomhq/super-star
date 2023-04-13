const HeadingBottomLineComponent = ({ className }: { className: string }) => {
  return (
    <svg
      width={282}
      height={18}
      viewBox='0 0 282 18'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0 0H282V4.15385H78.1754L69.6472 18H11.9395L0 4.15385V0Z'
        fill='url(#paint0_linear_209_107)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_209_107'
          x1='279.157'
          y1='2.07746'
          x2='-0.00338534'
          y2='3.47792'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#761B5C' />
          <stop offset='0.989583' stopColor='#E97368' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeadingBottomLineComponent;
