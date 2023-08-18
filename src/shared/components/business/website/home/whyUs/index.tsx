import { useState } from 'react';
import IconNGS from './IconNGS';
import { AnimatePresence, motion } from 'framer-motion';
import { IWhyUsData, WhyUsData } from '@/mocks/website/whyUs';
import Background from '@/components/icon/whyUs/background/Background';
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
      <section id='WhyUs' className='relative mx-auto pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96'>
            <motion.div
              className='absolute top-50 lg:top-0 xl:top-0 left-0 w-full h-full z-0'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Background className='w-full object-center' />
            </motion.div>
            <div className='relative top-0 left-0 w-full'>
              <div className='w-full flex justify-between items-center'>
                <div className='w-full flex flex-col justify-between items-center gap-3'>
                  <TitleSection
                    title='Điều gì tạo nên NGS'
                    description='Tại sao nên chọn đồng hành cùng chúng tôi!'
                    findMore={false}
                    className='w-[80%]'
                  />
                  {/* //Content - Responsive */}
                  <div className='hidden lg:block w-full mt-5'>
                    <ContentWhyUs selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
                  </div>
                  <AnimatePresence>
                    <div className='flex lg:hidden w-full lg:w-1/2 xl:w-1/2 flex-col justify-center items-center'>
                      {WhyUsData.map((item, idx) => {
                        return <ResponsiveContent key={idx} item={item} />;
                      })}
                    </div>
                  </AnimatePresence>
                  {/* //Content - Responsive */}
                </div>
                <div className='hidden lg:block w-full z-40 float-right'>
                  <IconNGS selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
                </div>
              </div>
              <div className='flex flex-col justify-center items-center mt-20'>
                <h2 className='hidden lg:block text-xl xl:text-2xl'>Hệ sinh thái của chúng tôi</h2>
                <div className='w-full flex items-start justify-between gap-5'>
                  <Swiper slidesPerView={4} spaceBetween={30} modules={[Pagination]} className='w-full'>
                    {partnerData.map((item, idx) => (
                      <SwiperSlide className='w-full' key={idx}>
                        <PreImage
                          key={idx}
                          src={item.logo}
                          height={200}
                          width={400}
                          layer={false}
                          alt={'Service'}
                          className='relative rounded-lg'
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
