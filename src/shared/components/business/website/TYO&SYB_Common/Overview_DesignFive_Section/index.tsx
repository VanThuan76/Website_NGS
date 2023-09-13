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
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96 overflow-hidden ${className}  `}
    >
      <div className='relative w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <div className='flex flex-col justify-start items-start md:justify-center md:items-center gap-2 z-30'>
          <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
          <h1 className='text-2xl md:text-4xl font-semibold'>{data.section.name}</h1>
          <p className='text-center mt-5'>{data.section.description}</p>
        </div>
        {data.components.map((item, idx) => (
          <div className='w-full flex flex-col justify-between items-center gap-5 mt-5'>
            <ThreeDotIcon />
            <p>{item.content}</p>
            <PreImage src={item.image} width={70} height={70} alt={item.title} className='rounded-lg' />
          </div>
        ))}
        <BorderStyleOneLight className='absolute bottom-0 z-10' />
      </div>
    </section>
  );
};

export default OverviewDesignFiveSection;
