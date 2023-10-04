import BtnCommon from '@/components/common/customization/BtnCommon';
import InitBasicAnimation from '@/components/common/customization/InitBasicAnimation';
import { URLS_SYSTEM } from '@/utils/constants';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { AnimatePresence, motion } from 'framer-motion';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

const textVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.6,
    },
  },
};
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};
const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};
interface Props {
  selectedTab: Partial<IComponents>;
}

const HOBannerContent = ({ selectedTab }: Props) => {
  return (
    <InitBasicAnimation className='font-custom absolute top-28 z-40 mx-auto flex w-full flex-col items-start justify-center gap-5 pl-4 lg:pl-24'>
      <div className='text-left text-sm font-medium text-white underline lg:text-lg'>
        <AnimatePresence mode='wait'>
          <motion.div
            className='text-left text-sm font-medium text-white underline lg:text-lg'
            variants={textVariants}
            initial='initial'
            animate='animate'
          >
            {selectedTab
              ? selectedTab?.description?.split(' ').map((word, idx) => (
                  <motion.div
                    key={idx}
                    className='inline-block text-sm md:text-lg lg:text-2xl'
                    variants={{
                      initial: {
                        opacity: 0,
                        y: -10,
                        rotate: -5,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                        transition: {
                          ease: 'easeOut',
                          duration: 0.4,
                        },
                      },
                    }}
                  >
                    {word + '\u00A0'}
                  </motion.div>
                ))
              : ''}
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.div
        className='flex flex-col items-start justify-start'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {selectedTab.content?.split('//').map((word, idx) => (
          <motion.span
            variants={child}
            style={{ lineHeight: '130%' }}
            className='text-2xl font-normal uppercase text-white lg:text-5xl'
            key={idx}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
      <UseLinkRouter url={URLS_SYSTEM.ES}>
        <BtnCommon title='Tìm hiểu thêm' cls='!px-3 bg-[#fff] border-none !text-orange-500 !rounded-sm rounded-lg' />
      </UseLinkRouter>
    </InitBasicAnimation>
  );
};

export default HOBannerContent;
