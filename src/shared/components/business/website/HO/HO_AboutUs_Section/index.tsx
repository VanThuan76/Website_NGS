import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { PreImage } from '@/components/common/customization/PreImage';
import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomeAboutUsSection = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 mt-[120px] ${className}`}>
      <div className='mb-20 w-full flex justify-between items-start gap-20'>
        <div className='w-[60%] relative gap-5'>
          <PreImage
            src={data.section.image}
            height={330}
            width={650}
            layer={false}
            alt={data.section.name}
            className='w-full h-[330px] relative'
          />
        </div>
        <div className='w-1/2 p-5 flex flex-col justify-start items-start'>
          <TitleSection
            title='Về chúng tôi'
            name={data.section.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full flex flex-col justify-start items-start'
          />
          <BtnCommon title='Tìm hiểu thêm' />
        </div>
      </div>
      <div className='w-full flex justify-center items-start gap-5 mt-10 bg-transparent overflow-hidden'>
        {data.components.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`w-full dark:bg-[#1B1D35] ${
                data.components && data.components?.length - 1 !== idx && 'border-r-2 border-r-slate-200'
              } p-5 flex flex-col justify-center items-center gap-5 text-center`}
            >
              <div className='text-orange-500 text-5xl'>{item.title}</div>
              <p className='w-2/3'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeAboutUsSection;
1;
