import { PreImage } from '@/components/common/customization/PreImage';
import { AnimationControls, motion } from 'framer-motion';
import React from 'react';
interface Props {
  title: string;
  description: string;
  image: string;
  sectionControls: AnimationControls
  idx: number
}
const HOSecurityCard = ({ title, description, image, sectionControls, idx }: Props) => {
  return (
    <motion.div
      className='border-card-security-home relative max-w-[310px] h-full p-3 flex flex-col justify-start items-center dark:bg-[#222442] rounded-lg shadow-md overflow-hidden col-span-1'
      variants={{
        hidden: { opacity: 0, translateX: -50, translateY: -50 },
        visible: { opacity: 1, translateX: 0, translateY: 0 },
      }}
      initial='hidden'
      animate={sectionControls}
      transition={{ duration: 0.7, delay: idx * 0.9 }}
    >
      <PreImage src={image as string} width={72} height={72} alt={title} />
      <p className='text-center font-semibold'>{title}</p>
      <p className='mt-2'>{description}</p>
    </motion.div>
  );
};

export default HOSecurityCard;
