import { PreImage } from '@/components/common/customization/PreImage';
import ThreeDotIcon from '@/components/icon/TYO&SYB_Common/ThreeDotIcon';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignFiveSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`relative w-full pb-4 md:pb-8 lg:pb-16 xl:pb-24 ${className}`}>
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <div className='px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96 flex flex-col justify-start items-start md:justify-center md:items-center gap-2 z-30'>
          <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
          <h1 className='text-2xl md:text-4xl font-medium text-[#1C1C1C]'>{data.section.name}</h1>
          <div className='flex flex-col justify-center items-center'>
            {splitTextToArrayByDoubleSlash(data.section.description).map((item: string, idx: number) => (
              <div key={idx} className='flex flex-col justify-center items-center gap-4 pb-4'>
                <p className='text-base md:text-lg text-center'>{item}</p>
                {idx !== splitTextToArrayByDoubleSlash(data.section!.description).length - 1 && <ThreeDotIcon />}
              </div>
            ))}
          </div>
        </div>
        <div className='relative w-full h-auto flex flex-col justify-between items-center gap-5 mt-5'>
          <PreImage
            src={data.section.image}
            height={550}
            width={1980}
            layer={false}
            alt={data.section.name}
            className='w-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewDesignFiveSection;
