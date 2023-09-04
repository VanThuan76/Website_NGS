import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundDark from '@/components/icon/HO/security/BackgroundDark';
import BackgroundLight from '@/components/icon/HO/security/BackgroundLight';
import HomeSecurityCard from './HO_security_card';
import HomeSecurityResponsive from './HO_security_responsive';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const HomeSecurity = ({ data, className }: Props) => {
  const { theme } = useTheme();
  if(!data || !data.components || !data.section) return <React.Fragment></React.Fragment>
  return (
    <section
      id={data.section.code}
      className={`relative pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-40 ${className}`}
    >
      <TitleSection
        title='Bảo mật'
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='w-full flex flex-col lg:flex-row xl:flex-row justify-start items-start gap-3'
      />
      <div className='max-w-[1440px] w-full mx-auto my-auto hidden lg:flex flex-col justify-between items-center lg:items-end gap-5 mt-10'>
        <div className='grid grid-cols-2 justify-end items-end gap-2 md:gap-3'>
          {data.components!.slice(0, 2).map((item, idx) => (
            <HomeSecurityCard key={idx} title={item.title} image={item.image} className='col-span-1' />
          ))}
        </div>

        <div className='grid grid-cols-3 justify-end items-end gap-2 md:gap-3'>
          {data.components!.slice(2, 5).map((item, idx) => (
            <HomeSecurityCard key={idx} title={item.title} image={item.image}  className='col-span-1' />
          ))}
        </div>
        <div className='grid grid-cols-4 justify-end items-end gap-2 md:gap-3'>
          {data.components!.slice(5, 9).map((item, idx) => (
            <HomeSecurityCard key={idx} title={item.title} image={item.image}  className='col-span-1' />
          ))}
        </div>
      </div>
      {/* <-- Responsive */}
      <HomeSecurityResponsive data={data} />
      {/* Responsive --> */}
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
