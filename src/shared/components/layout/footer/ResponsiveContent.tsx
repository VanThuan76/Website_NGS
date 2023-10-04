import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  title: string;
  items: string[];
}

const ResponsiveContent = ({ title, items }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='flex w-full cursor-pointer flex-col gap-2 overflow-hidden py-3'
      style={{ borderBottom: '1px solid #555' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-start justify-start gap-4 md:gap-8'>
        <h1 className='text-md md:text-xl lg:text-2xl xl:text-3xl'>{title}</h1>
      </div>
      {items.map((item: string, index: number) => (
        <motion.div
          key={index}
          className='flex-col items-start justify-start'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <p className='text-sm md:text-base'>{item}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ResponsiveContent;
