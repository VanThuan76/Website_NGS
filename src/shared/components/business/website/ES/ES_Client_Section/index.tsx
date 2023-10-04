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
      className={`mx-auto my-auto w-screen overflow-hidden px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className} `}
    >
      <div className='mx-auto mt-10 flex max-w-[1440px] flex-col items-center justify-between'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='z-20 flex flex-col items-start justify-start gap-2 bg-white'
        />
        <div className='grid w-full grid-cols-1 gap-12'>
          <ESClientItem title={data.components[0].title} data={data.components.slice(0, 6)} />
          <ESClientItem title={data.components[6].title} data={data.components.slice(6, 12)} />
          <ESClientItem title={data.components[12].title} data={data.components.slice(12, 24)} />
        </div>
      </div>
    </section>
  );
};

export default ESClientSection;
