import TitleSection from '@/components/common/customization/TitleSection';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignNineSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`max-w-[1440px] overflow-hidden px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}  `}
    >
      <div className='grid w-full grid-cols-1 items-start justify-start md:grid-cols-2 md:gap-12'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='col-span-7 w-full grid-cols-7 !gap-2 !text-left'
        />
        <div className='flex flex-col items-start justify-start gap-12 md:pt-16'>
          {data.components.map((item, idx) => (
            <div key={idx} className='flex w-full flex-col items-start justify-start gap-4'>
              <h1 className='text-xl font-semibold md:text-2xl'>{item.title}</h1>
              <p className='text-xs text-[#444444] md:text-base'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewDesignNineSection;
