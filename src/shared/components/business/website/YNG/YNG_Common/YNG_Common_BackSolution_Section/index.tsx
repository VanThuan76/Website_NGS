import React from 'react';
import TitleSection from '@/components/common/customization/TitleSection';
import YNG_IconArrowRight from '@/components/icon/YNG/YNG_ERP/YNG_ERP_solution/YNG_IconArrowRight';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const YNGCommonBackSolutionSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`w-full mb-4 md:mb-12 lg:mb-[126px] px-8 lg:px-24 ${className}`}>
      <div className='max-w-[1440px] mt-[163px] grid grid-cols-2 justify-between items-start'>
        <div className='col-span-1 w-full flex flex-col justify-start items-start'>
          <TitleSection
            title={title}
            name={data.section.name}
            description={data.section.description}
            findMore={true}
            className='w-full grid col-span-7 !text-left'
          />
        </div>
        <div className={`col-span-1 w-full flex flex-col lg:flex-row justify-between items-center gap-4 mt-10`}>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-6'>
            {data.components.map((item, idx) => (
              <div key={idx} className='flex justify-between items-center pb-4 border-b-2 border-slate-300'>
                <p className='text-base font-normal'>{item.title}</p>
                <YNG_IconArrowRight />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YNGCommonBackSolutionSection;
