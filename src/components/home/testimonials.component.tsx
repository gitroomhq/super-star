import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Navigation } from 'swiper';
import HeadingBottomLineComponent from "@github20k/components/home/heading.bottom.line.component";
import SliderCardComponent from "@github20k/components/home/slider.card.component";
import {mainPageDetails} from "@github20k/helpers/main.page.details";

const TestimonialsComponent = () => {
  return (
    <div className='relative pb-12 pt-20 lg:pt-10 lg:pb-20 xl:pt-0 xl:pb-36'>
      <div className='mb-16 lg:mb-20 xl:mb-24'>
        <h3 className='font-home-baukasten text-brand-white-primary font-medium text-center text-3xl lg:text-4xl uppercase mb-1 lg:mb-3.5'>
          What people say
        </h3>
        <HeadingBottomLineComponent className='mx-auto px-8 lg:px-3.5' />
      </div>
      <div className='max-w-[110rem] mx-auto relative'>
        <Slider />
      </div>
      <div className='md:hidden grid md:grid-cols-2 gap-6 px-6 '>
        {mainPageDetails.testimonials.map((item, idx) => (
          <SliderCardComponent key={idx} item={item!} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsComponent;

function Slider() {
  return (
    <>
      <div className='max-w-base mx-auto hidden md:block px-6'>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          navigation={{
            nextEl: '.slide-next',
            prevEl: '.slide-prev',
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Navigation]}
          className='pb-1'>
          {mainPageDetails.testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <SliderCardComponent item={item!} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='z-0 w-full hidden absolute top-1/2 -translate-y-1/2 left-0 md:flex items-center justify-between z-20'>
        <button
          type='button'
          className='slide-prev text-[#302861] hover:text-brand-yellow disabled:opacity-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-16 h-16'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </button>
        <button
          type='button'
          className='slide-next text-[#302861] hover:text-brand-yellow disabled:opacity-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-16 h-16'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
    </>
  );
}
