import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import useBreakPoint from '@/hooks/useBreakPoint';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignFourSection = ({ title, data, className }: Props) => {
  const currentBreakPoint = useBreakPoint();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data.section.code}
      className={`max-w-[1440px] overflow-hidden px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 ${className}  `}
    >
      <div className='mx-auto my-auto mt-10 flex w-full flex-col items-center justify-between gap-16'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='col-span-7 w-full grid-cols-7 !gap-0 !text-left md:!text-center'
        />
        <div className='-mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-3'>
          {data.components.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start justify-start gap-3 pr-4 md:items-center md:justify-start ${
                currentBreakPoint !== 'sm' && 'border-card-overview-designFour-section'
              }`}
            >
              <div
                className={`relative ${
                  currentBreakPoint === 'sm' ? 'h-[44px] w-[44px]' : 'h-[60px] w-[60px]'
                } overflow-hidden rounded-lg`}
              >
                <PreImage src={item.image} alt={item.title} />
              </div>
              <h1 className='text-center text-xl font-semibold md:text-2xl'>{item.title}</h1>
              <div className='flex flex-col gap-2'>
                {item.description.split('//').map((word, idx) => (
                  <p className='my-auto text-xs md:text-base' key={idx}>
                    {word}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewDesignFourSection;
