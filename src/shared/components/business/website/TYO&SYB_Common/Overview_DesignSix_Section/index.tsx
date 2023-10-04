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
      className={`max-w-[1440px] overflow-hidden px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}  `}
    >
      <div className='mx-auto my-auto mt-10 flex w-full flex-col items-center justify-between'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='col-span-7 w-full grid-cols-7 text-center'
        />
        <div className='relative -mt-12 h-[360px] w-full flex-shrink-0 snap-start overflow-hidden object-cover'>
          <PreImage src={data.section.image} alt={data.section.name} />
        </div>
        <div className='mt-5 grid w-full grid-cols-3 gap-5'>
          {data.components.map((item, idx) => {
            return (
              <div key={idx} className='flex flex-col items-center justify-center gap-4 pb-4'>
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
