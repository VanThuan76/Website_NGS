import BorderStyleOneLight from '@/components/icon/TYO&SYB_Common/BorderStyleOneLight';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignThreeSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96 overflow-hidden ${className}  `}
    >
      <div className='relative w-full mx-auto my-auto mt-10 flex justify-between items-start gap-10'>
        <div className='w-full flex flex-col justify-start items-start gap-2 z-30'>
          <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
          <h1 className='text-2xl md:text-4xl font-semibold'>{data.section.name}</h1>
        </div>
        <p className='w-full z-30'>{data.section.description}</p>
        <BorderStyleOneLight className='absolute top-0 left-0 z-10' />
      </div>
    </section>
  );
};

export default OverviewDesignThreeSection;
