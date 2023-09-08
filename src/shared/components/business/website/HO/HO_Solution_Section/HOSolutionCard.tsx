import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { PreImage } from '@/components/common/customization/PreImage';
import BtnCommon from '@/components/common/customization/BtnCommon';
import IconLineDirection from '@/components/icon/IconLineDirection';
interface Props {
  title: string;
  description: string;
  image: string;
  className: string;
}

const HOSolutionCard = ({ title, description, image, className }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
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
  return (
    <motion.div
      className={`flex flex-col justify-start items-start p-3 cursor-pointer overflow-hidden border-collapse ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={animateTheme}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <PreImage src={image} width={50} height={50} alt={title} className='mb-4 md:mb-6 xl:mb-10 rounded-lg' />
      <div className='w-full h-[80%] lg:h-full flex flex-col justify-between items-start gap-5'>
        <h1 className='text-base md:text-2xl lg:text-3xl'>{title}</h1>
        <p className='text-sm md:text-base'>{description}</p>
        <BtnCommon cls='border-orange-500 bg-white px-2' title='Tìm hiểu thêm' colorSvg={colorIcon} />
      </div>
    </motion.div>
  );
};

export default HOSolutionCard;
