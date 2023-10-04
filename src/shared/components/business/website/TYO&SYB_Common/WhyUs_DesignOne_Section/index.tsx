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
    <section id={data.section.code} className={`max-w-[1440px] pb-4 px-4 md:px-24 overflow-hidden ${className}  `}>
      <div className='w-full mx-auto my-auto mt-10 grid grid-cols-1 md:grid-cols-2 justify-between items-start md:gap-10'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='w-full grid-cols-7 col-span-7 !text-left !gap-0 md:!gap-8'
        />
        <div className='flex flex-col justify-start items-start gap-10'>
          {data.components.map((item, idx) => (
            <div key={idx} className='w-full h-full grid grid-cols-1 md:grid-cols-5 justify-start items-start md:px-4 md:py-6 gap-2 rounded-lg'>
              <div className='relative w-[40px] md:w-[70px] h-[40px] md:h-[70px] rounded-lg overflow-hidden'>
                <PreImage src={item.image} alt={item.title} />
              </div>
              <div className='col-span-4 w-full flex flex-col justify-start items-start gap-3 mt-2'>
                <h1 className='text-xl md:text-3xl font-medium'>{item.title}</h1>
                <div className='w-full flex flex-col justify-start items-start gap-2'>
                  {splitTextToArrayByDoubleSlash(item.description || '').map((item: string, idx: number) => (
                    <p key={idx} className='text-xs md:text-lg font-normal'>
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
