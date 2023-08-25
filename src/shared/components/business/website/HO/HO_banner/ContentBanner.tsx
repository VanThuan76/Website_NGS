import BtnCommon from '@/components/common/customization/BtnCommon';
import InitBasicAnimation from '@/components/common/customization/InitBasicAnimation';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionData } from 'src/shared/schemas/typedef/ISectionData';

export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const wordAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};
interface Props {
  selectedTab: Partial<SectionData>;
}

const ContentBanner = ({ selectedTab }: Props) => {
  return (
    <InitBasicAnimation className='absolute min-h-screen w-full flex flex-col justify-center items-center gap-5 leading-[90%] lg:left-0 lg:px-12 lg:items-start z-40'>
      <div className='text-left text-sm lg:text-lg underline text-white'>
        <AnimatePresence mode='wait'>
          <motion.span variants={staggerChildren} initial='initial' animate='animate'>
            {selectedTab
              ? selectedTab?.title?.split(' ').map((word, idx) => (
                  <motion.div key={idx} className='inline-block' variants={word.length > 1 ? wordAnimation : {}}>
                    <motion.span className='inline-block'>{word + '\u00A0'}</motion.span>
                  </motion.div>
                ))
              : ''}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className='w-[50%] text-2xl lg:text-5xl uppercase text-white font-semibold leading-[56px]'>
        {selectedTab ? selectedTab.description : ''}
      </div>
      <BtnCommon title='Đăng ký ngay' cls='!px-6 bg-[#fff] border-none !text-orange-500 !rounded-sm' />
    </InitBasicAnimation>
  );
};

export default ContentBanner;
