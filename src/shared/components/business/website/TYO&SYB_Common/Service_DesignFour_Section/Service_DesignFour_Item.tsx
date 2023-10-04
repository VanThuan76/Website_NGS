import { motion } from 'framer-motion';
import { useState } from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import { ArrowDown, ArrowUp } from 'lucide-react';
interface Props {
  item: IComponents;
}

const ServiceDesignFourItem = ({ item }: Props) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div
      className='flex min-h-[10px] w-full cursor-pointer flex-col gap-5 overflow-hidden py-3 lg:min-h-[60px]'
      style={{ borderBottom: '1px solid #555' }}
      onClick={() => setIsClick(!isClick)}
    >
      <div className='flex w-full items-start justify-between gap-4 md:gap-8'>
        <h1 className={`text-md font-medium md:text-xl ${isClick ? 'text-orange-500' : ''}`}>{item.title}</h1>
        <div
          className={`flex h-[30px] w-[30px] items-center justify-center rounded-full ${
            isClick ? 'bg-[#FACFB3]' : 'bg-slate-300'
          }`}
        >
          {isClick ? <ArrowUp color='#FC5E03' /> : <ArrowDown />}
        </div>
      </div>

      <motion.div
        className='flex-col items-start justify-center'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isClick ? 1 : 0, height: isClick ? 'auto' : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        {/* <--Responsive */}
        <p className='hidden text-sm font-normal md:block md:text-base'>{item.content}</p>
        <p className='block text-sm font-normal md:hidden md:text-base'>
          {item.content.length > 100 ? `${item.content.substring(0, 80)}...` : item.content}
        </p>
        {/* Responsive--> */}
      </motion.div>
    </div>
  );
};

export default ServiceDesignFourItem;
