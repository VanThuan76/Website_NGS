import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
interface Props {
  item: IComponents;
  idx: number;
}

const ESOrganizationalSystemItem = ({ item, idx }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='w-full py-3 flex flex-col gap-5 min-h-[10px] lg:min-h-[100px] overflow-hidden cursor-pointer'
      style={{ borderBottom: '1px solid #555' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex justify-start items-start gap-4 md:gap-8'>
        <div className='mb-3 text-xl md:text-2xl'>0{idx + 1}</div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h1 className='text-sm text-slate-500'>{item.title}</h1>
          <PreImage
          src={item.image}
          height={35}
          width={120}
          layer={false}
          alt={item.title}
          className='w-full h-full object-contain'
        />
        </div>
      </div>

      <motion.div
        className='flex-col justify-center items-start pl-6 md:pl-14'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        {/* <--Responsive */}
        <p className='hidden md:block text-sm md:text-base'>{item.description}</p>
        <p className='block md:hidden text-sm md:text-base'>
          {item.description.length > 100 ? `${item.description.substring(0, 80)}...` : item.description}
        </p>
        {/* Responsive--> */}
        <BtnCommon title='Tìm hiểu thêm' cls='mt-5 w-[170px] border border-orange-500' colorSvg={colorIcon} />
      </motion.div>
    </div>
  );
};

export default ESOrganizationalSystemItem;
