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

const ChallengeDesignOneSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`max-w-[1440px] overflow-hidden bg-[#F9F4EE] px-4 pb-4 md:bg-inherit md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}  `}
    >
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='col-span-7 grid-cols-7 !gap-0 !text-left md:col-span-5 md:grid-cols-12'
      />
      {data.components.map((item, idx) => (
        <div
          key={idx}
          className='grid w-full grid-cols-1 items-center justify-between gap-10 rounded-lg bg-[#F9F4EE] md:mt-3 md:grid-cols-2 md:px-12'
        >
          <div className='relative mt-5 h-[435px] w-full flex-shrink-0 snap-start overflow-hidden rounded-lg md:h-[624px] md:-translate-x-16'>
            <PreImage src={item.image} alt={item.title} objectPosition='center' />
          </div>
          <div className='flex w-full flex-col items-start justify-start gap-3'>
            <h1 className='text-xl font-semibold text-orange-500 md:text-3xl'>{item.title}</h1>
            <div className='flex flex-col items-center justify-center gap-2'>
              {splitTextToArrayByDoubleSlash(item.description).map((item: string, idx: number) => (
                <p key={idx} className='text-sm md:text-base'>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ChallengeDesignOneSection;
