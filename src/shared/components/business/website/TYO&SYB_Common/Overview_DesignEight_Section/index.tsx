import TitleSection from '@/components/common/customization/TitleSection';
import BorderStyleOneLight from '@/components/icon/TYO&SYB_Common/BorderStyleOneLight';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignEightSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`relative w-screen overflow-hidden ${className}`}>
      <div className='mx-auto my-auto mt-10 flex w-full max-w-[1440px] flex-col items-center justify-between  px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='z-30 col-span-7 w-full grid-cols-7 !gap-5 text-center'
        />
        <BorderStyleOneLight className='absolute top-0 z-10 h-full w-full object-cover' />
      </div>
    </section>
  );
};

export default OverviewDesignEightSection;
