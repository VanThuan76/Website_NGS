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
    <section id={data.section.code} className={`w-screen bg-[#051C2C] ${className}`}>
      <div className='flex w-full flex-col items-center justify-center gap-8'>
        {data.components.map((item, idx) => (
          <div
            key={idx}
            className={`grid w-full grid-cols-1 items-start justify-start gap-12 px-8 py-10 md:grid-cols-2 lg:px-24 lg:py-20 ${
              idx % 2 !== 0 ? 'bg-[#F9F9F9]' : ''
            }`}
          >
            <div className='cols-span-1 flex h-full w-[518px] flex-col items-start justify-between text-white'>
              <div className='relative h-[80px] w-[176px] overflow-hidden rounded-lg'>
                <PreImage src={item.image} alt={item.title} />
              </div>
              <p className='text-sm leading-[40px] md:text-[32px]'>{item.title}</p>
              <div className='mb-8 flex flex-col items-start justify-start gap-2'>
                {splitTextToArrayByDot(item.content).map((item: string, idx: number) => (
                  <div key={idx} className='flex items-start justify-start gap-[18px]'>
                    <YNG_IconCheck />
                    <p className='text-base'>{item}</p>
                  </div>
                ))}
              </div>
              <UseLinkRedirect sectionCode='FormYNG'>
                <BtnCommon title='Khám phá ngay' cls='text-white bg-orange-500 p-4' />
              </UseLinkRedirect>
            </div>
            <div className='relative col-span-1 h-[431px] w-full overflow-hidden rounded-lg'>
              <PreImage src={item.video} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YNGCommonIntroductionSection;
