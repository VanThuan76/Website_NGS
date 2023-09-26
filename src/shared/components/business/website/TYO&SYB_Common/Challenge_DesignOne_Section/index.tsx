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
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 overflow-hidden ${className}  `}
    >
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='w-full flex flex-col justify-start items-start gap-3'
      />
      {data.components.map((item, idx) => (
        <div
          key={idx}
          className='max-w-[1440px] grid grid-cols-2 gap-10 justify-between items-center px-12 bg-[#F9F4EE] rounded-lg -mt-6'
        >
          <div className='relative w-full mt-5 flex-shrink-0 snap-start -translate-x-16'>
            <PreImage
              src={item.image}
              width={1980}
              height={624}
              alt={item.title}
              className='w-full object-cover rounded-lg'
            />
          </div>
          <div className='w-full flex flex-col justify-start items-start gap-3'>
            <h1 className='text-xl md:text-3xl text-orange-500 font-semibold'>{item.title}</h1>
            <div className='flex flex-col justify-center items-center gap-2'>
              {splitTextToArrayByDoubleSlash(item.description).map((item: string, idx: number) => (
                <p key={idx} className='text-xs md:text-base'>
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
