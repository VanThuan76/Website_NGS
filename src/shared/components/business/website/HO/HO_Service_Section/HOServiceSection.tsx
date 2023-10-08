import { AnimationControls, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import BtnCommon from '@/components/common/customization/BtnCommon';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';
import useTrans from '@/hooks/useTrans';
interface Props {
  item: IComponents;
  idx: number;
  sectionControls: AnimationControls;
}

const HOServiceSection = ({ item, idx, sectionControls }: Props) => {
  const { theme } = useTheme();
  const { trans } = useTrans();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className='border-card-service-ho-bottom flex min-h-[10px] w-full cursor-pointer flex-col gap-5 overflow-hidden py-3 lg:min-h-[100px]'
      variants={{
        hidden: { opacity: 0, translateY: -50 },
        visible: { opacity: 1, translateY: 0 },
      }}
      animate={sectionControls}
      initial='hidden'
      transition={{ duration: 0.5, delay: idx * 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-start justify-start gap-4 text-[#29130F] md:gap-8'>
        <div className='mb-3 text-xl font-medium md:text-2xl'>0{idx + 1}</div>
        <h1 className='text-md font-medium md:text-xl lg:text-2xl xl:text-2xl'>{item.title}</h1>
      </div>

      <motion.div
        className='flex-col items-start justify-center pl-10 md:pl-16'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <p className='hidden text-sm font-medium text-[#757575] md:block md:text-base'>{item.description}</p>
        {/* <--Responsive */}
        <p className='block text-sm md:hidden md:text-base'>
          {item.description.length > 100 ? `${item.description.substring(0, 80)}...` : item.description}
        </p>
        {/* Responsive--> */}
        <UseLinkRouter url={URLS_SYSTEM.ES}>
          <BtnCommon
            title={trans.common.findOutMore}
            cls='mt-5 w-[190px] md:w-[170px] border border-orange-500'
            colorSvg={colorIcon}
          />
        </UseLinkRouter>
      </motion.div>
    </motion.div>
  );
};

export default HOServiceSection;
