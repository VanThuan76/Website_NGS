import React from 'react';
import BackgroundMission from '@/components/icon/ES/BackgroundMission';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import HightLightText from '@/utils/functions/HightLightText';
import useBreakPoint from '@/hooks/useBreakPoint';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ESMissionSection = ({ data, className }: Props) => {
  const currentBreakPoint = useBreakPoint();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`relative w-screen overflow-hidden p-4 pb-4 md:p-24 md:pb-8 lg:pb-10 xl:pb-24 ${className} bg-[#051C2C]`}
    >
      <div className='mx-auto grid max-w-[1440px] grid-cols-3 items-center justify-between gap-5 text-white'>
        <div className='z-20 col-span-3 my-36 flex h-full w-full flex-col items-start justify-center gap-10 md:col-span-2 md:my-0'>
          <div className='flex w-full flex-col items-start justify-start gap-3'>
            <h1 className='text-sm font-medium leading-5 text-orange-500 md:text-2xl md:leading-6'>
              {data.section.name}
            </h1>
            <HightLightText
              originalText={data.section.description}
              className='text-2xl leading-8 md:text-[40px] md:leading-[48px]'
            />
          </div>
          <div className='flex w-full flex-col items-start justify-between gap-5 overflow-hidden bg-transparent md:mt-16 lg:flex-row'>
            {data.components.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`h-[140px] w-full dark:bg-[#1B1D35] ${
                    (data.components &&
                      data.components?.length - 1 !== idx &&
                      currentBreakPoint !== 'sm' &&
                      'border-card-mission-es-right') ||
                    (data.components &&
                      data.components?.length - 1 !== idx &&
                      currentBreakPoint === 'sm' &&
                      'border-card-mission-es-bottom')
                  } flex flex-col items-center justify-start gap-3 text-center md:gap-5`}
                >
                  <div className='text-[40px] text-orange-500'>{item.title}</div>
                  <p className='w-full text-sm md:text-base'>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='col-span-1'></div>
        <div className='absolute -right-32 top-0'>
          <BackgroundMission className='h-full w-full object-cover' />
        </div>
      </div>
    </section>
  );
};

export default ESMissionSection;
