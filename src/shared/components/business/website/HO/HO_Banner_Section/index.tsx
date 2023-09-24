import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
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
  const [direction, setDirection] = useState<number>(0);
  const [isCalculateWidthTab, setIsCalculateWidthTab] = useState<string>('w-[40px]');
  const [idxTab, setIdxTab] = useState(1)
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
  const variants = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      };
    },
  };
  const handleNext = () => {
    setDirection(0);
    setSelectedTab(prevTab => {
      const nextIndex = data.components!.indexOf(prevTab as any) + 1;
      return nextIndex < data.components!.length ? data.components![nextIndex] : data.components![0];
    });
  };
  const handlePrev = () => {
    setDirection(1);
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
  useEffect(() => {
    setIsCalculateWidthTab(
      `w-[${(200 / Number(data && data.components && data.components.length)) * (idxTab + 1)}px]`,
    );
  }, [data, idxTab]);
  if (!selectedTab) return <React.Fragment></React.Fragment>;
  return (
    <section id={data && data.section && data.section.code} className='pb-10 block'>
      <div className='snap-x-mandatory scrollbar-none relative max-h-[600px] flex overflow-hidden light:text-white'>
        <div className='relative w-full flex justify-between items-center mx-auto'>
          <HOBannerContent selectedTab={selectedTab} />
          <UseLinkRedirect sectionCode='PG001SE00002'>
            <div className='animate-bounce absolute right-10 bottom-10 z-30 hidden lg:block'>
              <MouseScroll />
            </div>
          </UseLinkRedirect>
          <div className='mx-auto w-[100vw] h-[100vh] relative overflow-hidden'>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                variants={variants}
                animate='animate'
                initial='initial'
                exit='exit'
                src={selectedTab.image as string}
                alt={selectedTab.title as string}
                className='absolute top-0 left-0 w-full h-full object-cover object-center'
                key={selectedTab.title as string}
                custom={direction}
              />
            </AnimatePresence>
          </div>
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
                    setIdxTab(idx)
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
              className={`absolute left-4 ${isCalculateWidthTab} bottom-0 border-b-2 border-white z-30`}
            />
          </div>
        </InitBasicAnimation>
      </div>
    </section>
  );
};

export default HomeBannerSection;
