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
    <section id={data.section.code} className={`overflow-hidden ${className} bg-[#051C2C]`}>
      <div className='w-full grid grid-cols-2 justify-center items-center gap-5 text-white'>
        <div className='cols-span-1 w-full flex flex-col justify-start items-start gap-3 px-16'>
          <div className='w-full flex flex-col justify-start items-start gap-3'>
            <h1 className='text-orange-500'>{data.section.name}</h1>
            <p className='text-3xl lg:text-4xl'>{data.section.description}</p>
          </div>
          <div className='w-full flex justify-center items-start gap-5 mt-10 bg-transparent overflow-hidden'>
            {data.components.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className='dark:bg-[#1B1D35] border-r-2 border-r-slate-200 p-5 flex flex-col justify-center items-center gap-5 text-center'
                >
                  <div className='text-orange-500 text-5xl'>{item.title}+</div>
                  <p className='w-2/3'>{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='relative w-full flex-shrink-0 snap-start'>
          <BackgroundMission className='w-full h-full object-fill' />
        </div>
      </div>
    </section>
  );
};

export default ESMissionSection;
