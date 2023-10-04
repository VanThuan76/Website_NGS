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
    <section
      id={data.section.code}
      className={`max-w-[1440px] relative pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 overflow-hidden ${className}  `}
    >
      <div className=' w-full mx-auto my-auto flex justify-between items-center'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='w-full grid-cols-7 col-span-7 md:grid-cols-12 md:col-span-5 !text-left !gap-2 z-30'
        />
        <BorderStyleOneLight className='absolute bottom-0 z-10 left-0 object-cover' />
      </div>
    </section>
  );
};

export default OverviewDesignThreeSection;
