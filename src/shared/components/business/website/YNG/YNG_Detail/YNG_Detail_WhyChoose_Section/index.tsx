import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const YNGDetailWhyChooseSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`relativew-full mb-4 md:mb-12 lg:mb-24 px-8 py-10 lg:px-14 lg:py-24 ${className}  `}
    >
      <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
      <div className='mt-5 w-full grid grid-cols-2 justify-between items-start gap-10'>
        <div className='w-[80%] flex flex-col justify-start items-start gap-2 z-30'>
          <h1 className='text-2xl md:text-4xl font-semibold'>{data.section.name}</h1>
        </div>
        <div className='w-full grid grid-cols-1 justify-start items-start gap-5'>
          {data.components.map((item, idx) => (
            <div key={idx} className='w-full flex flex-col justify-start items-start gap-3'>
              <h1 className='text-xl md:text-2xl font-semibold'>{item.title}</h1>
              <p className='text-xs md:text-base'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YNGDetailWhyChooseSection;
