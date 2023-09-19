import { PreImage } from '@/components/common/customization/PreImage';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignFourSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:p-24 2xl:px-96 overflow-hidden ${className}  `}
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center gap-16'>
        <div className='flex flex-col justify-start items-start md:justify-center md:items-center gap-4'>
          <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
          <h1 className='w-full text-2xl md:text-4xl font-semibold text-center'>{data.section.name}</h1>
        </div>
        <div className='w-full grid grid-cols-3 gap-8 mt-5'>
          {data.components.map((item, idx) => (
            <div key={idx} className='flex flex-col justify-between items-center gap-3 text-justify'>
              <PreImage src={item.image} width={60} height={60} alt={item.title} className='rounded-lg' />
              <h1 className='text-xl md:text-2xl font-semibold text-center w-72'>{item.title}</h1>
              <p className='text-xs md:text-base w-72'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewDesignFourSection;
