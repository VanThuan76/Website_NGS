import BtnCommon from '@/components/common/BtnCommon';
import TitleSection from '@/components/common/TitleSection';
import { ITestimonial, testimonialData } from '@/mocks/testimonial';
import { useState } from 'react';
import ContentTestimonial from './ContentTestimonial';

const Testimonial = () => {
  const [isHovered, setIsHovered] = useState<ITestimonial>(testimonialData[0] as ITestimonial);

  return (
    <section className='mx-auto px-32 py-24'>
      <div className='w-full flex justify-start items-start gap-5'>
        <div className='w-1/2 flex flex-col justify-start items-start'>
          <TitleSection
            title='Testimonial'
            description='Khách hàng nói gì về chúng tôi'
            findMore={true}
            className='w-full'
          />
          <BtnCommon title='Đọc thêm' />
        </div>
        <div className='mt-10 w-full max-h-[1000px] overflow-hidden overflow-y-scroll flex justify-start items-start gap-5'>
          <div className='pt-12 flex flex-col justify-start items-start gap-10'>
            {testimonialData.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setIsHovered(item)}
                  onMouseLeave={() => setIsHovered(item)}
                  className='w-full flex-shrink-0 snap-start cursor-pointer'
                >
                  <ContentTestimonial data={item} />
                </div>
              );
            })}
          </div>
          <div className='flex flex-col justify-start items-start gap-10'>
            {testimonialData.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setIsHovered(item)}
                  onMouseLeave={() => setIsHovered(item)}
                  className='w-full flex-shrink-0 snap-start cursor-pointer'
                >
                  <ContentTestimonial data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
1;
