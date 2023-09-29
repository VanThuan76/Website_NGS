import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const YNGDetailProductSection = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`w-full ${className}`}>
      <div className='w-full flex flex-col justify-center items-center gap-8'>
        {data.components.map((item, idx) => (
          <div
            key={idx}
            className={`w-full grid grid-cols-2 justify-start items-start gap-10 py-4 md:py-8 lg:py-10 xl:py-24 px-4 md:px-24 ${idx % 2 !== 0 ? 'bg-[#F9F9F9]' : ''}`}
          >
            <div className='cols-span-1 w-full max-h-[500px] flex flex-col justify-between items-start gap-10'>
              <div>
                <p className='text-sm md:text-2xl'>{item.title}</p>
                <h1 className='text-2xl md:text-4xl font-semibold'>{item.description}</h1>
              </div>
              <p className='mt-5'>{item.content}</p>
              <BtnCommon title='Khám phá ngay' cls='text-white bg-orange-500 p-4' />
            </div>
            <div className='relative w-full max-h-[500px] cols-span-1'>
              <PreImage
                src={item.image}
                width={1980}
                height={500}
                alt={item.title}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YNGDetailProductSection;
