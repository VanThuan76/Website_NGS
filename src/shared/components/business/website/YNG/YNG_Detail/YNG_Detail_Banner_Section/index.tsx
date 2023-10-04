import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PreImage } from '@/components/common/customization/PreImage';
import { SectionData } from 'src/shared/schemas/typedef/ISectionData';
import YNGDetailBannerContent from './YNGDetailBannerContent';
import InitBasicAnimation from '@/components/common/customization/InitBasicAnimation';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

interface Props {
  data: Partial<IBaseSectionComponent>;
  className?: string;
}
const YNGDetailBannerSection = ({ data, className }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Partial<SectionData> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });
  const contentAnimated = {
    active: {
      borderColor: '#FFFFFFB2',
      color: '#FFFFFFB2',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    inactive: {
      borderColor: '#FFFFFFB2',
      color: '#FFFFFFB2',
      opacity: 0.7,
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

  return (
    <section id={data && data.section && data.section.code} className={`block w-screen pb-10 ${className}`}>
      <div className='snap-x-mandatory scrollbar-none relative h-full w-full overflow-hidden dark:text-white lg:max-h-[600px]'>
        <div className='z-20 h-full w-full bg-[#FC5E03]'>
          <YNGDetailBannerContent selectedTab={selectedTab!} />
        </div>
        <div className='absolute -bottom-56 left-0 z-10 h-full w-full overflow-hidden md:left-auto md:right-0 md:top-0 md:w-1/2'>
          <div className='relative h-full w-full overflow-hidden rounded-lg'>
            <PreImage src='/images/BannerDetailYNG.png' layer={false} alt='BannerDetailYNG' />
          </div>
        </div>
        <InitBasicAnimation className='absolute bottom-0 z-20 lg:bottom-12 lg:left-10'>
          <div className='flex items-center justify-between gap-5'>
            <ul className='items-center justify-between gap-5 md:flex'>
              {data.components!.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial='inactive'
                  animate={selectedTab === item ? 'active' : 'inactive'}
                  variants={contentAnimated}
                  className='cursor-pointer border-b-2 px-5 pb-3 font-medium'
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

export default YNGDetailBannerSection;
