import { PreImage } from '@/components/common/customization/PreImage';
import { AnimationControls, motion } from 'framer-motion';
import React, { useState } from 'react';
interface Props {
  title: string;
  description: string;
  image: string;
  sectionControls: AnimationControls;
  idx: number;
}
const HOSecurityCard = ({ title, description, image, sectionControls, idx }: Props) => {
  const [isHovered, setIsHovered] = useState<number | undefined>();
  return (
    <motion.div
      className='border-card-security-home relative max-w-[300px] h-full p-3 flex flex-col justify-start items-center dark:bg-[#222442] rounded-lg shadow-md overflow-hidden col-span-1 cursor-pointer'
      variants={{
        hidden: { opacity: 0, translateX: -50, translateY: -50 },
        visible: { opacity: 1, translateX: 0, translateY: 0 },
      }}
      initial='hidden'
      animate={sectionControls}
      transition={{ duration: 0.7, delay: idx * 0.9 }}
      onMouseEnter={() => setIsHovered(idx)}
      onMouseLeave={() => setIsHovered(undefined)}
    >
      <PreImage src={image as string} width={72} height={72} alt={title} />
      <p className='text-center font-semibold'>{title}</p>
      <motion.p
        className='hidden mt-2'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered === idx ? 1 : 0, height: isHovered === idx ? 'auto' : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default HOSecurityCard;
