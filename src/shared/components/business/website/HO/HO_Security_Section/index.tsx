import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundDark from '@/components/icon/HO/security/BackgroundDark';
import BackgroundLight from '@/components/icon/HO/security/BackgroundLight';
import HOSecurityCard from './HOSecurityCard';
import HOSecurityResponsive from './HOSecurityResponsive';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const HomeSecuritySection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const sectionControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      sectionControls.start('visible');
    }
  }, [isInView]);
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section ref={ref} id={data.section.code} className={`max-w-[1440px] relative pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}>
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='w-full grid-cols-7 col-span-7 md:grid-cols-12 md:col-span-5 !gap-8 !text-left'
      />
      <div className='w-full mx-auto my-auto hidden lg:flex flex-col justify-between items-center lg:items-end gap-5 mt-5'>
        <div className='grid grid-cols-4 justify-end items-end gap-2'>
          <div></div>
          <div></div>
          {data.components.slice(0, 2).map((item, idx) => (
            <HOSecurityCard
              key={idx}
              title={item.title}
              description={item.description}
              image={item.image}
              slug={item.slug}
              sectionControls={sectionControls}
              idx={idx}
            />
          ))}
        </div>
        <div className='grid grid-cols-4 justify-end items-end gap-2'>
          <div></div>
          {data.components.slice(2, 5).map((item, idx) => (
            <HOSecurityCard
              key={idx}
              title={item.title}
              description={item.description}
              image={item.image}
              slug={item.slug}
              sectionControls={sectionControls}
              idx={idx}
            />
          ))}
        </div>
        <div className='grid grid-cols-4 justify-end items-end gap-2'>
          {data.components.slice(5, 9).map((item, idx) => (
            <HOSecurityCard
              key={idx}
              title={item.title}
              description={item.description}
              image={item.image}
              slug={item.slug}
              sectionControls={sectionControls}
              idx={idx}
            />
          ))}
        </div>
      </div>
      {/* <-- Responsive */}
      <HOSecurityResponsive data={data}  sectionControls={sectionControls}/>
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

export default HomeSecuritySection;
