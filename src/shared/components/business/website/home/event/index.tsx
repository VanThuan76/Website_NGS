import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import TitleSection from '@/components/common/TitleSection';
import { eventData, IEvent } from '@/mocks/website/event';
import ContentEvent from './ContentEvent';
import { PreImage } from '@/components/common/PreImage';

const Event = () => {
  const [selectedTab, setSelectedTab] = useState<IEvent>(eventData[0] as IEvent);

  return (
    <section id="Event" className='w-full flex flex-col justify-around items-center mx-auto pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96'>
      <div className='w-full min-h-[700px] flex flex-col justify-around items-center gap-10'>
        <TitleSection
          title='Sự kiện'
          description='Gặp gỡ chuyên gia từ NGS và khám phá cách phát triển doanh nghiệp của bạn.'
          findMore={false}
          className="w-full md:w-[80%] flex flex-col md:flex-row justify-between items-center gap-3"
        />
        <div className='w-full grid grid-cols-6 justify-between items-end gap-5'>
          <AnimatePresence>
            {eventData.map((item, idx) => {
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
                  <motion.div layout className={`${item === selectedTab ? 'col-span-3' : 'col-span-1'} w-full shadow-lg`}>
                    {item === selectedTab ? (
                      <div className='w-full h-full flex flex-col rounded-lg'>
                        <PreImage alt='Event' src={item.image} width={650} height={600} className="rounded-lg" />
                        <ContentEvent event={item} />
                      </div>
                    ) : (
                      <PreImage alt='Event' src={item.image} width={1980} height={600} className="object-cover rounded-lg" />
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

export default Event;
