import React, { useState } from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import HOTestimonialContent from './HOTestimonialContent';
import { useTheme } from 'next-themes';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const HomeTestimonialSection = ({ data, className }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}>
      <div className='w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-3 justify-start items-start gap-10'>
        <div className='w-full col-span-1 flex flex-col justify-start items-start'>
          <TitleSection
            title='Lời chứng thực'
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full flex flex-col justify-start items-start gap-3'
          />
          <BtnCommon cls='mt-3 w-[140px] border border-orange-500' title='Đọc thêm' colorSvg={colorIcon} />
        </div>
        <div className='w-full col-span-2 max-h-[700px] overflow-hidden overflow-y-scroll flex flex-col lg:flex-row lg:mt-10 justify-start items-start gap-5'>
          <div className='pt-6 lg:pt-12 flex flex-col justify-start items-start gap-5 lg:gap-10'>
            {data.components!.map((item, idx) => {
              return (
                <div
                  key={idx}
                  // onMouseEnter={() => setIsHovered(item)}
                  // onMouseLeave={() => setIsHovered(item)}
                  className='w-full flex-shrink-0 snap-start cursor-pointer'
                >
                  <HOTestimonialContent data={item} />
                </div>
              );
            })}
          </div>
          <div className='flex flex-col justify-start items-start gap-5 lg:gap-10'>
            {data.components!.map((item, idx) => {
              return (
                <div
                  key={idx}
                  // onMouseEnter={() => setIsHovered(item)}
                  // onMouseLeave={() => setIsHovered(item)}
                  className='w-full flex-shrink-0 snap-start cursor-pointer'
                >
                  <HOTestimonialContent data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialSection;
1;
