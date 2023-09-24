import { AnimationControls, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import BtnCommon from '@/components/common/customization/BtnCommon';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';
interface Props {
  item: IComponents;
  idx: number;
  sectionControls: AnimationControls;
}

const HOServiceSection = ({ item, idx, sectionControls }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className='w-full py-3 flex flex-col gap-5 min-h-[10px] lg:min-h-[100px] overflow-hidden cursor-pointer'
      variants={{
        hidden: { opacity: 0, translateY: -50 },
        visible: { opacity: 1, translateY: 0 },
      }}
      animate={sectionControls}
      initial='hidden'
      transition={{ duration: 0.7, delay: idx * 0.7 }}
      style={{ borderBottom: '1px solid #555' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex justify-start items-start gap-4 md:gap-8'>
        <div className='mb-3 text-xl md:text-2xl font-medium'>0{idx + 1}</div>
        <h1 className='text-md md:text-xl lg:text-2xl xl:text-2xl font-medium'>{item.title}</h1>
      </div>

      <motion.div
        className='flex-col justify-center items-start pl-10 md:pl-16'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <p className='hidden md:block text-sm md:text-base text-[#757575] font-medium'>{item.description}</p>
        {/* <--Responsive */}
        <p className='block md:hidden text-sm md:text-base'>
          {item.description.length > 100 ? `${item.description.substring(0, 80)}...` : item.description}
        </p>
        {/* Responsive--> */}
        <UseLinkRouter url={URLS_SYSTEM.ES}>
          <BtnCommon title='Tìm hiểu thêm' cls='mt-5 w-[170px] border border-orange-500' colorSvg={colorIcon} />
        </UseLinkRouter>
      </motion.div>
    </motion.div>
  );
};

export default HOServiceSection;
