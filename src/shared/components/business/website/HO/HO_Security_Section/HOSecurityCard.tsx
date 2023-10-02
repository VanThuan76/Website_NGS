import { PreImage } from '@/components/common/customization/PreImage';
import useBreakPoint from '@/hooks/useBreakPoint';
import { AnimationControls, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
interface Props {
  title: string;
  description: string;
  image: string;
  slug: string
  sectionControls: AnimationControls;
  idx: number;
  className?: string;
}
const HOSecurityCard = ({ title, description, image, slug, sectionControls, idx, className }: Props) => {
  const [isHovered, setIsHovered] = useState<number | undefined>();
  const router = useRouter()
  const currentBreakPoint = useBreakPoint()
  return (
    <motion.div
      className={`border-card-security-home relative max-w-[304px] h-[202px] p-2 flex flex-col justify-center items-center bg-white dark:bg-[#222442] rounded-lg shadow-sm overflow-hidden col-span-1 cursor-pointer ${className}`}
      variants={{
        hidden: { opacity: 0, translateX: -50, translateY: -50 },
        visible: { opacity: 1, translateX: 0, translateY: 0 },
      }}
      initial='hidden'
      animate={sectionControls}
      transition={{ duration: 0.7, delay: idx * 0.9 }}
      onMouseEnter={() => setIsHovered(idx)}
      onMouseLeave={() => setIsHovered(undefined)}
      onClick={() => router.push(`/secure-your-business/${slug}`)}
    >
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className={`relative ${currentBreakPoint === "sm" ? "w-[56px] h-[56px]" : "w-[72px] h-[72px]"}`}>
          <PreImage src={image as string} alt={title} />
        </div>
        <p className='text-lg md:text-xl text-center font-normal md:font-semibold'>{title}</p>
      </div>
      <motion.p
        className='max-w-[304px] p-2 absolute top-0 bg-[#e5e5e5] z-30'
        style={{ overflowY: 'hidden' }}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered === idx ? 1 : 0, height: isHovered === idx ? '202px' : 0 }}
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
