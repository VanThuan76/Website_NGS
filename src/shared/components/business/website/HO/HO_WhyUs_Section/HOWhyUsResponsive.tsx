import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import { URLS_SYSTEM } from '@/utils/constants';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
interface Props {
  item: Partial<IComponents>;
}

const HomeWhyUsResponsive = ({ item }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
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
        className='flex-col justify-center items-start md:pl-20'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <div className='flex flex-col justify-center items-center'>
          {splitTextToArrayByDoubleSlash(item.description || '').map((item: string, idx: number) => (
            <p key={idx} className='text-sm lg:text-base text-slate-500'>
              {item}
            </p>
          ))}
        </div>
        <UseLinkRouter url={URLS_SYSTEM.ES}>
          <BtnCommon title='Tìm hiểu thêm' cls='mt-3 w-[170px] border border-orange-500' colorSvg={colorIcon} />
        </UseLinkRouter>
      </motion.div>
    </div>
  );
};

export default HomeWhyUsResponsive;
