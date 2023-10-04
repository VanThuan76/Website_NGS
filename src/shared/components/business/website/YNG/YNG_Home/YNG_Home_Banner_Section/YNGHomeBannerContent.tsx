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
  title: string;
  selectedTab: Partial<IComponents>;
}

const YNGHomeBannerContent = ({ title, selectedTab }: Props) => {
  return (
    <InitBasicAnimation className='z-40 flex w-full flex-col items-start justify-start gap-10 px-4 pb-4 pt-16 leading-[90%] md:px-12'>
      <div className='text-left text-3xl lg:text-6xl'>
        <motion.div
          className='flex flex-col items-start justify-start'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <p className='text-sm !text-[#FC5E03] md:text-base'>{title}</p>
          {selectedTab.description?.split('//').map((word, idx) => (
            <motion.span
              variants={child}
              className='text-2xl font-medium leading-8 md:text-5xl md:font-semibold md:leading-[56px]'
              key={idx}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <motion.div className='w-full text-xl font-medium leading-7 md:w-[80%]'>
        {selectedTab ? selectedTab.content : ''}
      </motion.div>
      <UseLinkRedirect sectionCode='FormYNG'>
        <BtnCommon title='Đăng ký ngay' cls='!px-6 bg-orange-500 border-none !text-white !rounded-sm' />
      </UseLinkRedirect>
    </InitBasicAnimation>
  );
};

export default YNGHomeBannerContent;
