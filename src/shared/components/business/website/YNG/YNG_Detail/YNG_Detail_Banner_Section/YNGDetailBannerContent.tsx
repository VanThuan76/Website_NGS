import BtnCommon from '@/components/common/customization/BtnCommon';
import InitBasicAnimation from '@/components/common/customization/InitBasicAnimation';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import { motion } from 'framer-motion';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
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
  selectedTab: Partial<IComponents>;
}

const YNGDetailBannerContent = ({ selectedTab }: Props) => {
  return (
    <InitBasicAnimation className='z-20 flex min-h-screen w-full flex-col items-start justify-start gap-10 px-12 pt-24 leading-[90%] text-white'>
      <div className='text-left text-3xl lg:text-6xl'>
        <motion.div
          className='flex flex-col items-start justify-start'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          {selectedTab.description?.split('//').map((word, idx) => (
            <motion.span variants={child} className='text-5xl font-semibold leading-[56px]' key={idx}>
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <motion.div className='w-[90%] text-xl font-medium leading-7 md:w-[50%]'>
        {selectedTab ? selectedTab.content : ''}
      </motion.div>
      <UseLinkRedirect sectionCode='FormYNG'>
        <BtnCommon title='Đăng ký ngay' cls='!px-6 bg-white border-none !rounded-sm' />
      </UseLinkRedirect>
    </InitBasicAnimation>
  );
};

export default YNGDetailBannerContent;
