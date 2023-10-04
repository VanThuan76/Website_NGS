import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { PreImage } from '@/components/common/customization/PreImage';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import useBreakPoint from '@/hooks/useBreakPoint';
interface Props {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  className: string;
}

const HOSolutionCard = ({ id, title, description, image, url, className }: Props) => {
  const currentBreakPoint = useBreakPoint();
  const [isHovered, setIsHovered] = useState(currentBreakPoint === 'sm' && id === 0 ? true : false);
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  const animateTheme =
    theme === 'dark'
      ? {
          backgroundColor: isHovered ? '' : '#141523',
          color: isHovered ? '#fff' : '',
        }
      : {
          backgroundColor: isHovered ? '' : '#fff',
          color: isHovered ? '#fff' : '',
        };

  const containerVariants = {
    start: { opacity: 1, y: 0 },
    end: { opacity: 1, y: 10 },
  };
  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      className={`flex border-collapse cursor-pointer flex-col items-start justify-start overflow-hidden px-[16px] py-[16px] ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={animateTheme}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <div
        className={`relative ${
          currentBreakPoint === 'sm' ? 'h-[40px] w-[40px]' : 'h-[56px] w-[56px]'
        } mb-4 overflow-hidden rounded-lg`}
      >
        <PreImage src={image} alt={title} />
      </div>
      <motion.div
        className={`flex w-full flex-col items-start justify-start gap-4`}
        initial='start'
        animate={isHovered ? 'end' : 'start'}
        variants={containerVariants}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <div className='flex h-[60px] w-full flex-col items-start justify-start'>
          {splitTextToArrayByDoubleSlash(title || '').map((item: string, idx: number) => (
            <h1 key={idx} className='text-base font-medium leading-6 md:text-2xl md:leading-8'>
              {item}
            </h1>
          ))}
        </div>
        <p className='pb-6 text-sm'>{description}</p>
      </motion.div>
      {isHovered && (
        <motion.div
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <UseLinkRouter url={url}>
            <BtnCommon
              cls='mt-6 h-[40px] border-orange-500 bg-white cursor-pointer rounded-[8px]'
              title='Tìm hiểu thêm'
              colorSvg={colorIcon}
            />
          </UseLinkRouter>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HOSolutionCard;
