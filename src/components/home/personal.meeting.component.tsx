import Image from 'next/image';
import HeadingBottomLineComponent from "@github20k/components/home/heading.bottom.line.component";
import {mainPageDetails} from "@github20k/helpers/main.page.details";

const PersonalMeetingComponent = () => {
  return (
    <div className='relative bg-personal-bg bg-no-repeat bg-contain bg-right pb-12 sm:pt-12 2xl:!py-20'>
      <div className='max-w-base mx-auto grid md:grid-cols-2 items-center md:gap-12 xl:gap-0 px-6 xl:px-14'>
        <div className='max-w-lg mx-auto md:ml-0 text-center md:text-left order-1 md:order-none'>
          <div>
            <h3 className='font-home-baukasten text-brand-white-primary text-3xl lg:text-4xl xl:text-5xl !leading-tight uppercase mb-3 lg:mb-5'>
              {mainPageDetails.section3.title}
            </h3>
            <HeadingBottomLineComponent className='w-36 lg:w-auto mx-auto mb-10 lg:mb-14 md:mx-0' />
          </div>
          <p className='text-brand-white-light font-medium text-lg xl:text-xl md:!leading-9 px-5 md:px-0'>
            {mainPageDetails.section3.description}
          </p>
        </div>
        <div>
          <div className='relative max-w-lg xl:max-w-2xl aspect-square xl:aspect-auto xl:h-[30rem] 2xl:!h-[42.8125rem] mx-auto md:ml-auto'>
            <Image
              className='object-contain'
              src='/assets/personal-meeting.webp'
              fill
              alt='Personal Meeting'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalMeetingComponent;
