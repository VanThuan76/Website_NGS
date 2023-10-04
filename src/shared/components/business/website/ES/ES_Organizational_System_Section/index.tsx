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
    <section
      id={data.section.code}
      className={`max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}`}
    >
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='col-span-7 w-full grid-cols-7 !gap-8 !text-left md:col-span-5 md:grid-cols-12'
      />
      <div className='mx-auto my-auto grid h-full w-full grid-cols-1 items-start justify-between overflow-hidden md:mt-10 md:grid-cols-2 md:gap-10'>
        <div className='flex w-full flex-col items-center justify-center'>
          {data &&
            data.components.map((item, idx) => {
              return <ESOrganizationalSystemItem key={idx} item={item} idx={idx} />;
            })}
        </div>
        <div className='relative hidden h-[550px] overflow-hidden rounded-lg lg:block'>
          <PreImage src={data.section.image} layer={false} alt={data.section.name} />
        </div>
      </div>
    </section>
  );
};

export default ESOrganizationalSystemSection;
