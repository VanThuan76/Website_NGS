import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const WhyUsDesignOneSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`pb-4 px-4 md:px-24 overflow-hidden ${className}  `}>
      <div className='w-full mx-auto my-auto mt-10 grid grid-cols-2 justify-between items-start gap-10'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='w-full flex flex-col justify-start items-start gap-3'
        />
        <div className='flex flex-col justify-start items-start gap-10'>
          {data.components.map((item, idx) => (
            <div key={idx} className='w-full h-full flex justify-start items-start px-4 py-6 gap-2 rounded-lg'>
              <PreImage src={item.image} width={70} height={70} alt={item.title} className='rounded-lg' />
              <div className='w-full flex flex-col justify-start items-start gap-3'>
                <h1 className='text-xl md:text-3xl text-center font-medium'>{item.title}</h1>
                <p className='text-xs md:text-lg font-normal'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsDesignOneSection;
