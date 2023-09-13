import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import BtnCommon from '@/components/common/customization/BtnCommon';
interface Props {
  item: IComponents;
  idx: number;
}

const ServiceDesignFourItem = ({ item, idx }: Props) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='w-full py-3 flex flex-col gap-5 min-h-[10px] lg:min-h-[100px] overflow-hidden cursor-pointer'
      style={{ borderBottom: '1px solid #555' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex justify-start items-start gap-4 md:gap-8'>
        <h1 className={`text-md md:text-xl lg:text-2xl xl:text-3xl ${isHovered ? 'text-orange-500' : ''}`}>{item.title}</h1>
      </div>

      <motion.div
        className='flex-col justify-center items-start'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        {/* <--Responsive */}
        <p className='hidden md:block text-sm md:text-base'>{item.content}</p>
        <p className='block md:hidden text-sm md:text-base'>
          {item.content.length > 100 ? `${item.content.substring(0, 80)}...` : item.content}
        </p>
        {/* Responsive--> */}
      </motion.div>
    </div>
  );
};

export default ServiceDesignFourItem;
