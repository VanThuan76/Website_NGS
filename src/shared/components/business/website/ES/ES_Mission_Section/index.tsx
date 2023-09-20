import React from 'react';
import BackgroundMission from '@/components/icon/ES/BackgroundMission';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ESMissionSection = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`overflow-hidden px-6 py-5 md:py-10 lg:py-20 md:px-12 lg:px-24 ${className} bg-[#051C2C]`}>
      <div className='max-w-[1440px] mx-auto grid grid-cols-2 justify-between items-center gap-5 text-white'>
        <div className='w-full h-full flex flex-col justify-center items-start gap-10'>
          <div className='w-full flex flex-col justify-start items-start gap-3'>
            <h1 className='text-orange-500'>{data.section.name}</h1>
            <p className='text-3xl lg:text-4xl'>{data.section.description}</p>
          </div>
          <div className='w-full flex flex-col lg:flex-row justify-center items-start gap-5 mt-16 bg-transparent overflow-hidden'>
            {data.components.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`w-full dark:bg-[#1B1D35] ${
                    data.components && data.components?.length - 1 !== idx && 'border-card-mission-es'
                  } p-5 flex flex-col justify-center items-center gap-5 text-center`}
                >
                  <div className='text-orange-500 text-5xl'>{item.title}</div>
                  <p className='w-2/3'>{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='relative w-full h-full'>
          <BackgroundMission className='absolute top-0 right-0 w-full h-full object-cover' />
        </div>
      </div>
    </section>
  );
};

export default ESMissionSection;
