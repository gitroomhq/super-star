import Image from 'next/image';
import HeadingBottomLineComponent from "@github20k/components/home/heading.bottom.line.component";
import {mainPageDetails} from "@github20k/helpers/main.page.details";

const TechnicalContentComponent = () => {
  return (
    <div className='relative 2xl:pt-20'>
      <div className='max-w-base mx-auto grid md:grid-cols-2 gap-6 md:gap-12 xl:gap-20 items-center px-6 xl:px-14'>
        <div>
          <div className='relative max-w-lg xl:max-w-2xl aspect-square xl:aspect-auto xl:h-[36rem] mx-auto md:ml-auto'>
            <Image
              className='object-contain'
              src='/assets/slack-group.webp'
              fill
              alt='Slack Group'
            />
          </div>
        </div>
        <div className='text-center md:text-left '>
          <div className='max-w-3xl'>
            <h3 className='font-home-baukasten text-brand-white-primary text-3xl lg:text-4xl xl:text-5xl !leading-tight uppercase mb-3 lg:mb-5'>
              {mainPageDetails.section4.title}
            </h3>
            <HeadingBottomLineComponent className='w-32 lg:w-auto mx-auto mb-10 lg:mb-14 md:mx-0' />
          </div>
          <p className='max-w-lg mx-auto md:ml-0 text-brand-white-light font-medium text-lg xl:text-xl md:!leading-9 px-5 md:px-0'>
            {mainPageDetails.section4.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalContentComponent;
