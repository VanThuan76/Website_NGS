import BorderStyleOneLight from '@/components/icon/TYO&SYB_Common/BorderStyleOneLight';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
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
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:p-24 lg:px-32 xl:px-52 2xl:px-96 overflow-hidden ${className}  `}
    >
      <div className='relative w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <div className='relative w-[1440px] flex justify-between items-start gap-10'>
          <div className='flex flex-col justify-start items-start gap-4 z-30 w-[392px]'>
            <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
            <h1 className='text-2xl md:text-[40px] leading-[48px] font-medium'>{data.section.name}</h1>
          </div>
          <div className='flex flex-col z-30 gap-9 w-[604px]'>
            {splitTextToArrayByDoubleSlash(data.section.description).map((item: string, idx: number) => (
              <div key={idx} className='flex flex-col pb-4'>
                <p className='font-normal text-base'>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <BorderStyleOneLight className='absolute top-0 z-10' />
      </div>
    </section>
  );
};

export default OverviewDesignThreeSection;
