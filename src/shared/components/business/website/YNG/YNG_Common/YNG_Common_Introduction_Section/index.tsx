import React from 'react';
import YNG_IconCheck from '@/components/icon/YNG/YNG_ERP/YNG_IconCheck';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import { splitTextToArrayByDot } from '@/utils/functions/splitTextToArray';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';

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
            className={`w-full grid grid-cols-2 justify-start items-start gap-12 px-8 py-10 lg:px-24 lg:py-20 ${
              idx % 2 !== 0 ? 'bg-[#F9F9F9]' : ''
            }`}
          >
            <div className='cols-span-1 w-[518px] h-full flex flex-col justify-between items-start text-white'>
              <div className='relative w-[176px] h-[80px] rounded-lg overflow-hidden'>
                <PreImage src={item.image} alt={item.title} />
              </div>
              <p className='text-sm md:text-[32px] leading-[40px]'>{item.title}</p>
              <div className='flex flex-col gap-2 justify-start items-start'>
                {splitTextToArrayByDot(item.content).map((item: string, idx: number) => (
                  <div key={idx} className='flex justify-start items-start gap-[18px]'>
                    <YNG_IconCheck />
                    <p className='text-base'>{item}</p>
                  </div>
                ))}
              </div>
              <UseLinkRedirect sectionCode='FormYNG'>
                <BtnCommon title='Khám phá ngay' cls='text-white bg-orange-500 p-4' />
              </UseLinkRedirect>
            </div>
            <div className='relative w-full h-[431px] col-span-1 rounded-lg overflow-hidden'>
              <PreImage src={item.video} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YNGCommonIntroductionSection;
