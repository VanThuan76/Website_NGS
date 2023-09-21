import BtnCommon from '@/components/common/customization/BtnCommon';
import InitBasicAnimation from '@/components/common/customization/InitBasicAnimation';
import { URLS_SYSTEM } from '@/utils/constants';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
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
interface Props {
  selectedTab: Partial<IComponents>;
}

const HOBannerContent = ({ selectedTab }: Props) => {
  return (
    <InitBasicAnimation className='absolute top-28 max-h-screen w-full flex flex-col justify-center items-start gap-5 pl-4 lg:pl-24 z-40'>
      <div className='text-left text-sm lg:text-lg underline font-medium text-white'>
        <AnimatePresence mode='wait'>
          <motion.div
            className='text-left text-sm lg:text-lg underline font-medium text-white'
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
      <div className='flex flex-col justify-start items-start'>
        {splitTextToArrayByDoubleSlash(selectedTab.content || '').map((item: string, idx: number) => (
          <div
            key={idx}
            style={{ lineHeight: '120%' }}
            className='text-2xl lg:text-5xl uppercase text-white font-medium'
          >
            {item}
          </div>
        ))}
      </div>
      <UseLinkRouter url={URLS_SYSTEM.ES}>
        <BtnCommon title='Tìm hiểu thêm' cls='!px-3 bg-[#fff] border-none !text-orange-500 !rounded-sm' />
      </UseLinkRouter>
    </InitBasicAnimation>
  );
};

export default HOBannerContent;
