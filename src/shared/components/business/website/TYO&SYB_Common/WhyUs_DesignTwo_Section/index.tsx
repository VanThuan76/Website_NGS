import { PreImage } from '@/components/common/customization/PreImage';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const WhyUsDesignTwoSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`pb-4 px-4 md:px-24 lg:px-32 overflow-hidden ${className}  `}>
      <div className='w-full mx-auto my-auto mt-10 grid grid-cols-1 justify-end items-end gap-10'>
        <div className='w-full grid grid-cols-2 justify-end items-end'>
          <div className='w-full flex flex-col justify-start items-start gap-3'>
            <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
            <h1 className='text-2xl md:text-4xl font-semibold'>{data.section.name}</h1>
          </div>
          <p>{data.section.description}</p>
        </div>
        <div className='w-full grid grid-cols-2 justify-end items-end'>
          <div></div>
          <div className='flex flex-col justify-start items-start gap-5'>
            {data.components.map((item, idx) => (
              <div key={idx} className='w-full h-full flex justify-start items-start px-4 py-6 gap-2 rounded-lg'>
                <div className='w-full flex flex-col justify-start items-start gap-3 border-l-2 border-l-orange-500 pl-6'>
                  <h1 className='text-xl md:text-2xl text-center text-orange-500'>{item.title}</h1>
                  <p className='text-xs md:text-base'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsDesignTwoSection;
