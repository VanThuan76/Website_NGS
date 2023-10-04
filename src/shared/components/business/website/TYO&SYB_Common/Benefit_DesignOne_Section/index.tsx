import { PreImage } from '@/components/common/customization/PreImage';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const BenefitDesignOneSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`w-screen overflow-hidden bg-[#051C2C] px-4 pb-4 text-white md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}  `}
    >
      <div className='mx-auto my-auto mt-10 flex w-full flex-col items-center justify-between'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <p className='text-sm text-orange-500 md:text-2xl'>{title}</p>
          <h1 className='w-full text-center text-2xl font-medium md:w-[70%] md:text-4xl'>{data.section.name}</h1>
          <p className='text-center text-sm font-medium not-italic md:text-left md:text-base'>
            {data.section.description}
          </p>
        </div>
        <div className='mt-14 grid w-full grid-cols-1 items-center justify-center gap-24 md:grid-cols-4'>
          {data.components.map((item, idx) => (
            <div
              key={idx}
              className={`flex max-w-[250px] flex-col items-center justify-between gap-4 ${
                data.components && data.components?.length - 1 !== idx && 'border-card-benefit-designOne-section pr-8'
              }`}
            >
              <div className='relative h-[70px] w-[70px] overflow-hidden rounded-lg'>
                <PreImage src={item.image} alt={item.title} />
              </div>
              <h1 className='text-center text-lg font-semibold md:text-2xl'>{item.title}</h1>
              <p className='text-center text-xs md:text-base'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitDesignOneSection;
