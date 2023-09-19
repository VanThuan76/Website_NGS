import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import React from 'react';

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
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 overflow-hidden flex ${className}  `}
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center gap-12'>
        <div className='flex flex-col justify-start items-start md:justify-center md:items-center gap-2'>
          <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
          <h1 className='w-[70%] text-2xl md:text-4xl font-semibold text-center'>{data.section.name}</h1>
          <p className='text-center mt-5'>{data.section.description}</p>
        </div>
        <div className='relative w-full h-full grid grid-cols-3 justify-between items-center gap-5 mt-16'>
          {data.components.map((item, idx) => (
            <div
              key={idx}
              className='w-full h-full flex flex-col justify-start items-start px-4 py-6 gap-2 rounded-lg'
            >
              <div className='absolute -top-10 w-full h-full'>
                <PreImage src={item.image} width={60} height={60} alt={item.title} className='rounded-lg' />
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
