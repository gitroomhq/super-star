import Image from 'next/image';
import {mainPageDetails} from "@github20k/helpers/main.page.details";

const AboutComponent = () => {
  return (
    <div className='relative max-w-base mx-auto z-20 px-6 -mt-52 lg:mt-0 lg:py-16 xl:py-32'>
      <div className='bg-about border border-brand-yellow rounded-t-3xl pt-12 md:pb-11'>
        <RecSvg />

        <div className='flex flex-col lg:flex-row justify-center items-center md:gap-10 px-7 md:px-10 xl:px-28'>
          <div className='lg:pl-20 flex-1 text-center lg:text-left '>
            <h2 className='font-home-baukasten text-xl md:text-2xl xl:text-3xl text-brand-white-primary font-medium uppercase mb-8'>
              {mainPageDetails.aboutMe.title}
            </h2>
            <p className='max-w-lg text-brand-white-light font-medium text-lg md:text-xl md:leading-8'>
              {mainPageDetails.aboutMe.text}
            </p>
          </div>
          <div className='relative my-10 md:my-0 w-64 h-64 md:w-[317px] md:h-[317px]'>
            <Image
              className='object-contain'
              src={'/assets/about-img.png'}
              fill
              alt='about'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;

const RecSvg = () => {
  return (
    <div className='hidden lg:inline-block relative left-10 xl:left-20'>
      <svg
        width={19}
        height={231}
        viewBox='0 0 19 231'
        fill='none'
        className='absolute top-16'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M13.1944 0H19V231H0V148.797L13.1944 110.037V0Z'
          fill='url(#paint0_linear_209_65)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_209_65'
            x1='8.23333'
            y1={0}
            x2='8.23333'
            y2='225.379'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#761B5C' />
            <stop offset='0.989583' stopColor='#E97368' />
          </linearGradient>
        </defs>
      </svg>
      <div className='absolute w-1 h-60 bg-brand-yellow -top-0 left-10' />
    </div>
  );
};
