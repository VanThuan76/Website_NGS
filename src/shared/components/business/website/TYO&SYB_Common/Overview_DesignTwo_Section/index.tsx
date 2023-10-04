import TitleSection from '@/components/common/customization/TitleSection';
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
      className={`max-w-[1440px] overflow-hidden px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}  `}
    >
      <div className='mx-auto my-auto mt-10 grid w-full grid-cols-2 items-start justify-between'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='col-span-7 w-full grid-cols-7 !text-left'
        />
        <div className='align-self-end grid max-w-[360px] grid-cols-2 gap-14 justify-self-end'>
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
              <div className='relative flex max-h-[200px] max-w-[220px] items-center justify-center pt-8' key={idx}>
                <p className='z-30 w-full text-center'>{item.content}</p>
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
