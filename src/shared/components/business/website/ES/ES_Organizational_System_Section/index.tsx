import React from 'react';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import ESOrganizationalSystemItem from './ESOrganizationalSystemItem';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const ESOrganizationalSystemSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`max-w-[1440px] pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}>
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='w-full grid-cols-7 col-span-7 md:grid-cols-12 md:col-span-5 !gap-8 !text-left'
      />
      <div className='w-full h-full mx-auto my-auto md:mt-10 grid grid-cols-1 md:grid-cols-2 items-start justify-between md:gap-10 overflow-hidden'>
        <div className='w-full flex flex-col justify-center items-center'>
          {data &&
            data.components.map((item, idx) => {
              return <ESOrganizationalSystemItem key={idx} item={item} idx={idx} />;
            })}
        </div>
        <div className='hidden lg:block relative h-[550px] rounded-lg overflow-hidden'>
          <PreImage src={data.section.image} layer={false} alt={data.section.name} />
        </div>
      </div>
    </section>
  );
};

export default ESOrganizationalSystemSection;
