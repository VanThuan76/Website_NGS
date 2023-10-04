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
    <section id={data.section.code} className={`relative w-screen pb-4 md:pb-8 lg:pb-16 xl:pb-24 ${className}`}>
      <div className='mx-auto my-auto mt-10 flex flex-col items-center justify-between'>
        <div className='z-30 flex flex-col items-start justify-start gap-2 px-4 md:items-center md:justify-center md:px-24 lg:px-32 xl:px-52 2xl:px-96'>
          <p className='text-sm text-orange-500 md:text-2xl'>{title}</p>
          <h1 className='text-center text-2xl font-medium text-[#1C1C1C] md:text-4xl'>{data.section.name}</h1>
          <div className='flex flex-col items-center justify-center'>
            {splitTextToArrayByDoubleSlash(data.section.description).map((item: string, idx: number) => (
              <div key={idx} className='flex flex-col items-center justify-center gap-4 pb-4'>
                <p className='text-center text-base md:text-lg'>{item}</p>
                {idx !== splitTextToArrayByDoubleSlash(data.section!.description).length - 1 && <ThreeDotIcon />}
              </div>
            ))}
          </div>
        </div>
        <div className='relative mt-5 flex h-[550px] w-full flex-col items-center justify-between gap-5'>
          <PreImage src={data.section.image} layer={false} alt={data.section.name} />
        </div>
      </div>
    </section>
  );
};

export default OverviewDesignFiveSection;
