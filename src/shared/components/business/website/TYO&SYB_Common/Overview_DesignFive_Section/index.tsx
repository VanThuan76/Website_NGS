import { PreImage } from '@/components/common/customization/PreImage';
import BorderStyleOneLight from '@/components/icon/TYO&SYB_Common/BorderStyleOneLight';
import ThreeDotIcon from '@/components/icon/TYO&SYB_Common/ThreeDotIcon';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignFiveSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`relative w-full${className}`}>
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <div className='px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96 flex flex-col justify-start items-start md:justify-center md:items-center gap-2 z-30'>
          <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
          <h1 className='text-2xl md:text-4xl font-semibold'>{data.section.name}</h1>
          <p className='text-center'>{data.section.description}</p>
        </div>
        <div className='relative w-full h-auto flex flex-col justify-between items-center gap-5 mt-5'>
          <PreImage
            src={data.section.image}
            height={550}
            width={1980}
            layer={false}
            alt={data.section.name}
            className='w-full '
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewDesignFiveSection;
