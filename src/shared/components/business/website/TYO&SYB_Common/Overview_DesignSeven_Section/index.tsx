import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import React from 'react';
import TitleSection from '@/components/common/customization/TitleSection';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignSevenSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`max-w-[1440px] pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 overflow-hidden flex ${className}  `}
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center gap-12'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='w-full grid-cols-7 col-span-7 text-center'
        />
        <div className='relative w-full h-full grid grid-cols-3 justify-between items-center gap-5 -mt-6'>
          {data.components.map((item, idx) => (
            <div
              key={idx}
              className='w-full h-full flex flex-col justify-start items-start px-4 py-6 gap-2 rounded-lg border-overview-designSeven-section'
            >
              <div className='absolute w-[60px] h-[60px] rounded-lg overflow-hidden -top-10'>
                <PreImage src={item.image} alt={item.title} />
              </div>
              <h1 className='text-xl md:text-2xl text-center text-orange-500'>{item.title}</h1>
              <p className='text-xs md:text-base'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewDesignSevenSection;
