import Image from 'next/image';
import HeadingBottomLineComponent from "@github20k/components/home/heading.bottom.line.component";
import {mainPageDetails} from "@github20k/helpers/main.page.details";

const RecordingWithCompaniesComponent = () => {
  return (
    <div className='relative recording-left lg:bg-recording-right-bg bg-no-repeat bg-cover xl:bg-contain bg-right py-20 -mt-1'>
      <div className='relative max-w-base mx-auto grid md:grid-cols-2 gap-6 md:gap-12 xl:gap-20 items-center z-20 px-6 xl:px-14'>
        <div>
          <div className='relative max-w-lg xl:max-w-2xl aspect-square xl:aspect-auto xl:h-[42.8125rem] mx-auto md:ml-auto'>
            <Image
              className='object-contain'
              src='/assets/recordings.webp'
              fill
              alt='Recordings with Companies'
            />
          </div>
        </div>
        <div className='text-center md:text-left'>
          <div className='max-w-xl mb:mx-auto sm:mx-auto lg:mx-0 xl mx-0'>
            <h3 className='font-home-baukasten text-brand-white-primary text-3xl lg:text-4xl xl:text-5xl !leading-tight uppercase mb-3 lg:mb-5'>
              {mainPageDetails.section2.title}
            </h3>
            <HeadingBottomLineComponent className='w-32 lg:w-auto mx-auto mb-10 lg:mb-14 md:mx-0' />
          </div>
          <p className='max-w-lg mx-auto md:ml-0 text-brand-white-light font-medium text-lg xl:text-xl md:!leading-9 px-5 md:px-0'>
            {mainPageDetails.section2.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecordingWithCompaniesComponent;
