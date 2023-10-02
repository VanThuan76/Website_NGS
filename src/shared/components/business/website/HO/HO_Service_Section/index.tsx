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
    <section ref={ref} id={data.section.code} className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}>
      <TitleSection
        title={title}
        name={data.section.name as string}
        description={data.section.description as string}
        findMore={true}
        className='w-full grid-cols-7 col-span-7 md:grid-cols-12 md:col-span-5 !gap-8 !text-left'
      />
      <div className='max-w-[1440px] w-full h-full mx-auto my-auto mt-10 flex items-start justify-between lg:gap-10 xl:gap-10 overflow-hidden'>
        <AnimatePresence>
          <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
            {data &&
              data.components.map((item, idx) => {
                return <HOServiceSection sectionControls={sectionControls} key={idx} item={item} idx={idx} />;
              })}
          </div>
        </AnimatePresence>
        <div className='hidden md:block relative w-[676px] h-[676px] rounded-lg overflow-hidden'>
          <PreImage src={data.section.image} layer={false} alt={data.section.name}/>
        </div>
      </div>
    </section>
  );
};

export default HomeServiceSection;
