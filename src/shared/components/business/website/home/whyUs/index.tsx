import { useState } from 'react';
import IconNGS from './IconNGS';
import { IWhyUsData, WhyUsData } from '@/mocks/website/whyUs';
import ContentWhyUs from './ContentWhyUs';
import { partnerData } from '@/mocks/website/partner';
import { PreImage } from '@/components/common/PreImage';
import TitleSection from '@/components/common/TitleSection';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ResponsiveContent from './Responsive';

const WhyUs = () => {
  const [selectedIcon, setSelectedIcon] = useState<IWhyUsData>(WhyUsData[0]);
  return (
    <>
      <section
        id='WhyUs'
        className='relative mx-auto pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96'
      >
        <div className='w-full'>
          <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
            <div className='w-full flex flex-col justify-between items-center gap-3'>
              <TitleSection
                title='Điều gì tạo nên NGS'
                description='Tại sao nên chọn đồng hành cùng chúng tôi!'
                findMore={false}
                className='w-[80%]'
              />
              {/* //Content - Responsive Mobile */}
              <div className='flex md:hidden w-full lg:w-1/2 xl:w-1/2 flex-col justify-center items-center'>
                {WhyUsData.map((item, idx) => {
                  return <ResponsiveContent key={idx} item={item} />;
                })}
              </div>
              {/* //IconNGS - Responsive Tablet */}
              <div className='hidden md:block lg:hidden w-full z-40 float-right'>
                <IconNGS selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
                <ContentWhyUs selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
              </div>
              {/* //IconNGS - Responsive Desktop */}
              <div className='hidden lg:block w-full mt-5'>
                <ContentWhyUs selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
              </div>
            </div>

            <div className='hidden lg:block w-full z-40 float-right'>
              <IconNGS selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
            </div>
          </div>
          <div className='w-full min-h-[200px] flex flex-col justify-center items-center lg:mt-20'>
            <div className='absolute w-full flex flex-col items-center justify-center'>
              <h2 className='hidden lg:block text-xl xl:text-2xl'>Hệ sinh thái của chúng tôi</h2>
              <Swiper slidesPerView={3} spaceBetween={30} modules={[Pagination]} className='w-full'>
                {partnerData.map((item, idx) => (
                  <SwiperSlide className='w-full' key={idx}>
                    <PreImage
                      key={idx}
                      src={item.logo}
                      height={200}
                      width={400}
                      layer={false}
                      alt={'WhyUs'}
                      className='w-full h-full rounded-lg'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
