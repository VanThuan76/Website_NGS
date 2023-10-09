import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import React from 'react';
import TitleSection from '@/components/common/customization/TitleSection';
type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ChallengeDesignFourSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data.section.code}
      className={`flex max-w-[1440px] overflow-hidden px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}  `}
    >
      <div className='mx-auto my-auto mt-10 flex w-full flex-col items-center justify-between gap-14'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='col-span-7 w-full grid-cols-7 !gap-3 !text-left md:col-span-5 md:grid-cols-12'
        />
        <div className='-mt-6 grid h-full w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-3'>
          {data.components.map((item, idx) => (
            <div
              key={idx}
              className='relative flex h-full w-full flex-col items-start justify-start gap-6 bg-[#f9f4ee] px-8 py-6'
            >
              <h1 className='text-center text-xl text-orange-500 md:text-5xl'>{item.title}</h1>
              <p className='text-xs text-[#29130F] md:text-xl'>{item.description}</p>
              <p className='text-xs text-[#444444] md:text-lg'>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeDesignFourSection;
