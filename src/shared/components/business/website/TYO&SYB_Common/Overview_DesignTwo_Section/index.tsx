import BorderStyleTwoLight from '@/components/icon/TYO&SYB_Common/BorderStyleTwoLight';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignTwoSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96 overflow-hidden ${className}  `}
    >
      <div className='w-full mx-auto my-auto mt-10 grid grid-cols-2 justify-between items-start'>
        <div className='flex flex-col justify-start items-start gap-2'>
          <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
          <h1 className='text-2xl md:text-4xl font-semibold'>{data.section.name}</h1>
          <p className='mt-5'>{data.section.description}</p>
        </div>
        <div className='max-w-[360px] grid grid-cols-2 gap-14 justify-self-end align-self-end'>
          {data.components.map((item, idx) => {
            let rotationAngle = (360 / data.components!.length) * idx;
            let scaleRevenue = '';
            if (idx === 2) {
              rotationAngle = 180;
              scaleRevenue = 'scale(-1, 1)';
            } else if (idx === 3) {
              rotationAngle = 90;
              scaleRevenue = 'scale(-1, 1)';
            }
            const transformStyle = `rotate(${rotationAngle}deg) ${scaleRevenue}`;
            return (
              <div className='relative max-w-[220px] max-h-[200px] flex justify-center items-center pt-8' key={idx}>
                <p className='w-full text-center z-30'>{item.content}</p>
                <BorderStyleTwoLight className='absolute top-0 z-10' style={{ transform: transformStyle }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OverviewDesignTwoSection;
