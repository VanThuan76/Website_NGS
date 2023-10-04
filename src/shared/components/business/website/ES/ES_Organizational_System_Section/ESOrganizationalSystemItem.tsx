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
      className='flex min-h-[10px] w-full cursor-pointer flex-col gap-5 overflow-hidden py-3 lg:min-h-[100px]'
      style={{ borderBottom: '1px solid #555' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-start justify-start gap-4 md:gap-8'>
        <div className='mb-3 text-xl md:text-2xl'>0{idx + 1}</div>
        <div className='flex flex-col items-start justify-start gap-2'>
          <h1 className='text-sm text-slate-500'>{item.title}</h1>
          <div className='relative h-[35px] w-[120px]'>
            <PreImage src={item.image} layer={false} alt={item.title} objectFit='contain' />
          </div>
        </div>
      </div>

      <motion.div
        className='flex-col items-start justify-center pl-6 md:pl-14'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        {/* <--Responsive */}
        <p className='hidden text-sm md:block md:text-base'>{item.description}</p>
        <p className='block text-sm md:hidden md:text-base'>
          {item.description.length > 100 ? `${item.description.substring(0, 80)}...` : item.description}
        </p>
        {/* Responsive--> */}
        <BtnCommon
          title='Tìm hiểu thêm'
          cls='mt-5 w-[190px] md:w-[170px] border border-orange-500'
          colorSvg={colorIcon}
        />
      </motion.div>
    </div>
  );
};

export default ESOrganizationalSystemItem;
