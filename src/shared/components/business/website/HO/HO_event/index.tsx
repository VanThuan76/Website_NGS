import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import HomeEventContent from './HO_event_content';
import TitleSection from '@/components/common/customization/TitleSection';
import { IEvent } from '@/mocks/website/HO/event';
import { PreImage } from '@/components/common/customization/PreImage';

type Props = {
  data: Partial<IEvent>[]
  className?: string
}
const HomeEvent = ({data, className}: Props) => {
  const [selectedTab, setSelectedTab] = useState<Partial<IEvent>>(data[0]);
  return (
    <section
      id='Event'
      className={`w-full flex flex-col justify-around items-center mx-auto pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-40 ${className}`}
    >
      <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col justify-around items-center gap-10'>
        <TitleSection
          title='Sự kiện'
          description='Gặp gỡ chuyên gia từ NGS và khám phá cách phát triển doanh nghiệp của bạn.'
          findMore={false}
          className='w-full md:w-[80%] flex justify-between items-center gap-3'
        />
        <div className='w-full block lg:hidden'>
          {/* @ts-ignore */}
          <Swiper pagination={{
          dynamicBullets: true,
        }} modules={[Pagination]} className="shadow-lg" >
            {data.map((item, idx) => (
              <SwiperSlide className='w-full h-full flex flex-col rounded-lg shadow-lg' key={idx}>
                <PreImage alt='Event' src={item.image} width={650} height={600} className='rounded-lg' />
                <HomeEventContent event={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='w-full lg:grid grid-cols-6 justify-between items-end gap-5 hidden'>
          <AnimatePresence>
            {data.map((item, idx) => {
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
                  className={`${item === selectedTab ? 'col-span-3' : 'col-span-1'
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
                        <HomeEventContent event={item} />
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
                      <div className='absolute bottom-0 font-bold text-sm text-center'>{item.description}</div>
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
export default HomeEvent;
