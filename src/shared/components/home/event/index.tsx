import TitleSection from '@/components/common/TitleSection';
import { eventData, IEvent } from '@/mocks/event';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PreImage } from '../../common/PreImage';
import ContentEvent from './ContentEvent';

const Event = () => {
  const [selectedTab, setSelectedTab] = useState<IEvent>(eventData[0] as IEvent);

  return (
    <section className='w-full flex flex-col justify-around items-center mx-auto px-32 pb-24'>
      <div className='w-full min-h-[700px] flex flex-col justify-around items-center gap-10'>
        <TitleSection
          title='Sự kiện'
          description='Gặp gỡ chuyên gia từ NGS và khám phá cách phát triển doanh nghiệp của bạn.'
          findMore={false}
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
                  <motion.div layout className={`${item === selectedTab ? 'col-span-3' : 'col-span-1'} w-full`}>
                    {item === selectedTab ? (
                      <div className='w-full h-full flex flex-col'>
                        <PreImage alt='Event' src={item.image} width={650} height={700} />
                        <ContentEvent event={item} />
                      </div>
                    ) : (
                      <PreImage alt='Event' src={item.image} width={1980} height={700} className="object-cover" />
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
