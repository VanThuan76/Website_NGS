import BtnCommon from '@/components/common/customization/BtnCommon';
import { IWhyUsData } from '@/mocks/website/HO/whyUs';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';

interface Props {
  item: IWhyUsData;
}

const HomeWhyUsResponsive = ({ item }: Props) => {
  const {theme} = useTheme();
  const colorIcon = theme !== "dark" ? "#F06426" : "#fff"
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='w-full py-3 flex flex-col gap-5 min-h-[10px] xl:min-h-[100px] overflow-hidden cursor-pointer'
      style={{ borderBottom: '1px solid #555' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex justify-start items-start gap-4 md:gap-8'>
        <h1 className='text-md md:text-xl lg:text-2xl xl:text-3xl'>{item.title}</h1>
      </div>

      <motion.div
        className='flex-col justify-center items-start pl-10 md:pl-20'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <p className='text-sm md:text-base'>{item.description}</p>
        <BtnCommon cls='border-orange-400' title='Tìm hiểu thêm' colorSvg={colorIcon} />
      </motion.div>
    </div>
  );
};

export default HomeWhyUsResponsive;
