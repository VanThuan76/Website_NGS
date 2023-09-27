import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { PreImage } from '@/components/common/customization/PreImage';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
interface Props {
  id: number;
  title: string;
  description: string;
  image: string;
  url:string
  className: string;
}

const HOSolutionCard = ({ id, title, description, image, url, className }: Props) => {
  const [isHovered, setIsHovered] = useState(id === 1 ? true : false);
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
      className={`flex flex-col justify-start items-start p-2 px-[10px] cursor-pointer overflow-hidden border-collapse ${className}`}
      onHoverStart={() => id !== 1 && setIsHovered(true)}
      onHoverEnd={() => id !== 1 && setIsHovered(false)}
      animate={animateTheme}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <PreImage src={image} width={56} height={56} alt={title} className='mb-4 md:mb-6 rounded-lg' />
      <motion.div
        className={`w-full h-[80%] lg:h-full flex flex-col gap-2`}
        initial='start'
        animate={isHovered ? 'end' : 'start'}
        variants={containerVariants}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <div className='col-span-2 w-full flex flex-col justify-start items-start'>
          {splitTextToArrayByDoubleSlash(title || '').map((item: string, idx: number) => (
            <h1 key={idx} className='text-2xl md:text-4xl font-medium leading-10'>
              {item}
            </h1>
          ))}
        </div>
        <p className='pb-6 text-sm md:text-base'>{description}</p>

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
              <BtnCommon cls='border-orange-500 bg-white cursor-pointer' title='Tìm hiểu thêm' colorSvg={colorIcon} />
            </UseLinkRouter>
          </motion.div>
        )}
    </motion.div>
  );
};

export default HOSolutionCard;
