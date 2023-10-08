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
      className={`mx-auto flex w-full flex-col items-center justify-around px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}`}
    >
      <div className='mx-auto my-auto flex w-full flex-col items-center justify-around gap-10'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={false}
          className='col-span-7 w-full grid-cols-7 !gap-0 text-center'
        />
        <div className='block w-full lg:hidden'>
          {/* @ts-ignore */}
          <Swiper pagination={{ dynamicBullets: true }} modules={[Pagination]} className='shadow-lg'>
            {data.components.map((item, idx) => (
              <SwiperSlide className='flex h-full w-full flex-col rounded-lg shadow-lg' key={idx}>
                <div className='relative h-[600px] w-[650px] overflow-hidden rounded-lg'></div>
                <PreImage alt={item.title} src={item.image} />
                <ServiceDesignTwoItem data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='hidden w-full grid-cols-6 items-end justify-between gap-5 lg:grid'>
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
                  } w-full flex-shrink-0 cursor-pointer snap-start`}
                  onClick={() => setSelectedTab(item)}
                >
                  <motion.div
                    layout
                    className={`${item === selectedTab ? 'col-span-3' : 'col-span-1'} w-full shadow-lg`}
                  >
                    {item === selectedTab ? (
                      <div className='flex h-[600px] w-full flex-col overflow-hidden rounded-lg border border-orange-400'>
                        <PreImage alt={item.title} src={item.image} />
                        <ServiceDesignTwoItem data={item} />
                      </div>
                    ) : (
                      <div className='h-[600px] w-full overflow-hidden rounded-lg'>
                        <PreImage alt={item.title} src={item.image} />
                      </div>
                    )}
                    <div className='absolute left-5 top-5 text-xl text-black md:text-4xl'>0{idx + 1}</div>
                    {item !== selectedTab ? (
                      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 transform text-center text-sm text-black'>
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
