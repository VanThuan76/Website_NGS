import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import HOEventContent from './HOEventContent';
import TitleSection from '@/components/common/customization/TitleSection';
import { IEvent } from '@/mocks/website/HO/event';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomeEventSection = ({ title, data, className }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Partial<IEvent> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data.section.code}
      className={`mx-auto flex w-full flex-col items-center justify-around px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}`}
    >
      <div className='mx-auto my-auto flex w-full max-w-[1440px] flex-col items-center justify-around gap-10'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section!.description as string}
          findMore={false}
          className='flex w-full items-center justify-between gap-3 md:w-[80%]'
        />
        <div className='block w-full lg:hidden'>
          {/* @ts-ignore */}
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className='shadow-lg'
          >
            {data.components.map((item, idx) => (
              <SwiperSlide className='flex h-full w-full flex-col rounded-lg shadow-lg' key={idx}>
                <PreImage alt={item.title} src={item.image} width={650} height={600} className='rounded-lg' />
                <HOEventContent event={item} />
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
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  className={`${
                    item === selectedTab ? 'col-span-3' : 'col-span-1'
                  } w-full flex-shrink-0 cursor-pointer snap-start`}
                  onClick={() => setSelectedTab(item)}
                  onMouseEnter={() => setSelectedTab(item)}
                >
                  <motion.div
                    layout
                    className={`${item === selectedTab ? 'col-span-3' : 'col-span-1'} w-full shadow-lg`}
                  >
                    {item === selectedTab ? (
                      <div className='grid h-full w-full grid-cols-1 items-start justify-between overflow-hidden rounded-lg'>
                        <PreImage
                          alt='Event'
                          src={item.image}
                          width={750}
                          height={390}
                          className='h-full w-full rounded-lg object-cover'
                        />
                        <HOEventContent className='relative' event={item} />
                      </div>
                    ) : (
                      <PreImage
                        alt={item.title}
                        src={item.image}
                        width={250}
                        height={600}
                        className='rounded-lg object-cover'
                      />
                    )}
                    {item !== selectedTab ? (
                      <div className='absolute bottom-0 text-center text-sm font-semibold text-slate-100'>
                        {item.description}
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
export default HomeEventSection;
