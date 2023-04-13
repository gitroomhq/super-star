import Image from 'next/image';
import HeadingBottomLineComponent from "@github20k/components/home/heading.bottom.line.component";
import {mainPageDetails} from "@github20k/helpers/main.page.details";

const StarsCourseComponent = () => {
  return (
    <div className='relative bg-stars-bg bg-cover bg-center lg:bg-contain lg:bg-right bg-no-repeat py-7 md:py-16 xl:py-32'>
      <div className='max-w-base mx-auto grid md:grid-cols-2 items-center gap-6 px-6 xl:px-14'>
        <div className='text-center md:text-left order-1 md:order-none'>
          <div>
            <h3 className='font-home-baukasten text-brand-white-primary text-3xl lg:text-4xl xl:text-5xl !leading-tight uppercase mb-3 lg:mb-5'>
              {mainPageDetails.section1.title}
            </h3>
            <HeadingBottomLineComponent className='w-40 lg:w-auto mx-auto mb-10 lg:mb-14 md:mx-0' />
          </div>
          <p className='max-w-lg mx-auto md:ml-0 text-brand-white-light font-medium text-lg xl:text-xl md:!leading-9 px-5 md:px-0'>
            {mainPageDetails.section1.description}
          </p>
        </div>
        <div>
          <div className='relative md:max-w-lg xl:max-w-2xl aspect-square xl:aspect-auto xl:h-[42.8125rem] mx-auto md:ml-auto'>
            <Image
              className='object-contain'
              src='/assets/stars-course.webp'
              fill
              alt='Stars Course'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarsCourseComponent;
