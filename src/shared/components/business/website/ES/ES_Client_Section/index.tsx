import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ESClientItem from './ESClientItem';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ESClientSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 overflow-hidden ${className} `}
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='flex flex-col justify-start items-start gap-2 z-20 bg-white'
        />
       <div className='w-full grid grid-cols-1 gap-12'>
          <ESClientItem title={data.components[0].title} data={data.components.slice(0,6)}/>
          <ESClientItem title={data.components[6].title} data={data.components.slice(6,12)}/>
          <ESClientItem title={data.components[12].title} data={data.components.slice(12,24)}/>
       </div>
      </div>
    </section>
  );
};

export default ESClientSection;
