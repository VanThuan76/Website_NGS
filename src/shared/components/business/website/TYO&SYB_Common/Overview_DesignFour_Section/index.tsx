import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const OverviewDesignFourSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:p-24 2xl:px-96 overflow-hidden ${className}  `}
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center gap-16'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='text-center w-full flex flex-col justify-center items-center'
        />
        <div className='w-full grid grid-cols-3 gap-8 -mt-12'>
          {data.components.map((item, idx) => (
            <div key={idx} className='flex flex-col justify-start items-center gap-3'>
              <PreImage src={item.image} width={60} height={60} alt={item.title} className='mt-auto rounded-lg' />
              <h1 className='text-xl md:text-2xl font-semibold text-center'>{item.title}</h1>
              <div className='flex flex-col gap-2'>
                {item.description.split('//').map((word, idx) => (
                  <p className='my-auto text-center text-xs md:text-base' key={idx}>
                    {word}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewDesignFourSection;
