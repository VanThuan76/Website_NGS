import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { PreImage } from '@/components/common/customization/PreImage';
import { SectionData } from 'src/shared/schemas/typedef/ISectionData';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import InitBasicAnimation from '@/components/common/customization/InitBasicAnimation';
import MouseScroll from '@/components/icon/HO/banner/MouseScroll';
import HOBannerContent from './HOBannerContent';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';

interface Props {
  data: Partial<IBaseSectionComponent>;
}
const HomeBannerSection = ({ data }: Props) => {
  const [isCalculateWidthTab, setIsCalculateWidthTab] = useState<number>(40);
  const [selectedTab, setSelectedTab] = useState<Partial<SectionData> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });
  const contentAnimated = {
    active: {
      borderColor: '#fff',
      color: '#fff',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    inactive: {
      borderColor: '#C2C0BF',
      color: '#C2C0BF',
      opacity: 0.8,
    },
  };
  const handleNext = () => {
    setSelectedTab(prevTab => {
      const nextIndex = data.components!.indexOf(prevTab as any) + 1;
      return nextIndex < data.components!.length ? data.components![nextIndex] : data.components![0];
    });
  };
  const handlePrev = () => {
    setSelectedTab(prevTab => {
      const prevIndex = data.components!.indexOf(prevTab as any) - 1;
      return prevIndex >= 0 ? data.components![prevIndex] : data.components![data.components!.length - 1];
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    document.body.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  if (!selectedTab) return <React.Fragment></React.Fragment>;
  return (
    <section id={data && data.section && data.section.code} className='pb-10 block'>
      <div className='snap-x-mandatory scrollbar-none relative max-h-[600px] flex overflow-hidden light:text-white'>
        <div className='relative w-full flex justify-between items-center mx-auto'>
          <HOBannerContent selectedTab={selectedTab} />
          <UseLinkRedirect sectionCode='PG001SE00002'>
            <motion.div
              animate={{ y: 10 }}
              transition={{ duration: 2, repeat: Infinity, delay: 1, repeatDelay: 1 }}
              className='absolute right-10 bottom-10 z-30'
            >
              <MouseScroll className='hidden lg:block' />
            </motion.div>
          </UseLinkRedirect>
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedTab ? selectedTab.title : 'empty'}
              initial={{ opacity: 0.75 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.75 }}
              transition={{ duration: 0.25 }}
              className='relative w-full flex-shrink-0 snap-start'
            >
              <PreImage
                src={selectedTab.image as string}
                height={760}
                width={1980}
                layer={true}
                alt={selectedTab.title as string}
                className='w-full object-cover'
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <InitBasicAnimation className='absolute bottom-10 pl-4 lg:pl-20 z-40'>
          <div className='relative w-full flex items-center justify-between gap-3'>
            <ul className='hidden md:flex items-center justify-between gap-3'>
              {(data.components || []).map((item, idx) => (
                <motion.li
                  key={idx}
                  initial='inactive'
                  animate={selectedTab === item ? 'active' : 'inactive'}
                  variants={contentAnimated}
                  className={`custom-list-item px-4 pb-3 text-sm font-normal ${
                    item === selectedTab ? 'text-white' : 'text-slate-300 '
                  } cursor-pointer font-medium`}
                  onClick={() => {
                    setIsCalculateWidthTab(
                      (200 / Number(data && data.components && data.components.length)) * (idx + 1),
                    );
                    setTimeout(() => {
                      setSelectedTab(item);
                    }, 0);
                  }}
                >
                  {`${item.title}`}
                </motion.li>
              ))}
            </ul>
            <motion.div
              layoutId='underline'
              className='absolute left-4 w-[200px] bottom-0 border-b-2 border-slate-500 z-20'
            />
            <motion.div
              layoutId='underline'
              className={`absolute left-4 w-[${isCalculateWidthTab}px] bottom-0 border-b-2 border-white z-30`}
            />
          </div>
        </InitBasicAnimation>
      </div>
    </section>
  );
};

export default HomeBannerSection;
