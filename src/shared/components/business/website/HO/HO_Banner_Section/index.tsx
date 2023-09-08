import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { PreImage } from '@/components/common/customization/PreImage';
import { SectionData } from 'src/shared/schemas/typedef/ISectionData';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import InitBasicAnimation from '@/components/common/customization/InitBasicAnimation';
import MouseScroll from '@/components/icon/HO/banner/MouseScroll';
import HOBannerContent from './HOBannerContent';


interface Props {
  data: Partial<IBaseSectionComponent>;
}
const HomeBannerSection = ({ data }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Partial<SectionData>|undefined >(()=> {
    if(data.components && data.components.length > 0 ) return data.components[0]
    else return undefined
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
    setSelectedTab((prevTab) => {
      const nextIndex = data.components!.indexOf(prevTab as any) + 1;
      return nextIndex < data.components!.length ? data.components![nextIndex] : data.components![0];
    });
  };
  const handlePrev = () => {
    setSelectedTab((prevTab) => {
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
  if(!selectedTab) return <React.Fragment></React.Fragment>
  return (
    <section id={data && data.section && data.section.code} className='block'>
      <div className='snap-x-mandatory scrollbar-none relative max-h-[700px] flex overflow-hidden light:text-white'>
        <div className='relative w-full flex justify-between items-center mx-auto'>
          <HOBannerContent selectedTab={selectedTab} />
          <MouseScroll className='absolute right-10 bottom-10 z-30 hidden lg:block' />
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedTab ? selectedTab.title : 'empty'}
              initial={{ x: -10, opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, damping: 10, stiffness: 50 }}
              className='relative w-full flex-shrink-0 snap-start'
            >
              <PreImage
                src={selectedTab.image as string}
                height={1080}
                width={1980}
                layer={true}
                alt={'Banner'}
                className='w-full object-cover'
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <InitBasicAnimation className='absolute bottom-10 left-10 z-40'>
          <div className='flex items-center justify-between gap-5'>
            <ul className='hidden md:flex items-center justify-between gap-5'>
              {(data.components||[]).map((item, idx) => (
                <motion.li
                  key={idx}
                  initial='inactive'
                  animate={selectedTab === item ? 'active' : 'inactive'}
                  variants={contentAnimated}
                  className={`px-5 pb-3 border-b-4 ${item === selectedTab ? 'text-white' : 'text-slate-300 '
                    } cursor-pointer font-medium`}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.title}`}
                  {item === selectedTab ? <motion.div layoutId='underline' /> : null}
                </motion.li>
              ))}
            </ul>
          </div>
        </InitBasicAnimation>
      </div>
    </section>
  );
};

export default HomeBannerSection;
