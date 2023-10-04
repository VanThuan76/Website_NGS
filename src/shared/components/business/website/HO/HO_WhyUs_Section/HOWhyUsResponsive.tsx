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
      className='flex min-h-[10px] w-full cursor-pointer flex-col gap-5 overflow-hidden py-3 xl:min-h-[100px]'
      style={{ borderBottom: '1px solid #555' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-start justify-start gap-1'>
        {splitTextToArrayByDoubleSlash(item.title || '').map((item: string, idx: number) => (
          <p key={idx} className='text-md md:text-xl lg:text-2xl xl:text-3xl'>
            {item}
          </p>
        ))}
      </div>

      <motion.div
        className='flex-col items-start justify-center pl-5'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <div className='flex flex-col items-center justify-center'>
          {splitTextToArrayByDoubleSlash(item.description || '').map((item: string, idx: number) => (
            <p key={idx} className='text-sm text-slate-500 lg:text-base'>
              {item}
            </p>
          ))}
        </div>
        <UseLinkRouter url={URLS_SYSTEM.ES}>
          <BtnCommon title='Tìm hiểu thêm' cls='mt-3 w-[190px] border border-orange-500' colorSvg={colorIcon} />
        </UseLinkRouter>
      </motion.div>
    </div>
  );
};

export default HomeWhyUsResponsive;
