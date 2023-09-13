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

type Props = {
  title: string
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const ServiceDesignTwoSetion = ({ title, data, className }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Partial<IEvent>>(data.components![0]);
  return (
    <section
      id='Event'
      className={`w-full flex flex-col justify-around items-center mx-auto pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-40 ${className}`}
    >
      <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col justify-around items-center gap-10'>
        <TitleSection
          title={title}
          name={data.section!.name as string}
          description={data.section!.description as string}
          findMore={false}
          className='w-full flex justify-center items-center gap-3'
        />
        <div className='w-full block lg:hidden'>
          {/* @ts-ignore */}
          <Swiper pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
            className='shadow-lg'
          >
            {data.components!.map((item, idx) => (
              <SwiperSlide className='w-full h-full flex flex-col rounded-lg shadow-lg' key={idx}>
                <PreImage
                  alt='Event'
                  //@ts-ignore
                  src={item.image}
                  width={650}
                  height={600}
                  className='rounded-lg'
                />
                <ServiceDesignTwoItem data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='w-full lg:grid grid-cols-6 justify-between items-end gap-5 hidden'>
          <AnimatePresence>
            {data.components!.map((item, idx) => {
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
                      <div className='w-full h-full flex flex-col rounded-lg'>
                        <PreImage alt='Event' src={item.image!} width={1980} height={600} className='rounded-lg' />
                        <ServiceDesignTwoItem data={item} />
                      </div>
                    ) : (
                      <PreImage
                        alt='Event'
                        src={item.image!}
                        width={1980}
                        height={600}
                        className='object-cover rounded-lg'
                      />
                    )}
                    {item !== selectedTab ? (
                      <div className='absolute left-1/2 bottom-0 transform -translate-x-1/2 text-sm text-center text-white'>{item.title}</div>
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
export default ServiceDesignTwoSetion;