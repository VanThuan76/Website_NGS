import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import ESOrganizationalSystemItem from './ESOrganizationalSystemItem';

type Props = {
  title: string
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const ESOrganizationalSystemSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 ${className}`}
    >
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='w-full flex flex-col lg:flex-row xl:flex-row justify-between items-start gap-3'
      />
      <div className='max-w-[1440px] w-full h-full mx-auto my-auto mt-10 flex items-start justify-between lg:gap-10 xl:gap-10 overflow-hidden'>
        <AnimatePresence>
          <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
            {data &&
              data.components.map((item, idx) => {
                return <ESOrganizationalSystemItem key={idx} item={item} idx={idx} />;
              })}
          </div>
        </AnimatePresence>
        <PreImage
          src={data.section.image}
          height={500}
          width={500}
          layer={false}
          alt={data.section.name}
          className='hidden lg:block xl:block relative rounded-lg'
        />
      </div>
    </section>
  );
};

export default ESOrganizationalSystemSection;
