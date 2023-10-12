import { PreImage } from '@/components/common/customization/PreImage';
import useBreakPoint from '@/hooks/useBreakPoint';
import { AnimationControls, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
interface Props {
  title: string;
  description: string;
  image: string;
  slug: string;
  sectionControls: AnimationControls;
  idx: number;
  className?: string;
  isResponsive?: boolean;
}
const HOSecurityCard = ({ title, description, image, slug, sectionControls, idx, className, isResponsive }: Props) => {
  const [isHovered, setIsHovered] = useState<number | undefined>();
  const router = useRouter();
  const currentBreakPoint = useBreakPoint();
  return (
    <motion.div
      className={`border-card-security-home relative col-span-1 flex h-[202px] max-w-[304px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-sm dark:bg-[#222442] md:w-[304px] ${className}`}
      variants={{
        hidden: { opacity: 0, translateX: -50, translateY: -50 },
        visible: { opacity: 1, translateX: 0, translateY: 0 },
      }}
      initial='hidden'
      animate={sectionControls}
      transition={{ duration: 0.3, delay: idx * 0.5 }}
      onMouseEnter={() => !isResponsive && setIsHovered(idx)}
      onMouseLeave={() => !isResponsive && setIsHovered(undefined)}
      onClick={() => router.push(`/secure-your-business/${slug}`)}
    >
      <div className='flex flex-col items-center justify-center gap-3'>
        <div className={`relative ${currentBreakPoint === 'sm' ? 'h-[32px] w-[32px]' : 'h-[56px] w-[56px]'}`}>
          <PreImage src={image as string} alt={title} />
        </div>
        <p className='text-center text-lg font-normal md:text-xl md:font-medium'>{title}</p>
      </div>
      <motion.p
        className='absolute top-0 z-30 h-[202px] max-w-[304px] bg-[#e5e5e5] p-3'
        style={{ overflowY: 'hidden' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered === idx ? 1 : 0 }}
        whileHover={{ translateY: -5 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default HOSecurityCard;
