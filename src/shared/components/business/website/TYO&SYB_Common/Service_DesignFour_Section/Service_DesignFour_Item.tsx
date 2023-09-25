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
      className='w-full py-3 flex flex-col gap-5 min-h-[10px] lg:min-h-[60px] overflow-hidden cursor-pointer'
      style={{ borderBottom: '1px solid #555' }}
      onClick={() => setIsClick(!isClick)}
    >
      <div className='w-full flex justify-between items-start gap-4 md:gap-8'>
        <h1 className={`text-md md:text-xl font-medium ${isClick ? 'text-orange-500' : ''}`}>{item.title}</h1>
        {/* <ArrowUp /> */}
        <div
          className={`flex justify-center items-center w-[30px] h-[30px] rounded-full ${
            isClick ? 'bg-[#FACFB3]' : 'bg-slate-300'
          }`}
        >
          {isClick ? <ArrowUp color='#FC5E03' /> : <ArrowDown />}
        </div>
      </div>

      <motion.div
        className='flex-col justify-center items-start'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isClick ? 1 : 0, height: isClick ? 'auto' : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        {/* <--Responsive */}
        <p className='hidden md:block text-sm md:text-base font-normal'>{item.content}</p>
        <p className='block md:hidden text-sm md:text-base font-normal'>
          {item.content.length > 100 ? `${item.content.substring(0, 80)}...` : item.content}
        </p>
        {/* Responsive--> */}
      </motion.div>
    </div>
  );
};

export default ServiceDesignFourItem;
