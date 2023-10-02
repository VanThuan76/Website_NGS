import React from 'react';
import BackgroundMission from '@/components/icon/ES/BackgroundMission';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import HightLightText from '@/utils/functions/HightLightText';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ESMissionSection = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`relative overflow-hidden pb-4 md:pb-8 lg:pb-10 xl:pb-24 p-4 md:p-24 ${className} bg-[#051C2C]`}>
      <div className='max-w-[1440px] mx-auto grid grid-cols-3 justify-between items-center gap-5 text-white'>
        <div className='col-span-3 md:col-span-2 my-36 md:my-0 w-full h-full flex flex-col justify-center items-start gap-10 z-20'>
          <div className='w-full flex flex-col justify-start items-start gap-3'>
            <h1 className='text-sm leading-5 md:text-2xl md:leading-6 font-medium text-orange-500'>{data.section.name}</h1>
            <HightLightText originalText={data.section.description} className='text-2xl md:text-[40px] leading-8 md:leading-[48px]' />
          </div>
          <div className='w-full flex flex-col lg:flex-row justify-center items-start gap-5 md:mt-16 bg-transparent overflow-hidden'>
            {data.components.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`w-full dark:bg-[#1B1D35] ${
                    data.components && data.components?.length - 1 !== idx && 'border-card-mission-es'
                  } md:p-5 flex flex-col justify-center items-center gap-3 md:gap-5 text-center`}
                >
                  <div className='text-orange-500 text-xl md:text-[40px]'>{item.title}</div>
                  <p className='text-sm md:text-base w-full'>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='col-span-1'></div>
        <div className='absolute top-0 -right-32'>
          <BackgroundMission className='w-full h-full object-cover' />
        </div>
      </div>
    </section>
  );
};

export default ESMissionSection;
