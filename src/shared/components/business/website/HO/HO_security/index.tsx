import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import { ISecurityData } from '@/mocks/website/HO/security';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundDark from '@/components/icon/HO/security/BackgroundDark';
import BackgroundLight from '@/components/icon/HO/security/BackgroundLight';
import HomeSecurityCard from './HO_security_card';
import HomeSecurityResponsive from './HO_security_responsive';

type Props = {
  data: Partial<ISecurityData>[];
  className?: string;
};

const HomeSecurity = ({ data, className }: Props) => {
  const { theme } = useTheme();
  return (
    <section
      id='Security'
      className={`relative pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-40 ${className}`}
    >
      <TitleSection
        title='Bảo mật'
        description='Bảo vệ doanh nghiệp của bạn khỏi các nguy cơ an ninh mạng'
        findMore={true}
        className='w-full flex flex-col lg:flex-row xl:flex-row justify-start items-start gap-3'
      />
      <div className='max-w-[1440px] w-full mx-auto my-auto hidden lg:flex flex-col justify-between items-center lg:items-end gap-5 mt-10'>
        <div className='grid grid-cols-2 justify-end items-end gap-2 md:gap-3'>
          {data.slice(0, 2).map((item, idx) => (
            <HomeSecurityCard key={idx} item={item} className='col-span-1' />
          ))}
        </div>

        <div className='grid grid-cols-3 justify-end items-end gap-2 md:gap-3'>
          {data.slice(2, 5).map((item, idx) => (
            <HomeSecurityCard key={idx} item={item} className='col-span-1' />
          ))}
        </div>
        <div className='grid grid-cols-4 justify-end items-end gap-2 md:gap-3'>
          {data.slice(5, 9).map((item, idx) => (
            <HomeSecurityCard key={idx} item={item} className='col-span-1' />
          ))}
        </div>
      </div>
      <HomeSecurityResponsive />
      <motion.div
        className='absolute top-0 left-0 w-full h-full -z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ? (
          <BackgroundDark className='w-full object-center' />
        ) : (
          <BackgroundLight className='w-full scale-150 md:scale-100 object-center' />
        )}
      </motion.div>
    </section>
  );
};

export default HomeSecurity;
