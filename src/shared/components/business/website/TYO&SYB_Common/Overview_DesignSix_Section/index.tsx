import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignSixSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`max-w-[1440px] pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 overflow-hidden ${className}  `}
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='w-full grid-cols-7 col-span-7 text-center'
        />
        <div className='relative w-full h-[360px] object-cover overflow-hidden -mt-12 flex-shrink-0 snap-start'>
          <PreImage
            src={data.section.image}
            alt={data.section.name}
          />
        </div>
        <div className='w-full grid grid-cols-3 gap-5 mt-5'>
          {data.components.map((item, idx) => {
            return (
              <div key={idx} className='flex flex-col justify-center items-center gap-4 pb-4'>
                {splitTextToArrayByDoubleSlash(item.content).map((item: string, idx: number) => (
                  <p key={idx} className='text-xs md:text-base'>
                    {item}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OverviewDesignSixSection;
