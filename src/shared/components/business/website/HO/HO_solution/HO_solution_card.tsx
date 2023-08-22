import { PreImage } from '@/components/common/customization/PreImage';
import IconLineDirection from '@/components/icon/IconLineDirection';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';

interface Props {
  title: string;
  description: string;
  className: string;
}

const HomeSolutionCard = ({ title, description, className }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const animateTheme =
    theme === 'dark'
      ? {
          backgroundColor: isHovered ? '' : '#141523',
          color: isHovered ? '#fff' : '',
        }
      : {
          backgroundColor: isHovered ? '' : '#fff',
          color: isHovered ? '#000' : '',
        };

  return (
    <motion.div
      className={`flex flex-col justify-start items-start p-3 cursor-pointer overflow-hidden border-collapse ${className}`}
      style={{ border: '1px solid #222442' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={animateTheme}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <PreImage
        src='https://c4.wallpaperflare.com/wallpaper/624/21/247/microsoft-windows-windows-10-technology-hi-tech-wallpaper-preview.jpg'
        width={50}
        height={50}
        alt='solution'
        className='mb-4 md:mb-6 xl:mb-10 rounded-lg'
      />
      <div className='w-full h-[80%] lg:h-full flex flex-col justify-start items-start gap-5'>
        <motion.h1
          initial={{ marginTop: '100px' }}
          animate={{ marginTop: isHovered ? '0' : '100px' }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          className='text-sm md:text-base lg:text-xl xl:text-2xl uppercase mt-10 md:mt-14 lg:mt-16 xl:mt-20'
        >
          {title}
        </motion.h1>
        {isHovered && (
          <motion.p
            initial='hidden'
            animate={isHovered ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, display: 'block' },
              hidden: { opacity: 0, display: 'none' },
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className='text-sm md:text-base none'
          >
            {description}
          </motion.p>
        )}
      </div>
      <div className='flex justify-between items-center gap-3 mt-2 md:mt-4 lg:mt-8'>
        <motion.p className={`text-sm md:text-base xl:text-xl ${isHovered ? 'underline' : 'none'}`}>Tìm hiểu thêm</motion.p>
        <IconLineDirection color={theme !== 'dark'? "#000" : "#fff"} />
      </div>
    </motion.div>
  );
};

export default HomeSolutionCard;
