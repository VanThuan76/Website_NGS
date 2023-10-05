import React, { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
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
    <section
      ref={ref}
      id={data.section.code}
      className={`relative max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}`}
    >
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='col-span-7 w-full grid-cols-7 !gap-8 !text-left md:col-span-5 md:grid-cols-12'
      />
      <div className='mx-auto my-auto mt-5 hidden w-full flex-col items-center justify-between gap-5 lg:flex lg:items-end'>
        <div className='grid grid-cols-4 items-end justify-end gap-2'>
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
        <div className='grid grid-cols-4 items-end justify-end gap-2'>
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
        <div className='grid grid-cols-4 items-end justify-end gap-2'>
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
      <HOSecurityResponsive data={data} sectionControls={sectionControls} />
      {/* Responsive --> */}
    </section>
  );
};

export default HomeSecuritySection;
