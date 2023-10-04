import React, { useEffect, useRef } from 'react';
import { AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import HOServiceSection from './HOServiceSection';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomeServiceSection = ({ title, data, className }: Props) => {
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
      className={`max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}`}
    >
      <TitleSection
        title={title}
        name={data.section.name as string}
        description={data.section.description as string}
        findMore={true}
        className='col-span-7 w-full grid-cols-7 !gap-8 !text-left md:col-span-5 md:grid-cols-12'
      />
      <div className='mx-auto my-auto mt-5 flex h-full w-full items-start justify-between overflow-hidden md:mt-10 lg:gap-10 xl:gap-10'>
        <AnimatePresence>
          <div className='flex w-full flex-col items-center justify-center lg:w-1/2'>
            {data &&
              data.components.map((item, idx) => {
                return <HOServiceSection sectionControls={sectionControls} key={idx} item={item} idx={idx} />;
              })}
          </div>
        </AnimatePresence>
        <div className='relative hidden h-[676px] w-[676px] overflow-hidden rounded-lg md:block'>
          <PreImage src={data.section.image} layer={false} alt={data.section.name} />
        </div>
      </div>
    </section>
  );
};

export default HomeServiceSection;
