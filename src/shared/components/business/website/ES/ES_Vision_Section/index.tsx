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
      className={`relative z-30 max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24 ${className}`}
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 186, 141, 0.35) 0%, rgba(255, 255, 255, 0.00) 100%)`,
      }}
    >
      <div className='mx-auto my-auto flex w-full flex-col items-center justify-between gap-5 lg:flex-row'>
        <div className='flex w-full flex-col items-center justify-center gap-3'>
          <h1 className='mt-3 text-sm font-medium leading-5 text-orange-500 md:text-2xl md:leading-6'>
            {data.section.name}
          </h1>
          <HightLightText
            originalText={data.section.description}
            className='text-center text-2xl leading-8 md:text-[40px] md:leading-[48px]'
          />
        </div>
      </div>
    </section>
  );
};

export default ESVisionSection;
