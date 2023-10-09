import TitleSection from '@/components/common/customization/TitleSection';
import BorderStyleOneLight from '@/components/icon/TYO&SYB_Common/BorderStyleOneLight';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignThreeSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`relative w-screen overflow-hidden ${className}  `}>
      <div className='mx-auto my-auto flex max-w-[1440px] items-center justify-between px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='z-30 col-span-7 w-full grid-cols-7 !gap-14 !text-left md:col-span-5 md:grid-cols-12'
        />
        <BorderStyleOneLight className='absolute bottom-0 left-0 z-10 h-full w-full object-cover' />
      </div>
    </section>
  );
};

export default OverviewDesignThreeSection;
