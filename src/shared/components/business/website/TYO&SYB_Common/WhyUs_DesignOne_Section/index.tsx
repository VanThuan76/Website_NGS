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

const WhyUsDesignOneSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`w-screen overflow-hidden ${className}`}>
      <div className='mx-auto my-auto mt-10 grid w-full max-w-[1440px] grid-cols-1 items-start justify-between px-4 pb-4 md:grid-cols-2 md:gap-10 md:px-24'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='col-span-7 w-full grid-cols-7 !gap-0 !text-left md:!gap-8'
        />
        <div className='flex flex-col items-start justify-start gap-10'>
          {data.components.map((item, idx) => (
            <div
              key={idx}
              className='grid h-full w-full grid-cols-1 items-start justify-start gap-2 rounded-lg md:grid-cols-5 md:px-4 md:py-6'
            >
              <div className='relative h-[40px] w-[40px] overflow-hidden rounded-lg md:h-[70px] md:w-[70px]'>
                <PreImage src={item.image} alt={item.title} />
              </div>
              <div className='col-span-4 mt-2 flex w-full flex-col items-start justify-start gap-3'>
                <h1 className='text-xl font-medium md:text-3xl'>{item.title}</h1>
                <div className='flex w-full flex-col items-start justify-start gap-2'>
                  {splitTextToArrayByDoubleSlash(item.description || '').map((item: string, idx: number) => (
                    <p key={idx} className='text-xs font-normal md:text-lg'>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsDesignOneSection;
