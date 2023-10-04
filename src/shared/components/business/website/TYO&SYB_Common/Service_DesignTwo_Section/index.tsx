import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { IEvent } from '@/mocks/website/HO/event';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ServiceDesignTwoItem from './Service_DesignTwo_Item';
import TitleSection from '@/components/common/customization/TitleSection';
import React from 'react';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const ServiceDesignTwoSection = ({ title, data, className }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Partial<IEvent>>(data.components![0]);
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id='Event'
      className={`w-full flex flex-col justify-around items-center mx-auto pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}
    >
      <div className='w-full mx-auto my-auto flex flex-col justify-around items-center gap-10'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={false}
          className='w-full grid-cols-7 col-span-7 text-center'
        />
        <div className='w-full block lg:hidden'>
          {/* @ts-ignore */}
          <Swiper pagination={{ dynamicBullets: true }} modules={[Pagination]} className='shadow-lg'>
            {data.components.map((item, idx) => (
              <SwiperSlide className='w-full h-full flex flex-col rounded-lg shadow-lg' key={idx}>
                <div className='relative w-[650px] h-[600px] rounded-lg overflow-hidden'></div>
                <PreImage alt={item.title} src={item.image} />
                <ServiceDesignTwoItem data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='w-full lg:grid grid-cols-6 justify-between items-end gap-5 hidden'>
          <AnimatePresence>
            {data.components.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0.8,
                    transform: 'translateX(-10px)',
                  }}
                  animate={{
                    opacity: item === selectedTab ? 1 : 0.8,
                    transform: item === selectedTab ? 'translateX(0)' : 'translateX(-10px)',
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                  }}
                  className={`${
                    item === selectedTab ? 'col-span-3' : 'col-span-1'
                  } w-full flex-shrink-0 snap-start cursor-pointer`}
                  onClick={() => setSelectedTab(item)}
                >
                  <motion.div
                    layout
                    className={`${item === selectedTab ? 'col-span-3' : 'col-span-1'} w-full shadow-lg`}
                  >
                    {item === selectedTab ? (
                      <div className='w-full h-[600px] flex flex-col rounded-lg overflow-hidden border border-orange-400'>
                        <PreImage alt={item.title} src={item.image} />
                        <ServiceDesignTwoItem data={item} />
                      </div>
                    ) : (
                      <div className='w-full h-[600px] rounded-lg overflow-hidden'>
                        <PreImage alt={item.title} src={item.image} />
                      </div>
                    )}
                    <div className='absolute left-5 top-5 text-xl md:text-2xl text-white'>0{idx + 1}</div>
                    {item !== selectedTab ? (
                      <div className='absolute left-1/2 bottom-0 transform -translate-x-1/2 text-sm text-center text-white'>
                        {item.title}
                      </div>
                    ) : (
                      ''
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default ServiceDesignTwoSection;
