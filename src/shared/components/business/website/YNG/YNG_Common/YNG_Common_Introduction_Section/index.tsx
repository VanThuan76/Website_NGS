import React from 'react';
import YNG_IconCheck from '@/components/icon/YNG/YNG_ERP/YNG_IconCheck';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import { splitTextToArrayByDot } from '@/utils/functions/splitTextToArray';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const YNGCommonIntroductionSection = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`w-full bg-[#051C2C] ${className}`}>
      <div className='w-full flex flex-col justify-center items-center gap-8'>
        {data.components.map((item, idx) => (
          <div
            key={idx}
            className={`w-full grid grid-cols-2 justify-start items-start gap-5 px-8 py-10 lg:px-14 lg:py-24 ${
              idx % 2 !== 0 ? 'bg-[#F9F9F9]' : ''
            }`}
          >
            <div className='cols-span-1 w-full h-full flex flex-col justify-between items-start gap-5 text-white'>
              <div>
                <PreImage
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.title}
                  className='w-full h-full rounded-lg'
                />
                <p className='text-sm md:text-2xl'>{item.title}</p>
              </div>
              <div className='flex flex-col justify-start items-start'>
                {splitTextToArrayByDot(item.content).map((item: string, idx: number) => (
                  <div key={idx} className='flex justify-start items-start gap-4 pb-4'>
                    <YNG_IconCheck />
                    <p className='text-base md:text-lg'>{item}</p>
                  </div>
                ))}
              </div>
              <BtnCommon title='Khám phá ngay' cls='text-white bg-orange-500 p-4' />
            </div>
            <div className='relative w-full max-h-[500px] cols-span-1'>
              <PreImage
                src={item.video}
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

export default YNGCommonIntroductionSection;
