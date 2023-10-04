import YNGDetailWhyChooseBackground from '@/components/icon/YNG/YNG_Detail/YNG_Detail_WhyChoose_Background';
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
      className={`relative w-screen px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24 ${className}  `}
    >
      <p className='text-sm text-orange-500 md:text-2xl'>{title}</p>
      <div className='mt-5 grid w-full grid-cols-1 items-start justify-between gap-10 md:grid-cols-2'>
        <div className='z-30 flex w-[80%] flex-col items-start justify-start gap-2'>
          <h1 className='text-2xl font-semibold md:text-4xl'>{data.section.name}</h1>
        </div>
        <div className='grid w-full grid-cols-1 items-start justify-start gap-5'>
          {data.components.map((item, idx) => (
            <div key={idx} className='flex w-full flex-col items-start justify-start gap-3'>
              <h1 className='text-xl font-semibold md:text-2xl'>{item.title}</h1>
              <p className='text-xs md:text-base'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <YNGDetailWhyChooseBackground className='absolute bottom-0 left-1/2 z-10 h-full w-full md:top-1/2' /> */}
    </section>
  );
};

export default YNGDetailWhyChooseSection;
