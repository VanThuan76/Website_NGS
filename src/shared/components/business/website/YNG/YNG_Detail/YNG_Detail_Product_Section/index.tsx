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
    <section id={data.section.code} className={`w-screen ${className}`}>
      <div className='flex w-full flex-col items-center justify-center gap-8'>
        {data.components.map((item, idx) => (
          <div
            key={idx}
            className={`grid w-full grid-cols-1 items-start justify-start gap-10 px-4 py-4 md:grid-cols-2 md:px-24 md:py-8 lg:py-10 xl:py-24 ${
              idx % 2 !== 0 ? 'bg-[#F9F9F9]' : ''
            }`}
          >
            <div className='cols-span-1 flex max-h-[500px] w-full flex-col items-start justify-between gap-10'>
              <div className='space-y-2 text-[#313131]'>
                <p className='text-sm opacity-60 md:text-2xl'>{item.title}</p>
                <h1 className='text-2xl font-semibold md:text-4xl'>{item.description}</h1>
              </div>
              <p className='mt-5'>{item.content}</p>
              <UseLinkRedirect sectionCode='FormYNG'>
                <BtnCommon title='Khám phá ngay' cls='text-white bg-orange-500 p-4' />
              </UseLinkRedirect>
            </div>
            <div className='relative col-span-1 h-[500px] overflow-hidden rounded-lg'>
              <PreImage src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YNGDetailProductSection;
