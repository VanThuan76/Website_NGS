import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
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
              <UseLinkRedirect sectionCode='FormYNG'>
                <BtnCommon title='Khám phá ngay' cls='text-white bg-orange-500 p-4' />
              </UseLinkRedirect>
            </div>
            <div className='relative h-[500px] col-span-1 rounded-lg overflow-hidden'>
              <PreImage
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YNGDetailProductSection;
