import { useState } from 'react';

import HomeTestimonialContent from './HO_testimonial_home';
import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import { ITestimonial, testimonialData } from '@/mocks/website/HO/testimonial';

const HomeTestimonial = () => {
  const [isHovered, setIsHovered] = useState<ITestimonial>(testimonialData[0] as ITestimonial);

  return (
    <section id="Testimonial" className='pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-40'>
      <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col lg:flex-row justify-start items-start gap-5'>
        <div className='w-full lg:w-1/2 flex flex-col justify-start items-start'>
          <TitleSection
            title='Testimonial'
            description='Khách hàng nói gì về chúng tôi'
            findMore={true}
            className='w-full flex flex-col justify-start items-start gap-3'
            />
          <BtnCommon title='Đọc thêm' />
        </div>
        <div className='lg:mt-10 w-full max-h-[700px] overflow-hidden overflow-y-scroll flex flex-col lg:flex-row justify-start items-start gap-5'>
          <div className='pt-6 lg:pt-12 flex flex-col justify-start items-start gap-5 lg:gap-10'>
            {testimonialData.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setIsHovered(item)}
                  onMouseLeave={() => setIsHovered(item)}
                  className='w-full flex-shrink-0 snap-start cursor-pointer'
                >
                  <HomeTestimonialContent data={item} />
                </div>
              );
            })}
          </div>
          <div className='flex flex-col justify-start items-start gap-5 lg:gap-10'>
            {testimonialData.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setIsHovered(item)}
                  onMouseLeave={() => setIsHovered(item)}
                  className='w-full flex-shrink-0 snap-start cursor-pointer'
                >
                  <HomeTestimonialContent data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
1;