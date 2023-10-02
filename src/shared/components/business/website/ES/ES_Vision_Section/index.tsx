import HightLightText from '@/utils/functions/HightLightText';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const ESVisionSection = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`relative w-full z-30 pb-4 md:pb-8 lg:pb-10 xl:pb-24 px-4 md:px-24 ${className}`}
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 186, 141, 0.35) 0%, rgba(255, 255, 255, 0.00) 100%)`,
      }}
    >
      <div className='max-w-[1440px] mx-auto my-auto flex flex-col lg:flex-row gap-5 justify-between items-center'>
        <div className='w-full flex flex-col justify-center items-center gap-3'>
          <h1 className='text-sm leading-5 md:text-2xl md:leading-6 font-medium text-orange-500'>{data.section.name}</h1>
          <HightLightText originalText={data.section.description} className='text-2xl md:text-[40px] leading-8 md:leading-[48px] text-center' />
        </div>
      </div>
    </section>
  );
};

export default ESVisionSection;
