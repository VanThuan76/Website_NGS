import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import InitBasicAnimation from '@/components/common/InitBasicAnimation';
import { PreImage } from '@/components/common/PreImage';
import Border from '@/components/icon/banner/Border';
import ContentBanner from './ContentBanner';
import { useTheme } from 'next-themes';
export interface Data {
  title: string;
  description: string;
  image: string;
}

interface Props {
  data: Data[];
}
const Banner = ({ data }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Data>(data[0] as Data);
  const {theme} = useTheme();
  const colorBorder = theme === "dark" ? "#141523" : "#fff"
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
    setSelectedTab((prevTab): Data | any => {
      const nextIndex = data.indexOf(prevTab) + 1;
      return nextIndex < data.length ? data[nextIndex] : data[0];
    });
  };
  const handlePrev = () => {
    setSelectedTab((prevTab): Data | any => {
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
    <section className='block py-8'>
      <div className='snap-x-mandatory scrollbar-none relative max-h-[700px] flex overflow-hidden dark:text-white'>
        <div className='relative w-full flex justify-between items-center mx-auto'>
          <ContentBanner selectedTab={selectedTab && selectedTab} />
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedTab ? selectedTab.title : 'empty'}
              initial={{ x: -10, opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, damping: 10, stiffness: 50 }}
              className='relative w-full flex-shrink-0 snap-start'
            >
              <Border color={colorBorder} className='absolute top-12 z-30' />
              <PreImage
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
        <InitBasicAnimation className='absolute bottom-10 left-10 z-40'>
          <div className='flex items-center justify-between gap-5'>
            <ul className='hidden md:flex items-center justify-between gap-5'>
              {data.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial='inactive'
                  animate={selectedTab === item ? 'active' : 'inactive'}
                  variants={contentAnimated}
                  className={`px-5 pb-3 border-b-4 cursor-pointer ${
                    item === selectedTab ? 'text-white' : 'text-slate-300 '
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

export default Banner;
