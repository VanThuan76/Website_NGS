import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const WhyUsDesignThreeSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`px-4 md:px-24 lg:px-32 py-4 md:py-12 lg:py-24 overflow-hidden ${className}`}>
      <div className='w-full grid grid-cols-2 justify-center items-center gap-5'>
        <div className='relative w-full flex-shrink-0 snap-start'>
          <PreImage
            src={data.section.image}
            width={1980}
            height={500}
            alt={data.section.name}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='cols-span-1 w-full flex flex-col justify-start items-start gap-10'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full flex flex-col justify-start items-start gap-3'
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsDesignThreeSection;
