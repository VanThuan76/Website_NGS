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
    <section
      id={data.section.code}
      className={`max-w-[1440px] overflow-hidden px-4 py-4 md:px-24 md:py-12 lg:px-32 ${className}`}
    >
      <div className='grid w-full grid-cols-2 items-center justify-center gap-16'>
        <div className='relative h-[500px] w-full overflow-hidden rounded-lg'>
          <PreImage src={data.section.image} alt={data.section.name} />
        </div>
        <div className='cols-span-1 flex w-full flex-col items-start justify-start gap-10'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='col-span-7 w-full grid-cols-7 !text-left'
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsDesignThreeSection;
