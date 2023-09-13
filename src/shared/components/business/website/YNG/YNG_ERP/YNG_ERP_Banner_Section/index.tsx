import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PreImage } from '@/components/common/customization/PreImage';
import { SectionData } from 'src/shared/schemas/typedef/ISectionData';
import YNGERPBannerContent from './YNGERPBannerContent';
import InitBasicAnimation from '@/components/common/customization/InitBasicAnimation';

interface Props {
  data: Partial<SectionData>[];
}
const YNGERPBannerSection = ({ data }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Partial<SectionData>>(data[0] as SectionData);
  const contentAnimated = {
    active: {
      borderColor: '#FF8A1E',
      color: '#FF8A1E',
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
    setSelectedTab((prevTab): SectionData | any => {
      const nextIndex = data.indexOf(prevTab) + 1;
      return nextIndex < data.length ? data[nextIndex] : data[0];
    });
  };
  const handlePrev = () => {
    setSelectedTab((prevTab): SectionData | any => {
      const prevIndex = data.indexOf(prevTab) - 1;
      return prevIndex >= 0 ? data[prevIndex] : data[data.length - 1];
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
    <section id='YNGERPBanner' className='block py-8'>
      <div className='snap-x-mandatory scrollbar-none h-full relative lg:max-h-[700px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden dark:text-white'>
        <div className='w-full h-full col-span-1 bg-[#FEF6EB]'>
          <YNGERPBannerContent selectedTab={selectedTab && selectedTab} />
        </div>
        <div className='w-full col-span-1'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedTab ? selectedTab.title : 'empty'}
              initial={{ x: -10, opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, damping: 10, stiffness: 50 }}
              className='w-full flex-shrink-0 snap-start'
            >
              <PreImage
                //@ts-ignore
                src={selectedTab && selectedTab.image}
                height={1080}
                width={1980}
                layer={true}
                alt={'Banner'}
                className='rounded-lg'
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <InitBasicAnimation className='absolute bottom-0 lg:bottom-12 lg:left-10 z-40'>
          <div className='flex items-center justify-between gap-5'>
            <ul className='md:flex items-center justify-between gap-5'>
              {data.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial='inactive'
                  animate={selectedTab === item ? 'active' : 'inactive'}
                  variants={contentAnimated}
                  className={`px-5 pb-3 border-b-4 ${
                    item === selectedTab ? 'text-orange-500' : 'text-orange-500'
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

export default YNGERPBannerSection;
